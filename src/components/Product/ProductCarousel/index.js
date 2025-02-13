import {colors} from '@constants/colors';
import React from 'react';
import {StyleSheet, View, Animated, Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image';

const {width: ScreenWidth} = Dimensions.get('window');

const _containerWidth = ScreenWidth - 32;
const _imageWidth = _containerWidth;
const _spacing = 0;

const ProductImageCarousel = ({images}) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const renderPhoto = ({item, index}) => {
    const inputRange = [
      (index - 1) * (_imageWidth + _spacing),
      index * (_imageWidth + _spacing),
      (index + 1) * (_imageWidth + _spacing),
    ];

    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.9, 1, 0.9],
      extrapolate: 'clamp',
    });

    return (
      <Animated.View style={[styles.imageContainer, {transform: [{scale}]}]}>
        <FastImage
          source={{uri: item}}
          resizeMode="contain"
          style={styles.image}
        />
      </Animated.View>
    );
  };

  const renderPaginationDots = () => {
    return (
      <View style={styles.paginationContainer}>
        {images?.map((_, index) => {
          const dotWidth = scrollX.interpolate({
            inputRange: [
              (index - 1) * _imageWidth,
              index * _imageWidth,
              (index + 1) * _imageWidth,
            ],
            outputRange: [6, 12, 6],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={index}
              style={[styles.paginationDot, {width: dotWidth}]}
            />
          );
        })}
      </View>
    );
  };

  if (!images?.length) return null;

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Animated.FlatList
          data={images}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={renderPhoto}
          snapToInterval={_imageWidth}
          decelerationRate="fast"
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
        />
        {renderPaginationDots()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    marginBottom: 16,
  },
  container: {
    height: _containerWidth * 0.8,
    backgroundColor: colors.lightGray,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.whitePink,
  },
  imageContainer: {
    width: _containerWidth,
    height: _containerWidth * 0.8,
    padding: 8,
    backgroundColor: colors.lightPink,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  paginationDot: {
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.white,
    marginHorizontal: 4,
  },
});

export default ProductImageCarousel;

import React from 'react';
import {StyleSheet, View, Animated} from 'react-native';
import FastImage from 'react-native-fast-image';
import {imageSlides, Screen} from '@constants/common';

const _imageWidth = Screen.width * 0.92;
const _imageHeight = _imageWidth * 0.32;
const _spacing = 12;

const DashboardCarousel = () => {
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

    const shadowOpacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.2, 0.4, 0.2],
      extrapolate: 'clamp',
    });

    return (
      <Animated.View
        style={[
          styles.imageContainer,
          {
            transform: [{scale}],
            shadowOpacity,
          },
        ]}>
        <FastImage
          source={item.imgURL}
          resizeMode="cover"
          style={styles.image}
        />
      </Animated.View>
    );
  };

  const renderPaginationDots = () => {
    const dotWidth = 6;
    const dotSpacing = 6;

    return (
      <View style={styles.paginationContainer}>
        {imageSlides.map((_, index) => {
          const inputRange = [
            (index - 1) * (_imageWidth + _spacing),
            index * (_imageWidth + _spacing),
            (index + 1) * (_imageWidth + _spacing),
          ];

          const dotScale = scrollX.interpolate({
            inputRange,
            outputRange: [1, 1.5, 1],
            extrapolate: 'clamp',
          });

          const dotOpacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.4, 1, 0.4],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={index}
              style={[
                styles.paginationDot,
                {
                  width: dotWidth,
                  marginHorizontal: dotSpacing / 2,
                  transform: [{scale: dotScale}],
                  opacity: dotOpacity,
                },
              ]}
            />
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={imageSlides}
        keyExtractor={item => item.id.toString()}
        horizontal
        contentContainerStyle={styles.flatListContent}
        style={styles.flatList}
        snapToInterval={_imageWidth + _spacing}
        decelerationRate="fast"
        renderItem={renderPhoto}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
      />
      {renderPaginationDots()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 28,
  },
  flatListContent: {
    gap: _spacing,
  },
  flatList: {
    flexGrow: 0,
  },
  imageContainer: {
    width: _imageWidth,
    height: _imageHeight,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 10,
    elevation: 5,
  },
  image: {
    flex: 1,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    columnGap: 4,
  },
  paginationDot: {
    height: 6,
    borderRadius: 8,
    backgroundColor: '#333',
  },
});

export default DashboardCarousel;

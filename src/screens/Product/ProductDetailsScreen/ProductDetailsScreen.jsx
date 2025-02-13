import {useState, useRef, useCallback} from 'react';
import {Text, View, ScrollView, Animated} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';

import ContainerLayout from '@components/common/ContainerLayout';
import ButtonInput from '@components/common/ButtonInput';
import ProductImageCarousel from '@components/Product/ProductCarousel';

import {formattedMoney} from '@helper/index';
import {colors} from '@constants/colors';
import {styles} from './styles';

const ProductDetailsScreen = ({route}) => {
  const product = route.params;
  const navigation = useNavigation();
  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  const [quantity, setQuantity] = useState(0);
  const scrollY = useRef(new Animated.Value(0)).current;

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => quantity > 0 && setQuantity(quantity - 1);

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const backButtonOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const wishlistButtonOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  return (
    <ContainerLayout paddingEnabled={false} noScroll bgColor={colors.white}>
      <Animated.View style={[styles.header, {opacity: headerOpacity}]}>
        <ButtonInput
          icon="ChevronLeft"
          btnCtnStyle={styles.backButton}
          iconColor={colors.black}
          iconSize={24}
          onPress={goBack}
        />
        <Text style={styles.headerTitle} numberOfLines={1}>
          {product?.title}
        </Text>
      </Animated.View>

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}>
        <View style={styles.imageContainer}>
          <FastImage
            source={{
              uri: product?.thumbnail,
              priority: 'high',
            }}
            style={styles.image}
            resizeMode="cover"
          />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.8)']}
            style={styles.gradient}
          />

          <View style={styles.imageOverlay}>
            <Text style={styles.title}>{product?.title}</Text>
            <View style={styles.priceBadge}>
              <Text style={styles.price}>{formattedMoney(product?.price)}</Text>
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.actionRow}>
            <View style={styles.ratingContainer}>
              <FastImage
                source={require('@assets/icons/Rating/star.png')}
                style={styles.icon}
              />
              <Text style={styles.rating}>{product?.rating}</Text>
            </View>
            <View style={styles.quantityContainer}>
              <ButtonInput
                icon="Minus"
                btnCtnStyle={styles.quantityButton}
                iconColor={colors.white}
                iconSize={20}
                onPress={handleDecrement}
              />
              <Text style={styles.quantity}>{quantity}</Text>
              <ButtonInput
                icon="Plus"
                btnCtnStyle={styles.quantityButton}
                iconColor={colors.white}
                iconSize={20}
                onPress={handleIncrement}
              />
            </View>
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Tags</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.tagsContainer}>
                {product?.tags?.map((tag, index) => (
                  <View style={styles.tag} key={index}>
                    <Text style={styles.tagText}>{tag}</Text>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>

          <ProductImageCarousel images={product?.images} />

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.sectionText}>{product?.description}</Text>
          </View>

          <View style={styles.additionalInfoContainer}>
            {[
              {label: 'Brand', value: product?.brand},
              {label: 'SKU', value: product?.sku},
              {label: 'Weight', value: `${product?.weight} oz`},
              {
                label: 'Dimensions',
                value: product?.dimensions
                  ? `${product.dimensions.width}x${product.dimensions.height}x${product.dimensions.depth} cm`
                  : 'N/A',
              },
              {label: 'Warranty', value: product?.warrantyInformation},
              {label: 'Shipping', value: product?.shippingInformation},
              {label: 'Availability', value: product?.availabilityStatus},
              {label: 'Return Policy', value: product?.returnPolicy},
              {label: 'Minimum Order', value: product?.minimumOrderQuantity},
            ].map((info, index) => (
              <View style={styles.infoRow} key={index}>
                <Text style={styles.infoLabel}>{info.label}</Text>
                <Text style={styles.infoValue}>{info.value || 'N/A'}</Text>
              </View>
            ))}
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>
              Reviews ({product?.reviews?.length})
            </Text>
            {product?.reviews?.map((review, index) => (
              <View key={index} style={styles.reviewCard}>
                <View style={styles.reviewHeader}>
                  <Text style={styles.reviewName}>{review.reviewerName}</Text>
                  <View style={styles.reviewRating}>
                    <FastImage
                      source={require('@assets/icons/Rating/yellow_star.png')}
                      style={styles.smallStar}
                    />
                    <Text style={styles.reviewRatingText}>{review.rating}</Text>
                  </View>
                </View>
                <Text style={styles.reviewComment}>{review.comment}</Text>
              </View>
            ))}
          </View>
        </View>
      </Animated.ScrollView>

      <View style={styles.footer}>
        <View style={styles.footerLeftContainer}>
          <Animated.View
            style={{
              opacity: backButtonOpacity,
              zIndex: backButtonOpacity.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
                extrapolate: 'clamp',
              }),
            }}>
            <ButtonInput
              btnCtnStyle={styles.footerBackButton}
              icon="ChevronLeft"
              iconColor={colors.white}
              iconSize={24}
              onPress={() => {
                goBack();
              }}
            />
          </Animated.View>
          <Animated.View
            style={[styles.wishlistButton, {opacity: wishlistButtonOpacity}]}>
            <ButtonInput
              btnCtnStyle={styles.footerBackButton}
              icon="Heart"
              iconColor={colors.white}
              iconSize={24}
              onPress={() => {
                console.log('Wishlist button pressed');
              }}
            />
          </Animated.View>
        </View>

        <ButtonInput
          btnCtnStyle={styles.addToCartButton}
          icon="ShoppingCart"
          iconColor="white"
          iconSize={24}
          btnTxt="Add to Cart"
          btnTxtStyle={styles.addToCartText}
          onPress={() => navigate('Cart')}
        />
      </View>
    </ContainerLayout>
  );
};

export default ProductDetailsScreen;

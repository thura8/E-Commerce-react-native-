import {StyleSheet} from 'react-native';
import {colors} from '@constants/colors';
import fonts from '@assets/fonts';

export const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: -8,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: colors.lightPink,
    zIndex: 1000,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
    flexDirection: 'row',
  },
  backButton: {
    backgroundColor: 'transparent',
    padding: 0,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.black,
    flex: 1,
  },

  imageContainer: {
    height: 300,
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '50%',
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  title: {
    fontFamily: fonts.poppinsReg,
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 8,
  },
  priceBadge: {
    backgroundColor: colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  price: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
  content: {
    backgroundColor: colors.whitePink,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 4,
  },
  rating: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.black,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontFamily: fonts.fredokaLight,
    fontSize: 20,
    fontWeight: '700',
    color: colors.black,
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 15,
    color: colors.gray,
    lineHeight: 20,
  },
  tagsContainer: {
    flexDirection: 'row',
  },
  tag: {
    backgroundColor: colors.lightPink,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
  },
  tagText: {
    color: colors.purple,
    fontSize: 14,
  },
  additionalInfoContainer: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  infoLabel: {
    fontSize: 14,
    color: colors.gray,
  },
  infoValue: {
    fontSize: 14,
    color: colors.black,
    fontWeight: '500',
  },
  reviewCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  reviewName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.black,
  },
  reviewRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  smallStar: {
    width: 20,
    height: 20,
    marginRight: 4,
  },
  reviewRatingText: {
    fontSize: 16,
    color: colors.black,
  },
  reviewComment: {
    fontSize: 15,
    color: colors.gray,
    lineHeight: 20,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.lightGray,
    zIndex: 1000,
  },
  footerLeftContainer: {
    position: 'relative',
    width: 50,
    height: 50,
  },
  wishlistButton: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  footerBackButton: {
    backgroundColor: colors.hotPink,
    borderRadius: 30,
    padding: 12,
  },
  addToCartButton: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: colors.hotPink,

    borderRadius: 30,
    paddingVertical: 12,
    marginLeft: 12,
    paddingLeft: 12,
  },
  addToCartText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 8,
  },
});

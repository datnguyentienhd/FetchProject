import { StyleSheet, Platform, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blackContainer: {
    paddingHorizontal: 24,
    backgroundColor: 'black',
    height: 428
  },
  titleHeader: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 32,
    lineHeight: 40,
    marginTop: 16
  },
  subTitleHeader: {
    color: '#B5B5BE',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 8
  },
  BGcontainer: {
    width: '100%',
    height: '100%',
    padding: 24
  },
  dynamicContainer: {
    backgroundColor: '#FFFFFF',
    width: windowWidth - 32,
    height: 416,
    top: 252,
    left: 16,
    position: 'absolute',
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.04
  },
  dynamicTextHeader: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 24,
    color: '#B5B5BE'
  },
  availCoinText: {
    fontSize: 48,
    fontWeight: '400',
    lineHeight: 56,
    color: '#171725',
    marginTop: 8
  },
  dynamicSubText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: '#92929D',
    marginTop: 34
  },
  viewTierBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16
  },
  viewTierText: {
    color: '#0062FF',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    marginRight: 9,
  },
  myCouponsBtn: {
    backgroundColor: '#171725',
    borderRadius: 4,
    height: 60,
    marginTop: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  myCouponsText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24
  },
  updatedText: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: '#B5B5BE',
    textAlign: 'center',
    marginTop: 16
  },
  titleSection: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 24,
    color: '#171725',
    paddingHorizontal: 24
  },
  slideItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    width: 200,
    height: 240,
    marginLeft: 24,
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: 5
    },
    shadowRadius: 4,
    shadowOpacity: 0.05
  },
  inforItem: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    paddingHorizontal: 16,
    paddingTop: 8,
    color: '#92929D'
  },
  coinTextContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  coinText: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
  },
  insufficientText: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: '#0062FF',
    paddingHorizontal: 16,
    marginTop: 8
  }
});

export default styles;

import {StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: width * 0.04,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: width * 0.2,
  },
  btnsection: {
    width: width * 0.11,
    height: width * 0.11,
    borderWidth: 1,
    borderRadius: width * 0.1,
    borderColor: '#BEBAB3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnicon: {
    fontSize: RFValue(20),
  },
  textheader: {
    flex: 1,
    fontSize: RFValue(24),
    fontFamily: 'Rubik-Medium',
    color: '#3C3A36',
    marginHorizontal: width * 0.25,
  },
  headercontent: {
    alignItems: 'center',
  },
  text1: {
    fontSize: RFValue(24),
    fontFamily: 'Inter-Regular',
    color: '#3C3A36',
  },
  text2: {
    fontSize: RFValue(14),
    fontFamily: 'Inter-Light',
    color: '#78746D',
    marginVertical: width * 0.03,
  },
  topbar: {
    flexDirection: 'row',
  },
  lessonsection: {
    width: width * 0.3,
    height: width * 0.12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F2EE',
    borderTopLeftRadius: width * 0.05,
    borderBottomLeftRadius: width * 0.05,
  },
  testsection: {
    width: width * 0.3,
    height: width * 0.12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F2EE',
    marginHorizontal: width * 0.01,
  },
  discussection: {
    width: width * 0.3,
    height: width * 0.12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F2EE',
    borderTopRightRadius: width * 0.05,
    borderBottomRightRadius: width * 0.05,
  },
  texttopbar: {
    fontSize: RFValue(16),
    fontFamily: 'Inter-Light',
  },
  imgsection: bgcolor => ({
    backgroundColor: bgcolor,
    borderRadius: width * 0.05,
    marginVertical: width * 0.05,
  }),
  img: {
    width: width * 0.91,
    height: width * 0.5,
    marginVertical: width * 0.02,
  },
  btn: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginHorizontal: width * 0.77,
    marginBottom: width * 0.03,
  },
  btnborder: {
    width: width * 0.1,
    height: width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: width * 0.1,
  },
  icon: {
    fontSize: RFValue(16),
    color: '#5BA092',
  },
  desctitle: {
    fontSize: RFValue(20),
    color: '#3C3A36',
    fontFamily: 'Rubik-Medium',
    marginBottom: width * 0.02,
  },
  desc: {
    fontSize: RFValue(14),
    color: '#78746D',
    fontFamily: 'Rubik-Regular',
  },
  banner: {
    // Set background color for banners to be fully functional
    backgroundColor: '#000000',
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
});

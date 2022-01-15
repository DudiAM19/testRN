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
    alignItems: 'center',
  },
  left: {
    flex: 1,
  },
  iconsection: {
    width: width * 0.15,
    height: width * 0.15,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width * 0.1,
    borderColor: '#BEBAB3',
  },
  iconheader: {
    fontSize: RFValue(25),
    color: '#200E32',
  },
  texthello: {
    color: '#3C3A36',
    fontSize: RFValue(16),
    fontFamily: 'Rubik-Regular',
  },
  textname: {
    fontSize: RFValue(32),
    color: '#333333',
    marginTop: width * 0.02,
    fontFamily: 'Rubik-SemiBold',
  },
  inputsection: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#BEBAB3',
    borderRadius: width * 0.03,
    height: width * 0.15,
    paddingHorizontal: width * 0.04,
    marginVertical: width * 0.04,
  },
  input: {
    flex: 1,
    fontFamily: 'Rubik-Regular',
  },
  iconinput: {
    fontSize: RFValue(25),
    color: '#3C3A36',
  },
  searchcategory: {
    flexDirection: 'row',
    marginBottom: width * 0.05,
  },
  categorysection: {
    height: width * 0.07,
    backgroundColor: '#65AAEA',
    marginHorizontal: width * 0.01,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width * 0.1,
    paddingHorizontal: width * 0.03,
  },
  textcategory: {
    color: 'white',
    fontFamily: 'Rubik-Regular',
    fontSize: RFValue(12),
  },
  textcategorytitle: {
    fontSize: RFValue(14),
    fontFamily: 'Rubik-Regular',
  },
  containercontent: {
    borderWidth: 1,
    borderRadius: width * 0.05,
    borderColor: '#BEBAB3',
    marginVertical: width * 0.04,
  },
  imgsection: bgcolor => ({
    justifyContent: 'center',
    backgroundColor: bgcolor,
    borderTopRightRadius: width * 0.05,
    borderTopLeftRadius: width * 0.05,
  }),
  img: {
    width: width * 0.91,
    height: width * 0.5,
  },
  btnprice: {
    height: width * 0.07,
    width: width * 0.15,
    backgroundColor: '#65AAEA',
    borderRadius: width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: width * 0.72,
    marginVertical: width * 0.03,
  },
  textbtn: {
    color: 'white',
    fontFamily: 'Rubik-Regular',
  },
  descsection: {
    margin: width * 0.03,
  },
  texttime: {
    color: '#5BA092',
    fontFamily: 'Rubik-Medium',
    fontSize: RFValue(12),
  },
  texttitle: {
    color: '#3C3A36',
    fontFamily: 'Rubik-Medium',
    fontSize: RFValue(24),
  },
  textdesc: {
    color: '#3C3A36',
    fontFamily: 'Rubik-Regular',
    fontSize: RFValue(14),
  },
});

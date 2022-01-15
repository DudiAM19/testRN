import React, {FC} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AppLovinMAX from 'react-native-applovin-max';

const BANNER_AD_UNIT_ID = Platform.select({
  android: 'ca-app-pub-9731910268127240/2804245860',
});
// function initializeBannerAds() {
//   // Banners are automatically sized to 320x50 on phones and 728x90 on tablets
//   // You may use the utility method `AppLovinMAX.isTablet()` to help with view sizing adjustments
//   AppLovinMAX.createBanner(
//     BANNER_AD_UNIT_ID,
//     AppLovinMAX.AdViewPosition.BOTTOM_CENTER,
//   );
//   AppLovinMAX.setBannerBackgroundColor(BANNER_AD_UNIT_ID, '#000000');
// }
const DetailCourses: FC = ({route, navigation}) => {
  const {img, bgcolor, intro} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.btnsection}
            onPress={() => navigation.goBack()}>
            <Feather name="chevron-left" style={styles.btnicon} />
          </TouchableOpacity>
          <Text style={styles.textheader}>HTML</Text>
        </View>
        <View style={styles.headercontent}>
          <Text style={styles.text1}>Tags For Headers</Text>
          <Text style={styles.text2}>3 of 11 lessons</Text>
          <View style={styles.topbar}>
            <TouchableOpacity style={styles.lessonsection}>
              <Text style={styles.texttopbar}>Lessons</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.testsection}>
              <Text style={styles.texttopbar}>Tests</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.discussection}>
              <Text style={styles.texttopbar}>Discuss</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View style={styles.imgsection(bgcolor)}>
            <Image source={img} style={styles.img} />
            <View style={styles.btn}>
              <View style={styles.btnborder}>
                <FontAwesome5 name="play" style={styles.icon} />
              </View>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.desctitle}>Introduction</Text>
          <Text style={styles.desc}>{intro}</Text>
        </View>
      </ScrollView>
      <AppLovinMAX.AdView
        adUnitId={BANNER_AD_UNIT_ID}
        adFormat={AppLovinMAX.AdFormat.BANNER}
        style={styles.banner}
      />
      <View />
    </SafeAreaView>
  );
};

export default DetailCourses;

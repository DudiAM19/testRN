import React, {FC} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './styles';
import Ionicicons from 'react-native-vector-icons/Ionicons';
import {DATA_CATEGORY, DATA_CONTENT} from '../../data';

const CategoryItem: FC = props => {
  return (
    <TouchableOpacity style={styles.categorysection}>
      <Text style={styles.textcategory}>{props.category}</Text>
    </TouchableOpacity>
  );
};

const ContentItem: FC = props => {
  return (
    <TouchableOpacity style={styles.containercontent} onPress={props.onPress}>
      <View style={styles.imgsection(props.bgcolor)}>
        <Image source={props.img} style={styles.img} />
        <TouchableOpacity style={styles.btnprice}>
          <Text style={styles.textbtn}>$ {props.price}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.descsection}>
        <Text style={styles.texttime}>{props.time}</Text>
        <Text style={styles.texttitle}>{props.title}</Text>
        <Text style={styles.textdesc}>{props.desc}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Courses: FC = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.left}>
          <Text style={styles.texthello}>Hello,</Text>
          <Text style={styles.textname}>Juana Antonieta</Text>
        </View>
        <View style={styles.iconsection}>
          <Ionicicons name="notifications-outline" style={styles.iconheader} />
        </View>
      </View>
      <View style={styles.inputsection}>
        <TextInput placeholder="Search course" style={styles.input} />
        <Ionicicons name="search-outline" style={styles.iconinput} />
      </View>
      <View style={styles.searchcategory}>
        <Text style={styles.textcategorytitle}>Category :</Text>
        <FlatList
          data={DATA_CATEGORY}
          horizontal={true}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <CategoryItem category={item.category} />}
        />
      </View>
      <FlatList
        data={DATA_CONTENT}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <ContentItem
            img={item.img}
            price={item.price}
            time={item.time}
            title={item.name}
            desc={item.desc}
            bgcolor={item.bgcolor}
            onPress={() =>
              navigation.navigate('DetailCourses', {
                img: item.img,
                price: item.price,
                bgcolor: item.bgcolor,
                intro: item.intro,
              })
            }
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Courses;

import React, {FC, useState} from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
import styles from './styles';

export type Props = {
  name: string;
  baseEnthusiastLevel: number;
};

const Courses: FC<Props> = ({baseEnthusiastLevel = 0}) => {
  const [enthusiastLevel, seEnthusiastLevel] = useState(baseEnthusiastLevel);

  const onIncrement = () => seEnthusiastLevel(enthusiastLevel + 1);

  const onDecrement = () => seEnthusiastLevel(enthusiastLevel - 1);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 50}}>Courses</Text>
      <Text style={{fontFamily: 'Rubik-Black'}}>
        Hello
        {enthusiastLevel}
      </Text>
      <View>
        <Button
          title="Increase enthusiasm"
          accessibilityLabel="increment"
          onPress={onIncrement}
          color="blue"
        />
        <Button
          title="Decrease enthusiasm"
          accessibilityLabel="decrement"
          onPress={onDecrement}
          color="red"
        />
      </View>
    </SafeAreaView>
  );
};

export default Courses;

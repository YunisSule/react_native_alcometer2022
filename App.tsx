import { light, dark } from './styles';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import RadioForm from 'react-native-simple-radio-button';
import { Text, ScrollView, View, Button, TextInput, Switch } from 'react-native';
import NumericInput from 'react-native-numeric-input';

export default function App() {
  const genders = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' }
  ];

  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [hours, setHours] = useState(0);
  const [gender, setGender] = useState('male');
  const [bloodAlcoholLevel, setBloodAlcoholLevel] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [styleSheet, setStyleSheet] = useState(light);

  function toggleSwitch() {
    setIsEnabled((previousState) => !previousState);

    isEnabled ? setStyleSheet(light) : setStyleSheet(dark);
  }

  function calculate() {
    let liters = bottles * 0.33;
    let grams = liters * 8 * 4.5;
    let burning = weight / 10;

    grams = grams - burning * hours;

    let result = gender === 'male' ? grams / (weight * 0.7) : grams / (weight * 0.6);

    setBloodAlcoholLevel(result < 0 ? '0' : result.toFixed(2));
  }

  return (
    <View style={styleSheet.container}>
      <View>
        <Switch style={styleSheet.toggleButton} trackColor={{ false: '#767577', true: '#f4f3f4' }} thumbColor={isEnabled ? '#767577' : '#f4f3f4'} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch} value={isEnabled} />
      </View>
      <ScrollView contentContainerStyle={styleSheet.Contentcontainer}>
        <View style={styleSheet.header}>
          <Text style={styleSheet.heading}>Alcometer</Text>
          <Text style={styleSheet.text}>Calculate your theoritical blood alcohol level.</Text>
        </View>
        <View>
          <View style={styleSheet.inputContainer}>
            <Text style={styleSheet.label}>Weigth</Text>
            <TextInput width={240} style={styleSheet.input} value={weight} onChangeText={(value) => setWeight(value)} keyboardType="decimal-pad" />
          </View>
          <View style={styleSheet.inputContainer}>
            <Text style={styleSheet.label}>Bottles</Text>
            <NumericInput minValue={0} totalWidth={240} totalHeight={50} iconSize={25} textColor={!isEnabled ? '#000' : '#fcfcfc'} rightButtonBackgroundColor={!isEnabled ? '#96F6C2' : '#A2A2A2'} leftButtonBackgroundColor={!isEnabled ? '#F98686' : '#A2A2A2'} rounded onChange={(value) => setBottles(value)} />
          </View>
          <View style={styleSheet.inputContainer}>
            <Text style={styleSheet.label}>Hours</Text>
            <NumericInput minValue={0} totalWidth={240} totalHeight={50} iconSize={25} textColor={!isEnabled ? '#000' : '#fcfcfc'} rightButtonBackgroundColor={!isEnabled ? '#96F6C2' : '#A2A2A2'} leftButtonBackgroundColor={!isEnabled ? '#F98686' : '#A2A2A2'} rounded onChange={(value) => setHours(value)} />
          </View>
          <View style={styleSheet.inputContainer}>
            <RadioForm radio_props={genders} selectedButtonColor={!isEnabled ? '#2196f3' : '#fcfcfc'} buttonColor={!isEnabled ? '#2196f3' : '#fcfcfc'} radioStyle={{ paddingRight: 20 }} formHorizontal={true} initial={0} onPress={(value) => setGender(value)} />
          </View>
        </View>
        <View style={styleSheet.answerContainer}>
          <Text style={styleSheet.result}>{!bloodAlcoholLevel ? '' : bloodAlcoholLevel}</Text>
        </View>
        <View style={styleSheet.buttonContainer}>
          <Button
            color={!isEnabled ? '' : '#A2A2A2'}
            title="Calculate"
            onPress={
              !weight
                ? () => {
                    alert('Weight must be set before calculating!');
                    setBloodAlcoholLevel('');
                  }
                : calculate
            }
          />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';

const Home = () => {
  const [textInputValue, setTextInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleSearch = () => {
    // Aquí puedes implementar la lógica para realizar la búsqueda
    console.log('Realizando búsqueda con texto:', textInputValue, 'y opción seleccionada:', selectedOption);
  };

  return (
    <LinearGradient
      colors={['#141517', '#FFC107']}
      locations={[.5, 8]} // El primer color se extiende hasta el 50% de la altura
      style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', padding: 25 }}
    >
      {/* Espacio para imagen y texto */}
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <Image
          source={require('../../assets/Logo.png')}
          style={{ width: 207, height: 63, marginBottom: 34 }}
        />
        <Text style={{ color:'white', fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>
          Busca y Pide Tu Coctel Favorito
        </Text>
      </View>
      {/* Texto */}
      <View style={{ marginBottom: 50 }}>
        <Text style={{ color:'white', fontSize: 20, textAlign: 'center' }}>
          siente el ritmo, Disfruta El Sabor,{'\n'} Con un solo Toque
        </Text>
      </View>
      {/* Campo de texto */}
      <View style={{ marginBottom: 41, width: '100%' }}>
        <TextInput
          placeholder="Nombre Del Coctel"
          value={textInputValue}
          onChangeText={setTextInputValue}
          style={{
            height: 50,
            borderColor: 'gray',
            borderWidth: 1,
            padding: 10,
            width: '100%',
            borderRadius: 10,
            backgroundColor:'#D9D9D9'
          }}
        />
      </View>
      {/* Selector de opciones */}
      <View style={{ backgroundColor:'#D9D9D9', marginBottom: 41, width: 174, borderColor: 'gray', borderWidth: 1, borderRadius: 10 }}>
        <Picker
          selectedValue={selectedOption}
          onValueChange={(itemValue, itemIndex) => setSelectedOption(itemValue)}
          style={{ height: 50, width: '100%' }}
          itemStyle={{ fontSize: 6, color: 'black' }}
        >
          <Picker.Item label="Filtro" value="opcion1" />
          <Picker.Item label="Opción 2" value="opcion2" />
          <Picker.Item label="Opción 3" value="opcion3" />
        </Picker>
      </View>
      {/* Botón de búsqueda */}
      <View style={{ alignItems: 'center', marginBottom: 41, width: '100%' }}>
        <TouchableOpacity
          onPress={handleSearch}
          style={{
            width: 174,
            height: 50,
            backgroundColor: '#FFC107',
            padding: 10,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'black', textAlign: 'center', fontSize: 26, fontWeight: 'bold' }}>
            Buscar
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Home;
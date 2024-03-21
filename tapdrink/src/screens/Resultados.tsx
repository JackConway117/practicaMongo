import React, { useState } from 'react';
import { View, TextInput, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';

const Resultados = () => {
  const [searchText, setSearchText] = useState('');
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const images = [
    require('../../assets/Martini.png'),
    require('../../assets/Martini.png'),
    require('../../assets/Martini.png'),
    // Agrega más URIs de imágenes aquí
  ];

  const handleSearch = () => {
    // Aquí puedes agregar la lógica para realizar la búsqueda
    console.log('Realizar búsqueda:', searchText);
  };

  const togglePlaceholder = () => {
    setShowPlaceholder(!searchText);
  };

  return (
    <LinearGradient
      colors={['#141517', '#FFC107']}
      locations={[0.5, 0.8]} 
      style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', padding: 25 }}
    >
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder=" "
            value={searchText}
            onChangeText={(text) => {
              setSearchText(text);
              togglePlaceholder();
            }}
            onBlur={() => togglePlaceholder()}
            onFocus={() => togglePlaceholder()}
          />
          {showPlaceholder && (
            <Text style={styles.placeholder}>Buscar...</Text>
          )}
          <TouchableOpacity onPress={handleSearch} style={styles.searchIconContainer}>
            <Icon name="search" size={20} color="#333" style={styles.searchIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageContainer}>
            <Image source={require('../../assets/image4.png')} style={styles.logoImage} />
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>Resultados De: Busqueda</Text>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {images.map((image, index) => (
            <Image key={index} source={image} style={styles.resultImage} />
          ))}
        </ScrollView>
      </View>
    </LinearGradient>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center'
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 23,
    width: 300,
    position: 'relative', 
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 38, 
    backgroundColor: 'white'
  },
  placeholder: {
    position: 'absolute',
    left: 110, 
    color: '#888',
    fontWeight:'bold',
    fontSize: 22,
  },
  searchIconContainer: {
    position: 'absolute',
    left: 270, 
  },
  imageContainer: {
    position: 'absolute',
    right: 260, 
  },
  searchIcon: {
    color: 'black',
  },
  logoImage: {
    width: 25, 
    height: 30,
  },
  resultImage: {
    width: 257,
    height: 232,
    marginBottom: 23,
  },
  text: {
    fontSize: 30,
    marginBottom: 23,
    fontWeight: 'bold',
    color: 'white'
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
});

export default Resultados;


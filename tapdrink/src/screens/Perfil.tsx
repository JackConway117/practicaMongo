import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator, FlatList } from 'react-native';
import axios from 'axios';

const Perfil = () => {
 const [nombre, setNombre] = useState('');
 const [email, setEmail] = useState('');
 const [contraseña, setContraseña] = useState('');
 const [cargando, setCargando] = useState(false);
 const [usuarios, setUsuarios] = useState([]);

 useEffect(() => {
   obtenerUsuarios();
 }, []);

 const handleRegistro = async () => {
   setCargando(true);
   try {
     const response = await axios.post('http://localhost:3000/usuarios', {
       nombre,
       email,
       contraseña,
     });
     setCargando(false);
     Alert.alert(
       'Registro exitoso',
       `Nombre: ${response.data.nombre}\nEmail: ${response.data.email}\nContraseña: ${response.data.contraseña}`
     );
     setNombre('');
     setEmail('');
     setContraseña('');
     obtenerUsuarios();
   } catch (error) {
     setCargando(false);
     console.error('Error al registrar usuario:', error);
     Alert.alert('Error', 'Hubo un error al registrar el usuario');
   }
 };

 const obtenerUsuarios = async () => {
   try {
     const response = await axios.get('http://localhost:3000/usuarios');
     setUsuarios(response.data);
   } catch (error) {
     console.error('Error al obtener usuarios:', error);
     Alert.alert('Error', 'Hubo un error al obtener los usuarios');
   }
 };

 return (
   <View style={styles.container}>
     <Text style={styles.titulo}>Registrarse</Text>
     <TextInput
       style={styles.input}
       placeholder="Nombre"
       value={nombre}
       onChangeText={setNombre}
     />
     <TextInput
       style={styles.input}
       placeholder="Email"
       value={email}
       onChangeText={setEmail}
       keyboardType="email-address"
     />
     <TextInput
       style={styles.input}
       placeholder="Contraseña"
       value={contraseña}
       onChangeText={setContraseña}
       secureTextEntry={true}
     />
     <TouchableOpacity style={styles.boton} onPress={handleRegistro} disabled={cargando}>
       {cargando ? (
         <ActivityIndicator size="small" color="#ffffff" />
       ) : (
         <Text style={styles.botonTexto}>Registrarse</Text>
       )}
     </TouchableOpacity>
     <FlatList
       data={usuarios}
       keyExtractor={(item) => item._id}
       renderItem={({ item }) => (
         <View style={styles.usuarioContainer}>
           <Text style={styles.usuarioTexto}>Nombre: {item.nombre}</Text>
           <Text style={styles.usuarioTexto}>Email: {item.email}</Text>
           <Text style={styles.usuarioTexto}>Contraseña: {item.contraseña}</Text>
         </View>
       )}
     />
   </View>
 );
};

const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#fff',
 },
 titulo: {
   fontSize: 24,
   marginBottom: 20,
 },
 input: {
   width: '80%',
   height: 40,
   borderColor: '#ccc',
   borderWidth: 1,
   borderRadius: 5,
   marginBottom: 10,
   paddingLeft: 10,
 },
 boton: {
   backgroundColor: '#007bff',
   paddingVertical: 10,
   paddingHorizontal: 20,
   borderRadius: 5,
   marginBottom: 10,
 },
 botonTexto: {
   color: '#fff',
   fontSize: 16,
 },
 usuarioContainer: {
   backgroundColor: '#f0f0f0',
   padding: 10,
   marginVertical: 5,
   borderRadius: 5,
 },
 usuarioTexto: {
   fontSize: 16,
 },
});

export default Perfil;

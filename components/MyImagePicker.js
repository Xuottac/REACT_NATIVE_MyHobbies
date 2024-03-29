import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function MyImagePicker() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Choisissez une image de votre gallerie" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{width: 100, height: 100, borderRadius: 100/ 2}} />}
    </View>
  );
}


const styles = StyleSheet.create({
  imgProfil: {
    flex:0.5,
    alignItems: 'center',
    justifyContent: "center",
    
  },
  });
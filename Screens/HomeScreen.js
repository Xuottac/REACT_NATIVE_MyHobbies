import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native';
import Card from '../components/Cards';
import ImagePicker from '../components/MyImagePicker';

const Bienvenue = props => {
    return (
      <View style={styles.secondPart}>
        <Text>{props.bvn}</Text>
      </View>
    );
  };


export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.container}>
    <View style={styles.presentation}>
      <View style={styles.imgProfil}>
        <ImagePicker />
      </View>
      <View style={styles.txtProfil}>
        <View>
          <Text style={styles.firstPart}>Bienvenue</Text>
        </View>
        <Bienvenue bvn="Voici mon application de présentation des choses que j'aime. Bonne découverte !"/>
      </View>
    </View>
    <View style={styles.contact}>
      <View style={styles.imgContact}>
        <Card img="https://www.autohebdo.fr/app/uploads/2023/11/DPPI_00123048_160-753x494.jpg" titre="F1" desc="La F1 est une passion automobile qui me tient à coeur depuis quelques années. C'est un sport très complexe et très elitiste qui est passionnant à regarder." />
        <Card img="https://www.pedagojeux.fr/wp-content/uploads/2019/11/1280x720_LoL.jpg" titre="League of Legends" desc="League of Legends est un moba 5 contre 5 ou le but est de détruire la base adverse. Une partie dure en moyenne une trentaine de minute et l'on peut jour avec plus de 160 personnages différents." />
        <Card img="https://blastcamp.com/wp-content/uploads/2022/11/airsoft-e1669068200393.jpg" titre="Airsoft" desc="L'airsoft est un sport de simulation militaire où l'on utilise des réplique d'arme à bille en plastique bio. Ce sport utilise les équipements et tactiques des militaires sans que l'on doivent se mettre en danger." />
      </View>
    </View>
  </ScrollView>
  </SafeAreaView>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: 'aliceblue',
  fontFamily: "Cochin"
},
presentation: {
  flex: 1,
},
imgProfil: {
  height: 250,
  alignItems: 'center',
  justifyContent: "center",
  
},
txtProfil: {
  height: 200,
  alignItems: 'center',
  justifyContent: "center",
  backgroundColor: "lightgrey",
},
firstPart: {
  fontSize: 25,
  fontWeight: "bold",
},
secondPart: {
  margin: 30,
},
contact: {
  flex: 1,
  alignItems: 'center',
  justifyContent: "center",
},
imgContact: {
  flex:1,
  alignItems: 'center',
  justifyContent: "center",

},
});
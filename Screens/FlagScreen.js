import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import Card from '../components/Cards';


const FlagScreen = () => {
  const [img, setImg] = useState('');
  const [titre, setTitre] = useState('');
  const [année, setAnnée] = useState('');
  const [data, setData] = useState(false);
  useEffect(() => {
    async function fetchData() {
        try {
            const f = await fetch(`https://restcountries.com/v2/all`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!f.ok) {
                console.warn(`Erreur HTTP ! Status: ${f.status}`);
                return Alert.alert("Erreur HTTP");
            } else {
                const jsone = await f.json();
                setData(jsone);
            }
        } catch (e) {
            console.warn(e)
        }
    }
    fetchData();
}, [])
  return (
    <SafeAreaView style={styles.container}>
      {data == false ? (
                <View>
                    <Text >Récuperation des Pays en cours...</Text>
                </View>
            ) : (
                <View>
                    <Text style={styles.Text}>Liste des Pays</Text>
                    <FlatList
                    data={data}
                    renderItem={({ item }) => <Card img={item.flags['png']} titre={item.name}  pop={item.population} />}
                    keyExtractor={(item) => item.alpha3Code} // Assuming item.id is a number
                />
                </View>
            )}
    </SafeAreaView>
  );
};
export default FlagScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    Text: {
      fontSize: 24,
      fontStyle: 'italic',
      textAlign: 'center',
      marginHorizontal: 20,
    },
  });
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import ThermalPrinterModule from 'react-native-thermal-printer';

const App = () => {
  useEffect(() => {
    getDevice();
  }, []);

  const text =
    '[R]<img>https://res.cloudinary.com/dvgiis6ey/image/upload/v1649231756/Work/mutif_client_kydaab.jpg</img>\n' +
    '[L]\n' +
    "[C]<font size='big'>Jl. Alamat Mutif dimana ya no 8</font>\n" +
    "[C]<font size='big'>Kabupaten Bandung Lautan Api</font>\n" +
    '[L]\n' +
    '[L]\n' +
    '[C]=========================\n' +
    '[L]\n' +
    '[L]\n' +
    '[L]<b>Baju Koko Putih</b>[R]Rp30,0000,00\n' +
    '[L]\n' +
    '[L]<b>Baju Gamis</b>[R]Rp50,000,00\n' +
    '[L]\n' +
    '[C]--------------------------------\n' +
    '[R]TOTAL PRICE :[R]Rp80,000,00\n' +
    '[L]\n' +
    '[C]]=========================\n' +
    '[L]\n' +
    '[L]\n' +
    "[C]<barcode type='ean13' height='10'>831254784551</barcode>\n" +
    "[C]<qrcode size='20'>http://www.developpeur-web.dantsu.com/</qrcode>";
  async function printSomething() {
    try {
      console.log('Printer Running');
      await ThermalPrinterModule.printBluetooth({
        payload: text,
        macAddress: '66:22:5A:B0:B6:08',
        printerWidthMM: 40,
      });
      console.log('Printer Done');
    } catch (e) {
      console.log(e);
    }
  }

  async function getDevice() {
    try {
      const deviceList = await ThermalPrinterModule.getBluetoothDeviceList();
      console.log(deviceList);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.boxTitle}>
        <Text style={styles.boxTitle.txtTitle}>
          Welcome to Try Thermal Printer
        </Text>
      </View>
      <View style={styles.boxReceipt}>
        <View>
          <Image source={require('./mutif_client.png')} style={{height: 75}} />
        </View>
        <View>
          <Text style={{fontSize: 17}}>Jl. Alamat Mutif dimana ya no 8</Text>
          <Text style={{fontSize: 17}}>Kabupaten Bandung Lautan Api</Text>
        </View>
        <Text>================================</Text>
        <View style={{marginVertical: 20, width: '90%'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 20}}>Baju Koko Putih</Text>
            <Text style={{fontSize: 20}}>Rp30,000,00</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 20}}>Baju Gamis</Text>
            <Text style={{fontSize: 20}}>Rp50,000,00</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 20}}>Quran</Text>
            <Text style={{fontSize: 20}}>Rp20,000,00</Text>
          </View>
        </View>
        <Text>================================</Text>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 20}}>dibayar</Text>
          <Text style={{fontSize: 20}}>Rp100,000,00</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 20}}>kembalian</Text>
          <Text style={{fontSize: 20}}>Rp10,000,00</Text>
        </View>
      </View>
      <View style={styles.boxButton}>
        <TouchableOpacity onPress={() => printSomething()}>
          <Text>Print</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  boxTitle: {
    flex: 1,
    // backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',

    txtTitle: {
      fontSize: 25,
      fontWeight: '800',
    },
  },
  boxReceipt: {
    flex: 8,
    backgroundColor: 'white',
    // justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 10,
    elevation: 3,
    padding: 20,
  },
  boxButton: {
    flex: 0.75,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

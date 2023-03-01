import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Game from './components/Game';
export default function App() {
  return (
    <View style={styles.container}>
      <Game rows={20} columns={10} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black'
  },
});

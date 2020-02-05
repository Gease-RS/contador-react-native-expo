import React, { useEffect, useState } from 'react'
import CounterScreen from './src/screens/CounterScreen'
import * as Font from 'expo-font'
import { AppLoading } from "expo"
import { font } from "./src/styles"

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        [font.title]: require('./assets/fonts/Montserrat-Bold.ttf'),
        [font.body]: require('./assets/fonts/Montserrat-Regular.ttf')
      });

      setLoaded(true);
    }

    loadFonts();
  }, []);
  
  if(!loaded) {
    return(
      <AppLoading />
    )
  }
  return (
    <CounterScreen />
  )
}

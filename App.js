import { useCallback } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import Basket from "./src/screens/Basket/Index";
import mock from "./src/mocks/Basket";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loadedFont] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (loadedFont) {
      // This tells the splash screen to hide immediately
      await SplashScreen.hideAsync();
    }
  }, [loadedFont]);

  if (!loadedFont) return null;

  return (
    <SafeAreaView onLayout={onLayoutRootView}>
      <StatusBar />
      <Basket {...mock} />
    </SafeAreaView>
  );
}

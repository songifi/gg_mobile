import React, { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import SplashScreenView from "./components/SplashScreenView";

export default function Index() {
  // --- DEV OVERRIDE: Go directly to tabs ---
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 5000);
  }, []);
  return showSplash ? (
    <SplashScreenView />
  ) : (
    <Redirect href="/(routes)/onboarding" />
  );
  // --- END OVERRIDE ---
  // return <Redirect href="/(drawer)/(tabs)" />;
}

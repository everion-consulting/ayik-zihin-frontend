import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import MainNavigator from "./MainNavigator";
import OnboardingNavigator from "./OnboardingNavigator";
import { useApp } from "../app/RootProvider";

export default function RootNavigator() {
  const { isLoggedIn, isSubscribed, isReady, hasSeenOnboarding } = useApp();

  if (!isReady) return null;

  let content = null;

  if (!hasSeenOnboarding) {
    content = <OnboardingNavigator />;
  } else if (!isLoggedIn) {
    content = <AuthNavigator />;
  } else if (!isSubscribed) {
    content = <AuthNavigator />; // ileride SubscriptionNavigator olabilir
  } else {
    content = <MainNavigator />;
  }

  return <NavigationContainer>{content}</NavigationContainer>;
}

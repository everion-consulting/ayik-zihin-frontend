import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OnboardingWelcomeScreen from "../screens/onboarding/OnboardingWelcomeScreen";
import OnboardingFocusScreen from "../screens/onboarding/OnboardingFocusScreen";
import OnboardingFinishScreen from "../screens/onboarding/OnboardingFinishScreen";

const Stack = createNativeStackNavigator();

export default function OnboardingNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OnboardingWelcome" component={OnboardingWelcomeScreen} />
      <Stack.Screen name="OnboardingFocus" component={OnboardingFocusScreen} />
      <Stack.Screen name="OnboardingFinish" component={OnboardingFinishScreen} />
    </Stack.Navigator>
  );
}

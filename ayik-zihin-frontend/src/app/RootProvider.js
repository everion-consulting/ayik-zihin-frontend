import React, { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export function RootProvider({ children }) {
  // 🔐 Auth
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 💳 Subscription
  const [isSubscribed, setIsSubscribed] = useState(false);

  // 🚀 App bootstrapped mi?
  const [isReady, setIsReady] = useState(true); // şimdilik true

  const [hasSeenOnboarding, setHasSeenOnboarding] = useState(false);

  const value = {
    isLoggedIn,
    setIsLoggedIn,
    isSubscribed,
    setIsSubscribed,
    isReady,
    hasSeenOnboarding,
    setHasSeenOnboarding,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within RootProvider");
  }
  return context;
}


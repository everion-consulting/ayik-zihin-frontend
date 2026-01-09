import React from "react";
import RootNavigator from "./src/navigation/RootNavigator";
import { RootProvider } from "./src/app/RootProvider";

export default function App() {
  return (
    <RootProvider>
      <RootNavigator />
    </RootProvider>
  );
}

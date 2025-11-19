"use client";

import React from "react";

// TODO: replace with real providers when implemented
// import { AuthProvider } from "./AuthContext";
// import { CartProvider } from "./CartContext";
// import { UIProvider } from "./UIContext";

type RootProvidersProps = {
  children: React.ReactNode;
};

export function RootProviders({ children }: RootProvidersProps) {
  // When contexts are ready, wrap them properly:
  // return (
  //   <AuthProvider>
  //     <CartProvider>
  //       <UIProvider>{children}</UIProvider>
  //     </CartProvider>
  //   </AuthProvider>
  // );

  return <>{children}</>;
}
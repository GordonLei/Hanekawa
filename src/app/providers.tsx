/*
This has all the providers (ex. React Redux)
*/

"use client";

//  imports
//    npm packages
import { NextUIProvider } from "@nextui-org/react";
//    Personal Redux folder
import ReduxProvider from "@/app/reduxProvider";

//  Provider component
export default function Providers({children}: { children: React.ReactNode }) {
  return (
    <ReduxProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </ReduxProvider>
  );
}

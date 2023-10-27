"use client";

import { ChatWindow } from "../app/components/ChatWindow";
import { ToastContainer } from "react-toastify";

import { ChakraProvider } from "@chakra-ui/react";

export default function Home() {
  return (
    <ChakraProvider>
      <ToastContainer />
      <ChatWindow
        titleText="UBL Centre for Digital Scholarship"
        placeholder="What is the CDS?"
      ></ChatWindow>
    </ChakraProvider>
  );
}

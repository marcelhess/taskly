import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";

export default function App() {
   return (
      <ChakraProvider>
         <BrowserRouter>
            <Toaster position="bottom-right" />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/home" element={<Home />} />
               <Route path="/signin" element={<SignIn />} />
               <Route path="/signup" element={<SignUp />} />
            </Routes>
         </BrowserRouter>
      </ChakraProvider>
   );
}

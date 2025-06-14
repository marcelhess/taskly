import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Profile from "./pages/Profile.jsx";

import { UserProvider } from "./context/UserContext.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import NavBar from "./components/NavBar.jsx";

export default function App() {
   return (
      <UserProvider>
         <ChakraProvider>
            <BrowserRouter>
               <NavBar />
               <Toaster position="bottom-right" />
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/signin" element={<SignIn />} />
                  <Route path="/signup" element={<SignUp />} />

                  <Route element={<PrivateRoute />}>
                     <Route path="/profile" element={<Profile />} />
                  </Route>
               </Routes>
            </BrowserRouter>
         </ChakraProvider>
      </UserProvider>
   );
}

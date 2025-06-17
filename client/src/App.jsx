import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Profile from "./pages/Profile.jsx";
import CreateTask from "./pages/CreateTask.jsx";
import UpdateTask from "./pages/UpdateTask.jsx";
import Tasks from "./pages/Tasks.jsx";
import SingleTask from "./pages/SingleTask.jsx";

import { UserProvider } from "./context/UserContext";
import PrivateRoute from "./components/PrivateRoute";
import NavBar from "./components/NavBar";

export default function App() {
   return (
      <UserProvider>
         <ChakraProvider>
            <BrowserRouter>
               <NavBar />
               <Toaster position="bottom-right" />
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/signin" element={<SignIn />} />
                  <Route path="/signup" element={<SignUp />} />

                  <Route element={<PrivateRoute />}>
                     <Route path="/profile" element={<Profile />} />
                     <Route path="/create-task" element={<CreateTask />} />
                     <Route path="/update-task/:taskId" element={<UpdateTask />} />
                     <Route path="/tasks" element={<Tasks />} />
                     <Route path="/tasks/:taskId" element={<SingleTask />} />
                  </Route>
               </Routes>
            </BrowserRouter>
         </ChakraProvider>
      </UserProvider>
   );
}

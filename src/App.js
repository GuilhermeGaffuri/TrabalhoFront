import {RouterProvider, createBrowserRouter} from "react-router-dom"
import './App.css';
import Login from "./pages/Login.js";
import Home from "./pages/Home.js";
import Cadastro from "./pages/Cadastro.js";
import List from "./pages/List.js";
import { ChakraProvider } from "@chakra-ui/react";

const router = createBrowserRouter([
{
  path:"",
  element: <Login/>
},
{
  path:"/home",
  element: <Home/>
},
{
  path:"/Cadastro",
  element: <Cadastro/>
},
{
  path:"/list",
  element: <List/>
}

]);


function App() {
  return (
      <ChakraProvider>
        <RouterProvider router={router}/>
      </ChakraProvider>
      
    
  );
}

export default App;

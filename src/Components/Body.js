import React, { useEffect } from 'react'
import Login from "./Login"
import Browse from "./Browse"
import {createBrowserRouter} from "react-router-dom"
import  {RouterProvider} from "react-router-dom"
import { auth } from '../utils/firebase'
import {  onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from './userSLice'


let appRouter = createBrowserRouter([
    {
        path : "/" ,
        element : <Login/>
    } ,
    {
        path : "browse" ,
        element : <Browse/>
    }
])






const Body = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
      } else {
        dispatch(removeUser());
      }
    });
  }, []);
  

  return (
    <div>
      <RouterProvider router = {appRouter }>
        <Login/>
        <Browse/> 
      </RouterProvider>
    </div>
  )
}





export default Body

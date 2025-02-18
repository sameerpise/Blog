import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from '../Componets/NavBar'
import Hero from "../Componets/Hero";
import Post from "../Componets/Post";
import Allpost from '../Componets/Allpost';
import About from './About';
import EditPost from '../Componets/EditPost';
import SinglePage from '../Componets/Singlepage/SinglePage';
import Contact from './Contact';
import Auth from '../Componets/Auth/Auth';
import { AuthProvider } from '../Componets/Auth/AuthContext';
import PrivateRoute from '../Componets/Auth/PrivateRoute';
import SinglePost from '../Componets/Singlepage/Singlepagee';
export default function Routee() {
  return (
    <AuthProvider>
    <Router>
      <NavBar />
    
    <Routes>
     
     <Route path="/login" element={<Auth />} />

    
     <Route path="/" element={<Hero />} />
  <Route element={<PrivateRoute />}>
     <Route path="/create" element={<Post />} />
     
   
     
     
     <Route path="/AllPost" element={<Allpost />} />
     </Route>
     <Route path="/edit/:id" element={<EditPost />} />
     <Route path="/post/:id" element={<SinglePage />} />
      <Route path="/blog/:id" element={<SinglePost />} />
     <Route path="/about" element={ <About /> } />
     <Route path="/contact" element={<Contact />} />
     
    

     {/* <Route path="/dashboard" element={<ProtectedRout><Dashboard /></ProtectedRout>} /> */}
    </Routes>

    </Router>
    </AuthProvider>
  )
}

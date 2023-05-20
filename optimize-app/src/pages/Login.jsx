import React from 'react'
import useMediaQuery from "@mui/material/useMediaQuery";
// import { styled } from "@mui/material/styles";


function Login() {
 const isDesktop = useMediaQuery('(min-width: 1024px)');

 return (
   <div>
     {isDesktop ? (
       <h1>This is the hero for desktop devices.</h1>
     ) : (
       <h1>This is the hero for mobile devices.</h1>
     )}
   </div>
 );
}


export default Login;
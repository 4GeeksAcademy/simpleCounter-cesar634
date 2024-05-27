//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let contador = 0;
setInterval(()=>{
    const cinco = Math.floor(contador / 10000) % 10;
    const cuatro = Math.floor(contador / 1000) % 10;
    const tres = Math.floor(contador / 100) % 10;
    const dos = Math.floor(contador / 10) % 10;
    const uno = Math.floor(contador / 1) % 10;
    console.log(cinco, cuatro, tres, dos, uno)
    ReactDOM.render(<Home 
        quinto={cinco}
        cuarto={cuatro}
        tercero={tres}
        segundo={dos}
        primero={uno}
    />, document.querySelector("#app"));
    contador++;
},1000)

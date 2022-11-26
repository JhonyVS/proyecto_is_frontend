import React, { useState } from "react";
import "./Buscador.css";


function Buscador({ placeholder, data }) {

  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

   
  };

  return Buscador;
}

export default Buscador;
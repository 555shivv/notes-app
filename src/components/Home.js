import React, { useContext } from "react";
import { BrowserRouter as Router,Route } from "react-router-dom";
import Notes from './Notes';

const Home = () => {
   
  return (
    <div>
      <Notes/>
    </div>
  );
};

export default Home;

import React, {useState, useEffect} from "react";
import axios from 'axios';

//=============================
// constants
//=============================

//=============================
// utils
//=============================

//=============================
// components
//=============================

//=============================
// containers
//=============================

//=============================
// hooks
//=============================

//=============================
// styles
//=============================

//=============================
// services
//=============================

export const getNameHash = async () => {
    return await axios.get("https://robohash.org/abhinav");
};

//=============================
// selectors
//=============================

//=============================
// mappers
//=============================

//=============================
// App
//=============================


export const App = () => {

    const [url, setUrl] = useState('');

    useEffect(() => {
        getNameHash().then(({config}) => setUrl(config.url));
    }, []);

    return (
    <>
      <div className="App">
          <header className="App-header">RoboHash</header>
          <p>{url}</p>
          <img src={url} alt="RoboHash image"/>
      </div>
    </>
  );
};

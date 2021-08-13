import React,{useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import {BASE_URL} from './index.js'

import TopSection from './components/TopSection'
import Image from './components/Image'
import CommentSection from './components/CommentSection'

import styled from 'styled-components'

function App() {

  const [photoOfTheDay, setPhotoOfTheDay] = useState([])

  useEffect(() =>{
    axios.get(BASE_URL) 
      .then(res=>{        
        setPhotoOfTheDay(res.data)
      })
      .catch(err => {
        console.error(err)
      })
    }, [])

  return (
    <div className="App">
      
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>

      <TopSection 
        name={photoOfTheDay.copyright} 
        date={photoOfTheDay.date} 
        title={photoOfTheDay.title} 
        comment={photoOfTheDay.explanation}  
      />

      <Image 
        photoUrl={photoOfTheDay.url} 
        title={photoOfTheDay.title}
      />

      <CommentSection 
        comment={photoOfTheDay.explanation}  
      />
    </div>

    
  );
}

export default App;

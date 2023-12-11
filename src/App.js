import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import { Container } from '@mui/material';
import Header from './components/Header';
import Definition from './components/Definition/Definition';

function App() {
  const [meanings, setMeanings] = useState([]);
  const [input, setInput] = useState("");

  const dictionaryApiData = async () => {
    try{
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`);    
     setMeanings(data.data)
    } catch{
      }
  }
  console.log(meanings)

  useEffect(() => {
    dictionaryApiData()
  },[input])


  return (
    <div style={{background:'#067597', height:'100vh'}}>
      <Container maxWidth="md" style={{display:'flex',flexDirection:'column'}}>      
        <Header  input={input} setInput={setInput}/>
        <Definition meanings={meanings} word={input}/>
      </Container>
    </div>
  );
}

export default App;

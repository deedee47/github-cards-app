//import logo from '../images/logo.svg';
import '../styles/App.css';
import CardList from './Card';
import Form from './Form';
import React,  { useState } from 'react';


function App() {

  const [profiles, setProfiles] = useState({profiles : []});

  const ProfileSet = (profileData) => (
    setProfiles(prevState => ({
    profiles : [...prevState.profiles, profileData],
    }))
  );

  return (
    <div>
      <div className="header">The Github Cards App</div> 
      <Form onSubmit={ProfileSet} />
      <CardList details={profiles} />
    </div>
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

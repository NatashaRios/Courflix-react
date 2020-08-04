import React from 'react';
import Navbar from '../../componentes/Navbar';
import Hero from '../../componentes/Hero';
import './styles.scss';

class App extends React.Component {
  render() {
    return(
      <div>
        <Navbar />
        <Hero />
      </div>
    )
  }
}

export default App;

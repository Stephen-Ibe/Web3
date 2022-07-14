import React from 'react';
import {
  NavBar,
  Welcome,
  Services,
  Transactions,
  Footer,
} from './components/blocks';

function App() {
  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <NavBar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;

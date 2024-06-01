import React from 'react';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Categories from './Components/Categories';
import Sale from './Components/Sale';
import Collection from './Components/Collection';
import Bestseller from './Components/Bestseller';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Categories />
      <Sale />
      <Collection />
      <Bestseller/>
    </div>
  );
}

export default App;


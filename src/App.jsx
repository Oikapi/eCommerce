import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import React from "react"
import MainSection from './components/mainSection/MainSection';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EachPage from "./components/eachPage/EachPage.jsx"
import { DataProvider } from './components/dataProvider';
import Section from './components/Section';

class App extends React.Component {
  render() {
    return (
      <DataProvider>
        <div className="App">
          <Router>
            <Header />
            <Section />
            <Footer />
          </Router>
        </div>
      </DataProvider>
    );
  }
}

export default App;

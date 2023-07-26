
import Navbar from './components/Navbar';
import Newscover from './components/Newscover';
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import React, { Component } from 'react'

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_APIKEY;
  render() {
    return (
      <BrowserRouter>
      <>
        <Navbar />
          <Routes>
            <Route path="/" element={<Newscover key="general" pageSize={8} apiKey={this.apiKey} country="in" category="general"/>} />
            <Route path="/business/*" element={<Newscover key="business" pageSize={8} apiKey={this.apiKey} country="in" category="business"/>} />
            <Route path="/entertainment/*" element={<Newscover key="entertainment" pageSize={8} apiKey={this.apiKey} country="in" category="entertainment"/>} />
            <Route path="/general/*" element={<Newscover key="general" pageSize={8} apiKey={this.apiKey} country="in" category="general"/>} />
            <Route path="/health/*" element={<Newscover key="health" pageSize={8} apiKey={this.apiKey} country="in" category="health"/>} />
            <Route path="/science/*" element={<Newscover key="science" pageSize={8} apiKey={this.apiKey} country="in" category="science"/>} />
            <Route path="/sports/*" element={<Newscover key="sports" pageSize={8} apiKey={this.apiKey} country="in" category="sports"/>} />
            <Route path="/technology/*" element={<Newscover key="technology" pageSize={8} apiKey={this.apiKey} country="in" category="technology"/>} />
          </Routes>
      </>
        </BrowserRouter>
    )
  }
}

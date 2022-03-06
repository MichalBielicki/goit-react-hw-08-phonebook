import "./App.css";
import React, { Component } from "react";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import PrivatePage from "./pages/PrivatePage/PrivatePage";
import { saveToSessionStorage } from "./services/sessionStorage";

saveToSessionStorage("USER", []);
export default class App extends Component {
  
  render() {
    return (
      <div className="App">

        <NavBar />
        <h1>Phonebook</h1>

        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contacts/:userId" element={<PrivatePage />} />
        </Routes>

      </div>
    );
  }
}

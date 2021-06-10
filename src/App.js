import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import LanguagePage from './pages/LanguagePage'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={HomePage} exact />
        <Route path="/contact" component={ContactPage} exact />
        <Route path="/about" component={AboutPage} exact />
        <Route path="/projects" component={ProjectsPage} exact />
        <Route path="/projects/list" component={LanguagePage} exact />
      </BrowserRouter>
    )
  };
}
export default App;
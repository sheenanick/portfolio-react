import React, { Component } from 'react';
import { connect } from 'react-redux'
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Home from './routes/Home/Home';
import About from './routes/About/About';
import Portfolio from './routes/Portfolio/Portfolio';
import Contact from './routes/Contact/Contact';
import { toggleMenu } from './actions/navActions';
import { submitContact, resetContact } from './actions/contactActions';
import './App.css';

class App extends Component {
  scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element != null) {
      element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    }
  }

  render() {
    const { showMenu, toggleMenu, submitted, submitContact, resetContact } = this.props;
    return (
      <div className="App">
        <Nav scrollTo={this.scrollTo} toggleMenu={toggleMenu} showMenu={showMenu} />
        <Home scrollTo={this.scrollTo}/>
        <About />
        <Portfolio />
        <Contact submitted={submitted} submitContact={submitContact} resetContact={resetContact}/>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showMenu: state.navState.showMenu,
    submitted: state.contactState.submitted
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: function() { dispatch(toggleMenu()); },
    submitContact: function(contact) { dispatch(submitContact(contact)); },
    resetContact: function() { dispatch(resetContact()); },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

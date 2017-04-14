import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {}
    };
  }

  getResumeData() {
    $.ajax({
      url: 'http://localhost:3000/resumeData.json',
      dataType: 'json',
      cache: false,
      success: (data) => {
        this.setState({resumeData: data});
      },
      error: (xhr, status, err) => {
        console.log(err);
        alert(err);
      }
    })
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    console.log(this.state.resumeData);
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Testimonials data={this.state.resumeData.testimonials} />
        <Contact data={this.state.resumeData.main} />
        <Footer />
      </div>
    );
  }
}

export default App;

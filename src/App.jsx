import React, { Component } from 'react';
import CourseCard from './CourseCard';
import './App.css'; 

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      courses: [
        { name: 'React js', price: 'Rs.100', duration: '3 months', img: 'react.jpeg' },
        { name: 'Java', price: 'Rs.200', duration: '2 months', img: 'java.jpeg' },
        { name: 'Machine Learning', price: 'Rs.300', duration: '4 months', img: 'ml.jpeg' },
        { name: 'Data Science', price: 'Rs.400', duration: '6 months', img: 'ds.jpeg' },
      ]
    };
  }

  render() {
    const { courses } = this.state;

    return (
      <div className="App">
        <div className="header">
          Course Catalog
        </div>

        <div className="section">
          {courses.map((data, index) => (
            <CourseCard key={index} data={data} />
          ))}
        </div>

        <div className="footer">
          © 2024 Kanthi. All rights reserved.
        </div>
      </div>
    );
  }
}
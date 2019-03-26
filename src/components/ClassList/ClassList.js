import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class ClassList extends Component {
  constructor() {
    super()

    this.state = {
      students: []
    }
    
  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
    .then( results => {
      this.setState({
        students: results.data
      });
    });
  }

  render() {

    let classStudents = this.state.students.map((student,index) => (
      <h3 key={index}><Link to={`/student/${student.id}`}>{student.first_name} {student.last_name}</Link></h3>
    ));


    return (
      <div className="box">
      <button><Link to="/">Back</Link></button>
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {classStudents}
      </div>
    )
  }
}
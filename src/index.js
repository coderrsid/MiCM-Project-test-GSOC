import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isLoading:true,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response=>response.json())
      .then(data => this.setState({data: data, isLoading: false}))
      .catch(<h1>Loading</h1>);
  }
  render() {
    return (
      <div>
        <h1>Users</h1>{this.state.isLoading? <h1>Loading...</h1>:null}
        {this.state.data.map((data, index) => {
          return (
            <div className="container">
              <p className="name tooltip">{data.name}
                <span class="tooltiptext">
                 Street<span> {data.address.street}</span><br /> 
                 Suite <span>{data.address.suite}</span><br /> 
                 City <span>{data.address.city}</span><br />
                 Zip <span>{data.address.zipcode}</span><br />
                </span>
              </p>
              <p className="username">({data.username})</p>
            </div>
        )})}  
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

import React, { Component } from 'react';


class App extends Component {

  state={}
  
  componentDidMount() {
    fetch('https://randomuser.me/api/?results=3')
      .then(response => response.json())
      .then(data => {
          this.setState({ 
            people: data.results
           });
          console.log( this.state.people );
        }
      );

    const cities = [
      {city: "sdyney",  population: 56000},
      {city: "new york",  population: 100000}
    ]

    this.setState({ cities }) 
    


    const obj= {
      e: [ {e1:"e1", e2:"e2"}]
    }

    const x = obj.e;

    //const { e }=  obj;

    console.log( x );
  }

  render() {
    const { people= [] } = this.state;
    const { cities=[] } = this.state; 

    return (
      <div>
        {this.state.test}
        {/* {people.map( (person)=>   
          <li key={person.key}>   {person.name.first} </li>
        )} */}


        { cities.map(
          city => <li>  {city.population} </li>
        )}
{/* 
        { e.map(
          i => <li>  {i.e1} </li>
        )} */}

      </div>
    );
  }
}

export default App;

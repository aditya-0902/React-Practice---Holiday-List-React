
import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.cityList = [{ name: 'Goa', country: 'India' },
    { name: 'Amsterdam', country: 'Netherlands' },
    { name: 'New York', country: 'USA' },
    { name: 'Darjeeling', country: 'India' },
    { name: 'Tokyo', country: 'Japan' },
    { name: 'Lonavala', country: 'India' }
    ]
  }

  render() {
   let list = this.cityList.filter((pair)=>{
      return pair.country==='India'
   })
     return (
      <div id="main">
      <ol>
        {list.map((pair,i)=>{
      return <li key={"location"+(i+1)}>{pair.name}</li>
      
      }
      )}
      </ol>
      </div>
    )
  }
}
export default App;

import React, { Component } from 'react'

export default class DogsList extends Component {
  
  renderDogBreed(breed) {
    return <li key={breed}>{breed}</li>
  }

  render() {
    const { whatever } = this.props
    return (
      <div className="dogs-list">
        <h1>Dogs List</h1>

        { !whatever && 'Loading...' }

        {
          whatever &&
          <ul>{ whatever.map(this.renderDogBreed) }</ul>
        }
      </div>
    )
  }
}
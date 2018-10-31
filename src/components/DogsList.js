import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class DogsList extends Component {

  renderDogBreed(breed) {
    // return <li key={breed}>{breed}</li>
    return (
      <li key={breed}>
        <Link to={`/dog-breeds/${breed}`}>{breed}</Link>
      </li>
    )
  }

  render() {
    const { whatever } = this.props
    return (
      <div className="dogs-list">
        <h1>Dogs List</h1>

        {!whatever && 'Loading...'}

        {
          whatever &&
          <ul>{whatever.map(this.renderDogBreed)}</ul>
        }
      </div>
    )
  }
}
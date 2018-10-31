import React, {Component} from 'react'
import request from 'superagent'
import DogsList from './DogsList'

export default class DogsListContainer extends Component {
  state = { dogBreeds: null }

  updateBreeds(breeds) {
    this.setState({
      dogBreeds: breeds
    })
  }
  
  componentDidMount() {
    request
      .get('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        const breeds = Object.keys(response.body.message)
        this.updateBreeds(breeds)
      })
      .catch(console.error)
  }

  render() {
    return <DogsList whatever={this.state.dogBreeds} />
  }
}
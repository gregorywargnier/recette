import React, { Component } from 'react'
// CSS
import './App.css'

//database
import base from './base'
//Header
import Header from './components/Header'
//component
import Admin from './components/Admin'
import recettes from './recettes'
import Card from './components/Card'



class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  }

  //synchronisation à firebase
  componentDidMount() {
    this.ref = base.syncState(`/${this.state.pseudo}/recettes`,{
      context : this,
      state : 'recettes'
    })
  }

  //componentWillUnmountest la dernière fonction à être appelée immédiatement avant la suppression du composant du DOM désynchronisation à firebase
  componentWillUnmount() {
    base.removeBinding(this.ref)
  }

  ajouterRecette = recette => {
    const recettes = { ...this.state.recettes }
    recettes[`recette-${Date.now()}`] = recette
    this.setState({ recettes })
  }

  //modifier recette
  majRecette = (key, newRecette) => {
    const recettes = { ...this.state.recettes }
    recettes[key] = newRecette
    this.setState({ recettes })
  }

  //supprimer recette
  resetRecette = key => {
    const recettes = { ...this.state.recettes }
    recettes[key] = null
    this.setState({ recettes })
  }

  chargerExemple = () => this.setState({recettes})

  render () {
    const cards = Object.keys(this.state.recettes)
    .map(key => <Card key= {key} details= {this.state.recettes[key]}/>)
    return (
      <div className='box'>
        <Header pseudo={this.state.pseudo} />
        <div className='cards'>
         {cards}
        </div>
        <Admin 
        pseudo={this.state.pseudo}
        recettes={this.state.recettes}
        ajouterRecette={this.ajouterRecette}
        resetRecette = {this.resetRecette}
        majRecette={this.majRecette}
        chargerExemple={this.chargerExemple} />
      </div>
    )
  }
}

export default App

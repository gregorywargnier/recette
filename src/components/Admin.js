import React, { Component } from 'react'

class Admin extends Component {
    render () {
        return (
            <div>
                <footer>
                    <button onClick= {this.props.chargerExemple}>Remplir</button>
                </footer>
            </div>
        )
    }
}

export default Admin
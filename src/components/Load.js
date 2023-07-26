import React, { Component } from 'react'
import loading from './spinner.gif'

export default class Load extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" />
      </div>
    )
  }
}

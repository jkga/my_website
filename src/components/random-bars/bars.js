import React from 'react'
import './style.css'

export default class Bar extends React.Component {
  render () {
    return (<div className={this.props.class} style={this.props.style}></div>)
  }
}
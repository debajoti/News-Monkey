import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export default class Newsitems extends Component {
  render() {
    let {title, desc, imageUrl, newsUrl, author, dateTime, source} = this.props;
    return (
        <div className="card">
            <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left : "50%", zIndex:"1"}}>{source}</span>
            <img src={imageUrl}  className="card-img-top" style={{width : "100%", height : "190px"}} alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{desc}...</p>
            <p class="card-text"><small class="text-body-secondary">By {author ? author : "Unknown"} on {new Date(dateTime).toGMTString}</small></p>
            <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-dark">Read More &rarr;</a>
            </div>
      </div>
    )
  }
}

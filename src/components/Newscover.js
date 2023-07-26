import React, { Component } from 'react'
import Newsitems from './Newsitems'
import Load from './Load';
import PropTypes from 'prop-types'

export default class Newscover extends Component {
    articles = [];
    static defaultProps = {
      country : 'in',
      pageSize : 8,
      category : 'general'
    }
    static propTypes = {
      country : PropTypes.string,
      pageSize : PropTypes.number,
      category : PropTypes.string
    }

    capitalizeFletter = (string)=>{
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props){
        super(props);
        this.state = {
            articles : this.articles,
            loading : false,
            page : 1
        }
        document.title = `${this.capitalizeFletter(this.props.category)} - NewsMonkey`
    }

  
    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=855eae95f1b64ad5855f4242dc1c9f1d&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading : true})
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({articles : parseData.articles, totalResults : parseData.totalResults, loading: false});
    }

    handlePrevClick = async ()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=855eae95f1b64ad5855f4242dc1c9f1d&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading : true})
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({articles : parseData.articles, page : this.state.page - 1, loading: false});
    }

    handleNextClick = async ()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=855eae95f1b64ad5855f4242dc1c9f1d&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading : true})
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({articles : parseData.articles, page : this.state.page + 1, loading: false});
    }

    render() {
    return (
      <div className='container my-5'>
        <h1 className='text-center' style={{margin : "40px 0px"}}>NewsMonkey - Top <span style={{color : "blue"}}>{this.capitalizeFletter(this.props.category)}</span> Headlines</h1>
        {this.state.loading && <Load/>}
        <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
                return <div className="col-md-3 my-3" key={element.url}>
                <Newsitems title={element.title ? element.title.slice(0,45) : ""} desc={element.description ? element.description.slice(0,80) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://images.wsj.net/im-822227/social"} newsUrl={element.url} source={element.source.name} dateTime ={element.publishedAt} author={element.author}/>
              </div>
              
            })}
            <div className="container d-flex justify-content-between my-3">
            <button disabled={this.state.page<=1} onClick={this.handlePrevClick} type="button" className="btn btn-dark">&larr; Previous</button>
            <button disabled={this.state.page>= Math.ceil (this.state.totalResults / this.props.pageSize)} type="button" onClick={this.handleNextClick} className="btn btn-dark" id='next'>Next &rarr;</button>
            </div>
        </div>
    </div>
    )
  }
}

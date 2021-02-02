import React from 'react';

import { MovieCard } from '../../components/MovieCard';

export class MovieCardContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title:"",
      released:"",
      genre:"",
      movieData:"",
      searchKeyword:""
    };
    this.getMovieDetails = this.getMovieDetails.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount(){

  }
  componentDidMount(){
    let defaultMovie = "Aaranya kaandam"
    this.getMovieDetails(defaultMovie);
  }
  getMovieDetails(movieName){
    const apiUrl = "https://www.omdbapi.com/?";
    const apiKey = "7c5d79b";
    const finalUrl = apiUrl + 'apiKey=' + apiKey + '&t=' + movieName + '&plot=full';
    let response;
    fetch(finalUrl)
        .then(response => response.json())
        .then(
            // data => console.log(data),
            data => this.setState({
                movieData:data
            })
        );
  }
  handleSubmit(e){
    e.preventDefault();
    let searchKeyword = this.state.searchKeyword;
    console.log(searchKeyword.length)
    if(searchKeyword.length > 0){
      this.getMovieDetails(this.state.searchKeyword);
    }
  }
  handleChange(e){
    console.log(e.target.value);
    this.setState({
      searchKeyword:e.target.value
    })
  }
  render(){
      return(
        <div class="container">
          <MovieCard handleChange={this.handleChange} handleSubmit={this.handleSubmit} fullData={this.state.movieData}></MovieCard>
        </div>
      )
    }
}

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
      searchKeyword:"",
      notFound: false,
      searchType: "movie"
    };
    this.getMovieDetails = this.getMovieDetails.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
    this.handleMovieTypeChange = this.handleMovieTypeChange.bind(this);
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
    const searchType = this.state.searchType;
    const finalUrl = apiUrl + 'apiKey=' + apiKey + '&t=' + movieName + '&type=' +searchType + '&plot=full';
    fetch(finalUrl)
        .then(response => response.json())
        .then(this.handleResponse)
        .then(
            // data => console.log(data),
            data => this.setState({
                movieData:data
            })
        )
        .catch(error => console.log(error) );

  }
  handleResponse (response){
    if (response.Response === "False") {
      console.log("inside")
      this.setState({
        notFound:true
      })
    }
    else{
      this.setState({
        notFound:false
      })
    }
  return response;
  }
  handleSubmit(e){
    e.preventDefault();
    let searchKeyword = this.state.searchKeyword;
    console.log(searchKeyword.length)
    if(searchKeyword.length > 0){
      this.getMovieDetails(this.state.searchKeyword,this.state.searchType);
    }
  }
  handleChange(e){
    console.log(e.target.value);
    this.setState({
      searchKeyword:e.target.value
    })
  }
  handleMovieTypeChange(e){
    console.log(e.target.value);
    this.setState({
      searchType:e.target.value
    })
  }
  render(){
      return(
        <div class="container">
          <MovieCard notFound={this.state.notFound} 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit}
          handleMovieTypeChange={this.handleMovieTypeChange} 
          fullData={this.state.movieData}>
          </MovieCard>
          {
            this.state.notFound ? <p>Movie not found</p> : null
          }
        </div>
      )
    }
}

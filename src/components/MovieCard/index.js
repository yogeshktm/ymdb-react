import React from 'react';

export class MovieCard extends React.Component{
    render(){
        const {Title,Poster,Year,Actors,Plot,Language,Genre,Director,Runtime,Country} = this.props.fullData;
        return(
          <>
          <form onSubmit={this.props.handleSubmit} className="search-box">
           <input autoFocus className="search" type="search" id="search" autoComplete="off" onChange={this.props.handleChange} placeholder="Search"/>
          <button className="btn" type="submit">SEARCH</button>
         </form>
          <div class="card">
            <div class="movie-info">
              <p><span className="release-year">{Year}</span> - <span className="country">{Country}</span></p>
              <h2 className="movie-title">{Title}</h2>
              <p class="lang">Language: {Language}</p>
              <p>Runtime: {Runtime}</p>
              <p>Genre: {Genre}</p>
              <p>Director : {Director}</p>
              <p>Cast: {Actors}</p>
              <p>Plot:</p>
              <p>{Plot}</p>
             </div>
             <img class="poster-img" src={Poster} alt={Title}/>
          </div>
          </>
        );
      }
}
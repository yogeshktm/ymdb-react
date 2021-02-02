import React from 'react';
export class MovieCard extends React.Component{
    render(){
        const {imdbID,totalSeasons,imdbRating,Title,Poster,Year,Actors,Plot,Language,Genre,Director,Runtime,Country} = this.props.fullData;
        let imdbLink = 'https://imdb.com/title/' + imdbID;
        return(
          <>
          <form onSubmit={this.props.handleSubmit} className="search-box">
          <input autoFocus className="search" type="search" id="search" autoComplete="off" onChange={this.props.handleChange} placeholder="Search"/>
          <select onChange={this.props.handleMovieTypeChange}>
            <option>movie</option>
            <option>series</option>
            <option>episodes</option>
          </select>
          <button className="btn" type="submit">SEARCH</button>
         </form>
        <div class="card">
          <div class={ this.props.notFound === true ? 'hidden' : 'movie-info' }>
              <p><span className="release-year">{Year}</span> - <span className="country">{Country}</span></p>
              <h2 className="movie-title">{Title}</h2>
              <p class="lang">Language: {Language}</p>
              <p>Runtime: {Runtime}</p>
              <p>Genre: {Genre}</p>
              <p>Director : {Director}</p>
              <p>Cast: {Actors}</p>
              <p>Plot:</p>
              <p>{Plot}</p>
              <p>IMDB Rating : {imdbRating} / 10</p>
              <a href={imdbLink}>IMDB Link</a>
              </div>
              <img class="poster-img" src={Poster === 'N/A' ? `https://dummyimage.com/390x610/c89f9b/fff.png&text=Poster+not+found` : Poster} alt={Title}/>
            </div>
          </>
        );
      }
}
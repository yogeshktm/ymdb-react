import React from 'react';
export class MovieCardPlaceholder extends React.Component{
    render(){
        return(
          <>
        <div class="card">
            <div class="movie-info placeholder">
                <h3 class="title-ph" aria-hidden="true"></h3>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </div>  
            <img class="poster-img" src="https://dummyimage.com/390x610/c89f9b/fff.png&text=Loading..." alt="loading..."/>
        </div>
          </>
        );
      }
}
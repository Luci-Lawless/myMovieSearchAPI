import React from 'react';

class Movie extends React.Component {

  render() {
    return (
      <div className="search-result">
        <div className="align-img">
          {this.props.poster && <img src={this.props.poster} alt={""}/>}
        </div>
        {this.props.title && <h2>{this.props.title} ({this.props.year})</h2>}
        {this.props.genre && <p>Genre: {this.props.genre}</p>}
        {this.props.country && <p>Country: {this.props.country} </p>}
        {this.props.director && <p>Director: {this.props.director}</p>}
        {this.props.actors && <p>Actors: {this.props.actors}</p>}
        <br />
        <div>
          {this.props.plot && <p>{this.props.plot}</p>}
        </div>
          <p>{this.props.error}</p>
      </div>
    );
  }
}

export default Movie;

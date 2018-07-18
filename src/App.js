import React, { Component } from 'react';
import Title from './Components/Title';
import Form from './Components/Form';
import Movie from './Components/Movie';
import './App.css';

const API_KEY =  process.env.REACT_APP_MY_KEY;

class App extends Component {
  state = {
    title: undefined,
    year: undefined,
    genre: undefined,
    country: undefined,
    director: undefined,
    actors: undefined,
    plot: undefined,
    poster: undefined,
    error: undefined
  }

  getMovie = async (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const api_call = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${title}`);
    const data = await api_call.json();
    if (title !== undefined) {
      this.setState({
        title: data.Title,
        year: data.Year,
        genre: data.Genre,
        country: data.Country,
        director: data.Director,
        actors: data.Actors,
        plot: data.Plot,
        poster: data.Poster,
        error: data.Error
      })
    } else {
      this.setState({
        title: undefined,
        year: undefined,
        genre: undefined,
        country: undefined,
        director: undefined,
        actors: undefined,
        plot: undefined,
        poster: undefined,
        error: "Movie not found!"
      });
    }
  }

  handleClear = () => {
    this.setState({
          title: undefined,
          year: undefined,
          genre: undefined,
          country: undefined,
          director: undefined,
          actors: undefined,
          plot: undefined,
          poster: undefined,
          error: undefined
        });
  }

  render() {

    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div>
              <Title />
              <br />
              <br />
              <Form getMovie={this.getMovie} handleClear={this.handleClear} />
              <Movie
                title={this.state.title}
                year={this.state.year}
                genre={this.state.genre}
                country={this.state.country}
                director={this.state.director}
                actors={this.state.actors}
                plot={this.state.plot}
                poster={this.state.poster}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

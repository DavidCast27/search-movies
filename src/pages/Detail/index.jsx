import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getMovieById } from '../../api/movieServices';
import ButtonBackToHome from '../../components/ButtonBackToHome';

class Detail extends Component {

 static propTypes = {
    id: PropTypes.string,
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string
    })
  }

  state = { movie: {} };

  _fetchMovie = ({id}) => {
    getMovieById(id)
      .then(movie => {
        console.log(movie);
        this.setState({ movie })
      });
  }



  componentDidMount () {
    const { id } = this.props.match.params;
    this._fetchMovie({ id })
  }

  render() {
    const { Title, Poster, Actors, Metascore, Plot} = this.state.movie;
    return (
      <div>  
        <ButtonBackToHome />
        <h1>{Title}</h1>
        <img src={Poster} alt={Title} />
        <h3>{Actors}</h3>
        <span>{Metascore}</span>        
        <p> {Plot}</p>
      </div>
    );
  }
}

export default Detail;
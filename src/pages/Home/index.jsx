import React, {useState} from 'react';
import Title from '../../components/Title'
import SearchForm from '../../components/SearchForm';
import MoviesList from '../../components/MoviesList';

function Home () {
  const [results, setResults] = useState([]);
  const [usedSearch, setUsedSearch] = useState(false);

  const _handleResults = (results) => {
    setResults(results);
    setUsedSearch(true);
  }
  const _renderResults = () => {
    return results.length === 0 
      ? <p> Sorry! Result not found</p>
      : <MoviesList movies={results} />
  }
  
  return (
    <div>
      <Title> Search Movies</Title>
      <div className="searchForm-wrapper ">
        <SearchForm onResults={_handleResults}/>
      </div>
      {usedSearch 
        ? _renderResults()
        : <small> Use the form to search a movies</small>
      }      
    </div>
  );
  
}

export default Home;
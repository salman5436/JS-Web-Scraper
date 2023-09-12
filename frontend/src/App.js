import { useState } from 'react'
import './App.css';

function App() {
  // setting state for the url and search term input values
  const [url, setUrl] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  // setting state for the array of search results
  const [searchResults, setSearchResults] = useState([])

  // handleSubmit function will make an API call to the backend to begin the process of communicating with the backend to scrape the URL & count the number of times the search term appears.
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/scrape', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        url: url,
        searchTerm: searchTerm,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        // add the new search results to the existing array
        setSearchResults([...searchResults, data])
      })

  }

  return (
    <div className="App">
      <h1>JavaScript Web Scraper</h1>
      <form onSubmit={handleSubmit}>
        <label>
          URL:
          <input className='url-input' type="text" value={url} onChange={e => setUrl(e.target.value)} required pattern="https://.*" placeholder='Format: https://example.com' />
        </label>
        <label>
          Search Term:
          <input className='search-input' type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} required/>
        </label>
        <input className='submit-button' type="submit" value="Submit" />
      </form>
      <div className='results-div'>
        <h2>Results</h2>
        <table className='table-main-styling'>
          <thead>
            <tr className='table-row-styling'>
              <th>Date</th>
              <th>URL</th>
              <th>Search Term</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>

            {/* map through the array of search results and render each one */}
            {searchResults.map((result, index) => (
              <tr key={index} className='table-row-styling-sub'>
                <td>{result.time}</td>
                <td>{result.url}</td>
                <td>{result.searchTerm}</td>
                <td>{result.occurrences}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
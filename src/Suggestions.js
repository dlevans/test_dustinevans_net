import React from 'react'

const Suggestions = (props) => {
  const options = props.results.filter(s=> s.searchterm.toLowerCase().includes(props.query.toLowerCase().trim())).map(r => (
    <div className="item" key={r.id}>
        <li>        
        <a href={r.url} target="_blank" rel="noopener noreferrer">
        <img alt={r.alt} src={r.url} />
        </a>
        <span className="caption">{r.searchterm}</span>
        </li> 
    </div>
  ))
  return <ul>{options}</ul>
}

export default Suggestions
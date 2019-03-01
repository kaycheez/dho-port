import React, { useState, Fragment } from 'react';
import './List.scss'

const List = props => {

  const [isExpanded, setIsExpanded] = useState(false);

  const expandOptions = (options) => {
    return options.map((option, i) => {
      return (
        <a href="#" className="option" key={i}>{option}</a>
      )
    })
  }

  return (
    <Fragment>
        <button className="category" onClick={() => setIsExpanded(!isExpanded)}>{props.title}</button>
        {
          isExpanded
          ? expandOptions(props.options)
          : null
        }
    </Fragment>
  )
}

export default List;
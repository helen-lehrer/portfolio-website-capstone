/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'

const NavigationDots = ({ active }) => {

let nav = {
  'home': {color: '#ec917f'},
  'about': {color: '#e1eb9e'},
  'work': {color: '#93e4c8'},
  'skills': {color: '#95bfec'},
  'contact': {color: '#c3b7f1'},
}

  return (
    <div className="app__navigation">
      {['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (
          <a
          href={`#${item}`}
          key={item + index}
          id={`id${item}`}
          className="app__navigation-dot"
          style={active === item ? { background: `${nav[item].color}` } : { }}
          />
          )
      )}
    </div>
  )
}

export default NavigationDots
import React from 'react'

const NavigationDots = ({ active }) => {

let nav = {
  'home': {color: '#EDC4BC'},
  'about': {color: '#E0E7B5'},
  'work': {color: '#B7E5D5'},
  'skills': {color: '#B4D5F9'},
  'contact': {color: '#CFC5F6'},
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
import React from 'react'

const NavigationDots = ({ active }) => {

let nav = {
  'home': {color: '#ff0000a7'},
  'about': {color: '#ffbb0089'},
  'work': {color: '#00800073'},
  'skills': {color: '#0000ff72'},
  'contact': {color: '#4c008269'},
}

  return (
    <div className="app__navigation">
      {['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (
          <a
          href={`#${item}`}
          key={item + index}
          id={`id${item}`}
          className={`app__navigation-dot ${item}`}
          style={active === item ? { background: `${nav[item].color}`, hover: '#ff0000a7' } : { }}
          />
          )
      )}
    </div>
  )
}

export default NavigationDots
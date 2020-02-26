import React from 'react'

const Rainbow = (WrappedComponent) => {

  const colours = ['red', 'pink', 'orange', 'blue', 'green', 'yellow', 'purple', 'brown', 'tan', 'turquoise'];
  const randomColour = colours[Math.floor(Math.random() * 10)];
  const className = randomColour + '-text';

  return (props) => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>  
  )
  
}

export default Rainbow
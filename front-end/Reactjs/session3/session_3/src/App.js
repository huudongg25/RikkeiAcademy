import React from 'react'

class App extends React.Component {
  constructor() {
    super()
  }
  componentWillMount() {
    console.log('1');
  }
  componentDidMount() {
    console.log('2')
  }
  render() {
    
    return (
      <h1>OK</h1>
    )
  }
}

export default App
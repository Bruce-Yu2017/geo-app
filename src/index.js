import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      longitude: ""
    }
  }
  
  render() {
    window.navigator.geolocation.getCurrentPosition((location) => {
      console.log(location);
      this.setState({longitude: location.coords.longitude})
    }, (error) => {
      console.log(error)
    })
    return (
      <div>
        longtitute: {this.state.longitude}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
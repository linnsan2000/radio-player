import React from "react"
import Stations from "../stations"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      channels: []
    }
  }

  componentDidMount() {
    fetch("http://api.sr.se/api/v2/channels?format=json&size=100").then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({
        channels: json.channels
      })
    })
  }

  render() {
    if (this.state.channels.length > 0) {
      return (
        <div>
          <div className="logga">
            <img src="http://sverigesradio.se/kvinnoregistret/assets/images/sr-logo-white.png" id="logo"/>
            <h2 id="tag">Lyssna på alla våra radiokanaler här</h2>
          </div>
          <div className="page">
            {this.state.channels.map((item) => {
              return <Stations key={item.id}
                name={item.name}
                image={item.image}
                tagline={item.tagline}
                siteurl={item.siteurl}
                liveaudio={item.liveaudio.url}
                schedule={item.scheduleurl}
                background={item.color} />
            })}
          </div>
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
  }

}

export default App

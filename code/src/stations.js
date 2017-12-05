import React from "react"

class Stations extends React.Component {
  render() {
    return (
      <div className="container" style={{ background: `#${this.props.background}` }}>
        <div className="radioBox">
          <img src={this.props.image} alt="Radiokanalens logotyp" />
          <h1>{this.props.name}</h1>
          <p>{this.props.tagline}</p>
          <h3>Direktsändning från {this.props.name}:</h3>
          <audio controls>
            <source src={this.props.liveaudio} type="audio/mp3" />
              Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    )
  }
}

export default Stations

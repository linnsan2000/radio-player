import React from "react"

class Stations extends React.Component {
  render() {
    return (
      <div className="container" style={{ background: `#${this.props.background}` }}>
        <div className="radioBox">
          <img src={this.props.image} alt="Radiokanalens logotyp" />
          <h1>{this.props.name}</h1>
          <p>{this.props.tagline}</p>
          <audio controls>
            <track kind="lyssna" src={this.props.liveaudio} type="audio/mp3" />
              Your browser does not support the audio element.
          </audio>
          <a href="{this.props.siteurl}">{this.props.name}:s sajt</a>
          <a href="{this.props.schedule}">{this.props.name}:s tablå</a>
        </div>
      </div>
    )
  }
}

export default Stations

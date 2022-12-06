import React from "react";
import ReactDOM from "react-dom";
import VideoRecorder from "react-video-recorder";
import { Grid } from "@material-ui/core";

import "./styles.css";

class App extends React.Component {
  state = {
    isRecordingComplete: false,
    videoData: null
  };
  handleRecordingComplete = data => {
    this.setState({
      isRecordingComplete: true,
      videoData: window.URL.createObjectURL(data)
    });
  };

  handleCreateNewVideo = () => {
    this.setState({
      isRecordingComplete: false,
      videoData: null
    });
  };

  render() {
    const { isRecordingComplete, videoData } = this.state;
    console.log(videoData);
    return (
      <div className="App">
        <h1>Hello There...</h1>
        {!isRecordingComplete && (
          <Grid container>
            <Grid item xs={10}>
              <VideoRecorder
                timeLimit={30000}
                onRecordingComplete={this.handleRecordingComplete}
              />
            </Grid>
          </Grid>
        )}
        {isRecordingComplete && (
          <React.Fragment>
            <Grid container>
              <Grid item xs={10}>
                <video
                  style={{ width: "100%", height: "100%" }}
                  src={videoData}
                  controls
                />
              </Grid>
            </Grid>
            <button onClick={this.handleCreateNewVideo}>
              Take another video
            </button>
          </React.Fragment>
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

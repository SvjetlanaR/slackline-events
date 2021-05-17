import React, { Component } from 'react';
import ReactPlayer from 'react-player';


export default class TreeProtection extends Component {
  render() {
    return (
      <div>
        <h1>Tree Protection </h1>

        For more information visit 
        <a href="https://www.slacklineinternational.org/tree-protection/">SlacklineInternational Tree Protection</a>
        <br/>


        <div>
      <ReactPlayer
          url="https://www.youtube.com/watch?v=uKGTJZeQvxY"
          controls
          width= "400px"
          height= "200px"
        />
      </div>

      </div>
    )
  }
}

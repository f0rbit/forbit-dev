import React, { Component } from "react";

export default class TweetText extends Component {
  getTextColour = (type) => {
    if (type === "USER" || type === "LINK") {
      return "text-sky-500 font-bold hover:text-sky-600";
    } else {
      return "text-sky-500 hover:text-sky-600";
    }
  };
  getTweet = (tweet) => {
    const objects = [];
    for (var i = 0; i < tweet.length; i++) {
      if ("url" in tweet[i]) {
        objects.push(
          <a href={tweet[i].url} className={this.getTextColour(tweet[i].type)}>
            {tweet[i].content}
          </a>
        );
      } else {
        objects.push(<span>{tweet[i].content}</span>);
      }
    }
    return objects;
  };

  render() {
    return <span>{this.getTweet(this.props.tweet)}</span>;
  }
}

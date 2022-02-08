import React, { Component } from "react";
import { AbandonedIcon } from "../icons/status_icons/abandoned";
import { DevelopmentIcon } from "../icons/status_icons/development";
import { LiveIcon } from "../icons/status_icons/live";
import { ReleasedIcon } from "../icons/status_icons/released";
import { StoppedIcon } from "../icons/status_icons/stopped";
export default class ProjectStatus extends Component {
  getLiveCard = () => {
    return (
      <div className="relative flex w-min items-center justify-center gap-2 text-green-600">
        <div>
          <div className="h-4 w-4 fill-current">{LiveIcon()}</div>
        </div>
        <p> Live </p>
      </div>
    );
  };
  getDevelopmentCard = () => {
    return (
      <div className="relative flex w-min items-center justify-center gap-2 text-fuchsia-400">
        <div className="h-4 w-4 fill-current">{DevelopmentIcon()}</div>
        <p> Development </p>
      </div>
    );
  };
  getStoppedCard = () => {
    return (
      <div className="relative flex w-min items-center justify-center gap-2 text-red-400">
        <div>
          <div className="h-4 w-4 fill-current">{StoppedIcon()}</div>
        </div>
        <p> Stopped </p>
      </div>
    );
  };
  getReleasedCard = () => {
    return (
      <div className="relative flex w-min items-center justify-center gap-2 text-green-500">
        <div>
          <div className="h-4 w-4 fill-current">{ReleasedIcon()}</div>
        </div>
        <p> Released </p>
      </div>
    );
  };
  getAbandonedCard = () => {
    return (
      <div className="relative flex w-min items-center justify-center gap-2 text-red-400">
        <div>
          <div className="h-4 w-4 fill-current"> {AbandonedIcon()}</div>
        </div>
        <p> Abandoned </p>
      </div>
    );
  };

  getStatus = (status) => {
    switch (status.toLowerCase()) {
      case "live":
        return this.getLiveCard();
      case "development":
        return this.getDevelopmentCard();
      case "stopped":
        return this.getStoppedCard();
      case "released":
        return this.getReleasedCard();
      case "abandoned":
        return this.getAbandonedCard();
      default:
        return this.getDevelopmentCard();
    }
  };

  render() {
    return (
      <div className="font-semibold">{this.getStatus(this.props.status)}</div>
    );
  }
}

/// <reference path="../../../typings/tsd.d.ts" />

import * as $ from "jquery";
import * as React from "react";
import {Contact} from "../../models/Contact";
import {t} from "../../models/I18N";
import {Room} from "../../models/Room";

interface HeaderProps {
  room: Room;
  members: Contact[];
}

export class Header extends React.Component<HeaderProps, {}> {

  constructor() {
    super();
  }

  public componentDidMount(): void {
    $(".dropdown.basic.button").dropdown();
    $(".toggleinfo.basic.button").click(() => {
      $("#side")
        .sidebar("setting", "transition", "overlay")
        .sidebar("toggle");
    });
  }

  public render(): JSX.Element {
    return (
      <div className="ui top borderless fixed menu">
        <div className="header item">
          {this.props.room.name}
        </div>
        <div className="right menu">
          <div className="horizontally fitted item">
            <i className="user icon"></i>
            {
              this.props.members.length > 0 ? this.props.members.length : "Loading"
            }
          </div>
          <div className="item">
            <div className="circular ui icon toggleinfo basic button">
              <i className="info icon"></i>
            </div>
          </div>
          <div className="horizontally fitted item">
            <div className="ui icon input">
              <input type="text" placeholder="Search..." />
              <i className="search link icon"></i>
            </div>
          </div>
          <div className="item">
            <div className="circular ui icon floating dropdown basic button">
              <i className="ellipsis horizontal icon"></i>
              <div className="menu">
                <div className="item">
                  <i className="tasks icon"></i> {t("application", "chat_tasks")}
                </div>
                <div className="item">
                  <i className="file outline icon"></i> {t("application", "chat_files")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

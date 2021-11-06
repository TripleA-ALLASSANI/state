import "./App.css";
import React, { Component } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";
import data from "./data";
import Person from "../Person/Person";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  state = {
    shows: false,
    date: Date,
  };

  tick() {
    this.setState({
      date: new Date()
    });
  }

  shows = () => {
    this.setState({ shows: true });
  };

  getIntervalTime = () => {
    const total = this.state.date.toLocaleTimeString()  ;
    return total
  }

  render() {
    if (this.state.shows) {
      this.state.date.toLocaleTimeString();
      return (
        <div className="App">
          <header className="App-header">
            <Container>
              {data.map((profile) => (
                <Person
                  bio={profile.bio}
                  fullName={profile.fullName}
                  imgSrc={profile.imgSrc}
                  key={profile.fullName}
                  profession={profile.profession}
                ></Person>
              ))}
            </Container>
          </header>
        </div>
      );
    } else {
      return (
        <div className="Button">
          <h2>Time : {this.getIntervalTime()}</h2>
          <div >
            <button className="btn btn-success btn-lg" onClick={this.shows}>Shows</button>
          </div>
        </div>
      );
    }
  }
}

export default App;

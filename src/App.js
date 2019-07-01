import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import CatList from "./components/CatList";
import pushok from "./img/pushok.jpg";
import ryzhik from "./img/ryzhik.jpg";
import myau from "./img/myau.jpg";
import NavBar from "./components/NavBar";
import Cat from "./components/Cat";

class App extends Component {
  static defaultProps = {
    cats: [
      {
        name: "Pushok",
        age: 2,
        src: pushok,
        facts: [
          "Pushok loves eating.",
          "Pushok loves sleeping.",
          "Pushok wants to cuddle with Myau!"
        ]
      },
      {
        name: "Ryzhik",
        age: 3,
        src: ryzhik,
        facts: [
          "Ryzhik has soooo much energy!",
          "Ryzhik is highly intelligent.",
          "Ryzhik loves catching mice."
        ]
      },
      {
        name: "Myau",
        age: 4,
        src: myau,
        facts: [
          "Myau is not the slimest cat",
          "Myau loves Pushok.",
          "Myau loves eating strawberries."
        ]
      }
    ]
  };

  state = {};
  render() {
    const links = this.props.cats.map(cat => cat.name);
    return (
      <section>
        <NavBar links={links} />
        <Switch>
          <Route
            exact
            path="/cats"
            render={() => <CatList cats={this.props.cats} />}
          />
          <Route
            exact
            path="/cats/:name"
            render={routeProps => (
              <Cat {...routeProps} cats={this.props.cats} />
            )}
          />
          <Route render={() => <CatList cats={this.props.cats} />} />
        </Switch>
      </section>
    );
  }
}

export default App;

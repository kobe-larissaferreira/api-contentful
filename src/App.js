import "./App.css";
import React from "react";
import { client } from "./client";
import Posts from "./components/Posts";

class App extends React.Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    client
      .getEntries()
      .then((response) => {
        console.log(response);
        this.setState({ articles: response.items });
      })
      .catch(console.error);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <header>
            <div className="wrapper">
              <h1 className="title">Api Rick And Morty - Contentful</h1>
            </div>
          </header>
          <main>
            <div className="wrapper post-list">
              <Posts posts={this.state.articles} />
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;

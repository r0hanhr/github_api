import React, { Component, Fragment } from "react";
import SearchComponent from "./Component/SearchComponent";
import axios from "axios";
import DisplayGitUser from "./Component/DisplayGitUser";
class App extends Component {
  state = {
    term: "",
    reposData: "",
    loading: false,
  };
  onTermSubmit = async term => {
    let Client_Id = "Iv1.b2f614291a60d17a";
    let Client_Secret = "b9b42391cef6d6e677751c73ab1abad7785d5d4c";
    let response = await axios.get(
      `https:api.github.com/users/${term}?Client_Id${Client_Id}&Client_Secret${Client_Secret}`
    );
    let repos = await axios.get(
      `https://api.github.com/users/${term}/repos?Client_Id${Client_Id}&Client_Secret${Client_Secret}`
    );
    this.setState({ term: response.data, reposData: repos, loading: true });
  };
  render() {
    return (
      <Fragment>
        <SearchComponent onTermSubmit={this.onTermSubmit} />
        <section className="container my-2">
          <article>
            <hr className="hr" />
            <DisplayGitUser
              users={this.state.term}
              repos={this.state.reposData}
              loading={this.state.loading}
            />
          </article>
        </section>
      </Fragment>
    );
  }
}

export default App;

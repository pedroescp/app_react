
import React, { Component } from "react";

import TrelloList from "./TrelloList";
import { connect } from "react-redux";
import TrelloActionButton from "../components/TrelloActionButton";

class App extends Component {
  render() {

    const { lists } = this.props;

    return (
      <div className="App">
        <h2>PROGRAMING A TRELLOS</h2>
        <div style={styles.listContainer}>
          {lists.map(list => (
            <TrelloList  listID={list.id} title={list.title} cards={list.cards} />
          ))}
          <TrelloActionButton list />
        </div>
      </div>

    );
  }
}

const styles ={
  listContainer: {
    display: "Flex",
    flexDirection: "row",
    marginRight: 1
    
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);

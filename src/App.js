import React, { Component } from 'react';
import FamilyMember from './components/family_member.js';
import treeNode from './utils/tree_node.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.tree = new treeNode({name:'God'});
    this.tree.addChild({name:'Bob'});
    this.tree.addChild({name:'Susie'});
    this.tree.addChild({name:'Sam'});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to familyTree!</h1>
        </header>
        <div>
          <FamilyMember name='Dog' treeNode={this.tree}/>
        </div>
      </div>
    );
  }
}

export default App;

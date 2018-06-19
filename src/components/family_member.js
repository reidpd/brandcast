import React, { Component } from 'react';
import treeNode from '../utils/tree_node.js';
import '../App.css';

class FamilyMember extends Component {
  constructor(props, name, treeNode) {
    super(props);
    this.name = props.name;
    this.tree = props.treeNode;
    this.state = {
      isHighlighted: false,
    }
    // this would be used to eventually only show family members that are highlighted in sequence, so as to clean up the presentation
  }

  renderChildren = () => {
    const containerDivOpening = "<div class='family-member-box'>";
    let childrenNodes = [];
    this.tree.children.forEach((child) => {
      const opening = "<li class='child'>";
      const name = child.name || 'Bob';
      const treeNodeProps = child.props || {};
      const component = new FamilyMember({}, name, treeNodeProps);
      const end = "</li>";
      const str = opening + component + end;
      childrenNodes.push(str);
    });
    const containerDivClosing = "</div>"
    return childrenNodes.join('\n')
  }

  render() {
    return (
      <div className="family-member-box">
        <h4 className="name-tag">{this.name}</h4>
        <ul id="members">
          {this.renderChildren()}
        </ul>
        {/* <button class="edit-member-props" onClick={this.tree.addProp(key,val)}>Change Props</button> // create modal for form input towards adding/modifying props */}
        <button className="add-member-button" onClick={this.tree.addChild({name:'Bob'})}>+++</button> {/* create modal for giving initial props & name */}
        <button className="remove-member-button" onClick={this.tree.removeChild()}>---</button> {/*either create DFS to identify exact component, or devise indexing system*/}
      </div>
    )
  }
}

export default FamilyMember;

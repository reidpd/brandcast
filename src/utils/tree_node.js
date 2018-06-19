const treeNode = class {
  constructor(props) {
    this.props = props || {};
    this.children = [];
  }

  addProp(key, val) {
    this.props[key] = val;
  }

  addChild(props) {
    this.children.push(new treeNode(props));
  }

  removeChild(id) {
    this.children = this.children.filter((child, idx) => idx !== id);
  }
}

module.exports = treeNode;

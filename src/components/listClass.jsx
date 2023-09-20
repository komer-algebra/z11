import { Component } from 'react';
import PropTypes from 'prop-types'

export default class ListClass extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    this.users = this.props.users;                          // mora biti tu!!!!
    this.listItems = this.users.map(
      i => <li type="a" key={"lItem" + i.name}> User {i.name} ima {i.age} godina </li>
    );

    return (
      <ol>
        {this.listItems}
      </ol>
    );
  }
}

ListClass.propTypes = {
  users: PropTypes.array
}

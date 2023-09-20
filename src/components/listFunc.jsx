import PropTypes from 'prop-types'
export default function ListFunc({ users }) {

  const listItems = users.map(i => <li key={"cItem" + i.name}> User {i.name} ima {i.age} godina </li>);
  return (
    <ol>
      {listItems}
    </ol>
  );
}

ListFunc.propTypes = {
  users: PropTypes.array
}

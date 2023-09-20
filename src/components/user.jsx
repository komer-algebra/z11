import PropTypes from 'prop-types';
export default function User({ name, age, changeName, id }) {
  return (
    <>
      <p>User {name} ima {age} godina!</p>
      <label htmlFor={id}>Promjeni ime za ovog korisnika: </label><input id={id}type="text" value={name} onChange={changeName}></input>
    </>
  );
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  changeName: PropTypes.func
}

import { useState } from 'react'
import './App.css'
import ListClass from './components/listClass';
import ListFunc from './components/listFunc';
import User from './components/user';

function App() {

  const initialUsers = [
    { name: "Marko", age: 18 },
    { name: "Ivica", age: 30 },
    { name: "Ana", age: 24 },
    { name: "Nikola", age: 61 },
    { name: "Roko", age: 19 }
  ]

  const [users, setUsers] = useState(initialUsers);

  const increaseAge = () => {
    setUsers(users.map(user => { return { ...user, age: user.age + 1 } }))
  }

  const changeName = []
  for (let i = 0; i < users.length; i++) {
    changeName.push(
      (function (event) {
        const newUsers = [...users];
        newUsers[i].name = event.target.value;
        setUsers(newUsers);
      })
    );
  }

  const userParagraphs = [];
  for (let i = 0; i < users.length; i++) {
    userParagraphs.push(<User key={"userParagraph" + i} name={users[i].name} age={users[i].age} changeName={changeName[i]} id={"par"+i} />);
  }

  return (
    <>
      <h1>Vjezba state-a i event-a</h1>

      <h2>Koristim class komponentu liste</h2>
      <ListClass users={users} />

      <h2>Koristim funkcijsku komponentu liste</h2>
      <ListFunc users={users} />

      <h2>Paragraf s buttonom po svakom user-u</h2>
      {userParagraphs}

      <h2>Button koji pvecava godine svima!</h2>

      <button onClick={increaseAge}> AGE++ </button>
    </>
  )
}

export default App;

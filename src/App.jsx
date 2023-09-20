import { useState } from 'react'
import './App.css'
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

  const userParagraphs = users.map((user,index) => <User key={"userParagraph" + index} name={user.name} age={user.age} changeName={changeName[index]} id={"par"+index} />);

  return (
    <>
      <h1>z11 - liste - state - event</h1>
      <h2>Paragraf s button-om po svakom user-u</h2>
      {userParagraphs}
    </>
  )
}

export default App;

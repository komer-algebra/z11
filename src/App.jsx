import { useState } from 'react'
import './App.css'
import User from './components/user';

function App() {

  const initialUsers = [
    { id: 1, name: "Marko", age: 18 },
    { id: 2, name: "Ivica", age: 30 },
    { id: 3, name: "Ana", age: 24 },
    { id: 4, name: "Nikola", age: 61 },
    { id: 5, name: "Roko", age: 19 }
  ]

  const [users, setUsers] = useState(initialUsers);

  // const changeName = []
  // for (let i = 0; i < users.length; i++) {
  //   changeName.push(
  //     (function (event) {
  //       const newUsers = [...users];
  //       newUsers[i].name = event.target.value;
  //       setUsers(newUsers);
  //     })
  //   );
  // }

  const changeName = (event, index) => {
    const newUsers = [...users];
    newUsers[index].name = event.target.value;
    setUsers(newUsers);
  }

  const userParagraphs = users.map((user,index) => <User key={user.id} name={user.name} age={user.age} changeName={(event) => changeName(event,index)} id={"par"+index} />);

  return (
    <>
      <h1>z11 - liste - state - event</h1>
      <h2>Paragraf s button-om po svakom user-u</h2>
      {userParagraphs}
    </>
  )
}

export default App;

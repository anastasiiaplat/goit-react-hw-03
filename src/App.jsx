

import { useState } from 'react'
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'
import usersContact from './components/users.json'
import { nanoid } from 'nanoid';

function App() {
  
  const [users, setUsers] = useState(usersContact);
  
  const onAddUser = (formData) => {
    const finalUser = {
      ...formData,
      id: nanoid()
    };
    setUsers((prevState) => [...prevState, finalUser]);
  };

  return (
    <div>
  <h1>Phonebook</h1>
      <ContactForm onAddUser={onAddUser} />
  <SearchBox />
  <ContactList users={users} />
</div>

  )
}

export default App

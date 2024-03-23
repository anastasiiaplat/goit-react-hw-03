

import { useState } from 'react'
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'
import usersContact from './components/users.json'

function App() {
  
  const [users, setUsers] = useState(usersContact);
  
  
  return (
    <div>
  <h1>Phonebook</h1>
  <ContactForm/>
  <SearchBox />
  <ContactList users={users} />
</div>

  )
}

export default App

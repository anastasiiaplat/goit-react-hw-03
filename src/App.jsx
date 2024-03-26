

import { useEffect, useState } from 'react'
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'
import usersContact from './components/users.json'
import { nanoid } from 'nanoid';

function App() {
  
  const [users, setUsers] = useState(() => {
    const stringfiedUsers = localStorage.getItem("users");
    if (!stringfiedUsers) return usersContact;
    const parcelUsers = JSON.parse(stringfiedUsers);
    return parcelUsers;
  });
  

  const [filter, setFilter] = useState('');

  useEffect(() => {
  localStorage.setItem("users", JSON.stringify(users))
},[users])

  const onAddUser = (formData) => {
    const finalUser = {
      ...formData,
      id: nanoid()
    };
    setUsers((prevState) => [...prevState, finalUser]);
  };

  const onDeleteUser = (userId) => {
  setUsers(prevUsers => prevUsers.filter(user => user.id !== userId))
}

  
  const onChangeFilter = (event) => {
    setFilter(event.target.value)
  }
  
  const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
  <h1>Phonebook</h1>
      <ContactForm onAddUser={onAddUser} />
      <SearchBox filter={filter} onChangeFilter={ onChangeFilter} />
      <ContactList users={filteredUsers} onDeleteUser={ onDeleteUser} />
</div>

  )
}

export default App

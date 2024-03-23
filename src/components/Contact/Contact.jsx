

const Contact = ({ users }) => {
  return (<ul>
    <li>Name: {users.name}</li>
    <li>Number: {users.number}</li>
    </ul>
  )
}

export default Contact
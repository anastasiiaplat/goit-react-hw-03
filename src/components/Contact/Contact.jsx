const Contact = ({ user, onDeleteUser }) => {
  return (
    <li>
      <p>Name: {user.name}</p>
      <p>Number: {user.number}</p>
      <button type="button" onClick={()=>onDeleteUser(user.id)}>Delete</button>
    </li>
  );
};

export default Contact;

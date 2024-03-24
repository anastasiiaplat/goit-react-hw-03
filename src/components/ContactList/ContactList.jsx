import Contact from "../Contact/Contact"

const ContactList = ({ users, onDeleteUser }) => {
  return (
    <ul>
      {users.map((user) => {
        return <Contact key={user.id} user={user} onDeleteUser={onDeleteUser } />
      })}
    </ul>
  );
};

export default ContactList;

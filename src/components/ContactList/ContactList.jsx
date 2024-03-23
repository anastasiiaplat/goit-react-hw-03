import Contact from "../Contact/Contact"

const ContactList = ({ users }) => {
  return (
    <ul>
      {users.map((user) => {
        return <Contact key={user.id} user={user} />
      })}
    </ul>
  );
};

export default ContactList;

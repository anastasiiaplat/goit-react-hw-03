const Contact = ({ user }) => {
  return (
    <li>
      <p>Name: {user.name}</p>
      <p>Number: {user.number}</p>
    </li>
  );
};

export default Contact;

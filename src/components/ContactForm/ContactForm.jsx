

const ContactForm = ({onAddUser}) => {

  const handleSubmit = (event) => {
    event.preventDefault();

    const userName = event.currentTarget.elements.userName.value;
    const userNumber = event.currentTarget.elements.userNumber.value;

    const formData = {
      userName,
      userNumber
    }

    onAddUser(formData)
  };



  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <br/>
        <input type="text" name="userName"
          placeholder="Name"
          required></input>
        <br/>
      </label>
      <label>
        <span>Number</span>
        <br />
        <input
          type="tel" 
          name="userNumber" 
          placeholder="+370..." 
          required
        />
        <br />
      </label>
      <button type="submit">Add contact</button>
    </form>
  )
}

export default ContactForm
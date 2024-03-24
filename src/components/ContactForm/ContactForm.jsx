

const ContactForm = ({ onAddUser }) => {


  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.currentTarget.elements.name.value;
    const number = event.currentTarget.elements.number.value;

    const formData = {
      name,
      number
    }

    onAddUser(formData);

    event.currentTarget.reset();

     
  };



  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <br/>
        <input type="text" name="name"
          placeholder="Name"
          required></input>
        <br/>
      </label> {''}
      <label>
        <span>Number</span>
        <br />
        <input
          type="tel" 
          name="number" 
          placeholder="+370..." 
          required
        />
        <br />
      </label> {''}
      <button type="submit">Add contact</button>
    </form>
  )
}

export default ContactForm
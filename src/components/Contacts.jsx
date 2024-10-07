import { useState } from "react";
import ContactsList from "./ContactsList";
import { v4 } from "uuid";

const inputs = [
  { type: "text", name: "name", placeHolder: "Name" },
  { type: "text", name: "lastName", placeHolder: "Last Name" },
  { type: "email", name: "email", placeHolder: "Email" },
  { type: "number", name: "phone", placeHolder: "Phone" },
];

function Contacts() {
  const [alert, setAlert] = useState("");
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const addHandler = () => {
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("please enter valid data!");
      return;
    }
    setAlert("");
    const newContact = { ...contact, id: v4() };
    setContacts([...contacts, newContact]);
    setContact({
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
    console.log(contacts);
  };

  const deleteHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContact(newContacts);
  };

  return (
    <div>
      <div>
        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            placeholder={input.placeHolder}
            name={input.name}
            value={contact[input.name]}
            onChange={changeHandler}
          />
        ))}
        <button onClick={addHandler}>Add Contact</button>
      </div>
      <div>{alert && <p>{alert}</p>}</div>
      <ContactsList contacts={contacts} deleteHandler={deleteHandler} />
    </div>
  );
}

export default Contacts;

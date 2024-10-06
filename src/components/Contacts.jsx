import { useState } from "react";
import ContactsList from "./ContactsList";

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
    console.log(contact);
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
    setContacts([...contacts, contact]);
    setContact({
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
    console.log(contacts);
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
      <ContactsList contacts={contacts} />
    </div>
  );
}

export default Contacts;

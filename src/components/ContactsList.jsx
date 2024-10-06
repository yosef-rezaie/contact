function ContactsList({ contacts }) {
  return (
    <div>
      <h3>ContactsList</h3>
      {contacts.length ? <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <p>{contact.name}</p> <p>{contact.lastName}</p>
            <p>{contact.emai}</p> <p>{contact.phone}</p>
            <button>Delete</button>
          </li>
        ))}
      </ul> : <p>No Contacts Yet !</p>}
    </div>
  );
}

export default ContactsList;

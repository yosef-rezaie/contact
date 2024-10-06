function ContactsList({contacts}) {
  return (
    <div>
      <h3>ContactsList</h3>
      <ul>
        {contacts.map(contact => <li key={contact.id}>{contact.name}</li>)}
      </ul>
    </div>
  )
}

export default ContactsList
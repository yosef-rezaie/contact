function ContactItem({ data: { id, name, email, lastName, phone } }) {
  return (
    <li key={id}>
      <p>{name}</p> <p>{lastName}</p>
      <p>{email}</p> <p>{phone}</p>
      <button>Delete</button>
    </li>
  );
}

export default ContactItem;

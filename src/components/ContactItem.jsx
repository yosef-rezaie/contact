function ContactItem({
  data: { id, name, email, lastName, phone },
  deleteHandler,
}) {
  return (
    <li key={id}>
      <p>{name}</p> <p>{lastName}</p>
      <p>{email}</p> <p>{phone}</p>
      <button onClick={() => deleteHandler(id)}>Delete</button>
    </li>
  );
}

export default ContactItem;

import styles from "./ContactItem.module.css"

function ContactItem({
  data: { id, name, email, lastName, phone },
  deleteHandler,
}) {
  return (
    <li className={styles.item}>
      <p>{name}</p> <p>{lastName}</p>
      <p>{email}</p> <p>{phone}</p>
      <button onClick={() => deleteHandler(id)}>Delete</button>
    </li>
  );
}

export default ContactItem;

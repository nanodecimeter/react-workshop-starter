import ContactListItem from "./ContactListItem";
import AddContactButton from "./AddContactButton";
import { useContacts } from "../context/ContactsContextProvider";

/**
 * A sidebar with links to view each contact, or add new contacts.
 *
 * The contacts list can be filtered by name.
 */
export default function Sidebar() {
  const { contacts, selectedContact, setSelectedContact } = useContacts();

  function handleContactClicked(contact) {
    setSelectedContact(contact);
  }

  return (
    <nav className="side-bar">
      {/* Search box */}
      <header>
        <h2>Friends</h2>
        <input type="text" />
      </header>

      {/* List of contacts */}
      <section>
        <ul>
          {contacts?.map?.((contact) => (
            <ContactListItem
              key={contact._id}
              contact={contact}
              onClick={handleContactClicked}
              isActive={contact._id === selectedContact?._id}
            />
          ))}
        </ul>
      </section>

      {/* Add contact button */}
      <footer>
        <AddContactButton />
      </footer>
    </nav>
  );
}

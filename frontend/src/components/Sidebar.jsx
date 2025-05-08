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
  const [searchTerm, setSearchTerm] = useState("");

  // Function to filter contacts based on search term
  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  function handleContactClicked(contact) {
    setSelectedContact(contact);
  }

  return (
    <nav className="side-bar">
      {/* Search box */}
      <header>
        <h2>Friends</h2>
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </header>

      {/* List of contacts */}
      <section>
        <ul>
          {filteredContacts?.map?.((contact) => (
            <ContactListItem
              key={contact._id}
              contact={contact}
              onClick={handleContactClicked}
              isActive={contact === selectedContact}
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

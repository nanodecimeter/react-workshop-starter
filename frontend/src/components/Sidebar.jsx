import ContactListItem from "./ContactListItem";
import AddContactButton from "./AddContactButton";

/**
 * A sidebar with links to view each contact, or add new contacts.
 *
 * The contacts list can be filtered by name.
 */
export default function Sidebar({contacts, onContactClicked, selectedContact}) {

    const contactListItems = contacts.map((contact) => (
    <ContactListItem key={contact._id} contact = {contact} onClick={onContactClicked} isActive={contact === selectedContact}/> ));
            

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
            {contactListItems}
        </ul>
      </section>

      {/* Add contact button */}
      <footer>
        <AddContactButton />
      </footer>
    </nav>
  );
}
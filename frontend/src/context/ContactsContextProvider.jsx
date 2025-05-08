import { useContext, createContext, useState } from "react";
import { INITIAL_CONTACTS } from "../data/initial-contacts";

const ContactsContext = createContext();

export function useContacts() {
  return useContext(ContactsContext);
}

export default function ContactsContextProvider({ children }) {
  const [contacts, setContacts] = useState(INITIAL_CONTACTS);
  const [selectedContact, setSelectedContact] = useState(INITIAL_CONTACTS[0]);

  // TODO Fetch contacts from server

  // TODO On initial page mount, fetch contacts.

  // TODO Function for adding a new contact

  // TODO Function for deleting a contact

  // TODO Function for editing a contact

  const context = {
    contacts,
    selectedContact,
    setSelectedContact
  };

  return <ContactsContext.Provider value={context}>{children}</ContactsContext.Provider>;
}

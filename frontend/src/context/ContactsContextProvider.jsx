import { useState, createContext, useContext } from "react";
import { INITIAL_CONTACTS } from "../data/initial-contacts";

const ContactsContext = createContext();

export function useContacts() {
  return useContext(ContactsContext);
}



export default function ContactsContextProvider({ children }) {
    const [contacts, setContacts] = useState(INITIAL_CONTACTS);
    const [selectedContact, setSelectedContact] = useState(INITIAL_CONTACTS[0]);

    const context = {
        contacts,
        selectedContact,
        setSelectedContact
    }

    return (
        <ContactsContext.Provider value={context}>
            {children}
        </ContactsContext.Provider>
    )
}
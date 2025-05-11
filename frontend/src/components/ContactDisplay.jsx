import { useContacts } from "../context/ContactsContextProvider";
import { getPhotoUrl } from "../util/image-utils";

export default function ContactDisplay(){
    const {selectedContact} = useContacts();

    if (!selectedContact) return <div>No friend selected</div>;


    const {name, phoneNumber, funFact, photoUrl} = selectedContact;

    return(
        <>
        <section className="contact-display">
            <img src = {getPhotoUrl(photoUrl)}/>
            <h1>{name}</h1>
            <h3>{phoneNumber}</h3>
            <p>Fun Fact: {funFact}</p>
        </section>
        </>
    )
}
import { getPhotoUrl } from "../util/image-utils";

export default function ContactDisplay(props){

    const contact = props.contact;
    // console.log(contact);
    return(
        <>
        <section className="contact-display">
            <img src = {getPhotoUrl(contact.photoUrl)}/>
            <h1>{contact.name}</h1>
            <h3>{contact.phoneNumber}</h3>
            <p>Fun Fact: {contact.funFact}</p>
        </section>
        </>
    )
}
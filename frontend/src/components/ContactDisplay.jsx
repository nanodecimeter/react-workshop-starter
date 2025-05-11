import { getPhotoUrl } from "../util/image-utils";

export default function ContactDisplay({contact}){

    const {name, phoneNumber, funFact, photoUrl} = contact;

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
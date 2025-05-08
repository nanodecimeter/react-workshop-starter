import { getPhotoUrl } from "../util/image-utils";

/* eslint-disable react/prop-types */
/**
 * The main application area; displays detailed info about a single contact.
 */
export default function ContactDisplay({ selectedContact }) {
  if (!selectedContact) return <div>No friend selected</div>;

  const { name, phoneNumber, funFact, photoUrl } = selectedContact;
  return (
    <section className="contact-display">
      <img src={getPhotoUrl(photoUrl)} alt={`${name} portrait`} />
      <h1>{name}</h1>
      {phoneNumber && <h3>{phoneNumber}</h3>}
      {funFact && <p>Fun Fact: {funFact}</p>}
    </section>
  );
}

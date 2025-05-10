import { DEFAULT_IMAGE } from "../util/image-utils"

export default function ContactDisplay(){
    return(
        <>
        <section className="contact-display">
            <img src = {DEFAULT_IMAGE}/>
            <h1>Contanct name goes here</h1>
            <h3>555-1234</h3>
            <p>Fun Fact: This is compontesied</p>
        </section>
        </>
    )
}
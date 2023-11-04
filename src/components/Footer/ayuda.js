import React, { useState } from "react";
import { Link } from "react-router-dom";

function ContactForm() {
    const [message, setMessage] = useState("");
    const [details, setDetails] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Send form data to server using HTTP request
        console.log("Message:", message);
        console.log("Details:", details);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Message:
                <input
                    type="text"
                    name="message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                />
            </label>
            <br />
            <label>
                Details:
                <textarea
                    name="details"
                    value={details}
                    onChange={(event) => setDetails(event.target.value)}
                />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default ContactForm;

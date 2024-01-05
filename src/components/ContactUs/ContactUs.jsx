import { Component } from "react";
import "./contactus.css"


export class ContactUs extends Component {

    render() {
        return (
            <div className="container">
                <div className="contact_container">
                    <img src="./contact.png" alt="" />

                    <div className="form_h1">
                        <h1>CONTACT US</h1>
                        <form>

                            <div>
                                <input id="name" type="text" placeholder="Name" />
                            </div>
                            <div>
                                <input id="email" type="email" placeholder="Email" />
                            </div>
                            <div className="phone_input">
                                <input id="phone" type="text" placeholder="Phone"></input>
                            </div>
                            <div class="full-width">
                                <textarea id="message" placeholder="Message"></textarea>
                            </div>
                            <div class="full-width">
                                <button type="submit"  >SEND</button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>

        )
    }
}

export default ContactUs
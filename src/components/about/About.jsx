import { Component } from "react";
import "./about.css"


export class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="about_container">
                    <img src="about.png" alt="" />
                    <div className="about_text">
                        <h1>APARElS WEARABLE HISTORY</h1>
                        <p>APARELS was founded by our designer and creator Lily Chen in the fictional city of Riverside in 2018. The Obsidian in our product line inherits its deep black color from being woven from fine, dark threads. Our stunning fabric draws upon its rich history in a contemporary way. Our unique product line presents the dedicated individually handcrafted precision of artistry and design.
                            <br /><br />While developing a new piece, Lily is not focused on the historical or aesthetic value - she is dedicatedly working on it, focusing on the end result and trying to technically realize the very vision of the piece in her mind.
                            <br /><br />While we cater to various market needs, our goal is to design and create bespoke, authentically handcrafted pieces of clothing that will be cherished and worn with a personalized touch for many generations to come.</p>

                    </div>

                </div>
            </div>
        )
    }

}




export default About
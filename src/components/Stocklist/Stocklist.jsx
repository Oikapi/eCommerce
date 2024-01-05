import { Component } from "react";
import "./stocklist.css"
import { MdArrowDropDown } from "react-icons/md";

export class Stocklist extends Component {
    state = { isVisible1: true, isVisible2: true }
    toggleVisibility = (x) => {
        if (x === 1) {
            this.setState((prevState) => ({
                isVisible1: !prevState.isVisible1,
            }))
        }
        else {
            this.setState((prevState) => ({
                isVisible2: !prevState.isVisible2,
            }))
        }
    };
    render() {
        const isVisible1 = this.state.isVisible1;
        const isVisible2 = this.state.isVisible2;

        return (
            <div className="container">
                <div className="stocklist_container">
                    <img src="./stocklist.png" alt="" />
                    <h1><b><u>STOCKLISTS</u></b></h1>
                    <div className="buttons">
                        <div className="country_button">
                            <button onClick={() => this.toggleVisibility(1)} className="arrow" >UNITED KINGDOM <MdArrowDropDown /> </button>
                        </div>
                        {isVisible1 && <div className="country_info">
                            <ul>
                                <li><h3>SHOWROOMBY18</h3>
                                    <p>20 WEST COTE DRIVE THACKLEY BRADFORD, UNITED KINGDOM </p>
                                    <p>PHONE: +37529-653-64-93 </p>
                                    <p>MO-FR 13-20 </p>
                                    <p>SAT 12-18</p>
                                </li>
                                <li><h3>UK FASHION</h3><p>20 WEST COTE DRIVE THACKLEY BRADFORD, UNITED KINGDOM</p>
                                    <p>PHONE: +37529-866-45-95</p>
                                    <p>MO-FR 12-19 </p>
                                    <p>SAT 12-18</p></li>
                                <li><h3>LIMITED SHOWROOM</h3>
                                    <p>20 WEST COTE DRIVE THACKLEY BRADFORD, UNITED KINGDOM </p>
                                    <p>PHONE: +37529-500-07-71 </p>
                                    <p>MO-SUN 10-21</p></li>
                            </ul>
                        </div>}
                        <div className="country_button">
                            <button onClick={() => this.toggleVisibility(2)} className="arrow" >CANADA <MdArrowDropDown /> </button>
                        </div>
                        {isVisible2 && <div className="country_info">
                            <ul>
                                <li><h3>CONCEPT CANADA  </h3>
                                    <p>20 WEST COTE DRIVE THACKLEY BRADFORD, CANADA </p>
                                    <p>PHONE: +37529-125-78-88 </p>
                                    <p>MO-SUN 11-20 </p>
                                </li>
                            </ul>
                        </div>}
                    </div>
                </div>
            </div >
        )
    }
}

export default Stocklist
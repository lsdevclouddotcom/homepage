import { Component, ReactNode } from "react";
import '../navbar.css'
import { constants } from "../constants";
export class Navbar extends Component {

    render(): ReactNode {

        return <div id="navbar">

            <div className="navbar-title">
                <h1><a href="/">LSDevCloud.com</a></h1>
            </div>
            <h1 className="navbar-link"><a href="/contact">Contact</a></h1>
            <h1 className="navbar-link"><a href="/about">About</a></h1>
            <h1 className="navbar-link"><a href={constants.gitHubProfile}>GitHub</a></h1>
        </div>
    }

}
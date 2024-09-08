import { Component, ReactNode } from "react";
import '../footer.css';
import { constants } from "../constants";

export class Footer extends Component {

    render(): ReactNode {

        return <div id="footer">
            <div id="footer-spacer" className="spacer" />
            <div id="footer-content">
                <div className="footer-links">
                    <h2><a className="underline" href="/legal">Legal</a></h2>
                </div>

                <h2><i>This atrocity is <a href={constants.repoUrl}>open source</a>.</i></h2>
                <h4>Made with ☕ and <img src="/react.svg" className="footer-react-icon" />.</h4>
            </div>
        </div>
    }
}
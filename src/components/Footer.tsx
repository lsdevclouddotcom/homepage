import { Component, ReactNode } from "react";
import '../footer.css';

export class Footer extends Component {

    render(): ReactNode {

        return <div id="footer">
            <div id="footer-spacer" className="spacer" />
            <div id="footer-content">
                <h2>This atrocity is <a href="https://github.com/lsdevclouddotcom/homepage">open source</a>.</h2>
                <h2>Made with ☕ and <img src="/react.svg" className="footer-react-icon" />.</h2>
            </div>
        </div>
    }
}
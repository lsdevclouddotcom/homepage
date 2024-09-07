import { Component, ReactNode } from "react";
import '../footer.css';

export class Footer extends Component {

    render(): ReactNode {

        return <div id="footer">
            <div id="footer-content">

                <h2>This atrocity is <a href="https://github.com/lsdevclouddotcom/homepage">open source</a>.</h2>
                <h2>Made with ☕ and 🍺.</h2>
            </div>
        </div>
    }
}
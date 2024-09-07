import { useEffect } from "react"

function Home() {

    useEffect(() => {

        // essential feature; required for this website to function AT ALL
        const kekw = document.getElementById("kekw") as HTMLElement;
        setTimeout(() => {
            kekw.style.display = "none";
        }, 2500);

    });

    return (
        <div id="page">
            <h2 className="page-title">Home</h2>
            <div className="spacer" />
            <img src="/kekw.gif" id="kekw" />
        </div>
    )
}

export default Home

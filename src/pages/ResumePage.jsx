import myFile from "../assets/Syed-Kazmi-Resume.pdf";

export default function ResumePage() {
    return (
        <div className="container pt-4 myOutlet">
            <h2>Resume</h2>
            <div>
                <a href={myFile} download={myFile}>
                    <svg
                        className="iconSVG"
                        viewBox="0 0 24 24"
                        fill="grey"
                        height="3em"
                        width="3em"
                    >
                        <path d="M5 3h14a2 2 0 012 2v14c0 1.11-.89 2-2 2H5a2 2 0 01-2-2V5c0-1.1.9-2 2-2m3 14h8v-2H8v2m8-7h-2.5V7h-3v3H8l4 4 4-4z" />
                    </svg>
                </a>
                <p>
                    Download Resume (click icon)
                </p>

            </div>
            <section className="features-icons bg-light text-left col-6">
                <div className="container">
                    <div className="row p-2">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex">
                                <i className="bi-window m-auto text-primary" />
                            </div>
                            <h3>Front-End</h3>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">HTML</li>
                                <li className="list-group-item">CSS</li>
                                <li className="list-group-item">JavaScript</li>
                                <li className="list-group-item">Responsive Design</li>
                                <li className="list-group-item">React</li>
                                <li className="list-group-item">BootStrap</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="features-icons bg-light text-left col-6">
                <div className="container">
                    <div className="row p-2">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex">
                                <i className="bi-window m-auto text-primary" />
                            </div>
                            <h3>Back-End</h3>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">APIs</li>
                                <li className="list-group-item">Node</li>
                                <li className="list-group-item">MySQL, Sequelize</li>
                                <li className="list-group-item">MongoDB, Mongoose</li>
                                <li className="list-group-item">REST</li>
                                <li className="list-group-item">GraphQL</li>
                                <li className="list-group-item">MERN</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
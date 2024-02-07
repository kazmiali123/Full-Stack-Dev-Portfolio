// import all image resources for card displays
import ProjOne from "../assets/Landing Page View.png";
import ProjTwo from "../assets/outdoor-companion.jpg";
import ProjThree from "../assets/weather-dashboard.png";
import ProjFour from "../assets/jate-pwa.png";
import ProjFive from "../assets/javascript-quiz.jpg";
import ProjSix from "../assets/mern.png";

// default export function for portfolio component
export default function PortfolioPage() {
    // handles the image onclick behaviour and redirect user to respective project deployed website
    const linkOne = (projectLink) => {
        var a = document.createElement("a");
        a.href = projectLink;
        const newTab = true;
        if (newTab) {
            a.setAttribute("target", "_blank");
        }
        a.click();
    };

    return (
        // displayed on the website on the portfolio tab, using bootstrap masonry layout with svg icons that link to deployed websites and github repositories.
        <div className="container pt-4 myOutlet ">
            <h2>Portfolio</h2>
            <div className="row" data-masonry='{"percentPosition": true }'>
                {/* {First protfolio project card display and links} */}
                <div className="col-sm-6 col-lg-4 mb-4">
                    <div className="card">
                        <img
                            className="projectImage"
                            src={ProjOne}
                            alt="ProjOne"
                            onClick={() =>
                                linkOne(
                                    "https://immense-falls-09245-0efd61764ddd.herokuapp.com/"
                                )
                            }
                        />
                        <div className="card-body">
                            <h5 className="card-title">Community Event Hub</h5>
                            <p className="card-text">
                                Find events happening in your community, in detail or map-view,
                                and signup to share yours.
                            </p>
                            <p>
                                Technologies: Handlebars, Express(REST API), Node, JawsDB(MySQL)
                            </p>
                            <div className="cardIcons">
                                <a
                                    className="text-body-secondary"
                                    href="https://immense-falls-09245-0efd61764ddd.herokuapp.com/"
                                    target="_blank"
                                >
                                    <svg
                                        className="iconSVG"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        height="2em"
                                        width="2em"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M5 8v12h14V8H5zm0-2h14V4H5v2zm15 16H4a1 1 0 01-1-1V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1zM7 10h4v4H7v-4zm0 6h10v2H7v-2zm6-5h4v2h-4v-2z" />
                                    </svg>
                                </a>
                                <a
                                    className="text-body-secondary"
                                    href="https://github.com/kazmiali123/Community-Event-Hub"
                                    target="_blank"
                                >
                                    <svg
                                        className="iconSVG"
                                        viewBox="0 0 1024 1024"
                                        fill="currentColor"
                                        height="2em"
                                        width="2em"
                                    >
                                        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4 mb-4">
                    <div className="card">
                        <img
                            className="projectImage"
                            src={ProjTwo}
                            alt="ProjOne"
                            onClick={() =>
                                linkOne("https://kazmiali123.github.io/My-Outdoor-Companion/")
                            }
                        />
                        <div className="card-body">
                            <h5 className="card-title">Outdoor Companion</h5>
                            <p className="card-text">
                                While you headout for an activity, view the current weather,
                                read quote of the day, and listen to a mood based playlist of
                                your choosing.
                            </p>
                            <p>Technologies: HTML, CSS, JS, Server-Side API, Local Storage</p>
                            <div className="cardIcons">
                                <a
                                    className="text-body-secondary"
                                    href="https://kazmiali123.github.io/My-Outdoor-Companion/"
                                    target="_blank"
                                >
                                    <svg
                                        className="iconSVG"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        height="2em"
                                        width="2em"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M5 8v12h14V8H5zm0-2h14V4H5v2zm15 16H4a1 1 0 01-1-1V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1zM7 10h4v4H7v-4zm0 6h10v2H7v-2zm6-5h4v2h-4v-2z" />
                                    </svg>
                                </a>
                                <a
                                    className="text-body-secondary"
                                    href="https://github.com/kazmiali123/My-Outdoor-Companion"
                                    target="_blank"
                                >
                                    <svg
                                        className="iconSVG"
                                        viewBox="0 0 1024 1024"
                                        fill="currentColor"
                                        height="2em"
                                        width="2em"
                                    >
                                        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4 mb-4">
                    <div className="card">
                        <img
                            className="projectImage"
                            src={ProjThree}
                            alt="ProjOne"
                            onClick={() =>
                                linkOne(
                                    "https://kazmiali123.github.io/Challange6-Server-side-API-Weather-Dashboard/"
                                )
                            }
                        />
                        <div className="card-body">
                            <h5 className="card-title">Weather Dashboard</h5>
                            <p className="card-text">
                                Type in a city to view its current weather conditions and
                                location on map. Previously searched cities are listed.
                            </p>
                            <p>Technologies: HTML, CSS, JS, Server-side API, Local Storage</p>
                            <div className="cardIcons">
                                <a
                                    className="text-body-secondary"
                                    href="https://kazmiali123.github.io/Challange6-Server-side-API-Weather-Dashboard/"
                                    target="_blank"
                                >
                                    <svg
                                        className="iconSVG"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        height="2em"
                                        width="2em"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M5 8v12h14V8H5zm0-2h14V4H5v2zm15 16H4a1 1 0 01-1-1V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1zM7 10h4v4H7v-4zm0 6h10v2H7v-2zm6-5h4v2h-4v-2z" />
                                    </svg>
                                </a>
                                <a
                                    className="text-body-secondary"
                                    href="https://github.com/kazmiali123/Challange6-Server-side-API-Weather-Dashboard.git"
                                    target="_blank"
                                >
                                    <svg
                                        className="iconSVG"
                                        viewBox="0 0 1024 1024"
                                        fill="currentColor"
                                        height="2em"
                                        width="2em"
                                    >
                                        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4 mb-4">
                    <div className="card">
                        <img
                            className="projectImage"
                            src={ProjFour}
                            alt="ProjOne"
                            onClick={() =>
                                linkOne(
                                    "https://j-a-t-e-pwa-application-syed-kazmi.onrender.com/"
                                )
                            }
                        />
                        <div className="card-body">
                            <h5 className="card-title">Just Another Text Editor (PWA)</h5>
                            <p className="card-text">
                                Single page online text editor that can be installed locally and
                                used in offline mode.
                            </p>
                            <p>
                                Technologies: Progressive Web Application, Webpack
                                (service-worker, manifest, cache storage), IndexedDB
                            </p>
                            <div className="cardIcons">
                                <a
                                    className="text-body-secondary"
                                    href="https://j-a-t-e-pwa-application-syed-kazmi.onrender.com/"
                                    target="_blank"
                                >
                                    <svg
                                        className="iconSVG"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        height="2em"
                                        width="2em"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M5 8v12h14V8H5zm0-2h14V4H5v2zm15 16H4a1 1 0 01-1-1V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1zM7 10h4v4H7v-4zm0 6h10v2H7v-2zm6-5h4v2h-4v-2z" />
                                    </svg>
                                </a>
                                <a
                                    className="text-body-secondary"
                                    href="https://github.com/kazmiali123/J.A.T.E-Progressive-Web-App"
                                    target="_blank"
                                >
                                    <svg
                                        className="iconSVG"
                                        viewBox="0 0 1024 1024"
                                        fill="currentColor"
                                        height="2em"
                                        width="2em"
                                    >
                                        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4 mb-4">
                    <div className="card">
                        <img
                            className="projectImage"
                            src={ProjFive}
                            alt="ProjOne"
                            onClick={() =>
                                linkOne(
                                    "https://kazmiali123.github.io/Challange4---Javascript-Quiz/"
                                )
                            }
                        />
                        <div className="card-body">
                            <h5 className="card-title">JavaScript Quiz</h5>
                            <p className="card-text">
                                Answer all the questions before time is up, see your result and highscores.
                            </p>
                            <p>Technologies: HTML, CSS, JS, Web API, Local Storage</p>
                            <div className="cardIcons">
                                <a
                                    className="text-body-secondary"
                                    href="https://kazmiali123.github.io/Challange4---Javascript-Quiz/"
                                    target="_blank"
                                >
                                    <svg
                                        className="iconSVG"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        height="2em"
                                        width="2em"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M5 8v12h14V8H5zm0-2h14V4H5v2zm15 16H4a1 1 0 01-1-1V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1zM7 10h4v4H7v-4zm0 6h10v2H7v-2zm6-5h4v2h-4v-2z" />
                                    </svg>
                                </a>
                                <a
                                    className="text-body-secondary"
                                    href="https://github.com/kazmiali123/Challange4---Javascript-Quiz.git"
                                    target="_blank"
                                >
                                    <svg
                                        className="iconSVG"
                                        viewBox="0 0 1024 1024"
                                        fill="currentColor"
                                        height="2em"
                                        width="2em"
                                    >
                                        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4 mb-4">
                    <div className="card">
                        <img className="projectImage" src={ProjSix} alt="ProjOne" />
                        <div className="card-body">
                            <h5 className="card-title">MERN Stack</h5>
                            <p className="card-text">
                                Full Stack single-page web application using MERN.
                            </p>
                            <p>Technologies: React (router, bootstrap), Express, Node, MongoDB, GraphQL, Stripe</p>
                            <div className="cardIcons">
                                <a className="text-body-secondary" href="#" target="">
                                    <svg
                                        className="iconSVG"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        height="2em"
                                        width="2em"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M5 8v12h14V8H5zm0-2h14V4H5v2zm15 16H4a1 1 0 01-1-1V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1zM7 10h4v4H7v-4zm0 6h10v2H7v-2zm6-5h4v2h-4v-2z" />
                                    </svg>
                                </a>
                                <a className="text-body-secondary" href="#" target="">
                                    <svg
                                        className="iconSVG"
                                        viewBox="0 0 1024 1024"
                                        fill="currentColor"
                                        height="2em"
                                        width="2em"
                                    >
                                        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

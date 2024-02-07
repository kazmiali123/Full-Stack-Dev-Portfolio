// About Me landing page with a profile picture and information
import profileImage from "../assets/profilePic.jpg";

export default function AboutPage() {
    return (
        <div className="container pt-4 myOutlet ">
            <div className="profileBox shadow p-3 mb-5">
                <img className="profileImage" src={profileImage} alt="ProfileImage" />
            </div>
            <section className="features-icons bg-light d-flex">
                <div class="container AboutMeBox">
                    <div class="row">
                        <div class="col">
                            <h2>About Me</h2>
                            <br></br>
                            <row>
                                <p>
                                    Hello,
                                    <br></br>
                                    <br></br>
                                    I Syed am a graduate of the University of Toronto, Full-Stack Web Development Bootcamp. With a backgound in Energy Engineering from Ontario Tech Unversity, allowed me to transfer my time-management, organizational, and problem-solving skills to learn and apply software solutions/technologies for real-world problems.
                                </p>
                            </row>
                            <br></br>
                            <row>
                                <p>
                                    Through this course I have acquired the skill of using various front-end and back-end technologies to build  full stack web applications. The Front-end technologies used are HTML, CSS, JS, Responsive Design, Handlebars, and React. While, the back-end technologies are Express, REST API, Node, GraphQL, and both MySQL and MongoDB databases.
                                </p>
                            </row>
                            <br></br>
                            <row>
                                <p>
                                    Thankyou, for taking the time to visit my web development portfolio. While here, you will find the web applications that I have created or collaborated on, using the above mentioned technologies. Also, links are provided to the deployed websites and their respective github repositories. Please view my resume for more details on my experience, and contact me through this website.
                                </p>
                            </row>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

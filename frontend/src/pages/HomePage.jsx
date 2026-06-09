import { Link } from "react-router";

function HomePage(){
    return (
        <div className="home-page ">
            <div className="overlay-home">
                <h3>THINKBOARD</h3>
                <div className="home-button">
                    <Link to='/create' id="new-note">New Note</Link>
                    <Link to='/myNotes' id="my-note">My Notes</Link>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
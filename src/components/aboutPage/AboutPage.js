import react from "react";
import { Avatar } from "./avatar/Avatar";
import './AboutPage.css';
import { Content } from "./content/Content";
import { Title } from "../../container/title/Title"

export const AboutPage = () => {

    return (
        <div className="AboutPage">

            <Title
                title="About"
                description="My Introduction"
            />

            <div className="AboutPage--mid">
                <Avatar/>
                <Content/>
            </div>

            <div className="AboutPage--bot">
                <p>Download CV</p>
            </div>

        </div>
    );
}
import react from "react";
import './ProjectPage.css';
import { Title } from "../../container/title/Title";
import { HorizontalList } from "./horizontalList/HorizontalList"

export const ProjectPage = () => {

    return (
        <div className="ProjectPage">
            <Title
                title="Projects"
                description="Completed Projects"
            />

            <HorizontalList/>

            <div className="ProjectPage--3dots">
                <div id="dot1" />
                <div id="dot2" />
                <div id="dot3" />
            </div>

        </div>
    );
}
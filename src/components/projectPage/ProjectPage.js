import react from "react";
import './ProjectPage.css';
import { Title } from "../../container/title/Title";

export const ProjectPage = () => {

    return (
        <div className="ProjectPage">
            <Title
                title="Projects"
                description="Completed Projects"
            />
        </div>
    );
}
import react from "react";
import './ProjectPage.css';
import { Title } from "../../container/title/Title";

import transeMockup from '../../assets/image/transe_mockup.png'
import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';

export const ProjectPage = (
    {
        className
    }
) => {

    const ListProject = [
        {
            mainColor: '#4A86E8',
            textColor: '#ffffff',
            title: 'Transe',

            type: 'Android Native',
            language: 'Kotlin',
            mainFeature: 'Translate via Floating screen',
            sourceCodeUrl: 'https://github.com/TorryDo/transe',

            image: transeMockup,

        }
    ];

    // ------------------ abyss below ---------------------

    const PROJECT_REGEX = new RegExp('TorryDo.\\w+');

    const item = (obj) =>
        <div className="HorizontalList--item">
            <div className="item--leftDescription">
                <h1>{obj.title}</h1>
                <div className="description">
                    <div><b>Type</b> : {obj.type}  </div>
                    <div><b>Language</b> : {obj.language}  </div>
                    <div><b>Main Feature</b> : {obj.mainFeature}  </div>
                    <div><b>Source Code</b> : {PROJECT_REGEX.exec(obj.sourceCodeUrl)} </div>
                </div>

                <div className="Project--button">
                    <p>See more</p>
                    <div className="wrapper">
                        <FiChevronRight size="100%" />
                    </div>

                </div>

            </div>

            <img src={obj.image} alt="prj" />

        </div>

    return (
        <div className={className}>
            <Title
                title="Projects"
                description="Completed Projects"
            />

            <div className="HorizontalList">
                <div className="HorizontalList--arrowIcon" >
                    <div className="HorizontalList--leftArrow">
                        <FiChevronLeft size="100%" />
                    </div>

                </div>

                <div className="HorizontalList--body" >
                    {
                        ListProject.map(it => item(it))
                    }
                </div>

                <div className="HorizontalList--arrowIcon" >
                    <div className="HorizontalList--rightArrow">
                        <FiChevronRight size="100%" />
                    </div>
                </div>
            </div>

            <div className="ProjectPage--3dots">
                <div id="dot1" />
                <div id="dot2" />
                <div id="dot3" />
            </div>

        </div>
    );
}
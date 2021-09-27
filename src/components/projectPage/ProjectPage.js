import react, { useState } from "react";
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

        },
        {
            mainColor: '#ffffff',
            textColor: '#ffffff',
            title: 'caculator',

            type: 'Android Native',
            language: 'Kotlin',
            mainFeature: 'Translate via Floating screen',
            sourceCodeUrl: 'https://github.com/TorryDo/transe',

            image: transeMockup,

        },
        {
            mainColor: '#c4c4c4',
            textColor: '#ffffff',
            title: 'portfolio',

            type: 'Front-End',
            language: 'Js',
            mainFeature: 'show my achievement',
            sourceCodeUrl: 'https://github.com/TorryDo/transe',

            image: transeMockup,

        },
    ];

    // ------------------ func below ---------------------

    const [currentPage, setCurrentPage] = useState(0)

    const projectSize = ListProject.length - 1
    const prevPage = () => {
        setCurrentPage(currentPage === 0 ? projectSize : currentPage - 1);
    }
    const nextPage = () => {
        setCurrentPage(currentPage === projectSize ? 0 : currentPage + 1);
    }
    const setPage = (page) => {
        setCurrentPage(page);
    }

    // const setColor = (id, color) => document.getElementById(id).style.color = color;

    const PROJECT_REGEX = new RegExp('TorryDo.\\w+');

    // ------------------ abyss below -----------------------

    const item = (data) =>
        <div className="project-item">
            <div className="item-leftDescription">

                <h1 id={data.mainColor}>{data.title}</h1>

                <div className="item-leftDescription__text">
                    <div><b>Type</b> : {data.type}  </div>
                    <div><b>Language</b> : {data.language}  </div>
                    <div><b>Main Feature</b> : {data.mainFeature}  </div>
                    <div><b>Source Code</b> : {PROJECT_REGEX.exec(data.sourceCodeUrl)} </div>
                </div>

                <div className="btn btn-more">
                    <div className="btn__txt">See more</div>
                    <div className="btn__icon">
                        <FiChevronRight size="100%" />
                    </div>
                </div>

            </div>

            <img src={data.image} alt="projectImage" />

        </div>

    return (
        <div className={className}>
            <Title
                title="Projects"
                description="Completed Projects"
            />

            <div className="Hlist projects">

                <div className="project-icon" >
                    <div
                        className="project-icon__arrow"
                        onClick={prevPage}
                    >
                        <FiChevronLeft size="100%" />
                    </div>

                </div>

                <div className="project-body" >
                    {
                        // item(ListProject[currentPage], currentPage)
                        ListProject.map((it, index) =>
                            <div className={index === currentPage ? 'item active' : 'item'}>
                                {item(it)}
                            </div>
                        )
                    }
                </div>

                <div className="project-icon" >
                    <div
                        className="project-icon__arrow"
                        onClick={nextPage}
                    >
                        <FiChevronRight size="100%" />
                    </div>
                </div>
            </div>

            <div className="ProjectPage-3dots">
                {
                    ListProject.map((it, index) =>
                        <div
                            className={currentPage === index ? 'dot active' : 'dot'}
                            onClick={() => setPage(index)}
                        />
                    )
                }
            </div>

        </div>
    );
}
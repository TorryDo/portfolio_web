import react from "react";
import './AboutPage.css';
import { Title } from "../../container/title/Title";

import me from "../../assets/image/me.png";
import { HiDownload, HiOutlineDownload } from 'react-icons/hi';

export const AboutPage = (
    {
        className
    }
) => {

    const MY_NAME = 'Nguyen Do Tri';
    const MY_AGE = '19';
    const MY_LITERACY = '2nd year student of PTIT university';

    const MY_DESCRIPTION = () =>
        <p>
            I'm an Android developer<br />
            I'm seeking for an <b>Opportunity</b> to improve myself on my career path <br />
            🙂
        </p>


    const achievements = [
        {
            num: '3',
            description: 'Projects'
        },
        {
            num: '1',
            description: 'Front-End'
        }
    ];

    const CV_FILE = '';

    // ---------------------------- abyss below -----------------------------

    const avt = () =>
        <div className="avt">
            <div
                className="avt__img"
                alt="avt"
            />
            <div className="avt__description" >
                <p>
                    <b>Name</b> : {MY_NAME}
                </p>
                <p>
                    <b>Age</b> : {MY_AGE}
                </p>
                <p>
                    <b>Literacy</b> : {MY_LITERACY}
                </p>
            </div>
        </div>

    const myAchivement = (it) =>
        <div className="content-achievement__item">
            <div className="num">{it.num}</div>
            <div className="des">{it.description}</div>
        </div>

    const myContent = () =>
        <div className="content">
            <p>
                {MY_DESCRIPTION()}
            </p>
            <div className="content-achievement">
                {
                    achievements.map(it =>
                        myAchivement(it)
                    )
                }
            </div>
        </div>



    return (
        <div className={className}>

            <Title
                title="About"
                description="My Introduction"
            />

            <div className="AboutPage-mid">
                {avt()}
                {myContent()}
            </div>

            <div className="btn btn-downl">
                <div className="btn__txt">Download CV</div>
                <div className="btn__icon">
                    <HiDownload size="100%" />
                </div>

            </div>

        </div>
    );
}
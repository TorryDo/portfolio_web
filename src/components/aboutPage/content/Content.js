import react from "react";
import './Content.css';

export const Content = () => {

    const achievements = [
        {
            num: 3,
            description: 'Projects'
        },
        {
            num: 1,
            description: 'Front-End'
        }
    ]

    const myAchivement = (it) =>
        <div className="Content--achievement--item">
            <div className="num">{it.num}</div>
            <div className="des">{it.description}</div>
        </div>

    return (
        <div className="Content">
            <p>
                I'm an android developer <br />
                I'm seeking for an <b>Opportunity</b> to become better
            </p>
            <div className="Content--achievement">
                {
                    achievements.map(it =>
                        myAchivement(it)
                    )
                }
            </div>
        </div>
    );
}
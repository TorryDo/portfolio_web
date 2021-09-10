import './HorizontalList.css';
import { ListProject } from './data/ListProject';

export const HorizontalList = () => {

    const PROJECT_REGEX = new RegExp('TorryDo.\\w+')

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

                <div className="button">View more</div>
            </div>
            <img src={obj.image} alt="prj" />
        </div>

    return (
        <div className="HorizontalList">
            <div className="HorizontalList--leftArrow" >
                <image className="HorizontalList--arrowIcon" />
            </div>

            <div className="HorizontalList--body" >
                {
                    ListProject.map(it => item(it))
                }
            </div>

            <div className="HorizontalList--rightArrow" >
                <image className="HorizontalList--arrowIcon" />
            </div>
        </div>
    );
}
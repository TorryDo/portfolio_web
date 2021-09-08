import './HorizontalList.css';

export const HorizontalList = () => {

    const item = () =>
        <div className="HorizontalList--item">
            
        </div>

    return (
        <div className="HorizontalList">
            <div className="HorizontalList--leftArrow" >
                <image className="HorizontalList--arrowIcon"/>
            </div>

            <div className="HorizontalList--body" >
                sdfjds;alf
            </div>

            <div className="HorizontalList--rightArrow" >
                <image className="HorizontalList--arrowIcon" />
            </div>
        </div>
    );
}
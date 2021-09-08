import './Title.css';

export const Title = (
    {
        title,
        description
    }
) => {

    return (
        <div className="TitleAndDescription">
            <div className="title">{title}</div>
            <div className="description">{description}</div>
        </div>
    );
}
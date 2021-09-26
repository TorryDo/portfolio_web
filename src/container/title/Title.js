import './Title.css';

export const Title = (
    {
        title,
        description
    }
) => {

    return (
        <div className="top-title">
            <div className="top-title__title">{title}</div>
            <div className="top-title__content">{description}</div>
        </div>
    );
}
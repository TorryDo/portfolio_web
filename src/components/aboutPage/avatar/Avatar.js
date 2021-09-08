import './Avatar.css';

export const Avatar = () => {

    return (
        <div className="Avatar">
            <div
                className="Avatar--image"
                alt="avatar"
            />
            <div className="Avatar--description" >
                <p>
                    <b>Name</b> : Nguyen Do Tri
                </p>
                <p>
                    <b>Age</b> : 19
                </p>
                <p>
                    <b>Literacy</b> : 2nd year student of PTIT university
                </p>
            </div>
        </div>
    );
}
import shrimple from '../img/shrimple.svg';

export default function Error() {
    return (
        <>
            <title>Error</title>
            <div className="container d-flex justify-content-center">
                <div className="inner-container text-center">
                    <img className="img-fluid" src={shrimple} alt="shrimple" />
                </div>
            </div>
        </>
    )
}
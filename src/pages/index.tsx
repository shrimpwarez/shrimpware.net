import shrimple from '../img/shrimple.svg';

function Index() {
    return (
        <>
            <title>shrimpware.net</title>
            <div className="container py-4 px-3 mx-auto">
                <div className="inner-container text-center">
                    <h1 className="h3">shrimpware</h1>
                    <div className="col-12">
                        <img src={shrimple} className="img-fluid" alt="shrimple" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Index

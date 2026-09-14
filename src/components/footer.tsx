import dayjs from 'dayjs';

const Footer = () => {
    return (
        <footer className="mx-auto mt-5 p-2 rounded-0 text-bg-dark">
            <div className="my-3 text-center">
                <div className="row align-items-center mb-2">
                    <a className="col-12 link-blue" href="https://github.com/shrimpwarez/shrimpware.net" target="_blank">GitHub</a>
                </div>
                <span>Compiled on: {dayjs(__BUILD_DATE__).format('DD.MM.YYYY HH:mm:ss')}</span>
            </div>
        </footer>
    );
};
export default Footer;
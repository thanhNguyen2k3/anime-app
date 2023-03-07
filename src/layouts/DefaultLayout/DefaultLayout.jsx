import Footer from '../Footer';
import Navigation from '../Navigation';
import './Global.scss';

function DefaultLayout({ children }) {
    return (
        <div className="wrapper">
            <Navigation />
            <div className="content" style={{ minHeight: '1000px' }}>
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;

import Content from '../layouts/Content';
import NavSlide from '../layouts/NavSlide';

function HomePage() {
    return (
        <div className="container">
            <section style={{ minHeight: 2000 }}>
                <NavSlide />
                <Content />
            </section>
        </div>
    );
}

export default HomePage;

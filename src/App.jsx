import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { publicPrivate } from './router/routes';
import DefaultLayout from './layouts/DefaultLayout';
import { Oval } from 'react-loader-spinner';

function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    const wrapperStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    };

    return (
        <div className="App">
            {loading ? (
                <Oval
                    height="80"
                    width="80"
                    radius="9"
                    color="#e53637"
                    ariaLabel="loading"
                    wrapperStyle={wrapperStyle}
                    secondaryColor="#000"
                />
            ) : (
                <Router>
                    <Routes>
                        {publicPrivate.map((route, index) => {
                            const Page = route.component;
                            let Layout = DefaultLayout;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </Router>
            )}
        </div>
    );
}

export default App;

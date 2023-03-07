import { useEffect, useState } from 'react';
function UseLoading() {
    const [loading, setLoading] = useState(value);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return loading;
}

export default UseLoading;

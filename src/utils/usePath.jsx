import { useLocation } from 'react-router-dom';

const usePath = () => {
    
    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    const lastPath = pathSegments[pathSegments.length - 1];

    return lastPath;
}

export default usePath;

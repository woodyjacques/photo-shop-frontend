import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function authRedirectToken(redirectTo: string) {
    const navigate = useNavigate();
    const token = localStorage.getItem("ACCESS_TOKEN");

    useEffect(() => {
        if (token) {
            navigate(redirectTo);
        }
    }, [token, navigate]);

    if (token) {
        return null;
    }
}

export default authRedirectToken;

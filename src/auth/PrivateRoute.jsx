import { useEffect } from "react";
import { useNavigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute() {
    const navigate = useNavigate();
    const { currentUser } = useSelector(state => state.user);

    useEffect(() => {
        if (!currentUser || (currentUser.other.profession !== "Employee" && currentUser.other.Profession !== "Student")) {
            navigate('/signin');
        }
    }, [currentUser, navigate]);

    if (currentUser && (currentUser.other.profession === "Employee" || currentUser.other.Profession === "Student")) {
        return <Outlet />;
    }

    // If currentUser is null or profession is not "Employee" or "Student", return null
    return null;
}

export default PrivateRoute;

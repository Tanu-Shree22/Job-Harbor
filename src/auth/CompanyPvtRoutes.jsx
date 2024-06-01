import { useEffect } from "react";
import {useNavigate,Outlet} from 'react-router-dom'
import { useSelector } from 'react-redux';
function CompanyPvtRoute(){
    const navigate =   useNavigate();
    const {currentUser} = useSelector(state=>state.user);
    let fun=useEffect(()=>{
        
    })
    if(currentUser && currentUser.other.profession==="Employer"){
        return (<><Outlet/></>)

    }
    else{
        // return (<>{navigate('/signin')}</>)
        navigate('/signin');
        return null
    }
};
export default CompanyPvtRoute;

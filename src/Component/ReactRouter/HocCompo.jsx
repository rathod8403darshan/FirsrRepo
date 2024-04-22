import React,{ useContext } from 'react'
import Header1 from './Header1'
import { useLocation, useNavigate, useParams } from 'react-router'


function HocCompo(Components) {


    const Show = () => {
        const location = useLocation();
        const navigate1 = useNavigate();
        const params1 = useParams();
        return (
            <>
                <Header1 />
                <Components params={{location,navigate1,params1}}/>
            </>
        )
    }
    return Show
}

export default HocCompo
import React, { useContext } from 'react'
import NotificationContext from '../../Context/NotificationContext/NotificationContext'

export const Notification = () => {

    const { message }  = useContext(NotificationContext)
    
    if(message === '') {
        return null
    }
    
    return (
        <div className=" alert d-flex justify-content-center">
            <div className="alert row col-sm-6 alert-danger alert-dismissible fade show" role="alert">
                <h3> 
                    {message} 
                    </h3>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    );
}

export default Notification;
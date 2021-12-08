import React, { useState } from 'react'

const Context = React.createContext()

export const NotificationContextProvider = ({ children }) => {
    const [message, setMessage] = useState('')


    const setNotification = (message, sec) => {
        window.scrollTo(0, 0);
        setMessage(message)
        setTimeout(() => {
            setMessage('')
        }, sec)
    }

    return (
        <Context.Provider
            value={{
                message,
                setNotification
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default Context
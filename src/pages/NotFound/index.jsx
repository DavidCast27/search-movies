import React from 'react'
import ButtonBackToHome from '../../components/ButtonBackToHome'
import Title from '../../components/Title'

function NotFound() {
    return (
        <div>
            <Title> 404!</Title>
            <h2 className="subtitle">Sorry. Page Not Found</h2>
            <ButtonBackToHome />
        </div>
    )
}

export default NotFound

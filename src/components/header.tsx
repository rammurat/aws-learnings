import React from 'react'
import ReactDOM from 'react-dom'

interface HeaderProps { 
    userName: string; 
    email: string; 
}

// NORMAL FUNCTIONAL COMPONENT
const Header = (props: HeaderProps) => {
    return (<header>
        <h3>Header</h3>
        Hello {props.userName}, you are registered with {props.email}!
    </header>)
}

export default Header;
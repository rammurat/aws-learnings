import React from 'react'
import ReactDOM from 'react-dom'

interface NavigationProps { 
    links: {
        id: number;
        name: string;
        href: string;
    }[]; 
}

export const Navigation = (props: NavigationProps) => {
    return (<div className="t-navigation">
        {props.links.map((item) => {
            return <a key={item.id} href={item.href} target="_blank"> {item.name} </a>
        })}
    </div>)
}

export default Navigation


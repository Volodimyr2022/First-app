
import React from 'react';
import './App.css'

const navList = [
    {
        name: "Home",
        id: 1,
        title: "home",
        href: "#",
    },
    {
        name: "News",
        id: 2,
        title: "news",
        href: "#",
    }, 
    {
        name: "CallBack",
        id: 3,
        title: "callback",
        href: "#",
    },
    {
        name: "Contacts",
        id: 4,
        title: "contacts",
        href: "#",
    },
];

    const Home = (props) => {
        return (<p>Home page</p>)  
    };
    // const News = (props) => {
    //     return (<p>News page</p>)  
    // };
    // const CallBack = (props) => {
    //     return (<p>CallBack page</p>)  
    // };
    // const Contacts = (props) => {
    //     return (<p>Contacts page</p>)  
    // };

class Nav extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {currentPage:"home"}
    };

    onClick = (title) => {
        console.log(title)
    }

    changeState = () => {
        
    }

    render () {
        return (
            <div>
            <nav className="nav">
                <ul>
                    <li>
                    {navList.map(({href, id, title, name}) => 
                    <a
                    href={href}
                    key={id}
                    onClick={() => this.onClick(title)}
                    >
                        {name}
                    </a>
                     )}
                    </li>
                </ul>              
            </nav>
            <div>{this.state.currentPage}</div>
            </div>
        )
    }
}

export default Nav;
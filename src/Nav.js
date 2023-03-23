
import React from 'react';
import './App.css'

const navList = [
    {
        name: "Home",
        id: 1,
        title: "home",
    },
    {
        name: "News",
        id: 2,
        title: "news",
    }, 
    {
        name: "CallBack",
        id: 3,
        title: "callback",
    },
    {
        name: "Contacts",
        id: 4,
        title: "contacts"
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
        this.state = {currentPage: <Home />}
    };

    changeState = () => {

    }

    render () {
        return (
            <div>
            <nav className="nav">
                    {navList.map(({id, name}) => 
                        <li key={id}>{name}</li> )}          
            </nav>
            <div>{this.state.currentPage}</div>
            </div>
        )
    }
}

export default Nav;
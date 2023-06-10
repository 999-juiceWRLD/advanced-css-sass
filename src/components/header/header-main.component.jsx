import React from "react";
import logoImg from "../../assets/img/logo.png";
import Icon from "../misc/icon/icon-base.component";

function HeaderMain() {
    return (
        <div className="container">
            <header className="header">
                <img src={logoImg} alt="trillio-logo" className="logo" />
                <form action="#" className="search">
                    <input type="text" className="search__input" placeholder="Search Hotels" />
                    <button className="search__button">
                        <Icon name="magnifying-glass" />
                    </button>
                </form>
                <nav className="user-nav"></nav>
            </header>
            <div className="content">
                <nav className="sidebar">
                    sidebar
                </nav>
                <main className="hotel-view">
                    hotel    
                </main>
            </div>
        </div>
    );
}

export default HeaderMain;

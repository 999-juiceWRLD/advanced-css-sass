import React from "react";
import logoImg from "../../assets/img/logo.png";

function HeaderMain() {
    return (
        <div className="container">
            <header className="header">
                <img src={logoImg} alt="trillio-logo" className="logo" />
            </header>
            <form action="#" className="search">
                <input type="text" className="search__input" placeholder="Search Hotels" />
                <button className="search__button">
                    
                </button>
            </form>
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

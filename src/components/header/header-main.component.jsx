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
                        <Icon clsName={"search__icon"} name="magnifying-glass" />
                    </button>
                </form>
                <nav className="user-nav">
                    <div className="user-nav__icon-box">
                        <Icon clsName={"user-nav__icon"} name={"bookmark"} />
                    </div>
                    <div className="user-nav__icon-box">
                        <Icon clsName={"user-nav__icon"} name={"chat"} />
                    </div>
                </nav>
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

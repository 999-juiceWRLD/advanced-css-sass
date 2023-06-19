import React from "react";
import NavListElement from "../navigation-element/navlist-component";

function NavigationBar() {
    return (
            <div className="content">
                <nav className="sidebar">
                    <NavListElement 
                        iconName="home"
                        spanName="Hotel"
                    />
                    <NavListElement 
                        iconName="aircraft-take-off"
                        spanName="Flight"
                    />
                    <NavListElement 
                        iconName="key"
                        spanName="Car Rental"
                    />
                    <NavListElement 
                        iconName="map"
                        spanName="Tours"
                    />

                    <div className="legal">
                        <p>&copy; 2023 Trillio GmBh. All rights reserved.</p> 
                    </div>
                </nav>
                <main className="hotel-view">
                    hotel    
                </main>
            </div>
    );
}

export default NavigationBar;

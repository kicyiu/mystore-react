import React from "react";
import appClasses from "../../App.module.scss";
import classes from "./Footer.module.scss";

function Footer() {
    return (
        <footer className={classes.siteFooter}>
            <div className={appClasses.colFull}>
                <p>© mystore 2023</p>
            </div>
        </footer>
    );
}

export default Footer;
import React from "react";
import classes from "./Footer.module.scss";

function Footer() {
    return (
        <footer className={classes.siteFooter}>
            <div className={classes.colFull}>
                <p>© mystore 2023</p>
            </div>
        </footer>
    );
}

export default Footer;
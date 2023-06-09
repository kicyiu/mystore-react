import React from "react";
import classes from './SiteBranding.module.scss';

function SiteBranding() {
    return (
        <div data-testid="site-branding-container" className={classes.siteBranding}>
            <a href="/">mystore</a>
        </div>
    )
}

export default SiteBranding;
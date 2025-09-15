import "./CircularButton.scss"
import React, {useEffect, useState} from 'react'

function CircularButton({ faIcon, src, IconComponent, onClick, variant = "circular-button-variant-default", size = "circular-button-size-default", tooltip = null, className = "" }) {
    console.log("CircularButton src prop:", src);
    return (
        <button className={`circular-button ${variant} ${size} ${className}`}
                data-tooltip={tooltip}
                onClick={onClick}>
            {IconComponent ? (
                <IconComponent className="circular-button-img" />
            ) : src ? (
                <img src={src} alt={tooltip || "icon"} className="circular-button-img" />
            ) : (
                <i className={`${faIcon}`}/>
            )}
        </button>
    )
}

CircularButton.Variants = {
    DEFAULT: "circular-button-variant-default",
    BLEND: "circular-button-variant-blend",
    TRANSPARENT: "circular-button-variant-transparent",
}

CircularButton.Sizes = {
    SMALL: "circular-button-size-small",
    DEFAULT: "circular-button-size-default",
    LARGE: "circular-button-size-large",
    EXTRA_LARGE: "circular-button-size-extra-large",
    EXTRA_EXTRA_LARGE: "circular-button-size-extra-extra-large",
}

export default CircularButton
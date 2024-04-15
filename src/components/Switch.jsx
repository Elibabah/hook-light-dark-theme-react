import { useEffect, useState } from "react"

import { useTheme } from "../hook/useTheme"

export const Switch = () => {

    const [theme, handleChange] = useTheme('dark')


    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);
    return (
        <div className="container-switch">
            <span>Change Theme </span>
            <label className="switch">
                <input type="checkbox" onChange={handleChange} checked={theme === 'dark'} />
                <span className="slider"></span>
            </label>
        </div>
    )
}

import React, { useState } from 'react';
import './switch.css';

function ToggleSwitch({bgChange}) {
    const [isChecked, setIsChecked] = useState(false);

    const toggleSwitch = () => {
        setIsChecked(!isChecked);
        bgChange(isChecked)
    };

    return (
        <label className="toggle-switch">
            <input
                type="checkbox"
                checked={isChecked}
                onChange={toggleSwitch}
            />
            <span className="slider"></span>
        </label>
    );
}

export default ToggleSwitch;

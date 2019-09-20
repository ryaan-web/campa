import React from 'react';
import './Header.css';

export default function Header(props) {
    return (
        <div class="header">
            <span class="header__spotlight">Spotlight</span>
            <span class="header__beta">BETA</span>
            <span class="header__options">?</span>
        </div>
    );
};
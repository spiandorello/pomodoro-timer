import { Link } from 'react-router-dom';

import { Timer, Scroll } from "phosphor-react";

import { HeaderContainer } from './Header.styles';

import LogoIgnite from '../../assets/logo-ignite.svg';

export function Header() {
    return (
        <HeaderContainer>
            <img src={LogoIgnite} alt="" />

            <nav>
                <Link to="/" title="Timer">
                    <Timer size={24} />
                </Link>

                <Link to="/history" title="History">
                    <Scroll size={24} />
                </Link>
            </nav>

        </HeaderContainer>
    );
}
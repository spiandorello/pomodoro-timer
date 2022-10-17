import { Outlet } from 'react-router-dom';

import { Header } from '../../components';
import { PresentationContainer } from './Presentation.styles';

export function Presentation() {
    return (
        <PresentationContainer>
            <Header />
            <Outlet/>
        </PresentationContainer>
    );
}
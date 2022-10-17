import * as React from 'react';

import { Routes, Route } from 'react-router-dom';

import { Presentation } from '../../templates';

import { Home } from '../../pages/Home/Home';
import { History } from '../../pages/History/History';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Presentation />}>
                <Route path="/" element={<Home />} />
                <Route path="/history" element={<History />} />
            </Route>
        </Routes>
    );
}
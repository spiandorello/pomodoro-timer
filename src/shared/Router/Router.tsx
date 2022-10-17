import * as React from 'react';

import { Routes, Route } from 'react-router-dom';

import { Presentation } from '../../templates';

import { Home, History } from '../../pages';

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
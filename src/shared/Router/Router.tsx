import * as React from 'react';

import { Routes, Route } from 'react-router-dom';

import { Home } from '../../pages/Home/Home';
import { History } from '../../pages/History/History';

export function RouterContainer() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
        </Routes>
    );
}
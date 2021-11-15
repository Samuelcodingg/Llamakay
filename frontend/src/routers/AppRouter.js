import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from 'react-router-dom';
import { AuthenticationPage } from '../components/authenticationpage/AuthenticationPage';
import { Footer } from '../components/ui/Footer';
import { NavbarComponent } from '../components/ui/NavbarComponent';
import { HomePage } from '../components/homepage/HomePage';

export const AppRouter = () => {
    return (
        <Router>
            <NavbarComponent />

            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/authentication/:type" element={<AuthenticationPage />} />
                </Routes>

            </div>

            <Footer />
        </Router>
    )   
}

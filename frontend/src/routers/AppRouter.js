import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from 'react-router-dom';
import { AuthenticationPage } from '../components/authenticationpage/AuthenticationPage';
import { Footer } from '../components/ui/Footer';
import { NavbarComponent } from '../components/ui/NavbarComponent';


export const AppRouter = () => {
    return (
        <Router>
            <NavbarComponent />

            <div className="container mt-5">
                <Routes>
                    <Route path="/login" element={<AuthenticationPage />} />
                </Routes>

            </div>

            <Footer />
        </Router>
    )   
}

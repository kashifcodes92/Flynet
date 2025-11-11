// src/App.jsx (FINAL ROUTING CODE - Complete VMS Implementation)

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';
import SuperAdminLogin from './pages/Auth/SuperAdminLogin.jsx';

// Import ALL Implemented Pages (Using Absolute Alias)
import Dashboard from '@/pages/SuperAdmin/Dashboard.jsx'; 
import AllBusiness from '@/pages/SuperAdmin/AllBusiness.jsx'; 
import Packages from '@/pages/SuperAdmin/Packages.jsx'; 
import Settings from '@/pages/SuperAdmin/Settings/Settings.jsx';
import Reports from '@/pages/SuperAdmin/Reports.jsx'; 
import Communicator from '@/pages/SuperAdmin/Communicator.jsx';
import NotificationCenter from '@/pages/SuperAdmin/NotificationCenter.jsx';
import PackageSubscriptions from '@/pages/SuperAdmin/PackageSubscriptions.jsx'; 
import MyCameras from '@/pages/VMS/MyCameras.jsx';
import MyVideos from '@/pages/VMS/MyVideos.jsx';
import MyAlarms from '@/pages/VMS/MyAlarms.jsx';
import MyMosaics from '@/pages/VMS/MyMosaics.jsx';
import MyPatrols from '@/pages/VMS/MyPatrols.jsx';
import SmartMosaic from '@/pages/VMS/SmartMosaic.jsx';
import Users from '@/pages/VMS/Users.jsx';
import Groups from '@/pages/VMS/Groups.jsx';
import Permissions from '@/pages/VMS/Permissions.jsx';
import ActivityLog from '@/pages/VMS/ActivityLog.jsx'; 
import ConsumptionCalculator from '@/pages/VMS/ConsumptionCalculator.jsx'; 
import Cameras from '@/pages/VMS/Cameras.jsx'; 
import Access from '@/pages/VMS/Access.jsx'; 
import Platform from '@/pages/VMS/Platform.jsx';
import RTSPsAddressList from '@/pages/VMS/RTSPsAddressList.jsx';
import Alarms from '@/pages/VMS/Alarms.jsx'; // Rules Configuration
import Mosaics from '@/pages/VMS/Mosaics.jsx'; // Master Mosaics Config
import Patrols from '@/pages/VMS/Patrols.jsx'; // Master Patrols Config


import { useAuth } from './context/AuthContext.jsx'; 


/**
 * Route protection wrapper with Role-Based Access Control (RBAC).
 */
const PrivateRoute = ({ children, requiredRole }) => {
    const { isAuthenticated, userRole } = useAuth();
    
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />; 
    }
    
    // CRITICAL: Check if the user's role matches the required role
    if (requiredRole && requiredRole !== userRole) {
        const path = (userRole === 'TENANT_ADMIN' ? '/vms-client/my-cameras' : '/admin/dashboard');
        alert("Access Denied: You do not have permission for this route.");
        return <Navigate to={path} replace />;
    }

    return children;
};


function App() {
    const { userRole, isAuthenticated } = useAuth(); 

    // Helper function for initial redirection based on role
    const getInitialRedirectPath = () => {
        if (userRole === 'SUPER_ADMIN') {
            return '/admin/dashboard';
        }
        if (userRole === 'TENANT_ADMIN') {
            return '/vms-client/my-cameras';
        }
        return '/login';
    };
    
    return (
        <Routes>
            {/* 1. PUBLIC AUTH ROUTE */}
            <Route path="/login" element={<SuperAdminLogin />} />

            {/* 2. PROTECTED ROUTE CHECK (Handles base path "/") */}
            <Route path="/" element={isAuthenticated ? <Navigate to={getInitialRedirectPath()} replace /> : <Navigate to="/login" replace />} />

            {/* --- 3. SUPER ADMIN (SAAS) ROUTES (/admin/*) --- */}
            <Route path="/admin/*" element={<PrivateRoute requiredRole="SUPER_ADMIN"><MainLayout userRole={userRole} /></PrivateRoute>}>
                <Route index element={<Navigate to="dashboard" replace />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="businesses" element={<AllBusiness />} />
                <Route path="packages" element={<Packages />} />
                <Route path="settings" element={<Settings />} />
                <Route path="reports" element={<Reports />} />
                <Route path="communicator" element={<Communicator />} />
                <Route path="notifications" element={<NotificationCenter />} />
                <Route path="subscriptions" element={<PackageSubscriptions />} />
            </Route>
            
            {/* --- 4. VMS CLIENT (TENANT) ROUTES (/vms-client/*) --- */}
            <Route path="/vms-client/*" element={<PrivateRoute requiredRole="TENANT_ADMIN"><MainLayout userRole={userRole} /></PrivateRoute>}>
                <Route index element={<Navigate to="my-cameras" replace />} />
                
                {/* VMS CLIENT UI PAGES (User Views) */}
                <Route path="my-cameras" element={<MyCameras />} />
                <Route path="my-videos" element={<MyVideos />} />
                <Route path="my-alarms" element={<MyAlarms />} />
                <Route path="my-mosaics" element={<MyMosaics />} />
                <Route path="my-patrols" element={<MyPatrols />} />
                <Route path="smart-mosaic" element={<SmartMosaic />} />

                {/* VMS TENANT ADMINISTRATION PAGES (Routes updated to use distinct components) */}
                <Route path="cameras" element={<Cameras />} />
                <Route path="users" element={<Users />} />
                <Route path="groups" element={<Groups />} />
                <Route path="permissions" element={<Permissions />} />
                <Route path="alarms" element={<Alarms />} /> {/* Rules Configuration */}
                <Route path="mosaics" element={<Mosaics />} /> {/* Master Mosaics Config */}
                <Route path="patrols" element={<Patrols />} /> {/* Master Patrols Config */}
                
                {/* VMS UTILITY AND REPORTING PAGES (CRITICAL FINAL ROUTES) */}
                <Route path="access" element={<Access />} />
                <Route path="reports" element={<Reports />} />
                <Route path="platform" element={<Platform />} />
                <Route path="activity-log" element={<ActivityLog />} />
                <Route path="notification-center" element={<NotificationCenter />} />
                <Route path="consumption-calculator" element={<ConsumptionCalculator />} />
                <Route path="rtsps-address-list" element={<RTSPsAddressList />} />


                {/* 404/Fallback within the protected area */}
                <Route path="*" element={<Navigate to="my-cameras" replace />} /> 
            </Route>

            {/* 5. FALLBACK */}
            <Route path="*" element={<Navigate to="/" replace />} /> 
        </Routes>
    );
}

export default App;
// src/utils/constants.js (FINAL AND COMPLETE CODE)

import DashboardIcon from '@mui/icons-material/Dashboard';
import BusinessIcon from '@mui/icons-material/Business';
import InventoryIcon from '@mui/icons-material/Inventory';
import SettingsIcon from '@mui/icons-material/Settings';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import VideocamIcon from '@mui/icons-material/Videocam';
import AlarmIcon from '@mui/icons-material/Alarm';
import GroupIcon from '@mui/icons-material/Group';
import SecurityIcon from '@mui/icons-material/Security';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MessageIcon from '@mui/icons-material/Message';
import LockIcon from '@mui/icons-material/Lock';
import PeopleIcon from '@mui/icons-material/People';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ListAltIcon from '@mui/icons-material/ListAlt';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CalculateIcon from '@mui/icons-material/Calculate';
import PersonPinIcon from '@mui/icons-material/PersonPin'; 
import VpnKeyIcon from '@mui/icons-material/VpnKey'; 
import HomeIcon from '@mui/icons-material/Home'; 
import StorageIcon from '@mui/icons-material/Storage'; // For Access/Reports
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'; // For Platform
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered'; // For RTSPs List

// --- 1. SAAS SUPER ADMIN MENU ---
export const superAdminMenu = [
  { text: 'Dashboard', icon: DashboardIcon, path: '/admin/dashboard' },
  { text: 'All Business', icon: BusinessIcon, path: '/admin/businesses' },
  { text: 'Package Subscription', icon: ListAltIcon, path: '/admin/subscriptions' },
  { text: 'Packages', icon: InventoryIcon, path: '/admin/packages' },
  { text: 'Reports', icon: TrendingUpIcon, path: '/admin/reports' },
  { text: 'Communicator', icon: MessageIcon, path: '/admin/communicator' },
  { text: 'Notification Center', icon: NotificationsIcon, path: '/admin/notifications' },
  { text: 'Settings', icon: SettingsIcon, path: '/admin/settings' },
];

// --- 2. TENANT/VMS MENU (FINAL COMPLETE STRUCTURE) ---
export const tenantMenu = [
    // --- Group 1: My Views (Top Section) ---
    { text: 'My Cameras', icon: HomeIcon, path: '/vms-client/my-cameras' },
    { text: 'My Patrols', icon: SecurityIcon, path: '/vms-client/my-patrols' },
    { text: 'My Mosaics', icon: VisibilityIcon, path: '/vms-client/my-mosaics' },
    { text: 'My Alarms', icon: AlarmIcon, path: '/vms-client/my-alarms' },
    { text: 'My Videos', icon: VideocamIcon, path: '/vms-client/my-videos' },
    { text: 'Smart Mosaic', icon: GroupIcon, path: '/vms-client/smart-mosaic' },
    
    // --- Group 2: Site Configuration (Tenant Admin) ---
    { text: 'Cameras', icon: CameraAltIcon, path: '/vms-client/cameras', divider: true },
    { text: 'Alarms', icon: AlarmIcon, path: '/vms-client/alarms' },
    { text: 'Groups', icon: PeopleIcon, path: '/vms-client/groups' },
    { text: 'Users', icon: PersonPinIcon, path: '/vms-client/users' },
    { text: 'Permissions', icon: VpnKeyIcon, path: '/vms-client/permissions' },
    { text: 'Mosaics', icon: VisibilityIcon, path: '/vms-client/mosaics' },
    { text: 'Patrols', icon: SecurityIcon, path: '/vms-client/patrols' },
    
    // --- Group 3: Site Utilities ---
    { text: 'Access', icon: LockIcon, path: '/vms-client/access', divider: true },
    { text: 'Reports', icon: TrendingUpIcon, path: '/vms-client/reports' },
    { text: 'Platform', icon: AccountBalanceIcon, path: '/vms-client/platform' },
    { text: 'Activity log', icon: ListAltIcon, path: '/vms-client/activity-log' },
    { text: 'Notification center', icon: NotificationsIcon, path: '/vms-client/notification-center' },
    
    // --- Group 4: Special Utilities ---
    { text: 'Consumption calculator', icon: CalculateIcon, path: '/vms-client/consumption-calculator', divider: true },
    { text: 'RTSPs address list', icon: FormatListNumberedIcon, path: '/vms-client/rtsps-address-list' },
];

import { AiFillDashboard, AiOutlineShoppingCart } from 'react-icons/ai';
import { BiCategory } from 'react-icons/bi';
import { FaUsers, FaUserTimes } from 'react-icons/fa'
import { MdPayment } from 'react-icons/md';
import {FaCodePullRequest} from 'react-icons/fa6'
import {IoIosChatbubbles} from 'react-icons/io'; 

export const allNav = [
    {
        id: 1,
        title: 'Dashboard',
        icon: <AiFillDashboard size={20} />,
        role: 'admin',
        path: '/admin/dashboard'
    },
    {
        id: 2,
        title: 'Orders',
        icon: <AiOutlineShoppingCart size={20} />,
        role: 'admin',
        path: '/admin/dashboard/orders'
    },
    {
        id: 3,
        title: 'Category',
        icon: <BiCategory size={20} />,
        role: 'admin',
        path: '/admin/dashboard/category'
    },
    {
        id: 4,
        title: 'Sellers',
        icon: <FaUsers size={20} />,
        role: 'admin',
        path: '/admin/dashboard/sellers'
    },
    {
        id: 5,
        title: 'Payment Request',
        icon: <MdPayment size={20} />,
        role: 'admin',
        path: '/admin/dashboard/payment-request'
    },
    {
        id: 6,
        title: 'Deactive Sellers',
        icon: <FaUserTimes size={20} />,
        role: 'admin',
        path: '/admin/dashboard/deactive-sellers'
    },
    {
        id: 7,
        title: 'Seller Request',
        icon: <FaCodePullRequest size={20} />,
        role: 'admin',
        path: '/admin/dashboard/sellers-request'
    },
    {
        id: 8,
        title: 'Live Chat',
        icon: <IoIosChatbubbles size={20} />,
        role: 'admin',
        path: '/admin/dashboard/chat-sellers'
    },
    {
        id: 9,
        title: 'Dashboard',
        icon: <AiFillDashboard size={20} />,
        role: 'seller',
        path: '/seller/dashboard'
    },
    {
        id: 10,
        title: 'Add Product',
        icon: <AiFillDashboard size={20} />,
        role: 'seller',
        path: '/seller/dashboard/add-product'
    },
    {
        id: 11,
        title: 'All Product',
        icon: <AiFillDashboard size={20} />,
        role: 'seller',
        path: '/seller/dashboard/all-product'
    },
    {
        id: 12,
        title: 'Discount Product',
        icon: <AiFillDashboard size={20} />,
        role: 'seller',
        path: '/seller/dashboard/discount-product'
    },
    {
        id: 13,
        title: 'Orders',
        icon: <AiFillDashboard size={20} />,
        role: 'seller',
        path: '/seller/dashboard/orders'
    },
    {
        id: 14,
        title: 'Payments',
        icon: <AiFillDashboard size={20} />,
        role: 'seller',
        path: '/seller/dashboard/payments'
    },
    {
        id: 15,
        title: 'Chat Customer',
        icon: <AiFillDashboard size={20} />,
        role: 'seller',
        path: '/seller/dashboard/chat-customer'
    },
    {
        id: 16,
        title: 'Chat Support',
        icon: <AiFillDashboard size={20} />,
        role: 'seller',
        path: '/seller/dashboard/chat-support'
    }
]
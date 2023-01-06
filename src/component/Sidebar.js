import { motion } from 'framer-motion';
import React, { useState } from 'react';
import {FaBlogger, FaBorderAll, FaUserAlt} from 'react-icons/fa';
import { SiSimpleanalytics } from "react-icons/si";
import { IoIosContact, IoMdMenu } from "react-icons/io";
import { BiLogInCircle } from "react-icons/bi";
import { MdDashboard } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const routes = [
    {
        path:'/dashboard',
        name:'Dashboard',
        icon: <MdDashboard size='25px' />
    },
    {
        path: '/users',
        name: 'Users',
        icon: <FaUserAlt size='25px' />
    },
    {
        path: '/analytics',
        name: 'Analytics',
        icon: <SiSimpleanalytics size='25px' />
    },
    {
        path: '/blog',
        name: 'Blog',
        icon: <FaBlogger size='25px' />
    },
    {
        path: '/order',
        name: 'Order',
        icon: <FaBorderAll size = '25px' />
    },
    {
        path: '/contact',
        name: 'Contact',
        icon: <IoIosContact size='25px' />
    },
    {
        path: '/',
        name: 'LogOut',
        icon: <BiLogInCircle size='25px' />
    }
]

const Sidebar = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    }
  return (
    <div className='main-container'>
        <motion.div animate={{width: isOpen ? '200px' : '45px'}} className='sidebar'>
            <div className='top-section'>
                  {isOpen && <h1 className='logo'>Dashboard</h1>}
                <div className='bar'>
                      <IoMdMenu size='35px' onClick={toggle} />
                </div>
            </div>
            <section className='routes'>
                {
                    routes.map((route) =>(
                        <NavLink activeClassName='active' to={route.path} key={route.name} className='link'>
                            <div className='icon'>{route.icon}</div>
                            <div className='link-name'>{route.name}</div>
                        </NavLink>
                    ))
                }
            </section>
        </motion.div>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Sidebar;

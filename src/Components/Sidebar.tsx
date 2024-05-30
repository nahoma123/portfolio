import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const Sidebar: React.FC = () => {
  return (
    <div className="min-h-screen w-64 bg-slate-100 text-slate-50 flex flex-col font-sans">
      <div className="flex items-center justify-center p-4">
        <img
          src="https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Profile"
          className="rounded-full h-24 w-24 object-cover"
        />
      </div>
      <div className="flex items-center justify-center text-black mb-4 font-sans">
        Nahom Asnake
      </div>
      <div className="flex items-center justify-center text-black mb-4 text-lg font-sans">
        SENIOR DEVELOPER
      </div>
      <Menu
        theme="light"
        mode="inline"
        className="flex-1 text-center bg-slate-50 font-sans"
        defaultSelectedKeys={['home']}
      >
        <Menu.Item key="home" className="text-black text-xs">
          <Link to="/">HOME</Link>
        </Menu.Item>
        <Menu.Item key="about" className="text-black text-xs">
          <Link to="/about">ABOUT</Link>
        </Menu.Item>
        <Menu.Item key="skills" className="text-black text-xs">
          <Link to="/skills">SKILLS</Link>
        </Menu.Item>
        <Menu.Item key="experience" className="text-black text-xs">
          <Link to="/experience">EXPERIENCE</Link>
        </Menu.Item>
        <Menu.Item key="projects" className="text-black text-xs">
          <Link to="/projects">PROJECTS</Link>
        </Menu.Item>
        <Menu.Item key="education" className="text-black text-xs">
          <Link to="/education">EDUCATION</Link>
        </Menu.Item>
        <Menu.Item key="contact" className="text-black text-xs">
          <Link to="/contact">CONTACT</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Sidebar;

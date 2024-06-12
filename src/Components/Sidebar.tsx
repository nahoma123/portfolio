import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Drawer, Button } from 'antd';
import {
  HomeOutlined,
  InfoCircleOutlined,
  ToolOutlined,
  SolutionOutlined,
  ProjectOutlined,
  BookOutlined,
  PhoneOutlined,
  MenuOutlined
} from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';

const Sidebar: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const menuItems = (
    <Menu
      theme="light"
      mode="inline"
      className="flex-1 text-center bg-slate-50 font-sans"
      defaultSelectedKeys={['home']}
    >
      <Menu.Item key="home" className="text-black text-xs flex items-center" onClick={closeDrawer}>
        <HomeOutlined className="mr-2" /> {/* Add margin-right to icon */}
        <Link to="/">HOME</Link>
      </Menu.Item>
      <Menu.Item key="about" className="text-black text-xs flex items-center" onClick={closeDrawer}>
        <InfoCircleOutlined className="mr-2" /> {/* Add margin-right to icon */}
        <Link to="/about">ABOUT</Link>
      </Menu.Item>
      <Menu.Item key="skills" className="text-black text-xs flex items-center" onClick={closeDrawer}>
        <ToolOutlined className="mr-2" /> {/* Add margin-right to icon */}
        <Link to="/skills">SKILLS</Link>
      </Menu.Item>
      <Menu.Item key="experience" className="text-black text-xs flex items-center" onClick={closeDrawer}>
        <SolutionOutlined className="mr-2" /> {/* Add margin-right to icon */}
        <Link to="/experience">EXPERIENCE</Link>
      </Menu.Item>
      <Menu.Item key="projects" className="text-black text-xs flex items-center" onClick={closeDrawer}>
        <ProjectOutlined className="mr-2" /> {/* Add margin-right to icon */}
        <Link to="/projects">PROJECTS</Link>
      </Menu.Item>
      <Menu.Item key="education" className="text-black text-xs flex items-center" onClick={closeDrawer}>
        <BookOutlined className="mr-2" /> {/* Add margin-right to icon */}
        <Link to="/education">EDUCATION</Link>
      </Menu.Item>
      <Menu.Item key="contact" className="text-black text-xs flex items-center" onClick={closeDrawer}>
        <PhoneOutlined className="mr-2" /> {/* Add margin-right to icon */}
        <Link to="/contact">CONTACT</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      {isSmallScreen ? (
        <>
          <Button
            type="default"
            icon={<MenuOutlined style={{ color: 'black' }} />}
            onClick={toggleDrawer}
            className="fixed top-4 left-4 z-50"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
          />
          <Drawer
            title="Menu"
            placement="left"
            closable
            onClose={closeDrawer}
            visible={drawerVisible}
          >
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
            {menuItems}
          </Drawer>
        </>
      ) : (
        <div className="hidden md:flex min-h-screen w-64 bg-slate-100 text-slate-50 flex-col font-sans">
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
          {menuItems}
        </div>
      )}
    </>
  );
};

export default Sidebar;

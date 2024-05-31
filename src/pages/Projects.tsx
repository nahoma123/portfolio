import React from 'react';
import { Card, Steps } from 'antd';
import { LaptopOutlined, TeamOutlined, SolutionOutlined, CodeOutlined } from '@ant-design/icons';
import { useTransition, animated } from '@react-spring/web';

const { Step } = Steps;

const projectData = [
  {
    title: 'Ride Plus - [Golang/Reactjs]',
    details: [
      'Equivalent to Uber pay, it\'s an extension of ride taxi hailing system that allows corporate to manage their bills and programs easily and enforce their contract',
      'Developed projects in cooperation with teammates, namely Ride Plus, 2F Merchant Portal, and 2F Music Streaming with Golang',
      'Played a role in training and mentoring junior developers',
      'As a Team leader, worked closely with the requirement team to discover user stories and communicate with the rest of the team',
      'Performed Unit Tests',
      'Performed Acceptance Tests',
      'Integrated the system with a payment platform called “2f merchant portal”',
    ],
    icon: <LaptopOutlined style={{ color: '#fff' }} />,
    background: '#1890ff',
  },
  {
    title: '2F Merchant Portal - [Golang]',
    details: [
      'It\'s a payment gateway that aggregates all major digital payment platforms in Ethiopia',
      'As a Team leader, worked closely with the requirement team to discover user stories and communicate with the rest of the team',
      'Performed Unit Tests',
      'Performed Acceptance Tests',
      'Coded payment Sdks to integrate our system with third party payment systems',
      'Reviewed code written by peers',
      'Maintained and upgraded parts of the system after it’s release',
    ],
    icon: <TeamOutlined style={{ color: '#fff' }} />,
    background: '#52c41a',
  },
  {
    title: '2F Music Streaming - [Golang]',
    details: [
      'It\'s a music streaming system based on Hls protocol',
      'Performed Unit Tests',
      'Coded the integration of all Microservices with Grpc',
      'Performed Acceptance Tests',
      'Reviewed code written by peers',
      'Coded the encoding engine',
    ],
    icon: <SolutionOutlined style={{ color: '#fff' }} />,
    background: '#faad14',
  },
  {
    title: 'Paymax shopping',
    details: [
      'Nigerian based payment and shopping system',
      'Implemented the project with golang',
      'Reviewed code written by peers',
      'Integrated monitoring and search with Elastic',
    ],
    icon: <CodeOutlined style={{ color: '#fff' }} />,
    background: '#eb2f96',
  },
  {
    title: '2F OAuth2.0 Service - [Golang]',
    details: [
      'It’s a shared authorization service built with the specifications of Oauth2.0',
      'Performed Unit Tests',
      'Coded the integration of all Microservices with Grpc',
      'Performed Acceptance Tests',
      'Reviewed code written by peers',
      'Coded the encoding engine',
    ],
    icon: <SolutionOutlined style={{ color: '#fff' }} />,
    background: '#722ed1',
  },
  {
    title: 'Paymax Job seeker Service - [Golang]',
    details: [
      'Its equivalent to upwork build for Nigeria',
      'Implemented the project with golang',
      'Reviewed code written by peers',
      'Integrated monitoring and search with Elastic',
    ],
    icon: <CodeOutlined style={{ color: '#fff' }} />,
    background: '#2f54eb',
  },
];

const Projects: React.FC = () => {
  const transitions = useTransition(projectData, {
    from: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    keys: projectData.map((item, index) => index),
  });

  return (
    <div className="max-h-screen bg-gray-100 flex p-2">
      <Card className="w-full overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6 font-sans ">Projects</h1>
        <Steps direction="vertical" current={-1}>
          {transitions((style, item, _, index) => (
            <Step
              key={index}
              title={
                <animated.div style={style}>
                  <span className="text-xl font-semibold text-black">{item.title}</span>
                </animated.div>
              }
              icon={
                <animated.div 
                  style={{ 
                    ...style, 
                    backgroundColor: item.background, 
                    borderRadius: '50%', 
                    width: '36px', 
                    height: '36px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                  }}
                >
                  {item.icon}
                </animated.div>
              }
              description={
                <animated.div style={style}>
                  <ul className="list-disc list-inside text-gray-700">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="mb-1">{detail}</li>
                    ))}
                  </ul>
                </animated.div>
              }
            />
          ))}
        </Steps>
      </Card>
    </div>
  );
};

export default Projects;
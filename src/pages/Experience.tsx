import React from 'react';
import { Card, Steps } from 'antd';
import { 
  LaptopOutlined, 
  TeamOutlined, 
  SolutionOutlined, 
  CodeOutlined 
} from '@ant-design/icons';
import { useTransition, animated } from '@react-spring/web';

const { Step } = Steps;

const experienceData = [
  {
    title: 'Freelance Software Developer',
    company: 'Addis Ababa, Ethiopia',
    period: 'May/2023 – Present',
    details: [
      'Developed over 6 projects with Golang, Reactjs, and Node.js',
      'Assisted in the architecture, design, and deployment of different systems',
      'Cooperated online with different stakeholders to complete tasks',
    ],
    icon: <LaptopOutlined style={{ color: '#fff' }} />,
    background: '#1890ff',
  },
  {
    title: 'Senior Software Developer',
    company: '2F P.L.C, Addis Ababa, Ethiopia',
    period: 'Feb/2022 – Apr/2023',
    details: [
      'Developed projects in cooperation with teammates, namely Ride Plus, 2F Merchant Portal, and 2F Music Streaming with Golang',
      'Played a role in training and mentoring junior developers',
      'Worked closely with the requirement team to discover user stories and communicate with the rest of the team',
      'Performed Unit Tests',
      'Performed Acceptance Tests',
      'Integrated the system with a payment platform called “2F Merchant Portal”',
    ],
    icon: <TeamOutlined style={{ color: '#fff' }} />,
    background: '#52c41a',
  },
  {
    title: 'Software Developer',
    company: 'ADC Software plc, Addis Ababa, Ethiopia',
    period: 'May/2020 – Jan/2021',
    details: [
      'Collaborated with team members to upgrade and improve the Balderas Delivery System project on PHP, JavaScript',
      'Developed a new project, the Birre payment system with React.js, Node.js, and PHP',
    ],
    icon: <SolutionOutlined style={{ color: '#fff' }} />,
    background: '#faad14',
  },
  {
    title: 'Full Stack Developer',
    company: 'Etta Solutions plc, Addis Ababa, Ethiopia',
    period: 'May/2019 – May/2020',
    details: [
      'Cooperated in the development and maintenance of the projects, Zmall Delivery, Sheklla, Etta Taxi with Node.js, Angular, and on mobile development',
    ],
    icon: <CodeOutlined style={{ color: '#fff' }} />,
    background: '#eb2f96',
  },
];

const Experience: React.FC = () => {
  const transitions = useTransition(experienceData, {
    from: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    keys: experienceData.map((item, index) => index),
  });

  return (
    <div className="min-h-screen bg-gray-100 flex p-4">
      <Card className="w-full max-w-5xl p-6">
        <h1 className="text-3xl font-bold mb-6 font-sans">Work Experience</h1>
        <Steps direction="vertical" current={4}>
          {transitions((style, item, _, index) => (
            <Step
              key={index}
              title={
                <animated.div style={style}>
                  <span className="text-xl font-semibold font-sans">{item.title}</span>
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
                  <p className="font-medium text-black font-sans">{item.company} - {item.period}</p>
                  <ul className="list-disc list-inside">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="mb-1 text-gray-700 font-sans">{detail}</li>
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

export default Experience;

import React from 'react';
import { Card, Steps } from 'antd';
import { BookOutlined } from '@ant-design/icons';
import { useTransition, animated } from '@react-spring/web';

const { Step } = Steps;

const educationData = [
  {
    title: 'Bs in Information Technology',
    period: 'September/2014 – July/2018',
    institution: 'Addis Ababa Institute of Technology, Addis Ababa, Ethiopia',
    icon: <BookOutlined style={{ color: '#fff' }} />,
    background: '#1890ff',
  },
];

const Education: React.FC = () => {
  const transitions = useTransition(educationData, {
    from: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    keys: educationData.map((item, index) => index),
  });

  return (
    <div className="min-h-screen bg-gray-100 flex p-4">
      <Card className="w-full max-w-5xl p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6 font-sans">Education</h1>
        <Steps direction="vertical" current={1}>
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
                  <p className="font-medium text-black">{item.period}</p>
                  <p className="font-medium text-gray-700">{item.institution}</p>
                </animated.div>
              }
            />
          ))}
        </Steps>
      </Card>
    </div>
  );
};

export default Education;

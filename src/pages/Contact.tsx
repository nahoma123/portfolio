import React from 'react';
import { Card, Input, Button } from 'antd';
import { InstagramOutlined, FacebookOutlined, GithubOutlined, MailOutlined, YoutubeOutlined } from '@ant-design/icons';
import { useTransition, animated } from '@react-spring/web';

const Contact: React.FC = () => {
  const transitions = useTransition(true, {
    from: { opacity: 0, transform: 'translateY(-20px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(-20px)' },
    config: { duration: 500 },
  });

  return (
    <div className="min-h-screen bg-gray-100 flex p-2">
      <Card className="w-full h-screen">
        {transitions((style, item) => 
          item && (
            <animated.div style={style} className="mb-8">
              <div className="flex flex-col justify-between items-center justify-center mb-4">
                <h1 className="text-3xl font-bold font-sans">Contact</h1>
                <div className='flex flex-row'>
                  <div className="flex space-x-4">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <div className="flex items-center bg-white justify-center w-14 h-14 shadow-md rounded-md">
                        <InstagramOutlined style={{ color: '#E1306C', fontSize: '24px' }} />
                      </div>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                      <div className="flex items-center bg-white justify-center w-14 h-14 shadow-md rounded-md">
                        <FacebookOutlined style={{ color: '#1877F2', fontSize: '24px' }} />
                      </div>
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <div className="flex items-center bg-white justify-center w-14 h-14 shadow-md rounded-md">
                        <GithubOutlined style={{ color: '#333', fontSize: '24px' }} />
                      </div>
                    </a>
                    <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">
                      <div className="flex items-center bg-white justify-center w-14 h-14 shadow-md rounded-md">
                        <MailOutlined style={{ color: '#D44638', fontSize: '24px' }} />
                      </div>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                      <div className="flex items-center bg-white justify-center w-14 h-14 shadow-md rounded-md">
                        <YoutubeOutlined style={{ color: '#FF0000', fontSize: '24px' }} />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="space-y-4 mt-6 w-1/3">
                  <h1 className="text-md text-gray-700 font-MEDIUM font-sans">GET IN TOUCH</h1>
                  <animated.div style={style}>
                    <Input placeholder="Name" />
                  </animated.div>
                  <animated.div style={style}>
                    <Input placeholder="Email" />
                  </animated.div>
                  <animated.div style={style}>
                    <Input placeholder="Subject" />
                  </animated.div>
                  <animated.div style={style}>
                    <Input.TextArea placeholder="Message" autoSize={{ minRows: 4 }} />
                  </animated.div>
                  <animated.div style={style}>
                    <Button type="primary" className='w-24' block>SEND MESSAGE</Button>
                  </animated.div>
                </div>
              </div>
            </animated.div>
          )
        )}
      </Card>
    </div>
  );
};

export default Contact;

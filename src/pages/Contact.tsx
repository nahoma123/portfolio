import React from 'react';
import { Card, Input, Button } from 'antd';
import { InstagramOutlined, FacebookOutlined, GithubOutlined, MailOutlined, YoutubeOutlined } from '@ant-design/icons';
import { FaTelegramPlane } from 'react-icons/fa';
import { useTransition, animated } from '@react-spring/web';

const Contact: React.FC = () => {
  const transitions = useTransition(true, {
    from: { opacity: 0, transform: 'translateY(-20px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(-20px)' },
    config: { duration: 500 },
  });

  return (
    <div className="bg-gray-100 flex p-2" style={{ height: "100vh" }}>
      <Card className="w-full">
        {transitions((style, item) => 
          item && (
            <animated.div style={style} className="mb-8">
              <div className="flex flex-col items-center justify-center mb-4">
                <h1 className="text-3xl font-bold font-sans">Contact</h1>
                <div className='flex flex-wrap justify-center mt-4'>
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
                    <a href="https://github.com/nahoma123" target="_blank" rel="noopener noreferrer">
                      <div className="flex items-center bg-white justify-center w-14 h-14 shadow-md rounded-md">
                        <GithubOutlined style={{ color: '#333', fontSize: '24px' }} />
                      </div>
                    </a>
                    <a href="mailto:nahomasnake12@gmail.com" target="_blank" rel="noopener noreferrer">
                      <div className="flex items-center bg-white justify-center w-14 h-14 shadow-md rounded-md">
                        <MailOutlined style={{ color: '#D44638', fontSize: '24px' }} />
                      </div>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                      <div className="flex items-center bg-white justify-center w-14 h-14 shadow-md rounded-md">
                        <YoutubeOutlined style={{ color: '#FF0000', fontSize: '24px' }} />
                      </div>
                    </a>
                    <a href="https://t.me/nahomasnake" target="_blank" rel="noopener noreferrer">
                      <div className="flex items-center bg-white justify-center w-14 h-14 shadow-md rounded-md">
                        <FaTelegramPlane style={{ color: '#0088cc', fontSize: '24px' }} />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="space-y-4 mt-6 w-full sm:w-3/4 md:w-2/3 lg:w-1/3 px-4">
                  <h1 className="text-md text-gray-700 font-medium font-sans">GET IN TOUCH</h1>
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
                    <Button type="primary" className='w-full md:w-24' block>SEND MESSAGE</Button>
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

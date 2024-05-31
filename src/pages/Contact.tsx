import React from 'react';
import { Card, Input, Button } from 'antd';
import { InstagramOutlined, FacebookOutlined, GithubOutlined, MailOutlined, YoutubeOutlined } from '@ant-design/icons';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex p-2">
      <Card className="w-full h-screen">
        <div className="mb-8">
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
            <div className="space-y-4 mt-6">
            <h1 className="text-md text-gray-700 font-MEDIUM font-sans">GET IN TOUCH</h1>
              <Input placeholder="Name" />
              <Input placeholder="Email" />
              <Input placeholder="Subject" />
              <Input.TextArea placeholder="Message" autoSize={{ minRows: 4 }} />
              <Button type="primary" className='w-24' block>SEND MESSAGE</Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Contact;

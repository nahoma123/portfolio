import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const Home: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div className="relative">
      <Carousel animation="slide">
        {images.map((image, index) => (
          <div key={index} style={{ height: '90vh', width: '100vw', position: 'relative', display: 'flex', justifyContent: 'flex-end' }}>
            <img src={image} alt={`Slide ${index}`} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
            <div className="absolute inset-0 flex flex-col justify-center ml-8 font-sans">
              <h1 className="text-white text-4xl mb-4">Welcome to My Portfolio</h1>
              <div>
                <Button size="large" href="/path/to/resume.pdf" download className='font-sans' icon={<DownloadOutlined />}>
                    Download Resume
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;

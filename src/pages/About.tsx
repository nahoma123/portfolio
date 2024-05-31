import { Card } from 'antd';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Card className="w-full p-6">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="mb-4">
                  5+ years of professional programming experience , became a Lead developer, and later a senior 
          developer contributing though diverse platforms and programming languages including golang, 
          javascript, java both on the front end, back-end and mobile platforms.
        </p>
      </Card>
    </div>
  );
};

export default About;

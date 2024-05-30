import { Card, Progress } from 'antd';
import { CodeOutlined, DatabaseOutlined, ToolOutlined } from '@ant-design/icons';
import { useSpring, useTransition, animated } from '@react-spring/web';

const skillsData = [
  {
    category: 'Programming Languages',
    icon: <CodeOutlined />,
    items: [
      { name: 'Java', level: 90, color: '#f56a00' },
      { name: 'Golang', level: 85, color: '#7265e6' },
      { name: 'JavaScript/TypeScript', level: 95, color: '#1890ff' },
      { name: 'Python', level: 80, color: '#52c41a' },
      { name: 'PHP', level: 70, color: '#eb2f96' },
    ],
  },
  {
    category: 'Database and Tools',
    icon: <DatabaseOutlined />,
    items: [
      { name: 'Postgres', level: 85, color: '#faad14' },
      { name: 'CockroachDB', level: 75, color: '#13c2c2' },
      { name: 'Redis (cache)', level: 80, color: '#2f54eb' },
      { name: 'MySQL', level: 85, color: '#722ed1' },
      { name: 'DrawIO', level: 70, color: '#eb2f96' },
      { name: 'Jira', level: 75, color: '#fa541c' },
      { name: 'GitLab (with GitLab Flow)', level: 90, color: '#13c2c2' },
    ],
  },
  {
    category: 'Others',
    icon: <ToolOutlined />,
    items: [
      'Strong knowledge of BDD (Behavior Driven Development)',
      'TDD (Test Driven Development)',
      'Agile Development',
      'Event Driven Microservices Patterns',
      'Domain Driven Development',
      'OAuth 2.0',
      'OAuth2 + OpenID Connect',
      'Multitenancy with Golang',
      'Elastic Search',
    ],
    color: '#1890ff'
  },
];

const Skills = () => {
  const titleProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });
  const othersProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 400 });

  const leftTransition = useTransition(skillsData[0].items, {
    from: { opacity: 0, transform: 'translate3d(-40px,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
    trail: 200,
  });

  const rightTransition = useTransition(skillsData[1].items, {
    from: { opacity: 0, transform: 'translate3d(40px,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
    trail: 200,
  });

  return (
    <div className="min-h-screen bg-gray-100 flex p-4">
      <Card className="w-full max-w-5xl p-6">
        <animated.h1 style={titleProps} className="text-3xl font-bold mb-6 font-sans">Skills</animated.h1>
        <animated.div style={othersProps} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 flex items-center font-sans">
            {skillsData[2].icon} <span className="ml-2">{skillsData[2].category}</span>
          </h2>
          <p className="font-sans">
            {skillsData[2].items.join(', ')}
          </p>
        </animated.div>
        <div className="flex justify-between">
          <div className="w-1/2 pr-4">
            <h2 className="text-2xl font-semibold mb-4 flex items-center font-sans">
              {skillsData[0].icon} <span className="ml-2">{skillsData[0].category}</span>
            </h2>
            {leftTransition((style, skill, _, index) => (
              <animated.div key={index} style={style} className="mb-2">
                <span className="block text-lg font-medium mb-1 font-sans">{skill.name}</span>
                <Progress
                  percent={skill.level}
                  strokeColor={skill.color}
                />
              </animated.div>
            ))}
          </div>
          <div className="w-1/2 pl-4">
            <h2 className="text-2xl font-semibold mb-4 flex items-center font-sans">
              {skillsData[1].icon} <span className="ml-2">{skillsData[1].category}</span>
            </h2>
            {rightTransition((style, skill, _, index) => (
              <animated.div key={index} style={style} className="mb-2">
                <span className="block text-lg font-medium mb-1 font-sans">{skill.name}</span>
                <Progress
                  percent={skill.level}
                  strokeColor={skill.color}
                />
              </animated.div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Skills;

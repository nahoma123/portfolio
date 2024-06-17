import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, List, Avatar } from 'antd';
import GitHubCalendar from 'react-github-calendar';
import { useTransition, animated } from '@react-spring/web';

const About = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    // Fetch the latest 5 repositories
    axios.get('https://api.github.com/users/nahoma123/repos?sort=created&per_page=5')
      .then(response => {
        setRepos(response.data);
      })
      .catch(error => {
        console.error("Error fetching the GitHub repositories", error);
      });
  }, []);

  const transitions = useTransition(repos, {
    from: { opacity: 0, transform: 'translateY(-20px)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(20px)' },
    trail: 100,
  });

  return (
    <div className="min-h-screen w-full bg-white flex justify-start p-2">
      <Card className="w-screen md:w-3/4 lg:w-3/4 xl:w-1/2 p-6">
        <h1 className="text-3xl font-bold mb-4 text-start">About Me</h1>
        <p className="mb-4 text-justify">
          5+ years of professional programming experience, became a Lead developer, and later a senior
          developer contributing through diverse platforms and programming languages including Golang,
          JavaScript, Java both on the front end, back-end, and mobile platforms.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-center">Latest GitHub Repositories</h2>
        <Card className="mb-6">
          <List
            itemLayout="horizontal"
          >
            {transitions((style, repo) => (
              <animated.div style={style}>
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={repo.owner.avatar_url} />}
                    title={<a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>}
                    description={repo.description}
                  />
                </List.Item>
              </animated.div>
            ))}
          </List>
        </Card>
        <h2 className="text-2xl font-bold mt-6 mb-4 text-center">Yearly Contribution Activity</h2>
        <GitHubCalendar username="nahoma123" />
      </Card>
    </div>
  );
};

export default About;

import React from 'react';
import LogoCarousel from './Carousel';

const logos = [
  '/photos/docker-svgrepo-com.svg',
  '/photos/typescript-svgrepo-com.svg',
  '/photos/react-svgrepo-com.svg',
  '/photos/javascript-155-svgrepo-com.svg',
  '/photos/vc-git-svgrepo-com.svg',
  '/photos/github-142-svgrepo-com.svg',
  '/photos/c-svgrepo-com.svg',
  '/photos/css3-02-svgrepo-com.svg',
  '/photos/html5-01-svgrepo-com.svg',
  '/photos/gitlab-svgrepo-com.svg',
  '/photos/intellijidea-svgrepo-com.svg',
  '/photos/java-svgrepo-com.svg',
  '/photos/next-16-svgrepo-com.svg',
  '/photos/php01-svgrepo-com.svg',
  '/photos/postman-svgrepo-com.svg',
  '/photos/sql-svgrepo-com.svg',
  '/photos/tailwind-svgrepo-com.svg',
  '/photos/vc-git-svgrepo-com.svg',
  '/photos/visual-studio-145-svgrepo-com.svg',
  '/photos/wordpress-139-svgrepo-com.svg',

];

const HomePage: React.FC = () => {
  return (
    <div>
      <LogoCarousel logos={logos} />
    </div>
  );
};

export default HomePage;

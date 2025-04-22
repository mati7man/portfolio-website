import React from 'react';
import ProjectCard from './ProjectCard';
import placeholder from '../assets/placeholder.svg';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Tonic',
      company: 'CANOPY',
      role: 'Back End Dev',
      year: '2015',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      longDescription: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem ipsum is simply dummy text of the printing and typesetting industry.\n\nLorem ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum han printer took a galley of type and scrambled it 1960s.',
      technologies: ['html', 'css', 'javascript'],
      image: placeholder,
      liveLink: '#',
      sourceLink: '#'
    },
    {
      id: 2,
      title: 'Multi-Post Stories',
      company: 'FACEBOOK',
      role: 'Full Stack Dev',
      year: '2015',
      description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
      longDescription: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem ipsum is simply dummy text of the printing and typesetting industry.\n\nLorem ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum han printer took a galley of type and scrambled it 1960s.',
      technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
      image: placeholder,
      liveLink: '#',
      sourceLink: '#'
    },
    {
      id: 3,
      title: 'Facebook 360',
      company: 'FACEBOOK',
      role: 'Full Stack Dev',
      year: '2015',
      description: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
      longDescription: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem ipsum is simply dummy text of the printing and typesetting industry.\n\nLorem ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum han printer took a galley of type and scrambled it 1960s.',
      technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
      image: placeholder,
      liveLink: '#',
      sourceLink: '#'
    },
    {
      id: 4,
      title: 'Uber Navigation',
      company: 'Uber',
      role: 'Lead Developer',
      year: '2018',
      description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
      longDescription: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem ipsum is simply dummy text of the printing and typesetting industry.\n\nLorem ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum han printer took a galley of type and scrambled it 1960s.',
      technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
      image: placeholder,
      liveLink: '#',
      sourceLink: '#'
    }
  ];

  return (
    <section className="projects" id="portfolio">
      {projects.map((project, index) => (
        <ProjectCard 
          key={project.id} 
          project={project} 
          reverse={index % 2 !== 0}
        />
      ))}
    </section>
  );
}

export default Projects; 
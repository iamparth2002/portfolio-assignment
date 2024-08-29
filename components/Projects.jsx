import React from 'react';

const Projects = ({ DATA }) => {
  return (
    <section
      id="projects"
      className="dark max-w-screen-lg px-4 sm:px-6 mx-auto grid pb-4 pt-16 gap-14"
    >
      <div className="space-y-2">
        <a href="#projects">
          <h1 className="text-4xl font-semibold underline">Projects</h1>
        </a>
        <p className="text-[0.9rem] text-[#a5abc1]">
          These are some of my personal projects, which I've developed whenever
          I was free, bored, excited, or learning new tech. At this point
          developing for me has become just like gaming, literally in recent
          times my all gaming time has been eaten up by developing projects.
        </p>
      </div>
      {DATA?.projects?.map((project, index) => (
        <article
          className={`grid ${index % 2 === 0 ? 'md:grid-cols-2' : 'md:grid-cols-2'} gap-2 md:gap-14`}
          key={index}
        >
          <div
            className={`relative shadow-black/5 shadow-none rounded-large ${index % 2 === 0 ? '' : 'md:order-2'}`}
            style={{ maxWidth: 'fit-content' }}
          >
            <div className="relative overflow-hidden rounded-inherit rounded-large">
              <img
                src={project?.image}
                className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none object-cover transform hover:scale-125 transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-lg"
                alt="project"
                data-loaded="true"
              />
            </div>
            <img
              src={project?.image}
              className="absolute z-0 inset-0 w-full h-full object-cover filter blur-lg scale-105 saturate-150 opacity-30 translate-y-1 rounded-lg"
              alt="project"
              aria-hidden="true"
              data-loaded="true"
            />
          </div>
          <div className={`flex flex-col gap-2 relative ${index % 2 === 0 ? '' : 'md:order-1'}`}>
            <h2 className="text-2xl font-medium">{project?.title}</h2>
            <p className="text-foreground/90 text-[0.9rem]">
              {project?.description}
            </p>
            <ul className="flex flex-wrap gap-1">
              {project?.technologies?.map((tech) => (
                <li key={tech}>
                  <div className="relative max-w-fit inline-flex items-center justify-between box-border whitespace-nowrap h-7 rounded-small text-xs bg-blue-600/20 text-blue-500 p-0">
                    <span className="flex-1 text-inherit font-normal px-2">
                      {tech}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex gap-2 lg:absolute lg:bottom-0 pt-2">
              <a
                href={project?.github}
                target="_blank"
                rel="noreferrer"
                className="underline bg-black px-1"
              >
                GitHub
              </a>
              <a
                href={project?.href}
                target="_blank"
                rel="noreferrer"
                className="underline px-1 bg-gradient-to-br from-purple-600 to-blue-600 text-white text-md hover:from-blue-600 hover:to-green-600"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Projects;

import React from 'react';

const Experience = ({DATA}) => {
  return (
    <section
      id="experience"
      className="dark px-4 sm:px-6 mx-auto grid pb-4 pt-16"
    >
      <a href="#experience">
        <h1 className="text-4xl font-semibold underline">Experience</h1>
      </a>
      <br />
      <ol className="relative border-s border-gray-200 dark:border-gray-500">
        {DATA?.work?.map((work,index) => (
          <li className="mb-10 ms-4" key={index}>
            
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {work?.start} - {work?.end}
            </time>
            <h3 className="text-lg font-medium ">{work?.title}</h3>
            <p className="pb-1 text-foreground/90">{work?.company} • {work?.type}</p>
            <ul className="list-disc list-outside ml-4 mb-4 text-sm font-normal text-pretty text-darkfg">
              {work?.list?.map((item, index) => (
                <li>{item}</li>
              ))}
            </ul>
            <ul className="flex flex-wrap gap-1 mb-2">
              {work?.technologies?.map((item, index) => (
                <li>
                  <div className="relative max-w-fit inline-flex items-center justify-between box-border whitespace-nowrap h-7 rounded-small text-xs bg-blue-600/20 text-blue-500 p-0">
                    <span className="flex-1 text-inherit font-normal px-2">
                      {item}
                    </span>
                  </div>
                </li>
              ))}

            </ul>
            <div className="flex gap-2 lg:bottom-0 pt-2">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="underline bg-[#1B6C41] px-1"
              >
                Project
              </a>
              <a
                href='#'
                target="_blank"
                rel="noreferrer"
                className="underline px-1 bg-[#214DB5] text-white text-md hover:from-blue-600 hover:to-green-600"
              >
                Certificate
              </a>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;

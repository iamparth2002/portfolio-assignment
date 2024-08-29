'use client'
import React, { createContext, useState } from 'react';

// Create the context
export const ResumeContext = createContext();

// Create a provider component
export const ResumeProvider = ({ children }) => {
  // State to hold the resume data
  const [resume, setResume] = useState({});

  // Provide the context value
  return (
    <ResumeContext.Provider value={{ resume, setResume }}>
      {children}
    </ResumeContext.Provider>
  );
};

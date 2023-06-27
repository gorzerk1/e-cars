import React, { useState } from 'react';

const MyContext = React.createContext();

function ThemeProvider({ children }) {
  const [currentPath, setCurrentPath] = useState('');
  
  const setPath = (path) => setCurrentPath(path);

  return (
      <MyContext.Provider
      value={{
        currentPath,
        setPath
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export { MyContext, ThemeProvider };

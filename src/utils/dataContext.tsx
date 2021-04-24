import React, { createContext, useContext, useState } from 'react';

interface DataContextProps {
  children?: React.ReactNode;
}

const DataContext = createContext({} as any);

const DataProvider: React.FC = ({ children }: DataContextProps) => {
  const [token, setToken] = useState('');

  const changeValue = (newValue: any) => {
    setToken(newValue);
  };

  return (
    <DataContext.Provider value={[token, changeValue]}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);

export default DataProvider;

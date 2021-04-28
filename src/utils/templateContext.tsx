import React, { createContext, useContext, useState } from 'react';

interface TemplateContextProps {
  children?: React.ReactNode;
}

const TemplateContext = createContext({} as any);

const TemplateProvider: React.FC = ({ children }: TemplateContextProps) => {
  const [options, setOptions] = useState({});

  const changeValue = (newValue: any) => {
    setOptions(newValue);
  };

  return (
    <TemplateContext.Provider value={[options, changeValue]}>
      {children}
    </TemplateContext.Provider>
  );
};

export const useTemplateContext = () => useContext(TemplateContext);

export default TemplateProvider;

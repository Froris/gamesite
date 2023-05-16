// HOC for scrool transparency

import { createContext, useState } from 'react';

// context for the color mode
export const TopBarScroolContext = createContext({
  distance: 200,
  setScroolDistance: (value: number) => {},
});

export const TopBarScroolProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [distance, setScroolDistance] = useState(200);

  return (
    <TopBarScroolContext.Provider value={{ distance, setScroolDistance }}>
      {children}
    </TopBarScroolContext.Provider>
  );
};

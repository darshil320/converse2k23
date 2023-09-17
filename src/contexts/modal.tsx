'use client';

import React, {
  FC,
  ReactElement,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';

const ModalContext = createContext({
  isOnboardOpen: false,
  setIsOnboardOpen: (value: boolean) => {},
});

export const useModal = () => {
  return useContext(ModalContext);
};

export const ModalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isOnboardOpen, setIsOnboardOpen] = useState<boolean>(false);

  return (
    <ModalContext.Provider
      value={{
        isOnboardOpen,
        setIsOnboardOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

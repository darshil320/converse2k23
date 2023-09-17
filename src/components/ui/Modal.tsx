'use client';

import React, { FC, ReactElement, PropsWithChildren } from 'react';

interface ModalProps extends PropsWithChildren {
  open: boolean;
}

const ModalComponent: FC<ModalProps> = ({ open, children }): ReactElement => {
  return open ? (
    <div
      id="defaultModal"
      tabIndex={-1}
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 bottom-0 z-10 h-screen w-screen overflow-x-hidden overflow-y-hidden md:inset-0"
    >
      <div
        className="fixed top-0 left-0 right-0 bottom-0 z-10 h-screen w-screen overflow-x-hidden overflow-y-hidden md:inset-0 bg-opacity-20 backdrop-blur-sm rounded drop-shadow-sm hover:cursor-pointer"
        data-modal-hide="defaultModal"
      />

      <div className="absolute top-1/2 left-1/2 z-20 translate-x-[-50%] translate-y-[-50%] bg-[#19191a] py-2 rounded-2xl w-[25rem] max-w-[calc(100vw-0.75rem)] h-4/5 md:h-3/5">
        <div className="modal flex flex-col py-12 px-8 w-full h-full rounded-2xl overflow-auto">
          {children}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default ModalComponent;

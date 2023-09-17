import {
  FACULTY_COORDINATORS,
  FACULTY_DESIGNATION,
  HOD_DESIGNATION,
  HOD_NAME,
  STUDENT_COORDINATORS,
  STUDENT_COORDINATOR_DESIGNATION,
  WEB_COORDINATORS,
  WEB_DESIGNATION,
} from '@/lib/constants';
import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="w-full mx-auto my-0 p-4 pt-10 md:px-[10%] bg-gradient-to-b from-transparent  to-[#2C5364]">
      <div className="mx-auto mb-8 grid grid-cols-12 gap-8 h-full w-full">
        <div className={styles.column}>
          <h1 className={styles.designations}>{HOD_DESIGNATION}</h1>
          <p className="mt-1">{HOD_NAME}</p>
        </div>

        <div className={styles.column}>
          <h1 className={styles.designations}>{FACULTY_DESIGNATION}</h1>
          {FACULTY_COORDINATORS.map((coordinator) => (
            <p key={coordinator} className="mt-1">
              {coordinator}
            </p>
          ))}
        </div>

        <div className={styles.column}>
          <h1 className={styles.designations}>
            {STUDENT_COORDINATOR_DESIGNATION}
          </h1>
          {STUDENT_COORDINATORS.map((coordinator) => (
            <p key={coordinator.name} className="mt-1">
              {coordinator.name}
            </p>
          ))}
        </div>

        <div className={styles.column}>
          <h1 className={styles.designations}>{WEB_DESIGNATION}</h1>
          {WEB_COORDINATORS.map((coordinator) => (
            <p key={coordinator} className="mt-1">
              {coordinator}
            </p>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mb-4">
        <div className="flex gap-4 mb-4">
          <Link href={'https://www.instagram.com/converse_2k23/'}>
            <AiOutlineInstagram size={'1.8rem'} />
          </Link>
          <Link href={'https://github.com/scet-converse/converse2k23'}>
            <AiFillGithub size={'1.8rem'} />
          </Link>
        </div>
        © Converse 2023 - All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;

const styles = {
  column: 'text-center md:text-left md:col-span-6 lg:col-span-4 col-span-12',
  designations: 'text-[#e2e202] mb-2 md:text-xl text-lg',
};

'use client';

import Image from 'next/image';
import React from 'react';
import Logo from '../../public/logo-512.png';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userSchema } from '@/lib/validations/user';
import * as z from 'zod';
import departments from '@/lib/data/departments';
import { createUser } from '@/lib/actions/user.actions';
import { useRouter } from 'next/navigation';
import Spinner from './ui/Spinner';

const OnboardForm = (props: { id: string; email: string }) => {
  type UserSchemaType = z.infer<typeof userSchema>;
  const { id, email } = props;
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserSchemaType>({
    resolver: zodResolver(userSchema),
    defaultValues: {},
  });

  const onSubmit: SubmitHandler<UserSchemaType> = async (data) => {
    try {
      setLoading(true);

      await createUser({ ...data, id, email });

      setLoading(false);
      router.refresh();
    } catch (error) {
      setLoading(false);
      router.refresh();
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div>
        <Image src={Logo} alt="converse logo" width={48} height={48} />
      </div>

      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold">Onboard</h1>

        <p className="text-base font-normal text-[#ffffffaf]">
          to continue to converse
        </p>
      </div>

      <div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          {/* full name input */}

          <div className="flex flex-col gap-1">
            <label className={styles.label}>Full Name</label>
            <input className={styles.input} type="text" {...register('name')} />
            {errors.name && (
              <span className={styles.hint}>{errors.name?.message}</span>
            )}
          </div>

          {/* mobile number input */}

          <div className="flex flex-col gap-1">
            <label className={styles.label}>Mobile Number</label>
            <input
              className={styles.input}
              type="text"
              {...register('mobile')}
            />
            {errors.mobile && (
              <span className={styles.hint}>{errors.mobile?.message}</span>
            )}
          </div>

          {/* enrollment number input */}

          <div className="flex flex-col gap-1">
            <label className={styles.label}>Enrollment Number</label>
            <input
              className={styles.input}
              type="text"
              {...register('enroll')}
            />
            {errors.enroll && (
              <span className={styles.hint}>{errors.enroll?.message}</span>
            )}
          </div>

          {/* college name input */}

          <div className="flex flex-col gap-1">
            <label className={styles.label}>College Name</label>
            <input
              className={styles.input}
              type="text"
              {...register('college')}
            />
            {errors.college && (
              <span className={styles.hint}>{errors.college?.message}</span>
            )}
          </div>

          {/* branch input */}

          <div className="flex flex-col gap-1">
            <label className={styles.label}>Branch</label>
            <select className={styles.input} {...register('branch')}>
              {departments &&
                departments.map((department, index) => (
                  <option
                    key={index}
                    value={department.code}
                    className={styles.option}
                  >
                    {department.name}
                  </option>
                ))}
            </select>
            {errors.branch && (
              <span className={styles.hint}>{errors.branch?.message}</span>
            )}
          </div>

          {/* year input */}

          <div className="flex flex-col gap-1 flex-1">
            <label className={styles.label}>Year</label>
            <select className={styles.input} {...register('year')}>
              <option value={1} className={styles.option}>
                First Year
              </option>
              <option value={2} className={styles.option}>
                Second Year
              </option>
              <option value={3} className={styles.option}>
                Third Year
              </option>
              <option value={4} className={styles.option}>
                Fourth Year
              </option>
            </select>
            {errors.year && (
              <span className={styles.hint}>{errors.year?.message}</span>
            )}
          </div>

          {/* submit button */}

          <button
            className={`${styles.button}`}
            type="submit"
            disabled={loading || isSubmitting || Object.keys(errors).length > 0}
          >
            {loading ? <Spinner /> : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default OnboardForm;

const styles = {
  label: 'text-[0.8125rem] font-medium',
  input:
    'border border-[#ffffff29] rounded-md p-2 bg-transparent text-[0.8125rem] px-4 py-[0.625rem] outline-none',
  option: 'bg-[#19191a]',
  button:
    'py-[0.625rem] px-5 cursor-pointer bg-[var(--accent)] rounded-md p-2 text-[0.6875rem] font-semibold min-h-[2.25rem] tracking-[0.5px] hover:bg-[var(--accentDark)] uppercase',
  hint: 'text-[rgba(255, 255, 255, 0.65)] text-[0.8125rem] font-normal mt-[0.5rem] text-red-800 block',
};

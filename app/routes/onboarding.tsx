/* eslint-disable jsx-a11y/label-has-associated-control */
import type { MetaFunction } from '@remix-run/node';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import Icon from '~/components/icon';

import { OnbType, OnboardingMsg, OnboardingTtl, OnboardingButton, SignInUpProps, SignInInput, SignUpInput } from '~/utilities/onboardingtypes';

export const meta: MetaFunction = () => {
  return [
    { title: 'Taskify | Onboarding' },
    { name: 'description', content: 'Welcome to taskify' },
  ];
};

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/;
const nameRegex = /^[a-zA-Z]+$/;

export default function Onboarding() {
  const [type, setType] = useState<OnbType>('SIGN_IN');
  const [onboardingMsg, setOnboardingMsg] = useState<string>(OnboardingMsg[type]);
  const [onboardingTitle, setOnboardingTitle] = useState<string>(OnboardingTtl[type]);
  const [onboardingButton, setOnboardingButton] = useState<string>(OnboardingButton[type]);

  const handleTypeClick = () => {
    if (type === 'SIGN_IN') {
      setType('SIGN_UP');
      handleSignUpClick();
    } else {
      setType('SIGN_IN');
      handleSignInClick();
    }
  }
  const handleSignInClick = () => {
    setType('SIGN_IN');
    setOnboardingMsg(OnboardingMsg['SIGN_IN']);
    setOnboardingTitle(OnboardingTtl['SIGN_IN']);
    setOnboardingButton(OnboardingButton['SIGN_IN']);
  };
  const handleSignUpClick = () => {
    setType('SIGN_UP');
    setOnboardingMsg(OnboardingMsg['SIGN_UP']);
    setOnboardingTitle(OnboardingTtl['SIGN_UP']);
    setOnboardingButton(OnboardingButton['SIGN_UP']);
  }

  return (
    <div className="bg-gradient-to-br from-gray-950 via-purple-950  to-gray-950 bg-animate h-full page-container gap-6 px-52">
      <div className="flex flex-col gap-4 text-center text-xl w-96">
        <div>
          <p className='text-2xl animate-fade-up animate-once animate-ease-out' key={onboardingTitle}>{onboardingTitle}</p>
          <span className='opacity-55'>
            <p className="animate-fade animate-once animate-ease-in text-pretty" key={onboardingMsg}>{onboardingMsg}</p>
          </span>
        </div>
        {type === 'SIGN_IN' ? <SignIn type={type} /> : <SignUp type={type} />}
        <div className="flex flex-col justify-center gap-6 mt-6 animate-once animate-ease-out">
          <button
            key={onboardingButton}
            onClick={handleTypeClick}
            className="text-base text-transition"
          >
            {onboardingButton}
          </button>
        </div>
      </div>
      
    </div>
  );
}

const SignIn = ({ type }: SignInUpProps) => {
  const { register, handleSubmit, formState: {errors} } = useForm<SignInInput>({criteriaMode:"all"});
  const onSubmit: SubmitHandler<SignInInput> = (data) => {
    console.log(data);
  };

  return (
    <form key={type} onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center gap-6 mt-6 animate-fade animate-once animate-ease-in">
      <div className="toast toast-center">
        {errors && 
        <>
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => <div className="alert alert-error flex flex-col"><span>{message}</span></div>}
          />
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => <div className="alert alert-error flex flex-col"><span>{message}</span></div>}
          />
        </>
        }
      </div>

      <label htmlFor='input-email' className="input input-ghost form-transition input-primary flex items-center gap-2">
        <Icon iconName="mail-fill" />
        <input {...register("email", {required: "Email is Required", pattern: { value: emailRegex, message: "Invalid Email" }})} id='input-email' type="text" className="grow" placeholder="Email" />
      </label>
      
      <label className="input input-ghost form-transition input-primary flex items-center gap-2">
        <Icon iconName="key-fill" />
        <input {...register("password", {required: "Password is Required", pattern: {value: passwordRegex, message: "Password must contain 8 alphanumeric characters" }})} type="password" className="grow" placeholder="Password" />
      </label>
      <input
        type='submit'
        value='Sign In'
        className="btn btn-neutral btn-primary"
      />
    </form>
  );
}

const SignUp = ({type}: SignInUpProps) => {
  const { register, handleSubmit, formState: {errors} } = useForm<SignUpInput>({criteriaMode:"all"});
  const onSubmit: SubmitHandler<SignUpInput> = (data) => {
    console.log(data);
  };
  return (
    <form key={type} onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center gap-6 mt-6 animate-fade animate-once animate-ease-in">
      <div className="toast toast-center">
        {errors && 
        <>
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => <div className="alert alert-error flex flex-col"><span>{message}</span></div>}
          />
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => <div className="alert alert-error flex flex-col"><span>{message}</span></div>}
          />
          <ErrorMessage
            errors={errors}
            name="username"
            render={({ message }) => <div className="alert alert-error flex flex-col"><span>{message}</span></div>}
          />
        </>
        }
      </div>

      <label className="input input-ghost form-transition input-primary flex items-center gap-2">
        <Icon iconName="mail-fill" />
        <input {...register("email", {required: "Email is Required", pattern: { value: emailRegex, message: "Invalid Email" }})} type="text" className="grow" placeholder="Email" />
      </label>

      <label className="input input-ghost form-transition input-primary flex items-center gap-2">
        <Icon iconName="user-fill" />
        <input {...register("username", {required: "Name is Required", minLength: {value: 3, message: "Name must be more than 3 letters"}, maxLength: {value: 15, message: "Name must be less than 16 letters"}, pattern: {value: nameRegex, message: "Name is Invalid" }})} type="text" className="grow" placeholder="Name" />
      </label>

      <label className="input input-ghost form-transition input-primary flex items-center gap-2">
      <Icon iconName="key-fill" />
        <input {...register("password", {required: "Password is Required", pattern: {value: passwordRegex, message: "Password must contain 8 alphanumeric characters" }})} type="password" className="grow" placeholder="Password" />
      </label>
      <button
        className="btn btn-neutral btn-primary"
      >
        Sign Up
      </button>
    </form>
  );
}

const ToastAlert = () => {
  return (
    <div className="toast toast-center">
      <div className="alert alert-info">
        <span>New mail arrived.</span>
      </div>
    </div>
  );
}
"use client";

import { useEffect, useState } from 'react';
import Link from "next/link";
import { useAppDispatch, useAppSelector } from '@/store';
import { User } from '@/interfaces';
import { PrimaryButton } from '@/components';
import { setLoggedUser } from '@/store/users/users-store';

export const LoginForm = () => {

  const dispatch = useAppDispatch();
  const [loaded, setLoaded] = useState(false);
  const [inputLogin, setInputLogin] = useState({email: '', password: ''});

  const users: User[] = useAppSelector(state => state.users.users);

  const validateLogin = ({email, password}: {email: string, password: string}) => {
    const userInDb = users.find((user) => user.email.toLowerCase() === email.toLowerCase());

    if(!userInDb || userInDb.password !== password){
      alert('Invalid credentials');
    } else {
      dispatch(setLoggedUser(userInDb));
      window.location.replace('/');
    }
    
  }

  const handleInputChange = (propertyName: string, propertyValue: string) => {
    console.log(propertyName, propertyValue);
    setInputLogin({
      ...inputLogin,
      [propertyName]: propertyValue
    });
  }

  useEffect(() => {
    setLoaded(true);
  },[]);

  if(!loaded) return <p>Loading...</p>

  return (
    <form className="flex flex-col w-[420px]">
      <label htmlFor="email">Email</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="email"
        name="email"
        onChange={(event) => handleInputChange('email', event.target.value)}
      />

      <label htmlFor="email">Password</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="password"
        name="password"
        onChange={(event) => handleInputChange('password', event.target.value)}

      />

      <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
      </div>

      <PrimaryButton action={() => validateLogin(inputLogin)} text='Login'/>

      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">Or</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/new-account" className="btn-secondary text-center">
        Create an account
      </Link>
    </form>
  );
};

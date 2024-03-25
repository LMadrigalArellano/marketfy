"use client";

import { useEffect, useState } from 'react';
import Link from "next/link";
import { useAppDispatch, useAppSelector } from '@/store';
import { User } from '@/interfaces';
import { PrimaryButton } from '@/components';
import { v4 as uuidv4 } from 'uuid';
import { addNewUser } from '@/store/users/users-store';

export const RegisterForm = () => {

  const dispatch = useAppDispatch();

  const [loaded, setLoaded] = useState(false);
  const [inputLogin, setInputLogin] = useState<User>({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    areasOfInterest: '',
    bio: '',
    role: 'user',
    id: uuidv4(),
  });

  const users: User[] = useAppSelector(state => state.users.users);

  const handleSubmitForm = () => {    

    if(users.find(x => x.email === inputLogin.email)){
      alert('Email already registered');
      return;
    }

    dispatch(addNewUser(inputLogin));

  }

  const handleInputChange = (propertyName: string, propertyValue: string) => {

    if(propertyName === 'areasOfInterest'){
      const areasOfInterestArray = inputLogin.areasOfInterest.split(',');
      const indexOfValue = areasOfInterestArray.indexOf(propertyValue);

      if( indexOfValue === -1){
        areasOfInterestArray.push(propertyValue);
      } else{
        areasOfInterestArray[indexOfValue] = '';
      }
      propertyValue = areasOfInterestArray.join();

    }

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

      <label htmlFor="first-name">First Name</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="text"
        name="first-name"
        onChange={(event) => handleInputChange('firstName', event.target.value)}
      />

      <label htmlFor="last-name">Last Name</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="text"
        name="last-name"
        onChange={(event) => handleInputChange('lastName', event.target.value)}
      />
    
      <label htmlFor="bio">Bio</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="text"
        name="bio"
        onChange={(event) => handleInputChange('bio', event.target.value)}
      />

      <label>Areas of interest</label>

      <div>
        <span className='mr-4'>
        <span className='mr-1'>Software</span> 
          <input
            type="checkbox"
            name="software"
            value='software'
            onChange={(event) => handleInputChange('areasOfInterest', event.target.value)}
          />
        </span>
        <span className='mr-4'>
        <span className='mr-1'>Animals</span> 
          <input
            type="checkbox"
            name="animal"
            value='animal'
            onChange={(event) => handleInputChange('areasOfInterest', event.target.value)}
          />
        </span>
        <span className='mr-4'>
        <span className='mr-1'>Sports</span> 
          <input
            type="checkbox"
            name="sport"
            value='sport'
            onChange={(event) => handleInputChange('areasOfInterest', event.target.value)}
          />
        </span>
      </div>
      

      <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
      </div>

      <PrimaryButton action={() => handleSubmitForm()} text='Register'/>

      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">Or</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/login" className="btn-secondary text-center">
        Login
      </Link>
    </form>
  );
};

'use client';

import { Title } from '@/components';
import { User } from '@/interfaces';
import { useAppSelector } from '@/store';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export const UserProfile = () => {
  const [loaded, setLoaded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const retrievedUser = useAppSelector(state => state.users.loggedUser);

  useEffect(() => {
    setLoaded(true);
  },[]);
  
  if(!loaded) return <p>Loading...</p>;
  
  if(!retrievedUser) return notFound();

  return (
    <>
      <div className="flex flex-col sm:justify-center sm:items-center mt-10 mb-72 px-10 sm:px-10">
        <div className="w-full  xl:w-[1000px] flex flex-col justify-center text-left">
          <div className="grid grid-cols-1 gap-2 sm:gap-5 sm:grid-cols-2">

            <div className="flex flex-col mb-2">
              <span className='font-semibold'>ID:</span>
              <span className='p-2 border rounded-md bg-gray-200'>{retrievedUser.id}</span>
            </div>

            <div className="flex flex-col mb-2">
              <span className='font-semibold'>Role:</span>
              <span className='p-2 border rounded-md bg-gray-200'>{retrievedUser.role}</span>
            </div>
            <div className="flex flex-col mb-2">
              <span className='font-semibold '>First Name:</span>
              {
                isEditing
                ? 
                <input 
                  type="text" 
                  className="p-2 border rounded-md bg-white"
                  defaultValue={retrievedUser.firstName}
                />
                :
                <span className='p-2 border rounded-md bg-gray-200'>{retrievedUser.firstName}</span>
              }
              
            </div>

            <div className="flex flex-col mb-2">
              <span className='font-semibold'>Last Name:</span>
              {
                isEditing
                ? 
                <input 
                  type="text" 
                  className="p-2 border rounded-md bg-white"
                  defaultValue={retrievedUser.lastName}
                />
                :
                <span className='p-2 border rounded-md bg-gray-200'>{retrievedUser.lastName}</span>
              }
            </div>

            <div className="flex flex-col mb-2">
              <span className='font-semibold'>Email:</span>
              {
                isEditing
                ? 
                <input 
                  type="email" 
                  className="p-2 border rounded-md bg-white"
                  defaultValue={retrievedUser.email}
                />
                :
                <span className='p-2 border rounded-md bg-gray-200'>{retrievedUser.email}</span>
              }
            </div>

            <div className="flex flex-col mb-2">
              <span className='font-semibold'>Password:</span>
              {
                isEditing
                ? 
                <input 
                  type="password" 
                  className="p-2 border rounded-md bg-white"
                  defaultValue={retrievedUser.password}
                />
                :
                <span className='p-2 border rounded-md bg-gray-200'>***</span>
              }
            </div>

            <div className="flex flex-col mb-2">
              <span className='font-semibold'>Areas of interest:</span>
              {
                isEditing
                ? 
                <div className="p-2 border rounded-md bg-white">
                  <span className='mr-4'>
                  <span className='mr-1'>Software</span> 
                    <input
                      type="checkbox"
                      name="software"
                      value='software'
                    />
                  </span>
                  <span className='mr-4'>
                  <span className='mr-1'>Animals</span> 
                    <input
                      type="checkbox"
                      name="animal"
                      value='animal'
                    />
                  </span>
                  <span className='mr-4'>
                  <span className='mr-1'>Sports</span> 
                    <input
                      type="checkbox"
                      name="sport"
                      value='sport'
                    />
                  </span>
                </div>
                :
                <span className='p-2 border rounded-md bg-gray-200 min-h-10'>{retrievedUser.areasOfInterest.split(',')}</span>
              }
            </div>

            <div className="flex flex-col mb-2">
              <span className='font-semibold'>Bio:</span>
              {
                isEditing
                ? 
                <input 
                  type="text" 
                  className="p-2 border rounded-md bg-white"
                  defaultValue={retrievedUser.bio}
                />
                :
                <span className='p-2 border rounded-md bg-gray-200 min-h-10'>{retrievedUser.bio}</span>
              }
            </div>
            <div className='flex flex-col'/>

            <div className="flex flex-col mb-2 items-end">
              <button 
                onClick={() => setIsEditing(!isEditing)}
                className="btn-primary flex w-full sm:w-1/2 justify-center ">
                {isEditing ? 'Save' : 'Edit'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
    
  )
}

'use client';

import { User } from '@/interfaces';
import { useAppDispatch, useAppSelector } from '@/store';
import { setLoggedUser, updateUser } from '@/store/users/users-store';
import { handleInputChange } from '@/utils/handleInputChange';
import { notFound } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export const UserProfile = () => {
  const dispatch = useAppDispatch();
  const [loaded, setLoaded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const users: User[] = useAppSelector(state => state.users.users);
  const retrievedUser = useAppSelector(state => state.users.loggedUser);
  const [updatedUser, setUpdatedUser] = useState<User>({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    areasOfInterest: '',
    bio: '',
    role: '',
    id: ''
  });

  useEffect(() => {
    setLoaded(true);
  },[]);
  
  if(!loaded) return <p>Loading...</p>;
  
  if(!retrievedUser) return notFound();

  const handleFormValueChange = (propertyName: string, propertyValue: string) => {
    handleInputChange(propertyName, propertyValue, updatedUser, setUpdatedUser);
  }

  const handleButtonClick = () => {  
    
    let key: keyof typeof retrievedUser;
    for(key in updatedUser){   
      if(updatedUser[key] === ''){        
        updatedUser[key] = retrievedUser[key];
      }
    }
    if(isEditing){

      if(updatedUser.email.length < 5){
        return alert('EMAIL ISSUE! Please add at least 5 characters');
      }
      if(updatedUser.password.length < 3){
        return alert('PASSWORD ISSUE! Please add at least 3 characters');
      }
      if(updatedUser.firstName.length < 3){
        return alert('FIRST NAME ISSUE! Please add at least 3 characters');
      }
      if(updatedUser.lastName.length < 3){
        return alert('LAST NAME ISSUE! Please add at least 3 characters');
      }
      dispatch(updateUser(updatedUser));
      dispatch(setLoggedUser(updatedUser));
    }
    setIsEditing(!isEditing);
  }

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
                name="first-name"
                type="text" 
                  className="p-2 border rounded-md bg-white"
                  defaultValue={retrievedUser.firstName}
                  onChange={(event) => handleFormValueChange('firstName', event.target.value)}
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
                  name="last-name"
                  type="text" 
                  className="p-2 border rounded-md bg-white"
                  defaultValue={retrievedUser.lastName}
                  onChange={(event) => handleFormValueChange('lastName', event.target.value)}
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
                  name="email"
                  type="email" 
                  className="p-2 border rounded-md bg-white"
                  defaultValue={retrievedUser.email}
                  onChange={(event) => handleFormValueChange('email', event.target.value)}
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
                  name="password"
                  type="password" 
                  className="p-2 border rounded-md bg-white"
                  defaultValue={retrievedUser.password}
                  onChange={(event) => handleFormValueChange('password', event.target.value)}

                />
                :
                <span className='p-2 border rounded-md bg-gray-200'>
                  {
                    "*".repeat(retrievedUser.password.length)
                  }
                </span>
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
                      defaultChecked={retrievedUser.areasOfInterest.includes('software')}
                      onChange={(event) => handleFormValueChange('areasOfInterest', event.target.value)}
                    />
                  </span>
                  <span className='mr-4'>
                  <span className='mr-1'>Animals</span> 
                    <input
                      type="checkbox"
                      name="animal"
                      value='animal'
                      defaultChecked={retrievedUser.areasOfInterest.includes('animal')}
                      onChange={(event) => handleFormValueChange('areasOfInterest', event.target.value)}
                    />
                  </span>
                  <span className='mr-4'>
                  <span className='mr-1'>Sports</span> 
                    <input
                      type="checkbox"
                      name="sport"
                      value='sport'
                      defaultChecked={retrievedUser.areasOfInterest.includes('sport')}
                      onChange={(event) => handleFormValueChange('areasOfInterest', event.target.value)}
                    />
                  </span>
                </div>
                :
                <span className='p-2 border rounded-md bg-gray-200 min-h-10'>
                  {
                    retrievedUser.areasOfInterest.split(',').length > 1
                    ? retrievedUser.areasOfInterest.split(',').filter(x=> x !=='No interests').join(', ')
                    : 'No interests'
                  }
                </span>
              }
            </div>

            <div className="flex flex-col mb-2">
              <span className='font-semibold'>Bio:</span>
              {
                isEditing
                ? 
                <input
                  name="bio"
                  type="text" 
                  className="p-2 border rounded-md bg-white"
                  defaultValue={retrievedUser.bio}
                  onChange={(event) => handleFormValueChange('bio', event.target.value)}
                />
                :
                <span className='p-2 border rounded-md bg-gray-200 min-h-10'>{retrievedUser.bio}</span>
              }
            </div>
            <div className='flex flex-col'/>

            <div className="flex flex-col mb-2 items-end">
              <button 
                onClick={handleButtonClick}
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

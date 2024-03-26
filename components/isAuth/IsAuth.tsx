'use client';

import { useAppSelector } from "@/store";
import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";

export const IsAuth = ({children}: { children: React.ReactNode }) => {

  const loggedUser = useAppSelector(state => state.users.loggedUser);
  
  useLayoutEffect(() => {
    if(loggedUser === undefined){
      redirect('/auth/login');
    }
  },[]);
  
  return (
    <>
      {children}
    </>
  )
}

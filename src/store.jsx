import { create } from 'zustand';
import React, { useEffect } from 'react';
import axios from 'axios';
import Display from './display';
import {persist,createJSONStorage} from 'zustand/middleware'

export const useUserDataStore = create(
  persist(
    (set) => ({
  userData: null,
  setUserData: (data) => set({ userData: data }),
}),{
name:'PetroMoney-Data',
storage:createJSONStorage(()=>sessionStorage),
},),);

function Store() {
  const { setUserData } = useUserDataStore();

  useEffect(() => {
    const postData = {
      mobile: '9544328328',
      password: '9544328328'
    };
    axios.post('https://api-uat.petromoney.in/api/login/user', postData)
      .then(response => {
        const userData = response.data.data;
        console.log('Login successful:', response.data.data);
        setUserData(userData);
        
      })
      .catch(error => {
        console.error('Login failed:', error);
        // Handle error if needed
      });
  }, [setUserData]); 

  return (
    <>
      <div>
        
      </div>
    </>
  );
}

export default Store;
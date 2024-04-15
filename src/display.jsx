import React from 'react';
import { useUserDataStore } from './store'; // Import the hook from your Zustand store file
import { MantineProvider,Center } from '@mantine/core';

function Display() {
  // Access the userData from the Zustand store
  const userData = useUserDataStore(state => state.userData);

  console.log(userData)
  return (
    <MantineProvider>
    <div>
      {userData ? (
        <div>
          <Center>
          

          <p>First Name: {userData.first_name}</p>
          </Center>
          <Center>
          <p>Email:{userData.email}</p>

          </Center>
          
          {/* Add other fields as needed */}
        </div>
      ) : (
        <p>No user data available</p>
        )}
    </div>
    
    </MantineProvider>
  );
}

export default Display;

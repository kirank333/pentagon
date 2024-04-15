import React, { useState } from 'react';
import '@mantine/core/styles.css';
import { Center, Input, MantineProvider } from '@mantine/core';
import image from './assets/img.jpg'
import { Card, Image, Text, Badge, Button, Group,Anchor } from '@mantine/core';
import Store from './store';
import Display from './display';
import { Avatar } from '@mantine/core';
import { IconX, IconCheck } from '@tabler/icons-react';
import { Notification, rem } from '@mantine/core';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';

function Success() {
  const [inputValue, setInputValue] = useState('');
  const [notificationVisible, setNotificationVisible] = useState(true);

  // Function to handle changes in the input field
  const handleInputChange = (event) => {
    // Allow only numbers in the input field
    const value = event.target.value.replace(/\D/g, '');
    setInputValue(value);
  };

  // Function to convert the entered amount to Indian Rupee text
  const convertToIndianRupee = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(amount);
  };

  // Function to convert number to Indian currency text
  
    const convertNumberToWords = (number) => {
      const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
      const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
      const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    
      if (number === 0) return 'zero';
      
      let words = '';
    
      if (number >= 10000000) {
        words += convertNumberToWords(Math.floor(number / 10000000)) + ' Crore ';
        number %= 10000000;
      }
    
      if (number >= 100000) {
        words += convertNumberToWords(Math.floor(number / 100000)) + ' Lakh ';
        number %= 100000;
      }
    
      if (number >= 1000) {
        words += convertNumberToWords(Math.floor(number / 1000)) + ' Thousand ';
        number %= 1000;
      }
    
      if (number >= 100) {
        words += ones[Math.floor(number / 100)] + ' Hundred ';
    
        // Add 'and' if there are tens or ones digits
        if (number % 100 !== 0) {
          words += 'and ';
        }
        
        number %= 100;
      }
    
      if (number >= 20) {
        words += tens[Math.floor(number / 10)]; // Append tens value here
    
        // Add hyphen for clarity between tens and ones
        if (number % 10 !== 0) {
          words += '-';
        }
        
        number %= 10;
      } else if (number >= 10) {
        words += teens[number - 10] + ' ';
        number = 0;
      }
    
      if (number > 0) {
        words += ones[number] + ' ';
      }
    
      return words.trim();
    };
    

  const handleCloseNotification = () => {
    setNotificationVisible(false); // Hide the notification when closed
  };

  const handleLogout = () => {
    // Clear session storage
    localStorage.clear();
    sessionStorage.clear();
    
    
  };


  
  return (
    <MantineProvider>
      <div className='nav'>
        <img src={image} alt="not found"></img>
        <div className='avatar'>
        <Avatar variant="transparent" radius="xs" size="md" color="rgba(47,143,157,1)"  src="" />
        </div>
        <div className='logout'>
        <Anchor href="/" onClick={handleLogout}>
      Logout
    </Anchor>
        </div>
      </div>
      <Center>

    
      <Card shadow="sm" padding="lg" radius="md" withBorder style={{"marginTop":"50px","width":"600px","backgroundColor":"rgba(189,209,211,1)"}} >
     
      <Center>
      {notificationVisible && ( // Render notification only if it's visible
          <Notification
          icon={<IconCheck />}
          color="teal"
          title="Successfully Logged In!"
          mt="md"
          onClose={handleCloseNotification} // Close handler to hide the notification
          >
            Everything is fine
          </Notification>
        )}
        </Center>
      
      <Center>

        <div className="component-wrapper">
          <Input
          style={{"margin-top":"40px"}}
          placeholder="Enter the amount"
          value={inputValue}
          onChange={handleInputChange}
          type="tel" // Set the input type to 'tel' to enforce numeric keyboard on mobile devices
          />
        </div>
      
      
          </Center>
          <Center>

        <div className='component-wrapper'>{convertToIndianRupee(parseInt(inputValue))}</div>
          </Center>
          <Center>
        <div className='component-wrapper'>{convertNumberToWords(parseInt(inputValue))} Rupees only</div>

          </Center>
       

        <div className='component wrapper'>
          <Store/>          
        </div>
        
        <Center>
        <div className='component wrapper'>
          <Display/>
        </div>
        </Center>
        <Center>

        <div className='component wrapper'>
        <Anchor href="/" onClick={handleLogout}>
      Logout
    </Anchor>
        </div>
        </Center>
        </Card>
        </Center>
    </MantineProvider>
  );
}

export default Success;
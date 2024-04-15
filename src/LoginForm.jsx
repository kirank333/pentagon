import React, { useState } from 'react';
import '@mantine/core/styles.css';
import './App.css';
import { IconArrowRight } from '@tabler/icons-react';
import { Input, MantineProvider, PasswordInput, Button, Anchor,Container, Center} from '@mantine/core';
import image from './assets/img.jpg'


const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const demoProps = {
    bg: 'var(--mantine-color-blue-light)',
    h:50
  };  


  const handleLogin = () => {
    if (username === 'Manyu' && password === 'Manyu@18') {
      onLogin();
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  const componentWidth = '300px';

  return (
    <MantineProvider>
      <div className='nav'>
        <img src={image} alt="not dound"></img>
      </div>
      
        
      <div className="component-wrapper">
        <Center>
        <p style={{ color: "rgba(47, 143, 157, 1)" }}>Login in to Pentagon</p></Center>
        <Center>
        <p>Enter Your Credentials</p>
        </Center>
        <Center>
        <Input
          size="md"
          style={{ width: componentWidth }} // Increase width of Input field
          placeholder="Mobile number or email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        </Center>
      </div>
      <div className="component-wrapper">
        <Center>
        <PasswordInput
          size="md"
          style={{ width: componentWidth }} // Increase width of PasswordInput field
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </Center>
      </div>
      <div className="component-wrapper">
        <Center>
        <Button
          onClick={handleLogin}
          fullWidth
          variant="filled"
          rightSection={<IconArrowRight size={14} />}
          color="rgba(47, 143, 157, 1)"
          size="md"
          style={{ width: componentWidth }} // Increase width of Button
        >
          Proceed
        </Button>
        </Center>
      </div>
      <div className="component-wrapper">
        <Center>
        <Anchor
          href="https://mantine.dev/"
          target="_blank"
          style={{ color: "rgba(47, 143, 157, 1)" }} // Apply custom color to the Anchor component
        >
          Forgot Password?
        </Anchor>
        </Center>
      </div>
    </MantineProvider>
  );
};

export default LoginForm;
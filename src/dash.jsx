import React, { useState } from 'react';
import { MantineProvider, AppShell, Button, Grid, Card, Group, Text } from '@mantine/core';
import image from './assets/img.jpg';
import { useDisclosure } from '@mantine/hooks';
import { IconDots, IconEye, IconFileZip, IconTrash } from '@tabler/icons-react';

function Dashboard() {
  const [opened, { toggle }] = useDisclosure();
  const [clickedButton, setClickedButton] = useState(null);

  const handleDashboardButtonClick = () => {
    setClickedButton('Dashboard');
  };

  const handleQuotesButtonClick = () => {
    setClickedButton(null); // Empty the page when Quotes button is clicked
  };

  const handleBookingsButtonClick = () => {
    setClickedButton(null); // Empty the page when Bookings button is clicked
  };

  return (
    <MantineProvider>
      <AppShell
        withBorder={true}
        header={{ height: 64 }}
        navbar={{
          mt: 65,
          width: 207,
          breakpoint: 'sm',
          
          collapsed: { mobile: !opened }
        }}
        padding="md"
      >
        <AppShell.Header>
          <div className='nav'>
            <img src={image} alt="not found" />
          </div>
        </AppShell.Header>

        <AppShell.Navbar p="md" backgroundColor="red" >
          <AppShell.Section mt={10}>
            <Button
              justify='center'
              fullWidth
              variant={clickedButton === 'Dashboard' ? "filled" : "default"}
              onClick={handleDashboardButtonClick}
              color="rgba(47, 143, 157, 1)"
              style={{ border: "none", fontWeight: '400' }}
            >
              Dashboard
            </Button>
          </AppShell.Section>
          <AppShell.Section mt={8}>
            <Button
              justify='center'
              fullWidth
              variant="default" // No need to check clickedButton for Quotes button
              onClick={handleQuotesButtonClick}
              color="rgba(47, 143, 157, 1)"
              style={{ border: "none", fontWeight: '400' }}
            >
              Quotes
            </Button>
          </AppShell.Section>
          <AppShell.Section mt={8}>
            <Button
              justify='center'
              fullWidth
              variant="default" // No need to check clickedButton for Bookings button
              onClick={handleBookingsButtonClick}
              color="rgba(47, 143, 157, 1)"
              style={{ border: "none", fontWeight: '400', }}
            >
              Bookings
            </Button>
          </AppShell.Section>
        </AppShell.Navbar>

        <AppShell.Main style={{ display: 'flex', justifyContent: 'center' }}>
          {clickedButton === 'Dashboard' ? (
            <div style={{ width: '95%', maxWidth: '1200px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Grid style={{ width: '100%', marginBottom: '20px' }}>
                <Grid.Col className='grd box' span={2.8}>1</Grid.Col>
                <Grid.Col className='grd box' span={2.8}>2</Grid.Col>
                <Grid.Col className='grd box' span={2.8}>3</Grid.Col>
                <Grid.Col className='grd box' span={2.8}>4</Grid.Col>
              </Grid>

              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <Card withBorder shadow="sm" radius="md" style={{ width: '49.19%', height: '300px' }}>
                  <Card.Section withBorder inheritPadding py="xs">
                    <Group justify="space-between">
                      <Text fw={400}>Quotes(0)</Text>
                    </Group>
                  </Card.Section>
                  <Text mt="sm" c="dimmed" size="sm"></Text>
                </Card> 
                <Card withBorder shadow="sm" radius="md" style={{ width: '49.19%', height: '300px' }}>
                  <Card.Section withBorder inheritPadding py="xs">
                    <Group justify="space-between">
                      <Text fw={400}>Bookings(0)</Text>
                    </Group>
                  </Card.Section>
                  <Text mt="sm" c="dimmed" size="sm"></Text>
                </Card>
              </div>
            </div>
          ) : null}
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}export default Dashboard;
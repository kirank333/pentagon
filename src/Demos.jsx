import React, { useState, useEffect } from 'react';
import { MantineProvider, AppShell, Button, Table, TextInput } from '@mantine/core';
import image from './assets/img.jpg';
import { useDisclosure } from '@mantine/hooks';
import { Search } from 'tabler-icons-react';
import axios from 'axios';
import { Pagination ,Center} from '@mantine/core';

function Demos() {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
const [totalPages,setTotalPages] =useState([]);
const [list,setlist]=useState([]);
const[search,setSearch]=useState([]);
const[set,sets]=useState([]);
  useEffect(() => {
    const fetchTotalPages = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/contacts/totalPages');
        const re=await axios.get('http://localhost:5001/api/contacts/all');
        setlist(re.data);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error('Error fetching total pages:', error);
      }
    };

    fetchTotalPages();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/contacts/', {
          params: {
            page: currentPage,
            limit: 10 // or any other specified limit
          }
        });
        setContacts(response.data);
        setFilteredContacts(response.data); // Initialize filteredContacts with all contacts
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchData();
  }, [currentPage]); // Re-fetch data when currentPage changes

  useEffect(() => {
    const fetchTotalPages = async () => {
      try {
      
        const response = await axios.get('http://localhost:5001/api/contacts/totalPages');
        setTotalPages(response.data.totalPages);}

      
        
       catch (error) {
        console.error('Error fetching total pages:', error);
      }
    };

    fetchTotalPages();
  }, []);

  const handleSearchInputChange = async (event) => {
    const searchTerm = event.target.value.toLowerCase();
    
    try {
        const response = await axios.get('http://localhost:5001/api/contacts/search', {
            params: {
                searchTerm: searchTerm
            }
        });
                    const res= await axios.get('http://localhost:5001/api/contacts/s',{
          params: {
            searchTerm: searchTerm}
        });
          setTotalPages(res.data.totalPages);
        setFilteredContacts(response.data);
    } catch (error) {
        console.error('Error searching contacts:', error);
    }
};


  const rows = filteredContacts.map(contact => (
    <Table.Tr style={{ border: '1.5px solid #D8EAEC' }} key={contact._id}>
      <Table.Td style={{ color: '#666666' }}>{contact.name}</Table.Td>
      <Table.Td style={{ color: '#666666' }}>{contact.email}</Table.Td>
      <Table.Td style={{ color: '#666666' }}>{contact.phone}</Table.Td>
    </Table.Tr>
  ));

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

  const handlePaginationChange = (page) => {
    setCurrentPage(page);
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
              style={{ border: "none", fontWeight: '400' }}
            >
              Bookings
            </Button>
          </AppShell.Section>
        </AppShell.Navbar>

        <AppShell.Main>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginBottom: '20px' }}>
            <div style={{ position: 'relative', width: '15rem', marginRight: '1rem' }}>
              <TextInput
                placeholder="Search"
                style={{
                  borderRadius: '15px',
                  paddingRight: '40px',
                  marginLeft: 'auto',
                  color: '#666666' // Apply the same color as the search icon
                }}
                onChange={handleSearchInputChange}
              />
              <Search
                size={20}
                strokeWidth={2}
                color="#666666" // Same color as placeholder
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: '50px',
                  transform: 'translateY(-50%)'
                }}
              />
            </div>
          </div>
          <Table.ScrollContainer minWidth={500}>
            <Table
              highlightOnHover
              withTableBorder
              style={{ border: '1px solid #BDD1D3', width: '95.8%' }}
            >
              <Table.Thead >
                <Table.Tr  style={{border:'1.5px solid #D8EAEC'}}>
                  <Table.Th fw={500}  fs={13} style={{ backgroundColor: '#F5FFFD', color: '', height: '52px' ,color:'#555555'}}>Name</Table.Th>
                  <Table.Th fw={500}  fs={13} style={{ backgroundColor: '#F5FFFD', color: '', height: '52px',color:'#555555' }}>Email</Table.Th>
                  <Table.Th fw={500} fs={13} style={{ backgroundColor: '#F5FFFD', color: '', height: '52px',color:'#555555' }}>Phone</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{rows}</Table.Tbody>
            </Table>
          </Table.ScrollContainer>
          <Center>
            
          < Pagination total={totalPages} withEdges onChange={handlePaginationChange} />
          </Center> </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default Demos;
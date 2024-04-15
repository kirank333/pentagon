import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MantineProvider, Table } from '@mantine/core';

function Dis() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5001/api/contacts/')
        .then(response => setContacts(response.data))
        .catch(err => console.log(err));
    }, []);

    const rows = contacts.map(contact => (
        <Table.Tr key={contact._id}>
            <Table.Td>{contact.name}</Table.Td>
            <Table.Td>{contact.email}</Table.Td>
            <Table.Td>{contact.phone}</Table.Td>
        </Table.Tr>
    ));

    return (
        <MantineProvider>
            <Table.ScrollContainer minWidth={500}>
                <Table>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>Name</Table.Th>
                            <Table.Th>Email</Table.Th>
                            <Table.Th>Phone</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>{rows}</Table.Tbody>
                </Table>
            </Table.ScrollContainer>
        </MantineProvider>
    );
}

export default Dis;

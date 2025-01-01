import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GetStarted.css'; // Assuming you save the CSS in a file named Forum.css

function Test() {
    const [clients, setClients] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    // Fetch clients from the backend
    useEffect(() => {
        axios.get('http://localhost:5000/clients')
            .then((response) => setClients(response.data))
            .catch((err) => console.error(err));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email && number) {
            const newClient = { name, email, number };
            axios.post('http://localhost:5000/clients', newClient)
                .then((response) => {
                    setClients([...clients, response.data]);
                    setName('');
                    setEmail('');
                    setNumber('');
                })
                .catch((err) => console.error(err));
        }
    };

    return (
        <div className="forum-container">
            <h1>Client Forum</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Number:</label>
                    <input
                        type="text"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            <div className="client-info">
                <h2>Client Information</h2>
                {clients.map((client) => (
                    <div key={client._id}>
                        <h3>{client.name}</h3>
                        <p>Email: {client.email}</p>
                        <p>Number: {client.number}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Test;

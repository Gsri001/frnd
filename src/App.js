import React, { useState, useEffect } from "react";
import axios from "axios";
import TicketForm from "./TicketForm";
import TicketList from "./TicketList";
import './App.css';

const App = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/get-tickets");
      setTickets(response.data.tickets);
    } catch (error) {
      console.error("Error fetching tickets:", error);
    }
  };

  return (
    <div>
      <TicketForm fetchTickets={fetchTickets} />
      <TicketList tickets={tickets} />
    </div>
  );
};

export default App;

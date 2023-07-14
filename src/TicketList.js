import React from "react";

const TicketList = ({ tickets }) => {
  if (!tickets || tickets.length === 0) {
    return <p>No tickets available.</p>;
  }

  return (
    <div>
      <h2>Ticket List</h2>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            <h3>{ticket.title}</h3>
            <p><b>Description:</b> {ticket.description}</p>
            <p><b>Priority:</b> {ticket.priority}</p>
            {ticket.attachment && (
              <p><b>Attachment:</b> <a href={ticket.attachment} target="_blank" >View Attachment</a></p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketList;

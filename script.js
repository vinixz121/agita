import React, { useState } from 'react';
import './AdminDashboard.css';

function AdminDashboard() {
  const [title, setTitle] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleCreateEvent = async (e) => {
    e.preventDefault();
    alert('Evento criado com sucesso!');
    setTitle('');
    setEventDate('');
    setLocation('');
    setDescription('');
  };

  return (
    <div className="admin-dashboard">
      <h1>Bem-vindo, Administrador!</h1>
      <p>Gerencie eventos e documentos da AGITA aqui.</p>

      <h2>Criar Novo Evento</h2>
      <form onSubmit={handleCreateEvent}>
        <div>
          <label htmlFor="title">Título do Evento:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="eventDate">Data:</label>
          <input
            type="date"
            id="eventDate"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="location">Local:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Descrição:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Criar Evento</button>
      </form>
    </div>
  );
}

export default AdminDashboard;

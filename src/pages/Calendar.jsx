import React, { useState, useEffect } from 'react';
import '..//styles/Calendar.css'

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [notes, setNotes] = useState({});
  const [modal, setModal] = useState({ open: false, dateKey: '', note: '', eventType: '', repeat: 'None', day: null });
  const [darkMode, setDarkMode] = useState(false);
  const [filterType, setFilterType] = useState('');

  // const today = new Date();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const daysArray = [];
  for (let i = 0; i < firstDay; i++) daysArray.push('');
  for (let i = 1; i <= daysInMonth; i++) daysArray.push(i);

  const handlePrev = () => setCurrentDate(new Date(year, month - 1, 1));
  const handleNext = () => setCurrentDate(new Date(year, month + 1, 1));

  const openModal = (day) => {
    if (!day) return;
    const dateKey = `${year}-${month + 1}-${day}`;
    setModal({
      open: true,
      dateKey,
      note: '',
      eventType: '',
      repeat: 'None',
      day
    });
  };

  const closeModal = () => setModal({ open: false, dateKey: '', note: '', eventType: '', repeat: 'None', day: null });

  const saveNote = () => {
  const updatedNotes = { ...notes };
  if (!Array.isArray(updatedNotes[modal.dateKey])) {
    updatedNotes[modal.dateKey] = [];
  }
  updatedNotes[modal.dateKey].push({
    note: modal.note,
    eventType: modal.eventType,
    repeat: modal.repeat,
  });
  setNotes(updatedNotes);
  localStorage.setItem('calendarNotes', JSON.stringify(updatedNotes));
  closeModal();
};


  const deleteNoteFromList = (dateKey, index) => {
    const updatedNotes = { ...notes };
    updatedNotes[dateKey].splice(index, 1);
    if (updatedNotes[dateKey].length === 0) delete updatedNotes[dateKey];
    setNotes(updatedNotes);
    localStorage.setItem('calendarNotes', JSON.stringify(updatedNotes));
  };

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('calendarNotes')) || {};
    setNotes(savedNotes);
  }, []);

  return (
    <div className={`calendar ${darkMode ? 'dark' : ''}`}>
      <h2>
        {monthNames[month]} {year}
      </h2>

      <button onClick={() => setDarkMode(!darkMode)}>
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </button>

      <div className="navigation">
        <button onClick={handlePrev}>\u2190 Prev</button>
        <button onClick={handleNext}>Next \u2192</button>
      </div>

      <div className="weekdays">
        <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
      </div>

      <div className="days-grid">
        {daysArray.map((day, index) => {
          const dateKey = `${year}-${month + 1}-${day}`;
          const hasNote = !!notes[dateKey];

          return (
            <div
              key={index}
              className={`day ${hasNote ? 'has-note' : ''} ${day ? '' : 'empty'}`}
              onClick={() => openModal(day)}
            >
              <div>{day}</div>
            </div>
          );
        })}
      </div>

      {modal.open && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>New Event for {modal.day} {monthNames[month]} {year}</h3>
            <textarea
              rows="3"
              placeholder="Note..."
              value={modal.note}
              onChange={(e) => setModal({ ...modal, note: e.target.value })}
            ></textarea>

            <select
              value={modal.eventType}
              onChange={(e) => setModal({ ...modal, eventType: e.target.value })}
            >
              <option value="">Select Type</option>
              <option value="Meeting">Meeting</option>
              <option value="Birthday">Birthday</option>
              <option value="Reminder">Reminder</option>
            </select>

            <select
              value={modal.repeat}
              onChange={(e) => setModal({ ...modal, repeat: e.target.value })}
            >
              <option value="None">No Repeat</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
            </select>

            <button onClick={saveNote}>Save</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </div>
      )}

      <div className="monthly-notes">
        <h3>Notes for {monthNames[month]} {year}</h3>

        <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
          <option value="">All Types</option>
          <option value="Meeting">Meeting</option>
          <option value="Birthday">Birthday</option>
          <option value="Reminder">Reminder</option>
        </select>

        <ul>
          {Object.keys(notes)
            .filter((key) => {
              const [y, m] = key.split('-').map(Number);
              return y === year && m === month + 1;
            })
           .flatMap((key) =>
  Array.isArray(notes[key])
    ? notes[key].map((event, idx) => ({ key, idx, event, day: key.split('-')[2] }))
    : []
)

            .filter(({ event }) => !filterType || event.eventType === filterType)
            .map(({ key, idx, event, day }, index) => (
              <li key={index}>
                <strong>{day}:</strong> {event.note}
                <span className={`event-type-tag event-${event.eventType?.toLowerCase() || ''}`}>
                  {event.eventType}
                </span>
                (Repeat: {event.repeat})
                <button onClick={() => deleteNoteFromList(key, idx)}>Delete</button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

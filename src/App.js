import './App.css';
import { Header } from './components/header/Header';
import { TaskCards } from './components/task/TaskCards';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import React, { useState } from 'react';

function App() {
  return (
    <div className='app'>
      <Header />
      <TaskCards />
    </div>
  );
}

export default App;

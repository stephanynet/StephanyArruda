import React from "react";
import PropTypes from "prop-types"; 

import TaskItem from "./TaskItem";

export default function TaskList({ title, onAddTask, tasks, onTaskUpdate, taskState, onDeleteTask }) {
  const addTask = () => {
  
    onAddTask("Nova Tarefa", taskState);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
      {tasks.map((task) => {
        return (
          <TaskItem 
            key={task.id}
            id={task.id}
            title={task.title}
            taskState={task.state}
            onTaskUpdate={onTaskUpdate}
            onDeleteTask={onDeleteTask}
            />
          );
        })}
        { tasks.length === 0 && <div className="empty-list">Lista Vazia</div> }
        <button onClick={addTask} className="btn">
          Adicionar Tarefa
        </button>
      </div>
      
      </div>
  );
}


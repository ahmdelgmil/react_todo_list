import React, { useState } from 'react';

function TodoItem({ task, index, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task);

  const handleEdit = () => {
    if (isEditing) {
      editTask(index, editedText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="d-flex justify-content-between align-items-center mb-2 p-2 border rounded">
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          className="form-control me-2"
        />
      ) : (
        <span>{task}</span>
      )}
      <div>
        <button onClick={handleEdit} className="btn btn-warning btn-sm me-2">
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button onClick={() => deleteTask(index)} className="btn btn-danger btn-sm">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
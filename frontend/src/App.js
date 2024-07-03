import React, { useState, useEffect } from 'react';
import List from './components/List';
import axios from 'axios';
import { baseURL } from "./utils/constant";

function App() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);
  const [updateId, setUpdateId] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}/get`).then((res) => {
      console.log(res.data);
      setTasks(res.data);
    });
  }, [updateUI]);

  const addTask = () => {
    if (!input) return; // Prevent adding empty tasks
    axios.post(`${baseURL}/save`, {
      task: input
    }).then((res) => {
      console.log(res.data);
      setInput("");
      setUpdateUI(!updateUI);
    });
  };

  const UpdateMode = (id, text) => {
    console.log(text);
    setInput(text);
    setUpdateId(id);
  };

  const updateTask = () => {
    if (!input) return; // Prevent updating with empty values
    axios.put(`${baseURL}/update/${updateId}`, {
      task: input
    }).then(
      (res) => {
        console.log(res.data);
        setInput("");
        setUpdateId(null);
        setUpdateUI(!updateUI);
      }
    );
  };

  const clearInput = () => {
    setInput("");
    setUpdateId(null); // Reset updateId when clearing the input
  };

  return (
    <main>
      <h1 className='title'>CRUD Operations</h1>
      <div className='input_holder'>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <p>{input}</p>
        <button type='submit' onClick={updateId ? updateTask : addTask}>
          {updateId ? "Update" : "Add"}
        </button>
        <button onClick={clearInput}>Clear</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <List key={task._id} task={task.task} id={task._id} setUpdateUI={setUpdateUI}
            UpdateMode={UpdateMode}
          />
        ))}
      </ul>
    </main>
  );
}

export default App;

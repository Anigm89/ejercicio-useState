import './App.css'
import { useState } from 'react';
import ReacDom from 'react-dom/client';

//ejercicio 1
/*
function App() {
    const [name, newName] = useState('Sofía');

    return(
        <div>
            <h2>Teacher name: {name} </h2>
            <ul>
                <li onClick={() => newName('Data')}>Data</li>
                <li onClick={() => newName('Reyes')}>Reyes</li>
                <li onClick={() => newName('Yolanda')}>Yolanda</li>
            </ul>
        </div>
    )

}
*/

//ejercicio 2. BONUS

function App() {
    const [name, setName] = useState('Sofía');
    const [newName, setNewName] = useState('');

    const changeName = (e) => {
        e.preventDefault();
        if (newName.trim() !== '') {
            setName(newName);
            setNewName('');
        }
    }

    return(
        <div>
            <h2>Teacher name: {name} </h2>
            <form onSubmit={changeName}>
                <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder='add a name'/>
                <button type='submit'>Add</button>
            </form>
        </div>
    )

}


export default App

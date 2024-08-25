import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');
  const [newNro, setNewNro] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNroChange = (event) => {
    console.log("EVENT VAL: ", event.target.value)
    setNewNro(event.target.value);
  }
  const addPerson = (event) => {
    event.preventDefault();
    console.log("EVENT: ", event)
    console.log("Name: ", newName)
    console.log("Phone: ", newNro)

    const newPerson = { name: newName, phone: newNro, id: String(persons.length + 1) };
    const nameFound = persons.some(person => person.name === newName);

    if (!nameFound) {
      setPersons(persons.concat(newPerson));
      setNewName('');
      setNewNro('');
      console.log("persons: ", persons)
    } else {
      alert(`${newName} already added to the phonebook`);
    }
  };

  const Person = ({ name, phone }) => {
    return <p>{name} {phone}</p>;
  };


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: 
          <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number: 
          <input 
            value={newNro}
            onChange={handleNroChange}
          />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <Person key={person.id} name={person.name} phone={person.phone}/>)}
      </ul>
    </div>
  );
};

export default App;

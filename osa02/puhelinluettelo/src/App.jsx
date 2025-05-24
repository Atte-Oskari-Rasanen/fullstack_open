import { useState } from 'react';
import Filter from './components/filter';
import Submit from './components/submit';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('');
  const [filterInput, setFilterInput] = useState('');
  const [newNro, setNewNro] = useState('');
  const [showAll, setShowAll] = useState(true)

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNroChange = (event) => {
    console.log("EVENT VAL: ", event.target.value)
    setNewNro(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterInput(event.target.value);
  };
  console.log("EVENT FILTER: ", filterInput);
  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filterInput.toLowerCase())
  );
  console.log("filtered: ", filteredPersons);

  const addPerson = (event) => {
    event.preventDefault();
    console.log("PERSONS ", persons)
    console.log("EVENT: ", event)
    console.log("Name: ", newName)
    console.log("Phone: ", newNro)

    const newPerson = { name: newName, number: newNro, id: String(persons.length + 1) };
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

  const personsToShow = filterInput === ''
    ? persons
    : persons.filter(person =>
        person.name.toLowerCase().includes(filterInput.toLowerCase())
      );

  const Person = ({ name, number }) => {
    return <p>{name} {number}</p>;
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filterInput} onChange={handleFilterChange}/>
      <h2>add a new</h2>
      <Submit
        onSubmit={addPerson}
        nameValue={newName}
        onNameChange={handleNameChange}
        numberValue={newNro}
        onNumberChange={handleNroChange}
      />
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(person => (
          <Person key={person.id} name={person.name} number={person.number}/>
        ))}
      </ul>
    </div>
  );
};


export default App;

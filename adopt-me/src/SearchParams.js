import { useState, useEffect } from "react";
import Pet from "./pet";


const ANIMALS = ["bird", "cat", "dog", "reptile", "fish"];
const BREEDS = [];

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("");
  const [pets, setPets] = useState([]);
  const [breed, setBreed] = useState("");

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );

    const json = await res.json();
    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input id="location" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
        </label>
        <label htmlFor="animal">
          Animal
          <select id="animal" value={animal} onChange={e => setAnimal(e.target.value)} onBlur={e => setAnimal(e.target.value)}>
            <option />
            {ANIMALS.map(animal => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Animal
          <select id="breed" value={breed} onChange={e => setBreed(e.target.value)} onBlur={e => setBreed(e.target.value)}>
            <option />
            {BREEDS.map(breed => (
              <option value={breed} key={breed}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      {pets.map((pet) => {
        <Pet
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
          key={pet.id}
        />
      })}
    </div>
  )
}

export default SearchParams;

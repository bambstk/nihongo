import { useState } from "react";
import vocabulary from "../data/vocabulary.json";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setResults(
      vocabulary.filter(
        (item) =>
          item.japanese.toLowerCase().includes(term) ||
          item.french.toLowerCase().includes(term)
      )
    );
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Recherche</h1>
      <input
        type="text"
        placeholder="Chercher un mot..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full p-2 border rounded mb-4"
      />
      <ul>
        {results.map((item, index) => (
          <li key={index} className="mb-2 p-2 border-b">
            <span className="font-bold">{item.japanese}</span> : {item.french}
          </li>
        ))}
      </ul>
    </div>
  );
}
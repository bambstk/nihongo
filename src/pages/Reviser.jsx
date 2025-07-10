import Searchbar from '../components/Navbar';
import { useState } from "react";
import vocab from "../data/vocab.json"
import Flashcard from '../components/Flashcard';

export default function Reviser() {
  const [kanjiId, setKanjiId] = useState([...Array(vocab.length).keys()])
  const [currentIndex, setCurrentIndex] = useState(kanjiId[Math.floor(Math.random()*kanjiId.length)]);
  const [showFurigana, setShowFurigana] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);

  return (
      <div>
        <Searchbar />
        <div className="bg-[#13151a] text-white min-h-screen flex flex-col items-center justify-center text-xl">
            <h2 className='mb-20'>
            TKT ça arrive
            </h2>
            <Flashcard 
                kanjiId = {kanjiId}
                setKanjiId = {setKanjiId}
                currentIndex = {currentIndex} 
                setCurrentIndex = {setCurrentIndex} 
                showFurigana ={showFurigana} 
                setShowFurigana = {setShowFurigana} 
                showTranslation ={showTranslation} 
                setShowTranslation = {setShowTranslation} 
                vocab = {vocab}
            />
        </div>
      </div>
  );
}
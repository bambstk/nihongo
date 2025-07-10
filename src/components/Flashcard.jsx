function Flashcard ({kanjiId, setKanjiId, currentIndex, setCurrentIndex, showFurigana, setShowFurigana, showTranslation, setShowTranslation, vocab}){

    const nextCard = () => {
        setShowTranslation(false);
        setShowFurigana(false);
        if (kanjiId.length){
            setKanjiId(kanjiId.filter(id => id !== currentIndex));
            setCurrentIndex(kanjiId[Math.floor(Math.random()*kanjiId.length)]);
        }
        
    };
    const handleFurigana = () => {
        setShowFurigana(!showFurigana);
    };

    return(
        <div className="p-4 max-w-md mx-auto ">
            <h1 className="text-2xl font-bold mb-4">Flashcards</h1>
            <button 
                onClick={handleFurigana}
                className="mb-4 bg-[#4BB64C] text-white py-2 px-4 rounded hover:bg-[#69B66A] w-full">
            {showFurigana ? "Cacher les furiganas" : "Montrer les furigana"}
            </button>
            <div className="p-6 border rounded-lg shadow-md bg-[#282c34]">
                {showFurigana ? (
                <p className='text-xl text-center '>
                    {vocab[currentIndex].furigana}
                </p>
                ) : (
                <p className='text-xl text-center '>
                    ⠀
                </p>
                )}
                <p className="text-6xl text-center mb-2">
                {vocab[currentIndex].kanji}
                </p>
                {showTranslation ? (
                <p className="text-xl text-center ">
                    {vocab[currentIndex].traduction}
                </p>
                ) : (
                <p className="text-xl text-center">
                    ⠀
                </p>
                )}
            </div>
            <div className="w-full">
                <button 
                    onClick={() => setShowTranslation(!showTranslation)}
                    className="mt-4 mr-2 bg-[#FF4C4D] text-white py-2 px-4 rounded hover:bg-[#FF6A6C]"
                    >
                    Traduction
                </button>
                <button
                    onClick={nextCard}
                    className="mt-4 ml-2 bg-[#4B4BFF] text-white py-2 px-4 rounded hover:bg-[#6969FF]"
                >
                    Mot suivant
                </button>
            </div>
            
            </div>
    );
  }

export default Flashcard;
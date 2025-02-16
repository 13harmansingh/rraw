import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CocktailSearch = () => {
  const [search, setSearch] = useState('');
  const [cocktail, setCocktail] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const fetchCocktail = async () => {
    if (!search) return;
    const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`);
    const data = await res.json();
    if (data.drinks) {
      setCocktail(data.drinks[0]);
      setIsOpen(true);
    } else {
      setCocktail(null);
      setIsOpen(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <input 
        type="text" 
        placeholder="Search for a cocktail..." 
        className="p-2 border rounded-lg" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
      />
      <button 
        onClick={fetchCocktail} 
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
        Search
      </button>

      <AnimatePresence>
        {isOpen && cocktail && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -10 }} 
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
              <h2 className="text-xl font-semibold">{cocktail.strDrink}</h2>
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="w-40 mx-auto my-4 rounded-lg" />
              <p>{cocktail.strInstructions}</p>
              <button onClick={() => setIsOpen(false)} className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">Close</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CocktailSearch;

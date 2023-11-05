import React, { useState } from "react";

const Backpack = () => {
  const [answer,setAnswer] = useState(0);

    const values = [60, 100, 120];
    const weights = [10, 20, 30];
    const target = 20;

const knapSack = (values, weights, n, target) => {
  // Przypadek gdy nie możemy dodać więcej przedmiotów, zwracamy najmniejszą możliwą wartość
  if (target < 0) {
      return Number.MIN_SAFE_INTEGER;
  }
  
  // Przypadek gdy nie ma już dostępnych przedmiotów lub pojemność plecaka wynosi 0, zwracamy 0
  if (n < 0 || target === 0) {
      return 0;
  }
  
  // Wybierz przedmiot n do plecaka i oblicz wartość dla pozostałych przedmiotów (n - 1)
  // z uwzględnieniem zmniejszonej pojemności (target - weights[n])
  let include = values[n] + knapSack(values, weights, n - 1, target - weights[n]);

  // Pozostaw obecny przedmiot n i oblicz wartość dla pozostałych przedmiotów (n - 1)
  let exclude = knapSack(values, weights, n - 1, target);
  
  // Zwróć maksymalną wartość, którą można uzyskać
  return Math.max(include, exclude);
}

// Wywołaj funkcję knapSack i wyświetl wynik
const handleClick = () => {
  const ans = knapSack(values, weights, values.length - 1, target)
  setAnswer(ans)
}

  return (
        <div className="flex flex-col items-center justify-center text-[25px] font-semibold mt-24 pb-8">
    <h1 className="p-2 mb-4 bg-blue-500 rounded-lg">Zadanie 3</h1>
    <h2 className='pb-4'>Problem plecakowy</h2>
    <h1>Plecak</h1>
    <div className="flex gap-4 py-2">
    Wartości: {values.map((item)=> <p className="text-green-400">{item}</p>)}
    </div>
    <div className="flex gap-4 py-2">
    Wagi: {weights.map((item)=> <p className="text-green-400">{item}</p>)}
    </div>
    <div className="flex gap-4 py-2">
    Pojemność Plecaka: <p className="text-green-400">{target}</p>
    </div>
      


    <div className="flex items-center justify-center gap-8">
    <button onClick={handleClick} className="p-2 bg-blue-400 rounded-lg hover:brightness-[90%] font-semibold text-[16px]">Podaj Odpowiedź</button>
    <p className='text-[20px]'>Odpowiedź: <span className="text-green-400 text-[30px]">{answer}</span></p>
    </div>
  </div>
  );
};

export default Backpack;

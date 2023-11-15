import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentV } from "../state/store";
import { currentW } from "../state/store";
import { currentT } from "../state/store";



const Backpack = () => {
  const [v1, setV1] = useState(0)
  const [v2, setV2] = useState(0)
  const [v3, setV3] = useState(0)
  const [v4, setV4] = useState(0)
  const [v5, setV5] = useState(0)

  const [w1, setW1] = useState(0)
  const [w2, setW2] = useState(0)
  const [w3, setW3] = useState(0)
  const [w4, setW4] = useState(0)
  const [w5, setW5] = useState(0)

  const [t, setT] = useState(0)

  const dispatch = useDispatch()
  const bp = useSelector((state) => state.backpack)
  const [answer,setAnswer] = useState(0);

    const values = bp.values;
    const weights = bp.weights;
    const target = bp.target;

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
const handleDis = () => {
  dispatch(currentV([v1,v2,v3,v4,v5]))
  dispatch(currentW([w1,w2,w3,w4,w5]))
  dispatch(currentT(t))


}

const handleClick = () => {
  const ans = knapSack(values, weights, values.length - 1, target)
  setAnswer(ans)
}

  return (
        <div className="flex flex-col items-center justify-center text-[25px] font-semibold mt-24 pb-8">
    <h1 className="p-2 mb-4 bg-blue-500 rounded-lg">Zadanie 3</h1>
    <h2 className='pb-4'>Problem plecakowy</h2>
    <div className="flex gap-4 py-2">
    <p>Wartości:</p>
    <input onChange={(e) => setV1(parseInt(e.target.value))} type="number" className="w-[60px] text-black pl-4 text-[18px]" />
    <input onChange={(e) => setV2(parseInt(e.target.value))} type="number" className="w-[60px] text-black pl-4 text-[18px]" />
    <input onChange={(e) => setV3(parseInt(e.target.value))} type="number" className="w-[60px] text-black pl-4 text-[18px]" />
    <input onChange={(e) => setV4(parseInt(e.target.value))} type="number" className="w-[60px] text-black pl-4 text-[18px]" />
    <input onChange={(e) => setV5(parseInt(e.target.value))} type="number" className="w-[60px] text-black pl-4 text-[18px]" />
    </div>
    <div className="flex gap-4 py-2 ml-[40px]">
    <p>Wagi:</p>
    <input onChange={(e) => setW1(parseInt(e.target.value))} type="number" className="w-[60px] text-black pl-4 text-[18px]" />
    <input onChange={(e) => setW2(parseInt(e.target.value))} type="number" className="w-[60px] text-black pl-4 text-[18px]" />
    <input onChange={(e) => setW3(parseInt(e.target.value))} type="number" className="w-[60px] text-black pl-4 text-[18px]" />
    <input onChange={(e) => setW4(parseInt(e.target.value))} type="number" className="w-[60px] text-black pl-4 text-[18px]" />
    <input onChange={(e) => setW5(parseInt(e.target.value))} type="number" className="w-[60px] text-black pl-4 text-[18px]" />
    </div>
    <div className="flex gap-4 py-2">
    <p>Pojemność plecaka:</p>
    <input onChange={(e) => setT(e.target.value)} type="number" className="text-black pl-4 w-[60px] text-[18px]"/>
    </div>
    <button onClick={handleDis} className="p-2 bg-blue-400 rounded-lg hover:brightness-[90%] font-semibold text-[16px] mb-8">Zapisz wartości</button>
    <div className="flex items-center justify-center gap-8">
    <button onClick={handleClick} className="p-2 bg-blue-400 rounded-lg hover:brightness-[90%] font-semibold text-[16px]">Podaj Odpowiedź</button>
    <p className='text-[20px]'>Odpowiedź: <span className="text-green-400 text-[30px]">{answer}</span></p>
    </div>
  </div>
  );
};

export default Backpack;

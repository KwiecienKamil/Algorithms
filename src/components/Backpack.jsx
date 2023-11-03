import React, { useState } from "react";

const Backpack = () => {
  const [War,setWar] = useState(0)
  const [War2,setWar2] = useState(0)
  const [War3,setWar3] = useState(0)
  const [War4,setWar4] = useState(0)
  const [War5,setWar5] = useState(0)
  const [War6,setWar6] = useState(0)

  const [Wart,setWart] = useState(0)
  const [Wart2,setWart2] = useState(0)
  const [Wart3,setWart3] = useState(0)
  const [Wart4,setWart4] = useState(0)
  const [Wart5,setWart5] = useState(0)
  const [Wart6,setWart6] = useState(0)

  const [Wag,setWag] = useState(0)
  const [Wag2,setWag2] = useState(0)
  const [Wag3,setWag3] = useState(0)
  const [Wag4,setWag4] = useState(0)
  const [Wag5,setWag5] = useState(0)
  const [Wag6,setWag6] = useState(0)

  const [ans,setAns] = useState(0)
  
  
  function fractionalKnapsack(items, capacity) {
    items.sort((a, b) => b.value / b.weight - a.value / a.weight);
  
    let totalValue = 0;
    let remainingCapacity = capacity;
  
    for (const item of items) {
      if (remainingCapacity >= item.weight) {
        totalValue += item.value;
        remainingCapacity -= item.weight;
      } else {
        totalValue += (remainingCapacity / item.weight) * item.value;
        break;
      }
    }
  
    return totalValue;
  }
  
  const items = [
    { name: "Item1", weight: 3, value: Wart },
    { name: "Item2", weight: 4, value: Wart2 },
    { name: "Item3", weight: 2, value: Wart3 },
    { name: "Item4", weight: 6, value: Wart4 },
    { name: "Item5", weight: 1, value: Wart5 },
    { name: "Item6", weight: Wag6, value: Wart6 },
  ];
  
  const capacity = 10;
  
  const maxValue = fractionalKnapsack(items, capacity);

  const x = (e) => {
    setWar(e.target.value)
   const n = Number(War) - 1;
   setWart(n)
  }
  const x2 = (e) => {
    setWar2(e.target.value)
    const n = Number(War2);
    setWart2(n)
  }
  const x3 = (e) => {
    setWar3(e.target.value)
    const n = Number(War3);
    setWart3(n)
    
  }
  const x4 = (e) => {
    setWar4(e.target.value)
    const n = Number(War4);
    setWart4(n)
  }
  const x5 = (e) => {
    setWar5(e.target.value)
    const n = Number(War5);
    setWart5(n)
  }
  const x6 = (e) => {
    setWar6(e.target.value)
    const n = Number(War6);
    setWart6(n)
  }

  const handleAnswer = () => {
    console.log(items)
    setAns(maxValue);
  }

  return (
    <div className="w-full text-center mt-24 pb-8">
      <div className="flex flex-col items-center justify-center text-[25px] font-semibold ">
        <h1 className="p-2 mb-4 bg-blue-500 rounded-lg">Zadanie 3</h1>
        <h2>Problem Plecakowy</h2>
        <p className="text-[12px] pt-2">
          Podaj rozmiary, wartości, pojemność i kliknij przycisk
        </p>
        <p className="text-[12px] pt-2">Można zostawić puste pole</p>
      </div>
      <div className="flex items-center justify-center mt-4 gap-8 font-semibold">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <p>
            Wartość<span className="text-[12px] pl-2">(np.1234)</span>
            </p>
            <div className="flex gap-1 mt-1">
            <input
              type="number"
              className=" text-black w-[50px] text-center h-[35px]"
              onChange={x}
            />
            <input
              type="number"
              className=" text-black w-[50px] text-center"
              onChange={x2}
            />
            <input
              type="number"
              className=" text-black w-[50px] text-center"
              onChange={x3}
            />
            <input
              type="number"
              className=" text-black w-[50px] text-center"
              onChange={x4}
            />
            <input
              type="number"
              className=" text-black w-[50px] text-center"
              onChange={x5}
            />
            <input
              type="number"
              className="text-black w-[50px]"
              onChange={x6}
            />

            </div>
            
          </div>
          <div className="flex flex-col items-center justify-center">
            <p>
              Waga<span className="text-[12px] pl-2">(np.4321)</span>
            </p>
            <div className="flex gap-1">
            <input
              type="number"
              className=" text-black w-[50px] text-center"
              onChange={(e) => {setWag(e.target.value)}}
            />
            <input
              type="number"
              className=" text-black w-[50px] text-center"
              onChange={(e) => {setWag2(e.target.value)}}
            />
            <input
              type="number"
              className=" text-black w-[50px] text-center"
              onChange={(e) => {setWag3(e.target.value)}}
            />
            <input
              type="number"
              className="p-2 text-black w-[50px] text-center"
              onChange={(e) => {setWag4(e.target.value)}}
            />
            <input
              type="number"
              className="p-2 text-black w-[50px] text-center"
              onChange={(e) => {setWag5(e.target.value)}}
            />
            <input
              type="number"
              className="p-2 text-black w-[50px] text-center"
              onChange={(e) => {setWag6(e.target.value)}}
            />

            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p>
              Pojemność<span className="text-[12px] pl-2">(np.10)</span>
            </p>
            <input
              type="number"
              className="p-2 text-black w-[50px]"
            />
          </div>
        </div>
        <div className="flex items-end justify-center mt-[22px]">
          <button
            className="p-2 bg-blue-400 rounded-lg hover:brightness-[90%] font-semibold"
            onClick={handleAnswer}
          >
            Podaj odpowiedź
          </button>
        </div>
      </div>
      <div className="">
            {ans}
          </div>
    </div>
  );
};

export default Backpack;

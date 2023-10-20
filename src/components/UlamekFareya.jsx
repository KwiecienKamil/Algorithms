import React, { useState } from 'react'

const UlamekFareya = () => {
  const [dlugosc, setDlugosc] = useState(0)
  const [farey, setFarey] = useState([])
  const [clicked, setClicked] = useState(false)

  function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
  }
 
  function fareySequence(dlugosc) {
    let fractions = [];
    for (let denominator = 1; denominator <= dlugosc; denominator++) {
      for (let numerator = 0; numerator <= denominator; numerator++) {
        const commonDivisor = gcd(numerator, denominator);
        const fraction = numerator / commonDivisor + "/" + denominator / commonDivisor;
        if (!fractions.includes(fraction)) {
          fractions.push(fraction);
        }
      }
    }
    fractions.sort((a, b) => eval(a) - eval(b));
    return fractions;
  }
      const click = () => {
        if(dlugosc >= 0) {
          const answer = fareySequence(dlugosc)
        setFarey(answer.map((item) => item))
        setClicked(true)
        }else  {
          alert("Ciąg musi być dodatni")
        }
      }

  return (
    <>
    <div onClick={() => setClicked(false)} className="flex flex-col items-center justify-center text-[25px] font-semibold mt-24">
    <h1 className="p-2 mb-4 bg-blue-500 rounded-lg">Zadanie 2</h1>
    <h2 className='pb-4'>Ułamek Fareya</h2>
    <p className='text-[12px]'>Podaj długość ciągu i kliknij przycisk</p>
  </div>
  <div className="flex items-center justify-center">
    <div className="flex flex-col items-center justify-center">
    <div className="flex items-center gap-2 pt-4">
    <label>Podaj długość ciągu Fareya:</label>
    <input type="number" onChange={(e) => setDlugosc(e.target.value)} className="w-[40px] text-center relative text-black mr-[34.8px]"/>
    </div>
    </div>
    <button onClick={click} className="p-2 bg-blue-400 rounded-lg hover:brightness-[90%] mt-4 font-semibold">Podaj ciąg Fareya</button>
  </div>
  <h1 className="mt-8 text-center text-[30px]">Odpowiedź:</h1>
  <div className={dlugosc >= 4 && clicked ? "w-full grid grid-cols-4 place-items-center text-green-400 text-[30px]" : "w-full flex items-center justify-center gap-16 text-green-400 text-[30px]"}>
  {farey.map((item) => {
    return <p>{item}</p>
  })}
  </div>
  </>
  )
}

export default UlamekFareya

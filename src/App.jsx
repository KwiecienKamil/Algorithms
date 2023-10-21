import { useState } from "react";
import UlamekFareya from "./components/UlamekFareya";

function App() {
  const [getlicznik,setGetLicznik] = useState(1)
  const [getmianownik,setGetMianownik] = useState(1)
  const [answer, setAnswer] = useState("")
  function getListaRozkladuEgipskiego(
    licznik,
    mianownik,
    listaMianownikow
  ) {
    if (licznik == 0) {
      return listaMianownikow;
    }

    let nowyMianownik = Math.ceil(mianownik / licznik);
    listaMianownikow.push(nowyMianownik);
    listaMianownikow = getListaRozkladuEgipskiego(
      licznik * nowyMianownik - mianownik,
      nowyMianownik * mianownik,
      listaMianownikow
    );
    return listaMianownikow;
  }

  function getRozkladEgipski(licznik, mianownik) {
    let str = "";
    let output = getListaRozkladuEgipskiego(licznik, mianownik, []);
    for (let ulamek of output) {
      str += "1/" + ulamek + " + ";
    }
    let strKopia = str.substring(0, str.length - 3);
    {getlicznik < getmianownik ? strKopia.includes("1/1") ? setAnswer(strKopia.replaceAll("1/1 +", "")) : null : setAnswer("")}
    return strKopia;
  }
  const click = () => {
    console.log(getRozkladEgipski(getlicznik, getmianownik))
  }
  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-r from-g1 to-g2 text-white">
        <div className="flex px-32 py-8 font-semibold">
          <p>Kamil Kwiecień INF NST 3 Semestr</p>
        </div>
        <div className="flex flex-col items-center justify-center text-[25px] font-semibold ">
          <h1 className="p-2 mb-4 bg-blue-500 rounded-lg">Zadanie 1</h1>
          <h2>Rozkład Egipski</h2>
          <p className="text-[12px] pt-2">Podaj licznik, mianownik i kliknij przycisk</p>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 pt-4">
          <label>Podaj licznik:</label>
          <input type="number" onChange={(e) => (setGetLicznik(e.target.value))} className="w-[40px] text-center relative text-black" />
          </div>
          <div className="flex items-center gap-2 pt-4">
          <label>Podaj mianownik:</label>
          <input type="number" onChange={(e) => (setGetMianownik(e.target.value))} className="w-[40px] text-center relative text-black mr-[34.8px]"/>
          </div>
          </div>
          <button onClick={click} className="p-2 bg-blue-400 rounded-lg hover:brightness-[90%] font-semibold">Podaj Rozkład Egipski </button>
        </div>
        <h1 className="mt-8 text-center text-[30px]">Odpowiedź:{getmianownik > 0 ? <span className="ml-4 text-green-400">{getlicznik == 0 ? alert("Nie można przedstawić w postaci ułamka egipskiego") : answer}</span> : alert("Nie dziel przez zero!")}</h1> 
        <UlamekFareya />
      </div>
    </>
  )
}

export default App

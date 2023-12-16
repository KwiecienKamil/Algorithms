import { useState } from "react";
import UlamekFareya from "./components/UlamekFareya";
import Backpack from "./components/Backpack";
import Sorting from "./components/Sorting";

function App() {
  const [getlicznik,setGetLicznik] = useState(1)
  const [getmianownik,setGetMianownik] = useState(1)
  const [answer, setAnswer] = useState("")


  function getListaRozkladuEgipskiego(
    licznik,
    mianownik,
    listaMianownikow
  ) {
    // jeśli licznik wynosi 0, zwracamy listę mianowników
    if (licznik == 0) {
      return listaMianownikow;
    }

    // Nowy mianownik na podstawie zaokrąglenia wyniku dzielenia mianownika przez licznik
    let nowyMianownik = Math.ceil(mianownik / licznik);
    
    // Dodaje nowy mianownik do listy
    listaMianownikow.push(nowyMianownik);
    
    // Wywołuje funkcję, przekazując nowe wartości licznika, mianownika i listy
    listaMianownikow = getListaRozkladuEgipskiego(
      licznik * nowyMianownik - mianownik,
      nowyMianownik * mianownik,
      listaMianownikow
    );
    
    // Zwróć listę mianowników
    return listaMianownikow;
  }


function getRozkladEgipski(licznik, mianownik) {
    let str = "";
    
    // Wywołuje funkcję 'getListaRozkladuEgipskiego' i zapisz wynik w zmiennej 'output'
    let output = getListaRozkladuEgipskiego(licznik, mianownik, []);
    
    // Tworzy ciąg znaków zawierający ułamki z listy 'output'
    for (let ulamek of output) {
      str += "1/" + ulamek + " + ";
    }
    
    // Usuwa ostatniego " + " z ciągu znaków
    let strKopia = str.substring(0, str.length - 3);
    
    //  zwraca wynik
    setAnswer(strKopia);
    return strKopia;
  }

  const click = () => {
    if(parseInt(getlicznik) >= parseInt(getmianownik)) {
      alert("Bład! Ten ułamek jest większy lub równy 1")
    }else {
      getRozkladEgipski(getlicznik, getmianownik)
    }
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
        <Backpack />
        <Sorting />
      </div>
    </>
  )
}

export default App

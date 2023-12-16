import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Sorting = () => {
    const [number, setNumber] = useState(0)
    const [arr,setArr] = useState("")
    const dispatch = useDispatch()
    function bubbleSort(arr) {
        var len = arr.length;
        for (var i = 0; i < len - 1; i++) {
          for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
              //Zamiana miejscami, jeśli są w złej kolejności
              var temp = arr[j];
            //sprawdza, czy aktualny element jest większy od następnego. Jeśli tak, to są one w złej kolejności.
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
            }
          }
        }
        return arr;
      }
     const handleAns = () => {
        const value = arr;
        const x = value.split(" ")
        console.log(x);
        
        
     }

      let unsortedArray = [];
    var sortedArray = bubbleSort(unsortedArray.slice()); // kopia tablicy, aby nie modyfikować oryginału
    // console.log("Nieposortowana tablica:", unsortedArray);
    // console.log("Posortowana tablica:", sortedArray);
    return (
        <div>
        <div className="flex flex-col items-center justify-center text-[25px] font-semibold ">
          <h1 className="p-2 mb-4 bg-blue-500 rounded-lg">Zadanie 4</h1>
          <h2>Sortowanie bąbelkowe</h2>
          <div className="flex items-center gap-2 mb-4">
          <input onChange={(e) => setArr(e.target.value)} type="text" className="w-[200px] text-black text-lg px-1"/>
          <button onClick={handleAns} className="p-2 bg-blue-400 rounded-lg hover:brightness-[90%] font-semibold text-[16px]">Dodaj do tablicy</button>
          
          </div>
          

          <button onClick={handleAns} className="p-2 bg-blue-400 rounded-lg hover:brightness-[90%] font-semibold text-[16px] mb-8">Posortuj</button>
          <p className="text-lg">Nieposortowana tablica:</p>
          <p className="text-lg">Posortowana tablica:</p>
        </div>
        </div>
    )
}
  
  export default Sorting;
  
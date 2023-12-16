import { useState } from "react";
const Sorting = () => {
  const [input,setInput] = useState(0);
  const [ans,setAns] = useState(0);
  const [ans2,setAns2] = useState(0);
  let y = []
    function bubbleSort(arr) {
        var len = arr.length;
        for (var i = 0; i < len - 1; i++) {
          for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
              var temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
            }
          }
        }
        return arr;
      }
     const handleAns = () => {
      var b = input.split(',').map(function(item) {
        y.push(parseInt(item, 10));
   });
    var sortedArray = bubbleSort(y.slice());
    var InsertionSortedArray = insertionSort(y.slice());
    setAns(sortedArray)
    setAns2(InsertionSortedArray)
     }
    function insertionSort(arr) {
      var len = arr.length;
      for (var i = 1; i < len; i++) {
        var key = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > key) {  
          arr[j + 1] = arr[j];
          j = j - 1;
        }
        arr[j + 1] = key;
      }
      return arr;
    }
    return (
        <div className='mt-8'>
        <div className="flex flex-col items-center justify-center text-[25px] font-semibold pb-8">
          <h1 className="p-2 mb-4 bg-blue-500 rounded-lg">Zadanie 4</h1>
          <h2>Sortowanie bąbelkowe i przez wstawianie</h2>
          <div className="flex items-center gap-2 mb-4">
          <input onChange={(e) => setInput(e.target.value)} type="text" className="w-[200px] text-black text-lg px-1"/>
          <button onClick={handleAns} className="p-2 bg-blue-400 rounded-lg hover:brightness-[90%] font-semibold text-[16px]">Posortuj</button>
          </div>
          <p className="text-xl">Nieposortowana tablica: {`[${input}]`}</p>
          <p className="text-xl mt-4">Posortowana tablica bąbelkowo: <span className="text-green-400">{`[${ans}]`}</span></p>
          <p className="text-xl">Posortowana tablica przez wstawianie: <span className="text-green-400">{`[${ans2}]`}</span></p>
        </div>
        </div>
    )
}
  
  export default Sorting;
  
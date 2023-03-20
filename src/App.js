import { useEffect, useState } from "react";
import './App.css';

function App() {

  const [colorsData, setColorsData] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [selectBgColors, setSelectBgColors] = useState([]);

  const onClickNextHandler = () => {

    if (colorsData.length == selectedId) {
      var randomColorOne = Math.floor(Math.random() * 16777215).toString(16);
      var randomColorTwo = Math.floor(Math.random() * 16777215).toString(16);
      var randomColorThree = Math.floor(Math.random() * 16777215).toString(16);


      setColorsData([
        ...colorsData,
        {
          one: randomColorOne,
          two: randomColorTwo,
          three: randomColorThree,
          id: colorsData.length + 1,
        },
      ]);
      setSelectedId(colorsData.length + 1);
    } else {
      setSelectedId(selectedId + 1);
    }
  };

  const onClickPreviousHandler = () => {
    setSelectedId(selectedId - 1);
  };

  useEffect(() => {
    let selectedValue = colorsData.filter((data) => data.id == selectedId);

    setSelectBgColors(selectedValue[0]);  
  }, [selectedId, selectBgColors]);

  console.log("randomColor", colorsData, selectedId);


  return (
    <>
      <div className="App">
        <div className="Dekstop">
          <div>
            <h3 className='History_phe'>History</h3>
          </div>
          <div>
            <div className='line'></div>
          </div>
          <div>
            <p className="empty_phe" id="text">History is empty!</p>
          </div>
          <div className='history_container'>
            {colorsData.map((data) => (
              <div className={`History_01 ${data.id == selectedId ? "bg_color" : ""}`} key={data.id}>
                <div className="circle_0" style={{ backgroundColor: `#${data?.one}` }}></div>
                <div className="circle_0" style={{ backgroundColor: `#${data?.two}` }}></div>
                <div className="circle_0" style={{ backgroundColor: `#${data?.three}` }}></div>
              </div>
            ))}
          </div>
        </div>
        <div className='Dekstop_002'>
          <div className="Dekstop_02">
            <div className="circle" id="circle1" style={{ backgroundColor: `#${selectBgColors?.one}` }}> </div>
            <div className="circle" id="circle2" style={{ backgroundColor: `#${selectBgColors?.two}` }}></div>
            <div className="circle" id="circle3" style={{ backgroundColor: `#${selectBgColors?.three}` }} ></div>
          </div>
          <div className="Dekstop_phe">
            <p id="colorName1"></p>
            <p id="colorName2"></p>
            <p id="colorName3"></p>
          </div>
          <div className="Dekstop_button">
            <button className={`Previous_button ${colorsData.length > 1 ? "" : "bg_color"}`} onClick={onClickPreviousHandler} >Previous</button>
            <button className="Next_button" id="nextBtn" onClick={onClickNextHandler} >Next</button>
          </div>
        </div>
      </div>
    </>

  );
}

export default App;

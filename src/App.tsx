import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const noRef = useRef<HTMLButtonElement>(null);
  const [yesClicked, setYesClicked] = useState(false);

  useEffect(() => {
    setFirstName(window.Telegram.WebApp.initDataUnsafe.user?.first_name || "Аноним");
  }, []);

  const handleNoClick = () => {
    if (noRef.current) {
      const randX = Math.floor(Math.random() * 60 - noRef.current.offsetWidth);
      const randY = Math.floor(Math.random() * 320 - noRef.current.offsetHeight);

      noRef.current.style.transform = `translate(${randX}px, ${randY}px)`;
    }
  };

  const handleYesClick = () => {
    setYesClicked(true);
  };

  return (
    <div className="wrapper">
      {yesClicked && (
        <div>
          <div className="title">{firstName}, я тоже тебя очень сильно люблю! 💖</div>
        </div>
      )}
      {!yesClicked && (
        <div>
          <div className="title">{firstName} ты меня любишь?</div>
          <div className="btns">
            <button onClick={handleYesClick} className="button yes">
              Да
            </button>
            <button onClick={handleNoClick} ref={noRef} className="button no">
              Нет
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

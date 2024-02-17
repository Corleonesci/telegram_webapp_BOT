import './App.css';
const tg = window.Telegram.WebApp;

function App() {

    useEffect(() => {
      tg.ready(); 
    },    [])

    const_onClose = () => {
        tg.close()
    }

  return (
    <div className="App">
      Ipsilum Ipsi
      <button onClick={onClose}>Clique ici pour voir !</button>
  
  </div>
  );
  
}

export default App;

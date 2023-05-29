import Page from '../Page/Page'
import { useSelector } from 'react-redux'
// import './App.css';

function App() {
  const user = useSelector(state => state.user.name)
  const year = useSelector(state => state.page.year)
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Мой топ фото</h1>
      </header>
      <Page />
      <p className="App-intro">Здесь будут мои самые залайканые фото</p>
      <p>Меня зовут {user}</p> {/* добавлен вывод из props */}
    </div>
  );
}

export default App;

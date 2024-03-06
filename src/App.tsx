import './App.css';
import './styles/Tasks.css';
import './styles/Common.css';
import Tasks from './components/Tasks';
import { FC } from 'react';

const App : FC = () => {
  return (
    <div className="App">
      <Tasks />
    </div>
  );
}

export default App;

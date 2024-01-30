import './App.css';
import './components/Expenses.css'
import Expenses from './components/Expenses';

function App() {
  const expenses = [ 
  {   
    date: new Date(2023, 9, 6),
    title: 'New Book',
    price: 30.99
  }, 
  {   
    date: new Date(2023, 9, 6),
    title: 'New Jeans',
    price: 99.99
  }, 
  ] 
  return (
    <div className='App'>
        <Expenses 
          expenses = {expenses}   
        />
    </div>
  );
}

export default App;

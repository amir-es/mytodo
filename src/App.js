import './App.css'
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodosProvider from './components/todosProvider';

function App() {

  return (
    <TodosProvider>
      <Header />
      <AddTodo />
      <TodoList />
    </TodosProvider>
    
  );
}

export default App;

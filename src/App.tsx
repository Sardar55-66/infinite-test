import './App.css'
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';

const App = () => (
  <div className="container">
    <UserList />
    <UserDetails />
  </div>
);

export default App

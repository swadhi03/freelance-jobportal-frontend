import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserSignUp from './components/UserSignUp';
import UserSignIn from './components/UserSignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateProfile from './components/CreateProfile';
import ViewPost from './components/ViewPost';
import Dashboard from './components/Dashboard';
import CreateAccount from './components/CreateAccount';
import ViewAccount from './components/ViewAccount';
import ViewAllPost from './components/ViewAllPost';
import DummyPage from './components/DummyPage';
import PostSearch from './components/PostSearch';
import AdminNavBar from './components/AdminNavBar';
import ViewUser from './components/ViewUser';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<UserSignUp/>}/>
          <Route path='/signin' element={<UserSignIn/>}/>
          <Route path='/create' element={<CreateProfile/>}/>
          <Route path='/ViewMine' element={<ViewPost/>}/>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/updateaccount' element={<CreateAccount/>}/>
          <Route path='/ViewAccount' element={<ViewAccount/>}/>
          <Route path='/viewallpost' element={<ViewAllPost/>}/>
          <Route path='/dummy' element={<DummyPage/>}/>
          <Route path='/search' element={<PostSearch/>}/>
          <Route path='/adminnavbar' element={<AdminNavBar/>}/>
          <Route path='/viewuser' element={<ViewUser/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

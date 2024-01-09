import './App.css';
import './LessCSS-main/css/lesscss-min.css'
import './LessCSS-main/js/lesscss.js'
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom'
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import Home from './pages/Home';
import GetAll from './pages/GetAll';
import PostAuthor from './pages/PostAuthor'
import PostBook from './pages/PostBook'

const queryClient = new QueryClient()

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar bg-light-grey m-3">
        <div className="container navbar-content">
            <Link to='/' className="navbar-brand fw-light fs-2">Fetch</Link>
            <ul className="navbar-nav">
                <li>
                  <Link to='/getAll'>GET ALL</Link>
                </li>
                <li><Link to='/postAuthor'>POST AUTHOR</Link></li>
                <li><Link to='/postBook'>POST BOOK</Link></li>
            </ul>
        </div>
      </nav>
      
      <Routes>
        <Route path='/' element={<QueryClientProvider client={queryClient}><Home /></QueryClientProvider>}></Route>
        <Route path='/getAll' element={<QueryClientProvider client={queryClient}><GetAll/></QueryClientProvider>}></Route>
        <Route path='/postAuthor' element={<QueryClientProvider client={queryClient}><PostAuthor /></QueryClientProvider>}></Route>
        <Route path='/postBook' element={<QueryClientProvider client={queryClient}><PostBook /></QueryClientProvider>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

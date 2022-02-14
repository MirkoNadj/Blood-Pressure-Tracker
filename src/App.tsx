import React, {FC, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import GlobalStyle from './components/styles/GlobalStyle';
import Home from './components/Home';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import CreateNewUser from './components/CreateNewUser';
import UserInputPage from './components/UserInputPage';
import AdvancedUserPage from './components/AdvancedUserPage';

const queryClient = new QueryClient();

interface CurrentUserState {
  setCurrentUserId: (value: string) => void
  currentUserId: (string | null)
}

let cid = window.localStorage.getItem("userId")

const App: FC = () => {
  const [currentUserId, setCurrentUserId] = useState<CurrentUserState["currentUserId"]>(cid);
    
  console.log('tip', cid)

  return (<>
  {/* {<h1>{currentUserId}</h1>} */}
  <QueryClientProvider client={queryClient}>
    <Router>      
      <GlobalStyle />
      <Header setCurrentUserId={setCurrentUserId}/>
      <Routes>
        <Route path="/" element={<Home setCurrentUserId={setCurrentUserId}/>}/>
        <Route path="/create" element={<CreateNewUser setCurrentUserId={setCurrentUserId} />} />
        <Route path="/input/:userID" element={<UserInputPage currentUserId={currentUserId}/>} />
        <Route path="/advanced/:userID" element={<AdvancedUserPage currentUserId={currentUserId}/>} />
      </Routes>
      <Footer />
        
    </Router>
    </QueryClientProvider></>
  );
}

export default App;

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Setting from "./pages/settings/Setting";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import SinglePost from "./singlepost/SinglePost";
import TopBar from "./topbar/TopBar";
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'


function App() {

  const user=true;

  return (
    <div className="App">
    <Router>
      <TopBar />
      <Home/>
      <Routes>
        
        {/* Use element prop with conditional rendering */}
        {/* <Route path="/" element={user ? <Home /> : <Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Setting /> : <Register />} /> */}
        {/* SinglePost route with URL parameter */}
        <Route path="/post/:post" element={<SinglePost />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;

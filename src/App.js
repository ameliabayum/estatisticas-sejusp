import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TopMenu from "./components/TopMenu";
import ResponsiveAppBar from "./components/TopBar";
function App() {
  return (
    <BrowserRouter>
      <Routes>   
        <Route path="/" element={<ResponsiveAppBar />}>
          <Route path="/" element={<TopMenu />}/>     
        </Route>
                
      </Routes>
    </BrowserRouter>
  );
}

export default App;

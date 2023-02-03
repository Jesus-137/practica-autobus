import {BrowserRouter, Routes,Route} from "react-router-dom";
import Login from "../pages/login";
import Sign_up from "../pages/sign_up";
import AltaBus from "../pages/AltaBus";
import NotFound from "../pages/NotFound";

function App() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/crear" element={<Sign_up/>}/>
            <Route path="/bus" element={<AltaBus/>}/>
            <Route path="/*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
    );
}

export default App;
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MainPage from "./pages/main-page/mainPage.tsx";
import AboutPage from "./pages/about-page/aboutPage.tsx";


const App = () => {

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </Router>
        </>
    )
}

export default App

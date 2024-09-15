import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { paths } from "./routes/routes.ts"
import MainPage from "./pages/main-page/mainPage.tsx";
import AboutPage from "./pages/about-page/aboutPage.tsx";


const App = () => {

    return (
        <>
            <Router>
                <Routes>
                    <Route path={paths.MAIN} element={<MainPage />} />
                    <Route path={paths.ABOUT} element={<AboutPage />} />
                </Routes>
            </Router>
        </>
    )
}

export default App

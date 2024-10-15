import Footer from "./components/Footer";
import Header from "./components/Header";
import Project from "./pages/Project";
import Profile from "./pages/Profile"; // Corrected import for Profile
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Project />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Listarticles from "./components/admin/articles/Listarticles.jsx";
import Listscategorie from "./components/admin/scategories/Listscategories.jsx";
import Listcategories from "./components/admin/categories/Listcategories.jsx";
import Addarticle from "./components/admin/articles/Addarticle.jsx";
import Editarticle from "./components/admin/articles/Editarticle.jsx";
import Addcategorie from "./components/admin/categories/Addcategorie.jsx";
import Editcategorie from "./components/admin/categories/Editcategorie.jsx";
import Editscategorie from "./components/admin/scategories/Editscategorie.jsx";
import Addscategorie from "./components/admin/scategories/Addscategorie.jsx";
import Menu from "./components/admin/Menu.jsx";
import Home from "./components/admin/Home.jsx";
import Listarticlesbypage from "./components/admin/articles/Listarticlesbypage.jsx";

function App() {
    return (
        <Router>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/articles" element={<Listarticles />} />
                <Route path="/articles/add" element={<Addarticle />} />
                <Route path="/articles/edit/:id" element={<Editarticle />} />
                <Route path="/articles/page/:pageNumber" element={<Listarticlesbypage />} />

                <Route path="/scategories" element={<Listscategorie />} />
                <Route path="/scategories/add" element={<Addscategorie />} />
                <Route path="/scategories/edit/:id" element={<Editscategorie />} />

                <Route path="/categories" element={<Listcategories />} />
                <Route path="/categories/add" element={<Addcategorie />} />
                <Route path="/categories/edit/:id" element={<Editcategorie />} />
            </Routes>
        </Router>
    );
}

export default App;

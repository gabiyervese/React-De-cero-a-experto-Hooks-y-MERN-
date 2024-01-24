import { Navbar } from "../../ui/components";
import { Navigate, Route, Routes } from "react-router-dom";
import { DCPage, HeroPage, MarvelPage, SearchPage } from "../pages";
function HerosRoutes() {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DCPage />} />

          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:heroId" element={<HeroPage />} />

          {/* Este es el comodin para navegar/redireccionar a una pag predeterminada como si estuviera por default */}
          <Route path="/" element={<Navigate to="marvel" />} />
        </Routes>
      </div>
    </>
  );
}

export default HerosRoutes;

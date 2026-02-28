import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./presentation/public-site/pages/LandingPage";
import StatutePage from "./presentation/public-site/pages/StatutePage";
import DirectorsPage from "./presentation/public-site/pages/DirectorsPage";
import ContactPage from "./presentation/public-site/pages/ContactPage";
import LibraryPage from "./presentation/public-site/pages/LibraryPage";
import FraternalAssistancePage from "./presentation/public-site/pages/FraternalAssistance";
import StudyPage from "./presentation/public-site/pages/StudyPage";
import SurgeryPage from "./presentation/public-site/pages/SurgeryPage";
import WithoutObsessionPage from "./presentation/public-site/pages/WithoutObsessionPage";
import EvangelizationPage from "./presentation/public-site/pages/EvangelizationPage";
import IrradiationPage from "./presentation/public-site/pages/IrradiationPage";
import SchedulePage from "./presentation/public-site/pages/SchedulePage";
import ScalePage from "./presentation/public-site/pages/ScalePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/estatuto" element={<StatutePage />} />
        <Route path="/diretoria" element={<DirectorsPage />} />
        <Route
          path="/atendimento-fraterno"
          element={<FraternalAssistancePage />}
        />
        <Route path="/biblioteca" element={<LibraryPage />} />
        <Route path="/estudo" element={<StudyPage />} />
        <Route path="/cirurgias" element={<SurgeryPage />} />
        <Route path="/desobsessao" element={<WithoutObsessionPage />} />
        <Route path="/evangelizacao" element={<EvangelizationPage />} />
        <Route path="/irradiacao" element={<IrradiationPage />} />
        <Route path="/horarios" element={<SchedulePage />} />
        <Route path="/escala-exposicoes" element={<ScalePage />} />
        <Route path="/contato" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

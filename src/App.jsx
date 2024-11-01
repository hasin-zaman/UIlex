import { SidebarProvider } from "./components/ui/sidebar";
import { AppSidebar } from "./custom-components/AppSidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoadingButtonPage } from "./reusable-components/buttons/loading-button/LoadingButtonPage";
import { WriteNamePage } from "./reusable-components/Text/writeName-text/WriteNamePage";
import { Main } from "./custom-components/Main";


function App() {
  return (
    <SidebarProvider>
      <Router>
        <AppSidebar />
        <Routes>
          <Route path="/" element={<Main content={<LoadingButtonPage />} />} />
          <Route path="/buttons/loading-button" element={<Main content={<LoadingButtonPage />} />} />
          <Route path="/Text/writeName-text" element={<Main content={<WriteNamePage />} />} />
        </Routes>
      </Router>
    </SidebarProvider>
  );
}

export default App;
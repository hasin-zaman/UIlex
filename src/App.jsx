import { SidebarProvider } from "./components/ui/sidebar";
import { AppSidebar } from "./custom-components/AppSidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoadingButtonPage } from "./reusable-components/buttons/loading-button/LoadingButtonPage";
import { AnimatedInputPage } from "./reusable-components/input-fields/animated-input/AnimatedInputPage";
import { Main } from "./custom-components/Main";


function App() {
  return (
    <SidebarProvider>
      <Router>
        <AppSidebar />
        <Routes>
          <Route path="/" element={<Main content={<LoadingButtonPage />} />} />
          <Route path="/buttons/loading-button" element={<Main content={<LoadingButtonPage />} />} />
          <Route path="/input-fields/animated-input" element={<Main content={<AnimatedInputPage />} />} />
        </Routes>
      </Router>
    </SidebarProvider>
  );
}

export default App;
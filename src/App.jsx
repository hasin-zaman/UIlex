import { SidebarProvider } from "./components/ui/sidebar";
import { AppSidebar } from "./custom-components/AppSidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatedInputPage } from "./reusable-components/input-fields/animated-input/AnimatedInputPage";
import { Main } from "./custom-components/Main";
import { HomePage } from "./custom-components/HomePage";
import { SuccessNotificationPage } from "./reusable-components/notifications/success-notification/SuccessNotificationPage";
import { LoadingButtonPage } from "./reusable-components/buttons/loading-button/LoadingButtonPage";
import { GradientButtonPage } from "./reusable-components/buttons/gradient-button/GradientButtonPage";
import { QuadLayerFillHoverButtonPage } from "@/reusable-components/buttons/quad-layer-fill-hover-button/QuadLayerFillHoverButtonPage.jsx";
import { RatingInputComponentPage } from "./reusable-components/rating/rating-input/RatingInputComponentPage";
import { RatingScoreComponentPage } from "./reusable-components/rating/rating-score/RatingScoreComponentPage";
import { ProductCardPage } from "./reusable-components/cards/product-card/ProductCardPage";
import { ConfirmDialogPage } from "./reusable-components/dialogs/confirmation/ConfirmDialogPage";
import { AvatarPage } from "@/reusable-components/avatars/avatar/AvatarPage.jsx";
import { AnimatedNavbarPage } from "@/reusable-components/navbars/animated-navbar/AnimatedNavbarPage.jsx";

function App() {
  return (
    <SidebarProvider>
      <Router>
        <AppSidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/buttons/loading-button" element={<Main content={<LoadingButtonPage />} />} />
          <Route path="/input-fields/animated-input" element={<Main content={<AnimatedInputPage />} />} />
          <Route path="/buttons/gradient-button" element={<Main content={<GradientButtonPage />} />} />
          <Route path="/cards/product-card" element={<Main content={<ProductCardPage />} />} />
          <Route path="/buttons/quad-layer-fill-hover-button" element={<Main content={<QuadLayerFillHoverButtonPage />} />} />
          <Route path="/notifications/success" element={<Main content={<SuccessNotificationPage />} />} />
          <Route path="/ratings/rating-input" element={<Main content={<RatingInputComponentPage />} />} />
          <Route path="/ratings/rating-score" element={<Main content={<RatingScoreComponentPage />} />} />
          <Route path="/dialogs/confirmation-dialog" element={<Main content={<ConfirmDialogPage />} />} />
          <Route path="/avatars/avatar" element={<Main content={<AvatarPage />} />} />
          <Route path="/navbar/animated-navbar" element={<Main content={<AnimatedNavbarPage />} />} />
        </Routes>
      </Router>
    </SidebarProvider>
  );
}

export default App;

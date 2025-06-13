import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarUser from "./components/NavbarUser";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import PredictPage from "./pages/PredictPage";
import NotStunting from "./components/PredictNotStunting";
import Stunting from "./components/PredictStunting";
import Footer from "./components/Footer";
import ArticlePage from "./pages/ArticlePage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import { RequireAuth, UnauthenticatedOnly } from "./components/ProtectedRoute";
import { useAuth } from "./utils/authContext";
import PredictionHistory from "./pages/PredictionHistory";
import ProfilUser from "./pages/ProfilUser";
import EditProfilUser from "./pages/EditProfilUser";
import PrivacyPolicy from "./pages/kebijakan-privasi";
import ContactUs from "./pages/kontak-kami";
import DaftarBidan from "./pages/daftar-bidan";
import DetailBidan from "./pages/DetailBidan";
import SyaratKetentuan from "./pages/syarat-ketentuan";
import Faq from "./pages/Faq";

// Layout untuk halaman utama (dengan navbar & footer)
function MainLayout({ children }) {
  const { isLoggedIn } = useAuth();
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {isLoggedIn ? <NavbarUser /> : <Navbar />}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default function AppLogIn() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Halaman utama pakai MainLayout */}
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />

        {/* Require Auth */}
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <MainLayout>
                <ProfilUser />
              </MainLayout>
            </RequireAuth>
          }
        />
        <Route
          path="/edit-profil"
          element={
            <RequireAuth>
              <MainLayout>
                <EditProfilUser />
              </MainLayout>
            </RequireAuth>
          }
        />
        <Route
          path="/article"
          element={
            <RequireAuth>
              <MainLayout>
              <ArticlePage />
              </MainLayout>
            </RequireAuth>
          }
        />
        <Route
          path="/predict"
          element={
            <RequireAuth>
              <MainLayout>
                <PredictPage />
              </MainLayout>
            </RequireAuth>
          }
        />
        <Route
          path="/predict-history"
          element={
            <RequireAuth>
              <MainLayout>
                <PredictionHistory />
              </MainLayout>
            </RequireAuth>
          }
        />

        {/* Unrequire Auth */}
        <Route
          path="/kontak-kami"
          element={
            <UnauthenticatedOnly>
              <MainLayout>
                < ContactUs/>
              </MainLayout>
            </UnauthenticatedOnly>
          }
        />
        <Route
          path="/syarat-ketentuan"
          element={
            <UnauthenticatedOnly>
              <MainLayout>
                < SyaratKetentuan/>
              </MainLayout>
            </UnauthenticatedOnly>
          }
        />
        <Route
          path="/result/not-stunting"
          element={
            <UnauthenticatedOnly>
              <MainLayout>
                <NotStunting />
              </MainLayout>
            </UnauthenticatedOnly>
          }
        />
        <Route
          path="/result/stunting"
          element={
            <UnauthenticatedOnly>
              <MainLayout>
                <Stunting />
              </MainLayout>
            </UnauthenticatedOnly>
          }
        />
        <Route
          path="/kebijakan-privasi"
          element={
            <UnauthenticatedOnly>
              <MainLayout>
                <PrivacyPolicy />
              </MainLayout>
            </UnauthenticatedOnly>
          }
        />
        <Route
          path="/faq"
          element={
            <UnauthenticatedOnly>
              <MainLayout>
                <Faq />
              </MainLayout>
            </UnauthenticatedOnly>
          }
        />
        <Route
          path="/daftar-bidan"
          element={
            <UnauthenticatedOnly>
              <MainLayout>
                <DaftarBidan />
              </MainLayout>
            </UnauthenticatedOnly>
          }
        />
        <Route
          path="/bidan/:id"
          element={
            <UnauthenticatedOnly>
              <MainLayout>
                <DetailBidan />
              </MainLayout>
            </UnauthenticatedOnly>
          }
        />

        {/* Login & Register tanpa navbar/footer */}
        <Route
          path="/login"
          element={
            <UnauthenticatedOnly>
              <LoginPage />
            </UnauthenticatedOnly>
          }
        />
        <Route
          path="/register"
          element={
            <UnauthenticatedOnly>
              <RegisterPage />
            </UnauthenticatedOnly>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
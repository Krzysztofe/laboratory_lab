import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/navConponents/navSignOut/nav/Header";
import IndexHome from "./pages/home/_indexHome/IndexHome";
import LoadingPage from "./pages/loadingPage/LoadingPage";
import Footer from "./pages/home/footer/Footer";
import NavComponents from "./components/navConponents/NavComponents";
const Register = lazy(() => import("./pages/register/Register"));
const Login = lazy(() => import("./pages/login/Login"));
const IndexUserPanel = lazy(() => import("./pages/userPanel/ReactionsForm"));

function App() {
  return (
    <>
      <BrowserRouter basename="/Laboratory_Lab">
        <Suspense fallback={<LoadingPage />}>
          <NavComponents />
          <Routes>
            <Route path="/" element={<IndexHome />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user" element={<IndexUserPanel />} />
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;

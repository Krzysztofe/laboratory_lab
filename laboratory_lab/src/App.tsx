import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexHome from "./pages/home/_indexHome/IndexHome";
import LoadingHomePage from "./pages/loadingHomePage/LoadingHomePage";
const Register = lazy(() => import("./pages/register/Register"));
const Login = lazy(() => import("./pages/login/Login"));
const IndexUserPanel = lazy(() => import("./pages/userPanel/IndexUserPanel"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<LoadingHomePage />}>
          <Routes>
            <Route path="/" element={<IndexHome />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user" element={<IndexUserPanel />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;

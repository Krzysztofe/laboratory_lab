import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavComponents from "./components/navConponents/NavComponents";
import IndexHome from "./pages/home/_indexHome/IndexHome";
import Footer from "./pages/home/footer/Footer";
import LoadingPage from "./pages/loadingPage/LoadingPage";

const IndexLogin = lazy(() => import("./pages/login/_indexLogin/IndexLogin"));
const IndexFormReaction = lazy(
  () => import("./pages/reactionForm/_indexFormReaction/IndexFormReaction")
);
const IndexTable = lazy(
  () => import("./pages/tableReactions/_indexTableReactions/IndexTable")
);

function App() {
  return (
    <BrowserRouter basename="/Laboratory_Lab">
      <Suspense fallback={<LoadingPage />}>
        <NavComponents />
        <Routes>
          <Route path="/" element={<IndexHome />} />
          <Route path="/login" element={<IndexLogin />} />
          <Route path="/reaction-form" element={<IndexFormReaction />} />
          <Route path="/reactions-list" element={<IndexTable />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

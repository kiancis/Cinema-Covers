import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../Pages/Home"));
const Admin = lazy(() => import("../Pages/Admin"));
const Login = lazy(() => import("../Pages/Login"));
const Register = lazy(() => import("../Pages/Register"));
const TrailerInfo = lazy(() => import("../Pages/TrailerInfo"));
const TrailerReproductor = lazy(() => import("../Pages/TrailerReproductor"));
const NotFound = lazy(() => import("../Pages/NotFound"));
const About = lazy(() => import("../Pages/About"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/trailerInfo" element={<TrailerInfo />} />
          <Route path="/trailerReproductor" element={<TrailerReproductor />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

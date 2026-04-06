// import { Routes, Route } from "react-router-dom";

// import LandingPage from "./pages/LandingPage.jsx";
// import SignUp from "./pages/SignUp.jsx";
// import Login from "./pages/Login.jsx";
// import Dashboard from "./pages/Dashboard.jsx";
// import InterviewPrep from "./pages/InterviewPrep.jsx";

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<LandingPage />} />
//       <Route path="/signup" element={<SignUp />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/dashboard" element={<Dashboard />} />
//       <Route path="/interview/:id" element={<InterviewPrep />} />
//     </Routes>
//   );
// };

// export default App;

// import { Routes, Route, useLocation } from "react-router-dom";

// import Navbar from "./components/Navbar";

// import LandingPage from "./pages/LandingPage.jsx";
// import SignUp from "./pages/SignUp.jsx";
// import Login from "./pages/Login.jsx";
// import Dashboard from "./pages/Dashboard.jsx";
// import InterviewPrep from "./pages/InterviewPrep.jsx";
// import ProtectedRoute from "./components/ProtectedRoute";

// const App = () => {
//   const location = useLocation();

//   return (
//     <>
//       {/* ❌ Login & Signup pe Navbar hide */}
//       {location.pathname !== "/login" && location.pathname !== "/signup" && (
//         <Navbar />
//       )}

//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/interview/:id" element={<InterviewPrep />} />
//       </Routes>
//     </>
//   );
// };

// export default App;

import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";

import LandingPage from "./pages/LandingPage.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import InterviewPrep from "./pages/InterviewPrep.jsx";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const location = useLocation();

  return (
    <>
      {/* ❌ Login & Signup pe Navbar hide */}
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <Navbar />
      )}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        {/* ✅ CHANGE KIYA (ProtectedRoute ADD KIYA) */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* ✅ CHANGE KIYA (ProtectedRoute ADD KIYA) */}
        <Route
          path="/interview/:id"
          element={
            <ProtectedRoute>
              <InterviewPrep />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;

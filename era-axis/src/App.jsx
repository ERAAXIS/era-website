import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Pages
import LandingPage from "./pages/landingPage/LandingPage";
import SoftwareSolutions from "./pages/softwareSolutions/Softwares";
import Error404 from "./pages/errorPage/Error404";
import ManufacturingPage from "./pages/manufacturingPage/manufacturingPage";
import EducationPage from "./pages/era-axis-edicationPage/educationPage";

// Layout
import RouteLayout from "./layouts/RouteLayout";

// Create routes
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouteLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="/software-solutions" element={<SoftwareSolutions />} />
      <Route path="*" element={<Error404 />} />
      <Route path="/manufacturing" element={<ManufacturingPage />} />
      <Route path="/education" element={<EducationPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import Team from './pages/Team/Team';
import Dashboard from "./pages/Dashboard/Dashboard";
import Contacts from './pages/Contacts/Contacts';
import BarChart from './pages/barChart/barChart';
import PieChart from './pages/PieChart/PieChart';
import Faq from './pages/Faq/Faq';
import Line from './pages/Line/Line';
import Geography from "./pages/Geography/Geography";
import Calendar from './pages/Calndar/Calendar';
import Form from './pages/Form/Form';
import Invoices from './pages/Invoices/Invoices';
import Notfound from "./pages/Notfound";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} /> 


    <Route path="team" element={<Team />} /> 
    <Route path="contacts" element={<Contacts />} /> 
    <Route path="bar" element={<BarChart />} /> 
    <Route path="pie" element={<PieChart />} /> 
    <Route path="faq" element={<Faq />} /> 
    <Route path="line" element={<Line />} /> 
    <Route path="geography" element={<Geography />} /> 
    <Route path="calender" element={<Calendar />} /> 
    <Route path="form" element={<Form />} /> 
    <Route path="invoices" element={<Invoices />} /> 
    <Route path="*" element={<Notfound />} /> 

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

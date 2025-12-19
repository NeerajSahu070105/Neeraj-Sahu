import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddClient from "./pages/AddClient";
import AddProject from "./pages/AddProject";
import Contacts from "./pages/Contacts";
import Subscribers from "./pages/Subscribers";
import ViewContacts from "./pages/ViewContacts";
import ViewSubscribers from "./pages/ViewSubscribers";



export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/add-client" element={<AddClient />} />
        <Route path="/add-project" element={<AddProject />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/subscribers" element={<Subscribers />} />
        <Route path="/contacts" element={<ViewContacts />} />
         <Route path="/subscribers" element={<ViewSubscribers />} />
                   
      </Routes>
    </BrowserRouter>
  );
}

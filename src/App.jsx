import {BrowserRouter, Routes, Route } from "react-router-dom"
import Links from "./components/Links/Links";
import Preview from "./components/Preview/Preview";
import Profile from "./components/Profile/Profile";
function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Links />}> </Route>
  <Route path="/profile" element={<Profile />}> </Route>
  <Route path="/preview" element={<Preview />}> </Route>

</Routes>
</BrowserRouter> );
}

export default App;

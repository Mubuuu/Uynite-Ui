import {BrowserRouter ,Route,Routes} from "react-router-dom"
// import ChooseFriendsModal from "./components/ChooseFriendsModal";
import Event from "./pages/Event";
import Congratulations from "./pages/Congratulations";
import ChooseFriends from "./pages/ChooseFriends";
import Confirm from "./pages/Confirm";

function App() {
  return (
    <>
      <div className="App bg-bgcolor">
    <BrowserRouter>
    <Routes>
      <Route path="/page-25" element={<ChooseFriends />}></Route>
      <Route path="/page-26" element={<Confirm />}></Route>
      <Route path="/page-27" element={<Event />}></Route>
      <Route path="/page-28" element={<Congratulations />}></Route>
    </Routes>
    </BrowserRouter>
      </div>
    </>
  );
}

export default App;

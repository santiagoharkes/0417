import { GlobalStyles } from "./styles/GlobalStyles";

import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Menu from "./Components/Menu/Menu";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Navbar />
      <Banner />
      <Menu />
    </div>
  );
}

export default App;

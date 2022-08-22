import MainRoutes from "./routes";
import { GlobalStyles } from "./styles/global";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <GlobalStyles />
      <MainRoutes />
      <Toaster />
    </>
  );
}

export default App;

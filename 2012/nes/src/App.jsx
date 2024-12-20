import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./components/routes/Routes"

function App() {
 
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App
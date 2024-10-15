import {BrowserRouter} from "react-router-dom";

import MainRouetes from "./routes/MainRouetes";
function App() {
  return (
    <BrowserRouter>
      {/* header */}

      {/* contents */}
      <article>
        <MainRouetes />
      </article>
      {/* footer */}
    </BrowserRouter>
  );
}

export default App;

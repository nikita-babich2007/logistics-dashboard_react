import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { QueryProvider } from "./providers/QueryProvider";

function App() {

  return (
    <>
      <QueryProvider>
        <RouterProvider router={router} />
      </QueryProvider>
    </>
  )
}

export default App
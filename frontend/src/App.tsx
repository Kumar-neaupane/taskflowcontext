import { BrowserRouter } from "react-router";

import MyRoutes from "./Routes";
import { UserProvider } from "./context/UserSlice";
import { ProjectProvider } from "./context/ProjectSlice";
import { TaskProvider } from "./context/TaskSlice";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <ProjectProvider>
            <TaskProvider>
              <MyRoutes />
            </TaskProvider>
          </ProjectProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

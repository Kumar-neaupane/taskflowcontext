import { Routes, Route, Navigate } from "react-router";
import { Dashboard, Login, Register, Projects, Analytics, KanbanBoard, Setting, Tasks, TaskDetails } from "./pages/index";
import { Mainlayout, Dashboardlayout } from "./layout/index";
import ProjectDetails from "./pages/ProjectDetails";
import ProjectDetailslayout from "./layout/ProjectDetailslayout";
import Overviewcard from "./components/projectdetails/Overviewcard";
import Taskcard from "./components/projectdetails/Taskcard";
import Teammember from "./components/projectdetails/Teammember";
import { useAuth } from "./context/UserSlice";
import SettingLayout from "./layout/SettingLayout";
import Account from "./components/settingp/Account";
import Notification from "./components/settingp/Notification";
import Preferences from "./components/settingp/Preferences";

const MyRoutes = () => {
  const authContext = useAuth();
  const loginUser = authContext?.loginUser;
  return (
    <Routes>
      <Route path="/" element={<Mainlayout />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="/dashboard" element={loginUser?.email ? <Dashboardlayout /> : <Navigate to="/" replace />}>
        <Route index element={<Dashboard />} />

        <Route path="projects" element={<Projects />} />
        <Route path="projects/:id" element={<ProjectDetailslayout />} >
          <Route index element={<Overviewcard />} />
          <Route path="overview" element={<Overviewcard />} />
          <Route path="tasks" element={<Taskcard />} />
          <Route path="team" element={<Teammember />} />
          <Route path="activity" element={<ProjectDetails />} />
        </Route>
        <Route path="analytics" element={<Analytics />} />
        <Route path="kabanboard" element={<KanbanBoard />} />
        <Route path="settings" element={<SettingLayout />} >
          <Route index element={<Setting />} />
          <Route path="account" element={<Account />} />
          <Route path="notification" element={<Notification />} />
          <Route path="preferences" element={<Preferences />} />
        </Route>
        <Route path="tasks" element={<Tasks />} />
        <Route path="tasks/:id" element={<TaskDetails />} />
      </Route>
    </Routes>
  );
};
export default MyRoutes;

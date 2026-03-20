import { dashboardtopcarddata } from "../data/dashboardtopdata";
import DashboardCard from "../components/dashboard/DashboardCard";
import { motion } from "framer-motion";
import LineChart from "../components/dashboard/Linechart";
import BarChart from "../components/dashboard/Barchart";
import ActiveProjectsCard from "../components/dashboard/ActiveProjectsCard";
import { notifications } from "../data/recentactivity";

const Dashboard = () => {
  return (
    <div className="p-4 md:p-6 lg:p-10 w-full overflow-x-hidden">
      <div className="topb flex flex-col gap-1 md:gap-2 mb-6">
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Dashboard</h1>
        <p className="text-sm md:text-base text-gray-600">Welcome back! Here's what's happening with your projects.</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full my-6"
      >
        {dashboardtopcarddata.map((item, index) => (
          <DashboardCard
            firstline={item.firstline}
            secondline={item.secondline}
            thirdline={item.thirdline}
            icons={item.icons}
            iconscolor={item.iconscolor}
            textcolor={item.textcolor}
            key={index}
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col lg:flex-row gap-6 md:gap-8 mt-8"
      >
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
          className="linechart w-full lg:w-1/2 bg-white shadow-lg p-4 md:p-6 rounded-xl flex flex-col gap-4 border border-gray-100"
        >
          <h1 className="text-lg md:text-xl font-bold text-gray-800">Task Completion Rate</h1>
          <div className="h-[300px] w-full">
            <LineChart />
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
          className="linechart w-full lg:w-1/2 bg-white shadow-lg p-4 md:p-6 rounded-xl flex flex-col gap-4 border border-gray-100"
        >
          <h1 className="text-lg md:text-xl font-bold text-gray-800">Weekly Productivity</h1>
          <div className="h-[300px] w-full">
            <BarChart />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-8 flex flex-col lg:flex-row gap-6 md:gap-8"
      >
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
          className="card-1 w-full lg:w-1/2 bg-white shadow-lg rounded-xl p-4 md:p-6 border border-gray-100"
        >
          <div className="flex flex-row justify-between items-center mb-6">
            <h1 className="text-lg font-bold text-gray-800">Active Projects</h1>
            <p className="text-indigo-600 text-sm font-bold cursor-pointer hover:underline">
              View All
            </p>
          </div>
          <ActiveProjectsCard />
        </motion.div>

        <div className="right-card w-full lg:w-1/2 bg-white shadow-lg rounded-xl p-4 md:p-6 border border-gray-100">
          <h1 className="text-lg font-bold mb-6 text-gray-800">Recent Activity</h1>
          <div className="flex flex-col gap-6">
            {notifications.map((items) => (
              <div
                className="flex flex-col gap-3 group"
                key={items.id}
              >
                <div className="flex flex-row items-start gap-3">
                  <img
                    className="h-10 w-10 object-cover rounded-full ring-2 ring-gray-50"
                    src={items.userAvatar}
                  />
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-x-2">
                      <h1 className="text-indigo-900 font-bold text-sm">
                        {items.userName}
                      </h1>
                      <p className="text-gray-600 text-sm">{items.message}</p>
                    </div>
                    <div className="flex flex-row gap-3 mt-1">
                      <p className="text-gray-400 text-xs">
                        {items.date}
                      </p>
                      <p className="text-gray-400 text-xs">
                        {items.time}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;

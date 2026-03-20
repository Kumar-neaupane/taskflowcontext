import DashboardCard from "../components/dashboard/DashboardCard"
import Dropdown from "../components/Dropdown"
import { dashboardtopcarddata } from "../data/dashboardtopdata"
import { motion } from "framer-motion";
import BarChart from "../components/dashboard/Barchart";
import LineChart from "../components/dashboard/Linechart";

const Analytics = () => {
  return (
    <div className="app-page">
      <div className="flex flex-col gap-4 xl:flex-row xl:justify-between xl:items-center w-full">
        <div className="w-full flex flex-col gap-1">
          <h1 className="text-xl font-bold">Analytics & Reports</h1>
          <p>Track your team's performance and project progress</p>
        </div>
        <div className="flex w-full flex-col gap-2 sm:flex-row xl:w-auto">
          <Dropdown className="w-full xl:min-w-55">
            <option>All Projects</option>
            <option>Ecommerce Platform Redesign</option>
            <option>Mobile App Development</option>
            <option>Api Integration</option>
            <option>Customer Dashboard</option>
            <option>Database Migration</option>
          </Dropdown>
          <Dropdown className="w-full sm:w-auto xl:min-w-40">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
            <option>Last Year</option>
          </Dropdown>

        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 w-full my-4"
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
        className="flex flex-col xl:flex-row gap-6 xl:gap-8 mt-8"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="linechart w-full xl:w-1/2 bg-white shadow-lg p-4 md:p-5 rounded-xl flex flex-col gap-4 border border-gray-100"
        >
          <h1 className="text-xl font-bold ">Task Completion Rate</h1>
          <LineChart />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="linechart w-full xl:w-1/2 bg-white shadow-lg p-4 md:p-5 rounded-xl flex flex-col gap-4 border border-gray-100"
        >
          <h1 className="text-xl font-bold ">Weekly Productivity</h1>
          <BarChart />
        </motion.div>
      </motion.div>
    </div>
  )
}
export default Analytics

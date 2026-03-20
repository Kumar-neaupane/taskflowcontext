import { motion } from "framer-motion";
const DashboardCard = ({
  firstline,
  secondline,
  thirdline,
  icons,
  iconscolor,
  textcolor,
}: any) => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="shadow-md border border-gray-100 rounded-xl bg-white overflow-hidden"
    >
      <div className="flex justify-between p-5">
        <div className="flex flex-col gap-1">
          <h1 className="text-lg md:text-xl font-bold text-gray-800">{firstline}</h1>
          <h2 className="text-xl md:text-2xl font-extrabold text-indigo-900">{secondline}</h2>
          <h3 className={`text-xs md:text-sm font-medium ${textcolor}`}>{thirdline}</h3>
        </div>
        <div className={`p-3 rounded-lg bg-gray-50 flex items-center justify-center h-fit ${iconscolor}`}>
          {icons}
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardCard;

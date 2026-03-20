import taskStats from "../../data/taskStats";

const Overviewcard = () => {
  return (
    <div className="w-full grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4">
      {taskStats.map((stat) => (
        <div
          key={stat.id}
          className={`${stat.bgColor} ${stat.borderColor} border rounded-lg p-4 shadow-md`}
        >
          <h2 className={`${stat.textColor} text-lg font-semibold`}>
            {stat.title}
          </h2>
          <p className={`${stat.valueColor} text-2xl font-bold`}>
            {stat.value}
          </p>
          <p className={`${stat.textColor} text-sm`}>{stat.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default Overviewcard;

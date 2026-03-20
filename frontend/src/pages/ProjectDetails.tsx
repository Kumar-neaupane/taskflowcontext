import { notifications } from "../data/recentactivity";

const ProjectDetails = () => {
  return (
    <div className="w-full">
      {/* <Overviewcard /> */}
      {/* taskcard */}
      {/* <div className="w-full">
        <div className="flex justify-between items-center mb-4 w-full items-center">
          <h1 className="text-xl font-bold">Project Tasks</h1>
          <Button name="+ Add Task" className="px-4 py-2" />
        </div>
        <Taskcard />
      </div> */}

      {/* Team member */}
      {/* <div className="teammember border border-gray-300 rounded-lg p-4 bg-white">
        <div className="flex  flex-row justify-between items-center">
          <h1 className="text-xl font-bold">Team Members</h1>
          <Button name="+ Add Member" className="px-4 py-2 mt-2" />
        </div>
       <div>
        <Teammember />
       </div>
      </div> */}
      <div className="right-card  w-full bg-white shadow-lg rounded-lg p-4 ">
        <h1 className=" font-bold mb-4">Recent Activity</h1>
        <div className="flex flex-col gap-2">
          {notifications.map((items) => (
            <div
              className="flex flex-col gap-2 justify-baseline  "
              key={items.id}
            >
              <div className="flex flex-row items-center gap-2">
                <img
                  className="h-10 w-10 object-cover rounded-full"
                  src={items.userAvatar}
                />
                <h1 className="text-[var(--heading)] font-bold">
                  {items.userName}
                </h1>
                <p>{items.message}</p>
              </div>
              <div className="flex flex-row ">
                <p className="text-[var(--paragraph-color)] text-sm">
                  {items.date}
                </p>
                <p className="text-[var(--paragraph-color)] text-sm">
                  {items.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

const notifications = [
  {
    id: 1,
    type: "new",
    color: "bg-blue-500",
    title: "New task assigned",
    message: 'You have been assigned to "Implement push notifications"',
    time: "1/19/2025, 9:00:00 AM",
  },
  {
    id: 2,
    type: "due",
    color: "bg-yellow-500",
    title: "Task due soon",
    message: "Implement user authentication is due in 2 days",
    time: "1/18/2025, 2:30:00 PM",
    highlight: true,
  },
  {
    id: 3,
    type: "completed",
    color: "bg-green-500",
    title: "Task completed",
    message: "Sarah Chen completed Design homepage mockups",
    time: "1/15/2025, 10:30:00 AM",
  },
  {
    id: 4,
    type: "comment",
    color: "bg-blue-500",
    title: "New comment",
    message: "You have a new comment on your task",
    time: "1/14/2025, 8:15:00 AM",
  },
];

const Notificationcard = () => {
  return (
    <div className="w-[calc(100vw-2rem)] sm:w-80 md:w-96 max-h-[500px] border border-gray-100 rounded-xl flex flex-col overflow-hidden bg-white shadow-2xl">
      <h1 className="p-4 font-bold text-gray-900 border-b sticky top-0 bg-white z-50">
        Notifications
      </h1>

      <div className="flex-1 overflow-y-auto">
        {notifications.map((item) => (
          <div
            key={item.id}
            className={`flex gap-3 p-4 border-b border-gray-50 cursor-pointer transition-colors hover:bg-gray-50 ${item.highlight ? "bg-indigo-50/50" : ""
              }`}
          >
            <span
              className={`w-2 h-2 rounded-full mt-2 shrink-0 ${item.color}`}
            ></span>

            <div>
              <h2 className="font-bold text-sm text-gray-800">{item.title}</h2>
              <p className="text-xs md:text-sm text-gray-500 mt-0.5 leading-relaxed">{item.message}</p>
              <p className="text-[10px] text-gray-400 mt-2 font-medium">{item.time}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 text-center border-t border-gray-50 sticky bottom-0 bg-white">
        <p className="text-indigo-600 text-sm font-bold cursor-pointer hover:bg-indigo-50 py-2 rounded-lg transition-colors">
          View all notifications
        </p>
      </div>
    </div>
  );
};

export default Notificationcard;

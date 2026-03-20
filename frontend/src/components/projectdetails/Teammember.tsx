import teamMembers from "../../data/teamMembers";
const Teammember = () => {
  return (
    <div>
      {teamMembers.map((items: any) => (
        <div
          key={items.id}
          className="border bg-white shadow-sm border-gray-300 rounded-sm p-4 m-4 flex justify-between items-center"
        >
          <div className="flex flex-row gap-4 items-center">
            <img
              src={items.avatar}
              alt="member image"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <h1 className="font-bold">{items.name}</h1>
              <p>{items.role}</p>
            </div>
          </div>
          <p>{items.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Teammember;

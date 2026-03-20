import { useEffect, useState } from "react";
import { useProject } from "../context/ProjectSlice";
import Dropdown from "./Dropdown";
import { useAuth } from "../context/UserSlice";

const CreateProjectModal = ({ isOpen, onClose }: any) => {
  const [data, setData] = useState({})
  const authContext = useAuth();
  const { setMessage = () => {}, message = "" } = authContext || {};
  const { addProject } = useProject();
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    console.log(name, value)
    setData({ ...data, [name]: value })

  }
  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setData({ ...data, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  }
  useEffect(()=>{

 const timmer = setTimeout(() => {
  setMessage("")
}, 2000);
return()=>{
  clearTimeout(timmer);
}
},[message])
  if (!isOpen) return null;
  const handleSubmit = (e: any) => {
    e.preventDefault();
    addProject(data);
    setMessage("Project created successfully");



  }

  // console.log(data)
  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60  backdrop-blur z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <form onSubmit={handleSubmit}

          className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl animate-scaleIn">
          <h2 className="text-xl font-semibold mb-4">Create New Project</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Project Name
              </label>
              <input
                onChange={handleChange}

                name="title"
                type="text"
                placeholder="Enter project name"
                className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Description
              </label>
              <textarea
                onChange={handleChange}
                name="description"
                placeholder="Enter project description"
                rows={3}
                className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Status
              </label>
              <Dropdown name="status" onChange={handleChange}>
                <option>Active</option>
                <option>Completed</option>
                <option>OnHold</option>
              </Dropdown>

            </div>
            <div>
              <label className="block text-sm font-medium mb-1" >
                Progress
              </label>
              <input
                onChange={handleChange}

                name="progress"
                type="number"
                placeholder="Enter progress"
                className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Project Image</label>
              <input onChange={handleImageChange} name="image" type="file" accept="image/*" className="border w-full p-2" />
            </div>


            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Start Date
                </label>
                <input
                  onChange={handleChange}
                  name="deadline"
                  type="date"
                  className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  End Date
                </label>
                <input
                  onChange={handleChange}
                  name="enddeadline"
                  type="date"
                  className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="rounded-md border px-4 py-2 text-sm hover:bg-gray-100"
            >
              Cancel
            </button>
            <button type="submit"
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm text-white hover:bg-indigo-700">
              Create Project
            </button>
          </div>
          <div className="text-green-500 text-center mt-2">
            <p>{message}</p>
          </div>
        </form>

      </div>
    </>
  );
};

export default CreateProjectModal;

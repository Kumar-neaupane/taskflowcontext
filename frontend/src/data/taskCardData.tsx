import img1 from "../assets/images/user1.jpg";
import img2 from "../assets/images/user2.jpg";
import img3 from "../assets/images/user4.jpg";
import img4 from "../assets/images/user5.jpg";


const projectTasksData = [
  {
    id: 1,
    title: "Design homepage mockups",
    status: "done",
    borderColor:"border-green-500",
    description:
      "Create high-fidelity mockups for the new homepage design including mobile and desktop versions",
    project: "E-Commerce Platform Redesign",
    priority: "low",
    priorityColor: "bg-green-500",
    dueDate: "2025-01-15",
    assignee: {
      name: "Emily Johnson",
      avatar: img1,
    },
    comments: 1,
  },
  {
    id: 2,
    title: "Implement user authentication",
    status: "todo",
    borderColor:"border-red-500",
    description:
      "Set up JWT-based authentication system with secure token management",
    project: "E-Commerce Platform Redesign",
    priority: "High",
    priorityColor: "bg-red-500",
    dueDate: "2025-01-25",
    assignee: {
      name: "Alex Martinez",
      avatar: img2,
    },
    comments: 0,
  },
  {
    id: 3,
    title: "Setup payment gateway",
    status: "done",
    borderColor:"border-red-500",
    description:
      "Integrate Stripe payment gateway for checkout process",
    project: "E-Commerce Platform Redesign",
    priority: "High",
    priorityColor: "bg-red-500",
    dueDate: "2025-02-05",
    assignee: {
      name: "Michael Brown",
      avatar: img3,
    },
    comments: 0,
  },
  {
    id: 4,
    title: "Write API documentation",
    status: "inprogress",
    borderColor:"border-yellow-500",
    description:
      "Complete API documentation for all endpoints with examples",
    project: "E-Commerce Platform Redesign",
    priority: "Medium",
    priorityColor: "bg-yellow-500",
    dueDate: "2025-01-30",
    assignee: {
      name: "Alex Martinez",
      avatar: img3,
    },
    comments: 0,
  },
  {
    id: 5,
    title: "Optimize database queries",
    borderColor:"border-yellow-500",
    status: "todo",
    description:
      "Review and optimize slow database queries for better performance",
    project: "E-Commerce Platform Redesign",
    priority: "Medium",
    priorityColor: "bg-yellow-500",
    dueDate: "2025-02-10",
    assignee: {
      name: "Michael Brown",
      avatar: img4,
    },
    comments: 0,
  },
  {
    id: 6,
    title: "Setup CI/CD pipeline",
    status: "done",
    borderColor:"border-red-500",
    description:
      "Configure automated testing and deployment pipeline",
    project: "Mobile App Development",
    priority: "High",
    priorityColor: "bg-red-500",
    dueDate: "2025-02-15",
    assignee: {
      name: "Alex Martinez",
      avatar: img1,
    },
    comments: 0,
  },
];

export default projectTasksData;

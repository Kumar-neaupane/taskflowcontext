import img1 from "../assets/images/user1.jpg";
import img2 from "../assets/images/user2.jpg";
import img3 from "../assets/images/user4.jpg";
import img4 from "../assets/images/user5.jpg";

const projectData = [
  {
    id: 1,
    title: "E-Commerce Platform Redesign",
    status: "Active",
    statusColor: "bg-green-100 text-green-800",
    description:
      "Complete redesign of the e-commerce platform with modern UI/UX and improved performance",
    progress: 65,
    members: [img1, img2, img3],
    deadline: "2025-03-31",
    enddeadline: "2025-03-31",
  },
  {
    id: 2,
    title: "Mobile App Development",
    status: "Active",
    statusColor: "bg-green-100 text-green-800",
    description: "Native mobile application for iOS and Android platforms",
    progress: 42,
    members: [img2, img1, img4],
    deadline: "2025-05-31",
    enddeadline: "2025-03-31",
  },
  {
    id: 3,
    title: "Marketing Campaign Q1",
    status: "Active",
    statusColor: "bg-green-100 text-green-800",
    description: "First quarter marketing campaign across all channels",
    progress: 78,
    members: [img1, img2, img3, img4],
    deadline: "2025-03-31",
    enddeadline: "2025-03-31",
  },
  {
    id: 4,
    title: "API Integration",
    status: "Completed",
    statusColor: "bg-blue-100 text-blue-800",
    description: "Integration of third-party APIs for payment and analytics",
    progress: 100,
    members: [img1, img2],
    deadline: "2025-01-15",
    enddeadline: "2025-03-31",
  },
  {
    id: 5,
    title: "Customer Dashboard",
    status: "OnHold",
    statusColor: "bg-yellow-100 text-yellow-800",
    description: "New customer-facing dashboard with real-time analytics",
    progress: 25,
    members: [img1, img2],
    deadline: "2025-04-30",
    enddeadline: "2025-03-31",
  },
  {
    id: 6,
    title: "Database Migration",
    status: "Active",
    statusColor: "bg-green-100 text-green-800",
    description:
      "Migration to new database infrastructure for better scalability",
    progress: 55,
    members: [img1],
    deadline: "2025-02-28",
    enddeadline: "2025-03-31",
  },
];

export default projectData;

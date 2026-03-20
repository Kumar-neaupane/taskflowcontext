import type { NotificationItem } from "../types/interfaces";
import img1 from "../assets/images/user1.jpg";
import img2 from "../assets/images/user2.jpg";
import img3 from "../assets/images/user.jpg";
import img4 from "../assets/images/user4.jpg";
import img5 from "../assets/images/user5.jpg";

export const notifications: NotificationItem[] = [
  {
    id: 1,
    userName: "Emily Johnson",
    userAvatar: img1,
    message: "Design homepage mockups has been marked as complete",
    date: "1/15/2025",
    time: "10:30:00 AM",
  },
  {
    id: 2,
    userName: "Sarah Chen",
    userAvatar: img2,
    message:
      "Setup payment gateway has been created in E-Commerce Platform Redesign",
    date: "1/12/2025",
    time: "2:20:00 PM",
  },
  {
    id: 3,
    userName: "Sarah Chen",
    userAvatar: img3,
    message: "Great progress on the mobile designs!",
    date: "1/12/2025",
    time: "9:15:00 AM",
  },
  {
    id: 4,
    userName: "Sarah Chen",
    userAvatar: img4,
    message: "E-Commerce Platform Redesign progress updated to 65%",
    date: "1/11/2025",
    time: "4:45:00 PM",
  },
  {
    id: 5,
    userName: "Alex Martinez",
    userAvatar: img5,
    message: "Setup CI/CD pipeline has been marked as complete",
    date: "1/10/2025",
    time: "11:00:00 AM",
  },
  {
    id: 6,
    userName: "John Smith",
    userAvatar: img2,
    message: "User authentication module successfully deployed",
    date: "1/09/2025",
    time: "3:10:00 PM",
  },
  {
    id: 7,
    userName: "Priya Sharma",
    userAvatar: img3,
    message: "Database optimization task has been completed",
    date: "1/08/2025",
    time: "1:40:00 PM",
  },
];

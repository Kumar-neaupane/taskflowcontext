export interface iUser {
  email: string | null;
  password: string | null;
  name?: string | null;
  role?: string | null;
}
export interface iUserContextType {
  error: string;
  message: string;
  setError: (msg: string) => void;
  setMessage: (msg: string) => void;
  user: iUser | null;
  loginUser: iUser | null;
  login: ({ email, password }: any) => boolean;
  register: ({ email, password, name, role }: any) => void;
  logout: () => void;
}
export type PopupType = boolean | "profile" | "notification";
export interface NotificationItem {
  id: number;
  userName: string;
  userAvatar: string;
  message: string;
  date: string;
  time: string;
}

export interface iProjectContextType {
  id: number;
  title: string;
  status: string;
  statusColor: string;
  description: string;
  progress: number;
  members: [];
  deadline: string;
}

export interface iTaskContextType {
  id: number;
  title: string;
  description: string;
  project: string;
  priority: string;
  priorityColor: string;
  dueDate: string;
  assignee: any;
  comments: number;
}


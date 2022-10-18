import DashboardPage from "../page/admin/dashboard";
import LecturerManage from "../page/admin/manage/lecturer";
import StudentManage from "../page/admin/manage/student";
import SubjectManage from "../page/admin/manage/subject";

export const routes = [
  {
    id: "dashboard",
    path: "/admin",
    main: <DashboardPage />
  },
  {
    id: "subject",
    path: "/subjects",
    main: <SubjectManage />
  },
  {
    id: "lecturer",
    path: "/lecturers",
    main: <LecturerManage />
  },
  {
    id: "students",
    path: "/students",
    main: <StudentManage />
  },
];

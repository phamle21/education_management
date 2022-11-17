/* eslint-disable */
// import { USER_ROLE } from 'constants.js';
import { DEFAULT_PATHS } from 'config.js';
import { lazy } from 'react';

const dashboards = {
  elearning: lazy(() => import('views/dashboards/ElearningDashboard')),
  school: lazy(() => import('views/dashboards/SchoolDashboard')),
};
const users = {
  list: lazy(() => import('views/users/Users')),
};
const courses = {
  explore: lazy(() => import('views/courses/CoursesExplore')),
  list: lazy(() => import('views/courses/CoursesList')),
  detail: lazy(() => import('views/courses/CoursesDetail')),
};

const calendar = {
  // list: lazy(() => import('views/apps/calendar/Calendar')),
  list: lazy(() => import('views/calendar/Calendar')),
};

const quiz = {
  list: lazy(() => import('views/quiz/QuizList')),
  detail: lazy(() => import('views/quiz/QuizDetail')),
  result: lazy(() => import('views/quiz/QuizResult')),
};

const paths = {
  list: lazy(() => import('views/paths/PathsList')),
  detail: lazy(() => import('views/paths/PathsDetail')),
};

const lecturers = {
  list: lazy(() => import('views/lecturer/LecturerList')),
  detail: lazy(() => import('views/lecturer/LecturerDetail')),
};

const students = {
  list: lazy(() => import('views/student/StudentList')),
  detail: lazy(() => import('views/student/StudentDetail')),
};

const topics = {
  list: lazy(() => import('views/topics/TopicList')),
  // detail: lazy(() => import('views/student/StudentDetail')),
};

const misc = {
  player: lazy(() => import('views/misc/Player')),
  material: lazy(() => import('views/misc/Material')),
  syllabus: lazy(() => import('views/misc/Syllabus')),
};
// ----------------------------------------------------------
const landing = {
  default: lazy(() => import('views/landing/index')),
};

const appRoot = DEFAULT_PATHS.APP.endsWith('/') ? DEFAULT_PATHS.APP.slice(1, DEFAULT_PATHS.APP.length) : DEFAULT_PATHS.APP;

const routesAndMenuItems = {
  mainMenuItems: [
    {
      path: DEFAULT_PATHS.APP,
      exact: true,
      redirect: true,
      to: `${appRoot}/dashboards/elearning`,
    },
    {
      path: `${appRoot}/dashboards`,
      icon: 'home-garage',
      label: 'menu.home',
      exact: true,
      redirect: true,
      to: `${appRoot}/dashboards/elearning`,
      subs: [
        { path: '/elearning', label: 'menu.elearning', component: dashboards.elearning },
        { path: '/school', label: 'menu.school', component: dashboards.school },
      ],
    },
    {
      path: `${appRoot}/users`,
      label: 'menu.users',
      icon: 'screen',
      exact: true,
      redirect: true,
      to: `${appRoot}/users/list`,
      subs: [
        { path: '/list', label: 'menu.users', component: users.list },
      ],
    },
    {
      path: `${appRoot}/courses`,
      label: 'menu.courses',
      icon: 'online-class',
      exact: true,
      redirect: true,
      to: `${appRoot}/courses/list`,
      subs: [
        { path: '/list', label: 'menu.list', component: courses.list },
        { path: '/:id/detail', label: 'menu.detail', component: courses.detail, hideInMenu: true },
      ],
    },
    {
      path: `${appRoot}/calendar`,
      label: 'menu.calendar',
      icon: 'calendar',
      exact: true,
      redirect: true,
      to: `${appRoot}/calendar/list`,
      subs: [
        { path: '/list', label: 'menu.calendar', component: calendar.list },
      ],
    },
    // {
    //   path: `${appRoot}/quiz`,
    //   label: 'menu.quiz',
    //   icon: 'quiz',
    //   exact: true,
    //   redirect: true,
    //   to: `${appRoot}/quiz/list`,
    //   subs: [
    //     { path: '/list', label: 'menu.list', component: quiz.list },
    //     { path: '/detail', label: 'menu.detail', component: quiz.detail },
    //     { path: '/result', label: 'menu.result', component: quiz.result },
    //   ],
    // },
    // {
    //   path: `${appRoot}/paths`,
    //   label: 'menu.paths',
    //   icon: 'destination',
    //   exact: true,
    //   redirect: true,
    //   to: `${appRoot}/paths/list`,
    //   subs: [
    //     { path: '/list', label: 'menu.list', component: paths.list },
    //     { path: '/detail', label: 'menu.detail', component: paths.detail },
    //   ],
    // },
    {
      path: `${appRoot}/lecturers`,
      label: 'menu.lecturer',
      icon: 'lecture',
      exact: true,
      redirect: true,
      to: `${appRoot}/lecturers/list`,
      subs: [
        { path: '/list', label: 'menu.list', component: lecturers.list },
        { path: '/:id/detail', label: 'menu.detail', component: lecturers.detail, hideInMenu: true },
      ],
    },
    {
      path: `${appRoot}/students`,
      label: 'menu.students',
      icon: 'user',
      exact: true,
      redirect: true,
      to: `${appRoot}/students/list`,
      subs: [
        { path: '/list', label: 'menu.list', component: students.list },
        { path: '/:id/detail', label: 'menu.detail', component: students.detail, hideInMenu: true },
      ],
    },
    {
      path: `${appRoot}/topics`,
      label: 'menu.topics',
      icon: 'list',
      exact: true,
      redirect: true,
      to: `${appRoot}/topics/list`,
      subs: [
        { path: '/list', label: 'menu.list', component: topics.list },
        // { path: '/:id/detail', label: 'menu.detail', component: students.detail, hideInMenu: true },
      ],
    },
    // {
    //   path: `${appRoot}/misc`,
    //   label: 'menu.misc',
    //   icon: 'layout-5',
    //   exact: true,
    //   redirect: true,
    //   to: `${appRoot}/misc/player`,
    //   subs: [
    //     { path: '/player', label: 'menu.player', component: misc.player },
    //     { path: '/material', label: 'menu.material', component: misc.material },
    //     { path: '/syllabus', label: 'menu.syllabus', component: misc.syllabus },
    //   ],
    // },
  ],
  sidebarItems: [
    {
      path: `${appRoot}/landing`,
      exact: true,
      component: landing.default,
    },
  ],
};
export default routesAndMenuItems;

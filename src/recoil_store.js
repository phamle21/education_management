import { atom } from 'recoil';

const courseListState = atom({
    key: 'courseListState',
    default: [],
});

const courseListShowState = atom({
    key: 'courseListShowState',
    default: [],
});

const topicListState = atom({
    key: 'topicListState',
    default: [],
});

const selectTopicState = atom({
    key: 'selectTopicState',
    default: [],
})

const modalAddCourseState = atom({
    key: 'modalAddCourseState',
    default: false,
})

const lecturerListState = atom({
    key: 'lecturerListState',
    default: [],
})

const selectLecturerState = atom({
    key: 'selectLecturerState',
    default: [],
})

const detailCourseState = atom({
    key: 'detailCourseState',
    default: {},
})

const modalAddLecturerState = atom({
    key: 'modalAddLecturerState',
    default: false,
})


const modalAddTopicState = atom({
    key: 'modalAddTopicState',
    default: false,
})

const roleListState = atom({
    key: 'roleListState',
    default: [{ id: 'role_Admin', name: 'Admin' }, { id: 'role_Teacher', name: 'Teacher' }, { id: 'role_Student', name: 'Student' }]
})

const lecturerDetailState = atom({
    key: 'lecturerDetailState',
    default: [],
})

const coursesOfLecturerState = atom({
    key: 'coursesOfLecturerState',
    default: [],
})

const editRoleState = atom({
    key: 'editRoleState',
    default: {
        name: "",
        description: " ",
    }
})

export {
    editRoleState,
    roleListState,
    courseListShowState,
    topicListState,
    courseListState,
    modalAddCourseState,
    lecturerListState,
    selectLecturerState,
    selectTopicState,
    detailCourseState,
    modalAddLecturerState,
    modalAddTopicState,
    lecturerDetailState,
    coursesOfLecturerState
};

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

const modalAddLEcturerState = atom({
    key: 'modalAddLEcturerState',
    default: false,
})

export {
    courseListShowState,
    topicListState,
    courseListState,
    modalAddCourseState,
    lecturerListState,
    selectLecturerState,
    selectTopicState,
    detailCourseState,
    modalAddLEcturerState
};

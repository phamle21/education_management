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


export {
    courseListShowState,
    topicListState,
    courseListState,
}
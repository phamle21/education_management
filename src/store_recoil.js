import { atom } from "recoil"

const roleListState = atom({
    key: 'roleListState',
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
}
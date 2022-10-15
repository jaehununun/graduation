import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

export const {persistAtom} = recoilPersist({
    key: 'recoil-persist',
    storage: localStorage,
});

export const tokenState = atom({
    default: null,
    key: 'session/token',
    effects_UNSTABLE: [persistAtom],
})

export const userState = atom({
    default: null,
    key: 'session/user',
    effects_UNSTABLE: [persistAtom]
})
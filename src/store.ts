import { writable } from "svelte/store";

const defaultSettings = {
    showSideBar: true
}

const userSettings = JSON.parse(localStorage.getItem("userSettings") || JSON.stringify(defaultSettings));
export const showSideBar = writable(userSettings.showSideBar);

userSettings.subscribe(value => {
    localStorage.setItem("userSettings", JSON.stringify(value))
});

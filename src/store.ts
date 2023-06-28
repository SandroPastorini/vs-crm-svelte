import { writable } from 'svelte/store';
let showSidebarStore = null;
if (typeof localStorage !== 'undefined') {
    showSidebarStore = writable<boolean>(localStorage.showSidebarStore === 'true');
    
    showSidebarStore.subscribe((value) =>{    
        if (!value) return localStorage.removeItem('showSidebarStore');
        localStorage.showSidebarStore = String(value);
    });
}


export let showSidebar = showSidebarStore || false;
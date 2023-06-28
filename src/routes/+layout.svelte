<script>
    import "../app.css";
    import {page} from '$app/stores';
    import {showSideBar} from '../store';
	import { get } from "svelte/store";


    let data = {
        menuItems: [
            ["/", "Inicio"],
            ["/contactos", "Contactos"],
            ["/listas", "Listas de Difusión"],
            ["/envios", "Envíos"],
    ]};

    
</script>
<button on:click={() => showSideBar.set(!showSideBar)}>{showSideBar ? 'x' : '>'}</button>
<div class="flex flex-row m-2">
    {#if showSideBar}
        <nav class="hidden w-full md:inline-block md:w-1/5 flex-shrink">
            {#each data.menuItems as item}
             <ul class="border-b-2 border-black-50 hover:text-orange-600">
                 <li>
                    {#if item[0] == $page.url.pathname}
                    <a class="font-bold" href="{item[0]}">{item[1]}</a>
                    {:else}
                    <a href="{item[0]}">
                        {item[1]}
                        <!-- {$page.url.pathname} -->
                    </a>
                    {/if}
                </li>
             </ul>
        {/each}
    </nav>
    {/if}
        
    <div class="w-4/5 ml-4">
        <slot />
    </div>
</div>

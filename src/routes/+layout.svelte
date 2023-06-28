<script>
    import "../app.css";
    import {page} from '$app/stores';
	import ResizablePanel from "./ResizablePanel.svelte";
    // import {showSidebar as aux} from '../store';

    let showSidebar = true;

    let data = {
        menuItems: [
            ["/", "Inicio"],
            ["/contactos", "Contactos"],
            ["/listas", "Listas de Difusión"],
            ["/envios", "Envíos"],
    ]};


</script>


<!-- <button on:click={() => showSidebar = !showSidebar}>{showSidebar ? 'x' : '>'}</button> -->
<div class="flex flex-row m-2">
    {#if showSidebar}
    <ResizablePanel rightBorderStyle="background-color: green; width:2px; display:flex">

        <nav class="md:inline-block flex-shrink ">
            <ul class="w-full border-b-2 border-black-50 ">
            {#each data.menuItems as item}
                    <li class="hover:text-orange-600">
                    {#if item[0] == $page.url.pathname}
                    <a class="font-bold text-orange-600" href="{item[0]}">{item[1]}</a>
                    {:else}
                    <a href="{item[0]}">
                        {item[1]}
                    </a>
                    {/if}
                </li>
                {/each}
            </ul>
    </nav>
    </ResizablePanel>
    {/if}
        
    <div class="w-full ml-4">
        <slot />
    </div>
</div>

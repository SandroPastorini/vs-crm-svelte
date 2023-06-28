<script>
	import Draggable from "./Draggable.svelte";

    let className = "", rightBorderStyle = "", leftBorderStyle = "";

    export {className as class, rightBorderStyle, leftBorderStyle}
</script>

<style>
</style>


<div class="flex flex-row  {className}"  >
    <Draggable class="w-2 hidden" style="{leftBorderStyle}"></Draggable>
    <div class="mx-1 " >
        <slot />
    </div>
    <Draggable class="w-2 cursor-ew-resize" style="{rightBorderStyle}"></Draggable>
</div>
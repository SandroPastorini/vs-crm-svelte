<script>
	import { onMount } from "svelte";

    export let className, style, limitLeftDisplacement = false;
    export { className as class };

    let minWidth;
    let width;
    let absolute;
    let x_pos, y_pos;
    let element;

    onMount(() => {
        // let rect = element.getBoundingClientRect();
        // minWidth = rect.left;
    });


    let resize = (e) => {
        let dx = e.x - x_pos;
        width += width + dx >= 0 ? dx : 0;
        x_pos = e.x;
    }

    let addClickHandler = (e) => {
        let rect = element.getBoundingClientRect();
        x_pos = rect.left;
        document.addEventListener("mousemove", resize, false);
        document.addEventListener("mouseup", removeClickHandler, false)
    }

    let removeClickHandler = (e) => {
        document.removeEventListener("mousemove", resize, false);
    }
</script>


<svelte:window on:mouseup={removeClickHandler}></svelte:window>

<div bind:clientWidth={width} bind:this={element} class="{className}" on:mousedown={addClickHandler} style="{style}; margin-left: {width}px;" >
    <slot />
</div>




<!-- 
<script>
    export let style;
    let className;
    export {className as class}

    let resize = (e) => {

    }

    let addClickHandler = (e) => {
        document.addEventListener("mousemove", resize, false);
    }

    let removeClickHandler = (e) => {
        document.removeEventListener("mousemove", resize, false);
    }
</script>

<style>
    div {
        /* position:absolute; */
        top: 0;
        right:0;
        width: 5px;
        background-color: tomato;
        user-select: none;
        cursor: col-resize;;
    }
</style>

<div  on:mousedown={addClickHandler} >
    <slot />
</div> -->
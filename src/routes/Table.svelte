<script>
	import ResizablePanel from "./ResizablePanel.svelte";

    export let header = [];
    export let data;
</script>

<div>
    <table class="overflow-scroll w-max select-none ">
        <thead>
            {#each header as item,i}
            <th class="text-left border-slate-100 border-2">
                <ResizablePanel class="">
                    {item}
                </ResizablePanel>
            </th>
            {/each}
        </thead>
        <tbody>
            <tr>
                {#each data as item,i}
                <td>
                    {item}
                </td>
                {/each}
            </tr>
        </tbody>
    </table>
</div>

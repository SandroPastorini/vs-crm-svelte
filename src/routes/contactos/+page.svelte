<script>
	import Table from "../Table.svelte";

    let header = [ "id", "E-Mail", "Nombre", "Apellidoasl dfja;sdlf jadlfajsld ;jasdflkjads ;fakdsjfaldsf kja ;lsdkfj", "Ubicación" , "E-Mail", "Nombre", "Apellidoasl dfja;sdlf jadlfajsld ;jasdflkjads ;fakdsjfaldsf kja ;lsdkfj", "Ubicación" ];

</script>
<h1 class="text-xl">Contactos</h1>

<Table
    header = {header}
    data = {header}
    />
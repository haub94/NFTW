<script lang="ts">
  import Sidebar from "./Sidebar/Sidebar.svelte";
  import Components from "./Components.svelte";

  export let data;
</script>





<div class="flex flex-row" >
  <div class="w-96">
   <Sidebar data={data} />
  </div>
  <div>
    <Components data={data} />
  </div>
</div>


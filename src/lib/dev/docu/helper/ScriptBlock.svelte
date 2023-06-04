<script>
  export let cssClass = "text-gray-900";
  let scriptOpen = `<script`;
  let arrowRight = `>`;
  let arrowLeft = `<`;
  let scriptClosed = `/script>`;
</script>

<div class={cssClass}>
  <span>{scriptOpen}</span> <span>lang="ts"</span><span>{arrowRight}</span>
  <slot /> <br />
  <span>{arrowLeft}</span><span>{scriptClosed}</span>
</div>

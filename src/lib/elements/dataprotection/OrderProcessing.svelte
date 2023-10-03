<script lang="ts">
  export let text = "";
  export let title = "";
  let textToPrint: string = "";
  let titleToPrint: string = "";

  if (text === "") {
    //use mostly used text
    textToPrint =
      "We have concluded a contract on order processing (AVV) for the use of the above-mentioned service. This is a contract required by data protection law, which ensures that this processes the personal data of our website visitors only according to our instructions and in compliance with the GDPR.";
  } else {
    textToPrint = text;
  }

  if (title === "") {
    //use mostly used text
    titleToPrint = "Order Processing";
  } else {
    titleToPrint = title;
  }
</script>

<div class="space-y-1">
  <h3 class="text-nftw-pink-100 font-bold italic">{titleToPrint}</h3>
  <p class="pb-4 text-base">{textToPrint}</p>
</div>

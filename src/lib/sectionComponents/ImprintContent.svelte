<script lang="ts">
  import Body from "$lib/tools/accordion/Body.svelte";
  import Item from "$lib/tools/accordion/Item.svelte";

  let active: any = false;

  const imprintData = [
    {
      header: "Provider",
      descriptionLine1: "NFTW Adventures",
      descriptionLine2: "NFTW Park 1",
      descriptionLine3: "95014 Cupertino",
    },
    {
      header: "CEO",
      descriptionLine1: "Tom Cook",
      descriptionLine2: "",
      descriptionLine3: "",
    },
    {
      header: "Value added tax identification number",
      descriptionLine1: "US08150123",
      descriptionLine2: "",
      descriptionLine3: "",
    },
    {
      header: "Headquarter location",
      descriptionLine1: "95014 Cupertino",
      descriptionLine2: "",
      descriptionLine3: "",
    },
    {
      header: "Responsible for editorial content",
      descriptionLine1: "Tom Cook",
      descriptionLine2: "NFTW Park 1",
      descriptionLine3: "95014 Cupertino",
    },
  ];

  const accordionData = [
    {
      id: "0",
      header: "External links",
      description:
        "The contents of external links are not checked by us. They are subject to the liability of the respective providers.",
    },
    {
      id: "1",
      header: "Legal information on this website",
      description:
        "The contents of this website are researched with the greatest possible care. Nevertheless, the provider assumes no liability for the accuracy, completeness and timeliness of the information provided. In particular, the information is of a general nature. The contributions reflect the opinion of the respective author.",
    },
    {
      id: "2",
      header: "Copyright notice",
      description:
        "All contributions and illustrations published on this website are protected by copyright. Any use not permitted by copyright law requires the prior written consent of the provider. This applies in particular to the copying, editing, translation, storage, processing or reproduction of content in databases or other electronic media and systems. Photocopies and downloads of web pages may only be made for personal, private and non-commercial use.",
    },
    {
      id: "3",
      header: "Communication via email",
      description:
        "Communication via eMail can have security gaps. For example, e-mails can be intercepted and viewed on their way to the employees of our and viewed by experienced Internet users on their way to our company's employees. Should we receive an e-mail from you, we assume that we are entitled to reply by e-mail. Otherwise you must expressly refer to another way of communication. Upon request, we are able to encrypt the messages using common encryption standards (e.g. PGP).",
    },
  ];
</script>

<div class="relative bg-NFTW-bg bg-transparent">
  <div class="max-w-7xl mx-auto pb-16 pt-10 px-4 sm:px-6 lg:px-8">
    <div class="overflow-hidden sm:rounded-lg">
      <div class="px-4 py-5 sm:px-6">
        <div class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          {#each imprintData as imDate}
            <div class="sm:col-span-1">
              <p class=" font-medium text-NFTW-white">{imDate.header}</p>
              <p class="mt-1 text-NFTW-blue-100">
                {imDate.descriptionLine1}
                {#if imDate.descriptionLine2 !== ""}
                  <br />{imDate.descriptionLine2} <br />
                {/if}
                {#if imDate.descriptionLine3 !== ""}
                  {imDate.descriptionLine3}
                {/if}
              </p>
            </div>
          {/each}

          <div class="sm:col-span-2">
            <h2
              class="mt-3 mb-6 text-lg font-semibold tracking-tight text-NFTW-white"
            >
              Legal information on this website
            </h2>
            <div class="space-y-2">
              <Body bind:active>
                {#each accordionData as accDate}
                  <Item id={accDate.id} title={accDate.header}>
                    <div class="mb-10">
                      {accDate.description}
                    </div>
                  </Item>
                {/each}
              </Body>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

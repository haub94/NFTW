<script lang="ts" context="module">
  const pathToDataStorage = "routes/dev/docu/data.svelte";

  const dataTemplate = [
    //components
    {
      ID: "Last Id + 1 <number>",
      name: "Componentname <string>",
      component: "Name from the imported component <string>",
      description: "Description of the component <string>",
      author: "Name of the first author <string>",
      version: "Version x.y <string>",
      usedBy: ["Components which are using this <string>"],
      dependecies: ["Dependencies from the component <string>"],
      variables: [
        {
          name: "Name of the prop <string>",
          description: "Description of the prop <string>",
        },
      ],
      script:
        "Add the script-section without the script-tags (they are generated on the fly!) <string>",
      html: "Add the html-section. <string>",
    },
    //scripts
    {
      ID: "Last Id + 1 <number>",
      name: "Scriptname <string>",
      description: "Description of the script <string>",
      author: "Name of the first author <string>",
      version: "Version x.y <string>",
      usedBy: ["Components / scripts which are using this <string>"],
      dependecies: ["Dependencies from the script <string>"],
      variables: [
        {
          name: "Name of the variable <string>",
          description: "Description of the variable <string>",
        },
      ],
      script:
        "Add the script-section without the script-tags (they are generated on the fly!) <string>",
    },
  ];

  let templatesAsString: string[] = ["", ""];
  let templatesPrettiered: string[] = ["", ""];

  for (let index = 0; index < dataTemplate.length; index++) {
    templatesAsString[index] = JSON.stringify(dataTemplate[index]);
    templatesPrettiered[index] = templatesAsString[index].replaceAll(",", "\n");
  }
</script>

<div class="space-y-8">
  <div class="overflow-hidden shadow-xl sm:rounded-lg bg-gray-100 p-4">
    <div class="px-4 py-6 sm:px-6">
      <h3 class="text-base font-semibold leading-7 text-gray-900">
        Informations
      </h3>
      <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
        In this documentation you will find information about all components and
        scripts used on the website, the handling of the database and the
        cooperate design. The basics of the frameworks used, Svelte and
        Tailwind, are not listed in this documentation and can be found on the
        developer's website.
      </p>
    </div>
    <div class="border-t border-gray-100">
      <dl class="divide-y divide-gray-500">
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-900">Developer</dt>
          <dd
            class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
          >
            Markus Haubold
          </dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-900">Processed by</dt>
          <ul
            class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 list-none"
          >
            <li>Anna Kozachuk</li>
            <li>Le Xuan Tran</li>
            <li>Daniel Rittrich</li>
            <li>Markus Haubold</li>
          </ul>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-900">Version</dt>
          <dd
            class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
          >
            1.2 Beta
          </dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-900">Last modification</dt>
          <dd
            class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
          >
            16.04.2023
          </dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-900">Reported Bugs</dt>
          <ul
            class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 list-disc"
          >
            <li>nothing</li>
            <li>because we are</li>
            <li>gods of</li>
            <li>coding</li>
          </ul>
        </div>
      </dl>
    </div>
  </div>

  <!--template component data-->
  <div class="overflow-hidden shadow-xl sm:rounded-lg bg-gray-100 p-4">
    <div class="px-4 py-6 sm:px-6">
      <h3 class="text-base font-semibold leading-7 text-gray-900">
        Template component-data
      </h3>
      <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
        For each component to be displayed in the documentation, a data object
        with the following structure must be inserted into the data array at the
        component: {pathToDataStorage} . Please fill empty fields with a - (dash).<br
        />
        Psst... have a look into the mentioned data.svelte - there is a prettier
        styled template.
      </p>
    </div>
    <div class="border-t border-gray-100 overflow-scroll">
      <pre class="pl-12">
       {templatesPrettiered[0]}
      </pre>
    </div>
  </div>

  <!--template script data-->
  <div class="overflow-hidden shadow-xl sm:rounded-lg bg-gray-100 p-4">
    <div class="px-4 py-6 sm:px-6">
      <h3 class="text-base font-semibold leading-7 text-gray-900">
        Template script-data
      </h3>
      <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
        For each used script to be displayed in the documentation, a data object
        with the following structure must be inserted into the data array {pathToDataStorage}
        . Please fill empty fields with a - (dash).<br />
        Psst... have a look into the mentioned data.svelte - there is a prettier
        styled template.
      </p>
    </div>
    <div class="border-t border-gray-100 overflow-scroll">
      <pre class="pl-12">
       {templatesPrettiered[1]}
      </pre>
    </div>
  </div>
</div>

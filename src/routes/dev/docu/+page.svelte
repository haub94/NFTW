<script>
    import Documentation from "$lib/dev/docu/Documentation.svelte";

	//add all component-imports here
    import Header from "$lib/sectionComponents/Header.svelte";
    import Footer from "$lib/sectionComponents/Footer.svelte";


    const data = [
      {
        ID: 0,
        name: "Header",
        component: Header,
        description: "Beschreibung zu Header.",
        author: "Markus Haubold",
        version: "1.0",
        usedBy: "",
        dependecies: "",
        variables: [
          {
            name: 'Prop1',
            description: 'Beschreibung zu Prop1',
          },
          {
            name: 'Prop2',
            description: 'Beschreibung zu Prop2',
          }
        ],
        script: 
    `
    function helloWorld() {
    console.log("hello");

    return(0);
    }`,
        html: 
    `
    <div class="flex flex-row bg-black p-5 text-3xl text-white mx-auto py-4 md:py-4 md:flex-row">
    <p>NFTW Adventures</p>
    <a href="/impressum" class="ml-48 text-lg bg-red-600">Impressum</a>
    <button class="ml-12 text-lg">spacetravel</button>
    <button class="ml-12 text-lg">client storys</button>
    </div>
    `
      },
      {
        ID: 1,
        name: "Footer",
        component: Footer,
        description: "Beschreibung zu Header.",
        author: "Markus Haubold",
        version: "1.0",
        usedBy: "",
        dependecies: "",
        variables: [
          {
            name: 'Prop1',
            description: 'Beschreibung zu Prop1',
          },
          {
            name: 'Prop2',
            description: 'Beschreibung zu Prop2',
          }
        ],
        script: ``,
        html: 
        `
        <div>test</div>
        `
      }
    ]

	
</script>


<Documentation data={data} />
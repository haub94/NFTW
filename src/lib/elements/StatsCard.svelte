<script>
    import CaseCard from '$lib/cardTemplates/CaseCard.svelte';
	import SvgCircleWavyCheck from '$lib/icons/svgCircleWavyCheckThin.svelte';
	import SvgChatBubble from '$lib/icons/svgChatBubble.svelte';
	import SvgTrophyThin from '$lib/icons/svgTrophyThin.svelte';
	import SvgFlagWavy from '$lib/icons/svgFlagWavyThin.svelte';

    const caseCardsConference = [
        {
            logo: './cases/codetalks-logo.png',
            eventName: 'code.talks',                             //for alt image alt-tag
            textVisitor: 'Anzahl der Besucher',
            visitors: '1.480',
            picture: './cases/placeholder_image.png',
            pictureAlt: "Emotionen der Konferenz code.talks.",
            business: 'IT Entwickler Konferenz',
            leadsV: 'Rallye-Teilnehmer pro Veranstaltung',
            leadsA: 'Leads pro Aussteller-Station',
            leads: ["Teilnehmerprognose", "Reale Teilnehmer", "Interaktionsprognose", "Reale Interaktionen"],
            statistic: [370, 506, 296, 347],
            percentual: ["(25%)", "(34%)", "(20%)", "(24%)"] },
        {
            logo: './cases/cadfem_logo.png',
            eventName: 'CADFEM',                             //for alt image alt-tag
            textVisitor: 'Anzahl der Besucher',
            visitors: '795',
            picture: './cases/Cadfem_confCard.jpg',
            pictureAlt: "Emotionen der Konferenz CADFEM.",
            business: 'Forschung & Simulation',
            leadsV: 'Rallye-Teilnehmer pro Veranstaltung',
            leadsA: 'Leads pro Aussteller-Station',
            leads: ["Teilnehmerprognose", "Reale Teilnehmer", "Interaktionsprognose", "Reale Interaktionen"],
            statistic: [199, 379, 159, 195],
            percentual: ["(25%)", "(48%)", "(20%)", "(25%)"] },
        {
            logo: './cases/Cases_Logo_DGPARO.png',
            eventName: 'dgparo',
            textVisitor: 'Anzahl der Besucher',
            visitors: '750',
            picture: './cases/DG_Paro.jpg',
            pictureAlt: "Tablet auf welchem eine CONFGAMES Rallye gespielt wurde.",
            business: 'Pharma Jahrestagung',
            leadsV: 'Rallye-Teilnehmer pro Veranstaltung',
            leadsA: 'Leads pro Aussteller-Station',
            leads: ["Teilnehmerprognose", "Reale Teilnehmer", "Interaktionsprognose", "Reale Interaktionen"],
            statistic: [188, 286, 150, 186],
            percentual: ["(25%)", "(38%)", "(20%)", "(25%)"] },
        {
            logo: './cases/Cases_Logo_Symfony.png',
            eventName: 'symfonyLive',
            textVisitor: 'Anzahl der Besucher',
            visitors: '420',
            picture: './cases/Cases_Pic_Symfony.jpg',
            pictureAlt: "Emotionen der Konferenz Symfony Live Berlin.",
            business: 'Entwickler Konferenz',
            leadsV: 'Rallye-Teilnehmer pro Veranstaltung',
            leadsA: 'Leads pro Aussteller-Station',
            leads: ["Teilnehmerprognose", "Reale Teilnehmer", "Interaktionsprognose", "Reale Interaktionen"],
            statistic: [105, 270, 84, 175],
            percentual: ["(25%)", "(64%)","(20%)", "(42%)"] },

        {
            logo: './cases/Cases_Logo_codetalks_commerce.png',
            eventName: 'code.talks commerce special',
            textVisitor: 'Anzahl der Besucher',
            visitors: '480',
            picture: './cases/code.talks_commerce.jpg',
            pictureAlt: "Emotionen der Konferenz code.talks",
            business: 'IT',
            leadsV: 'Rallye-Teilnehmer pro Veranstaltung',
            leadsA: 'Leads pro Aussteller-Station',
            leads: ["Teilnehmerprognose", "Reale Teilnehmer", "Interaktionsprognose", "Reale Interaktionen"],
            statistic: [120, 214, 96, 124,3],
            percentual: ["(25%)", "(45%)", "(20%)", "(26%)"] },
        {
            logo: './cases/Cases_Logo_PHP_Unconf.png',
            eventName: 'PHP Unconference',
            textVisitor: 'Anzahl der Besucher',
            visitors: '340',
            picture: './cases/unconf.jpg',
            pictureAlt: "Emotionen der PHP-Konferenz",
            business: 'IT',
            leadsV: 'Rallye-Teilnehmer pro Veranstaltung',
            leadsA: 'Leads pro Aussteller-Station',
            leads: ["Teilnehmerprognose", "Reale Teilnehmer", "Interaktionsprognose", "Reale Interaktionen"],
            statistic: [85, 130, 68, 149],
            percentual: ["(25%)", "(38%)", "(20%)", "(44%)"] }
    ]

    const caseCardsEvents = [
        {
            logo: './cases/Cases_Logo_Fit4Congress.png',
            eventName: 'Fit4Congress',
            textVisitor: 'Anzahl der Besucher',
            visitors: '110',
            picture: './cases/0191114_fit4congress.jpg',
            pictureAlt: "Emotionen der Fit4Congress Konferenz.",
            business: 'MICE Tagungs- & Eventbranche',
            leadsV: 'Rallye-Teilnehmer pro Veranstaltung',
            leadsA: 'Leads pro Aussteller-Station',
            leads: ["Teilnehmerprognose", "Reale Teilnehmer", "Interaktionsprognose", "Reale Interaktionen"],
            statistic: [28, 88, 22, 41],
            percentual: ["(25%)", "(80%)", "(20%)", "(40%)"] },
        {
            logo: './cases/Cases_Logo_MeetGermany.png',
            eventName: 'Meet Germany Summit',                             //for alt image alt-tag
            textVisitor: 'Anzahl der Besucher',
            visitors: '125',
            picture: './cases/Forum-Meet-Hanse-Summit_2019.jpg',
            pictureAlt: "Emotionen der Konferenz Meet Germany",
            business: 'MICE Tagungs- & Eventbranche',
            leadsV: 'Rallye-Teilnehmer pro Veranstaltung',
            leadsA: 'Leads pro Aussteller-Station',
            leads: ["Teilnehmerprognose", "Reale Teilnehmer", "Interaktionsprognose", "Reale Interaktionen"],
            statistic: [31, 80, 25, 42],
            percentual: ["(25%)", "(64%)", "(20%)", "(34%)"] },
        {
            logo: './cases/Cases_Logo_V.png',
            eventName: 'EFDS V',                             //for alt image alt-tag
            textVisitor: 'Anzahl der Besucher',
            visitors: '250',
            picture: './cases/EFDS-V2019.jpg',
            pictureAlt: "Tablet auf welchem eine CONFGAMES Rallye gespielt wird.",
            business: 'TECH - Fachtagung & Industrieausstellung',
            leadsV: 'Rallye-Teilnehmer pro Veranstaltung',
            leadsA: 'Leads pro Aussteller-Station',
            leads: ["Teilnehmerprognose", "Reale Teilnehmer", "Interaktionsprognose", "Reale Interaktionen"],
            statistic: [63, 134, 50, 55],
            percentual: ["(25%)", "(54%)", "(20%)", "(22%)"] }
    ]
</script>

<div class="bg-gray-100">
    <div class="relative bg-gray-100 mx-auto max-w-5xl py-8 px-4 sm:px-6 lg:px-8 sm:py-24 lg:py-20">
        <div class="py-6 md:px-0 md:mx-auto prose max-w-prose text-xl text-center">
            <h1>
                <span class="block text-lg font-semibold text-fuchsia-700 uppercase">Look At</span>
                <span class="text-gray-900">Cases</span>
            </h1>
            <p class="text-gray-500">Die Event Rallye von CONFGAMES ist flexibel für unterschiedliche Eventtypen einsetzbar.
                Ob Konferenzen, Tagungen, Messen oder Events - wir realisieren spannende Projekte und führen Ihr Event mit
                hohen Interaktions- und Teilnehmerquoten zum Engagement-Erfolg.</p>
        </div>
    </div>
</div>

<div id="conference" class="bg-white mt-10">
    <div class="mx-auto py-8 px-4 max-w-7xl">
        <div>
            <div class="py-6 prose max-w-prose text-xl">
                <div>
                    <h2 class="mt-0">Konferenzen & Tagungen</h2>
                 </div>
            </div>

            <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                {#each caseCardsConference as caseConference}
                    <CaseCard logo={caseConference.logo}
                              eventName={caseConference.eventName}
                              textVisitor={caseConference.textVisitor}
                              visitors={caseConference.visitors}
                              business={caseConference.business}
                              picture={caseConference.picture}
                              leadV={caseConference.leadsV}
                              leadA={caseConference.leadsA}
                              gLeads={caseConference.leads}
                              gStatistics={caseConference.statistic}
                              gPercentuals={caseConference.percentual}>
                        <SvgCircleWavyCheck slot="iconUpperLeft" />
                        <SvgTrophyThin slot="iconUpperRight" />
                        <SvgChatBubble slot="iconDownLeft" />
                        <SvgFlagWavy slot="iconDownRight" />
                    </CaseCard>
                {/each}
            </div>

            <div class="py-6 md:px-0 prose max-w-prose text-xl">
                <div>
                    <h2>Messen & Events</h2>
                </div>
            </div>
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 place-items-center">

                    {#each caseCardsEvents as caseEvents}
                        <CaseCard logo={caseEvents.logo}
                                  eventName={caseEvents.eventName}
                                  textVisitor={caseEvents.textVisitor}
                                  visitors={caseEvents.visitors}
                                  business={caseEvents.business}
                                  picture={caseEvents.picture}
                                  leadV={caseEvents.leadsV}
                                  leadA={caseEvents.leadsA}
                                  gLeads={caseEvents.leads}
                                  gStatistics={caseEvents.statistic}
                                  gPercentuals={caseEvents.percentual}>
                                <SvgCircleWavyCheck slot="iconUpperLeft" />
                                <SvgTrophyThin slot="iconUpperRight" />
                                <SvgChatBubble slot="iconDownLeft" />
                                <SvgFlagWavy slot="iconDownRight" />
                        </CaseCard>
                    {/each}
            </div>
        </div>
    </div>
</div>
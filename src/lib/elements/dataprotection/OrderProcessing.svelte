<script lang="ts">
	export let text = '';
	export let title = '';
	let textToPrint: string = "";
	let titleToPrint: string = "";

	if (text === '') {
		//use mostly used text
		textToPrint =
			'Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.';
	} else {
		textToPrint = text;
	}

	if (title === '') {
		//use mostly used text
		titleToPrint = 'Auftragsverarbeitung';
	} else {
		titleToPrint = title;
	}
</script>

<h3 class="text-base font-bold italic">{titleToPrint}</h3>
<p class="pb-4 text-base">{textToPrint}</p>

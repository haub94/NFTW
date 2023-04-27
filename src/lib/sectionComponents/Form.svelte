<script lang="ts">
  import { page } from "$app/stores";
  import { dev } from '$app/environment';
  import emailjs from '@emailjs/browser'; //Haubold, Markus - mailing client 
    import { stringify } from "postcss";

  const isGetInContact = $page.url.pathname.includes("/getInContact");
  const isContact = $page.url.pathname.includes("/contact");

  //Haubold, Markus - add vars to style redundant parts
  const labelStyle = "block text-sm font-semibold leading-6 text-NFTW-white";
  const inputStyle = "block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-NFTW-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-NFTW-blue-500 sm:text-sm sm:leading-6";
  const dateStyle = "block w-full mt-2.5 rounded-md border-0 bg-white/5 px-3.5 py-2 text-NFTW-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-NFTW-blue-500 sm:text-sm sm:leading-6";
  const selectionStyling = "bg-NFTW-black-600 bg-opacity-90";

  //Haubold, Markus - Use input values to send mail to the customer
  //config EmailJS
  const SERVICE_ID: string = 'service_vzyr2ok';
  let TEMPLATE_ID: string = ''; //template_3sdt4dk
  const PUPLIC_KEY: string = 'YYaLHQ2Bd6V9Rk4vS';

  //select the template based on the current filled form (contact / get in contact)
  if (isContact) {
    TEMPLATE_ID = 'template_contactRequest';
  } else if (isGetInContact) {
    TEMPLATE_ID = 'template_appRequest'; //adding new one is still in progress!!
  }

  //form inputs
  let inputData = {
    destination: '',
    purpose: '',
    startdate: '',
    enddate: '',
    firstName:  '',
    lastName: '',
    emailAddress: '',
    message: '',
  }

  function loadDevData() {
    inputData.destination = "Moon";
    inputData.purpose = "Vacation";
    inputData.startdate = "2023-05-10";
    inputData.enddate = "2023-05-15";
    inputData.firstName = "Markus";
    inputData.lastName = "Haubold";
    inputData.emailAddress = "haubie94@web.de";
    inputData.message = "Hello, that's data are loaded during DEV-mode!";
    console.log("DEV data loaded successfull!")
  }

  function logInput() {
    console.log("mailing data:")
    console.log('destination :>> ',inputData.destination);
    console.log('purpose :>> ',inputData.purpose);
    console.log('start-date :>> ',inputData.startdate);
    console.log('end-date :>> ',inputData.enddate);
    console.log('firstName :>> ', inputData.firstName);
    console.log('lastName :>> ', inputData.lastName);
    console.log('emailAddress :>> ', inputData.emailAddress);
    console.log('message :>> ', inputData.message);
    console.log("call emailJS function to send mail");
  }

  let mailingStatus: number = 0;

  function handleInputValues() {
      if (dev) {
        logInput();
      }

      //DO HERE CRAZY STUFF WITH THE DB!!!!!!!!!

      //send email to customer
      sendEmail(SERVICE_ID,
                TEMPLATE_ID,
                PUPLIC_KEY,
                inputData.destination,
                inputData.purpose,
                inputData.startdate,
                inputData.enddate,
                inputData.firstName, 
                inputData.lastName,
                inputData.emailAddress,
                inputData.message);
      clearInputValues();
  }

  //clear inputbuffer after sending
  function clearInputValues(): boolean {
    inputData.destination = '';
    inputData.purpose = '';
    inputData.startdate = '';
    inputData.enddate = '';
    inputData.firstName = '';
    inputData.lastName = '';
    inputData.emailAddress = '';
    inputData.message = '';

    return true;
  }

  //send mail with emailJs client
  function sendEmail( S_ID: string,
                      T_ID: string,
                      P_KEY: string,
                      destination: string,
                      journeyPurpose: string,
                      startDate: string,
                      endDate: string,
                      firstName: string,
                      lastName: string, 
                      emailAddress: string,
                      message: string): boolean {
      
      emailjs.send(S_ID, 
                    T_ID, 
                    {
                      destination: destination,
                      journeyPurpose: journeyPurpose,
                      startDate: startDate,
                      endDate: endDate,
                      firstName: firstName,
                      lastName: lastName,
                      emailAddress: emailAddress,
                      message: message
                    }, 
                    P_KEY)

        .then((result) => {
          if (dev) { console.log('SUCCESS!', result.text)}
            mailingStatus = 1;  
        }, (error) => {
          if (dev) { console.log('FAILED...', error.text)} 
            mailingStatus = 999;  
            clearInputValues();

            return false
        },);

      clearInputValues();

      return true
  }


</script>

 <!--load testdate for dev-mode-->
 {#if dev}
    <div class="">
      <button
        on:click={loadDevData}
        class="rounded-md bg-green-500 px-3.5 py-2.5 text-center text-sm font-semibold text-NFTW-white shadow-sm hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >Load DEV-Data ...</button
      >
    </div>
 {/if}


<!-- GET IN CONTACT -->
<div class="relative isolate bg-NFTW-bg bg-opacity-50">
  <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
    <div class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
      <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
        <div
          class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2"
        >
          <svg
            class="absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                width="200"
                height="200"
                x="100%"
                y="-1"
                patternUnits="userSpaceOnUse"
              >
                <path d="M130 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="100%" y="-1" class="overflow-visible fill-gray-800/20">
              <path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
            </svg>
            <rect
              width="100%"
              height="100%"
              stroke-width="0"
              fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)"
            />
          </svg>
          <div
            class="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
            aria-hidden="true"
          >
            <div
              class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20"
              style="clip-path: polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)"
            />
          </div>
        </div>
        <h2 class="text-3xl font-bold tracking-tight text-NFTW-white">
          {#if isContact}Contact{/if}
          {#if isGetInContact}Get in contact{/if}
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-300">
          {#if isContact}Text for Contact Site{/if}
          {#if isGetInContact}Text for Get In Contact Site{/if}
        </p>
        {#if isContact}
          <dl class="mt-10 space-y-4 text-base leading-7 text-gray-300">
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Telephone</span>
                <svg
                  class="h-7 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                  />
                </svg>
              </dt>
              <dd>545 Mavis Island<br />Chicago, IL 99191</dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Telephone</span>
                <svg
                  class="h-7 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </dt>
              <dd>
                <a class="hover:text-NFTW-white" href="tel:+1 (555) 234-5678"
                  >+1 (555) 234-5678</a
                >
              </dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Telephone</span>
                <svg
                  class="h-7 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </dt>
              <dd>
                <a class="hover:text-NFTW-white" href="mailto:hello@example.com"
                  >hello@example.com</a
                >
              </dd>
            </div>
          </dl>
        {/if}
      </div>
    </div>

   
    <!-- FORM -->
    <form
      on:submit|preventDefault={handleInputValues}
      class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
    >
      <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {#if isGetInContact}
            <div>
              <label
                for="destination"
                class={labelStyle}
                >Destination</label
              >
              <select
                bind:value={inputData.destination}
                id="destination"
                name="destination"
                class={dateStyle}
              >
                <option selected class={selectionStyling}
                  >Nothing choosen</option
                >
                <option class={selectionStyling}>Mars</option>
                <option class={selectionStyling}>Moon</option>
                <option class={selectionStyling}>Venus</option>
              </select>
            </div>
            <div>
              <label
                for="journeypurpose"
                class={labelStyle}
                >Journey Purpose</label
              >
              <select
                bind:value={inputData.purpose}
                id="journeypurpose"
                name="journeypurpose"
                class={dateStyle}
              >
                <option selected class={selectionStyling}
                  >Nothing choosen</option
                >
                <option class={selectionStyling}
                  >Birthdayspecial</option
                >
                <option class={selectionStyling}
                  >Honeymoon</option
                >
                <option class={selectionStyling}
                  >Phototour</option
                >
                <option class={selectionStyling}>Vacation</option
                >
              </select>
            </div>

            <!-- @MARKUS / @ANNA -------------------- {#if birthdayspecial||honeymoon} -->
            <!--startdate-->
            <div>
              <label
                for="startdate"
                class={labelStyle}
                >Start Date</label
              >
              <input
                bind:value={inputData.startdate}
                id="startdate"
                name="startdate"
                type="date"
                class={dateStyle}
              />
            </div>
            
            <!--enddate-->
            <div>
              <label
                for="enddate"
                class={labelStyle}
                >End Date</label
              >
              <input
                bind:value={inputData.enddate}
                id="enddate"
                name="enddate"
                type="date"
                class={dateStyle}
              />
            </div>
            <!-- {/if} -->

            <div class="mb-10 sm:col-span-2" />
          {/if}
          
          <!--first name-->
          <div>
            <label
              for="first-name"
              class={labelStyle}
              >First name</label
            >
            <div class="mt-2.5">
              <input
                bind:value={inputData.firstName}
                type="text"
                name="first-name"
                id="first-name"
                autocomplete="given-name"
                class={inputStyle}
              />
            </div>
          </div>

          <!--last name-->
          <div>
            <label
              for="last-name"
              class={labelStyle}
              >Last name</label
            >
            <div class="mt-2.5">
              <input
                bind:value={inputData.lastName}
                type="text"
                name="last-name"
                id="last-name"
                autocomplete="family-name"
                class={inputStyle}
              />
            </div>
          </div>

          <!--email address-->
          <div class="sm:col-span-2">
            <label
              for="email"
              class={labelStyle}
              >Email</label
            >
            <div class="mt-2.5">
              <input
                bind:value={inputData.emailAddress}
                type="email"
                name="email"
                id="email"
                autocomplete="email"
                class={inputStyle}
              />
            </div>
          </div>

          <!--message-->
          <div class="sm:col-span-2">
            <label
              for="message"
              class={labelStyle}
              >Message</label
            >
            <div class="mt-2.5">
              <textarea
                bind:value={inputData.message}
                name="message"
                id="message"
                rows="4"
                class="block w-full min-h-min rounded-md border-0 bg-white/5 px-3.5 py-2 text-NFTW-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-NFTW-blue-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
       
        <!--submit-->
        <div class="mt-8 flex justify-end">
          <button
            type="submit"
            class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-NFTW-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >Send message</button
          >
        </div>
      </div>
    </form>
  </div>
</div>

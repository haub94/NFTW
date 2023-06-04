<script lang="ts">
  import emailjs from "@emailjs/browser";
  import { dev } from "$app/environment";

  //config EmailJS
  const SERVICE_ID: string = "service_vzyr2ok";
  const TEMPLATE_ID: string = "template_3sdt4dk";
  const PUPLIC_KEY: string = "YYaLHQ2Bd6V9Rk4vS";

  //form inputs
  let inputData = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    message: "",
  };

  let mailingStatus: number = 0;

  function handleInputValues() {
    if (dev) {
      console.log("mailing data:");
      console.log("firstName :>> ", inputData.firstName);
      console.log("lastName :>> ", inputData.lastName);
      console.log("emailAddress :>> ", inputData.emailAddress);
      console.log("message :>> ", inputData.message);
      console.log("call emailJS function to send mail");
    }

    //DO HERE CRAZY STUFF WITH THE DB!!!!!!!!!

    sendEmail(inputData.firstName, inputData.emailAddress);
  }

  function clearInputValues(): boolean {
    inputData.firstName = "";
    inputData.lastName = "";
    inputData.emailAddress = "";
    inputData.message = "";

    return true;
  }

  function sendEmail(name: string, mail: string): boolean {
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        //template variables
        {
          from_name: name,
          to_mail: mail,
        },
        PUPLIC_KEY
      )

      .then(
        (result) => {
          if (dev) {
            console.log("SUCCESS!", result.text);
          }
          mailingStatus = 1;
        },
        (error) => {
          if (dev) {
            console.log("FAILED...", error.text);
          }
          mailingStatus = 999;
          clearInputValues();

          return false;
        }
      );

    clearInputValues();

    return true;
  }
</script>

<!--BANNER-->
{#if mailingStatus === 1 || mailingStatus === 999}
  <div class="rounded-md bg-green-50 p-4 mt-12 max-w-6xl mx-auto">
    <div class="flex">
      <div class="flex-shrink-0">
        <!-- Heroicon name: mini/check-circle -->
        <svg
          class="h-5 w-5 text-green-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div class="ml-3">
        {#if mailingStatus === 1}
          <p class="text-xl font-medium text-green-800">
            Your mail was successfully sent.
          </p>
        {:else if mailingStatus === 999}
          <p class="text-xl font-medium text-red-800">
            Sorry. It seems that there was an error. Please call us: 0123456789.
          </p>
        {/if}
      </div>
      <div class="ml-auto pl-3">
        <div class="-mx-1.5 -my-1.5">
          <button
            on:click={() => {
              mailingStatus = 0;
            }}
            type="button"
            class="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
          >
            <span class="sr-only">close</span>
            <!-- Heroicon name: mini/x-mark -->
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}

<!--FORM-->
<div class="bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div
    class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
    aria-hidden="true"
  >
    <div
      class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
      style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
    />
  </div>
  <div class="mx-auto max-w-2xl text-center">
    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      Contact sales
    </h2>
    <p class="mt-2 text-lg leading-8 text-gray-600">
      Aute magna irure deserunt veniam aliqua magna enim voluptate.
    </p>
  </div>
  <form
    on:submit|preventDefault={handleInputValues}
    class="mx-auto mt-16 max-w-xl sm:mt-20"
  >
    <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <!--first name-->
      <div>
        <label
          for="first-name"
          class="block text-sm font-semibold leading-6 text-gray-900"
          >First name</label
        >
        <div class="mt-2.5">
          <input
            bind:value={inputData.firstName}
            required
            type="text"
            name="first-name"
            id="first-name"
            autocomplete="given-name"
            class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <!--last name-->
      <div>
        <label
          for="last-name"
          class="block text-sm font-semibold leading-6 text-gray-900"
          >Last name</label
        >
        <div class="mt-2.5">
          <input
            bind:value={inputData.lastName}
            required
            type="text"
            name="last-name"
            id="last-name"
            autocomplete="family-name"
            class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <!--email-->
      <div class="sm:col-span-2">
        <label
          for="email"
          class="block text-sm font-semibold leading-6 text-gray-900"
          >Email</label
        >
        <div class="mt-2.5">
          <input
            bind:value={inputData.emailAddress}
            required
            type="email"
            name="email"
            id="email"
            autocomplete="email"
            class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <!--message-->
      <div class="sm:col-span-2">
        <label
          for="message"
          class="block text-sm font-semibold leading-6 text-gray-900"
          >Message</label
        >
        <div class="mt-2.5">
          <textarea
            bind:value={inputData.message}
            required
            name="message"
            id="message"
            rows="4"
            class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <!--submit-->
    </div>
    <div class="mt-10">
      <input
        type="submit"
        class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        value="Let's talk"
      />
    </div>

    <div>
      <label for="journeypurpose">Journey Purpose</label>
      <select required id="journeypurpose" name="journeypurpose">
        <option selected>Nothing choosen</option>

        <option>Birthdayspecial</option>
        <option>Honeymoon</option>
        <option>Phototour</option>
        <option>Vacation</option>
      </select>
    </div>
  </form>
</div>

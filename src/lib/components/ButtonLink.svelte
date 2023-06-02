<script lang="ts">
  import { page } from "$app/stores";

  const PAGE_IS_DEST = $page.url.pathname.includes("/spacetravel/destination");
  const PAGE_IS_JP = $page.url.pathname.includes("/spacetravel/journeyPurpose");
  const PAGE_IS_MOON = $page.url.pathname.includes("/moon");
  const PAGE_IS_MARS = $page.url.pathname.includes("/mars");
  const PAGE_IS_VENUS = $page.url.pathname.includes("/venus");
  const PAGE_IS_BIRTHDAY = $page.url.pathname.includes("/birthdayspecial");
  const PAGE_IS_VACATION = $page.url.pathname.includes("/vacation");
  const PAGE_IS_HONEYMOON = $page.url.pathname.includes("/honeymoon");
  const PAGE_IS_PHOTOTOUR = $page.url.pathname.includes("/phototour");
  const PAGE_IS_OURRECOMANDATIONS =
    $page.url.pathname.includes("/ourRecomandations");

  let checkIfDestDetailPage: boolean =
    PAGE_IS_MARS || PAGE_IS_MOON || PAGE_IS_VENUS;
  let checkIfJPDetailPage: boolean =
    PAGE_IS_BIRTHDAY ||
    PAGE_IS_VACATION ||
    PAGE_IS_HONEYMOON ||
    PAGE_IS_PHOTOTOUR ||
    PAGE_IS_OURRECOMANDATIONS;

  let buttonRoute: string = checkIfDestDetailPage
    ? "/spacetravel/destination"
    : checkIfJPDetailPage
    ? "/spacetravel/journeyPurpose"
    : PAGE_IS_DEST || PAGE_IS_JP
    ? "/spacetravel/#cardsSpacetravel"
    : "/";

  let buttonText: string = checkIfDestDetailPage
    ? "◄ Back to destinations"
    : checkIfJPDetailPage
    ? "◄ Back to journey purposes"
    : PAGE_IS_DEST || PAGE_IS_JP
    ? "◄ Back to spacetravel"
    : "◄ Back to home";
</script>

<div class="absolute left-5 top-5 flex">
  <a
    id="backButton"
    href={buttonRoute}
    aria-describedby="link-BackToSpacetravel"
    class="h-auto min-h-full px-7 grid items-center rounded-md col-span-1 bg-NFTW-lila-800 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-NFTW-lila-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition duration-500"
  >
    {buttonText}
  </a>
</div>

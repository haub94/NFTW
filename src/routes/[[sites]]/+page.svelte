<script lang="ts">
  import HomeSection from "$lib/components/HomeSection.svelte";
  import LogoSection from "$lib/components/LogoSection.svelte";
  import BgVideo from "$lib/sectionComponents/BgVideo.svelte";
  import HomeSectionBg from "$lib/sectionComponents/HomeSectionBg.svelte";
  import SectionBg002 from "$lib/sectionComponents/SectionBg002.svelte";
</script>

<BgVideo
  title="NFTW Adventures"
  caption="Follow Us To Infinity"
  video="/videos/SPACE_SD.mp4"
  captionPath="/getInContact"
  videoHeight="70vh"
/>

<SectionBg002>
  <HomeSection />
</SectionBg002>

<HomeSectionBg
  title1of2="About us"
  title2of2=""
  img="/home/BgAboutUs.png"
  minHeight="90vh"
>
  <div class="text-NFTW-blue-50 text-2xl">
    <p>
      Welcome to our space tourism company, where we are passionate about
      providing an unforgettable experience for those who dream of exploring the
      final frontier. Our mission is to enable individuals to fulfill their
      lifelong ambition of space travel and to inspire a new generation of space
      enthusiasts.
    </p>
  </div>
</HomeSectionBg>

<SectionBg002>
  <LogoSection />
</SectionBg002>

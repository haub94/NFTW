<script lang="ts">
  import HomeSection from "$lib/components/HomeSection.svelte";
  import BgVideo from "$lib/sectionComponents/BgVideo.svelte";
  import HomeSectionBg from "$lib/sectionComponents/HomeSectionBg.svelte";
  import SectionBg001 from "$lib/sectionComponents/SectionBg001.svelte";
  import SectionBg002 from "$lib/sectionComponents/SectionBg002.svelte";
</script>

<BgVideo
  title="NFTW Adventures"
  caption="Follow Us To Infinity"
  video="/videos/SPACE_SD.mp4"
  captionPath="/getInContact"
  videoHeight="70vh"
/>

<HomeSectionBg
 title1of2="About us"
 title2of2="">
   <div class="text-NFTW-blue-50 text-2xl">
      <p>Welcome to our space tourism company, where we are passionate about providing an unforgettable experience for those who dream of exploring the final frontier. Our mission is to enable individuals to fulfill their lifelong ambition of space travel and to inspire a new generation of space enthusiasts.</p><br>
      <p>Our company was founded by a team of experienced entrepreneurs, engineers, and space enthusiasts who have a deep love for space exploration. We have partnered with the leading space agencies and private space companies to ensure that our customers have access to the most advanced and safest technologies available.</p>
  </div>
</HomeSectionBg>
  


<HomeSection></HomeSection>

<SectionBg002>

</SectionBg002>


<script>
  import {HeroSection, AboutMeSection} from "$components";
  const {data} = $props();
  let {workExperience} = data;
</script>
<HeroSection />
<AboutMeSection {workExperience}/>
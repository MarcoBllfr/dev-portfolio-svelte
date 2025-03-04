<script>

  import {HeroSection, AboutMeSection, MyWorkSection} from "$components";
  const {data} = $props();
  let {workExperience,projects} = data;
</script>
<HeroSection />
<AboutMeSection {workExperience}/>
<MyWorkSection {projects}/>
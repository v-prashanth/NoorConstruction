

// 'use client';

// import ScrollManager from '@/components/shared/ScrollManager';
// import HeroSection from '@/components/sections/HeroSection';
// import OurStory from '@/components/sections/OurStory'; // You can create this similarly
// import ServicesSection from '@/components/sections/ServicesSection'; // You can create this similarly
// import ProjectsSection from '@/components/sections/ProjectsSection'; // You can create this similarly
// import TestimonialsSection from '@/components/sections/TestimonialsSection'; // You can create this similarly
// import VisionSection from '@/components/sections/VisionSection'; // You can create this similarly
// import Navbar from '@/components/shared/Navbar';
// import ProcessSection from '@/components/sections/ProcessSection';

// const activeIndex=0
// export default function HomePage() {
//   return (
//     <><Navbar />
   
//     <ScrollManager>
//       <HeroSection isActive={activeIndex === 0} />
//       <OurStory isActive={activeIndex === 1} />
//       <ProcessSection isActive={activeIndex === 2} />
//       <ServicesSection isActive={activeIndex === 3} />
//       <ProjectsSection isActive={activeIndex === 4} />
      
//       <TestimonialsSection isActive={activeIndex === 5} />
//       <VisionSection isActive={activeIndex === 6} />
      
//       {/* Add more sections... */}
//     </ScrollManager>

//     </>
//   );
// }




//////////////

// 'use client';

// import ScrollManager from '@/components/shared/ScrollManager';
// import HeroSection from '@/components/sections/HeroSection';
// import OurStory from '@/components/sections/OurStory';
// import ServicesSection from '@/components/sections/ServicesSection';
// import ProjectsSection from '@/components/sections/ProjectsSection';
// import TestimonialsSection from '@/components/sections/TestimonialsSection';
// import VisionSection from '@/components/sections/VisionSection';
// import Navbar from '@/components/shared/Navbar';
// import ProcessSection from '@/components/sections/ProcessSection';

// export default function HomePage() {
//   return (
//     <>
//       <Navbar />
//       <ScrollManager>
//         <HeroSection />
//         <OurStory />
//         <ProcessSection />
//         <ServicesSection />
//         <ProjectsSection />
//         <TestimonialsSection />
//         <VisionSection />
//       </ScrollManager>
//     </>
//   );
// }

////////////
'use client';

import ScrollManager from '@/components/shared/ScrollManager';
import HeroSection from '@/components/sections/HeroSection';
import OurStory from '@/components/sections/OurStory';
import ServicesSection from '@/components/sections/ServicesSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import VisionSection from '@/components/sections/VisionSection';
import Navbar from '@/components/shared/Navbar';
import ProcessSection from '@/components/sections/ProcessSection';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <ScrollManager>
        <HeroSection />
        <OurStory />
        <ProcessSection />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <VisionSection />
      </ScrollManager>
    </>
  );
}
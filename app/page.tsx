import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import VideoGallery from '../components/VideoGallery'
import HowToBuySection from '../components/HowToBuySection'
import RoadmapSection from '../components/RoadmapSection'
import TeamSection from '../components/TeamSection'
import MarketingSection from '../components/MarketingSection'
import SpartaChatbot from '../components/SpartaChatbot'

export default function Home() {
  return (
    <main className="min-h-screen bg-sparta-dark">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <VideoGallery />
      <HowToBuySection />
      <RoadmapSection />
      <TeamSection />
      <MarketingSection />
      <SpartaChatbot />
    </main>
  )
} 
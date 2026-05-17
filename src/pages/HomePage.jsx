import AnnouncementBar from '../components/AnnouncementBar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedCategories from '../components/FeaturedCategories';
import BestSellers from '../components/BestSellers';
import EditorialBanner from '../components/EditorialBanner';
import Testimonials from '../components/Testimonials';
import GalleryStrip from '../components/GalleryStrip';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <FeaturedCategories />
      <BestSellers />
      <EditorialBanner />
      <Testimonials />
      <GalleryStrip />
      <Footer />
    </>
  );
}

import HeroSection from '../components/HeroSection'
import HowItWorks from '../components/HowItWorks'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

const Home = ({ isDarkMode }) => (
  <main className="font-sans bg-white text-gray-800">
    <HeroSection isDarkMode={isDarkMode} />
    <HowItWorks />
    <WhyChooseUs />
    <Testimonials/>
    <ContactForm/>
    <Footer/>
  </main>
);

export default Home;
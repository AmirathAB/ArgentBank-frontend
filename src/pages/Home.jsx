import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import FeatureItem from '../components/FeatureItem'

const features = [
  {
    img: '/img/icon-chat.webp',
    alt: 'Chat Icon',
    title: 'You are our #1 priority',
    text: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
  },
  {
    img: '/img/icon-money.webp',
    alt: 'Money Icon',
    title: 'More savings means higher rates',
    text: 'The more you save with us, the higher your interest rate will be!',
  },
  {
    img: '/img/icon-security.webp',
    alt: 'Security Icon',
    title: 'Security you can trust',
    text: 'We use top of the line encryption to make sure your data and money is always safe.',
  },
]

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <section className="features">
          <h2 className="sr-only">Features</h2>
          {features.map((feature) => (
            <FeatureItem
              key={feature.title}
              img={feature.img}
              alt={feature.alt}
              title={feature.title}
              text={feature.text}
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home

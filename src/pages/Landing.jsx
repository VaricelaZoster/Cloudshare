import React from 'react'
import HeroSection from '../components/landing/HeroSection'
import FeaturesSection from '../components/landing/FeaturesSection'
import PricingSections from '../components/landing/PricingSections'
import TestimonialsSection from '../components/landing/TestimonialsSection'
import CTASection from '../components/landing/CTASection'
import FooterSection from '../components/landing/FooterSection'
import {feature} from '../assets/data'

const Landing = () => {
  return (
    <div className="landing-page bg-linear-to-b from-gray-50 to-gray-100">
        {/* Hero Section*/}
        <HeroSection/>
        {/* Features Section*/}
        <FeaturesSection features={feature} />
        {/* Pricing Section*/}
        <PricingSections features = {feature}/>
        {/* Testimonials Section*/}
        <TestimonialsSection/>
        {/* CTA Section*/}
        <CTASection/>
        {/* Footer Section*/}
        <FooterSection/>
    </div>
  )
}

export default Landing
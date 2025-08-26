'use client'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    const fadeElements = document.querySelectorAll('.fade-in')
    fadeElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold gradient-text">METIME</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-teal-500 font-medium transition-colors">Features</a>
              <a href="#for-users" className="text-gray-700 hover:text-teal-500 font-medium transition-colors">For Users</a>
              <a href="#for-barbers" className="text-gray-700 hover:text-teal-500 font-medium transition-colors">For Barbers</a>
              <a href="#contact" className="text-gray-700 hover:text-teal-500 font-medium transition-colors">Contact</a>
            </div>
            <div className="flex space-x-4">
              <button className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 font-medium transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
              Your Perfect
              <span className="gradient-text block">Appointment</span>
              Awaits
            </h1>
            <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover and book appointments with top barbers, beauty salons, nail artists, and wellness centers. 
              Seamless booking experience for both customers and businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-teal-500 text-white px-8 py-4 rounded-full hover:bg-teal-600 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                Download App
              </button>
              <button className="border-2 border-red-500 text-red-500 px-8 py-4 rounded-full hover:bg-red-500 hover:text-white font-semibold text-lg transition-all">
                Join as Business
              </button>
            </div>
          </div>
          
          {/* Hero Image Placeholder */}
          <div className="mt-16 relative">
            <div className="bg-gradient-to-r from-teal-500 to-purple-500 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-6 min-h-[400px] flex items-center justify-center border border-gray-200">
                <div className="text-center">
                  <div className="w-32 h-32 bg-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">ME</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">App Preview</h3>
                  <p className="text-gray-800">Beautiful, intuitive booking experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose <span className="gradient-text">METIME?</span>
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              We've built the most comprehensive booking platform that benefits both customers and service providers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 fade-in card-smooth-hover">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl">📅</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Easy Booking</h3>
              <p className="text-gray-800 leading-relaxed">
                Book appointments in seconds with our intuitive interface. Choose your service, select time, and you're done!
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 fade-in card-smooth-hover">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl">⭐</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Top-Rated Providers</h3>
              <p className="text-gray-800 leading-relaxed">
                Find the best barbers, beauticians, and wellness experts in your area with verified reviews and ratings.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 fade-in card-smooth-hover">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl">💳</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Secure Payments</h3>
              <p className="text-gray-800 leading-relaxed">
                Safe and secure payment processing with multiple payment options and transparent pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Users Section */}
      <section id="for-users" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                For <span className="gradient-text">Customers</span>
              </h2>
              <p className="text-xl text-gray-800 mb-8">
                Discover a world of beauty and wellness services at your fingertips.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 fade-in">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-dark mb-2">Browse by Category</h3>
                    <p className="text-gray-800">Barbers, Beauty Salons, Nail Artists, and Wellness Centers</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 fade-in">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-dark mb-2">Real-time Availability</h3>
                    <p className="text-gray-800">See available time slots and book instantly</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 fade-in">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-dark mb-2">Track Your Appointments</h3>
                    <p className="text-gray-800">Monitor status from booking to completion with notifications</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 fade-in">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-dark mb-2">Reviews & Ratings</h3>
                    <p className="text-gray-800">Share your experience and help others find great services</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-secondary-lavender rounded-3xl p-8 fade-in">
              <div className="bg-white rounded-2xl p-6 min-h-[400px] flex items-center justify-center border border-neutral-light">
                <div className="text-center">
                  <div className="w-24 h-24 bg-secondary-coral rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl">👤</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-dark mb-2">User App Interface</h3>
                                     <p className="text-gray-800">Intuitive design for seamless booking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Barbers Section */}
      <section id="for-barbers" className="py-20 bg-secondary-lavender/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-secondary-coral to-accent-yellow rounded-3xl p-8 fade-in">
                <div className="bg-white rounded-2xl p-6 min-h-[400px] flex items-center justify-center border border-neutral-light">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-2xl">✂️</span>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-dark mb-2">Business Dashboard</h3>
                                         <p className="text-gray-800">Comprehensive management tools</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 fade-in">
              <h2 className="text-4xl font-bold text-neutral-dark mb-6">
                For <span className="gradient-text">Businesses</span>
              </h2>
              <p className="text-xl text-gray-800 mb-8">
                Grow your business with our powerful management tools and reach more customers.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 fade-in">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-dark mb-2">Appointment Management</h3>
                    <p className="text-neutral-dark/70">Approve, reschedule, or cancel appointments with ease</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 fade-in">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-dark mb-2">Staff & Service Management</h3>
                    <p className="text-neutral-dark/70">Manage your team, services, and pricing efficiently</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 fade-in">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-dark mb-2">Analytics & Insights</h3>
                    <p className="text-neutral-dark/70">Track performance and understand your business better</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 fade-in">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-dark mb-2">Holiday & Availability</h3>
                    <p className="text-neutral-dark/70">Set working hours, holidays, and staff availability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-neutral-dark mb-4">
              Service <span className="gradient-text">Categories</span>
            </h2>
            <p className="text-xl text-gray-800">
              Find the perfect service provider for your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl text-center border border-gray-200 fade-in card-smooth-hover">
              <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl">✂️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Barbers</h3>
              <p className="text-gray-800">Professional haircuts and styling</p>
            </div>

            <div className="bg-white p-6 rounded-2xl text-center border border-gray-200 fade-in card-smooth-hover">
              <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl">💅</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Beauty</h3>
              <p className="text-gray-800">Skincare, makeup, and beauty treatments</p>
            </div>

            <div className="bg-white p-6 rounded-2xl text-center border border-gray-200 fade-in card-smooth-hover">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl">💎</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Nails</h3>
              <p className="text-gray-800">Manicures, pedicures, and nail art</p>
            </div>

            <div className="bg-white p-6 rounded-2xl text-center border border-gray-200 fade-in card-smooth-hover">
              <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl">🧘</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Wellness</h3>
              <p className="text-gray-800">Massage, spa, and wellness services</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 fade-in">
            Ready to Transform Your Booking Experience?
          </h2>
          <p className="text-xl text-white/90 mb-8 fade-in">
            Join thousands of satisfied customers and business owners who have chosen METIME.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in">
            <button className="bg-secondary-coral text-white px-8 py-4 rounded-full hover-secondary-coral font-semibold text-lg shadow-lg transition-all hover:shadow-xl">
              Download App
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-primary font-semibold text-lg transition-all hover:shadow-xl">
              Join as Business
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-neutral-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold gradient-text mb-4">METIME</h3>
              <p className="text-neutral-light/70 mb-6 max-w-md">
                The ultimate booking platform connecting customers with top service providers. 
                Book your perfect appointment today.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">f</span>
                </div>
                <div className="w-10 h-10 bg-secondary-coral rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">t</span>
                </div>
                <div className="w-10 h-10 bg-accent-yellow rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">in</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">For Users</h4>
              <ul className="space-y-2 text-neutral-light/70">
                <li><a href="#" className="hover-text-primary">Download App</a></li>
                <li><a href="#" className="hover-text-primary">How it Works</a></li>
                <li><a href="#" className="hover-text-primary">Find Services</a></li>
                <li><a href="#" className="hover-text-primary">Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">For Businesses</h4>
              <ul className="space-y-2 text-neutral-light/70">
                <li><a href="#" className="hover-text-primary">Join as Business</a></li>
                <li><a href="#" className="hover-text-primary">Business Dashboard</a></li>
                <li><a href="#" className="hover-text-primary">Pricing</a></li>
                <li><a href="#" className="hover-text-primary">Resources</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-light/20 mt-12 pt-8 text-center text-neutral-light/70">
            <p>&copy; 2025 METIME. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

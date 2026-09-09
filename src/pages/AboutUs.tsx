import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export const AboutUs: React.FC = () => {
  const { toggleMobileMenu } = useApp();

  return (
    <div className="bg-background text-on-background font-body-lg min-h-screen flex flex-col selection:bg-primary-container selection:text-on-primary-container">
      {/* TopNavBar */}
      <header className="sticky top-0 w-full z-50 bg-background dark:bg-background border-b border-outline-variant transition-colors duration-300">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-container-margin-desktop py-4 md:px-container-margin-desktop px-container-margin-mobile">
          <Link className="font-headline-md text-headline-md font-bold text-primary dark:text-primary tracking-widest flex items-center gap-2 hover:opacity-80 transition-opacity" to="/">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiKq9BUXisOY3kJ7pMYSsRKncCHLZr7JpVXe_4UkF51uAuoCP37vrUMu7Zhmc4p6ZYXu1VrNLeeX-dcNO_p-9ZDUSAAU13XIDxBA6Mhs3rKDsbAzZdYvt2KRENKmzc9eAB7RCH8o5z_FbR1oBGr0VDNq1TP4KKCL05HHhqOrziTVeCHDL8pGxsj_TgCnRXn6WE_bGhaSynkeIO-I0CTGyJTffpImRKc2LaY4KDWw99XE6BJe3dPQziOND5hjzYog68gg" 
              alt="ARIA Logo" 
              className="h-8 w-auto inline-block mr-2" 
            />
            <span className="text-white">ARIA</span>
          </Link>
          <nav className="hidden md:flex items-center gap-gutter">
            <Link className="font-label-caps text-label-caps text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" to="/">Home</Link>
            <Link className="font-label-caps text-label-caps text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" to="/how-it-works">How It Works</Link>
            <Link className="font-label-caps text-label-caps text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" to="/privacy-and-safety">Privacy &amp; Safety</Link>
            <Link className="font-label-caps text-label-caps text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" to="/trust-and-recognition">Trust &amp; Recognition</Link>
            <Link className="font-label-caps text-label-caps text-primary font-bold border-b-2 border-primary pb-1 active:scale-95 transition-transform" to="/about">About Us</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link 
              to="/partner-with-us" 
              className="hidden md:inline-flex items-center justify-center font-label-caps text-label-caps bg-primary-container text-inverse-surface px-6 py-2 rounded hover:bg-primary-container/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background active:scale-95"
            >
              Partner With Us
            </Link>
            <button 
              onClick={toggleMobileMenu} 
              aria-label="Open Menu" 
              className="md:hidden text-primary focus:outline-none"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>menu</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Page Header */}
        <section className="custom-cream-bg text-surface-container-lowest py-20 px-container-margin-mobile md:px-container-margin-desktop">
          <div className="max-w-4xl mx-auto space-y-stack-md text-center">
            <h1 className="font-display-hero text-display-hero md:text-5xl text-4xl mb-6">
              Building safety that doesn't wait for you to ask for help.
            </h1>
            <p className="font-body-lg text-body-lg md:text-xl text-lg text-surface-container-highest max-w-3xl mx-auto mb-4">
              ARIA exists to address a simple but important gap in personal safety: in a real emergency, a person may not always have the time, ability, or opportunity to manually press an SOS button.
            </p>
            <p className="font-body-lg text-body-lg md:text-xl text-lg text-surface-container-highest max-w-3xl mx-auto">
              We are building ARIA as an AI-powered personal safety platform that can identify potential emergency situations using signals such as voice, movement, and contextual information, and help initiate an appropriate response.
            </p>
          </div>
        </section>

        {/* Our Journey */}
        <section className="custom-near-black-bg py-24 px-container-margin-mobile md:px-container-margin-desktop border-y border-surface-variant relative overflow-hidden">
          {/* Ambient subtle highlight */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-primary-container opacity-5 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="mb-16 max-w-3xl">
              <h2 className="font-headline-lg text-headline-lg md:text-headline-lg text-headline-lg-mobile text-primary mb-6">Our Journey</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                ARIA started as an idea focused on making emergency assistance more accessible and responsive. From the initial concept, we progressed to building an MVP, participating in innovation programs and competitions, and validating the idea through practical development.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                We are currently in the experimental/MVP stage, working toward pilot deployment and further real-world validation.
              </p>
            </div>
            {/* Timeline */}
            <div className="relative pt-10 pb-4">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-surface-variant -translate-y-1/2 z-0"></div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
                {/* Step 1 */}
                <div className="flex flex-row md:flex-col items-center md:items-start gap-4">
                  <div className="w-4 h-4 rounded-full bg-surface-variant shrink-0 relative md:ml-4">
                    <div className="hidden md:block absolute bottom-full left-1/2 -translate-x-1/2 w-px h-6 bg-surface-variant"></div>
                  </div>
                  <div className="flex-1 md:text-left">
                    <span className="font-label-caps text-label-caps text-on-surface-variant block mb-1 opacity-70">Phase 1</span>
                    <h3 className="font-body-lg text-body-lg text-inverse-surface font-medium">Idea</h3>
                  </div>
                </div>
                {/* Step 2 */}
                <div className="flex flex-row md:flex-col items-center md:items-start gap-4">
                  <div className="w-4 h-4 rounded-full bg-surface-variant shrink-0 relative md:ml-4">
                    <div className="hidden md:block absolute bottom-full left-1/2 -translate-x-1/2 w-px h-6 bg-surface-variant"></div>
                  </div>
                  <div className="flex-1 md:text-left">
                    <span className="font-label-caps text-label-caps text-on-surface-variant block mb-1 opacity-70">Phase 2</span>
                    <h3 className="font-body-lg text-body-lg text-inverse-surface font-medium">MVP Build</h3>
                  </div>
                </div>
                {/* Step 3 */}
                <div className="flex flex-row md:flex-col items-center md:items-start gap-4">
                  <div className="w-4 h-4 rounded-full bg-surface-variant shrink-0 relative md:ml-4">
                    <div className="hidden md:block absolute bottom-full left-1/2 -translate-x-1/2 w-px h-6 bg-surface-variant"></div>
                  </div>
                  <div className="flex-1 md:text-left">
                    <span className="font-label-caps text-label-caps text-on-surface-variant block mb-1 opacity-70">Phase 3</span>
                    <h3 className="font-body-lg text-body-lg text-inverse-surface font-medium">Innovation Programs &amp; Competitions</h3>
                  </div>
                </div>
                {/* Step 4 (Current) */}
                <div className="flex flex-row md:flex-col items-center md:items-start gap-4 relative">
                  {/* Highlight glow */}
                  <div className="absolute -inset-4 bg-primary-container/20 blur-xl rounded-full z-0 md:hidden"></div>
                  <div className="w-6 h-6 rounded-full custom-burgundy-bg shrink-0 relative md:ml-3 z-10 flex items-center justify-center ring-4 ring-background">
                    <div className="w-2 h-2 bg-inverse-surface rounded-full"></div>
                    <div className="hidden md:block absolute bottom-full left-1/2 -translate-x-1/2 w-px h-5 custom-burgundy-bg"></div>
                  </div>
                  <div className="flex-1 md:text-left z-10 p-4 md:p-0 bg-surface-container-low md:bg-transparent rounded-lg border border-primary-container/30 md:border-none shadow-lg md:shadow-none">
                    <span className="font-label-caps text-label-caps text-primary block mb-1">Current Stage</span>
                    <h3 className="font-body-lg text-body-lg text-primary-fixed font-semibold">Pilot Deployment (in progress)</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Founders */}
        <section className="custom-cream-bg text-surface-container-lowest py-24 px-container-margin-mobile md:px-container-margin-desktop">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="font-headline-lg text-headline-lg md:text-headline-lg text-headline-lg-mobile text-surface-container-lowest mb-2">The Founders</h2>
            <p className="font-body-md text-body-md text-surface-container-highest mb-12">ARIA is being built by:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 mb-12">
              {/* Founder 1 */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 shadow-md">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLzKZNLlqnCYNQhG-SLY2sIMcqLLz8xTAj7M_-UOU13HkcZmThY6gFaSqB0t5-IL4LmuurcT9ogC5T1IS3wYXuuQb8RRD0WpPimhM4Lg7wqXckwqEVaGOOyQjWfBPeDs6sR3myHH2bdE5Wfmy2kAXa2PZyEtg9CpKxsTLqqDIQh8X1bKscn2eG6lmIrfHtJTopRVFDHv0XCqFvIiMKK2aJOMTEDFCek8_Z3zVjR-86EDd_DjEA1d5Ohn-df_u0DClA2Q" 
                    alt="Durgesh Sharma" 
                    className="w-full h-full object-cover" 
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
                <h3 className="font-body-lg text-body-lg font-semibold">Durgesh Sharma</h3>
              </div>
              {/* Founder 2 */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 shadow-md">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6M_iDnOXxVp18c4X5VzlgW7Guz0gyjQlMMrc8errkZ9qsbwFyDwKArWAQCcSBNG61YWBeWuOJZlO0fuY0mPV7WJswGM6sViHjj_AMb36lKGa5opMGpRmU7Zbl4odw0pQ5Ai8mHT1cQnJmRS8MwlBFmIhM9rLrVLV_AH51AMOfxsUM-y4GylhwZZsq6ZV0zdGCyoa9n7yml02GI3LjWkVCDx2x75ywrr3b3B-7sCzqWrma5HMXShrf9sZag5qSKDhoyA" 
                    alt="Anushka Singh" 
                    className="w-full h-full object-cover" 
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
                <h3 className="font-body-lg text-body-lg font-semibold">Anushka Singh</h3>
              </div>
              {/* Founder 3 */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 shadow-md">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuASxdX69hcZBiSPUUe6vthSmVUwO5Iq-5DR4gS04Md8hlvGeE7zjQfC9yHl3gCcFZTXnxQelnaDq765M2JYZRZlNDtdI6gDJH4MuhmRyFwM0V_-6h420lO2863p_U4_D4YHV__h5pf68Nkspl_Wnwg_tZQRuL3b9Lf82RExHDnPjs8k9SZ9AQvDcH1xaf4-iEOygd0yvpBvfcQSKXXMgWPb2cBcXm8qeKGP8HOZcjK_YUcSUDOHX2kN3if40Kac__xjpg" 
                    alt="Khushi Rathore" 
                    className="w-full h-full object-cover" 
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
                <h3 className="font-body-lg text-body-lg font-semibold">Khushi Rathore</h3>
              </div>
              {/* Founder 4 */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 shadow-md">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuATQ6CLtTzMkxkv15IuLojJp3Onr3lROXBaA6UF_NEiAtWHHnFQP13vHGH6BH9EbK_AcrYD8scJsJ5kKlnD0-GfQTObkPq268MDdVHA8slPYqIQd8ciecfWD5IpQF72iyNfPYUuh9SOd_HeYn2yPFpECZ5njIU0zcTttyc6mmwKe8_hILF-d6IF3lpGPb9ZTJOb7eneUybLCZWXpl2MwHa0gZ_TikSJRWpJHcErEsCrd29_N6pz-sQhma2K949cULP6tQ" 
                    alt="Kaustav Halder" 
                    className="w-full h-full object-cover" 
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
                <h3 className="font-body-lg text-body-lg font-semibold">Kaustav Halder</h3>
              </div>
            </div>
            <p className="font-body-md text-body-md text-surface-container-highest max-w-2xl mx-auto italic">
              "We are a student-led founding team combining interests in technology, AI, product development, and entrepreneurship."
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-outline-variant">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-container-margin-desktop py-stack-lg gap-8 md:gap-0">
          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="font-headline-md text-headline-md text-primary dark:text-primary tracking-widest font-bold">ARIA</span>
            <span className="font-body-md text-body-md text-on-surface-variant text-sm text-center md:text-left">
              © 2026 ARIA Safety Intelligence. All rights reserved.
            </span>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-4">
            <Link className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200" to="/">Home</Link>
            <Link className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200" to="/how-it-works">How It Works</Link>
            <Link className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200" to="/how-it-works">Features</Link>
            <Link className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200" to="/trust-and-recognition">Trust</Link>
            <Link className="font-label-caps text-label-caps text-primary hover:text-primary transition-colors duration-200" to="/partner-with-us">Contact</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
};

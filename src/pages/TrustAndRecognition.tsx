import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export const TrustAndRecognition: React.FC = () => {
  const { toggleMobileMenu } = useApp();

  return (
    <div className="bg-background text-on-background antialiased min-h-screen flex flex-col font-body-md">
      {/* TopNavBar */}
      <nav className="bg-background dark:bg-background sticky top-0 w-full z-50 transition-all duration-300">
        <div className="flex justify-between items-center px-container-margin-desktop py-stack-sm max-w-[1280px] mx-auto bg-surface-container dark:bg-surface-container">
          {/* Brand */}
          <Link className="font-headline-md text-headline-md font-bold dark:text-primary flex items-center gap-2" to="/">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc9H6ZddK73Bsc6GQY0CY3er_s0w051PCg9VpA1WsAvLvZWbae1IdN6FRdsBvgdLkIt08oneNcm9tnsLaV5gydjqzPs0qzCp5SfroPdoB2eQMc304rznvtRGfLdHoEozVUzgJ2JioaiiudYS0TDvvkfWtlXT1I3Qua80vWnPkJp4zGLmSW5F_ybrc3t3cNl2iDe3VKDTYqKkaA-trAO3YFnQ9_Q21S8L9vFNnJvtHdygngDTxQVmujFHJXO7FLgq3PWQ" 
              alt="ARIA Logo" 
              className="h-8 w-auto object-contain" 
            />
            <span className="text-on-surface">ARIA</span>
          </Link>
          {/* Links (Desktop) */}
          <div className="hidden md:flex items-center gap-gutter">
            <Link className="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary transition-colors duration-200" to="/">Home</Link>
            <Link className="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary transition-colors duration-200" to="/how-it-works">How It Works</Link>
            <Link className="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary transition-colors duration-200" to="/privacy-and-safety">Privacy &amp; Safety</Link>
            <Link className="font-body-md text-body-md text-primary dark:text-primary border-b-2 border-primary pb-1 scale-95 transition-transform duration-150" to="/trust-and-recognition">Trust &amp; Recognition</Link>
            <Link className="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary transition-colors duration-200" to="/about">About Us</Link>
          </div>
          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link 
              to="/partner-with-us" 
              className="hidden md:inline-flex bg-primary-container text-on-primary-container font-label-caps text-label-caps px-4 py-2 rounded transition-colors hover:bg-opacity-90"
            >
              Partner With Us
            </Link>
            <button 
              onClick={toggleMobileMenu} 
              aria-label="Open menu" 
              className="md:hidden text-on-surface p-1"
            >
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Canvas */}
      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-cream py-stack-lg px-container-margin-desktop text-center">
          <div className="max-w-3xl mx-auto">
            <span className="font-label-caps text-label-caps text-burgundy tracking-widest uppercase mb-4 block">TRUST &amp; RECOGNITION</span>
            <h1 className="font-display-hero text-display-hero text-surface-container-lowest mb-6">Backed by Real Recognition, Real Results</h1>
            <p className="font-headline-md text-headline-md text-surface-variant font-normal leading-relaxed">ARIA has been validated through hackathons, competitions, and builder communities as it progresses from concept to pilot.</p>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-stack-lg px-container-margin-desktop max-w-[1280px] mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-on-background mb-stack-md">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Card 1 */}
            <div className="bg-surface-container-high rounded p-6 border border-outline-variant hover:border-primary transition-colors flex flex-col h-full">
              <div className="bg-surface-container-low rounded h-32 flex items-center justify-center mb-6">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCmzC3M--bqQrcSrHLIHChp4ownC5cAocmn17ftYSPSE3M0w2ukNgKDS0P99Pl3vpGsKcyw09Drwx7aY3lOZP_av_o4J9wSXOZ6STHiwwp_Gde9TnevpPYXRoYazB5X90UwGNWaCnb6b8ALZzEAgzWzqrv3jdFOb85VOsOxXq7uuVqEI0lUrSGWKri-OE7STKjfZcMJxGSzo2P5FwuIETYhDcmAyQ20HF6yoR59tgv2iHh9e-gWdLZJ5ylHFGbSeZm2tNSUpZsTjDhPw" 
                  alt="AIC-MUJ Logo" 
                  className="h-full w-auto object-contain" 
                />
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Global Rank 6–25&nbsp; HACKHAZARDS '26</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">ARIA, built by team Kasukabe Defence Group, placed among the top 25 teams — the top 1% of builders — at HACKHAZARDS '26, an international hackathon hosted by the NAMESPACE community.</p>
              <div className="font-label-sm text-label-sm text-tertiary-fixed-dim uppercase tracking-wider mt-auto">Organized by NAMESPACE</div>
            </div>
            {/* Card 2 */}
            <div className="bg-surface-container-high rounded p-6 border border-outline-variant hover:border-primary transition-colors flex flex-col h-full">
              <div className="bg-surface-container-low rounded h-32 flex items-center justify-center mb-6">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQjUM7RPlMS5hpC9HKpT4CZOiCLRG9DLZ6swdv1Y6I619xnQW4ZDAHx1EsAfvuI5DvaoiwvBzgkNoeC6mglsHTJxMwF6vmMUGIKhODJNNo7tY-HIZaRnle-guQcRoQank3PoMuxnp5fwDrF0OohErd_A1mPrON381iDqjBcKcUKq1u6cVJuM6ZyIuWCzcTX_ZOojq_okF4D41Yh9lVehf5Xi_F1vZDixb7mRxaM7Eo1ybW4tk5f0pOM-xuwT6l0M4Osw" 
                  alt="Code Capital and Coffee Logo" 
                  className="h-full w-auto object-contain" 
                />
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Top 100 Nationally&nbsp;<div>Code Capital and Coffee</div></h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">ARIA ranked in the top 100 out of 3,000+ participants in a national buildathon hosted by Code Capital and Coffee, validating the technical architecture.</p>
              <div className="font-label-sm text-label-sm text-tertiary-fixed-dim uppercase tracking-wider mt-auto">National Buildathon</div>
            </div>
            {/* Card 3 */}
            <div className="bg-surface-container-high rounded p-6 border border-outline-variant hover:border-primary transition-colors flex flex-col h-full">
              <div className="bg-surface-container-low rounded h-32 flex items-center justify-center mb-6">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_sUmhGZDqMgjBB0t3RX3ts0eKU3s6C1RUoHCHLys3ORmP1Yj8wF4A2HZLq4kobSEIXs1Ns8o0tBUbdl-b8hcp6HhoGqEmBldSMwm76t9CDQkqrH22e47T3L1bVv0ImsQhVfhhPCBFwhlLYfTn4deDoRE1Zl6GvC7HCqpKo08zMlzEw8nHenrAUgov2ftZATkxrP-DqlloUcvk-V33P7Sn8f8XWCKAfpDipINGF7tVeaaArJerSq5ZCcVnZ8YdwzSYwQ" 
                  alt="AIC-MUJ Logo" 
                  className="h-full w-auto object-contain" 
                />
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Selected for Pre-Incubation AIC-MUJ</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">ARIA was selected for the Pre-Incubation Program at AIC-MUJ. The team is now working to test, refine, and scale the idea into a viable, real-world solution.</p>
              <div className="font-label-sm text-label-sm text-tertiary-fixed-dim uppercase tracking-wider mt-auto">Atal Incubation Centre, Manipal University Jaipur</div>
            </div>
          </div>

          {/* Gallery Strip with updated 3rd image from new HTML */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-base">
            <div 
              className="bg-cover bg-center w-full h-64 rounded bg-surface-container border border-outline-variant" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAta7jubA5HYHtSr48Ak8zZMs-y-Lhsz125pHi9Zt2rHqugVe71ZejpVXPW-I0nXqe1-_htDlWjiGEYrd-OQaLCPppbRJB2t5_bPErHGq29KJI03NIwYnXyBWvHkOt-qTJcz0ChWSzzYGpXxhRwLug80pKkGyvWpqmsF7U4wXVpgOINmY050W2NH37shTCsb7-VVQpIjPmGXGiLtpqLOxFpGTgrxDk_WQS_wVtOofeFwhOx4bFTQ3dG9jbQcWtCCzYAJLLgaHdTPhDrQw")' }}
            />
            <div 
              className="bg-cover bg-center w-full h-64 rounded bg-surface-container border border-outline-variant" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBEtsoWc4aqDS9CnJsfPwpG1gVyJSHR09bZg6B_iUzdqbnHmxknMyB0CWWbJRua0rT5Y3PMsbR41uc1a1dLlvtpc9Ht1ajMAFRHMUIxMHcjilqx4HgkXeBUFoKG6Jkd_oN6J1segGTA_XxBu9keriqPAGxiDe7fuIW-C2krIaeYT6sdzJ5BNBjDsuJ5veZ3APAnlQPfXqsiqd9n6HQeQW6zrwA8qHcnQTaNwKcFbThBwyHLPADm_flwL-VjD7n4OPGwG7ycqPJQ7aNmdg")' }}
            />
            <div 
              className="bg-cover bg-center w-full h-64 rounded bg-surface-container border border-outline-variant" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA1DYCzmg3UQoKAhkaNDinj-T_vWYiil8VwJIlnIDFHy-ijrdT7qbYh6iHeHWE9h_Xm_yEYuEHx7_veliabN17qpD421v8dU4smWkFnaQysd8aSFFyjGck4LHJed39A2pYtQ78z-t_U8P2odjq7-TkbETaQ0VxAqYpI1i6J_3PRalc05ZItjhVHTWzuv-SvFgVh-bVe6dgCe3h5tIrxDZ6G-MtVcGJhVOGAO3UQjHSdwHHTFpMJtaJgFZbMVkJbj56JRV3-nCxZv8Ya3g")' }}
            />
          </div>
        </section>

        {/* Inspiration Section with updated founder portraits from new HTML */}
        <section className="py-stack-lg border-t border-outline-variant">
          <div className="px-container-margin-desktop max-w-[1280px] mx-auto text-center mb-16">
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-4 block">IN THEIR OWN WORDS</span>
            <h2 className="font-display-hero text-display-hero text-on-background mb-4">Why We're Building ARIA</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant italic">A single quiet line noting these are the founders' own words on what drove them to start ARIA.</p>
          </div>

          {/* Row 1 - Anushka */}
          <div className="bg-surface-container py-16 px-container-margin-desktop">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
              <div 
                className="bg-cover bg-center w-full h-80 md:h-[400px] rounded shadow-lg border border-outline-variant order-2 md:order-1" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDLsNojjfUmHEagFK1p_ZWG-TUCmajwzZt7rPxdveYDYWhWW0YErCo4CFPMPxy3bUzlIf_Hpa79pjbMWCBgOWueNlJeWoulr8OImpqLbI73ayV_KefYQtllj1txU8oYCafqzS2Q7Uzz468WFMYfb_hhRAlJcb2tXNUZflC2bp7QwqrGdy4sYF121jvLEmSooQ_n0UoCIEwtYWRXRbtO1ZLxn0-mjpEjpXVnmP_po9OFTbTveTXA_89E0sn2g9LfJcX_KJg-HSUdMD0r6Q")' }}
              />
              <div className="order-1 md:order-2 pl-0 md:pl-8">
                <span className="text-6xl text-primary opacity-20 font-serif leading-none absolute -mt-6 -ml-4">"</span>
                <p className="font-headline-md text-headline-md text-on-surface mb-6 relative z-10">There's something deeply unsettling about how quickly a few seconds can change someone's entire life. We spend so much time preparing for what could happen, without ever thinking about what happens when preparation isn't enough. Those are the seconds that made ARIA feel worth building.</p>
                <p className="font-label-caps text-label-caps text-primary">— Anushka</p>
              </div>
            </div>
          </div>

          {/* Row 2 - Durgesh */}
          <div className="bg-surface-container-low py-16 px-container-margin-desktop">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
              <div className="pr-0 md:pr-8">
                <span className="text-6xl text-primary opacity-20 font-serif leading-none absolute -mt-6 -ml-4">"</span>
                <p className="font-headline-md text-headline-md text-on-surface mb-6 relative z-10">There's a moment when an ordinary situation can turn into an emergency and there's often no time to think twice. I wanted to build something that could understand those moments and help before it's too late. That idea became ARIA.</p>
                <p className="font-label-caps text-label-caps text-primary">— Durgesh</p>
              </div>
              <div 
                className="bg-cover bg-center w-full h-80 md:h-[400px] rounded shadow-lg border border-outline-variant" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDWyD-whMXQvyOYIb5pn_xOwufXhRq0kkW0hRLSkLStPKm_8DFR389rWQyhzCmljqNlSVOhqv3HdJyR1mqoS2d03VSsqFm0rUydbBidbpne5kVCsgPHXEdIYLfoxjadP9r8XiWsAcFrQRHsKUK34aVzQQ7jwK2WLLUaa-llFNiiRz92hcmdpuDpNcUrypB1ffR0SX9SjOYe2UQpblyASWwqOISkSfgHN4SiLlaFNyyjEupHzxCSVgaylVNKf9Lu9o1c-q3drF13ZeWnkw")' }}
              />
            </div>
          </div>

          {/* Row 3 - Kaustav */}
          <div className="bg-surface-container py-16 px-container-margin-desktop">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
              <div 
                className="bg-cover bg-center w-full h-80 md:h-[400px] rounded shadow-lg border border-outline-variant order-2 md:order-1" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAJEgdCC1S6AOacpiPx6XmWIlf8B-81hF8NWYlgKZ12Ss1efp1_WoIrwoyrmOOxQHiFQsaEPOkmo_1p9ZmgQ3GRmfelCnlMkBGGZyMT4y7tk-tDLXz04DWGnE95URaYUiSc3IAL12_7BaOkJ6nkFcYSkvjOEI15i9EU2pgz3fN8sDQYF5lMyEVK8Mhqu7IihY2oSuM6o9uM9O3GMEr5k_6uX8IFShobBGGwVMBgCu9xhuoLGEOuo2gy_lo1ksQpmEpZMEfPp58jvxHKRw")' }}
              />
              <div className="order-1 md:order-2 pl-0 md:pl-8">
                <span className="text-6xl text-primary opacity-20 font-serif leading-none absolute -mt-6 -ml-4">"</span>
                <p className="font-headline-md text-headline-md text-on-surface mb-6 relative z-10">Women's safety is always a primary concern in India, and it was this very concern that sparked the idea of ARIA. We envisioned a technology-driven safety solution that could help women respond to emergencies faster, access timely assistance, and feel safer in their everyday lives. With ARIA, our aim is to turn technology into a reliable companion when safety matters the most.</p>
                <p className="font-label-caps text-label-caps text-primary">— Kaustav</p>
              </div>
            </div>
          </div>

          {/* Row 4 - Khushi */}
          <div className="bg-surface-container-low py-16 px-container-margin-desktop">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
              <div className="pr-0 md:pr-8">
                <span className="text-6xl text-primary opacity-20 font-serif leading-none absolute -mt-6 -ml-4">"</span>
                <p className="font-headline-md text-headline-md text-on-surface mb-6 relative z-10">I built ARIA because personal safety should not depend on someone noticing a danger at the right moment or knowing what to do during a crisis. I wanted to create something that could actively understand situations, identify potential risks, and help people respond faster when it matters most.</p>
                <p className="font-label-caps text-label-caps text-primary">— Khushi</p>
              </div>
              <div 
                className="bg-cover bg-center w-full h-80 md:h-[400px] rounded shadow-lg border border-outline-variant" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAEnFv_fdWwvArc7zdFMhtAKLnNm6TOf2ZKEKAVz_al7BlYpCLjQ_pUy4kR8gGASAh9x_-7pHAocKonEX0rG60HA0sAJ432nGMyrSs_LNO1DPYfG3KLo_jUw1O8GYcZAN1TiKuMUFrGEJK-HSswabD1jy7Xvm88eN4sdR4N1iA7Bgd3Mz9BL3kTjbIrEgarJFG8CJSrB420I9S7nWa6F43OJUZ2YLAxd2tqVzRGvLrOJlQaYrIsOsEGK97USyAgRcclks1KI-JXPNANcQ")' }}
              />
            </div>
          </div>

          <div className="text-center py-12 px-container-margin-desktop">
            <div className="font-headline-lg text-headline-lg text-on-surface">
              <br />
              <div>Four different reasons. One shared mission.</div>
            </div>
          </div>
        </section>

        {/* Institutional Support */}
        <section className="py-stack-lg px-container-margin-desktop max-w-[1280px] mx-auto border-t border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase text-center mb-8">Supported By</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
            <img 
              alt="Partner Logo" 
              className="h-12 object-contain" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuArDauw2mrENcL0J2omN_xww6Ql0SLqpJCeGtLKVwRcbMnZYGLK1O24_giQfG1lEbr0GgDPeHW0TZMMF-HplPc_H_yBOWoel3ThaXszcVXqef4n4ROio3qkl3HhkKJZU5jRdhf1fE_5mXJ2EYRDQdMvsD3yCcLdxRCiglGq2PuyDGOssgpxi2NFLgDsr1WJK4rRsTyOsk3Ssis3dH-6OfbEIIeaK_Fsrw2q8tBQkr4MX5myHZuTbQhT6f-ar1TjOW51fUrsXakwk1lRIg" 
            />
            <img 
              alt="Partner Logo" 
              className="h-12 object-contain" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQDQGWIX3gH__AqI1YzBwpYwEt0hEuYteoOcGOA_wDIn47RcZdahnX5PjNpGYyZ5hfsx3XApxAHXXdn84l7VcqL1PRzi3xL3PZeDU_8v87SfAxiD8Sg3Z8GAW4Qn8PRnqY35VQpiTSt8DESj_MssjAPfnZ3HKdV9aOz4Xk05HO1X5ASdXwg1JHam8CUri5_2qqfDy85goarhXEANKMz0vfI3YKdVaNaeqLWJCs8cx9HBv3UXzCSQIowhqJRTpXH4VaxiJVdKqYY5ENyQ" 
            />
            <img 
              alt="Partner Logo" 
              className="h-12 object-contain" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDILWJL2y_9TzHoLqo-LMYZJFtaPYZOUkiuAo68nAWMzYW5yAjtrsLW2uKHweK-Y94cyLVPpqDevSsl0IN-s4Gwbmq_Cz2svjf8IK6er9H2mV1sYui4tdEVTG_q-O6gXa20ZTahic5130lb2FJAQzHs8XrDKpUWu7A3EenypXM62YoByuUWmaUcJeYF-m_FN7kRgHV8Hr4sGTOg5x_ULK4DuXS1dldZ1Pn7LDdLshcfegw1yuIRn7j1OXgWoNxqzTyKqcj9J0psAr631w" 
            />
            <img 
              alt="Partner Logo" 
              className="h-12 object-contain" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhjF8k8luoRTvR2QFxLl04HX3GFirtaKbP4xnfR-UqwEtTBizKlY0cySlkK9MRAfc_TPvaFl1-FHGYlIny7g3ppVt1CqvtCL0km9KH6BnusQM3GVGQjhTTYBdAO_C9_5aWxAo9bEP_yWFtRJ_xH0ZjB7VlU8st3aeZyH56_k0jeQxCy3onUZsiVNxKAdTiVejoksI1P42cXC6xiOWFV2cIZbbYCW7BNUeZH0qtVoDEHllq655-88C3VSfrBm4AouDsnuF52gsWi5OZqw" 
            />
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[#0C0A0B] py-24 px-container-margin-desktop text-center border-t border-outline-variant">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display-hero text-display-hero text-on-surface mb-6">Join the Mission</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">We are actively seeking partners, mentors, and integration opportunities to scale ARIA's impact.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link to="/partner-with-us" className="bg-primary-container text-on-primary-container font-label-caps text-label-caps px-8 py-4 rounded hover:bg-opacity-90 transition-colors">
                Partner With Us
              </Link>
              <Link to="/partner-with-us" className="font-label-caps text-label-caps text-primary border-b border-transparent hover:border-primary pb-1 transition-colors">
                Contact the Team
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-outline-variant w-full mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-container-margin-desktop py-stack-lg max-w-[1280px] mx-auto">
          {/* Brand & Copyright */}
          <div className="flex flex-col gap-4">
            <span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary">ARIA</span>
            <span className="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant">© 2026 ARIA Safety Intelligence. All rights reserved.</span>
          </div>
          {/* Links Column 1 */}
          <div className="flex flex-col gap-3">
            <span className="font-label-caps text-label-caps text-on-surface dark:text-on-surface mb-2">LEGAL</span>
            <Link className="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary transition-colors duration-200" to="/privacy-and-safety">Privacy Policy</Link>
            <Link className="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary transition-colors duration-200" to="/privacy-and-safety">Terms of Service</Link>
          </div>
          {/* Links Column 2 */}
          <div className="flex flex-col gap-3">
            <span className="font-label-caps text-label-caps text-on-surface dark:text-on-surface mb-2">SUPPORT</span>
            <Link className="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary transition-colors duration-200" to="/privacy-and-safety">Security Standards</Link>
            <Link className="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary transition-colors duration-200" to="/partner-with-us">Contact Support</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

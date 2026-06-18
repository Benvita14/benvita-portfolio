import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import "./styles.css";
function Icon({ name, className = "h-4 w-4" }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  };

  if (name === "x") {
    return (
      <svg {...common}>
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg {...common}>
        <rect width="18" height="18" x="3" y="3" rx="5" />
        <circle cx="12" cy="12" r="3.2" />
        <path d="M17.5 6.5h.01" />
      </svg>
    );
  }

  if (name === "mail") {
    return (
      <svg {...common}>
        <rect width="18" height="14" x="3" y="5" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );
  }

  if (name === "palette") {
    return (
      <svg {...common}>
        <path d="M12 22a10 10 0 1 1 10-10 3 3 0 0 1-3 3h-1.4a2 2 0 0 0-1.4 3.4l.2.2A2 2 0 0 1 15 22Z" />
        <circle cx="7.5" cy="10.5" r=".5" />
        <circle cx="12" cy="7.5" r=".5" />
        <circle cx="16.5" cy="10.5" r=".5" />
      </svg>
    );
  }

  if (name === "sparkles") {
    return (
      <svg {...common}>
        <path d="m12 3-1.9 5.1L5 10l5.1 1.9L12 17l1.9-5.1L19 10l-5.1-1.9Z" />
        <path d="M5 3v4" />
        <path d="M3 5h4" />
        <path d="M19 17v4" />
        <path d="M17 19h4" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

const works = [
  {
    title: "Arcadia Luxury System",
    category: "Branding & Identity",
    image: "/works/arcadia-luxury-branding.png",
    span: "lg:col-span-2",
    frame: "wide",
    fit: "contain",
    note: "Luxury fragrance identity system with packaging, typography, palette, and refined campaign assets."
  },
  {
    title: "Aurelia Skincare Campaign",
    category: "Social Media Design",
    image: "/works/aurelia-skincare-social-kit.png",
    span: "lg:col-span-2",
    frame: "wide",
    fit: "contain",
    note: "A complete skincare social carousel with product benefits, ingredients, ritual flow, and soft luxury styling."
  },
  {
    title: "Aurum Eau de Parfum",
    category: "Product Visual",
    image: "/works/aurum-perfume-product-visual.png",
    span: "lg:row-span-2",
    frame: "poster",
    fit: "contain",
    note: "Cinematic perfume visual with premium gold lighting, glass detail, and dramatic commercial atmosphere."
  },
  {
    title: "Fire & Flame Campaign",
    category: "Social Media Design",
    image: "/works/fire-flame-social-campaign.png",
    span: "lg:col-span-2",
    frame: "wide",
    fit: "contain",
    note: "Bold fast-food campaign system built for high-impact promos, product appetite appeal, and energetic social posts."
  },
  {
    title: "Aurelia Serum Poster",
    category: "Product Visual",
    image: "/works/aurelia-serum-product-poster.png",
    span: "lg:row-span-2",
    frame: "poster",
    fit: "contain",
    note: "Elegant beauty poster concept with luminous serum styling, refined typography, and soft editorial composition."
  },
  {
    title: "Point Coffee Social Kit",
    category: "Social Media Design",
    image: "/works/point-coffee-social-kit.png",
    span: "lg:col-span-2",
    frame: "wide",
    fit: "contain",
    note: "Coffee brand social media grid covering promotions, product shots, menu recommendation, and testimonial content."
  },
  {
    title: "Aura Beauty Guidelines",
    category: "Branding & Identity",
    image: "/works/aura-brand-identity.png",
    span: "lg:col-span-2",
    frame: "wide",
    fit: "contain",
    note: "Soft premium skincare identity board with logo system, colors, typography, and packaging direction."
  },
  {
    title: "Kin & Oak Coffee Co.",
    category: "Branding & Identity",
    image: "/works/kin-oak-brand-system.png",
    span: "lg:col-span-2",
    frame: "wide",
    fit: "contain",
    note: "Warm coffee-house identity with logo system, stationery, packaging, cups, business cards, and branded goods."
  },
  {
    title: "Void Collective Streetwear",
    category: "Branding & Identity",
    image: "/works/void-collective-streetwear.png",
    span: "lg:col-span-2",
    frame: "wide",
    fit: "contain",
    note: "Monochrome streetwear identity covering apparel graphics, hang tags, packaging, and brand presentation."
  },
  {
    title: "Luna Lumiere Launch",
    category: "Campaign Design",
    image: "/works/luna-lumiere-campaign.png",
    span: "lg:col-span-2",
    frame: "wide",
    fit: "contain",
    note: "Beauty launch campaign visual with clean composition, product emphasis, and refined skincare messaging."
  },
  {
    title: "Aqua Lumina Hydration",
    category: "AI Product Visual",
    image: "/works/aqua-lumina-ai-product.png",
    span: "lg:col-span-2",
    frame: "wide",
    fit: "contain",
    note: "Fresh hydration serum concept with dynamic water motion and bright commercial product styling."
  },
  {
    title: "Brasov Botanical Fragrance",
    category: "AI Product Visual",
    image: "/works/brasov-perfume-product-visual.jpeg",
    span: "lg:row-span-2",
    frame: "poster",
    fit: "contain",
    note: "Botanical perfume product concept with green atmosphere, motion leaves, and natural freshness."
  },
  {
    title: "Hoka Neon Product Concept",
    category: "AI Product Visual",
    image: "/works/hoka-shoe-ai-product.jpeg",
    frame: "landscape",
    fit: "cover",
    note: "Energetic shoe product concept using neon geometry, motion, and digital campaign styling."
  },
  {
    title: "Braven Roll-On Fresh",
    category: "Product Photography",
    image: "/works/braven-rollon-product-photo.jpeg",
    span: "lg:row-span-2",
    frame: "poster",
    fit: "contain",
    note: "Clean personal-care product photo with soft lifestyle styling, fresh tones, and balanced negative space."
  },
  {
    title: "Burger & Fries Hero",
    category: "Product Photography",
    image: "/works/burger-product-photography.png",
    span: "lg:col-span-2",
    frame: "wide",
    fit: "cover",
    note: "Restaurant product photography with strong appetite appeal, warm ambience, texture, and cinematic food styling."
  },
  {
    title: "Pistachio Rose Dessert",
    category: "Product Photography",
    image: "/works/icecream-product-photography.png",
    span: "lg:col-span-2",
    frame: "wide",
    fit: "cover",
    note: "Soft dessert product photo with gentle daylight, tactile styling, and premium culinary presentation."
  }
];

const categories = ["All", ...Array.from(new Set(works.map((work) => work.category)))];

const services = [
  ["AI Visual Design", "sparkles"],
  ["Graphic Design", "palette"],
  ["Product Photography", "arrow"],
  ["Branding & Identity", "sparkles"],
  ["Social Media Design", "palette"],
  ["Creative Direction", "arrow"]
];

const process = [
  ["01", "Concept Direction", "Tone, message, references, and narrative intention are shaped into a precise visual direction."],
  ["02", "Visual Experimentation", "AI, design systems, composition, color, and texture are explored until the image starts breathing."],
  ["03", "Final Cinematic Polish", "Every highlight, shadow, crop, and finish is refined for a premium client-ready result."]
];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

function SectionIntro({ kicker, title, children }) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      variants={fadeUp}
    >
      <p className="mb-4 text-xs uppercase tracking-[0.42em] text-champagne">{kicker}</p>
      <h2 className="font-display text-4xl font-medium leading-none text-platinum md:text-6xl">{title}</h2>
      {children && <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-smoke">{children}</p>}
    </motion.div>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 180]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-noir px-5">
      <motion.div className="cinema-field" style={{ y }} />
      <div className="scanline" />
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between py-8 text-xs uppercase tracking-[0.32em] text-mercury">
        <a href="#top" className="text-platinum">BENVITA</a>
        <div className="hidden gap-8 md:flex">
          <a href="#works">Works</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <div id="top" className="relative z-10 mx-auto flex min-h-[calc(100vh-96px)] max-w-7xl items-center">
        <motion.div
          className="max-w-5xl pb-20 pt-10"
          initial={{ opacity: 0, y: 44 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-7 text-sm uppercase tracking-[0.42em] text-champagne">Modern cinematic visual studio</p>
          <h1 className="font-display text-[18vw] font-medium leading-[0.78] tracking-normal text-platinum md:text-[13vw] lg:text-[10.5rem]">
            BENVITA
          </h1>
          <p className="mt-8 max-w-3xl text-lg uppercase tracking-[0.22em] text-mercury md:text-2xl">
            Visual Creator • AI Artist • Creative Director
          </p>
          <p className="mt-8 max-w-2xl text-base leading-8 text-smoke md:text-lg">
            Cinematic visuals, graphic systems, product imagery, and digital stories crafted with emotional precision.
          </p>
          <a
            href="#works"
            className="group mt-11 inline-flex items-center gap-3 border border-white/20 bg-white/[0.06] px-7 py-4 text-xs uppercase tracking-[0.32em] text-platinum backdrop-blur-xl transition hover:border-champagne/70 hover:bg-champagne/10"
          >
            View Works
            <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  const [portraitReady, setPortraitReady] = useState(true);

  return (
    <section id="about" className="relative overflow-hidden bg-ink px-5 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          className="portrait-frame"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {portraitReady && (
            <img
              src="/portrait.jpg"
              alt="BENVITA portrait"
              className="portrait-photo"
              onError={() => setPortraitReady(false)}
            />
          )}
          {!portraitReady && (
          <div className="portrait-placeholder">
            <span>Portrait</span>
            <small>Place your photo at public/portrait.jpg</small>
          </div>
          )}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-5 text-xs uppercase tracking-[0.42em] text-champagne">About Me</p>
          <h2 className="font-display text-5xl font-medium leading-[0.95] text-platinum md:text-7xl">
            Emotion, technology, and story in one frame.
          </h2>
          <p className="mt-8 max-w-2xl text-xl leading-9 text-mercury">
            “I create cinematic visuals that blend emotion, technology, and storytelling into modern digital experiences.”
          </p>
          <p className="mt-7 max-w-xl text-base leading-8 text-smoke">
            BENVITA moves between direction and detail, shaping visuals that feel intentional, atmospheric, and ready for brands that need a stronger visual presence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedWorks() {
  const featuredLayout = ["md:col-span-8 md:row-span-2", "md:col-span-4", "md:col-span-4"];

  return (
    <section id="works" className="bg-noir px-5 py-24 md:py-32">
      <SectionIntro kicker="Featured Works" title="Signature case studies">
        A premium edit of your strongest work across identity, social content, and cinematic product visuals.
      </SectionIntro>
      <div className="mx-auto grid max-w-7xl auto-rows-[320px] gap-5 md:grid-cols-12">
        {works.slice(0, 3).map((work, index) => (
          <motion.article
            key={work.title}
            className={`group relative min-h-[420px] overflow-hidden border border-white/10 bg-white/[0.03] shadow-card md:min-h-0 ${featuredLayout[index]}`}
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: index * 0.08 }}
          >
            <div className="artwork-stage featured-stage">
              <img src={work.image} alt={work.title} className={`artwork-image ${work.fit === "cover" ? "is-cover" : "is-contain"}`} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
              <span className="mb-4 inline-flex border border-white/15 bg-black/40 px-3 py-2 text-[0.65rem] uppercase tracking-[0.25em] text-champagne backdrop-blur">
                {work.category}
              </span>
              <h3 className="font-display text-3xl leading-none text-platinum md:text-4xl">{work.title}</h3>
              <p className="mt-4 max-w-lg text-sm leading-7 text-mercury">{work.note}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function PortfolioGallery() {
  const [active, setActive] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredWorks = activeCategory === "All" ? works : works.filter((work) => work.category === activeCategory);

  return (
    <section className="bg-ink px-5 py-24 md:py-32">
      <SectionIntro kicker="Portfolio Gallery" title="Curated visual archive">
        Every piece is organized by discipline, so clients can quickly understand your range and see the right work in the right context.
      </SectionIntro>
      <div className="mx-auto mb-10 flex max-w-7xl flex-wrap items-center justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`filter-pill ${activeCategory === category ? "is-active" : ""}`}
          >
            {category}
          </button>
        ))}
      </div>
      <motion.div
        layout
        className="mx-auto grid max-w-7xl auto-rows-[300px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
        {filteredWorks.map((work, index) => (
          <motion.button
            type="button"
            key={work.title}
            layout
            className={`gallery-card group relative overflow-hidden text-left shadow-card ${work.frame || "landscape"} ${work.span || ""}`}
            onClick={() => setActive(work)}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.5, delay: index * 0.025 }}
          >
            <div className="artwork-stage">
              <img src={work.image} alt={work.title} className={`artwork-image ${work.fit === "cover" ? "is-cover" : "is-contain"}`} />
            </div>
            <div className="card-vignette" />
            <div className="card-shine" />
            <div className="absolute left-5 top-5 border border-white/10 bg-black/45 px-3 py-2 text-[0.58rem] uppercase tracking-[0.22em] text-platinum opacity-0 backdrop-blur transition group-hover:opacity-100">
              View Project
            </div>
            <div className="card-caption">
              <span className="card-kicker">{work.category}</span>
              <h3 className="card-title">{work.title}</h3>
            </div>
          </motion.button>
        ))}
        </AnimatePresence>
      </motion.div>
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/88 p-4 backdrop-blur-xl md:p-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="preview-panel relative my-auto flex max-h-[94vh] w-full max-w-7xl flex-col overflow-hidden border border-white/15 bg-ink shadow-glow"
              initial={{ scale: 0.96, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 24 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close preview"
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center border border-white/15 bg-black/60 text-platinum backdrop-blur transition hover:border-champagne"
              >
                <Icon name="x" className="h-5 w-5" />
              </button>
              <div className="preview-image-stage">
                <img src={active.image} alt={active.title} className="preview-image" />
              </div>
              <div className="shrink-0 p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.32em] text-champagne">{active.category}</p>
                <h3 className="mt-2 font-display text-4xl text-platinum">{active.title}</h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-smoke">{active.note}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function CreativeProcess() {
  return (
    <section className="bg-noir px-5 py-24 md:py-32">
      <SectionIntro kicker="Creative Process" title="Direction before decoration" />
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
        {process.map(([number, title, copy], index) => (
          <motion.div
            key={title}
            className="border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
          >
            <span className="text-xs uppercase tracking-[0.32em] text-champagne">{number}</span>
            <h3 className="mt-10 font-display text-4xl text-platinum">{title}</h3>
            <p className="mt-5 text-sm leading-7 text-smoke">{copy}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="relative overflow-hidden bg-ink px-5 py-24 md:py-32">
      <div className="service-glow" />
      <SectionIntro kicker="Services" title="Premium visual direction">
        Design and image-making for brands, founders, creators, and campaigns that need atmosphere with discipline.
      </SectionIntro>
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(([service, icon], index) => (
          <motion.div
            key={service}
            className="service-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: index * 0.05 }}
          >
            <Icon name={icon} className="h-5 w-5 text-champagne" />
            <h3 className="mt-10 font-display text-3xl text-platinum">{service}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-noir px-5 py-24 md:py-32">
      <motion.div
        className="mx-auto max-w-5xl text-center"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8 }}
      >
        <p className="mb-5 text-xs uppercase tracking-[0.42em] text-champagne">Contact</p>
        <h2 className="font-display text-5xl font-medium leading-none text-platinum md:text-7xl">Let’s create the next frame.</h2>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a className="contact-link" href="https://www.instagram.com/benvita_visualstudio/" target="_blank" rel="noreferrer">
            <Icon name="instagram" className="h-4 w-4" />
            Instagram
          </a>
          <a
            className="contact-link"
            href="mailto:bluepurple1414@gmail.com?subject=Project%20Inquiry%20for%20BENVITA&body=Hi%20BENVITA%2C%0A%0AI%27d%20like%20to%20discuss%20a%20creative%20project.%0A%0A"
          >
            <Icon name="mail" className="h-4 w-4" />
            Email
          </a>
          <a className="contact-link" href="https://behance.net/" target="_blank" rel="noreferrer">
            <Icon name="arrow" className="h-4 w-4" />
            Behance
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function App() {
  return (
    <main>
      <Hero />
      <About />
      <FeaturedWorks />
      <PortfolioGallery />
      <CreativeProcess />
      <Services />
      <Contact />
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);

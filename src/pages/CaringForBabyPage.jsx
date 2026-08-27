import PageHero from "../components/shared/PageHero";
import BabyCareNavBar from "../components/shared/BabyCareNavBar";
import FinalCTA from "../components/company/FinalCTA";

const ACCENT = "#1a5aad";
const NAVY = "#1a2c4e";

function InlineBlue({ children }) {
  return (
    <span className="font-semibold transition-opacity duration-300 cursor-pointer hover:opacity-75" style={{ color: ACCENT }}>
      {children}
    </span>
  );
}

function CtaLink({ label }) {
  return (
    <button
      type="button"
      className="group inline-flex items-center gap-2 font-body text-sm font-bold uppercase tracking-[0.12em] underline underline-offset-4 decoration-2 transition-opacity duration-300 hover:opacity-75 cursor-pointer"
      style={{ color: ACCENT }}
    >
      {label}
      <svg
        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
}

function RowImage({ row }) {
  if (row.duotone) {
    return (
      <div
        className="w-full aspect-[4/3] rounded-lg shadow-md flex flex-col items-center justify-center gap-3 select-none"
        style={{ backgroundImage: `linear-gradient(135deg, ${row.g[0]} 0%, ${row.g[1]} 100%)` }}
      >
        <span className="text-6xl drop-shadow">{row.emoji}</span>
        <span className="font-body text-xs tracking-widest uppercase text-center px-8 leading-relaxed text-white/85">
          [Blue duotone photo: {row.photo}]
        </span>
      </div>
    );
  }
  return (
    <div
      className="w-full aspect-[4/3] rounded-lg shadow-md flex flex-col items-center justify-center gap-3 select-none"
      style={{ backgroundImage: `linear-gradient(135deg, ${row.g[0]} 0%, ${row.g[1]} 100%)` }}
    >
      <span className="text-6xl">{row.emoji}</span>
      <span
        className="font-body text-xs tracking-widest uppercase text-center px-8 leading-relaxed"
        style={{ color: `${ACCENT}b3` }}
      >
        [Photo: {row.photo}]
      </span>
    </div>
  );
}

function RowHeading({ row }) {
  if (row.highlightTitle) {
    return (
      <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4">
        <span
          className="inline-block px-3 py-1 rounded-md -rotate-1"
          style={{ color: NAVY, backgroundColor: `${ACCENT}1f` }}
        >
          {row.title}
        </span>
      </h3>
    );
  }
  return (
    <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4" style={{ color: NAVY }}>
      {row.title}
    </h3>
  );
}

const ROWS = [
  {
    title: "About Your Baby's Skin",
    imageSide: "left",
    emoji: "\u{1F917}",
    photo: "Mother playfully kissing baby's belly, warm home setting",
    g: ["#fbe0dd", "#fdf0e0"],
    body: (
      <>
        Your baby&rsquo;s skin is their{" "}
        <InlineBlue>first line of defense</InlineBlue> against the outside
        world &mdash; up to five times thinner than adult skin and still
        developing its natural barrier.
      </>
    ),
    cta: "Gentle Care for Baby's Skin",
  },
  {
    title: "Newborn Skin Conditions",
    imageSide: "right",
    duotone: true,
    emoji: "\u{1F476}",
    photo: "Newborn baby portrait",
    g: ["#134a89", "#4fc3f7"],
    body: (
      <>
        Milia, cradle cap, peeling skin and tiny newborn rashes can look
        worrying, but almost all of them are completely{" "}
        <InlineBlue>harmless and temporary</InlineBlue>. They usually clear up
        on their own within a few weeks &mdash; no special creams needed.
      </>
    ),
    cta: "Learn More",
  },
  {
    title: "Umbilical Cord Care",
    highlightTitle: true,
    imageSide: "left",
    duotone: true,
    emoji: "\u{1F4AB}",
    photo: "Baby reaching up",
    g: ["#0d3b73", "#39a0dd"],
    body: (
      <>
        Keep the cord stump clean and dry, stick to sponge baths until it falls
        off naturally, and fold the diaper below the belly button. It usually
        separates within 1&ndash;3 weeks.
      </>
    ),
    cta: "Cleaning Your Baby's Umbilical Cord",
  },
  {
    title: "Keeping Baby's Skin Healthy",
    imageSide: "right",
    emoji: "\u{1F6C1}",
    photo: "Mother and toddler in a bathroom skincare routine, natural light",
    g: ["#ddf2ea", "#ddeafa"],
    body: (
      <>
        Because your baby&rsquo;s skin barrier is thinner, it{" "}
        <InlineBlue>loses moisture faster</InlineBlue> than adult skin. Short
        lukewarm baths followed by a gentle fragrance-free moisturiser lock in
        hydration and keep that softness protected all day long.
      </>
    ),
    cta: "Learn More",
  },
  {
    title: "Eczema & Dry Skin",
    imageSide: "left",
    emoji: "\u{1F9F4}",
    photo: "Mother nuzzling her newborn, soft cream sweater, tender close-up",
    g: ["#fdeadb", "#fdf6e3"],    body: (
      <>
        Rough red patches on cheeks, elbows or knees may be early eczema. Use a
        mild cleanser, moisturise generously twice a day and dress your baby in
        soft cotton &mdash; and always check with your paediatrician if flare-ups
        persist.
      </>
    ),
    cta: "Learn More",
  },
  {
    title: "Baby's Eyes, Ears, Nose & Nails",
    imageSide: "right",
    emoji: "\u{1F441}\uFE0F",
    photo: "Close-up baby portrait lying down, looking at camera",
    g: ["#fce4ec", "#e3f0fd"],
    body: (
      <>
        These little areas need big care. Wipe eyes with clean cotton and water,
        clean only the outer ear with a damp cloth, never insert cotton buds,
        and trim tiny nails while your baby sleeps using blunt-nosed scissors.
      </>
    ),
    cta: "Gentle Care for Special Areas",
  },
  {
    title: "Baby Skin Sun Protection",
    imageSide: "left",
    emoji: "\u2600\uFE0F",
    photo: "Mother and toddler looking out a window together, warm natural light, pointing and exploring",
    g: ["#fdeccf", "#fdf3e0"],
    body: (
      <>
        Little ones love exploring the sunshine, but delicate baby skin burns
        far faster than yours. Keep your baby shaded between 10am and 4pm,
        dress them in light long sleeves and a wide-brim hat, and always ask
        your paediatrician before using sunscreen under six months.
      </>
    ),
    cta: "Protect Your Baby's Skin From Sun",
  },
  {
    title: "Toddler Teeth Care",
    imageSide: "right",
    emoji: "\u{1F9B7}",
    photo: "Mother smiling with two toddlers in her arms, candid family portrait, soft indoor lighting",
    g: ["#e3ecfb", "#fdf3e3"],
    body: (
      <>
        Those first tiny teeth are worth protecting from day one. Start
        brushing twice daily with a rice-grain smear of fluoride toothpaste as
        soon as the first tooth appears, and book a first dentist visit by
        their first birthday.
      </>
    ),
    cta: "Your Toddler's Teeth",
  },
];

export default function CaringForBabyPage() {
  return (
    <>
      <PageHero
        title="Caring for Your Baby"
        subtitle="Indian Soya & Spice Industries"
        breadcrumb="Home / Our Offering / Baby Care / Caring for Your Baby"
      />
      <BabyCareNavBar />
      <FinalCTA
        title="Caring for Your Baby"
        subtitle="Your baby&rsquo;s skin is different from adult skin &mdash; it needs 100% gentle care. Learn how best to care for it."
        showButtons={false}
      />

      {/* ── Baby's Skin Editorial Sections ── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 space-y-12 lg:space-y-14">
          {ROWS.map((row) => {
            const image = <RowImage row={row} />;
            const content = (
              <div>
                <RowHeading row={row} />
                <p className="font-body text-charcoal/65 text-base leading-relaxed mb-6">
                  {row.body}
                </p>
                <CtaLink label={row.cta} />
              </div>
            );
            return (
              <div
                key={row.title}
                className="grid lg:grid-cols-[45fr_55fr] gap-8 lg:gap-14 items-center"
              >
                {row.imageSide === "left" ? (
                  <>
                    <div className="order-1 lg:order-1">{image}</div>
                    <div className="order-2 lg:order-2">{content}</div>
                  </>
                ) : (
                  <>
                    <div className="order-2 lg:order-1">{content}</div>
                    <div className="order-1 lg:order-2">{image}</div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

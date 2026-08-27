import PageHero from "../components/shared/PageHero";
import BabyCareNavBar from "../components/shared/BabyCareNavBar";
import FinalCTA from "../components/company/FinalCTA";

const ACCENT = "#1a5aad";

const SHARE_ICONS = [
  {
    label: "Share on Facebook",
    path: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z",
  },
  {
    label: "Share on X",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "Share on WhatsApp",
    path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
  },
  {
    label: "Share by Email",
    path: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
  },
];

const ROWS = [
  {
    title: "Baby Shower (Godh Bharai)",
    imageSide: "left",
    emoji: "\u{1F930}",
    photo: "Pregnant woman holding her belly",
    g: ["#fbe0dd", "#fdf0e0"],
    paragraphs: [
      "Godh Bharai is one of India's most cherished traditions — a joyful celebration honouring the mother-to-be, filled with blessings, music, laughter and love.",
      "Family and friends shower the expecting mother with gifts, sweets and heartfelt wishes as everyone comes together to welcome the newest member of the family.",
    ],
    share: true,
  },
  {
    title: "Your Changing Body",
    imageSide: "right",
    emoji: "\u{1F49E}",
    photo: "Hands forming a heart shape over a pregnant belly",
    g: ["#ece4fa", "#fbe4ef"],
    boxIntro:
      "Your body is doing incredible work — every change you feel is a sign that your baby is growing healthy and strong.",
    paragraphs: [
      "From morning sickness to the first gentle flutter, pregnancy transforms you in remarkable ways.",
      "Eat well, rest often and never miss a prenatal checkup — caring for yourself is the very first step in caring for your baby.",
    ],
    linkLabel: "Learn More",
  },
  {
    title: "Before your baby Arrives",
    imageSide: "left",
    emoji: "\u{1F37C}",
    photo: "Baby care items — thermometer, socks, baby wash",
    g: ["#ddf2ea", "#ddeafa"],
    paragraphs: [
      "The final weeks of pregnancy are the perfect time to get ready — from choosing gentle skincare and soft clothing to stocking up on feeding and bathing essentials.",
      "A little planning now brings great peace of mind later, leaving you free to simply enjoy those precious first moments together.",
    ],
    linkLabel: "How to Prepare for Your Baby",
  },
  {
    title: "Preparing the Nursery",
    imageSide: "right",
    emoji: "\u{1F6CF}\uFE0F",
    photo: "Father napping with baby near the crib",
    g: ["#dbe9fb", "#eee4fa"],
    paragraphs: [
      "A calm, cosy nursery helps your baby — and you — settle into a soothing routine. Start with the basics: a safe crib, soft lighting and comfortable feeding corner.",
      "Keep everything within arm's reach and choose breathable fabrics and non-toxic finishes, so the room feels as gentle as it looks.",
    ],
    linkLabel: "Set Up Your Baby's Room",
  },
  {
    title: "First 10 days",
    imageSide: "left",
    emoji: "\u{1F46A}",
    photo: "Parents smiling at their newborn",
    g: ["#fdeadb", "#fdf6e3"],
    paragraphs: [
      "The first ten days are all about slowing down — frequent feeds, plenty of sleep and endless skin-to-skin cuddles help your newborn feel safe in a brand-new world.",
      "Trust your instincts, accept help from loved ones and let everything else wait; these quiet days pass far too quickly.",
    ],
    linkLabel: "Review the Baby Basics",
  },
  {
    title: "Feeding your baby",
    imageSide: "right",
    emoji: "\u{1F931}",
    photo: "Mother holding her baby close",
    g: ["#fce4ec", "#e3f0fd"],
    paragraphs: [
      "Feeding time is bonding time. Whether you breastfeed, formula-feed or combine both, holding your baby close during feeds builds trust, comfort and connection.",
      "Feed on demand, watch for your baby's hunger cues and remember — every baby finds their own rhythm.",
    ],
    linkLabel: "Explore Your Feeding Options",
  },
];

function PhotoPlaceholder({ row }) {
  return (
    <div
      className="w-full aspect-[4/3] rounded-2xl shadow-md flex flex-col items-center justify-center gap-3 select-none"
      style={{
        backgroundImage: `linear-gradient(135deg, ${row.g[0]} 0%, ${row.g[1]} 100%)`,
      }}
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

function RowContent({ row }) {
  return (
    <div>
      <h3 className="font-display text-[#16233b] text-2xl lg:text-3xl font-bold mb-4">
        {row.title}
      </h3>

      {row.boxIntro && (
        <div
          className="rounded-r-lg px-4 py-3 mb-4 border-l-4"
          style={{ borderColor: ACCENT, backgroundColor: `${ACCENT}0f` }}
        >
          <p className="font-body italic text-charcoal/75 text-sm leading-relaxed">
            {row.boxIntro}
          </p>
        </div>
      )}

      {row.paragraphs.map((text, i) => (
        <p
          key={i}
          className="font-body text-charcoal/65 text-base leading-relaxed mb-4 last:mb-0"
        >
          {text}
        </p>
      ))}

      {row.linkLabel && <Cta label={row.linkLabel} />}

      {row.share && (
        <div className="flex items-center gap-2 mt-5">
          <span className="font-body text-xs uppercase tracking-widest text-charcoal/40 mr-1">
            Share
          </span>
          {SHARE_ICONS.map((icon) => (
            <button
              key={icon.label}
              type="button"
              aria-label={icon.label}
              className="w-8 h-8 rounded-full border border-charcoal/15 text-charcoal/50 flex items-center justify-center transition-colors duration-300 hover:bg-[#1a5aad] hover:border-[#1a5aad] hover:text-white"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d={icon.path} />
              </svg>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Cta({ label }) {
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

function InlineLink({ children }) {
  return (
    <button
      type="button"
      className="font-bold underline underline-offset-2 decoration-2 transition-opacity duration-300 hover:opacity-75 cursor-pointer"
      style={{ color: ACCENT }}
    >
      {children}
    </button>
  );
}

export default function PreparingForBabyPage() {
  return (
    <>
      <PageHero
        title="Preparing for Your Baby"
        subtitle="Indian Soya & Spice Industries"
        breadcrumb="Home / Our Offering / Baby Care / Preparing for Your Baby"
      />
      <BabyCareNavBar />
      <FinalCTA
        title="Tips &amp; Suggestions to prepare for your Baby"
        subtitle=""
        showButtons={false}
      />

      {/* ── Editorial Zigzag Sections ── */}
      <section className="bg-white pt-16 lg:pt-24 pb-14 lg:pb-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 space-y-12 lg:space-y-16">
          {ROWS.map((row) => {
            const image = <PhotoPlaceholder row={row} />;
            const content = <RowContent row={row} />;
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

          {/* Row 7 — Breastfeeding Guide */}
          <div className="grid lg:grid-cols-[45fr_55fr] gap-8 lg:gap-14 items-center">
            <div
              className="w-full aspect-[4/3] rounded-xl shadow-md flex flex-col items-center justify-center gap-3 select-none order-1"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #fdeedd 0%, #fbe4d8 100%)",
              }}
            >
              <span className="text-6xl">&#128107;&#127996;</span>
              <span
                className="font-body text-xs tracking-widest uppercase text-center px-8 leading-relaxed"
                style={{ color: `${ACCENT}b3` }}
              >
                [Photo: Mother breastfeeding her baby, wrapped in a cozy cream
                blanket]
              </span>
            </div>
            <div className="order-2">
              <h3 className="font-display text-[#16233b] text-2xl lg:text-3xl font-bold mb-4">
                Breastfeeding Guide
              </h3>
              <p className="font-body text-charcoal/65 text-base leading-relaxed mb-5">
                Breastfeeding your newborn <InlineLink>isn&rsquo;t easy</InlineLink>{" "}
                at first &mdash; latching, positioning and supply worries are
                completely normal for every new mother.
              </p>
              <p className="font-body text-charcoal/65 text-base leading-relaxed mb-6">
                With the right support and a few practical tips, you and your
                baby will <InlineLink>better navigate</InlineLink> the journey
                together and build a feeding routine that works for you both.
              </p>
              <Cta label="Breastfeeding Tips" />
            </div>
          </div>
        </div>
      </section>

      {/* Row 8 — Yourself Post Birth (full-width sky-blue band) */}
      <section className="w-full bg-[#4FC3F7] py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[55fr_45fr] gap-8 lg:gap-14 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="font-display text-[#16233b] text-2xl lg:text-3xl font-bold mb-4">
              Yourself Post Birth
            </h3>
            <p className="font-body text-[#16233b]/75 text-base leading-relaxed mb-6">
              To give your baby the best care, you also need to care for
              yourself. Rest whenever your little one sleeps, eat nourishing
              meals and don&rsquo;t hesitate to ask family and friends for help
              &mdash; a rested, happy mom is the greatest gift your baby can
              receive.
            </p>
            <Cta label="Take Some Mommy-Time" />
          </div>
          <div
            className="w-full aspect-[4/3] rounded-xl shadow-md flex flex-col items-center justify-center gap-3 select-none order-1 lg:order-2"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #fdf3d8 0%, #dff0fb 100%)",
            }}
          >
            <span className="text-6xl">&#129293;</span>
            <span className="font-body text-xs tracking-widest uppercase text-center px-8 leading-relaxed text-[#16233b]/60">
              [Photo: Joyful selfie of mother and baby lying together, smiling
              at the camera]
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

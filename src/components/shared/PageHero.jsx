export default function PageHero({ title, subtitle, breadcrumb }) {
  return (
    <section className="relative pt-14 lg:pt-20 pb-16 lg:pb-24 bg-gradient-to-br from-tea-50 via-cream to-forest-50 border-b border-tea-100 overflow-hidden">
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, #c4832a 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative max-w-screen-xl mx-auto px-6 lg:px-8 text-center">
        {breadcrumb && (
          <p className="font-body text-xs text-charcoal/40 tracking-widest uppercase mb-4">
            {breadcrumb}
          </p>
        )}
        {subtitle && <p className="section-subtitle mb-3">{subtitle}</p>}
        <h1 className="section-title">{title}</h1>
      </div>
    </section>
  );
}

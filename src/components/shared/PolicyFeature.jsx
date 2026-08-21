export default function PolicyFeature({ icon, title, description }) {
  return (
    <div className="group bg-white sm:rounded-2xl p-6 lg:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_50px_rgba(13,27,76,0.12)] transition-all duration-500 hover:-translate-y-1.5 border border-gray-100/80">
      <div className="w-16 h-16 sm:rounded-2xl bg-[#0057A0] flex items-center justify-center mb-6 shadow-xl shadow-[#0057A0]/15 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
        </svg>
      </div>
      <h3 className="font-display text-[#1a2942] text-xl font-bold mb-3 group-hover:text-[#0d1b4c] transition-colors duration-300">
        {title}
      </h3>
      <p className="font-body text-[#666] text-[14px] leading-[1.8] group-hover:text-[#555] transition-colors duration-300">
        {description}
      </p>
      <div className="mt-5 pt-5 border-t border-gray-100 flex items-center gap-2 text-[#A4C639] font-poppins text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Learn more
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </div>
  );
}

type LiveProjectButtonProps = {
  label?: string
  className?: string
}

export default function LiveProjectButton({
  label = 'Live Project',
  className = '',
}: LiveProjectButtonProps) {
  return (
    <button
      className={`rounded-full border-2 border-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-300 hover:bg-[#D7E2EA]/10 ${className}`}
    >
      {label}
    </button>
  )
}

type LiveProjectButtonProps = {
  label?: string
  className?: string
  href?: string
}

export default function LiveProjectButton({
  label = 'Open on GitHub',
  className = '',
  href,
}: LiveProjectButtonProps) {
  const baseClass = `inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-300 hover:bg-[#D7E2EA]/10 ${className}`

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className={baseClass}
      >
        {label}
      </a>
    )
  }

  return (
    <button className={baseClass}>
      {label}
    </button>
  )
}

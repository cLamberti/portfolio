interface SkillBadgeProps {
  children: React.ReactNode
}

export default function SkillBadge({ children }: SkillBadgeProps) {
  return (
    <span
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
        text-[#94a3b8] bg-[#111118] border border-[#1e1e2e] cursor-default
        transition-all duration-200
        hover:text-white hover:border-blue-500/50 hover:bg-blue-500/[0.06]
        hover:shadow-[0_0_14px_-3px_rgba(59,130,246,0.45)]"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-blue-500/40" aria-hidden="true" />
      {children}
    </span>
  )
}

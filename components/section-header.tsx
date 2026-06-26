import { cn } from '@/lib/utils'

export function SectionHeader({
  title,
  description,
  className,
  descriptionClassName,
  headigClassName,
}: {
  title: {
    plain: string
    accent: string
  }
  description: string
  className?: string
  headigClassName?: string
  descriptionClassName?: string
}) {
  return (
    <div className={cn('pt-30.25 pb-15', className)}>
      <div className="mx-auto max-w-7xl px-5">
        <h1
          className={cn(
            'text-center text-[32px] leading-[130%] font-bold tracking-normal',
            headigClassName,
          )}
        >
          {title.plain} <span className="text-primary">{title.accent}</span>
        </h1>
        <p
          className={cn(
            'mx-auto mt-5.5 max-w-184.5 text-center text-sm leading-[130%] font-medium tracking-normal',
            descriptionClassName,
          )}
        >
          {description}
        </p>
      </div>
    </div>
  )
}

import { cn } from '@/lib/utils'

export function ButtonPrimary({
  className,
  label = 'Schedule A Meeting',
}: {
  className?: string
  label?: string
}) {
  return (
    <button
      type="button"
      className={cn(
        'bg-primary hover:bg-primary/90 flex items-center gap-2.5 rounded-[5px] px-5.5 py-4.5 text-sm leading-[100%] font-bold tracking-normal text-white',
        className,
      )}
    >
      {label}
      <svg
        className="h-2.25 w-2.5"
        viewBox="0 0 10 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.59269 5.09269H7.21304L4.32071 7.98502C4.08956 8.21617 4.08956 8.59549 4.32071 8.82664C4.55186 9.05779 4.92525 9.05779 5.1564 8.82664L9.06223 4.92081C9.29338 4.68966 9.29338 4.31627 9.06223 4.08512L5.16233 0.173362C4.93118 -0.0577873 4.55779 -0.0577873 4.32664 0.173362C4.09549 0.404511 4.09549 0.777906 4.32664 1.00906L7.21304 3.90731H0.59269C0.266711 3.90731 0 4.17402 0 4.5C0 4.82598 0.266711 5.09269 0.59269 5.09269Z"
          fill="white"
        />
      </svg>
    </button>
  )
}

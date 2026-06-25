import { cn } from "@/lib/utils";

export function SectionHeader({
  title,
  description,
  className,
  descriptionClassName,
  headigClassName,
}: {
  title: {
    plain: string;
    accent: string;
  };
  description: string;
  className?: string;
  headigClassName?: string;
  descriptionClassName?: string;
}) {
  return (
    <div className={cn("pt-30.25 pb-15", className)}>
      <div className="max-w-7xl px-5 mx-auto">
        <h1
          className={cn(
            "text-center font-bold text-[32px] leading-[100%] tracking-normal",
            headigClassName,
          )}
        >
          {title.plain} <span className="text-primary">{title.accent}</span>
        </h1>
        <p
          className={cn(
            "text-center font-medium text-sm leading-[100%] mt-5.5 tracking-normal max-w-184.5 mx-auto",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

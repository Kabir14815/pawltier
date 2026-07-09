import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  className?: string;
  wide?: boolean;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  wide = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 lg:mb-14",
        align === "center" && "text-center mx-auto",
        wide ? "max-w-3xl" : "max-w-2xl",
        align === "left" && "text-left mr-auto ml-0",
        className
      )}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="heading-section mt-4 mb-4">{title}</h2>
      {description && (
        <p className="text-body-lg text-[var(--text-medium)] leading-relaxed">{description}</p>
      )}
    </div>
  );
}

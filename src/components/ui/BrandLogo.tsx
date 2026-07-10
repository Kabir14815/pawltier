import Image from "next/image";
import Link from "next/link";
import { BRAND_NAME, BRAND_TAGLINE } from "@/lib/constants";

type BrandLogoProps = {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  href?: string;
  className?: string;
  variant?: "light" | "dark";
};

const sizes = {
  sm: { img: 36, text: "text-base", tagline: "text-[9px]" },
  md: { img: 44, text: "text-lg", tagline: "text-[10px]" },
  lg: { img: 80, text: "text-4xl", tagline: "text-sm" },
};

export default function BrandLogo({
  size = "md",
  showText = true,
  href = "/",
  className = "",
  variant = "light",
}: BrandLogoProps) {
  const s = sizes[size];
  const nameColor = variant === "dark" ? "text-white" : "text-[#3D2A22]";
  const taglineColor = variant === "dark" ? "text-gray-400" : "text-[#5C4033]";

  const content = (
    <>
      <Image
        src="/logo.png"
        alt={`${BRAND_NAME} logo`}
        width={s.img}
        height={s.img}
        style={{ width: s.img, height: s.img }}
        className="rounded-full object-cover shadow-md shrink-0"
        priority
      />
      {showText && (
        <div className="hidden sm:flex flex-col leading-none">
          <span
            className={`${s.text} font-extrabold ${nameColor} tracking-tight`}
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            {BRAND_NAME}
          </span>
          <span
            className={`${s.tagline} font-semibold tracking-[0.18em] ${taglineColor} uppercase mt-0.5`}
          >
            {BRAND_TAGLINE}
          </span>
        </div>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`flex items-center gap-2.5 group shrink-0 ${className}`}>
        {content}
      </Link>
    );
  }

  return <div className={`flex items-center gap-2.5 ${className}`}>{content}</div>;
}

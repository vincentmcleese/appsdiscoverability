import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface DecoratedLinkProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function DecoratedLink({ href, children, className, onClick }: DecoratedLinkProps) {
  const content = (
    <>
      <span>{children}</span>
      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </>
  );

  const baseClasses = cn(
    "group relative inline-flex items-center gap-2 text-ghost-text font-medium hover:text-primary transition-colors pb-1",
    className
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button className={baseClasses} onClick={onClick}>
      {content}
    </button>
  );
}




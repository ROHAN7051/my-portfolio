import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-5 py-2 text-sm font-medium font-mono transition-colors duration-150";

  const styles = {
    primary: "bg-text text-bg hover:bg-text/90",
    secondary: "border border-border-bright text-text-secondary hover:text-text hover:border-text-dim",
  };

  return (
    <Link href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </Link>
  );
}

import type { SVGProps } from "react"

export function Icon({
  name,
  ...props
}: { name: string } & SVGProps<SVGSVGElement>) {
  const paths: Record<string, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    back: (
      <>
        <path d="m15 18-6-6 6-6" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
    check: (
      <>
        <path d="m5 12 4 4L19 6" />
      </>
    ),
    spark: (
      <>
        <path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z" />
        <path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z" />
      </>
    ),
    heart: (
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
    ),
    trend: (
      <>
        <path d="m3 17 6-6 4 4 8-9" />
        <path d="M15 6h6v6" />
      </>
    ),
    pause: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M10 9v6M14 9v6" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    wallet: (
      <>
        <path d="M4 6h14a2 2 0 0 1 2 2v10H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12" />
        <path d="M15 11h7v4h-7a2 2 0 0 1 0-4Z" />
      </>
    ),
    flower: (
      <>
        <circle cx="12" cy="12" r="2" />
        <path d="M12 10c-3-1-4-4-2-6 2 0 3 2 2 6Zm2 2c1-3 4-4 6-2 0 2-2 3-6 2Zm-2 2c3 1 4 4 2 6-2 0-3-2-2-6Zm-2-2c-1 3-4 4-6 2 0-2 2-3 6-2Z" />
      </>
    ),
    book: (
      <>
        <path d="M4 5a3 3 0 0 1 3-1h5v15H7a3 3 0 0 0-3 1V5Z" />
        <path d="M20 5a3 3 0 0 0-3-1h-5v15h5a3 3 0 0 1 3 1V5Z" />
      </>
    ),
    leaf: (
      <>
        <path d="M12 21V10" />
        <path d="M12 14C7 14 4 11 4 6c5 0 8 3 8 8Z" />
        <path d="M12 11c0-4 3-7 8-7 0 5-3 8-8 8" />
      </>
    ),
    lock: (
      <>
        <rect x="5" y="10" width="14" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </>
    ),
    edit: (
      <>
        <path d="m4 20 4-1 11-11-3-3L5 16l-1 4Z" />
        <path d="m14 7 3 3" />
      </>
    ),
    trash: (
      <>
        <path d="M4 7h16M9 7V4h6v3M7 7l1 14h8l1-14" />
      </>
    ),
    plus: (
      <>
        <path d="M12 5v14M5 12h14" />
      </>
    ),
    info: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 11v6M12 8h.01" />
      </>
    ),
    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v10h14V10M9 20v-6h6v6" />
      </>
    ),
    chart: (
      <>
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
      </>
    ),
    external: (
      <>
        <path d="M14 4h6v6M20 4l-9 9" />
        <path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" />
      </>
    ),
  }
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {paths[name] || paths.spark}
    </svg>
  )
}

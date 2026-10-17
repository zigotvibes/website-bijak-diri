import type { ButtonHTMLAttributes, ReactNode } from "react"
import { Icon } from "./Icons"

export function Button({
  children,
  variant = "primary",
  icon,
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "danger"
  icon?: string
}) {
  return (
    <button className={`btn btn-${variant} ${className}`} {...props}>
      {children}
      {icon && <Icon name={icon} className="icon-sm" />}
    </button>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="eyebrow">
      <span />
      {children}
    </div>
  )
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <div className="page-header">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export function ProgressBar({
  value,
  label,
}: {
  value: number
  label?: string
}) {
  return (
    <div className="progress-wrap">
      {label && (
        <div className="progress-label">
          <span>{label}</span>
          <strong>{Math.round(value)}%</strong>
        </div>
      )}
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
        />
      </div>
    </div>
  )
}

export function Toast({
  message,
  onClose,
}: {
  message: string
  onClose: () => void
}) {
  return (
    <div className="toast" role="status">
      <span className="toast-icon">
        <Icon name="check" />
      </span>
      <span>{message}</span>
      <button onClick={onClose} aria-label="Tutup notifikasi">
        <Icon name="close" />
      </button>
    </div>
  )
}

export function Modal({
  title,
  children,
  onCancel,
  onConfirm,
}: {
  title: string
  children: ReactNode
  onCancel: () => void
  onConfirm: () => void
}) {
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onCancel}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="modal-icon">
          <Icon name="trash" />
        </div>
        <h2 id="modal-title">{title}</h2>
        <p>{children}</p>
        <div className="modal-actions">
          <Button variant="secondary" onClick={onCancel}>
            Batal
          </Button>
          <Button variant="danger" onClick={onConfirm}>
            Ya, bersihkan
          </Button>
        </div>
      </div>
    </div>
  )
}

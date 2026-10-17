import { useMemo, useState } from "react"
import { Button, PageHeader, ProgressBar } from "../components/UI"
import { Icon } from "../components/Icons"
import { ResearchContext } from "../components/ResearchSource"
import { getResearch } from "../data/content"
const rupiah = (n: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n || 0)
const clean = (s: string) => Number(s.replace(/\D/g, ""))
export default function BudgetPage() {
  const [available, setAvailable] = useState(500000)
  const [items, setItems] = useState([
    { id: 1, label: "Kebutuhan utama", value: 200000, color: "sage" },
    { id: 2, label: "Pengeluaran rutin", value: 100000, color: "lavender" },
    { id: 3, label: "Keinginan", value: 75000, color: "pink" },
    { id: 4, label: "Target menabung", value: 50000, color: "deep" },
  ])
  const total = useMemo(() => items.reduce((a, b) => a + b.value, 0), [items])
  const remaining = available - total
  const update = (id: number, key: "label" | "value", v: string) =>
    setItems(
      items.map((x) =>
        x.id === id ? { ...x, [key]: key === "value" ? clean(v) : v } : x,
      ),
    )
  return (
    <section className="section section-pad budget-page">
      <PageHeader
        eyebrow="Rencana yang realistis"
        title="Atur Uangku"
        description="Susun alokasi sederhana sesuai uang yang tersedia. Nominal berapa pun tetap layak direncanakan."
      />
      <ResearchContext
        title="Rencana uangmu perlu sesuai dengan keadaanmu"
        articles={getResearch("zawadzka-2022")}
        disclaimer="Zawadzka et al. (2022) memberi konteks mengenai lingkungan, paparan media, SES, dan materialisme; penelitian tersebut tidak menguji alat penganggaran ini."
      >
        <p>
          Lingkungan sosial dan paparan media dapat berkaitan dengan cara remaja
          menilai kepemilikan. Karena itu, keputusan konsumsi sebaiknya
          disesuaikan dengan kebutuhan dan kemampuan keuanganmu sendiri
          (Zawadzka et al., 2022), tanpa membandingkan keadaan keluarga.
        </p>
      </ResearchContext>
      <div className="budget-layout">
        <div className="budget-form">
          <label className="money-input">
            <span>Uang yang tersedia</span>
            <div>
              <b>Rp</b>
              <input
                inputMode="numeric"
                value={available.toLocaleString("id-ID")}
                onChange={(e) => setAvailable(clean(e.target.value))}
              />
            </div>
            <small>Masukkan total uang yang ingin kamu rencanakan.</small>
          </label>
          <div className="allocation-heading">
            <div>
              <h2>Alokasi pengeluaran</h2>
              <p>Kamu bisa mengubah nama dan nominal kategori.</p>
            </div>
            <Button
              variant="secondary"
              icon="plus"
              onClick={() =>
                setItems([
                  ...items,
                  {
                    id: Date.now(),
                    label: "Kategori baru",
                    value: 0,
                    color: "sage",
                  },
                ])
              }
            >
              Tambah
            </Button>
          </div>
          <div className="allocation-list">
            {items.map((x, i) => (
              <div className="allocation-item" key={x.id}>
                <span className={`dot ${x.color}`} />
                <input
                  aria-label={`Nama kategori ${i + 1}`}
                  value={x.label}
                  onChange={(e) => update(x.id, "label", e.target.value)}
                />
                <div>
                  <b>Rp</b>
                  <input
                    aria-label={`Nominal ${x.label}`}
                    inputMode="numeric"
                    value={x.value.toLocaleString("id-ID")}
                    onChange={(e) => update(x.id, "value", e.target.value)}
                  />
                </div>
                {items.length > 1 && (
                  <button
                    aria-label={`Hapus ${x.label}`}
                    onClick={() => setItems(items.filter((i) => i.id !== x.id))}
                  >
                    <Icon name="trash" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
        <aside className="budget-summary">
          <div className="summary-header">
            <span>
              <Icon name="wallet" />
            </span>
            <div>
              <small>Ringkasan anggaran</small>
              <h2>{rupiah(available)}</h2>
            </div>
          </div>
          <div
            className="donut"
            style={
              {
                "--percent": `${Math.min(100, (total / (available || 1)) * 100)}%`,
              } as React.CSSProperties
            }
          >
            <div>
              <strong>
                {available ? Math.round((total / available) * 100) : 0}%
              </strong>
              <small>dialokasikan</small>
            </div>
          </div>
          <div className="summary-lines">
            <div>
              <span>Total alokasi</span>
              <strong>{rupiah(total)}</strong>
            </div>
            <div className={remaining < 0 ? "negative" : ""}>
              <span>Sisa uang</span>
              <strong>{rupiah(remaining)}</strong>
            </div>
          </div>
          <ProgressBar value={(total / (available || 1)) * 100} />
          {remaining < 0 ? (
            <div className="budget-warning">
              <Icon name="info" />
              <p>
                <strong>Alokasi melebihi uang tersedia.</strong> Coba tinjau
                kembali alokasi ini agar sesuai dengan uang yang tersedia.
              </p>
            </div>
          ) : (
            <div className="budget-success">
              <Icon name="check" />
              <p>Rencanamu masih berada dalam uang yang tersedia.</p>
            </div>
          )}
          <p className="summary-disclaimer">
            <Icon name="lock" /> Angka ini tidak disimpan dan tidak dikirim ke
            layanan mana pun.
          </p>
        </aside>
      </div>
    </section>
  )
}

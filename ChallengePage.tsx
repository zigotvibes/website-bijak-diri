import { useEffect, useState } from "react"
import { challengeDays } from "../data/content"
import { Button, PageHeader, ProgressBar } from "../components/UI"
import { Icon } from "../components/Icons"
export default function ChallengePage({
  toast,
}: {
  toast: (m: string) => void
}) {
  const [done, setDone] = useState<number[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("bijak-challenge") || "[]")
    } catch {
      return []
    }
  })
  const [active, setActive] = useState<number | null>(null)
  useEffect(
    () => localStorage.setItem("bijak-challenge", JSON.stringify(done)),
    [done],
  )
  const finish = (i: number) => {
    if (!done.includes(i)) setDone([...done, i])
    setActive(null)
    toast(
      "Aktivitas selesai. Terima kasih sudah meluangkan waktu untuk dirimu.",
    )
  }
  if (active !== null) {
    const d = challengeDays[active]
    return (
      <section className="section-pad challenge-detail">
        <button className="back-link" onClick={() => setActive(null)}>
          <Icon name="back" /> Kembali ke tantangan
        </button>
        <div className="challenge-detail-card">
          <div className="day-badge">Hari {active + 1}</div>
          <span className="detail-icon">
            <Icon name={active === 5 ? "heart" : "spark"} />
          </span>
          <h1>{d[0]}</h1>
          <p>{d[1]}</p>
          <div className="activity-box">
            <small>Aktivitas hari ini</small>
            <h2>
              {active === 0
                ? "Apa yang menarik perhatianmu hari ini?"
                : active === 6
                  ? "Kebiasaan apa yang ingin kamu bawa ke depan?"
                  : "Luangkan 5–10 menit untuk memperhatikan pikiranmu."}
            </h2>
            <textarea
              rows={5}
              placeholder="Tulis catatanmu di sini (opsional)..."
            />
            <span>
              Catatan tantangan tidak disimpan setelah halaman ditutup.
            </span>
          </div>
          <Button icon="check" onClick={() => finish(active)}>
            Selesaikan Aktivitas
          </Button>
        </div>
      </section>
    )
  }
  return (
    <section className="section section-pad">
      <PageHeader
        eyebrow="Tumbuh sesuai ritmemu"
        title="Tantangan 7 Hari"
        description="Tujuh aktivitas ringan untuk mengenali kebiasaan. Tidak harus selesai berturut-turut dan tidak ada peringkat."
      />
      <div className="challenge-evidence-note">
        <Icon name="info" />
        <p>
          Tantangan ini adalah kegiatan refleksi ringan dari Bijak Diri, bukan
          intervensi klinis dan belum dinyatakan tervalidasi oleh penelitian
          yang dirujuk di website.
        </p>
      </div>
      <div className="challenge-progress-card">
        <div>
          <span>
            <Icon name="spark" />
          </span>
          <div>
            <small>Perjalananmu</small>
            <h2>{done.length} dari 7 hari selesai</h2>
          </div>
        </div>
        <ProgressBar value={(done.length / 7) * 100} />
        <p>
          {done.length === 0
            ? "Mulai saat kamu siap. Satu langkah kecil sudah berarti."
            : done.length === 7
              ? "Kamu sudah menyelesaikan seluruh aktivitas. Ambil hal yang paling bermakna bagimu."
              : "Lanjutkan kapan pun kamu siap—tidak perlu terburu-buru."}
        </p>
      </div>
      <div className="days-grid">
        {challengeDays.map((d, i) => (
          <article
            className={`day-card ${done.includes(i) ? "complete" : ""}`}
            key={i}
          >
            <div className="day-card-top">
              <span>Hari {i + 1}</span>
              <small>
                {done.includes(i) ? (
                  <>
                    <Icon name="check" /> Selesai
                  </>
                ) : (
                  "Belum dimulai"
                )}
              </small>
            </div>
            <span className="day-icon">
              <Icon
                name={
                  [
                    "pause",
                    "heart",
                    "clock",
                    "trend",
                    "wallet",
                    "flower",
                    "spark",
                  ][i]
                }
              />
            </span>
            <h2>{d[0]}</h2>
            <p>{d[1]}</p>
            <Button
              variant={done.includes(i) ? "secondary" : "primary"}
              icon="arrow"
              onClick={() => setActive(i)}
            >
              {done.includes(i) ? "Lihat kembali" : "Mulai Tantangan"}
            </Button>
          </article>
        ))}
      </div>
    </section>
  )
}

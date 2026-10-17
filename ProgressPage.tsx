import { challengeDays } from "../data/content"
import { Icon } from "../components/Icons"
import { PageHeader, ProgressBar } from "../components/UI"
export default function ProgressPage({ learned }: { learned: string[] }) {
  let done: number[] = []
  let reflections: string[] = []
  try {
    done = JSON.parse(localStorage.getItem("bijak-challenge") || "[]")
    reflections = JSON.parse(localStorage.getItem("bijak-reflections") || "[]")
  } catch {}
  const total =
    done.length + learned.length + reflections.filter(Boolean).length
  return (
    <section className="section section-pad progress-page">
      <PageHeader
        eyebrow="Jejak perjalananmu"
        title="Perkembangan Diriku"
        description="Lihat aktivitas yang sudah kamu jelajahi—bukan sebagai nilai, tetapi sebagai pengingat atas langkah yang telah kamu ambil."
      />
      <div className="stats-grid">
        <div>
          <span className="stat-icon sage">
            <Icon name="check" />
          </span>
          <strong>{total}</strong>
          <p>Aktivitas diselesaikan</p>
        </div>
        <div>
          <span className="stat-icon lavender">
            <Icon name="spark" />
          </span>
          <strong>{done.length}/7</strong>
          <p>Tantangan selesai</p>
        </div>
        <div>
          <span className="stat-icon pink">
            <Icon name="book" />
          </span>
          <strong>{learned.length}</strong>
          <p>Materi dipelajari</p>
        </div>
      </div>
      <div className="dashboard-grid">
        <div className="dashboard-card challenge-dash">
          <div className="dash-heading">
            <div>
              <small>Tantangan 7 Hari</small>
              <h2>Progres tantanganmu</h2>
            </div>
            <strong>{Math.round((done.length / 7) * 100)}%</strong>
          </div>
          <ProgressBar value={(done.length / 7) * 100} />
          <div className="mini-days">
            {challengeDays.map((d, i) => (
              <div key={i} className={done.includes(i) ? "done" : ""}>
                <span>{done.includes(i) ? <Icon name="check" /> : i + 1}</span>
                <p>{d[0]}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="dashboard-card reflection-dash">
          <span className="stat-icon pink">
            <Icon name="heart" />
          </span>
          <small>Refleksi pribadi</small>
          <h2>
            {reflections.filter(Boolean).length
              ? `${reflections.filter(Boolean).length} catatan tersimpan`
              : "Belum ada refleksi tersimpan"}
          </h2>
          <p>
            {reflections.filter(Boolean).length
              ? "Catatanmu tetap privat dan hanya tersedia di perangkat ini."
              : "Saat siap, ruang Aku Berharga bisa membantumu mulai menulis."}
          </p>
        </div>
        <div className="dashboard-card learned-dash">
          <div className="dash-heading">
            <div>
              <small>Belajar Bijak</small>
              <h2>Materi yang dipelajari</h2>
            </div>
            <span>{learned.length}</span>
          </div>
          {learned.length ? (
            <ul>
              {learned.map((x) => (
                <li key={x}>
                  <Icon name="check" />
                  {x}
                </li>
              ))}
            </ul>
          ) : (
            <div className="empty-small">
              <Icon name="book" />
              <p>Belum ada materi yang ditandai selesai.</p>
            </div>
          )}
        </div>
        <div className="dashboard-card research-dash">
          <span>
            <Icon name="info" />
          </span>
          <div>
            <small>Evaluasi penelitian</small>
            <h2>Belum tersedia pada prototipe ini</h2>
            <p>
              Pretest dan posttest hanya akan ditampilkan jika sudah sesuai
              dengan instrumen serta protokol penelitian yang ditetapkan.
              Aktivitas selesai tidak dianggap sebagai bukti efektivitas
              intervensi.
            </p>
          </div>
        </div>
      </div>
      {total === 0 && (
        <div className="empty-state">
          <Icon name="leaf" />
          <h2>Perjalananmu dimulai dari langkah kecil.</h2>
          <p>Selesaikan aktivitas untuk melihat perkembanganmu di sini.</p>
        </div>
      )}
    </section>
  )
}

import { useState } from "react"
import { materials } from "../data/content"
import { Icon } from "../components/Icons"
import { Button, PageHeader } from "../components/UI"
import { ResearchSource } from "../components/ResearchSource"
import { getResearch } from "../data/content"

export default function LearnPage({
  onLearned,
}: {
  onLearned: (title: string) => void
}) {
  const [selected, setSelected] = useState<number | null>(null)
  if (selected !== null) {
    const m = materials[selected]
    return (
      <section className="section-pad detail-page">
        <button className="back-link" onClick={() => setSelected(null)}>
          <Icon name="back" /> Kembali ke semua materi
        </button>
        <div className={`detail-hero tone-${m.color}`}>
          <div>
            <span className="detail-icon">
              <Icon name={m.icon} />
            </span>
            <small>{m.time} membaca</small>
            <h1>{m.title}</h1>
            <p>{m.summary}</p>
          </div>
          <span className="detail-number">0{selected + 1}</span>
        </div>
        <div className="article-layout">
          <article className="article">
            <h2>Mari pahami bersama</h2>
            <p>{m.body}</p>
            <h2>Contoh yang mungkin kamu temui</h2>
            <div className="example-box">
              <Icon name="spark" />
              <p>{m.example}</p>
            </div>
            <h2>Ingat hal ini</h2>
            <p>{m.takeaway}</p>
            {m.researchIds.length > 0 && (
              <div className="article-sources">
                <h2>Penelitian yang mendukung konteks materi</h2>
                <p>
                  Sumber berikut memberi konteks ilmiah. Saran praktis pada
                  materi ini adalah rekomendasi edukasi Bijak Diri, bukan
                  intervensi yang diuji oleh artikel tersebut.
                </p>
                {getResearch(...m.researchIds).map((article) => (
                  <ResearchSource key={article.id} article={article} compact />
                ))}
              </div>
            )}
          </article>
          <aside className="reflection-box">
            <span>
              <Icon name="flower" />
            </span>
            <small>Ruang refleksi</small>
            <h3>{m.reflection}</h3>
            <p>
              Kamu tidak harus menjawab sekarang. Simpan pertanyaan ini untuk
              direnungkan.
            </p>
          </aside>
        </div>
        <div className="detail-actions">
          <Button variant="secondary" onClick={() => setSelected(null)}>
            Kembali
          </Button>
          <Button
            icon="arrow"
            onClick={() => {
              onLearned(m.title)
              if (selected < materials.length - 1) setSelected(selected + 1)
            }}
          >
            Tandai dipelajari & lanjut
          </Button>
        </div>
      </section>
    )
  }
  return (
    <section className="section section-pad">
      <PageHeader
        eyebrow="Perpustakaan mini"
        title="Belajar bijak, satu topik setiap kali."
        description="Materi singkat untuk membantumu memahami pola konsumsi, tren, uang, dan nilai diri—tanpa menggurui."
      />
      <div className="filter-row">
        <span>{materials.length} materi untuk dijelajahi</span>
        <div>
          <button className="active">Semua</button>
          <button>Keuangan</button>
          <button>Refleksi diri</button>
        </div>
      </div>
      <div className="materials-grid">
        {materials.map((m, i) => (
          <article key={m.title} className={`learn-card tone-${m.color}`}>
            <div className="learn-card-top">
              <span className="material-icon">
                <Icon name={m.icon} />
              </span>
              <span>0{i + 1}</span>
            </div>
            <h2>{m.title}</h2>
            <p>{m.summary}</p>
            <div>
              <small>{m.time} membaca</small>
              <Button
                variant="ghost"
                icon="arrow"
                onClick={() => setSelected(i)}
              >
                Pelajari
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

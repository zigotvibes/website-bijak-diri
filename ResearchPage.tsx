import { Icon } from "../components/Icons"
import { ResearchSource } from "../components/ResearchSource"
import { PageHeader } from "../components/UI"
import { researchArticles } from "../data/content"

export default function ResearchPage() {
  return (
    <section className="section section-pad research-page">
      <PageHeader
        eyebrow="Riset dan referensi"
        title="Apa Kata Penelitian?"
        description="Pelajari bagaimana media sosial, lingkungan pergaulan, dan kondisi sosial ekonomi berkaitan dengan gaya hidup remaja melalui penelitian ilmiah."
      />

      <div className="evidence-guide">
        <span>
          <Icon name="book" />
        </span>
        <div>
          <small>Cara membaca halaman ini</small>
          <h2>Temuan, konteks, dan langkah praktis adalah hal yang berbeda.</h2>
          <p>
            Bagian “Temuan penelitian” merangkum hasil artikel. Bagian
            “Relevansi bagi Bijak Diri” menjelaskan konteks edukasi, bukan bukti
            bahwa latihan di website ini telah diuji atau pasti efektif.
          </p>
        </div>
      </div>

      <div className="research-grid">
        {researchArticles.map((article, index) => (
          <article className="research-card" key={article.id}>
            <div className="research-card-top">
              <span>0{index + 1}</span>
              <div className="topic-list">
                {article.topics.map((topic) => (
                  <small key={topic}>{topic}</small>
                ))}
              </div>
            </div>
            <h2>{article.title}</h2>
            <p className="research-authors">
              {article.authors} · {article.year}
            </p>
            <div className="finding-block">
              <strong>Temuan penelitian</strong>
              <p>{article.finding}</p>
            </div>
            <div className="relevance-block">
              <strong>Relevansi bagi Bijak Diri</strong>
              <p>{article.relevance}</p>
            </div>
            <div className="caution-note">
              <Icon name="info" />
              <p>
                <strong>Catatan ilmiah:</strong> {article.caution}
              </p>
            </div>
            <ResearchSource article={article} />
          </article>
        ))}
      </div>

      <section className="limitations-section">
        <div>
          <small>Penting untuk diingat</small>
          <h2>Batasan Penelitian</h2>
        </div>
        <div>
          <p>
            Hasil penelitian terdahulu menggambarkan pola pada sampel, tempat,
            dan waktu tertentu. Hasil tersebut tidak otomatis berlaku untuk
            semua remaja dan tidak membuktikan sebab-akibat kecuali desain
            penelitiannya memang mendukung kesimpulan tersebut.
          </p>
          <p>
            Materialisme, gaya hidup hedonis, perilaku konsumtif, dan status
            sosial ekonomi adalah konsep yang berbeda. Kondisi ekonomi keluarga
            tidak menentukan harga diri, kepribadian, atau perilaku seseorang.
          </p>
        </div>
      </section>

      <section className="reference-list">
        <small>Daftar pustaka</small>
        <h2>Daftar Referensi</h2>
        <p className="reference-intro">
          Daftar ini berisi sumber yang digunakan di Bijak Diri. Daftar ini
          belum dinyatakan identik dengan daftar pustaka asli skripsi sampai
          dokumen skripsi lengkap dicocokkan.
        </p>
        <ol>
          {researchArticles.map((article) => (
            <li key={article.id}>
              <p>{article.reference}</p>
              <ResearchSource article={article} compact />
            </li>
          ))}
        </ol>
      </section>
    </section>
  )
}

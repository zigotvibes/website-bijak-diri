import { materials, type PageId } from "../data/content"
import { Icon } from "../components/Icons"
import { Button, Eyebrow, ProgressBar } from "../components/UI"

export default function HomePage({
  navigate,
}: {
  navigate: (id: PageId) => void
}) {
  return (
    <>
      <section className="hero section-pad">
        <div className="hero-copy">
          <Eyebrow>Ruang aman untuk tumbuh</Eyebrow>
          <h1>
            Lebih bijak memilih, <em>lebih nyaman</em> menjadi diri sendiri.
          </h1>
          <p>
            Belajar mengenali kebutuhan, mengelola uang sesuai kemampuan, dan
            menghargai diri tanpa harus mengikuti semua tren.
          </p>
          <div className="hero-actions">
            <Button icon="arrow" onClick={() => navigate("checkout")}>
              Mulai Perjalanan
            </Button>
            <Button variant="secondary" onClick={() => navigate("learn")}>
              Jelajahi Materi
            </Button>
          </div>
          <div className="hero-note">
            <div className="mini-avatars">
              <span>J</span>
              <span>A</span>
              <span>S</span>
            </div>
            <p>
              <strong>Langkah kecil tetap berarti.</strong>
              <br />
              Mulai dari bagian yang paling kamu butuhkan.
            </p>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200"
            alt="Dua remaja belajar dan menulis bersama di meja"
          />
          <div className="floating-card float-top">
            <span className="icon-bubble pink">
              <Icon name="heart" />
            </span>
            <div>
              <small>Pengingat hari ini</small>
              <strong>Kamu tidak harus punya semuanya.</strong>
            </div>
          </div>
          <div className="floating-card float-bottom">
            <span className="icon-bubble sage">
              <Icon name="pause" />
            </span>
            <div>
              <small>Sebelum checkout</small>
              <strong>Berhenti. Tarik napas. Cek lagi.</strong>
            </div>
          </div>
          <div className="hero-doodle">✦</div>
        </div>
      </section>
      <section className="intro-strip">
        <p>Hai, selamat datang di ruangmu.</p>
        <span>
          Di sini tidak ada pilihan yang akan dihakimi—hanya ruang untuk
          mengenal diri dan membuat keputusan dengan lebih tenang.
        </span>
      </section>
      <section className="section section-pad">
        <div className="section-heading">
          <div>
            <Eyebrow>Mulai dari sini</Eyebrow>
            <h2>Pilih langkah yang terasa pas untukmu</h2>
          </div>
          <p>
            Tidak harus berurutan. Kamu selalu bisa kembali dan melanjutkan
            kapan saja.
          </p>
        </div>
        <div className="shortcut-grid">
          {[
            {
              id: "checkout" as PageId,
              icon: "pause",
              n: "01",
              title: "Cek sebelum membeli",
              text: "Berhenti sejenak dan pahami keputusanmu.",
            },
            {
              id: "worth" as PageId,
              icon: "heart",
              n: "02",
              title: "Kenali nilai dirimu",
              text: "Refleksi lembut tanpa membandingkan diri.",
            },
            {
              id: "budget" as PageId,
              icon: "wallet",
              n: "03",
              title: "Susun uangmu",
              text: "Buat rencana sederhana sesuai kemampuan.",
            },
          ].map((x, i) => (
            <button
              className={`shortcut-card card-${i + 1}`}
              key={x.id}
              onClick={() => navigate(x.id)}
            >
              <span className="card-number">{x.n}</span>
              <span className="shortcut-icon">
                <Icon name={x.icon} />
              </span>
              <h3>{x.title}</h3>
              <p>{x.text}</p>
              <span className="text-link">
                Mulai sekarang <Icon name="arrow" />
              </span>
            </button>
          ))}
        </div>
      </section>
      <section className="approach section-pad">
        <div className="approach-quote">
          <Icon name="flower" />
          <blockquote>
            “Bijak bukan berarti selalu menolak. Bijak berarti memberi diri
            waktu untuk memilih.”
          </blockquote>
          <span>— Prinsip Bijak Diri</span>
        </div>
        <div className="approach-copy">
          <Eyebrow>Cara kami menemanimu</Eyebrow>
          <h2>Kenali, pahami, hargai.</h2>
          <div className="approach-list">
            {[
              [
                "01",
                "Kenali",
                "Perhatikan kebiasaan, pemicu, dan kebutuhanmu tanpa menyalahkan diri.",
              ],
              [
                "02",
                "Pahami",
                "Pelajari pengaruh tren dan susun pilihan berdasarkan kemampuan.",
              ],
              [
                "03",
                "Hargai",
                "Ingat bahwa nilai dirimu tidak bergantung pada barang yang dimiliki.",
              ],
            ].map((x) => (
              <div key={x[0]}>
                <span>{x[0]}</span>
                <div>
                  <h3>{x[1]}</h3>
                  <p>{x[2]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-pad featured">
        <div className="section-heading">
          <div>
            <Eyebrow>Materi pilihan</Eyebrow>
            <h2>Wawasan pendek, dampak yang panjang</h2>
          </div>
          <Button
            variant="secondary"
            icon="arrow"
            onClick={() => navigate("learn")}
          >
            Lihat semua materi
          </Button>
        </div>
        <div className="material-preview">
          {materials.slice(0, 3).map((m, i) => (
            <article key={m.title} className={`material-card tone-${m.color}`}>
              <div className="material-top">
                <span className="material-icon">
                  <Icon name={m.icon} />
                </span>
                <span>{m.time}</span>
              </div>
              <h3>{m.title}</h3>
              <p>{m.summary}</p>
              <button
                onClick={() => navigate("learn")}
                aria-label={`Pelajari ${m.title}`}
              >
                <Icon name="arrow" />
              </button>
              <span className="material-index">0{i + 1}</span>
            </article>
          ))}
        </div>
      </section>
      <section className="challenge-banner section-pad">
        <div>
          <Eyebrow>Tumbuh pelan-pelan</Eyebrow>
          <h2>Tujuh hari untuk lebih mengenal caramu memilih.</h2>
          <p>
            Satu aktivitas ringan setiap hari. Tanpa peringkat, tanpa tekanan,
            dan boleh diselesaikan sesuai ritmemu.
          </p>
          <Button icon="arrow" onClick={() => navigate("challenge")}>
            Lihat Tantangan 7 Hari
          </Button>
        </div>
        <div className="challenge-preview">
          <div className="week-dots">
            {[1, 2, 3, 4, 5, 6, 7].map((n) => (
              <span key={n} className={n === 1 ? "done" : ""}>
                {n === 1 ? <Icon name="check" /> : n}
              </span>
            ))}
          </div>
          <ProgressBar value={14} label="Perjalananmu" />
          <div className="today-card">
            <span>Hari 1</span>
            <div>
              <strong>Kenali Kebiasaan</strong>
              <small>Catat tanpa menyalahkan diri.</small>
            </div>
            <Icon name="arrow" />
          </div>
        </div>
      </section>
      <section className="affirmation section-pad">
        <span className="affirmation-mark">“</span>
        <h2>
          Nilai diriku tidak ditentukan oleh merek, barang, atau keadaan ekonomi
          keluargaku.
        </h2>
        <p>
          Simpan kalimat ini untuk hari-hari saat dunia terasa terlalu bising.
        </p>
        <Button variant="secondary" onClick={() => navigate("worth")}>
          Tulis refleksiku
        </Button>
      </section>
      <section className="about section-pad">
        <div className="about-copy">
          <Eyebrow>Tentang website</Eyebrow>
          <h2>
            Dibuat sebagai ruang edukasi yang hangat dan bertanggung jawab.
          </h2>
          <p>
            Bijak Diri membantu remaja putri memahami keputusan konsumsi dan
            penerimaan diri melalui materi singkat, refleksi pribadi, serta alat
            praktis. Prototipe ini tidak mengumpulkan data penelitian dan tidak
            menggantikan bantuan profesional.
          </p>
        </div>
        <div className="about-author">
          <img
            src="/muhammad-badai-al-badi.png"
            alt="Foto Muhammad Badai Al-Badi"
          />
          <div>
            <small>Pengembang Website Bijak Diri</small>
            <h3>Muhammad Badai Al-Badi</h3>
            <p>NIM P17320123469</p>
          </div>
        </div>
      </section>
    </>
  )
}

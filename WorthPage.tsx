import { useEffect, useState } from "react"
import { Button, Modal, PageHeader } from "../components/UI"
import { Icon } from "../components/Icons"
import { ResearchContext } from "../components/ResearchSource"
import { getResearch } from "../data/content"
const prompts = [
  "Tiga Hal yang Aku Hargai dari Diriku",
  "Kapan Aku Sering Membandingkan Diri?",
  "Apa yang Bisa Kulakukan Saat Tidak Bisa Mengikuti Tren?",
  "Hal yang Membuatku Berharga Selain Barang yang Kumiliki",
]
export default function WorthPage({ toast }: { toast: (m: string) => void }) {
  const [values, setValues] = useState<string[]>(["", "", "", ""])
  const [confirm, setConfirm] = useState(false)
  const [editing, setEditing] = useState(true)
  useEffect(() => {
    try {
      const x = localStorage.getItem("bijak-reflections")
      if (x) {
        setValues(JSON.parse(x))
        setEditing(false)
      }
    } catch {}
  }, [])
  const save = () => {
    localStorage.setItem("bijak-reflections", JSON.stringify(values))
    setEditing(false)
    toast("Refleksimu tersimpan di perangkat ini.")
  }
  const clear = () => {
    setValues(["", "", "", ""])
    localStorage.removeItem("bijak-reflections")
    setConfirm(false)
    setEditing(true)
    toast("Refleksi telah dibersihkan.")
  }
  return (
    <section className="section section-pad worth-page">
      <PageHeader
        eyebrow="Ruang pribadi"
        title="Aku Berharga"
        description="Tidak ada jawaban sempurna. Tulis dengan jujur, pelan-pelan, dan hanya sejauh yang terasa nyaman."
      />
      <div className="affirmation-card">
        <Icon name="flower" />
        <div>
          <small>Afirmasi untukmu</small>
          <h2>
            “Nilai diriku tidak ditentukan oleh merek, barang, atau keadaan
            ekonomi keluargaku.”
          </h2>
        </div>
      </div>
      <ResearchContext
        title="Kamu lebih dari apa yang terlihat dan dimiliki"
        articles={getResearch("wang-2020", "zawadzka-2022")}
        disclaimer="Kedua penelitian memberi konteks tentang lingkungan, materialisme, dan kebutuhan penerimaan sosial; keduanya tidak membuktikan bahwa latihan refleksi ini pasti efektif."
      >
        <p>
          Lingkungan sosial, paparan media, dan kebutuhan untuk diterima dapat
          berkaitan dengan materialisme (Wang et al., 2020; Zawadzka et al.,
          2022). Namun, harga dirimu tidak ditentukan oleh barang bermerek,
          penampilan, jumlah pengikut, atau kondisi ekonomi keluarga.
        </p>
      </ResearchContext>
      <div className="local-note">
        <Icon name="lock" />
        <p>
          <strong>Catatan privasi:</strong> Refleksi hanya disimpan secara lokal
          di perangkat ini sebagai prototipe, bukan di server.
        </p>
      </div>
      <div className="journal-grid">
        {prompts.map((p, i) => (
          <label className="journal-card" key={p}>
            <span>0{i + 1}</span>
            <h3>{p}</h3>
            <small>
              {i === 0
                ? "Boleh tentang sifat, usaha, atau hal kecil yang kamu lakukan."
                : "Tulis apa yang muncul di pikiranmu tanpa menghakimi."}
            </small>
            <textarea
              disabled={!editing}
              value={values[i]}
              onChange={(e) => {
                const n = [...values]
                n[i] = e.target.value
                setValues(n)
              }}
              placeholder="Aku ingin menulis..."
              rows={5}
            />
            <em>{values[i].length} karakter</em>
          </label>
        ))}
      </div>
      <div className="form-actions">
        <Button
          variant="secondary"
          icon="edit"
          onClick={() => setEditing(true)}
        >
          Edit
        </Button>
        <Button
          variant="danger"
          icon="trash"
          disabled={!values.some(Boolean)}
          onClick={() => setConfirm(true)}
        >
          Bersihkan
        </Button>
        <Button
          icon="check"
          disabled={!editing || !values.some(Boolean)}
          onClick={save}
        >
          Simpan Refleksi
        </Button>
      </div>
      {confirm && (
        <Modal
          title="Bersihkan semua refleksi?"
          onCancel={() => setConfirm(false)}
          onConfirm={clear}
        >
          Isi yang sudah ditulis akan dihapus dari perangkat ini dan tidak dapat
          dikembalikan.
        </Modal>
      )}
    </section>
  )
}

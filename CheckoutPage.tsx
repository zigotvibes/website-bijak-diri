import { useState } from "react"
import { Button, PageHeader, ProgressBar } from "../components/UI"
import { Icon } from "../components/Icons"
import { ResearchContext } from "../components/ResearchSource"
import { getResearch } from "../data/content"
const questions = [
  [
    "Apakah barang ini kebutuhan atau keinginan?",
    ["Kebutuhan", "Keinginan", "Belum yakin"],
  ],
  [
    "Apa alasan utama kamu ingin membelinya?",
    [
      "Kebutuhan",
      "Diskon",
      "Tren",
      "Tekanan teman",
      "Ingin lebih percaya diri",
    ],
  ],
  [
    "Apakah uang untuk kebutuhan utama sudah tersedia?",
    ["Sudah", "Belum", "Belum yakin"],
  ],
  [
    "Bisakah dibeli tanpa mengganggu kebutuhan lain?",
    ["Bisa", "Tidak bisa", "Perlu dihitung lagi"],
  ],
  [
    "Apakah kamu berencana menggunakan PayLater?",
    ["Tidak", "Ya", "Masih mempertimbangkan"],
  ],
  [
    "Jika memakai PayLater, apakah detail tagihan, biaya, jatuh tempo, dan konsekuensinya sudah dipahami?",
    ["Sudah paham", "Belum paham", "Tidak menggunakan PayLater"],
  ],
]
export default function CheckoutPage() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const done = step === questions.length
  const choose = (v: string) => {
    const n = [...answers]
    n[step] = v
    setAnswers(n)
  }
  const reset = () => {
    setStep(0)
    setAnswers([])
  }
  return (
    <section className="section section-pad checkout-page">
      <PageHeader
        eyebrow="Jeda sebelum membeli"
        title="Cek Sebelum Checkout"
        description="Enam pertanyaan singkat untuk membantumu memilih dengan lebih tenang. Tidak ada jawaban benar atau salah."
      />
      <ResearchContext
        title="Sebelum membeli, berhenti sejenak"
        articles={getResearch("wang-2020")}
        disclaimer="Pertanyaan refleksi di website ini adalah saran praktis. Wang et al. (2020) tidak menguji efektivitas fitur Cek Sebelum Checkout."
      >
        <p>
          Kebutuhan untuk diterima dan penggunaan jejaring sosial ditemukan
          berkaitan dengan materialisme pada sampel penelitian Wang et al.
          (2020). Hubungan ini tidak berarti media sosial selalu menyebabkan
          materialisme.
        </p>
        <ul>
          <li>Apakah barang ini benar-benar kubutuhkan?</li>
          <li>Apakah aku takut tertinggal dari teman atau tren?</li>
          <li>Apakah aku merasa perlu memilikinya agar diterima?</li>
          <li>Apa yang bisa kulakukan saat mulai membandingkan diri?</li>
        </ul>
      </ResearchContext>
      {!done ? (
        <div className="wizard">
          <div className="wizard-side">
            <span className="step-count">
              Langkah {step + 1} dari {questions.length}
            </span>
            <ProgressBar value={((step + 1) / questions.length) * 100} />
            <div className="step-list">
              {questions.map((_, i) => (
                <div
                  key={i}
                  className={`${i === step ? "active" : ""} ${
                    i < step ? "done" : ""
                  }`}
                >
                  <span>{i < step ? <Icon name="check" /> : i + 1}</span>
                  <p>
                    {i === step
                      ? "Sedang dijawab"
                      : i < step
                        ? "Selesai"
                        : "Berikutnya"}
                  </p>
                </div>
              ))}
            </div>
            <div className="privacy-note">
              <Icon name="lock" />
              <p>
                <strong>Jawabanmu tetap privat.</strong> Data ini tidak dikirim
                ke server.
              </p>
            </div>
          </div>
          <div className="question-card">
            <span className="question-label">Pertanyaan {step + 1}</span>
            <h2>{questions[step][0]}</h2>
            <div className="options">
              {questions[step][1].map((opt) => (
                <button
                  key={opt}
                  className={answers[step] === opt ? "selected" : ""}
                  onClick={() => choose(opt)}
                >
                  <span>
                    {answers[step] === opt ? <Icon name="check" /> : ""}
                  </span>
                  {opt}
                </button>
              ))}
            </div>
            <div className="wizard-actions">
              <Button
                variant="secondary"
                disabled={step === 0}
                onClick={() => setStep(step - 1)}
              >
                Kembali
              </Button>
              <Button
                icon="arrow"
                disabled={!answers[step]}
                onClick={() => setStep(step + 1)}
              >
                {step === questions.length - 1 ? "Lihat ringkasan" : "Lanjut"}
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="result-card">
          <span className="result-icon">
            <Icon name="pause" />
          </span>
          <small>Terima kasih sudah memberi diri waktu</small>
          <h2>Tidak perlu terburu-buru.</h2>
          <p>
            Jika barang ini bukan kebutuhan mendesak, kamu bisa menyimpannya
            dalam daftar keinginan dan mempertimbangkannya kembali dalam 24–48
            jam.
          </p>
          <div className="answer-summary">
            {answers.map((a, i) => (
              <div key={i}>
                <span>{i + 1}</span>
                <p>{questions[i][0]}</p>
                <strong>{a}</strong>
              </div>
            ))}
          </div>
          <div className="gentle-tip">
            <Icon name="heart" />
            <p>
              <strong>Ingat:</strong> keputusan terbaik adalah yang selaras
              dengan kebutuhan dan kemampuanmu saat ini.
            </p>
          </div>
          <Button onClick={reset}>Cek barang lain</Button>
        </div>
      )}
    </section>
  )
}

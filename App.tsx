import { useEffect, useState } from "react"
import { Layout } from "./components/Layout"
import { Toast } from "./components/UI"
import type { PageId } from "./data/content"
import HomePage from "./pages/HomePage"
import LearnPage from "./pages/LearnPage"
import CheckoutPage from "./pages/CheckoutPage"
import WorthPage from "./pages/WorthPage"
import BudgetPage from "./pages/BudgetPage"
import ChallengePage from "./pages/ChallengePage"
import ProgressPage from "./pages/ProgressPage"
import ResearchPage from "./pages/ResearchPage"

export default function App() {
  const [page, setPage] = useState<PageId>("home")
  const [toast, setToast] = useState("")
  const [learned, setLearned] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("bijak-learned") || "[]")
    } catch {
      return []
    }
  })
  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(""), 3600)
    return () => clearTimeout(t)
  }, [toast])
  const navigate = (id: PageId) => {
    setPage(id)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  const mark = (title: string) => {
    if (!learned.includes(title)) {
      const n = [...learned, title]
      setLearned(n)
      localStorage.setItem("bijak-learned", JSON.stringify(n))
      setToast("Materi ditandai sudah dipelajari.")
    }
  }
  const pages = {
    home: <HomePage navigate={navigate} />,
    learn: <LearnPage onLearned={mark} />,
    checkout: <CheckoutPage />,
    worth: <WorthPage toast={setToast} />,
    budget: <BudgetPage />,
    challenge: <ChallengePage toast={setToast} />,
    progress: <ProgressPage learned={learned} />,
    research: <ResearchPage />,
  }
  return (
    <Layout active={page} navigate={navigate}>
      {pages[page]}
      {toast && <Toast message={toast} onClose={() => setToast("")} />}
    </Layout>
  )
}

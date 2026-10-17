import type { ResearchArticle } from "../data/content"
import { Button } from "./UI"

function openExternal(url: string) {
  window.open(url, "_blank", "noopener,noreferrer")
}

export function ResearchSource({
  article,
  compact = false,
}: {
  article: ResearchArticle
  compact?: boolean
}) {
  return (
    <aside className={`research-source ${compact ? "compact" : ""}`}>
      <small>Sumber penelitian</small>
      <strong>{article.citation}</strong>
      {!compact && (
        <>
          <cite>{article.title}</cite>
          <span>
            {article.journal}, {article.publication}
          </span>
        </>
      )}
      <button
        className="doi-link"
        onClick={() => openExternal(article.doi)}
        aria-label={`Buka DOI ${article.citation} di tab baru`}
      >
        {article.doi}
      </button>
      <Button
        variant="ghost"
        icon="external"
        onClick={() => openExternal(article.articleUrl)}
      >
        Baca sumber asli
      </Button>
    </aside>
  )
}

export function ResearchContext({
  title,
  children,
  articles,
  disclaimer,
}: {
  title: string
  children: React.ReactNode
  articles: ResearchArticle[]
  disclaimer: string
}) {
  return (
    <section className="research-context">
      <div className="research-context-copy">
        <small>Konteks dari penelitian</small>
        <h2>{title}</h2>
        <div>{children}</div>
        <p className="context-disclaimer">{disclaimer}</p>
      </div>
      <div className="research-context-sources">
        {articles.map((article) => (
          <ResearchSource key={article.id} article={article} compact />
        ))}
      </div>
    </section>
  )
}

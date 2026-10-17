import { useState, type ReactNode } from "react"
import { navItems, type PageId } from "../data/content"
import { Icon } from "./Icons"
import { Button } from "./UI"

export function Logo({ onClick }: { onClick: () => void }) {
  return (
    <button className="logo" onClick={onClick} aria-label="Ke Beranda">
      <span className="logo-mark">
        <Icon name="leaf" />
      </span>
      <span>
        Bijak Diri<small>ruang tumbuhmu</small>
      </span>
    </button>
  )
}

export function Layout({
  active,
  navigate,
  children,
}: {
  active: PageId
  navigate: (id: PageId) => void
  children: ReactNode
}) {
  const [menu, setMenu] = useState(false)
  return (
    <div className="app-shell">
      <header className="navbar">
        <div className="nav-inner">
          <Logo onClick={() => navigate("home")} />
          <nav className="desktop-nav" aria-label="Navigasi utama">
            {navItems.slice(0, 4).map((item) => (
              <button
                key={item.id}
                className={active === item.id ? "active" : ""}
                onClick={() => navigate(item.id)}
              >
                {item.short}
              </button>
            ))}
            <div className="nav-more">
              <button>
                Lainnya <span>⌄</span>
              </button>
              <div className="nav-dropdown">
                {navItems.slice(4).map((item) => (
                  <button
                    key={item.id}
                    className={active === item.id ? "active" : ""}
                    onClick={() => navigate(item.id)}
                  >
                    <Icon
                      name={
                        item.id === "budget"
                          ? "wallet"
                          : item.id === "challenge"
                            ? "spark"
                            : item.id === "research"
                              ? "book"
                              : "chart"
                      }
                    />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </nav>
          <Button className="desktop-cta" onClick={() => navigate("checkout")}>
            Cek keputusanmu
          </Button>
          <button
            className="mobile-menu-button"
            onClick={() => setMenu(!menu)}
            aria-label="Buka menu"
            aria-expanded={menu}
          >
            <Icon name={menu ? "close" : "menu"} />
          </button>
        </div>
        {menu && (
          <nav className="mobile-menu" aria-label="Navigasi seluler">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={active === item.id ? "active" : ""}
                onClick={() => {
                  navigate(item.id)
                  setMenu(false)
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </header>
      <main>{children}</main>
      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <Logo onClick={() => navigate("home")} />
            <p>
              Ruang belajar dan refleksi untuk memilih lebih sadar, mengelola
              uang sesuai kemampuan, dan tetap menghargai diri.
            </p>
          </div>
          <div className="footer-links">
            <div>
              <strong>Jelajahi</strong>
              {navItems.slice(1, 4).map((i) => (
                <button key={i.id} onClick={() => navigate(i.id)}>
                  {i.short}
                </button>
              ))}
            </div>
            <div>
              <strong>Temani dirimu</strong>
              {navItems.slice(4).map((i) => (
                <button key={i.id} onClick={() => navigate(i.id)}>
                  {i.short}
                </button>
              ))}
            </div>
          </div>
          <div className="author-card">
            <img
              src="/muhammad-badai-al-badi.png"
              alt="Muhammad Badai Al-Badi"
            />
            <div>
              <small>Dikembangkan oleh</small>
              <strong>Muhammad Badai Al-Badi</strong>
              <span>NIM P17320123469</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Bijak Diri. Prototipe edukasi.</span>
          <span>
            <Icon name="lock" /> Data refleksi tersimpan hanya di perangkatmu.
          </span>
        </div>
      </footer>
      <nav className="bottom-nav" aria-label="Navigasi cepat">
        {[navItems[0], navItems[1], navItems[2], navItems[5]].map(
          (item, index) => (
            <button
              key={item.id}
              className={active === item.id ? "active" : ""}
              onClick={() => navigate(item.id)}
            >
              <Icon name={["home", "book", "pause", "spark"][index]} />
              <span>{item.short}</span>
            </button>
          ),
        )}
        <button onClick={() => setMenu(true)}>
          <Icon name="menu" />
          <span>Menu</span>
        </button>
      </nav>
    </div>
  )
}

import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { label: 'О нас', href: '#about' },
  { label: 'Тарифы', href: '#pricing' },
  { label: 'Контакты', href: '#contacts' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.72)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.07)' : '1px solid transparent',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="select-none">
          <img
            src="https://cdn.poehali.dev/projects/f4fbcbce-665a-43d8-b74a-7833718f15fc/bucket/68f8c3cf-211d-4b3c-8d80-73327402c1ca.png"
            alt="Сайты Прибайкалья"
            className="h-10 w-auto"
          />
        </a>

        <nav className="flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleClick(e, href)}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
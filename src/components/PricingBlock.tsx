const services = [
  {
    title: 'Разработка лендинга',
    subtitle: 'Одностраничный продающий сайт',
    price: 'от 8 000 руб.',
    icon: '🖥️',
  },
  {
    title: 'Многостраничный сайт на WordPress',
    subtitle: 'Полноценный корпоративный сайт',
    price: 'от 40 000 руб.',
    icon: '🌐',
  },
  {
    title: 'Хостинг, домен и размещение',
    subtitle: 'Подбор, настройка и публикация сайта',
    price: 'от 4 000 руб.',
    icon: '🚀',
  },
];

const PricingBlock = () => {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center">Расценки</h2>
        <p className="mt-3 text-muted-foreground text-center">Наведите на карточку, чтобы узнать цену</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group h-52" style={{ perspective: '1000px' }}>
              <div
                className="relative w-full h-full transition-transform duration-700"
                style={{ transformStyle: 'preserve-3d', transform: 'rotateY(0deg)' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'rotateY(180deg)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'rotateY(0deg)')}
              >
                {/* Лицевая сторона */}
                <div
                  className="absolute inset-0 rounded-2xl border border-border bg-card shadow flex flex-col items-center justify-center gap-3 p-6 text-center"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <span className="text-4xl">{s.icon}</span>
                  <h3 className="text-base font-semibold text-foreground leading-snug">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.subtitle}</p>
                </div>

                {/* Оборотная сторона */}
                <div
                  className="absolute inset-0 rounded-2xl bg-primary shadow flex flex-col items-center justify-center gap-2 p-6 text-center"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <span className="text-4xl">{s.icon}</span>
                  <p className="text-primary-foreground text-sm font-medium">{s.title}</p>
                  <p className="text-primary-foreground text-2xl font-bold">{s.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingBlock;

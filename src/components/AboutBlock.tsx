const features = [
  'Конверсионные лендинги за 1–2 недели',
  'Понятный интерфейс и современный дизайн',
  'Мобильная адаптивность (проверяю на всех устройствах)',
  'Поддержка после запуска',
];

const AboutBlock = () => {
  return (
    <section className="py-16 px-6 bg-muted/40 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center">Обо мне</h2>

        <div className="mt-8 space-y-4 text-foreground/80 leading-relaxed text-base">
          <p>
            Я создаю сайты и лендинги, которые работают. За 5 лет работы реализовал много сайтов. Верю, что хороший лендинг — это не только дизайн, но и чёткая логика: куда смотреть, что читать, куда нажимать.
          </p>
          <p>
            Помогу вам рассказать о продукте так, чтобы клиенты захотели связаться с вами. Клиенты возвращаются и рекомендуют меня друзьям — это лучшая оценка моей работы.
          </p>
        </div>

        <ul className="mt-6 space-y-3">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span className="text-foreground/80">{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 space-y-3">
          <p className="text-foreground font-semibold text-lg">
            Сделаю лендинг, который приводит к вам клиентов.
          </p>
          <p className="text-foreground/80">
            Если нужен полноценный многостраничный сайт — сделаю на самой лучшей системе управления контентом: <span className="font-semibold text-foreground">WordPress</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutBlock;

import Icon from '@/components/ui/icon';

const ContactsBlock = () => {
  return (
    <section className="bg-muted/40 border-t border-border py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Свяжитесь со мной</h2>
        <p className="mt-3 text-muted-foreground">Обсудим ваш проект — отвечу быстро</p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="tel:+79025768517"
            className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto justify-center"
          >
            <Icon name="Phone" size={20} />
            <div className="text-left">
              <div className="text-xs opacity-80">Позвонить</div>
              <div className="font-semibold">+7 902 576-85-17</div>
            </div>
          </a>

          <a
            href="mailto:huntertruck@yandex.ru"
            className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-border bg-background hover:bg-accent transition-all shadow hover:shadow-md hover:-translate-y-0.5 w-full sm:w-auto justify-center"
          >
            <Icon name="Mail" size={20} />
            <div className="text-left">
              <div className="text-xs text-muted-foreground">Написать</div>
              <div className="font-semibold text-foreground">huntertruck@yandex.ru</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactsBlock;

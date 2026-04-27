import { useState } from 'react';
import Icon from '@/components/ui/icon';

type Portfolio = {
  image: string;
  title: string;
  description: string;
};

type PortfolioModalProps = {
  open: boolean;
  onClose: () => void;
  items: Portfolio[];
};

const PortfolioModal = ({ open, onClose, items }: PortfolioModalProps) => {
  const [current, setCurrent] = useState(0);

  if (!open) return null;

  const prev = () => setCurrent((c) => (c - 1 + items.length) % items.length);
  const next = () => setCurrent((c) => (c + 1) % items.length);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="relative bg-background rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-accent transition-colors"
        >
          <Icon name="X" size={20} />
        </button>

        <div className="relative aspect-video bg-muted overflow-hidden">
          <img
            src={items[current].image}
            alt={items[current].title}
            className="w-full h-full object-cover transition-opacity duration-300"
          />

          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background transition-colors shadow"
          >
            <Icon name="ChevronLeft" size={22} />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background transition-colors shadow"
          >
            <Icon name="ChevronRight" size={22} />
          </button>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold text-foreground">{items[current].title}</h3>
          <p className="mt-1 text-muted-foreground">{items[current].description}</p>

          <div className="mt-4 flex items-center justify-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-primary w-4' : 'bg-muted-foreground/40'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;

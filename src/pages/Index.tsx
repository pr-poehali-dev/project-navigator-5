import ArcGalleryHero from "@/components/ArcGalleryHero";

const Index = () => {
  const images = [
    "https://cdn.poehali.dev/projects/f4fbcbce-665a-43d8-b74a-7833718f15fc/files/bc874a76-d215-4fbb-b8b1-ad2ce27d65f0.jpg",
    "https://cdn.poehali.dev/projects/f4fbcbce-665a-43d8-b74a-7833718f15fc/files/2799dd8b-e15e-4aa7-80f6-db5375e7fc2b.jpg",
    "https://cdn.poehali.dev/projects/f4fbcbce-665a-43d8-b74a-7833718f15fc/files/ebb065fe-f124-4db0-b5a8-8086c72b4fce.jpg",
    "https://cdn.poehali.dev/projects/f4fbcbce-665a-43d8-b74a-7833718f15fc/files/4e358922-c1e9-486c-9f76-8df2c70dd2e3.jpg",
    "https://cdn.poehali.dev/projects/f4fbcbce-665a-43d8-b74a-7833718f15fc/files/0c2f06f2-85ea-4957-8a22-44750ce41215.jpg",
  ];

  return (
    <main className="relative min-h-screen bg-background">
      <ArcGalleryHero
        images={images}
        startAngle={20}
        endAngle={160}
        radiusLg={480}
        radiusMd={360}
        radiusSm={260}
        cardSizeLg={120}
        cardSizeMd={100}
        cardSizeSm={80}
        className="pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24"
      />
    </main>
  );
};

export default Index;
import ArcGalleryHero from "@/components/ArcGalleryHero";
import ContactsBlock from "@/components/ContactsBlock";

const Index = () => {
  const images = [
    "https://cdn.poehali.dev/projects/f4fbcbce-665a-43d8-b74a-7833718f15fc/bucket/9ee96e8f-f05a-45be-bdb4-ab4c2c119c0e.PNG",
    "https://cdn.poehali.dev/projects/f4fbcbce-665a-43d8-b74a-7833718f15fc/bucket/f7e54347-ebd1-4c00-9b1b-c4e266cbc20a.PNG",
    "https://cdn.poehali.dev/projects/f4fbcbce-665a-43d8-b74a-7833718f15fc/bucket/ff638e15-2d08-417f-90dc-ef5481bdf305.PNG",
    "https://cdn.poehali.dev/projects/f4fbcbce-665a-43d8-b74a-7833718f15fc/bucket/3051946d-b393-41a6-8b4a-f11e2004385f.PNG",
    "https://cdn.poehali.dev/projects/f4fbcbce-665a-43d8-b74a-7833718f15fc/bucket/37b2df29-ef58-4c3f-9bbe-990f0c3f2e83.PNG",
    "https://cdn.poehali.dev/projects/f4fbcbce-665a-43d8-b74a-7833718f15fc/bucket/e7326656-2f73-4af0-a52d-2af2ca18b5e5.PNG",
    "https://cdn.poehali.dev/projects/f4fbcbce-665a-43d8-b74a-7833718f15fc/bucket/71a62a83-4529-4f01-8d2a-0ba3d9f088c4.PNG",
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
      <ContactsBlock />
    </main>
  );
};

export default Index;
import Image from "next/image";

import {Button} from "@/components/ui/button";
import api from "@/api";

export default async function HomePage() {
  const campaigns = await api.campaign.list();

  return (
    <main className="flex-1">
      {campaigns.map((campaign, index) => (
        <section
          key={campaign.title}
          className={`w-full ${index % 2 === 1 ? "bg-gray-500/5 dark:bg-gray-800" : ""} py-12 md:py-24 lg:py-32`}
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <Image
                alt={campaign.imageAlt}
                className={`mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full ${index % 2 === 1 ? "lg:order-last" : ""}`}
                height={550}
                src={campaign.imageSrc}
                width={550}
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    {campaign.title}
                  </h2>
                  <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                    {campaign.description}
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  {campaign.buttons.map((button) => (
                    <Button
                      key={button.text}
                      variant={button.variant as "default" | "secondary" | "outline"}
                    >
                      {button.text}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}

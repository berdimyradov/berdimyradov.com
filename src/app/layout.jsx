import { Providers } from "@/app/providers";
import { Layout } from "@/shared/components/Layout";

import "@/shared/styles/tailwind.css";

export const metadata = {
  title: {
    template: "%s - Kerim Berdimyradov",
    default:
      "Kerim Berdimyradov - Software designer, founder, and amateur astronaut",
  },
  description:
    "I’m Kerim, a software designer and entrepreneur based in Mary, Turkmenistan. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}

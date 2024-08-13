import { Providers } from "@/app/providers";
import { Layout } from "@/shared/components/Layout";

import "@/shared/styles/tailwind.css";

export const metadata = {
  title: {
    template: "%s - Kerim Berdimyradov",
    default:
      "Kerim Berdimyradov - Software designer, creator, and amateur actor",
  },
  description:
    "I'm Kerim, an innovative software designer, spirited entrepreneur, and stage enthusiast. Balancing technology with artistry, I craft solutions that empower and inspire. Join my journey of code, creativity, and empowerment!",
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

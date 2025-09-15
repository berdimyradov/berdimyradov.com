import { Providers } from "@/app/providers";
import DB from "@/entities/db.json";
import { Layout } from "@/shared/components/Layout";

import "@/shared/styles/tailwind.css";

export const metadata = {
  title: {
    template: `%s - ${DB.profile.name}`,
    default:
      `${DB.profile.name} - ${DB.profile.title}`,
  },
  description: DB.profile.description,
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

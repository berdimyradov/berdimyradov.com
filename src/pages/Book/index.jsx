import { Container } from "@/shared/components/Container";

export const metadata = {
  title: "Book",
  description: "",
};

export const BookPage = () => {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Book Page
          </h1>
        </div>
      </div>
    </Container>
  );
};
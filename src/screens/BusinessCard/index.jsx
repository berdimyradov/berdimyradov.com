import { Button } from "@/shared/components/Button";
import { ArrowDownIcon, GlobeIcon } from "@/shared/components/Icons";
import { SimpleLayout } from "@/shared/components/SimpleLayout";
import { GitHubIcon } from "@/shared/components/SocialIcons";
import { SocialLinks } from "@/widgets/SocialLinks";

export default function BusinessCardPage() {
  return (
    <SimpleLayout
      title="Kerim Berdimyradov"
      intro="I craft tech solutions that empower. Join me!">
      <div className="-mt-8 mb-4 flex justify-center">
        <SocialLinks />
      </div>

      <div className="mx-auto max-w-lg">
        <Button
          href="/cv"
          target="_blank"
          variant="primary"
          className="group mt-6 w-full">
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
          Download CV
        </Button>
        <Button
          href="/"
          target="_blank"
          variant="primary"
          className="group mt-6 w-full">
          <GlobeIcon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
          {/* <GlobeAtIcon className="h-6 w-6 " /> */}
          Personal Website
        </Button>
        <Button
          href="https://github.com/berdimyradov"
          target="_blank"
          variant="primary"
          className="group mt-6 w-full">
          <GitHubIcon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
          GitHub
        </Button>
      </div>
    </SimpleLayout>
  );
}

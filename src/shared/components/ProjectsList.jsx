"use client";

import { Badge } from "@/shared/components/Badge";
import { Button } from "@/shared/components/Button";
import { ArrowDownIcon, BriefcaseIcon } from "@/shared/components/Icons";
import logoBargetir from "@/shared/images/logos/bargetir.jpeg";
import logoBook from "@/shared/images/logos/book.svg";
import logoCv from "@/shared/images/logos/cv.svg";
import logoFsd from "@/shared/images/logos/fsd.png";
import logoPizza from "@/shared/images/logos/pizza.svg";
import logoPokeball from "@/shared/images/logos/pokeball.png";
import Image from "next/image";

export function ProjectsList() {
  let projects = [
    {
      title: "FS-RN-Todo-app",
      desc: "To-dos? Done, with FSD",
      logo: logoFsd,
      start: "2011",
      end: "2014",
      status: <Badge title="Live" variant="success" />,
    },
    {
      title: "CVMS",
      desc: "Dynamic CVs, Dynamic Careers",
      logo: logoCv,
      start: "2008",
      end: "2011",
      status: <Badge title="Live" variant="success" />,
    },
    {
      title: "Book",
      desc: "Pages from My Life’s Book",
      logo: logoBook,
      start: "2011",
      end: "2014",
      status: <Badge title="Live" variant="success" />,
    },
    {
      title: "Harpoon",
      desc: "Catch Pokemon, Like a Pro",
      logo: logoPokeball,
      start: "2008",
      end: "2011",
      status: <Badge title="Live" variant="success" />,
    },
    {
      title: "BarGetir",
      desc: "Hungry? We've Got You Covered",
      logo: logoBargetir,
      start: "2019",
      end: {
        label: "Present",
        dateTime: new Date().getFullYear(),
      },
      status: <Badge title="Down" />,
    },
    {
      title: "BarGetir Cheff",
      desc: "Boost Biz with Speedy Delivery",
      logo: logoPizza,
      start: "2014",
      end: "2019",
      status: <Badge title="Down" />,
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Projects</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {projects.map((project, index) => (
          <li key={index} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-7 w-7 rounded-full"
                // unoptimized
              />
            </div>
            <dl className="grid w-full grid-cols-[1fr_80px] grid-rows-[22px_1fr] gap-x-2 items-center">
              <dt className="sr-only">Project</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {project.title}
              </dd>
              <dt className="sr-only">Status</dt>
              <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500 row-span-2">
                {project.status}
              </dd>
              <dt className="sr-only">Project description</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {project.desc}
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button
        href="/CV_Berdimyradov-Kerim[FE].pdf"
        target="_blank"
        variant="secondary"
        className="group mt-6 w-full"
      >
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  );
}

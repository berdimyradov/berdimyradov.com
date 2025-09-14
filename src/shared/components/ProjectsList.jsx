"use client";

import { PROJECT_LOGOS, PROJECTS as projects } from "@/entities/projects/model/data";
import { Button } from "@/shared/components/Button";
import { ArrowDownIcon, BriefcaseIcon } from "@/shared/components/Icons";
import Image from "next/image";
import { Badge } from "./Badge";

export function ProjectsList() {
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
                src={PROJECT_LOGOS[project.id]}
                alt=""
                width={28}
                height={28}
                className="h-7 w-7 rounded-full bg-zinc-100 dark:bg-zinc-900/50"
                // unoptimized
              />
            </div>
            <dl className="grid w-full grid-cols-[1fr_80px] grid-rows-[22px_1fr] items-center gap-x-2">
              <dt className="sr-only">Project</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {project.title}
              </dd>
              <dt className="sr-only">Status</dt>
              <dd className="row-span-2 ml-auto text-xs text-zinc-400 dark:text-zinc-500">
                {project.status === 'online' && <Badge title="Live" variant="success" />}
                {project.status === 'offline' && <Badge title="Down" />}
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
        href="/cv"
        target="_blank"
        variant="secondary"
        className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  );
}

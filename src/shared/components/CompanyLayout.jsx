"use client";

import { useRouter } from "next/navigation";
import { useContext } from "react";

import { AppContext } from "@/app/providers";
import { Container } from "@/shared/components/Container";
import {
  ArrowLeftIcon,
  DevicePhoneMobileIcon,
} from "@/shared/components/Icons";
import { formatDate } from "@/shared/lib/formatDate";
import Link from "next/link";
import { Badge } from "@/shared/components/Badge";

function CompanyProject({ project }) {
  return (
    <div className="grid grid-cols-[50px_1fr_100px] grid-row-[50px_1fr_1fr_1fr] gap-2 items-center">
      <div className="border-gray-500 border rounded-full w-12 h-12 flex justify-center items-center">
        <DevicePhoneMobileIcon className="w-6 h-6" />
      </div>
      <div className="">
        <p className="text-sm font-semibold ">
          <a href={project.url} className="hover:underline" target="_blank">
            {project.title}
          </a>
        </p>
        <p className="text-sm text-gray-500">{project.role}</p>
      </div>

      <div className="">icons here</div>

      <div className="flex flex-wrap w-full col-span-3 gap-x-2 my-1.5">
        {project.env.map((e) => (
          <Badge title={e} />
        ))}
      </div>

      <p className="col-span-3 text-gray-400">{project.desc}</p>

      <div className="px-4 sm:col-span-2 sm:px-0 col-span-3">
        <span className="text-sm font-medium leading-6">Responsibilities</span>
        <ul
          role="list"
          className="divide-y divide-gray-100 rounded-md border border-gray-200 mt-0.5"
        >
          {project.resps.map((resp) => (
            <li className="flex items-center justify-between py-1.5 pl-1.5 text-sm leading-6">
              <div className="flex w-0 flex-1 items-center">
                <div className="ml-4 flex min-w-0 flex-1">
                  <span className="truncate">{resp}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function CompanyLayout({ children, company, isRssFeed = false }) {
  let router = useRouter();
  let { previousPathname } = useContext(AppContext);

  if (isRssFeed) {
    return children;
  }

  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          {previousPathname && (
            <button
              type="button"
              onClick={() => router.back()}
              aria-label="Go back to companies"
              className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0"
            >
              <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
            </button>
          )}
          <article>
            <header className="flex flex-col">
              {company.url ? (
                <Link
                  href={company.url}
                  className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                  target="_blank"
                >
                  <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl hover:underline">
                    {company.title}
                  </h1>
                </Link>
              ) : (
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  {company.title}
                </h1>
              )}
              <time
                dateTime={company.date}
                className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
              >
                <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                <span className="ml-3">{`${formatDate(
                  company.date
                )} - ${formatDate(company.exitDate)}`}</span>
              </time>
            </header>
            <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
              <div className="flex max-w-3xl flex-col gap-y-16 mt-8">
                {company.projects.map((project) => (
                  <CompanyProject project={project} />
                ))}
              </div>
            </div>
            {/* <Prose className="mt-8" data-mdx-content>
              {children}
            </Prose> */}
          </article>
        </div>
      </div>
    </Container>
  );
}

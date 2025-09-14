"use client";

import { AppContext } from "@/app/providers";
import { Badge } from "@/shared/components/Badge";
import { Container } from "@/shared/components/Container";
import {
  AppleIcon,
  ArrowLeftIcon,
  ChevronUpIcon,
  // DevicePhoneMobileIcon,
  GlobeAtIcon,
  GooglePlayIcon,
} from "@/shared/components/Icons";
import { formatDate } from "@/shared/lib/formatDate";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";

function CompanyProject({ project }) {
  return (
    <div className="grid-row-[50px_1fr_1fr_1fr] grid grid-cols-[50px_1fr_100px] items-center gap-2 pt-8">
      {/* <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-500">
        <DevicePhoneMobileIcon className="h-6 w-6" />
      </div> */}
      <div className="col-span-2">
        <p className="text-sm font-semibold ">{project.title}</p>
        <p className="text-sm text-gray-500">{project.role}</p>
      </div>

      <div className="flex justify-end gap-x-2">
        {project.urls?.web && (
          <Link href={project.urls.web} target="_blank">
            <GlobeAtIcon className="h-6 w-6" />
          </Link>
        )}
        {project.urls?.apple && (
          <Link href={project.urls.apple} target="_blank">
            <AppleIcon className="h-6 w-6" />
          </Link>
        )}
        {project.urls?.google && (
          <Link href={project.urls.google} target="_blank">
            <GooglePlayIcon className="h-6 w-6" />
          </Link>
        )}
      </div>

      <div className="col-span-3 my-1.5 flex w-full flex-wrap gap-2">
        {project.env.map((e) => (
          <Badge key={e} title={e} />
        ))}
      </div>

      <p className="col-span-3 text-gray-400">{project.desc}</p>

      <div className="col-span-3 w-full">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className="flex w-full justify-between rounded-lg
                bg-zinc-50 px-4 py-2 text-left text-sm font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 
              dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70">
                <span>Responsibilities</span>
                <ChevronUpIcon
                  className={`${open ? "rotate-180 transform" : ""} h-6 w-6`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="p-2 text-sm text-gray-500 dark:text-gray-400">
                <ul
                  role="list"
                  className="mt-0.5 divide-y divide-zinc-100 rounded-md border border-zinc-100 dark:divide-zinc-700/40 dark:border-zinc-700/40"
                  // className="mt-0.5 divide-y divide-zinc-100 dark:divide-zinc-700/40"
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
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
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
              className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0">
              <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
            </button>
          )}
          <article>
            <header className="flex flex-col">
              {company.url ? (
                <Link
                  href={company.url}
                  className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                  target="_blank">
                  <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 hover:underline dark:text-zinc-100 sm:text-5xl">
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
                className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500">
                <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                <span className="ml-3">{`${formatDate(
                  company.date,
                )} - ${formatDate(company.exitDate)}`}</span>
              </time>
            </header>
            <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
              <div className="mt-8 flex max-w-3xl flex-col gap-y-8 divide-y divide-zinc-100 dark:divide-zinc-700/40">
                {company.projects.map((project) => (
                  <CompanyProject key={project.title} project={project} />
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

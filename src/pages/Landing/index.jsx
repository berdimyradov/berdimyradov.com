import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { getAllCompanies } from "@/entities/companies/lib/getAllCompanies";
import { Button } from "@/shared/components/Button";
import { Card } from "@/shared/components/Card";
import { Container } from "@/shared/components/Container";
import {
  ArrowDownIcon,
  BriefcaseIcon,
  BuildingIcon,
  MailIcon,
} from "@/shared/components/Icons";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TelegramIcon,
} from "@/shared/components/SocialIcons";
// import logoAirbnb from "@/shared/images/logos/airbnb.svg";
// import logoFacebook from "@/shared/images/logos/facebook.svg";
// import logoPlanetaria from "@/shared/images/logos/planetaria.svg";
// import logoStarbucks from "@/shared/images/logos/starbucks.svg";

import logoAirbnb from "@/shared/images/logos/pizza.svg";
import logoFacebook from "@/shared/images/logos/fsd.png";
import logoPlanetaria from "@/shared/images/logos/bargetir.jpeg";
import logoStarbucks from "@/shared/images/logos/cv.svg";
import logoBook from "@/shared/images/logos/book.svg";
import logoHarpoon from "@/shared/images/logos/pokeball.png";

import image1 from "@/shared/images/photos/image-1.jpg";
import image2 from "@/shared/images/photos/image-2.jpg";
import image3 from "@/shared/images/photos/image-3.jpg";
import image4 from "@/shared/images/photos/image-4.jpg";
import image5 from "@/shared/images/photos/image-5.jpg";
import { formatDate } from "@/shared/lib/formatDate";

function Company({ company }) {
  return (
    <Card as="article">
      <Card.Title href={`/companies/${company.slug}`}>
        {company.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={company.date} decorate>
        {`${formatDate(company.date)} - ${formatDate(company.exitDate)}`}
      </Card.Eyebrow>
      <Card.Description>{company.description}</Card.Description>
      <Card.Cta>View more</Card.Cta>
    </Card>
  );
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  );
}

function Resume() {
  // bargetir
  // Files: bargetir.jpg

  // bargetir-chef
  //Files: pizza.svg || bargetir-chef.png

  // fn-rn-todo-app
  // Files: f.png fsd.png

  // book
  // Files:

  // cvms
  // Files: cv-logo.png

  // harpoon
  // Files: pokeball.png

  let resume = [
    {
      company: "BarGetir",
      title: "lorem ipsum",
      logo: logoPlanetaria,
      start: "2019",
      end: {
        label: "Present",
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: "BarGetir Cheff",
      title: "lorem ipsum",
      logo: logoAirbnb,
      start: "2014",
      end: "2019",
    },
    {
      company: "FS-RN-Todo-app",
      title: "lorem ipsum",
      logo: logoFacebook,
      start: "2011",
      end: "2014",
    },
    {
      company: "CVMS",
      title: "lorem ipsum",
      logo: logoStarbucks,
      start: "2008",
      end: "2011",
    },
    {
      company: "Book",
      title: "lorem ipsum",
      logo: logoBook,
      start: "2011",
      end: "2014",
    },
    {
      company: "Harpoon",
      title: "lorem ipsum",
      logo: logoHarpoon,
      start: "2008",
      end: "2011",
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Projects</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={role.logo}
                alt=""
                className="h-7 w-7 rounded-full"
                // unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{" "}
                <span aria-hidden="true">—</span>{" "}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  );
}

function Photos() {
  let rotations = [
    "rotate-2",
    "-rotate-2",
    "rotate-2",
    "rotate-2",
    "-rotate-2",
  ];

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl",
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LandingPage() {
  let companies = getAllCompanies().slice(0, 3);

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software designer, creator, and amateur actor.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Kerim, a software designer and entrepreneur based in Mary,
            Turkmenistan. I’m the co-founder and CEO of Planetaria, where we
            develop technologies that empower regular people to explore space on
            their own terms.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://t.me/berdimyradov"
              aria-label="Reach out on Telegram"
              icon={TelegramIcon}
            />
            <SocialLink
              href="https://instagram.com/kberdimyradov"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/berdimyradov"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/berdimyradov/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100 -mb-4 mt-6">
              <BuildingIcon className="h-6 w-6 flex-none" />
              <span className="ml-3">Latest Companies</span>
            </h2>
            {companies.map((company) => (
              <Company key={company.slug} company={company} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  );
}

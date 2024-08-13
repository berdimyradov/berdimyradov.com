import { getAllCompanies } from "@/entities/companies/lib/getAllCompanies";
import { Button } from "@/shared/components/Button";
import { Card } from "@/shared/components/Card";
import { Container } from "@/shared/components/Container";
import { BuildingIcon, MailIcon } from "@/shared/components/Icons";
import { ProjectsList } from "@/shared/components/ProjectsList";
import image1 from "@/shared/images/photos/acting.jpeg";
import image5 from "@/shared/images/photos/coding.jpeg";
import image2 from "@/shared/images/photos/handshake.jpeg";
import image3 from "@/shared/images/photos/homeoffice.jpeg";
import image4 from "@/shared/images/photos/reading.jpeg";
import { formatDate } from "@/shared/lib/formatDate";
import { SocialLinks } from "@/widgets/SocialLinks";
import clsx from "clsx";
import Image from "next/image";

const TITLE = "Software designer, creator, and amateur actor.";
// const SUB_TITLE =
//   "Hello, world! I'm Kerim, a globetrotting software designer, entrepreneur, and a passionate amateur actor. Bridging the worlds of technology and the arts, I've been creating innovative solutions that empower people everywhere. While juggling lines and codes, I am on this exciting journey to make a meaningful impact. Join me as we weave together the threads of technology, empowerment, and creative expression!";
const SUB_TITLE =
  "Hello, world! I'm Kerim, an innovative software designer, spirited entrepreneur, and stage enthusiast. Balancing technology with artistry, I craft solutions that empower and inspire. Join my journey of code, creativity, and empowerment!";

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

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
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
              rotations[imageIndex % rotations.length],
            )}>
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
            {TITLE}
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {SUB_TITLE}
          </p>
          <SocialLinks />
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            <h2 className="-mb-4 mt-6 flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              <BuildingIcon className="h-6 w-6 flex-none" />
              <span className="ml-3">Latest Companies</span>
            </h2>
            {companies.map((company) => (
              <Company key={company.slug} company={company} />
            ))}
            <Button
              href="/companies"
              variant="secondary"
              className="group -mt-4 w-full">
              View all
            </Button>
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <ProjectsList />
          </div>
        </div>
      </Container>
    </>
  );
}

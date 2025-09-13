import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { Container } from "@/shared/components/Container";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  StackOverflowIcon,
  TelegramIcon,
} from "@/shared/components/SocialIcons";
import portraitImage from "@/shared/images/portrait.jpg";

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
        target="_blank">
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

export const metadata = {
  title: "About",
  description:
    "I’m Kerim Berdimyradov. I live in Mary, Turkmenistan, where I design the future.",
};

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Behind the Codes: Meet Kerim Berdimyradov
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Hello there! I'm Kerim, your potential collaborator on the road to
              digital excellence. But before we delve into the world of codes,
              let's add a touch of personality to our journey.
            </p>
            <p>
              As a software developer, I understand that the real power of
              technology lies in its ability to connect, inspire, and stimulate
              growth. But you know what else I believe in? The power of hobbies
              and interests in shaping our perspectives and creativity.
            </p>
            <p>
              An amateur actor in my free time, I appreciate the art of
              storytelling and believe that every software is a story told
              through codes and algorithms. Much like a character in a play,
              software should captivate its users, making them a part of its
              narrative.
            </p>
            <p>
              An avid sports enthusiast and a chess player, I understand the
              importance of strategy and foresight. Much like a chess game,
              creating software is about making calculated moves, thinking
              several steps ahead, and strategically bringing together all the
              elements to checkmate the challenges.
            </p>
            <p>
              But what is a life full of codes and strategies without people,
              right? I love socializing and interacting with people from diverse
              backgrounds. These interactions provide me with insights into
              different perspectives, helping me create software that caters to
              various needs and bridges gaps.
            </p>
            <p>
              So, why am I sharing all this with you? Because I want to bring
              all these elements – the storytelling, strategic thinking, and the
              perspective of diverse users – into the software I develop.
              Whether it's an innovative app idea, a process you want to
              streamline, or a groundbreaking digital project, I am ready to
              join forces with you.
            </p>
            <p>
              I invite you to embark on this journey with me, a journey where we
              code, create, and connect. Let's build software that doesn't just
              do a job, but tells a story, makes a strategy, and connects
              people. Shall we start our adventure?
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://t.me/berdimyradov"
              icon={TelegramIcon}
              className="mt-4">
              Reach out on Telegram
            </SocialLink>
            <SocialLink
              href="https://instagram.com/kberdimyradov"
              icon={InstagramIcon}
              className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="https://github.com/berdimyradov"
              icon={GitHubIcon}
              className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/berdimyradov/"
              icon={LinkedInIcon}
              className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="https://stackoverflow.com/users/7820970/kerim-berdimyradov"
              icon={StackOverflowIcon}
              className="mt-4">
              Follow on StackOverflow
            </SocialLink>
            <SocialLink
              href="mailto:kberdimyradov@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40">
              kberdimyradov@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  );
}

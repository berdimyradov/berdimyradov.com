import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  StackOverflowIcon,
  TelegramIcon,
} from "@/shared/components/SocialIcons";
import Link from "next/link";

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props} target="_blank">
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

export const SocialLinks = () => {
  return (
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
      <SocialLink
        href="https://stackoverflow.com/users/7820970/kerim-berdimyradov"
        aria-label="Follow on StackOverflow"
        icon={StackOverflowIcon}
      />
    </div>
  );
};

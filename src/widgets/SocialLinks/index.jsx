import DB from "@/entities/db.json";
import { MailIcon } from "@/shared/components/Icons";
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
        href={`mailto:${DB.profile.contacts.email}`}
        aria-label="Contact via email"
        icon={MailIcon}
      />
      <SocialLink
        href={DB.profile.contacts.linkedIn}
        aria-label="Follow on LinkedIn"
        icon={LinkedInIcon}
      />
      <SocialLink
        href={DB.profile.contacts.gitHub}
        aria-label="Follow on GitHub"
        icon={GitHubIcon}
      />
      <SocialLink
        href={DB.profile.contacts.stackOverflow}
        aria-label="Follow on StackOverflow"
        icon={StackOverflowIcon}
      />
      <SocialLink
        href={DB.profile.contacts.telegram}
        aria-label="Reach out on Telegram"
        icon={TelegramIcon}
      />
      <SocialLink
        href={DB.profile.contacts.instagram}
        aria-label="Follow on Instagram"
        icon={InstagramIcon}
      />
    </div>
  );
};

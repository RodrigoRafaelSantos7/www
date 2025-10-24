import { socials } from "@/config/socials";
import { SocialIcon } from "./social-icon";

const SocialMedia = () => (
  <div className="flex flex-row gap-4">
    {Object.values(socials).map((social) => (
      <SocialIcon key={social.name} name={social.name} url={social.url} />
    ))}
  </div>
);

export { SocialMedia };

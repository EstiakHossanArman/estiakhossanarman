import { socials } from "@/lib/data";
import { Button } from "@heroui/button";
import { DynamicIcon, IconName } from "lucide-react/dynamic";
import Link from "next/link";
import { BoxReveal } from "./ui/box-reveal";

const Footer = () => {
  return (
    <footer className="max-w-screen-lg p-3 mx-auto">
      <div className="flex flex-wrap items-center justify-center gap-1 md:justify-between">
        {/* Copyright */}
        <span className="text-muted-foreground">
          &copy; 2022 - {new Date().getFullYear()}{" "}
          <Link href="/" target="_blank">
            Estiak Hossan Arman
          </Link>
          . All rights reserved.
        </span>
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <div className="flex-wrap items-center hidden gap-1 md:flex">
            {socials.map((social, index) => (
              <Button
                as={Link}
                href={social.href}
                target="_blank"
                size="sm"
                variant="flat"
                isIconOnly
                color="secondary"
                key={index}
              >
                <DynamicIcon name={social.icon as IconName} size={20} />
              </Button>
            ))}
          </div>
        </BoxReveal>
      </div>
    </footer>
  );
};

export default Footer;

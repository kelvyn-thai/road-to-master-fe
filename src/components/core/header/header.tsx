import Link, { LinkProps } from "next/link";
import React, { JSX, ReactElement } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import {
  CONTACT_ME_LINK,
  EMAIL_LINK,
  getSectionId,
  GITHUB_LINK,
  LINKEDIN_LINK,
  PROJECTS_LINK,
} from "@/constants";

const NavLinks = ({
  children,
  navClassName = "",
  contentClassName = "",
  ssr = true,
  ...rest
}: {
  children: ReactElement<LinkProps> | JSX.Element[];
  navClassName?: string;
  contentClassName?: string;
  ssr?: boolean;
}) => {
  const navLinks = React.Children.map(children, (navLink) => {
    const { children } = navLink.props;

    const content: JSX.Element =
      typeof children === "string" ? <span>{children}</span> : children;
    const hash = getSectionId(navLink.props.href);

    return React.cloneElement(
      navLink,
      {
        ...navLink.props,
        target: "_blank",
        className: navClassName,
        ...(ssr
          ? {}
          : {
              href: hash,
              target: "",
              scroll: false,
              onClick: () => {
                const el = document.querySelector(hash);
                el?.scrollIntoView({ behavior: "smooth" });
              },
            }),
      } as LinkProps,
      typeof content !== "undefined" &&
        React.cloneElement(content, {
          className: `w-6 h-6  ${contentClassName}`,
        }),
    );
  });
  return (
    <div className="flex flex-row gap-8" {...rest}>
      {navLinks}
    </div>
  );
};

export const SocialNavLinks = () => (
  <NavLinks
    contentClassName="hover:text-green-200"
    data-testid="social-nav-links"
  >
    <Link href={EMAIL_LINK}>
      <FaEnvelope />
    </Link>
    <Link href={GITHUB_LINK}>
      <FaGithub />
    </Link>
    <Link href={LINKEDIN_LINK}>
      <FaLinkedin />
    </Link>
  </NavLinks>
);

export const AppNavLinks = ({ ssr }: { ssr: boolean }) => (
  <NavLinks
    contentClassName="hover:underline hover:text-white"
    data-testid="app-nav-links"
    ssr={ssr}
  >
    <Link href={PROJECTS_LINK}>Projects</Link>
    <Link href={CONTACT_ME_LINK}>Contact me</Link>
  </NavLinks>
);

const Header = () => {
  return (
    <div id="header" className="px-4% py-1% bg-[#18181C] text-white">
      <div className="flex flex-row justify-between gap-5">
        <SocialNavLinks />
        <AppNavLinks ssr />
      </div>
    </div>
  );
};

export default Header;

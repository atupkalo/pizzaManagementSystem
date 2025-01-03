"use client";

import "./PageLinks.css";
import Link from "next/link";
import Image from "next/legacy/image";
import { usePathname } from "next/navigation";

const reqPage = [
  { pagePath: "/", pageName: "Kitchen" },
  { pagePath: "/storage", pageName: "Storage" },
];

export default function PageLinks() {
  const pathname = usePathname();

  const sortedPages = reqPage.sort((a, b) =>
    a.pagePath === pathname ? -1 : b.pagePath === pathname ? 1 : 0
  );

  return (
    <div className="page-nav-wrap">
      <div className="page-nav">
        {sortedPages.map((item, index) => (
          <div
            key={index}
            className={`page-link-box ${
              index === 0 ? "current-page" : "dropdown-option"
            }`}
          >
            <p className="page-link-wrap">
              <Link className="page-link" href={item.pagePath}>
                {item.pageName}
              </Link>
            </p>
            {index === 0 && (
              <Image
                className="arrow-icon"
                alt="arrow icon"
                src="/arrow.svg"
                width={20}
                height={15}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
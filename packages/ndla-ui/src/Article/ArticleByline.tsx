/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { TFunction } from "i18next";
import { ReactNode, forwardRef, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { ArrowDownShortLine } from "@ndla/icons/common";
import { getLicenseByAbbreviation } from "@ndla/licenses";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemIndicator,
  AccordionItemProps,
  AccordionItemTrigger,
  AccordionRoot,
  Heading,
} from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import { ArticleFootNotes } from "./ArticleFootNotes";
import { LicenseLink } from "../LicenseByline/LicenseLink";
import { FootNote } from "../types";

const Wrapper = styled("div", {
  base: {
    // TODO: Figure out if we want to remove this margin. It's only here to add some gap between the article content and the byline.
    marginBlockStart: "medium",
    paddingBlockStart: "xsmall",
    borderTop: "1px solid",
    borderColor: "stroke.subtle",
  },
});

const TextWrapper = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column-reverse",
    gap: "3xsmall",
    width: "100%",
    justifyContent: "space-between",
    paddingBlock: "xsmall",
    textStyle: "body.medium",
  },
  variants: {
    learningpath: {
      true: {},
      false: {
        tabletWide: {
          flexDirection: "row",
        },
      },
    },
  },
});

type AuthorProps = {
  name: string;
};

type SupplierProps = {
  name: string;
};

type Props = {
  authors?: AuthorProps[];
  suppliers?: SupplierProps[];
  published?: string;
  license?: string;
  licenseBox?: ReactNode;
  locale?: string;
  footnotes?: FootNote[];
  displayByline?: boolean;
  bylineType?: "article" | "learningPath";
};

const renderContributors = (contributors: SupplierProps[] | AuthorProps[], t: TFunction) => {
  const contributorsArray = contributors.map((contributor, index) => {
    if (index < 1) return contributor.name;
    const sep = index === contributors.length - 1 ? ` ${t("article.conjunction")} ` : ", ";
    return `${sep}${contributor.name}`;
  });
  return contributorsArray.join("");
};

const getSuppliersText = (suppliers: SupplierProps[], t: TFunction) => {
  if (suppliers.length === 0) {
    return "";
  }
  return suppliers.length > 1
    ? t("article.multipleSuppliersLabel", {
        names: renderContributors(suppliers, t),
        interpolation: { escapeValue: false },
      })
    : t("article.supplierLabel", {
        name: renderContributors(suppliers, t),
        interpolation: { escapeValue: false },
      });
};

const LicenseWrapper = styled("div", {
  base: {
    display: "flex",
    gap: "xsmall",
  },
});

const StyledAccordionRoot = styled(AccordionRoot, {
  base: {
    paddingBlockStart: "xxlarge",
  },
});

const refRegexp = /note\d/;
const footnotesAccordionId = "footnotes";

export const ArticleByline = ({
  authors = [],
  suppliers = [],
  footnotes,
  license: licenseString,
  licenseBox,
  published,
  locale,
  displayByline = true,
  bylineType = "article",
}: Props) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const [openAccordions, setOpenAccordions] = useState<string[]>([]);
  const accordionItemValue = "rulesForUse";

  const onHashChange = useCallback(
    (e: HashChangeEvent) => {
      const hash = e.newURL.split("#")[1];
      if (hash.match(refRegexp) && !openAccordions.includes(footnotesAccordionId)) {
        setOpenAccordions([...openAccordions, footnotesAccordionId]);
        const el = document.getElementById(`#${hash}`);
        el?.click();
        el?.focus();
      }
    },
    [openAccordions],
  );

  useEffect(() => {
    setOpenAccordions((prev) => prev.filter((state) => state !== accordionItemValue));
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [onHashChange]);

  const license = licenseString && getLicenseByAbbreviation(licenseString, locale);

  const showPrimaryContributors = suppliers.length > 0 || authors.length > 0;

  return (
    <Wrapper>
      {displayByline && (
        <TextWrapper learningpath={bylineType === "learningPath"}>
          <LicenseWrapper>
            {license && <LicenseLink license={license} />}
            {showPrimaryContributors && (
              <span>
                {authors.length > 0 &&
                  `${t("article.authorsLabel", {
                    names: renderContributors(authors, t),
                    interpolation: { escapeValue: false },
                  })}. `}
                {getSuppliersText(suppliers, t)}
              </span>
            )}
          </LicenseWrapper>
          <div>
            {t(`${bylineType}.lastUpdated`)} {published}
          </div>
        </TextWrapper>
      )}
      <StyledAccordionRoot
        multiple
        value={openAccordions}
        onValueChange={(details) => setOpenAccordions(details.value)}
      >
        {!!licenseBox && (
          <ArticleBylineAccordionItem value={accordionItemValue} accordionTitle={t("article.useContent")}>
            {licenseBox}
          </ArticleBylineAccordionItem>
        )}
        {!!footnotes?.length && (
          <ArticleBylineAccordionItem value={footnotesAccordionId} accordionTitle={t("article.footnotes")}>
            <ArticleFootNotes footNotes={footnotes} />
          </ArticleBylineAccordionItem>
        )}
      </StyledAccordionRoot>
    </Wrapper>
  );
};

interface ArticleBylineAccordionprops extends AccordionItemProps {
  accordionTitle: ReactNode;
}

export const ArticleBylineAccordionItem = forwardRef<HTMLDivElement, ArticleBylineAccordionprops>(
  ({ value, accordionTitle, children, ...props }, ref) => {
    return (
      <AccordionItem value={value} ref={ref} {...props}>
        <AccordionItemTrigger>
          <Heading asChild consumeCss textStyle="label.medium" fontWeight="bold">
            <h2>{accordionTitle}</h2>
          </Heading>
          <AccordionItemIndicator asChild>
            <ArrowDownShortLine />
          </AccordionItemIndicator>
        </AccordionItemTrigger>
        <AccordionItemContent>{children}</AccordionItemContent>
      </AccordionItem>
    );
  },
);

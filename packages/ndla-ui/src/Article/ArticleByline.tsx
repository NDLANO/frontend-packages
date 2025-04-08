/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { TFunction } from "i18next";
import { type ReactNode, forwardRef, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { ArrowDownShortLine } from "@ndla/icons";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemIndicator,
  type AccordionItemProps,
  AccordionItemTrigger,
  AccordionRoot,
  Heading,
} from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import { ArticleFootNotes } from "./ArticleFootNotes";
import type { FootNote } from "../types";

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
    flexDirection: "column",
    gap: "3xsmall",
    width: "100%",
    justifyContent: "space-between",
    paddingBlock: "xsmall",
    textStyle: "body.medium",
    '& [data-contributors="false"]': {
      marginInlineStart: "auto",
    },
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
  licenseBox?: ReactNode;
  footnotes?: FootNote[];
  displayByline?: boolean;
  bylineType?: "article" | "learningPath" | "external";
  bylineSuffix?: ReactNode;
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
  licenseBox,
  published,
  displayByline = true,
  bylineType = "article",
  bylineSuffix,
}: Props) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const [openAccordions, setOpenAccordions] = useState<string[]>([]);
  const accordionItemValue = "rulesForUse";

  const onHashChange = useCallback(
    (e: HashChangeEvent) => {
      const hash = e.newURL.split("#")[1];
      if (hash?.match(refRegexp) && !openAccordions.includes(footnotesAccordionId)) {
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

  const showPrimaryContributors = suppliers.length > 0 || authors.length > 0;
  const isLearningpath = bylineType === "learningPath";

  const authorLabel: Record<string, string> = {
    article: "article.authorsLabel",
    learningPath: "article.authorsLabelLearningpath",
    external: "article.authorsLabelExternal",
  };

  return (
    <Wrapper>
      {!!displayByline && (
        <TextWrapper learningpath={isLearningpath}>
          {!!showPrimaryContributors && (
            <span>
              {authors.length > 0 &&
                `${t(authorLabel[bylineType], {
                  names: renderContributors(authors, t),
                  interpolation: { escapeValue: false },
                })}. `}
              {getSuppliersText(suppliers, t)}
            </span>
          )}
          {published ? (
            <div data-contributors={showPrimaryContributors}>
              {t(`${bylineType}.lastUpdated`)} {published}
            </div>
          ) : null}
          {bylineSuffix}
        </TextWrapper>
      )}
      {(!!licenseBox || !!footnotes?.length) && (
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
      )}
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
        <Heading asChild consumeCss textStyle="label.medium" fontWeight="bold">
          <h2>
            <AccordionItemTrigger>
              {accordionTitle}
              <AccordionItemIndicator asChild>
                <ArrowDownShortLine />
              </AccordionItemIndicator>
            </AccordionItemTrigger>
          </h2>
        </Heading>
        <AccordionItemContent>{children}</AccordionItemContent>
      </AccordionItem>
    );
  },
);

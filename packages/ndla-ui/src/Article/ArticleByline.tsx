/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type ReactNode, forwardRef, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router";
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
import { SafeLink } from "@ndla/safelink";
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
  lang?: string;
  authors?: AuthorProps[];
  suppliers?: SupplierProps[];
  published?: string;
  licenseBox?: ReactNode;
  footnotes?: FootNote[];
  displayByline?: boolean;
  bylineType?: "article" | "learningPath" | "external";
  bylineSuffix?: ReactNode;
  learningpathCopiedFrom?: string;
};

function formatList(list: SupplierProps[], listFormatter: Intl.ListFormat) {
  return listFormatter.format(list.map((l) => l.name));
}

const StyledAccordionRoot = styled(AccordionRoot, {
  base: {
    paddingBlockStart: "xxlarge",
    _print: {
      display: "none",
    },
  },
});

const refRegexp = /note\d/;
const footnotesAccordionId = "footnotes";

export const ArticleByline = ({
  lang,
  authors = [],
  suppliers = [],
  footnotes,
  licenseBox,
  published,
  displayByline = true,
  bylineType = "article",
  bylineSuffix,
  learningpathCopiedFrom,
}: Props) => {
  const { t, i18n } = useTranslation();
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
  const listFormatter = new Intl.ListFormat(lang ?? i18n.language, { style: "long", type: "conjunction" });

  return (
    <Wrapper>
      {!!displayByline && (
        <TextWrapper learningpath={bylineType === "learningPath"}>
          {!!showPrimaryContributors && (
            <span>
              {authors.length > 0 &&
                `${t("article.authorsLabel", { context: bylineType })} ${formatList(authors, listFormatter)}. `}
              {suppliers.length > 0 &&
                `${t("article.supplierLabel", { count: suppliers.length })} ${formatList(suppliers, listFormatter)}.`}
            </span>
          )}
          {learningpathCopiedFrom ? (
            <SafeLink to={learningpathCopiedFrom}>{t(`learningPath.copiedFrom`)}</SafeLink>
          ) : null}
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

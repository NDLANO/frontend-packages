/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useEffect, useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { spacing } from "@ndla/core";
import { LayoutItem, OneColumn, PageContainer, SubjectHeader } from "@ndla/ui";
import { FormControl, InputV3, Label } from "@ndla/forms";
import { CopyButton } from "@ndla/button";
import { Copy } from "@ndla/icons/action";
import { defaultParameters } from "../defaults";
import { StoryIntro } from "../wrappers";
//@ts-ignore
import allBanners from "../../images/banners";

const meta: Meta = {
  title: "Base styles/Banners",
  parameters: defaultParameters,
};

const addLeadingSlash = (str: string) => (str.startsWith("/") ? str : `/${str}`);

const BannerList = () => {
  const [bannerSearch, setBannerSearch] = useState("");

  const [banners, setBanners] = useState(allBanners);

  useEffect(() => {
    const lowerCase = bannerSearch.toLowerCase();
    const matchedBanners = allBanners
      .filter((banner: any) => banner.name.toLowerCase().indexOf(lowerCase) > -1)
      .sort((a: any, b: any) => a.name.localeCompare(b.name));
    setBanners(matchedBanners);
  }, [bannerSearch]);

  return (
    <PageContainer>
      <OneColumn>
        <LayoutItem layout="full">
          <article className="c-article c-article--clean">
            <FormControl id="search">
              <Label visuallyHidden>Søk etter bannere</Label>
              <InputV3
                name="banner"
                placeholder="Søk etter fag"
                value={bannerSearch}
                onChange={(e) => setBannerSearch(e.currentTarget.value)}
              />
            </FormControl>
          </article>
        </LayoutItem>
      </OneColumn>
      {banners.map((banner: any) => (
        <div key={banner.desktop} style={{ marginTop: spacing.normal }}>
          <SubjectHeader
            heading={banner.name}
            images={[
              {
                url: banner.desktop,
                types: ["desktop", "tablet", "wide"],
              },
              { url: banner.mobile, types: ["mobile"] },
            ]}
          />
          <div style={{ margin: spacing.small }}>
            <CopyButton
              copyNode={
                <>
                  <Copy /> Kopiert!
                </>
              }
              onClick={() =>
                navigator.clipboard.writeText(`${window.location.origin}${addLeadingSlash(banner.mobile)}`)
              }
              variant="outline"
              title="Kopier mobil-banner til importskjema"
            >
              <Copy />
              Kopier mobil-banner
            </CopyButton>
            <CopyButton
              copyNode={
                <>
                  <Copy /> Kopiert!
                </>
              }
              onClick={() =>
                navigator.clipboard.writeText(`${window.location.origin}${addLeadingSlash(banner.desktop)}`)
              }
              variant="outline"
              title="Kopier desktop-banner til importskjema"
            >
              <Copy />
              Kopier desktop-banner
            </CopyButton>
          </div>
        </div>
      ))}
    </PageContainer>
  );
};

export default meta;

export const Banners: StoryFn = () => (
  <div>
    <StoryIntro title="Bannerbilder">
      <p>
        Hvert fag i NDLA kan ha sitt eget unike bannerbilde. Det er anbefalt at bannerbildene er i SVG format og har en
        versjon for desktop og en annen versjon for mobil.
      </p>
      <p>
        Ved utfylling av importskjema må lenken til bannerbildet hentes herfra. Ved å trykke på «Kopier mobil/desktop
        banner» knappene, får du en lenke som kan limes inn i importskjemaet.
      </p>
    </StoryIntro>
    <div>
      <BannerList />
    </div>
  </div>
);

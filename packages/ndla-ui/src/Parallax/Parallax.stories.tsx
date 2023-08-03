/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn } from '@storybook/react';
import SafeLink from '@ndla/safelink';
import Parallax from './Parallax';
import { defaultParameters } from '../../../../stories/defaults';
import { OneColumn } from '../Layout';

export default {
  title: 'Components/Parallax',
  component: Parallax,
  tags: ['autodocs'],
  parameters: {
    ...defaultParameters,
  },
  args: {},
} as Meta<typeof Parallax>;

export const ParallaxStory: StoryFn<typeof Parallax> = ({ ...args }) => {
  return (
    <OneColumn cssModifier="narrow" className="c-article">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam neque nisi, hendrerit ac lorem eget, vestibulum
        pretium elit. Nullam nec velit vel magna placerat pellentesque ac euismod mauris. In commodo velit at ante
        bibendum rutrum. Nulla lobortis luctus leo, in dignissim orci condimentum id. Aliquam sed malesuada ipsum.
        Aenean nec vestibulum nisl. Aenean tempus sodales neque. Maecenas diam nunc, imperdiet at sapien nec, maximus
        viverra velit. Praesent suscipit placerat magna, a viverra sem ultrices id. Nam rhoncus suscipit molestie.
        Aenean cursus varius odio, in cursus nulla gravida eget. Nulla quis ex luctus lacus iaculis ornare. Nunc
        tristique justo sed consequat congue. Fusce luctus enim id imperdiet vestibulum. Phasellus lobortis ornare
        tempor. In vitae pulvinar dolor.
      </p>
      <p>
        Aenean in mattis augue, ac aliquam turpis. Nullam at lorem nec sem egestas ullamcorper sed blandit eros. Morbi
        consequat ex justo, nec dignissim erat accumsan vitae. Etiam massa magna, faucibus id vulputate sed, tempor
        interdum nisi. Nulla rutrum feugiat magna at consectetur. Proin nec sodales purus, a convallis risus. Nulla a
        facilisis quam, vitae mollis erat. Duis sodales ultrices nulla ac tempor. Nulla augue tortor, posuere ut
        imperdiet at, dignissim ullamcorper libero. Donec porttitor est non ante porttitor consequat. Sed in aliquet
        diam. Morbi et arcu ac nibh scelerisque luctus sit amet vitae dolor. Aenean varius luctus mauris, a imperdiet
        eros ullamcorper facilisis. Morbi mollis mattis lorem, non lobortis orci sollicitudin sed. Curabitur purus dui,
        aliquet quis ex quis, commodo bibendum nulla. In in arcu nunc.
      </p>
      <Parallax {...args}>
        <div>
          <h2>Hvorfor bruke NDLA?</h2>
          <img src="https://api.test.ndla.no/image-api/raw/VsXCUE4E.svg" alt="" />
        </div>
        <div>
          <h3>Vårt konsept</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam neque nisi, hendrerit ac lorem eget,
            vestibulum pretium elit. Nullam nec velit vel magna placerat pellentesque ac euismod mauris. In commodo
            velit at ante bibendum rutrum. Nulla lobortis luctus leo, in dignissim orci condimentum id. Aliquam sed
            malesuada ipsum. Aenean nec vestibulum nisl. Aenean tempus sodales neque. Maecenas diam nunc, imperdiet at
            sapien nec, maximus viverra velit. Praesent suscipit placerat magna, a viverra sem ultrices id. Nam rhoncus
            suscipit molestie. Aenean cursus varius odio, in cursus nulla gravida eget. Nulla quis ex luctus lacus
            iaculis ornare. Nunc tristique justo sed consequat congue. Fusce luctus enim id imperdiet vestibulum.
            Phasellus lobortis ornare tempor. In vitae pulvinar dolor.
          </p>
          <h3>Fritt å bruke</h3>
          <p>
            Aenean in mattis augue, ac aliquam turpis. Nullam at lorem nec sem egestas ullamcorper sed blandit eros.
            Morbi consequat ex justo, nec dignissim erat accumsan vitae. Etiam massa magna, faucibus id vulputate sed,
            tempor interdum nisi. Nulla rutrum feugiat magna at consectetur. Proin nec sodales purus, a convallis risus.
            Nulla a facilisis quam, vitae mollis erat. Duis sodales ultrices nulla ac tempor. Nulla augue tortor,
            posuere ut imperdiet at, dignissim ullamcorper libero. Donec porttitor est non ante porttitor consequat. Sed
            in aliquet diam. Morbi et arcu ac nibh scelerisque luctus sit amet vitae dolor. Aenean varius luctus mauris,
            a imperdiet eros ullamcorper facilisis. Morbi mollis mattis lorem, non lobortis orci sollicitudin sed.
            Curabitur purus dui, aliquet quis ex quis, commodo bibendum nulla. In in arcu nunc.
          </p>
          <h3>Alltid i utvikling</h3>
          <p>
            Duis aliquam pharetra massa et laoreet. Ut sollicitudin, mi a hendrerit ullamcorper, nisi ante maximus
            libero, vel bibendum metus nibh a diam. Ut massa ante, blandit a mi sed, posuere interdum velit.
            Pellentesque quis dui lacinia, faucibus elit sed, lacinia enim. Duis purus ipsum, euismod vitae dapibus id,
            tincidunt eget nulla. Quisque sed luctus ex. Nunc bibendum faucibus urna, sit amet sagittis nisl consequat
            nec. Sed a volutpat diam, vel mollis ipsum. Proin et ex et urna pharetra luctus quis a erat. In mollis
            venenatis neque ut semper. In elementum eu odio interdum fringilla. Mauris in pharetra justo.
          </p>
          <h3>Av lærere, for lærere</h3>
          <p>
            Nam sit amet fermentum est, viverra accumsan justo. Fusce imperdiet mollis urna id lacinia. Nullam vitae sem
            augue. In finibus fringilla dui, sit amet luctus arcu iaculis eget. Praesent ac nulla rutrum, gravida metus
            imperdiet, mattis est. Nullam feugiat, lacus quis fringilla consequat, elit est vestibulum nulla, tempor
            eleifend massa lorem et tellus. Maecenas congue felis semper libero cursus, id fringilla augue varius. Ut
            lacinia lectus vitae orci fermentum, vel rutrum mauris dictum. Morbi in nibh a orci pretium hendrerit.
            Quisque sed feugiat quam, ac sollicitudin nibh.
          </p>
          <SafeLink to="https://ndla.no">Les mer om NDLA </SafeLink>
        </div>
      </Parallax>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam neque nisi, hendrerit ac lorem eget, vestibulum
        pretium elit. Nullam nec velit vel magna placerat pellentesque ac euismod mauris. In commodo velit at ante
        bibendum rutrum. Nulla lobortis luctus leo, in dignissim orci condimentum id. Aliquam sed malesuada ipsum.
        Aenean nec vestibulum nisl. Aenean tempus sodales neque. Maecenas diam nunc, imperdiet at sapien nec, maximus
        viverra velit. Praesent suscipit placerat magna, a viverra sem ultrices id. Nam rhoncus suscipit molestie.
        Aenean cursus varius odio, in cursus nulla gravida eget. Nulla quis ex luctus lacus iaculis ornare. Nunc
        tristique justo sed consequat congue. Fusce luctus enim id imperdiet vestibulum. Phasellus lobortis ornare
        tempor. In vitae pulvinar dolor.
      </p>
      <p>
        Aenean in mattis augue, ac aliquam turpis. Nullam at lorem nec sem egestas ullamcorper sed blandit eros. Morbi
        consequat ex justo, nec dignissim erat accumsan vitae. Etiam massa magna, faucibus id vulputate sed, tempor
        interdum nisi. Nulla rutrum feugiat magna at consectetur. Proin nec sodales purus, a convallis risus. Nulla a
        facilisis quam, vitae mollis erat. Duis sodales ultrices nulla ac tempor. Nulla augue tortor, posuere ut
        imperdiet at, dignissim ullamcorper libero. Donec porttitor est non ante porttitor consequat. Sed in aliquet
        diam. Morbi et arcu ac nibh scelerisque luctus sit amet vitae dolor. Aenean varius luctus mauris, a imperdiet
        eros ullamcorper facilisis. Morbi mollis mattis lorem, non lobortis orci sollicitudin sed. Curabitur purus dui,
        aliquet quis ex quis, commodo bibendum nulla. In in arcu nunc.
      </p>
    </OneColumn>
  );
};

ParallaxStory.storyName = 'Parallax';

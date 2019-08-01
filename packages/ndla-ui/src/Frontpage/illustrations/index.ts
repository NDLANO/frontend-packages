import Fellesfag from './Fellesfag';
import Yrkesfag from './Yrkesfag';
import Studiespesialiserende from './Studiespesialiserende';
import MenuFellesfag from './MenuFellesfag';
import MenuYrkesfag from './MenuYrkesfag';
import MenuStudiespesialiserende from './MenuStudiespesialiserende';
import FrontpageSubjectIllustration from './FrontpageSubjectIllustration';

const categoryIllustrations = {
  yrkesfag: Yrkesfag,
  studiespesialiserende: Studiespesialiserende,
  fellesfag: Fellesfag,
};

const categoryIllustrationsInModal = {
  yrkesfag: MenuYrkesfag,
  studiespesialiserende: MenuStudiespesialiserende,
  fellesfag: MenuFellesfag,
};

export {
  Fellesfag,
  Yrkesfag,
  Studiespesialiserende,
  MenuFellesfag,
  MenuYrkesfag,
  MenuStudiespesialiserende,
  FrontpageSubjectIllustration,
  categoryIllustrations,
  categoryIllustrationsInModal,
};
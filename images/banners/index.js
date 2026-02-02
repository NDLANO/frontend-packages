import Matematikk1P from "./1P-matematikk.svg";
import Matematikk1T from "./1T-matematikk.svg";
import BarneOgUngdomsarbeider from "./Barne-og-ungdomsarbeider.svg";
import Biologi1 from "./Biologi-1.svg";
import Broennteknikk from "./Broennteknikk.svg";
import ByggOgAnleggsteknikk from "./Bygg-og-anleggsteknikk.svg";
import DesignOgHandverk from "./Design-og-Handverk.svg";
import Elektro from "./Elektro.svg";
import EngelskLitteratur2 from "./Engelsk-litteratur-2.svg";
import EngelskVg1 from "./Engelsk-vg1.svg";
import Engelsk from "./Engelsk.svg";
import FellesMatte from "./Felles-matte.svg";
import HelseOgOppvekst from "./Helse-og-oppvekst.svg";
import Helsearbeiderfag from "./Helsearbeiderfag.svg";
import Historie from "./Historie.svg";
import IKTService from "./IKT-service.svg";
import InternasjonalEngelsk from "./Internasjonal-Engelsk.svg";
import Kinesisk from "./Kinesisk.svg";
import KokkOgServitor from "./Kokk-og-servitor.svg";
import KommunikasjonOgKultur from "./Kommunikasjon-og-Kultur-new.svg";
import Kroppsoving from "./Kroppsoving.svg";
import Markedsfoering from "./Markedsfoering.svg";
import Matematikk from "./Matematikk.svg";
import MedieOgInformasjonskunnskap from "./Medie-og-informasjonskunnskap.svg";
import MedieuttrykkOgMediesamfunnet from "./Medieuttrykk-og-mediesamfunnet.svg";
import Naturbruk from "./Naturbruk.svg";
import Naturfag from "./Naturfag.svg";
import Norsk from "./Norsk.svg";
import RealfagMatte from "./Realfag-matte.svg";
import Reiseliv from "./Reiseliv.svg";
import ReligionOgEtikk from "./Religion-og-Etikk.svg";
import RestaurantOgMatfag from "./Restaurant-og-matfag.svg";
import SalgServiceOgSikkerhet from "./Salg-service-og-sikkerhet.svg";
import Samfunnsfag from "./Samfunnsfag.svg";
import SamfunnsfagligEngelsk from "./Samfunnsfaglig-engelsk.svg";
import SamfunnsfagligMatte from "./Samfunnsfaglig-matte.svg";
import ServiceOgSamferdsel from "./Service-og-samferdsel.svg";
import Soersamisk from "./Soersamisk.svg";
import SosiologiOgSosialantropologi from "./Sosiologi-og-Sosialantropologi.svg";
import Tip from "./Tip.svg";
import TransportOgLogistikk from "./Transport-og-logistikk.svg";
import Tysk from "./Tysk.svg";
import YrkesfagligMatte from "./Yrkesfaglig-matte.svg";

const banners = [
  { desktop: Biologi1, mobile: Biologi1, name: "Biologi 1" },
  {
    desktop: ReligionOgEtikk,
    mobile: ReligionOgEtikk,
    name: "Religion og etikk",
  },
  {
    desktop: SosiologiOgSosialantropologi,
    SosiologiOgSosialantropologi: Elektro,
    name: "Sosiologi og sosialantropologi",
  },
  { desktop: Broennteknikk, mobile: Broennteknikk, name: "Brønnteknikk" },
  {
    desktop: ByggOgAnleggsteknikk,
    mobile: ByggOgAnleggsteknikk,
    name: "Bygg- og anleggsteknikk",
  },
  { desktop: Elektro, mobile: Elektro, name: "Elektro" },
  { desktop: Engelsk, mobile: Engelsk, name: "Engelsk" },
  {
    desktop: EngelskVg1,
    mobile: EngelskVg1,
    name: "Engelsk Vg1",
  },
  {
    desktop: Helsearbeiderfag,
    mobile: Helsearbeiderfag,
    name: "Helsearbeiderfag Vg2",
  },
  {
    desktop: HelseOgOppvekst,
    mobile: HelseOgOppvekst,
    name: "Helse- og oppvekstsfag Vg1",
  },
  { desktop: Historie, mobile: Historie, name: "Historie" },
  { desktop: IKTService, mobile: IKTService, name: "IKT-servicefag Vg2" },
  { desktop: Kinesisk, mobile: Kinesisk, name: "Kinesisk" },
  {
    desktop: Markedsfoering,
    mobile: Markedsfoering,
    name: "Markedsføring og ledelse",
  },
  { desktop: Matematikk, mobile: Matematikk, name: "Matematikk" },
  {
    desktop: MedieuttrykkOgMediesamfunnet,
    mobile: MedieuttrykkOgMediesamfunnet,
    name: "Medieuttrykk og mediesamfunnet",
  },
  {
    desktop: MedieOgInformasjonskunnskap,
    mobile: MedieOgInformasjonskunnskap,
    name: "Medie- og informasjonskunnskap",
  },
  { desktop: Naturbruk, mobile: Naturbruk, name: "Naturbruk" },
  {
    desktop: ServiceOgSamferdsel,
    mobile: ServiceOgSamferdsel,
    name: "Service og samferdsel",
  },
  {
    desktop: SalgServiceOgSikkerhet,
    mobile: SalgServiceOgSikkerhet,
    name: "Salg, service og sikkerhet",
  },
  { desktop: Samfunnsfag, mobile: Samfunnsfag, name: "Samfunnsfag" },
  { desktop: Soersamisk, mobile: Soersamisk, name: "Sørsamisk" },
  { desktop: Tysk, mobile: Tysk, name: "Tysk" },
  {
    desktop: InternasjonalEngelsk,
    mobile: InternasjonalEngelsk,
    name: "Internasjonal engelsk",
  },
  {
    desktop: SamfunnsfagligEngelsk,
    mobile: SamfunnsfagligEngelsk,
    name: "Samfunnsfaglig engelsk",
  },
  {
    desktop: BarneOgUngdomsarbeider,
    mobile: BarneOgUngdomsarbeider,
    name: "Barne- og ungdomsarbeiderfag Vg2",
  },
  {
    desktop: Kroppsoving,
    mobile: Kroppsoving,
    name: "Kroppsøving",
  },
  {
    desktop: Matematikk1T,
    mobile: Matematikk1T,
    name: "1T - Matematikk fellesfag",
  },
  {
    desktop: Matematikk1P,
    mobile: Matematikk1P,
    name: "1P - Matematikk fellesfag",
  },
  {
    desktop: FellesMatte,
    mobile: FellesMatte,
    name: "Praktisk matematikk",
  },
  {
    desktop: RealfagMatte,
    mobile: RealfagMatte,
    name: "Matematikk for realfag",
  },
  {
    desktop: SamfunnsfagligMatte,
    mobile: SamfunnsfagligMatte,
    name: "Matematikk for samfunnsfag",
  },
  {
    desktop: YrkesfagligMatte,
    mobile: YrkesfagligMatte,
    name: "Matematikk for yrkesfaglige programmer",
  },
  {
    desktop: EngelskLitteratur2,
    mobile: EngelskLitteratur2,
    name: "Engelskspråklig litteratur og kultur",
  },
  {
    desktop: Tip,
    mobile: Tip,
    name: "Teknikk og industriell produksjon Vg1",
  },
  {
    desktop: KommunikasjonOgKultur,
    mobile: KommunikasjonOgKultur,
    name: "Kommunikasjon og kultur",
  },
  {
    desktop: TransportOgLogistikk,
    mobile: TransportOgLogistikk,
    name: "Transport og logistikk Vg2",
  },
  {
    desktop: Reiseliv,
    mobile: Reiseliv,
    name: "Reiseliv Vg2",
  },
  {
    desktop: Naturfag,
    mobile: Naturfag,
    name: "Naturfag",
  },
  {
    desktop: KokkOgServitor,
    mobile: KokkOgServitor,
    name: "Kokk- og servitørfag Vg2",
  },
  {
    desktop: RestaurantOgMatfag,
    mobile: RestaurantOgMatfag,
    name: "Restaurant- og matfag Vg1",
  },
  {
    desktop: DesignOgHandverk,
    mobile: DesignOgHandverk,
    name: "Design og Håndverk Vg1",
  },
  {
    desktop: Norsk,
    mobile: Norsk,
    name: "Norsk",
  },
];

export default banners;

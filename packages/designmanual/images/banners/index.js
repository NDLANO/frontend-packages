import broennfag from './brønnfag.svg';
import kinesisk from './kinesisk.svg';
import markedsfoering from './markedsføring.svg';
import samfunnsfag from './samfunnsfag.svg';
import serviceSamferdsel from './service_og_samferdsel.svg';
import serviceSikkerhetSalg from './salg_service_sikkerhet.svg';

export default [
  { desktop: broennfag, mobile: broennfag, name: 'Brønnteknikk' },
  {
    desktop: serviceSikkerhetSalg,
    mobile: serviceSikkerhetSalg,
    name: 'Salg, service og sikkerhet',
  },
  { desktop: kinesisk, mobile: kinesisk, name: 'Kinesisk' },
  {
    desktop: markedsfoering,
    mobile: markedsfoering,
    name: 'Markedsføring og ledelse',
  },
  { desktop: samfunnsfag, mobile: samfunnsfag, name: 'Samfunnsfag' },
  {
    desktop: serviceSamferdsel,
    mobile: serviceSamferdsel,
    name: 'Service og samferdsel',
  },
];

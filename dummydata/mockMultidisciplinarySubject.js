export const filters = [
  {
    id: 'urn:filter:7ab1cc5c-4f79-4bb4-b1ab-bef7c41aed66',
    label: 'Bærekraftig utvikling',
  },
  {
    id: 'urn:filter:1e3b4fd0-3245-42b5-8685-db02c5592acc',
    label: 'Demokrati og medborgerskap',
  },
  {
    id: 'urn:filter:3645d7c4-63af-469a-a502-38e53d03d6c7',
    label: 'Folkehelse og livsmestring',
  },
];

const resources = [
  {
    title: 'Bløff med statistikk',
    introduction:
      'Statistikk er et fantastisk verktøy for å forstå verden, men det kan også misbrukes. Her kan du lære hvordan du unngår å bli lurt av statistikk og dårlig forskning.',
    image: 'https://api.ndla.no/image-api/raw/BagNsXHq.jpg?width=600',
    imageAlt: 'Mann blir målt og observert. Omgitt av ulike diagrammer. Illustrasjon.',
    filters: ['urn:filter:1e3b4fd0-3245-42b5-8685-db02c5592acc'],
    url: '#',
  },
  {
    title: 'Er det mulig å reise bærekraftig?',
    introduction:
      'Marianne og Fredrik planlegger ferie. De vil gjerne ha mye tid sammen. Samtidig vil de ikke at ferien skal være så dyr, og de vil gjerne at den skal være bærekraftig. Det viser seg å ikke være så lett. Er det i det hele tatt mulig å reise bærekraftig?',
    image: 'https://api.ndla.no/image-api/raw/id/48643?width=600',
    imageAlt: 'Ungt par iført badekåper ligger utstrakt på sofaen. Foto.',
    filters: ['urn:filter:7ab1cc5c-4f79-4bb4-b1ab-bef7c41aed66'],
    url: '#',
  },
  {
    title: 'Pengesmart – personlig økonomi',
    introduction:
      'I løpet av videregående får du større og større ansvar for egen økonomi. Det gir deg mange muligheter, men også flere nye utfordringer. Hvordan kan du ta over styringen av din egen økonomi på en smart måte?',
    image: 'https://api.ndla.no/image-api/raw/id/41284?width=600',
    imageAlt: 'Mynter i stabler med ulik høyde. Foto.',
    filters: ['urn:filter:3645d7c4-63af-469a-a502-38e53d03d6c7'],
    url: '#',
  },
  {
    title: 'Press og stress',
    introduction:
      'Mange ungdommer opplever press og stress, men hva er egentlig stress? Hva er det som skaper så mye press blant ungdom, og hva kan du gjøre med det?',
    image: 'https://api.ndla.no/image-api/raw/id/49802?width=600',
    imageAlt: 'Treklosser formet som en trapp påført ordet "stress". Foto.',
    filters: ['urn:filter:3645d7c4-63af-469a-a502-38e53d03d6c7'],
    url: '#',
  },
  {
    title: 'Kampen mot vindmøllene',
    introduction:
      'Planene om et vindkraftverk i kommunen skaper et heftig engasjement i befolkninga. Sett dere inn i konflikten, undersøk ulike interesser og utforsk mulige løsninger',
    image: 'https://api.ndla.no/image-api/raw/id/28404?width=600',
    imageAlt: 'Vindmølle i kulturlandskap. Foto.',
    filters: ['urn:filter:7ab1cc5c-4f79-4bb4-b1ab-bef7c41aed66', 'urn:filter:1e3b4fd0-3245-42b5-8685-db02c5592acc'],
    url: '#',
  },
];

export const getResources = () => {
  return resources.map((item) => {
    if (item.filters.length) {
      item.subjects = [];
      item.filters.forEach((filterId) => {
        const subject = filters.find((filter) => filter.id === filterId);
        item.subjects.push(subject.label);
      });
    }
    return item;
  });
};

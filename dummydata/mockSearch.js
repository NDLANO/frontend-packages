import { constants } from "@ndla/ui";

const { contentTypes } = constants;

export const contentTypeResults = [
  {
    title: "Læringsstier",
    contentType: contentTypes.LEARNING_PATH,
    messages: {
      allResultLabel: "Vis alle læringsstier",
      showLessResultLabel: "Vis færre læringsstier",
    },
    resources: [
      {
        path: "#a1",
        name: "Mediemakt",
        subject: "Etikk og moral",
      },
      {
        path: "#a2",
        name: "Media som den fjerde statsmakt",
        subject: "Maktfordelingsprinsippet",
      },
    ],
    totalCount: 2,
  },
  {
    title: "Fagstoff",
    contentType: contentTypes.SUBJECT_MATERIAL,
    messages: {
      allResultLabel: "Vis alt fagstoff?",
      showLessResultLabel: "Vis færre fagstoff",
    },
    resources: [
      {
        path: "#b1",
        name: "Hva er makt?",
      },
      {
        path: "#b2",
        name: "Maktfordelingsprinsippet",
        additional: true,
      },
      {
        path: "#b3",
        name: "Fagstoff 3",
      },
      {
        path: "#b4",
        name: "Fagstoff 4",
        additional: true,
      },
      {
        path: "#b5",
        name: "Fagstoff 5",
      },
      {
        path: "#b6",
        name: "Fagstoff 6",
      },
      {
        path: "#b7",
        name: "Fagstoff 7",
        additional: true,
      },
      {
        path: "#b8",
        name: "Fagstoff 8",
      },
      {
        path: "#b9",
        name: "Fagstoff 9",
      },
      {
        path: "#b10",
        name: "Fagstoff 10",
        additional: true,
      },
      {
        path: "#b11",
        name: "Fagstoff 11",
      },
      {
        path: "#b12",
        name: "Fagstoff 12",
      },
      {
        path: "#b13",
        name: "Fagstoff 13",
      },
      {
        path: "#b14",
        name: "Fagstoff 14",
      },
    ],
    totalCount: 14,
  },
  {
    title: "Oppgaver og aktiviteter",
    contentType: contentTypes.TASKS_AND_ACTIVITIES,
    messages: {
      allResultLabel: "Vis alle oppgaver og aktiviteter",
      showLessResultLabel: "Vis færre oppgaver og aktiviteter",
    },
    resources: [],
    totalCount: 0,
  },
  {
    title: "Emne",
    contentType: contentTypes.SUBJECT,
    messages: {
      allResultLabel: "Vis alle emner?",
      showLessResultLabel: "Vis færre emner",
    },
    resources: [
      {
        path: "#e1",
        name: "Hva er makt?",
      },
      {
        path: "#e2",
        name: "Maktfordelingsprinsippet",
        additional: true,
      },
      {
        path: "#e3",
        name: "Fagstoff 3",
      },
      {
        path: "#e4",
        name: "Fagstoff 4",
        additional: true,
      },
      {
        path: "#e5",
        name: "Fagstoff 5",
      },
      {
        path: "#e6",
        name: "Fagstoff 6",
      },
      {
        path: "#e7",
        name: "Fagstoff 7",
        additional: true,
      },
      {
        path: "#e8",
        name: "Fagstoff 8",
      },
      {
        path: "#e9",
        name: "Fagstoff 9",
      },
      {
        path: "#e10",
        name: "Fagstoff 10",
        additional: true,
      },
      {
        path: "#e11",
        name: "Fagstoff 11",
      },
      {
        path: "#e12",
        name: "Fagstoff 12",
      },
      {
        path: "#e13",
        name: "Fagstoff 13",
      },
      {
        path: "#e14",
        name: "Fagstoff 14",
      },
    ],
    totalCount: 14,
  },
];

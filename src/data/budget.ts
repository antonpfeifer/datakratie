export interface BudgetDataPoint {
  id: string;
  label: string;
  unit: string;
  parentId: string | null;
  description: string;
  history: Record<string, number>;
  value: number; // Current year value (e.g. 2025)
  color?: string;
}

export const budgetData: BudgetDataPoint[] = [
  {
    id: "root",
    label: "Gesamthaushalt",
    unit: "Mrd. €",
    parentId: null,
    description: "Der Gesamthaushalt des Staates für das Jahr 2025.",
    history: {
      "2021": 450,
      "2022": 480,
      "2023": 476,
      "2024": 490,
      "2025": 500,
    },
    value: 500,
    color: "#ffffff",
  },
  {
    id: "social",
    label: "Sozialleistungen",
    unit: "Mrd. €",
    parentId: "root",
    description: "Ausgaben für soziale Sicherung, Renten und Unterstützung.",
    history: {
      "2021": 150,
      "2022": 160,
      "2023": 165,
      "2024": 170,
      "2025": 175,
    },
    value: 175,
    color: "#86efac", // green-300
  },
  {
    id: "education",
    label: "Bildung",
    unit: "Mrd. €",
    parentId: "root",
    description: "Investitionen in Schulen, Universitäten und Forschung.",
    history: {
      "2021": 18,
      "2022": 19,
      "2023": 19.5,
      "2024": 20,
      "2025": 20,
    },
    value: 20,
    color: "#93c5fd", // blue-300
  },
  {
    id: "defense",
    label: "Verteidigung",
    unit: "Mrd. €",
    parentId: "root",
    description: "Ausgaben für militärische Verteidigung und Bündnisverpflichtungen.",
    history: {
      "2021": 45,
      "2022": 50,
      "2023": 52,
      "2024": 60,
      "2025": 70,
    },
    value: 70,
    color: "#fca5a5", // red-300
  },
  {
    id: "infrastructure",
    label: "Infrastruktur",
    unit: "Mrd. €",
    parentId: "root",
    description: "Bau und Erhalt von Straßen, Schienen und digitalen Netzen.",
    history: {
      "2021": 30,
      "2022": 32,
      "2023": 35,
      "2024": 38,
      "2025": 40,
    },
    value: 40,
    color: "#fdba74", // orange-300
  },
  {
    id: "health",
    label: "Gesundheit",
    unit: "Mrd. €",
    parentId: "root",
    description: "Gesundheitsversorgung, Pflege und Prävention.",
    history: {
      "2021": 25,
      "2022": 28,
      "2023": 26,
      "2024": 27,
      "2025": 28,
    },
    value: 28,
    color: "#d8b4fe", // purple-300
  },
  // Children of Social
  {
    id: "buergergeld",
    label: "Bürgergeld",
    unit: "Mrd. €",
    parentId: "social",
    description: "Grundsicherung für Arbeitssuchende.",
    history: {
      "2021": 22, // Hartz IV
      "2022": 23,
      "2023": 24,
      "2024": 25,
      "2025": 26,
    },
    value: 26,
    color: "#4ade80", // green-400
  },
  {
    id: "pensions",
    label: "Rentenversicherung",
    unit: "Mrd. €",
    parentId: "social",
    description: "Zuschuss zur gesetzlichen Rentenversicherung.",
    history: {
      "2021": 100,
      "2022": 105,
      "2023": 110,
      "2024": 115,
      "2025": 120,
    },
    value: 120,
    color: "#22c55e", // green-500
  },
  {
    id: "child_benefits",
    label: "Kindergeld",
    unit: "Mrd. €",
    parentId: "social",
    description: "Finanzielle Unterstützung für Familien mit Kindern.",
    history: {
      "2021": 10,
      "2022": 11,
      "2023": 11,
      "2024": 12,
      "2025": 12,
    },
    value: 12,
    color: "#16a34a", // green-600
  },
  // Children of Education
  {
    id: "schools",
    label: "Schulen",
    unit: "Mrd. €",
    parentId: "education",
    description: "Sanierung und Digitalisierung von Schulen.",
    history: {
      "2021": 5,
      "2022": 6,
      "2023": 6,
      "2024": 7,
      "2025": 7,
    },
    value: 7,
    color: "#60a5fa", // blue-400
  },
  {
    id: "universities",
    label: "Hochschulen",
    unit: "Mrd. €",
    parentId: "education",
    description: "Finanzierung von Hochschulen und Forschungseinrichtungen.",
    history: {
      "2021": 10,
      "2022": 10,
      "2023": 11,
      "2024": 11,
      "2025": 11,
    },
    value: 11,
    color: "#3b82f6", // blue-500
  },
];

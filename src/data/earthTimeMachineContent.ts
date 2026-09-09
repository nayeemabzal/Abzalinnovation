export const earthTimeMachine = {
  title: "Earth Time Machine",
  description: "Explore a 3D globe, Earth's history, and the landscapes and wildlife of Guyana.",
  pageUrl: "https://www.abzalinnovation.com/earth-time-machine",
  appUrl: "https://abzal-earth-time-machine.nayeemabzal.chatgpt.site",
};

export const earthDestinations = [
  { id: "kaieteur", label: "Kaieteur", query: "?view=guyana&place=kaieteur&era=today" },
  { id: "rupununi", label: "Rupununi", query: "?view=guyana&place=rupununi&era=today" },
  { id: "iwokrama", label: "Iwokrama", query: "?view=guyana&place=iwokrama&era=today" },
  { id: "globe", label: "Whole Earth", query: "?era=today" },
] as const;

export function getEarthDestination(id: string | null) {
  return earthDestinations.find((destination) => destination.id === id) ?? earthDestinations[0];
}

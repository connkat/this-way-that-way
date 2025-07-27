export const colors = {
  yellow: '#F8F269',
  pastelOrange: '#E2B199',
  pastelYellow: '#EACF7F',
  pastelCrimson: '#DE909E',
  blue: '#3F6FC4',
} as const;

// Type for the colors object
export type ColorName = keyof typeof colors;

// Function to get color by name
export const getColor = (name: ColorName): string => colors[name];

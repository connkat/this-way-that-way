export const colors = {
  // Brand colors
  yellow: "#F8F269",
  pastelOrange: "#E2B199",
  pastelYellow: "#EACF7F",
  pastelCrimson: "#DE909E",
  blue: "#3F6FC4",
  cream: "#FFFDD0",

  // Theme colors
  lightBackground: "#ffffff",
  lightForeground: "#171717",
  darkBackground: "#0a0a0a",
  darkForeground: "#ededed",
} as const;

export type ColorName = keyof typeof colors;

export const getColor = (name: ColorName): string => colors[name];

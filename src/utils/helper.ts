/**
 * Mask email
 * e.g, abc***@gmail.com
 */
export function maskEmail(email: string): string {
  const [username, domain] = email.split("@");

  if (!username || !domain) return email;

  const visiblePart = username.slice(0, 4);
  const maskedPart = "*".repeat(Math.max(username.length - 4, 0));

  return `${visiblePart}${maskedPart}@${domain}`;
}

// Get first character(s) of each word
// Casual Leave -> CL
// Leave Without Pay, 2 -> LW
// Leave Without Pay, 3 -> LWP
export const getFirstCharacter = (str: string, count: number = 2) => {
  const characters = str
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase());

  return characters.slice(0, count).join("");
};

/**
 * get greetings
 * e.g, Good Morning, Good Evening,...
 */
export const getGreeting: () => string = () => {
  const hour = new Date().getHours();

  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  if (hour < 21) return "Good Evening";
  return "Good Night";
};

// format float vales like
// 1234.00234 => 1234.00
export function getFloatValue(
  value: number | string,
  fractionDigits: number = 2,
  fallbackOnNull: string = "",
) {
  // Handle null/undefined
  if (value == null) {
    return fallbackOnNull;
  }

  // Handle strings: trim and detect blank
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (trimmed === "") {
      return fallbackOnNull;
    }
    // Reassign to trimmed for parsing
    value = trimmed;
  }

  // Try to parse as float
  const num = typeof value === "number" ? value : parseFloat(value);

  // If parsing failed or value is not a finite number, use fallback
  if (!Number.isFinite(num)) {
    return fallbackOnNull;
  }

  // Return integer as number; decimal as string with two places
  if (Number.isInteger(num)) {
    return num; // e.g., 2
  } else {
    return num.toFixed(fractionDigits); // e.g., "2.50"
  }
}

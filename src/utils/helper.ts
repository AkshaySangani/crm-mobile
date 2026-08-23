
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
export const getFirstCharacter = (
  str: string,
  count: number = 2,
) => {
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
export const getGreeting:() => string = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    if (hour < 21) return "Good Evening";
    return "Good Night";
  };
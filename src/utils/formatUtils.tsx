// Format number like  global  Youtube (K = Thousand, M = Million, B = Billion)

export function formatCount(count: number): string {
  if (count >= 1_000_000_000) {
    return (Math.floor((count / 1_000_000_000) * 10) / 10).toFixed(1) + "B";
  }
  if (count >= 1_000_000) {
    return (Math.floor((count / 1_000_000) * 10) / 10).toFixed(1) + "M";
  }
  if (count >= 1000) {
    return Math.floor(count / 1_000) + "K";
  }
  return count.toString();
}

export const getTimeAgo = (publishedAt: string): string => {
  const publishedDate = new Date(publishedAt);
  const now = new Date();
  const secondsAgo = Math.floor(
    (now.getTime() - publishedDate.getTime()) / 1000
  );

  const minutes = Math.floor(secondsAgo / 60);
  const hours = Math.floor(secondsAgo / 3600);
  const days = Math.floor(secondsAgo / 86400);
  const months = Math.floor(secondsAgo / (30 * 86400));
  const years = Math.floor(secondsAgo / (365 * 86400));

  if (secondsAgo < 60) return "just now";
  else if (minutes < 60)
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  else if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  else if (days < 30) return `${days} day${days > 1 ? "s" : ""} ago`;
  else if (months < 12) return `${months} month${months > 1 ? "s" : ""} ago`;
  else return `${years} year${years > 1 ? "s" : ""} ago`;
};

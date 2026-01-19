/**
 * Sends waitlist form data to Google Sheets via Google Apps Script
 */
export const submitToGoogleSheets = async (data: {
  email: string;
  usage: string;
  betaTester: boolean;
}) => {
  const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

  if (!scriptUrl) {
    throw new Error("Google Script URL is not configured");
  }

  // Ensure usage is always a valid string
  const usageValue = data.usage && typeof data.usage === 'string' && data.usage.trim() !== '' 
    ? data.usage.trim() 
    : 'Not specified';

  const payload = {
    email: data.email || '',
    usage: usageValue,
    betaTester: data.betaTester || false,
    timestamp: new Date().toISOString(),
  };

  // Log for debugging (remove in production)
  console.log("Submitting to Google Sheets - payload:", payload);
  console.log("Usage value being sent:", usageValue);

  const response = await fetch(scriptUrl, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  // With no-cors mode, we can't check response status
  // So we assume success if no error is thrown
  return { success: true };
};

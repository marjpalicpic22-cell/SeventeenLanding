/**
 * Fires tracking events for app download button clicks.
 * Called on every Google Play and App Store button across the site.
 *
 * - Tapfiliate: records an affiliate conversion
 * - Meta Pixel: fires a Lead event so Facebook Ads can track and optimise
 *   for people who clicked a download button
 *
 * Safe to call even if the scripts haven't loaded yet — both use a
 * queuing shim that buffers calls until the script is ready.
 * All app store links open in target="_blank" so there is no redirect
 * risk; this fires in the current tab before the new tab opens.
 */
export function trackAppDownload(): void {
  try {
    const tap = (window as any).tap;
    if (typeof tap === "function") {
      tap("conversion", "app_download_" + Date.now(), 1);
    }
  } catch {
    // Never break the download button if Tapfiliate tracking fails
  }

  try {
    const fbq = (window as any).fbq;
    if (typeof fbq === "function") {
      fbq("track", "Lead", { content_name: "App Download" });
    }
  } catch {
    // Never break the download button if Meta Pixel tracking fails
  }
}

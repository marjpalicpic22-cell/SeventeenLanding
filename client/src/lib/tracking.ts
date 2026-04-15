/**
 * Fires a Tapfiliate conversion event for app download clicks.
 * Safe to call even if the Tapfiliate script hasn't loaded yet —
 * the queuing shim in index.html will buffer it.
 * All app store links open in target="_blank" so there is no
 * redirect risk; this fires in the current tab before the new tab opens.
 */
export function trackAppDownload(): void {
  try {
    const tap = (window as any).tap;
    if (typeof tap === "function") {
      tap("conversion", "app_download_" + Date.now(), 1);
    }
  } catch {
    // Never break the download button if tracking fails
  }
}

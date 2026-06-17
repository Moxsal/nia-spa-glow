const LOVABLE_ASSET_ORIGIN = "https://nia-spa-glow.lovable.app";

export const getHostedAssetUrl = (url: string) => {
  if (!url || /^https?:\/\//.test(url)) return url;
  if (url.startsWith("/__l5e/assets-v1/")) return `${LOVABLE_ASSET_ORIGIN}${url}`;
  return url;
};
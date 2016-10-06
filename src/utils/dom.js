
export function pageOffsetY() {
  return document.documentElement.scrollTop ||
  document.body.parentNode.scrollTop ||
  document.body.scrollTop;
}

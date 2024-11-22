export function generateSelectors(element: any): string[] {
  const selectors = [];

  if (!element['data-testid']) {
    if (element.id) {
      selectors.push(`#${element.id}`);
    }

    if (element.classes) {
      const classSelector = element.classes
        .split(' ')
        .filter((cls: string) => cls)
        .map((cls: string) => `.${cls}`)
        .join('');
      selectors.push(`${element.tagName.toLowerCase()}${classSelector}`);
    }

    if (element.name) {
      selectors.push(`[name="${element.name}"]`);
    }

    if (element.textContent && element.textContent.length < 50) {
      selectors.push(
        `${element.tagName.toLowerCase()}:contains("${element.textContent}")`,
      );
    }

    if (element.parentElement) {
      const index =
        Array.prototype.indexOf.call(element.parentElement.children, element) +
        1;
      selectors.push(`${element.tagName.toLowerCase()}:nth-child(${index})`);
    }
  }

  if (element['data-testid']) {
    selectors.push(`[data-testid="${element['data-testid']}"]`);
  }

  return selectors;
}

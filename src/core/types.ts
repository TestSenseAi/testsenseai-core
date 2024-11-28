export interface DOMElement {
  tag: string | null;
  attributes: {
    id: string | null;
    classes: string | null;
  };
  children: DOMElement[] | null;
  textContent?: string | null;
  role?: string | null;
  selectors: string[] | null;
}

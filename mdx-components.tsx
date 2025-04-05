import { useMDXComponents as getBlogMDXComponents } from "nextra-theme-docs";

const docsComponents = getBlogMDXComponents();

export function useMDXComponents(components?: any) {
  return {
    ...docsComponents,
    ...components,
  };
}

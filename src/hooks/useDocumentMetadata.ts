import { useEffect } from "react";

type PageMetadata = {
  title: string;
  description: string;
  url: string;
  image?: string;
  imageAlt?: string;
  schema?: Record<string, unknown>;
  schemaId?: string;
};

type MetaTarget = {
  attribute: "name" | "property";
  key: string;
  value: string;
};

/**
 * Applies route-specific metadata while a client-rendered page is mounted,
 * then restores the site's default document metadata on navigation.
 */
export default function useDocumentMetadata({
  title,
  description,
  url,
  image,
  imageAlt,
  schema,
  schemaId = "page",
}: PageMetadata) {
  useEffect(() => {
    const previousTitle = document.title;
    const targets: MetaTarget[] = [
      { attribute: "name", key: "description", value: description },
      { attribute: "property", key: "og:title", value: title },
      { attribute: "property", key: "og:description", value: description },
      { attribute: "property", key: "og:url", value: url },
      { attribute: "name", key: "twitter:title", value: title },
      { attribute: "name", key: "twitter:description", value: description },
    ];

    if (image) {
      targets.push(
        { attribute: "property", key: "og:image", value: image },
        { attribute: "name", key: "twitter:image", value: image },
      );
    }
    if (imageAlt) {
      targets.push({ attribute: "property", key: "og:image:alt", value: imageAlt });
    }

    const previousMeta = targets.map((target) => {
      const selector = `meta[${target.attribute}='${target.key}']`;
      let element = document.querySelector<HTMLMetaElement>(selector);
      const created = !element;

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(target.attribute, target.key);
        document.head.appendChild(element);
      }

      const value = element.getAttribute("content") ?? "";
      element.setAttribute("content", target.value);
      return { element, value, created };
    });

    let canonical = document.querySelector<HTMLLinkElement>("link[rel='canonical']");
    const canonicalCreated = !canonical;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    const previousCanonical = canonical.href;
    canonical.href = url;

    const schemaElement = schema ? document.createElement("script") : undefined;
    if (schemaElement && schema) {
      schemaElement.type = "application/ld+json";
      schemaElement.dataset.pageSchema = schemaId;
      schemaElement.text = JSON.stringify(schema);
      document.head.appendChild(schemaElement);
    }

    document.title = title;

    return () => {
      document.title = previousTitle;
      previousMeta.forEach(({ element, value, created }) => {
        if (created) element.remove();
        else element.setAttribute("content", value);
      });
      if (canonicalCreated) canonical.remove();
      else canonical.href = previousCanonical;
      schemaElement?.remove();
    };
  }, [description, image, imageAlt, schema, schemaId, title, url]);
}

import {
  faqJsonLd,
  localBusinessJsonLd,
  websiteJsonLd,
} from "@/lib/seo";
import { FAQ_ITEMS } from "@/lib/constants";

export function JsonLd() {
  const payloads = [localBusinessJsonLd(), websiteJsonLd(), faqJsonLd(FAQ_ITEMS)];

  return (
    <>
      {payloads.map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}

export type Pattern = {
  slug: string;
  title: string;
  category: string;
  level: "Beginner" | "Confident beginner";
  image: string;
  alt: string;
  description: string;
  skills: string[];
  materials: string[];
  plannedContents: string[];
  credit: { name: string; url: string };
  draftDownload?: { url: string; version: string };
};

// Proposed collection only. Stock photos are inspiration, not finished pattern results.
export const patterns: Pattern[] = [
  {
    "slug": "crochet-roses",
    "draftDownload": {
      "url": "/downloads/little-rose-v0.2-draft.pdf",
      "version": "0.2"
    },
    "title": "Little Crochet Roses",
    "category": "Roses",
    "level": "Confident beginner",
    "image": "/images/flowers/roses.webp",
    "alt": "Stock inspiration photo of a crochet bouquet with roses and other flowers in a vase",
    "description": "A proposed PDF collection of small crochet roses and leaves for handmade decorations. The photo shows floral inspiration; the final rose design is still being developed.",
    "skills": [
      "Shaping crochet petals",
      "Rolling and assembling a flower",
      "Making small leaves",
      "Securing yarn ends"
    ],
    "materials": [
      "Yarn for petals and leaves, to be confirmed",
      "A matching crochet hook",
      "Scissors and yarn needle"
    ],
    "plannedContents": [
      "Petal and leaf instructions",
      "Assembly guide",
      "Colour variation ideas",
      "Finishing notes"
    ],
    "credit": {
      "name": "Bogdan Groshev",
      "url": "https://www.pexels.com/photo/bouquet-of-crochet-flowers-20269075/"
    }
  },
  {
    "slug": "crochet-sunflowers",
    "title": "Sunflower Days",
    "category": "Sunflowers",
    "level": "Confident beginner",
    "image": "/images/flowers/sunflowers.webp",
    "alt": "Stock inspiration photo of colourful crochet bouquets including yellow sunflowers",
    "description": "A proposed crochet sunflower PDF for cheerful handmade floral displays. Explore the colour and texture inspiration while the pattern and final specifications are being prepared.",
    "skills": [
      "Working a flower centre in rounds",
      "Repeating petal shapes",
      "Attaching petals and leaves",
      "Assembling a decorative flower"
    ],
    "materials": [
      "Yarn for centre, petals, and leaves, to be confirmed",
      "A suitable crochet hook",
      "Stitch markers, scissors, and yarn needle"
    ],
    "plannedContents": [
      "Centre and petal instructions",
      "Stitch-count checkpoints",
      "Leaf and assembly notes",
      "Display ideas"
    ],
    "credit": {
      "name": "Anurag Jamwal",
      "url": "https://www.pexels.com/photo/colorful-handmade-crochet-floral-arrangements-29753250/"
    }
  },
  {
    "slug": "crochet-flower-bouquet",
    "title": "The Forever Bouquet",
    "category": "Bouquets",
    "level": "Confident beginner",
    "image": "/images/flowers/bouquet.webp",
    "alt": "Stock inspiration photo of a person holding a pastel crochet flower bouquet",
    "description": "A proposed collection for combining crochet flowers into a personal bouquet. This stock photograph illustrates the mood, rather than a finished product made from our pattern.",
    "skills": [
      "Making repeated floral motifs",
      "Crocheting leaves",
      "Joining individual elements",
      "Arranging a balanced bouquet"
    ],
    "materials": [
      "Yarn in a coordinated palette, to be confirmed",
      "A suitable crochet hook",
      "Yarn needle and scissors",
      "Assembly and display supplies to be specified in the final pattern"
    ],
    "plannedContents": [
      "Individual floral motif instructions",
      "Leaf and joining guidance",
      "Bouquet arrangement ideas",
      "Finishing checklist"
    ],
    "credit": {
      "name": "Natanael Alves Bezerra",
      "url": "https://www.pexels.com/photo/a-bride-holding-a-bouquet-of-crocheted-flowers-15469188/"
    }
  },
  {
    "slug": "everyday-crochet-bag",
    "title": "The Everyday Crochet Bag",
    "category": "Bags",
    "level": "Confident beginner",
    "image": "/images/bags/everyday-bag.webp",
    "alt": "Cream crochet bag with brown edging on a blue checked blanket",
    "description": "An everyday bag concept for a collection that goes beyond flowers. Explore the texture and finishing inspiration while we develop the construction, handles, and final PDF instructions. The photograph is not a sample made from our pattern.",
    "skills": [
      "Making an even crochet fabric",
      "Joining panels neatly",
      "Attaching and reinforcing handles",
      "Planning an optional fabric lining"
    ],
    "materials": [
      "Smooth cotton or cotton-blend yarn, final specification to be confirmed",
      "A hook suited to the chosen yarn and gauge",
      "Stitch markers, measuring tape, scissors, and yarn needle",
      "Optional lining fabric and sewing supplies"
    ],
    "plannedContents": [
      "Construction and assembly instructions",
      "Gauge and finished measurements",
      "Handle attachment checkpoints",
      "Optional lining guidance and care notes"
    ],
    "credit": {
      "name": "Nur Tok",
      "url": "https://www.pexels.com/photo/handmade-crochet-bag-on-checkered-blanket-outdoors-30224894/"
    }
  }
];

export function getPattern(slug: string) { return patterns.find(pattern => pattern.slug === slug); }

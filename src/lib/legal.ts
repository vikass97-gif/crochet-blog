export const legalPages = [
  {
    slug: "legal-notice", title: "Legal notice", description: "Publisher information and website hosting details.",
    sections: [
      { heading: "Website", text: "Loop & Stitch presents crochet learning guides and previews of a forthcoming PDF pattern collection. The collection is currently in preparation and purchases are not open." },
      { heading: "Publisher and contact", text: "The publisher’s legal name, business country, postal address, and registration details where applicable must be confirmed before this notice is finalised. Loop & Stitch is the website brand; it is not a confirmed legal entity name. Contact: info@velioratv.com." },
      { heading: "Hosting", text: "The current public website is hosted on Vercel. The public address may change when the final domain is connected. The host’s contractual entity and address must be confirmed from the hosting agreement." },
      { heading: "Images and media", text: "The site uses original editorial illustrations and licensed stock photographs and footage. Source and license records are maintained with the project. Stock images illustrate inspiration and do not represent finished items made from the proposed patterns." },
    ],
  },
  {
    slug: "privacy", title: "Privacy policy", description: "How the current website uses browser storage and handles site visits.",
    sections: [
      { heading: "Current website features", text: "The current project has no customer account, checkout, contact form, newsletter signup, or analytics integration. The website code does not send your saved pattern list to an application server." },
      { heading: "Saved favourites", text: "When you save a pattern, its identifier is stored in localStorage on your browser under loop-stitch-saved-patterns. This lets the collection and pattern pages remember your choices. The list remains until you remove favourites or clear the relevant browser storage; no automatic expiry is configured. It is not synchronised between devices." },
      { heading: "Hosting and delivery", text: "Visiting the site requires requests to the hosting service to deliver pages, images, and video. Those requests can include technical information such as an IP address, requested URL, and browser information. The host’s logging settings, retention periods, processing terms, and applicable international transfers must be confirmed before this policy is finalised." },
      { heading: "External links", text: "Some guides link to independent websites. Following an external link takes you to that provider, where its own privacy and storage policies apply. The homepage video is served as a local video file rather than a third-party embedded player." },
      { heading: "Contact and privacy requests", text: "For privacy questions, contact info@velioratv.com. The responsible publisher, applicable rights, lawful bases, and any supervisory authority must be specified after the business country and services are confirmed." },
      { heading: "Future services", text: "Payment, visitor analytics, and newsletter providers have not been selected. This policy must be updated before adding checkout, email delivery, newsletter tools, visitor analytics, or other services that process personal information." },
    ],
  },
  {
    slug: "cookies", title: "Cookies & browser storage", description: "Information about favourites stored on your device.",
    sections: [
      { heading: "Storage used by the current project", text: "The application uses localStorage for saved pattern identifiers. LocalStorage is browser storage rather than an HTTP cookie. This policy describes the current application code; production hosting and any future services must also be checked before final publication." },
      { heading: "Favourites storage", text: "Key: loop-stitch-saved-patterns. Purpose: remember the pattern concepts you choose to save. Contents: a list of pattern identifiers. Location: this browser on this device. Duration: until you remove the favourites or clear this site’s browser data." },
      { heading: "Managing your choices", text: "You can remove favourites individually using the heart buttons on the collection or a pattern detail page. You can also clear this site’s storage through your browser settings. Clearing saved favourites does not affect your access to the free guides." },
      { heading: "Other tools", text: "No advertising or visitor analytics integration is present in the current project. If new tools are added, their actual storage and any required consent choices must be assessed and described before activation." },
    ],
  },
  {
    slug: "terms", title: "Terms of use & future sales", description: "Current website use and information needed before PDF sales open.",
    sections: [
      { heading: "Current collection status", text: "The shop currently displays proposed pattern concepts. No paid PDF, price, checkout, or purchase contract is offered through the site. Images and proposed specifications may change during development." },
      { heading: "Learning content", text: "The journal provides crochet guidance and practice exercises. Read each guide’s terminology and follow the instructions for the materials you use. A learning swatch without required dimensions does not replace a project-specific gauge sample." },
      { heading: "What a PDF pattern provides", text: "The planned PDF collection will provide instructions for making an item yourself. Unless a future listing expressly says otherwise, digital pattern instructions do not include physical yarn, tools, or a finished crochet item." },
      { heading: "Before sales begin", text: "The final sales terms must identify the seller and set out prices and currency, any applicable taxes, payment provider, delivery method, file requirements, support contact, complaint process, and customer rights for the markets served." },
      { heading: "Pattern usage rights", text: "The permissions for using a purchased PDF, sharing the file, and selling finished objects must be specified in the final pattern license. No final customer license has been adopted yet." },
    ],
  },
  {
    slug: "digital-delivery-refunds", title: "Digital delivery & refunds", description: "Preparation notes for future digital purchases and customer support.",
    sections: [
      { heading: "Purchases are not open", text: "The site does not currently accept payment or deliver paid downloads. There are no active delivery promises or purchase refund rules for the preview collection." },
      { heading: "Delivery information to confirm", text: "Before launch, each product listing and the checkout must explain the file format, how the customer receives access, any download limits or expiry, technical requirements, and how to get help if the file is missing or damaged." },
      { heading: "Customer rights and refunds", text: "The final policy must reflect the seller’s country and the markets served. It must distinguish cancellation or withdrawal rights from remedies for faulty or incorrectly supplied digital content. No blanket no-refund rule has been set." },
      { heading: "Support", text: "For questions about the upcoming collection, contact info@velioratv.com. Response arrangements, purchase verification, and the procedure for handling delivery problems must be confirmed before checkout is enabled." },
    ],
  },
];
export function getLegalPage(slug: string) { return legalPages.find(page => page.slug === slug); }

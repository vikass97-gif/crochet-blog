export type PostImage = { src: string; alt: string; caption: string; width?: number; height?: number; credit?: { name: string; url: string; license: string; licenseUrl: string; changes: string } };

export type Post = {
  slug: string;
  title: string;
  category: string;
  description: string;
  sections: { heading: string; text: string; image?: PostImage; images?: PostImage[] }[];
  faqs: { question: string; answer: string }[];
  references: { title: string; url: string }[];
};

export const posts: Post[] = [
  {
    "slug": "your-first-crochet-toolkit",
    "title": "Your First Crochet Toolkit: What to Buy and What Can Wait",
    "category": "Getting started",
    "description": "Build a practical beginner crochet kit: understand yarn labels, choose a comfortable hook, compare essential tools, and avoid unnecessary purchases.",
    "sections": [
      {
        "heading": "What you need for your first crochet session",
        "text": "For a first practice swatch, start with smooth yarn, a hook that suits it, scissors, and a yarn needle. Two removable stitch markers will help you find the edges. You can keep everything in a bag you already own.\n\nIf you have chosen a pattern, use its materials list before shopping. It may need a different fibre, extra yarn, or a specific finishing tool. This guide explains how to make those choices without buying a whole set of accessories before you know what you will use.",
        "image": {
          "src": "/images/guides/your-first-crochet-toolkit/step-01.svg",
          "alt": "What you need for your first crochet session: Yarn + hook; Scissors + needle; Two stitch markers.",
          "caption": "Learning notes: Yarn + hook → Scissors + needle → Two stitch markers. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Choose yarn that makes practising easier",
        "text": "For a first practice session, consider a smooth yarn in a light, solid colour. Look at the strand before buying: can you see its structure clearly, or is it hidden beneath a fluffy texture? Being able to see your work makes it easier to follow where the hook is going.\n\nRead the label rather than choosing only by appearance. Keep a note of the fibre content, recommended hook size, and washing instructions. If you are following a pattern, begin with its yarn recommendations. Substituting a different yarn can change the result, so save that experiment for a project you understand.\n\nThink about how the finished item will be used. A practice swatch mainly needs visible stitches, while a washable household item needs a fibre and care routine suited to that purpose. Read the label before committing to a yarn simply because its colour looks good in the shop.",
        "image": {
          "src": "/images/guides/your-first-crochet-toolkit/step-02.svg",
          "alt": "Choose yarn that makes practising easier: Smooth strand; Light solid colour; Visible stitches.",
          "caption": "Learning notes: Smooth strand → Light solid colour → Visible stitches. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Understand yarn thickness, fibre, and ball size",
        "text": "Yarn weight describes strand thickness, while the grams or ounces on a label describe how much the ball weighs. These are different pieces of information. Two balls weighing 100 g can contain very different lengths of yarn. When a pattern specifies metres or yards, compare that length as well as the weight category.\n\nFibre content is another separate choice. Cotton, wool, acrylic, and blends can produce fabrics with different feel, stretch, and care requirements. There is no single fibre that is best for every beginner and every project. Pick materials that match the intended use and that you can identify easily in your stitches.\n\nIf you are choosing between two yarns, write down the fibre, length, ball weight, care instructions, and recommended hook. Then compare them with the pattern requirements. A similar-looking colour is not enough to make two yarns interchangeable.",
        "image": {
          "src": "/images/guides/your-first-crochet-toolkit/step-03.svg",
          "alt": "Understand yarn thickness, fibre, and ball size: Thickness: yarn weight; Quantity: metres / yards; Composition: fibre.",
          "caption": "Learning notes: Thickness: yarn weight → Quantity: metres / yards → Composition: fibre. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Read a yarn label before paying",
        "text": "Treat the label as part of the yarn, not packaging to discard. Look for the product name, fibre percentages, ball weight, length, colour identifier, and any dye-lot information. Keep the label with the project so you can identify the yarn later if you need more.\n\nFor a project requiring several balls, check their colour and dye-lot identifiers where provided. Small shade differences may be difficult to notice under shop lighting. Buy the amount the pattern calls for, and account for any extra yarn used in swatching or changes to the design.\n\nCare symbols matter when you plan to give an item away. Keep the washing instructions and pass them to the recipient. A handmade piece should come with enough information for someone to look after it without guessing.",
        "image": {
          "src": "/images/guides/your-first-crochet-toolkit/step-04.svg",
          "alt": "Read a yarn label before paying: Fibre and length; Colour and dye lot; Washing instructions.",
          "caption": "Learning notes: Fibre and length → Colour and dye lot → Washing instructions. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Buy a hook for the yarn you are using",
        "text": "Start with the hook size suggested by your chosen pattern or yarn label. You can explore different hook shapes later, once you have a better idea of what feels comfortable in your hand.\n\nA large set may look like good value, but you do not have to buy every size at once. One suitable hook lets you begin practising. Keep it with the yarn and instructions so you are not searching for it whenever you want to continue.\n\nCheck the size in millimetres when comparing hooks from different countries. Letter and number labels vary between sizing systems and brands. The handle shape also affects how a hook feels: an inexpensive smooth hook may suit you better than an elaborate set whose grip is uncomfortable.",
        "image": {
          "src": "/images/guides/your-first-crochet-toolkit/step-05.svg",
          "alt": "Buy a hook for the yarn you are using: Check millimetres; Match the pattern; Try a comfortable grip.",
          "caption": "Learning notes: Check millimetres → Match the pattern → Try a comfortable grip. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "The small supplies worth keeping nearby",
        "text": "Keep scissors for cutting yarn and a yarn needle for finishing loose ends. A stitch marker can help you identify a particular stitch or the beginning of a round. A measuring tape becomes useful when your instructions ask you to check dimensions.\n\nA notebook is also a practical addition. Record the yarn, hook size, and instruction where you stopped. A note such as “finished row six” is more useful than relying on your memory several days later. You can use a note on your phone if that fits your routine better.",
        "image": {
          "src": "/images/guides/your-first-crochet-toolkit/step-06.svg",
          "alt": "The small supplies worth keeping nearby: Mark the edges; Measure the sample; Record your stopping row.",
          "caption": "Learning notes: Mark the edges → Measure the sample → Record your stopping row. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "What can wait until later",
        "text": "You can postpone decorative storage, multiple hook sets, and specialist tools until you have a reason to use them. Some projects will require additional supplies, but their materials lists should explain what to gather.\n\nBefore your first session, put the essentials together and choose somewhere with enough light to see the stitches. Your aim is to become familiar with the materials, not to produce a perfect finished item. A small, uneven swatch can still be a useful record of what you have learned.",
        "image": {
          "src": "/images/guides/your-first-crochet-toolkit/step-07.svg",
          "alt": "What can wait until later: Start with essentials; Practise first; Add tools as needed.",
          "caption": "Learning notes: Start with essentials → Practise first → Add tools as needed. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Try the hook with a small sample",
        "text": "Before judging a hook, use it for a short chain and a few rows. Notice whether the yarn glides along the shaft, catches at the hook tip, or splits when you insert it. A snag may come from the yarn, the entry angle, or a rough tool surface; change one thing at a time so you can tell what helped.\n\nGrip the handle lightly and let the hook rotate during the pull-through. A handle that feels fine in the shop may feel different during repeated movements. Stop when your hands become tired rather than trying to compensate by gripping harder.\n\nIf a pattern gives a gauge, the suggested hook is a starting point. Your sample determines whether you need to try another size. Buying every hook size beforehand does not remove the need to make that sample.",
        "image": {
          "src": "/images/guides/your-first-crochet-toolkit/step-08.svg",
          "alt": "Try the hook with a small sample: Make a small sample; Feel the grip; Check visible stitches.",
          "caption": "Learning notes: Make a small sample → Feel the grip → Check visible stitches. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "A starter shopping list without a fixed budget",
        "text": "For a learning swatch, gather one suitable yarn, one matching hook, scissors, a yarn needle, and two removable stitch markers. Add a measuring tape if you are checking dimensions. Use an existing pouch or small bag to keep these together.\n\nIf you already own clean scissors and a suitable bag, use them. A notebook or a phone note can replace a separate row counter while you learn. You can record each completed row and the place you stopped without buying another device.\n\nSpend first on materials that work well together, not on the largest bundle. Prices vary by country and shop, so compare what a set actually includes. Several duplicate accessories do not make up for a hook and yarn that are unsuitable for your chosen project.",
        "image": {
          "src": "/images/guides/your-first-crochet-toolkit/step-09.svg",
          "alt": "A starter shopping list without a fixed budget: Read materials list; Compare yarn length; Buy only what you need.",
          "caption": "Learning notes: Read materials list → Compare yarn length → Buy only what you need. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Set up a kit you can return to",
        "text": "Leave the hook with the current yarn, and keep the loose tools in a closed pouch. Place stitch markers where you can find them before starting a row. If you stop mid-project, make a note of the completed row and the current stitch count.\n\nStore the yarn label with a short sample of the strand. Record the hook size in millimetres and any changes you made to the instructions. These details are easy to forget when you return after a week.\n\nOnce you have finished a few projects, review which tools you actually reach for. Add a second hook size, blocking supplies, or a larger storage system when a real project calls for it. Let your experience build the toolkit.",
        "image": {
          "src": "/images/guides/your-first-crochet-toolkit/step-10.svg",
          "alt": "Set up a kit you can return to: Keep yarn label; Store hook with yarn; Add a project note.",
          "caption": "Learning notes: Keep yarn label → Store hook with yarn → Add a project note. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Common shopping mistakes to avoid",
        "text": "Buying textured yarn for a first lesson can make it harder to find the loops you need to count. Choosing a very fine strand because it looks delicate can also turn a small exercise into many tiny movements. Start with visibility and manageable stitches.\n\nAnother common mistake is substituting yarn by ball weight alone. Compare length, fibre, thickness, and the fabric produced by a sample. If the pattern depends on fit, a substitution needs more checking than a decorative practice piece.\n\nFinally, do not assume that expensive tools will solve every tension problem. Practice, clearer instructions, and a different grip may help more than another purchase. Identify the difficulty before deciding what to buy.\n\nPractise reading two yarn labels.\n\nPut two yarn labels side by side and write down their fibre content, metres or yards, and grams or ounces. Do not start by comparing their prices. A larger ball can contain less usable length than another if its strand is much thicker.\n\nNext, find the suggested hook sizes in millimetres. Treat those as starting information, then compare them with the requirements of your chosen pattern. Keep the care instructions with your notes. By the end of this exercise, you should be able to explain why two balls with similar colours are not necessarily suitable substitutes.",
        "image": {
          "src": "/images/guides/your-first-crochet-toolkit/step-11.svg",
          "alt": "Common shopping mistakes to avoid: Colour is not gauge; Grams are not length; Check before substituting.",
          "caption": "Learning notes: Colour is not gauge → Grams are not length → Check before substituting. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      }
    ],
    "faqs": [
      {
        "question": "Do I need a complete set of crochet hooks?",
        "answer": "No. One hook suited to your yarn is enough for a first practice swatch. Add sizes when a pattern or gauge sample gives you a reason to use them."
      },
      {
        "question": "Can I start with leftover yarn?",
        "answer": "Yes, if you can identify the yarn and see its stitches clearly. For an item with a specific use or required size, check its fibre, care instructions, available length, and suitability for the pattern first."
      },
      {
        "question": "Is a thick yarn always easier for beginners?",
        "answer": "Larger stitches can be easier to see, but a very bulky strand may feel awkward to handle. A smooth yarn with visible loops and a comfortable matching hook is a more useful starting point than thickness alone."
      },
      {
        "question": "Are stitch markers necessary?",
        "answer": "They are helpful for locating edges and the beginning of rounds. For a simple practice row, two removable markers can help you avoid skipping the first or last stitch."
      },
      {
        "question": "What should I buy next?",
        "answer": "Make a small project with the kit you have, then identify what was missing. Let the next pattern or a specific practical difficulty guide the purchase."
      }
    ],
    "references": [
      {
        "title": "Craft Yarn Council: yarn weight system",
        "url": "https://www.craftyarncouncil.com/standards/yarn-weight-system"
      }
    ]
  },
  {
    "slug": "how-to-read-a-crochet-pattern",
    "title": "How to Read a Crochet Pattern Without Feeling Lost",
    "category": "Learn the basics",
    "description": "Read a crochet pattern step by step with original illustrations: terminology, abbreviations, foundations, turning chains, repeats, stitch placement, rounds, and garment notes.",
    "sections": [
      {
        "heading": "Find the information around the first row",
        "text": "A line such as “ch 7, sc in second ch from hook” can feel less like instructions and more like a code. The useful starting point is the pattern’s key: it tells you what the abbreviations mean and whether the stitch names are US or UK.\n\nThen check the materials, measurements, construction, and finishing notes. Knowing whether you are making a flat piece, working in rounds, or joining separate parts gives each row a purpose. Below, we work through a six-stitch example and a repeat that increases six stitches to nine, so you can see how the shorthand becomes a sequence of actions.",
        "image": {
          "src": "/images/guides/reading-patterns/step-01.svg",
          "alt": "Before row one. Materials Construction Finishing Yarn + hook + tools Rows, rounds or pieces? Joining and care notes",
          "caption": "Before row one — original learning illustration. Click to view at full size."
        }
      },
      {
        "heading": "Check whether the pattern uses US or UK terms",
        "text": "US and UK crochet terminology use some of the same names for different stitches. For example, a US single crochet is called a double crochet in UK terminology. Check the system stated in your pattern before working any stitch.\n\nThis blog uses US terminology unless a page says otherwise. When you move between tutorials from different creators, check again. If the terminology is not stated, look for a glossary or ask the designer instead of guessing.",
        "image": {
          "src": "/images/guides/reading-patterns/step-02.svg",
          "alt": "One stitch, two naming systems. US sc = UK dc US hdc = UK htr US dc = UK tr Single crochet Half double crochet Double crochet",
          "caption": "One stitch, two naming systems — original learning illustration. Click to view at full size."
        }
      },
      {
        "heading": "Read the pattern in three passes",
        "text": "On the first pass, look at the whole project: materials, size, construction, and finishing. On the second, underline the instructions that may need extra attention, such as a change of stitch, a join, or a different treatment of the turning chain. On the third, prepare only the next row you will actually work.\n\nKeep a separate note of decisions you make, including the chosen size and any substitutions. If the pattern provides several sizes in one line, circle or highlight the numbers for your size throughout the document. Switching between sizes halfway through can produce a mismatch even when each individual stitch is correct.\n\nBefore starting, check the designer’s page for corrections or an updated file if one is available. Save the version you are using so you can refer to the same instructions when asking for help.",
        "image": {
          "src": "/images/guides/reading-patterns/step-03.svg",
          "alt": "Read with a purpose. 1 / Overview 2 / Decisions 3 / Next row Understand the object Highlight size and notes Follow one line at a time",
          "caption": "Read with a purpose — original learning illustration. Click to view at full size."
        }
      },
      {
        "heading": "A small abbreviation key you can use immediately",
        "text": "For this guide, ch means chain, sc means single crochet, st means stitch, and sts means stitches. Additional US abbreviations you may meet include hdc for half double crochet, dc for double crochet, and sl st for slip stitch. These are names to recognise; learn the movements separately before using them in a project.\n\nWords such as “across,” “turn,” and “each” carry instructions too. “Sc in each st across” tells you both which stitch to make and where to repeat it. “Turn” changes the direction of work for the following row. Do not focus on the abbreviations so closely that you overlook these ordinary words.\n\nSome instructions tell you to work into a space rather than a stitch. A chain space is an opening created by chains in an earlier row or round. Find the stated location before working into it; it is not automatically the next V along the top edge.\n\nKeep this project-specific key beside your work. If the designer defines a special stitch, use that explanation rather than a glossary from a different pattern.",
        "image": {
          "src": "/images/guides/reading-patterns/step-04.svg",
          "alt": "Build a key for this project. ch / chain sc / single crochet st / stitch A completed chain A US stitch name A location or count",
          "caption": "Build a key for this project — original learning illustration. Click to view at full size."
        }
      },
      {
        "heading": "Translate one instruction into a small action",
        "text": "Suppose an instruction says to work one single crochet in each stitch across a row. Think of it as a sequence of small actions: find the next stitch, work the specified stitch, and move to the following one. Then check the expected total.\n\nRepeats need the same deliberate approach. Find where the repeat begins, where it ends, and how many times the pattern asks you to work it. Do not assume that parentheses always mean a repeat; use the explanation provided by that pattern.",
        "image": {
          "src": "/images/guides/reading-patterns/step-05.svg",
          "alt": "Sc in each stitch across. Find next stitch Work one sc Move to the next Locate the top loops Complete the movement Repeat, then count",
          "caption": "Sc in each stitch across — original learning illustration. Click to view at full size."
        }
      },
      {
        "heading": "Use stitch counts as checkpoints",
        "text": "When a pattern gives a stitch total, compare it with your work at the end of the row or round. If the numbers do not agree, it is easier to investigate immediately than after adding several more rows.\n\nCheck notes about whether turning chains count as stitches, where the first stitch goes, and how rounds are joined. These details can affect how you interpret the edges of the work. Marking your place in the instructions also helps you return to the correct step after a break.",
        "image": {
          "src": "/images/guides/reading-patterns/step-06.svg",
          "alt": "A checkpoint after every row. Expected: 6 Count your work Compare: 6 = 6 Read the stated total Count completed stitches Continue when they agree",
          "caption": "A checkpoint after every row — original learning illustration. Click to view at full size."
        }
      },
      {
        "heading": "Worked example: read a two-row practice pattern",
        "text": "Use this original practice example in US terms: “Ch 7. Row 1: sc in the second ch from the hook and each ch across (6 sts). Row 2: ch 1, turn, sc in each st across (6 sts). The turning ch does not count as a stitch.”\n\nThe foundation instruction makes seven chains. Row 1 skips the chain closest to the hook and uses the other six chains, producing six single crochet stitches. The live loop on the hook is not one of the seven chains.\n\nFor Row 2, make one chain for height, turn the piece, and work into the six stitches of Row 1. The note explains why you neither count the turning chain nor work an extra stitch into it. At the end, count six top Vs. This exercise has no required finished dimensions.",
        "image": {
          "src": "/images/guides/reading-patterns/step-07.svg",
          "alt": "Your six-stitch practice sample. Original schematic explaining the counts stated in the lesson.",
          "caption": "Your six-stitch practice sample — original learning illustration. Click to view at full size."
        }
      },
      {
        "heading": "Worked example: repeats and increases",
        "text": "Consider a row starting with six stitches and the instruction “Repeat [sc in next st, 2 sc in next st] three times (9 sts).” Each repeat uses two existing stitches: one receives a single crochet and the next receives two single crochets. Those two input stitches become three output stitches.\n\nThree repeats therefore consume all six starting stitches and produce nine stitches. This is an increase row. Checking both the stitches used and the stitches produced helps you see whether you have interpreted the repeat correctly.\n\nA different instruction, such as “(sc, ch 1, sc) in next st,” groups several actions in one location. Follow the full wording around the punctuation. Brackets, parentheses, and asterisks are reading aids, but their exact job depends on the designer’s explanation.",
        "image": {
          "src": "/images/guides/reading-patterns/step-08.svg",
          "alt": "Repeat [1 sc, 2 sc] three times. Original schematic explaining the counts stated in the lesson.",
          "caption": "Repeat [1 sc, 2 sc] three times — original learning illustration. Click to view at full size."
        }
      },
      {
        "heading": "Understand gauge and finished measurements",
        "text": "Gauge is the number of stitches and rows over a stated measurement, using the specified stitch pattern. If the instructions ask for a sample, make it before beginning an item where dimensions matter. Measure the sample as directed, including any washing or blocking instructions.\n\nFor example, imagine a pattern asking for 20 stitches across 10 cm, while your sample has 22 across the same distance. Your stitches are smaller across that measurement. A piece made with the same stitch count would be narrower. You would need to adjust and measure another sample before trusting the planned width.\n\nA hook change may help, but changing the fibre or stitch pattern also changes the fabric. Recheck both width and height rather than assuming one adjustment solves everything. A learning swatch can be useful without matching gauge; a fitted item needs more precise checking.",
        "image": {
          "src": "/images/guides/reading-patterns/step-09.svg",
          "alt": "Read the measuring span. Target: 20 sts Sample: 22 sts Measure again Across 10 cm Across the same 10 cm Smaller stitches here",
          "caption": "Read the measuring span — original learning illustration. Click to view at full size."
        }
      },
      {
        "heading": "Turning chains: compare two different counting rules",
        "text": "A turning chain raises the working loop so the next row can begin. Whether it counts as a stitch depends on the instructions. Our six-stitch single crochet exercise uses ch 1 for height only. You work into the first completed stitch and leave the turning chain out of the total.\n\nHere is a separate US double crochet counting example: ch 10, then dc in the fourth chain from the hook and each remaining chain. You make seven actual dc. If this example explicitly counts the three skipped chains as the first stitch, the row total is eight. Seven worked stitches plus one counted chain group gives eight; it does not mean eight worked dc.\n\nOn the next row, if ch 3 counts as the first dc, the starting chain group takes one position in the total. The remaining stitches and the last insertion point must follow that pattern’s notes. Write its chain rule beside the first row so you do not switch conventions halfway through. Count the grouped chains once, not as three separate stitches.\n\nIn the illustration below, the turning chain counts as one US double crochet. Its base stitch is already represented by that chain, so make the first actual double crochet in the next stitch. In this counting convention, work into the top of the previous row’s turning chain at the far end of the row. If your pattern says the turning chain does not count, use its different first-stitch and edge instructions instead.",
        "image": {
          "src": "/images/guides/illustrations/turning-chain-insertion-v1.webp",
          "alt": "Two close-up crochet illustrations: incorrect insertion at the base of a counted turning chain, and correct insertion in the next stitch.",
          "caption": "US double crochet: this comparison applies only when the turning chain counts as a stitch. Follow your pattern’s counting rule. Open the image for a larger view.",
          "width": 1024,
          "height": 1536
        }
      },
      {
        "heading": "Rows, joined rounds, and continuous rounds",
        "text": "Rows usually involve working back and forth, with a turn between passes. A project worked in rounds goes around a shape instead. Read whether the rounds are joined, turned, or worked continuously, because these constructions do not share one universal starting method.\n\nJoined rounds may finish with a slip stitch and begin with chains as described in the pattern. Continuous rounds continue without that join; a marker can identify the first stitch of each round. In either case, the pattern should tell you how the starting stitches and joins affect the count.\n\nDo not add a join just because you have used one in another project. Follow the construction notes for the current piece, and check the count before moving to the next round. If the instructions are unclear, pause before the first join rather than guessing.",
        "image": {
          "src": "/images/guides/reading-patterns/step-11.svg",
          "alt": "Three constructions, different starts. Rows Joined rounds Continuous rounds Work back and forth Follow the join instructions Mark the round start",
          "caption": "Three constructions, different starts — original learning illustration. Click to view at full size."
        }
      },
      {
        "heading": "Stitches, chain spaces, and front or back loops",
        "text": "Find the location before making the stitch. An instruction to work “in the next stitch” and an instruction to work “in the next chain space” identify different targets. A space is an opening in the fabric; it is not the same as the top loops of an individual chain.\n\nSuppose your own practice line says “(sc, ch 2, sc) in the next chain space.” You work a single crochet into the opening, make two chains without inserting into the fabric, then make another single crochet into the same opening. The group has two worked sc and a two-chain arch. Do not move to a new location until the group is finished.\n\nFor a completed stitch, the top V has two strands. Unless the instructions specify a different entry, plain stitches are commonly worked under both. “Front loop only” uses the strand closest to you in your current working position; “back loop only” uses the farther one. Identify them before inserting rather than guessing from the front of the finished item.",
        "image": {
          "src": "/images/guides/reading-patterns/step-12.svg",
          "alt": "Find the insertion target. Top of a stitch Chain space One top loop Two strands form a V Work into the opening Front or back as stated",
          "caption": "Find the insertion target — original learning illustration. Click to view at full size."
        }
      },
      {
        "heading": "Use charts as a second way to understand the work",
        "text": "A crochet chart represents stitches with symbols. Read its legend first, then look for the starting point, row or round numbers, and any arrows showing the direction of work. A chart can make the placement of groups or increases easier to notice than a dense written line.\n\nIf a pattern includes both a chart and written directions, compare one short section rather than trying to translate the whole page immediately. Find a repeat in the written text, locate the same group on the chart, and check where it is placed.\n\nDo not assume every chart begins in the same corner or uses the same symbols. The designer’s legend and orientation notes are part of the instructions. If the two versions appear to disagree, check for corrections or ask the designer which instruction to follow.",
        "image": {
          "src": "/images/guides/reading-patterns/step-13.svg",
          "alt": "Read the chart with its key. Find the start Read the legend Match one repeat Check the direction Symbols mean stitches Compare with the text",
          "caption": "Read the chart with its key — original learning illustration. Click to view at full size."
        }
      },
      {
        "heading": "Garment directions: identify the wearer and the fabric side",
        "text": "For a garment, left and right refer to the person wearing it. Lay out the pieces as they will be worn before labelling shoulders, sleeves, or fronts. A piece facing you on the table can reverse what looks like left or right, so a small labelled sketch is useful.\n\n“Right side” and “wrong side” describe the intended outer and inner faces of the fabric. They do not identify the right or left part of the body. Keep those two kinds of label separate. Mark the intended outer face when the pattern asks you to, especially before joining similar pieces.\n\nIf an instruction says to shape two areas at the same time, track both sequences by row number. For example, neckline and armhole changes can occur on different schedules within the same rows. Write a row-by-row note before working that section. If reversing shaping for a mirrored piece is unclear, seek a detailed explanation rather than treating “left” as a change of stitch name.",
        "image": {
          "src": "/images/guides/reading-patterns/step-14.svg",
          "alt": "Two different kinds of label. Wearer left / right Fabric RS / WS Row schedule Body-part orientation Outer / inner face Track concurrent shaping",
          "caption": "Two different kinds of label — original learning illustration. Click to view at full size."
        }
      },
      {
        "heading": "A practical routine for finding an error",
        "text": "Start with the last row whose count matched the pattern. Compare the next row’s expected total with your actual count. Inspect the first and last stitches, then check repeats in smaller groups. A marker between repeats can make a long row easier to audit.\n\nIf your count is correct but the shape looks wrong, check stitch placement. Working into a chain space instead of a stitch, or treating a turning chain differently, can change the fabric without immediately changing the total. Count is a useful checkpoint, not the only one.",
        "image": {
          "src": "/images/guides/reading-patterns/step-15.svg",
          "alt": "Work backward to the first mismatch. Check the edges Split the repeats Inspect placement First and last stitches Count smaller groups Stitch or chain space?",
          "caption": "Work backward to the first mismatch — original learning illustration. Click to view at full size."
        }
      },
      {
        "heading": "Ask a precise question when you get stuck",
        "text": "If an instruction still does not make sense, identify the exact row and wording that caused the difficulty. Record your stitch count and, if possible, take a clear photo of the area you are working on.\n\nA question such as “row four asks for twelve stitches, but I count eleven” gives a designer or teacher something concrete to investigate. Learning to read patterns takes practice. Your goal is not to understand every abbreviation at once, but to understand the next instruction before working it.",
        "image": {
          "src": "/images/guides/reading-patterns/step-16.svg",
          "alt": "A question someone can investigate. Row number Exact instruction Your stitch count Where the issue starts Copy the relevant line Add a clear work photo",
          "caption": "A question someone can investigate — original learning illustration. Click to view at full size."
        }
      }
    ],
    "faqs": [
      {
        "question": "Do I need to memorise every abbreviation?",
        "answer": "No. Learn the abbreviations used in your current project and keep its glossary nearby. Add new terms when a pattern gives you a reason to use them."
      },
      {
        "question": "Do turning chains count as stitches?",
        "answer": "That depends on the pattern and stitch. Read the notes for the specific row or round. In the six-stitch practice example in this article, the turning chain does not count."
      },
      {
        "question": "What does a number at the end of a row mean?",
        "answer": "It often gives the expected stitch total, but read the pattern’s notation key. Compare that total with your work before beginning the following row."
      },
      {
        "question": "Can I follow a UK pattern using US stitch names?",
        "answer": "You can translate the terminology, but do it consistently throughout the pattern. Confirm the terminology first, then use a reliable conversion reference and the designer’s special-stitch definitions."
      },
      {
        "question": "What if a pattern seems to contain an error?",
        "answer": "Check the glossary, chosen size, earlier counts, and any published corrections. If it still does not make sense, ask the designer with the exact row and wording instead of silently changing the instruction."
      }
    ],
    "references": [
      {
        "title": "Craft Yarn Council: how to read a crochet pattern",
        "url": "https://www.craftyarncouncil.com/standards/how-to-read-crochet-pattern"
      },
      {
        "title": "Craft Yarn Council: crochet abbreviations",
        "url": "https://www.craftyarncouncil.com/standards/crochet-abbreviations"
      },
      {
        "title": "Craft Yarn Council: chart symbols",
        "url": "https://www.craftyarncouncil.com/standards/crochet-chart-symbols"
      }
    ]
  },
  {
    "slug": "choosing-your-first-crochet-project",
    "title": "How to Choose Your First Crochet Project—and Actually Get Started",
    "category": "Project inspiration",
    "description": "Choose your first crochet project with a practical comparison of swatches, washcloths, scarves, granny squares, and amigurumi, plus a realistic plan for finishing.",
    "sections": [
      {
        "heading": "Pick a project you want to make and can follow",
        "text": "A small washcloth, a long scarf, and a tiny toy can all carry a beginner label. They ask for different skills and very different amounts of work. Before choosing by the finished photo, read how each one is made.\n\nLook for a project that uses something you already know and introduces a manageable next step. If you can chain and make single crochet but struggle with turning, a small rectangle gives you room to practise. If rounds are what interest you, choose instructions that explain their starts, counts, and joins. This guide helps you compare those choices before buying the yarn.",
        "image": {
          "src": "/images/guides/choosing-your-first-crochet-project/step-01.svg",
          "alt": "Pick a project you want to make and can follow: Choose a useful object; Read all instructions; Check required skills.",
          "caption": "Learning notes: Choose a useful object → Read all instructions → Check required skills. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Look beyond the beginner label",
        "text": "A beginner label is a starting point, not a substitute for reading the pattern. Check whether the project involves shaping, colour changes, joining separate pieces, or unfamiliar stitches.\n\nYou might decide to learn one new technique along the way. That is different from starting a project in which almost every step is unfamiliar. Make a short list of the techniques required, then decide which ones you can already follow and which ones need practice first.\n\nRead the finishing section as carefully as the first row. A simple-looking piece may involve several joins, a border worked around corners, or assembly that requires careful alignment. Count those tasks as techniques to learn, not as small details you can ignore until the end.",
        "image": {
          "src": "/images/guides/choosing-your-first-crochet-project/step-02.svg",
          "alt": "Look beyond the beginner label: Read techniques list; Check construction; Review finishing.",
          "caption": "Learning notes: Read techniques list → Check construction → Review finishing. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Choose your learning goal before the object",
        "text": "Decide what you want to practise. If your goal is recognising stitches and keeping straight edges, a small rectangle is a useful exercise. If you want to learn where rounds begin and end, a simple motif with clear round-by-round instructions may fit that goal better.\n\nWrite one sentence such as “I want to keep the stitch count steady across ten rows.” This makes it easier to judge whether a pattern suits you. A project can be attractive yet teach a different skill from the one you need right now.\n\nChoose a piece you are willing to undo and remake. A first attempt tied to a special occasion can make ordinary corrections feel more frustrating. Give yourself room to experiment before committing to a gift or a fitted item.",
        "image": {
          "src": "/images/guides/choosing-your-first-crochet-project/step-03.svg",
          "alt": "Choose your learning goal before the object: One learning goal; Small practice piece; Review the result.",
          "caption": "Learning notes: One learning goal → Small practice piece → Review the result. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Compare a swatch, washcloth, and simple scarf",
        "text": "A swatch has the smallest commitment and no obligation to become a usable object. It is a good choice when you are learning to chain, turn, and count. You can repeat it with the same materials to compare your progress.\n\nA small washcloth adds a practical purpose while keeping a flat construction. Choose a pattern and washable yarn suited to that use, and read the care instructions. You may need to check size or add finishing steps that a plain swatch does not require.\n\nA simple scarf can use the same familiar stitch for many rows. That repetition may be enjoyable, but the larger piece means more time and more yarn. Choose it when you want an extended routine, not simply because the stitch itself is easy. Check the length and finishing requirements before buying supplies.",
        "image": {
          "src": "/images/guides/choosing-your-first-crochet-project/step-04.svg",
          "alt": "Compare a swatch, washcloth, and simple scarf: Swatch: practise; Washcloth: finish; Scarf: repeat patiently.",
          "caption": "Learning notes: Swatch: practise → Washcloth: finish → Scarf: repeat patiently. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "When a granny square or amigurumi makes sense",
        "text": "A granny square can introduce rounds, groups of stitches, corners, and joins in one small object. Its compact size does not mean every step is obvious. Pick a tutorial that explains the centre, the start of each round, the corner spaces, and how the piece is finished.\n\nAmigurumi often asks you to work around a small shape, track increases and decreases, maintain a stitch count, and assemble pieces. The finished object may be small while the instructions require several new skills. Review those skills before choosing it as a first project.\n\nIf either style is what interests you, practise the unfamiliar construction in a small sample first. You do not have to abandon an appealing idea; you can divide the learning into manageable steps. A clear tutorial and the ability to count rounds matter more than the size of the photograph.",
        "image": {
          "src": "/images/guides/choosing-your-first-crochet-project/step-05.svg",
          "alt": "When a granny square or amigurumi makes sense: Squares need joining; Toys need shaping; Choose skills deliberately.",
          "caption": "Learning notes: Squares need joining → Toys need shaping → Choose skills deliberately. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Make a plan for finishing",
        "text": "Read the finishing instructions before starting. Does the piece need sewing, edging, or another technique after the main crochet is complete? Gather those supplies too, so the final steps do not come as a surprise.\n\nWhen you finish, make a few notes: which instructions were clear, what needed another explanation, and which technique you would like to practise again. These notes make your next project choice more informed than simply picking another attractive photo.",
        "image": {
          "src": "/images/guides/choosing-your-first-crochet-project/step-06.svg",
          "alt": "Make a plan for finishing: Plan the last step; Keep finishing tools; Allow assembly time.",
          "caption": "Learning notes: Plan the last step → Keep finishing tools → Allow assembly time. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Check whether the instructions support beginners",
        "text": "Before committing, look for a materials list, terminology statement, stitch glossary, expected counts, and finishing directions. Photos or demonstrations should show the steps that are difficult to describe, not only the attractive finished item.\n\nRead one row aloud in plain language. If you cannot tell where to insert the hook, what to repeat, or what total to expect, check whether the pattern explains that elsewhere. A tutorial may suit you better than a compact pattern written for someone who already knows the techniques.\n\nAlso check how to get help. A designer’s correction page, explanation of a special stitch, or clear construction photo can make a difference when you reach an unfamiliar step. Price alone does not tell you how much guidance a pattern provides.",
        "image": {
          "src": "/images/guides/choosing-your-first-crochet-project/step-07.svg",
          "alt": "Check whether the instructions support beginners: Clear stitch counts; Explained techniques; Useful checkpoints.",
          "caption": "Learning notes: Clear stitch counts → Explained techniques → Useful checkpoints. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Match the yarn to the job",
        "text": "Start with the pattern’s material recommendation and consider the finished item’s care needs. A piece intended to be washed repeatedly needs a suitable yarn and care routine. A decorative practice motif may have different requirements from something you plan to wear.\n\nWhen substituting, compare fibre, thickness, available length, and the fabric made by a sample. If size matters, match the pattern’s gauge before beginning the full piece. A different yarn can change more than the colour; it may change the way the item holds its shape.\n\nKeep the label and record how much yarn you have. If the project calls for several balls, confirm their identifiers before starting. A practical supply plan reduces interruptions and makes the next project easier to organise.",
        "image": {
          "src": "/images/guides/choosing-your-first-crochet-project/step-08.svg",
          "alt": "Match the yarn to the job: Check intended use; Read care label; Follow materials list.",
          "caption": "Learning notes: Check intended use → Read care label → Follow materials list. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Plan sessions around stages, not a deadline",
        "text": "Break the project into stages: prepare materials, practise the unfamiliar stitch, begin the main piece, check the early rows, complete the body, and finish the ends. A short session can cover just one of those stages.\n\nAt the end of each session, note the completed row or round and the next action. If you stop halfway through a row, record your place clearly and secure the live loop so it does not unravel in the bag. This is especially useful when your practice time comes in small intervals.\n\nAvoid estimating your progress from someone else’s completion time. Your pace includes learning, checking, and correcting. Instead, choose a size you can return to comfortably and make the next session easy to resume.",
        "image": {
          "src": "/images/guides/choosing-your-first-crochet-project/step-09.svg",
          "alt": "Plan sessions around stages, not a deadline: Prepare; Crochet a section; Count and record.",
          "caption": "Learning notes: Prepare → Crochet a section → Count and record. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Use an early checkpoint before committing more time",
        "text": "After a few rows or rounds, pause. Check the stitch total, look at the edges or shape, and compare the fabric with the instructions. If there are required dimensions, measure as the pattern directs rather than waiting until the final step.\n\nIf the work is difficult to read, consider whether the yarn is obscuring the stitches. If the instructions are still unclear after practice, switch to a more detailed tutorial. These changes can be more useful than forcing yourself through a confusing project.\n\nKeep a note of what you learned before undoing a sample. Changing direction is easier when you can name the reason: unfamiliar joins, too much repetition, or missing explanations. Use that information to choose the next attempt.",
        "image": {
          "src": "/images/guides/choosing-your-first-crochet-project/step-10.svg",
          "alt": "Use an early checkpoint before committing more time: Measure early; Count the edges; Correct before continuing.",
          "caption": "Learning notes: Measure early → Count the edges → Correct before continuing. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "A worked decision: choosing between three projects",
        "text": "Imagine you can make a chain and single crochet, but turning still feels uncertain. You are considering a large scarf, a small washcloth, and a shaped toy. Start by comparing the unfamiliar steps, not the photographs.\n\nThe scarf may let you practise turning, but it asks for a longer commitment. The washcloth may offer the same practice in fewer rows, provided the pattern explains the edges and finishing. The toy may add rounds, shaping, stuffing, and assembly before you feel confident counting rows.\n\nIn that situation, a swatch followed by a well-explained washcloth is a reasonable route. If the toy is your main motivation, keep it as a later goal and practise its required techniques separately. This is a learning plan, not a rule that everyone must choose the same first object.",
        "image": {
          "src": "/images/guides/choosing-your-first-crochet-project/step-11.svg",
          "alt": "A worked decision: choosing between three projects: Compare the skills; Compare assembly; Choose a manageable task.",
          "caption": "Learning notes: Compare the skills → Compare assembly → Choose a manageable task. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "A short checklist before you begin",
        "text": "Check that you have the required materials, understand the terminology, know where the instructions begin, and can find explanations for unfamiliar techniques. Keep the pattern and any notes beside your work.\n\nIf several of these points are unclear, practise with a smaller exercise first or choose a more detailed tutorial. The right first project is one that helps you keep learning. It does not have to be impressive to anyone else.",
        "image": {
          "src": "/images/guides/choosing-your-first-crochet-project/step-12.svg",
          "alt": "A short checklist before you begin: Yarn and hook; Instructions and counts; Finishing supplies.",
          "caption": "Learning notes: Yarn and hook → Instructions and counts → Finishing supplies. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Finish, review, and choose one next skill",
        "text": "Finish the ends and complete any border or assembly before judging the project as done. Lay it out and check how it behaves in use. Follow the yarn and pattern care instructions rather than assuming every crochet fabric should be treated alike.\n\nWrite down one thing that improved and one thing you would practise again. Perhaps your final rows have steadier edges, while finding the last stitch still takes effort. Those observations give your next project a purpose.\n\nChoose one new challenge, such as a different stitch, a simple round, or a basic join. Keep the rest of the next project familiar where possible. Over time, those small additions build a wider set of skills without making every new pattern feel like starting from zero.\n\nTry a small part before choosing the whole project.\n\nRead the first few instructions of a project you like. Identify every abbreviation, then practise its main stitch on spare yarn. The sample does not need to become the finished object. It helps you discover whether you understand the instruction and enjoy repeating the movement.\n\nIf the project uses several pieces, read the joining instructions too. A simple square can be approachable on its own, while a bag made from many squares also asks you to match sizes and assemble them. Choose the whole process, including finishing, rather than only the attractive photograph.",
        "image": {
          "src": "/images/guides/choosing-your-first-crochet-project/step-13.svg",
          "alt": "Finish, review, and choose one next skill: Inspect edges; Record what worked; Choose one new skill.",
          "caption": "Learning notes: Inspect edges → Record what worked → Choose one new skill. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      }
    ],
    "faqs": [
      {
        "question": "What is the easiest first crochet project?",
        "answer": "A small flat swatch with one repeated stitch is a practical starting point. The best choice for you also depends on the clarity of the instructions and the skill you want to learn."
      },
      {
        "question": "Can I start with a blanket?",
        "answer": "You can, but its size creates a larger commitment even if the stitch is simple. Make a small sample first, check the required yarn and dimensions, and decide whether you enjoy the repetition."
      },
      {
        "question": "Should I choose a free or paid pattern?",
        "answer": "Choose by the quality of the guidance, not price alone. Look for clear notes, stitch counts, construction explanations, and a way to check corrections or ask for help."
      },
      {
        "question": "What if I do not finish my first project?",
        "answer": "Identify what stopped you and save the useful notes. You can reduce the size, practise an unfamiliar technique, or choose clearer instructions. The attempt can still teach you what to look for next."
      },
      {
        "question": "When am I ready for a more complex pattern?",
        "answer": "When you can identify the required skills, follow the instructions, check your counts, and find explanations for the unfamiliar steps. Add challenges gradually rather than waiting for every stitch to be perfect."
      }
    ],
    "references": [
      {
        "title": "Yarnspirations: beginner patterns and tutorials",
        "url": "https://www.yarnspirations.com/pages/beginner-patterns"
      },
      {
        "title": "Craft Yarn Council: standards and guidelines",
        "url": "https://www.craftyarncouncil.com/standards/"
      }
    ]
  },
  {
    "slug": "how-to-crochet-for-beginners",
    "title": "How to Crochet for Beginners: Your First Stitches, Step by Step",
    "category": "Beginner tutorial",
    "description": "Learn how to crochet from scratch: choose supplies, make a slip knot and chain, practise single crochet, and finish a simple 10-stitch swatch.",
    "sections": [
      {
        "heading": "Your first goal: a ten-stitch rectangle",
        "text": "Start with a small rectangle: ten single crochet stitches across and ten rows tall. It gives you a reason to practise the chain, find the first and last stitches, turn the fabric, and secure the ends. There is no target measurement, so you can focus on the movements.\n\nThe instructions use US terms. Here, ch means chain, sc means single crochet, and st means stitch. US single crochet is called double crochet in UK terminology. You can make the foundation in one session and return to the rows later; write down where you stop so you can pick up the exercise easily.",
        "image": {
          "src": "/images/guides/how-to-crochet-for-beginners/step-01.svg",
          "alt": "Three schematic rows of ten V-shaped stitch tops. First and last columns are marked.",
          "caption": "Schematic stitch tops, not a view of the full fabric. In this single crochet sample, mark the first and last stitches and keep ten stitches per row; the turning chain is excluded."
        }
      },
      {
        "heading": "1. Gather a simple crochet kit",
        "text": "Choose a smooth, light-coloured yarn so that the individual loops are easy to see. Avoid fluffy or very dark yarn for this exercise. Use the hook size recommended on the yarn label as your starting point; you can adjust your materials later when you know how they behave together.\n\nHave scissors, a yarn needle, and two stitch markers nearby. Set your yarn where it can unwind freely, with enough light over your hands. Keep this first session focused on learning the movements rather than finishing quickly. A short practice session is enough to make a start.",
        "image": {
          "src": "/images/guides/how-to-crochet-for-beginners/step-02.svg",
          "alt": "1. Gather a simple crochet kit: Smooth light yarn; Suitable hook; Markers + yarn needle.",
          "caption": "Learning notes: Smooth light yarn → Suitable hook → Markers + yarn needle. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "2. Hold your hook and control the yarn",
        "text": "Hold the hook in your preferred hand. A pencil grip places it between your thumb and index finger; a knife grip rests your hand over it. Try each gently and choose the grip that lets you rotate the hook without squeezing. Left-handed learners can hold the hook in the left hand and mirror the hand movements.\n\nUse your other hand to guide the strand coming from the ball and hold the work near the hook. This strand is the working yarn; the loose end is the tail. Let the working yarn move across your fingers with light resistance. If it will not slide, loosen your grip. Take a break when your hands feel tired.",
        "image": {
          "src": "/images/guides/how-to-crochet-for-beginners/step-03.svg",
          "alt": "2. Hold your hook and control the yarn: Comfortable hook grip; Guide working yarn; Keep movement relaxed.",
          "caption": "Learning notes: Comfortable hook grip → Guide working yarn → Keep movement relaxed. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "3. Make a slip knot",
        "text": "Leave a tail of about 15 cm (6 inches), so you have yarn to weave in later. The working yarn leads back to the ball; the tail is the short free end. The six photographs below are read from left to right across the top row, then left to right across the bottom row.\n\n1. Lay a loose crossed loop over your fingers. Keep the short tail visible and identify the working strand before moving either one.\n\n2. Take a folded section of the working yarn through the original loop. Pull a small loop through, rather than passing the free end all the way through. The photograph shows fingers holding the new loop open.\n\n3. Hold the base of the loop with your other hand. Keep the short tail separate so you can see which strand leads back to the ball.\n\n4. Gently draw the new loop up while holding the strands beneath it. The original loop closes into the knot below. Do not pull the new loop so tight that you cannot insert the hook.\n\n5. Put the new adjustable loop over the hook. Move it onto the straight shaft, rather than tightening it around the narrow throat.\n\n6. Adjust the strands gently until the loop rests neatly around the shaft. It should still slide without forcing the hook. If the knot is fixed or the loop will not move, loosen it and repeat the steps.\n\nCheckpoint: you have one live loop on the hook, a small knot below it, a working strand leading to the ball, and a free tail. Practise making and undoing the knot before moving on. Neither the slip knot nor the live loop counts as a completed chain stitch.",
        "image": {
          "src": "/images/guides/real-photos/slip-knot-photos.webp",
          "alt": "Six real photographs of hands forming a pink yarn slip knot, drawing a new loop through, placing it over a crochet hook and adjusting it.",
          "caption": "Read left to right, top row then bottom row. Photographs: Postmodest, via Wikimedia Commons, CC0. Resized and converted to WebP; yarn paths are unchanged.",
          "width": 1500,
          "height": 1125
        }
      },
      {
        "heading": "4. Crochet a foundation chain",
        "text": "Begin with one adjustable loop on the hook. Hold the knot just below it with your non-hook hand, and let the working yarn feed from the ball without pulling tightly. These instructions describe a right-handed demonstration; a left-handed crocheter can mirror the hand positions while keeping the same yarn-over and pull-through sequence.\n\n1. Bring the working yarn over the hook from back to front. This is a yarn over. Catch that strand in the hook’s groove without wrapping the short tail around the hook.\n\n2. Turn the hook slightly so its head can pass through the existing loop. Draw the caught working yarn through that loop. Guide the yarn rather than pulling against a tightly pinched loop.\n\n3. Pause and look: one completed chain sits below the hook, and one new live loop remains on the hook. The loop you just pulled through becomes that live loop. Repeat yarn over and pull through to make the next chain.\n\nMove your holding fingers up towards the newest completed chain as the chain grows. Keep each loop loose enough for the hook to move smoothly, but not so loose that the chain becomes difficult to handle. If the hook catches, pause, loosen your grip, and check that the yarn is sitting in the groove.\n\nFor our practice rectangle, make 11 chains. To count, gently straighten the chain and find the small V shapes. Count only the completed chain links: exclude the slip knot and the live loop on the hook. The photographs below show the movement on an existing chain so you can see the strand caught by the hook. They are not a sample with exactly 11 chains.\n\nCheckpoint: count 11 completed chains twice before starting the first row. In the next step, you will skip the chain nearest the hook and make a single crochet in the second chain and each remaining chain, giving ten single crochet stitches.\n\nA chain has several possible entry points. Some patterns use its back bumps or another loop arrangement. For this exercise, use the top-strand entry described in the next section consistently; you can explore other foundations once you can recognise your chains easily.",
        "images": [
          {
            "src": "/images/guides/real-photos/chain-step-1.webp",
            "alt": "Yarn over: blue working yarn caught in a purple crochet hook, with the existing live loop farther along the shaft.",
            "caption": "1. Yarn over: catch the working yarn in the hook groove before drawing it through the existing loop.",
            "width": 1500,
            "height": 1125,
            "credit": {
              "name": "Stilfehler",
              "url": "https://commons.wikimedia.org/wiki/File:Crochet_Chain_Stitch_(Step_1).jpg",
              "license": "CC BY-SA 4.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
              "changes": "Resized and converted to WebP; no changes to the yarn or hook."
            }
          },
          {
            "src": "/images/guides/real-photos/chain-step-2.webp",
            "alt": "Purple hook drawing blue yarn through the existing loop at the end of a crochet chain.",
            "caption": "2. Pull through: guide the caught strand through the existing loop to make the next chain.",
            "width": 1500,
            "height": 1125,
            "credit": {
              "name": "Stilfehler",
              "url": "https://commons.wikimedia.org/wiki/File:Crochet_Chain_Stitch_(Step_2).jpg",
              "license": "CC BY-SA 4.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
              "changes": "Resized and converted to WebP; no changes to the yarn or hook."
            }
          },
          {
            "src": "/images/guides/real-photos/chain-result.webp",
            "alt": "A real blue crochet chain laid on wood, showing its completed V-shaped links and an open live loop.",
            "caption": "3. Inspect the chain: count completed links, excluding the open live loop. This photograph is not an eleven-chain counting example.",
            "width": 1500,
            "height": 1125,
            "credit": {
              "name": "Stilfehler",
              "url": "https://commons.wikimedia.org/wiki/File:Crochet_Chain_Stitch.jpg",
              "license": "CC BY-SA 4.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
              "changes": "Resized and converted to WebP; no changes to the yarn or hook."
            }
          }
        ]
      },
      {
        "heading": "5. Work your first row of single crochet",
        "text": "Before starting, count 11 completed chains. The live loop on your hook is not a chain. Starting at the hook end, identify the first completed V and then the second: the second chain is where the first single crochet goes. Leave the first chain unworked.\n\n1. For this first-row exercise, insert the hook under the top strand of the second chain. Do not yarn over before inserting the hook. Keep the live loop on the hook as you enter the chain.\n\n2. Yarn over and draw the caught yarn back through the chain opening. Pause here: there should be two loops on the hook. Drawing up this loop has not yet completed the stitch.\n\n3. Yarn over once more and draw the caught strand through both loops on the hook. One single crochet is complete. You should have one live loop left, ready for the next stitch.\n\n4. Work one single crochet in each remaining chain, using the same top-strand entry each time. Do not work into the slip knot. Eleven starting chains, with the chain nearest the hook skipped, give ten insertion points and ten single crochet stitches.\n\n5. Count the top Vs of your finished stitches, not the side posts or the live loop. Each V is one stitch. Check the ten-stitch total before turning, then put removable markers through the top loops of the first and last stitches. If the total differs, find the missed chain or extra insertion now instead of compensating in the next row.\n\nPhoto demonstration: the four close-ups below show the single crochet movement in a yellow row on an existing blue swatch. They are not photographs of the first row in a foundation chain and do not show our exact ten-stitch exercise. The hook goes under both top loops of a blue stitch in these photos; for your foundation row, use the chain entry described above. You can keep using one colour for your own practice.\n\nIf the yarn splits, back out of that insertion and try again without catching only some of its fibres. If you finish a stitch and still have two loops on the hook, check whether you stopped after drawing up the loop. Keep the chain near your guiding fingers so it does not twist while you find the next entry point.",
        "images": [
          {
            "src": "/images/guides/real-photos/single-step-1.webp",
            "alt": "A purple hook inserted under the top loops of a blue stitch, with yellow working yarn over its groove.",
            "caption": "1. Insert the hook under both top loops of the next blue stitch. The yellow working yarn is caught for the first pull-through.",
            "width": 1500,
            "height": 1125,
            "credit": {
              "name": "Stilfehler",
              "url": "https://commons.wikimedia.org/wiki/File:Crochet_Single_Stitch_(Step_1).jpg",
              "license": "CC BY-SA 4.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
              "changes": "Resized and converted to WebP; yarn and hook positions are unchanged."
            }
          },
          {
            "src": "/images/guides/real-photos/single-step-2.webp",
            "alt": "Two yellow loops on a purple hook after yarn has been drawn through a blue crochet stitch.",
            "caption": "2. Draw the yellow yarn through the blue stitch. Two yellow loops are on the hook; the single crochet is not finished yet.",
            "width": 1500,
            "height": 1125,
            "credit": {
              "name": "Stilfehler",
              "url": "https://commons.wikimedia.org/wiki/File:Crochet_Single_Stitch_(Step_2).jpg",
              "license": "CC BY-SA 4.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
              "changes": "Resized and converted to WebP; yarn and hook positions are unchanged."
            }
          },
          {
            "src": "/images/guides/real-photos/single-step-3.webp",
            "alt": "Yellow yarn caught by a purple hook in front of two yellow loops on its shaft.",
            "caption": "3. Yarn over again, keeping the two loops on the shaft ready for the final pull-through.",
            "width": 1500,
            "height": 1125,
            "credit": {
              "name": "Stilfehler",
              "url": "https://commons.wikimedia.org/wiki/File:Crochet_Single_Stitch_(Step_3).jpg",
              "license": "CC BY-SA 4.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
              "changes": "Resized and converted to WebP; yarn and hook positions are unchanged."
            }
          },
          {
            "src": "/images/guides/real-photos/single-step-4.webp",
            "alt": "A completed yellow single crochet at the edge of a yellow row, with one live loop on the hook.",
            "caption": "4. Draw through both loops to finish the single crochet. One live loop remains on the hook.",
            "width": 1500,
            "height": 1125,
            "credit": {
              "name": "Stilfehler",
              "url": "https://commons.wikimedia.org/wiki/File:Crochet_Single_Stitch_(Step_4).jpg",
              "license": "CC BY-SA 4.0",
              "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
              "changes": "Resized and converted to WebP; yarn and hook positions are unchanged."
            }
          }
        ]
      },
      {
        "heading": "6. Turn and make the next row",
        "text": "First check that row one contains ten single crochet stitches. Keep the hook inside the live loop. Yarn over and pull through that loop once to make chain one, then turn the fabric like a page so you can work back across the row. Keep the yarn free to feed rather than winding it tightly around the hook as you turn.\n\nIn this exercise, chain one provides height and does not count as a stitch. The first single crochet therefore goes in the first completed stitch directly below the turning chain, not in the next one. Find the marked stitch before inserting the hook. The marked stitch was the last stitch you made in the previous row and is now the first one you work into.\n\nInsert the hook under both loops of that stitch’s top V. Yarn over, draw up a loop, then yarn over and draw through both loops. Put a marker in the new stitch once it is complete. Use the four movement photos in the previous section to check the two-loop checkpoint and the final pull-through.\n\nContinue with one single crochet under both top loops of every stitch across. Work into the marked last stitch, then move that marker into the new last stitch. Do not add a stitch in the turning chain.\n\nCount ten top Vs again, excluding the live loop and the turning chain. Nine stitches often means an edge stitch was missed; eleven may mean the turning chain was counted or an entry was used twice. Inspect the edges before beginning another row.\n\nThe photograph below shows a real single crochet swatch at its edge with the hook and a short turning chain visible. It is an edge reference, not a sequence showing the physical turn and not a sample made from our ten-stitch exercise. Your practice can remain the same colour throughout. Other patterns may count turning chains differently, so follow their own notes when you move on from this exercise.",
        "image": {
          "src": "/images/guides/real-photos/single-turning.webp",
          "alt": "A cream single crochet swatch with a purple hook at its upper-left edge and a short turning chain beside the live loop.",
          "caption": "Row-edge reference: keep the live loop on the hook as you prepare to work back across the swatch. In our exercise, chain one is not counted. The first actual stitch goes under both loops of the first stitch.",
          "width": 1500,
          "height": 1090,
          "credit": {
            "name": "Durova",
            "url": "https://commons.wikimedia.org/wiki/File:Singleturning.jpg",
            "license": "CC BY-SA 4.0",
            "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
            "changes": "Resized and converted to WebP; yarn and hook positions are unchanged."
          }
        }
      },
      {
        "heading": "7. Make your first practice rectangle",
        "text": "Here is the exercise written in compact pattern form. Foundation: ch 11. Row 1: sc in the second ch from the hook and in each remaining ch; 10 sc. Rows 2–10: ch 1, turn, sc in each of the 10 stitches; 10 sc in every row. The ch 1 never counts as a stitch in this exercise.\n\nContinue until you have 10 completed rows, counting stitches after each row. Use your notes to track rows instead of relying on memory. There is no required gauge or finished size for this learning swatch. Your yarn, hook, and tension will affect its dimensions.\n\nLay the rectangle flat occasionally. Notice the edges and the spaces between stitches without stretching it. An uneven piece is still useful: it helps you see where your grip or stitch count changed.\n\nCheck the count before recording a row as complete. If you find nine or eleven stitches, investigate that row now rather than planning to compensate in the next one. Adding a stitch later may restore the total while leaving the edge change in the fabric. The exercise is about understanding where each stitch belongs.",
        "image": {
          "src": "/images/guides/how-to-crochet-for-beginners/step-08.svg",
          "alt": "Three schematic rows of ten V-shaped stitch tops. First and last columns are marked.",
          "caption": "Schematic stitch tops, not a view of the full fabric. In this single crochet sample, mark the first and last stitches and keep ten stitches per row; the turning chain is excluded."
        }
      },
      {
        "heading": "8. Fasten off and weave in the ends",
        "text": "After completing the last stitch, cut the working yarn, leaving a tail of around 15 cm (6 inches). Draw the cut end completely through the live loop on the hook and gently snug it down to secure the final stitch.\n\nThread a tail into the yarn needle. Pass it through several stitches within the fabric, then change direction and pass through neighbouring stitches to help hold it in place. Keep the fabric flat rather than pulling it into a pucker. Repeat for the starting tail. Trim excess only after checking that both ends are secure.\n\nKeep this first swatch and note the yarn and hook you used. A later swatch made with the same materials gives you a useful comparison of your progress.",
        "image": {
          "src": "/images/guides/how-to-crochet-for-beginners/step-09.svg",
          "alt": "8. Fasten off and weave in the ends: Cut an adequate tail; Draw through final loop; Weave into the fabric.",
          "caption": "Learning notes: Cut an adequate tail → Draw through final loop → Weave into the fabric. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Troubleshooting: tight stitches and uneven edges",
        "text": "If your hook struggles to enter a chain or stitch, try relaxing the hand guiding the yarn. Let each new loop reach the straight shaft of the hook before tightening it. Starting chains can be particularly tight; practise a looser chain before restarting the rectangle.\n\nIf the rectangle becomes narrower, check whether you missed the last stitch or skipped the first stitch after turning. If it becomes wider, check whether you worked twice into one stitch or added a stitch into the turning chain. Use the markers and count back to the last row with 10 stitches.\n\nTo undo a mistake, remove the hook and gently pull the working yarn to unravel stitches until you reach the point you want to redo. Put the hook back into the remaining live loop without twisting it, then continue. Correcting a row is part of learning.",
        "image": {
          "src": "/images/guides/how-to-crochet-for-beginners/step-10.svg",
          "alt": "Troubleshooting: tight stitches and uneven edges: Find the first stitch; Check the last stitch; Recount before continuing.",
          "caption": "Learning notes: Find the first stitch → Check the last stitch → Recount before continuing. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Learn to read the fabric, not just the instructions",
        "text": "Hold the swatch so you can see its top edge. The live loop sits on the hook; the completed stitches form a line of Vs below it. Distinguish those two things before counting. Follow each V along the row and avoid counting the turning chain as a stitch in this exercise.\n\nThe two strands of a top V are the front and back loops when viewed in the current working position. In the rows after the foundation, this guide asks you to insert under both. Working under only one changes the surface of the fabric and is a separate technique to explore later.\n\nMarkers are useful because edge stitches can look different from stitches in the middle. Place them in the completed first and last stitches, and move them after each row. Do not rely only on the appearance of a straight edge to decide whether the count is correct.",
        "image": {
          "src": "/images/guides/how-to-crochet-for-beginners/step-11.svg",
          "alt": "Three schematic rows of ten V-shaped stitch tops. First and last columns are marked.",
          "caption": "Schematic stitch tops, not a view of the full fabric. In this single crochet sample, mark the first and last stitches and keep ten stitches per row; the turning chain is excluded."
        }
      },
      {
        "heading": "Build steadier tension without forcing the yarn",
        "text": "Tension describes how you control the yarn as it moves into stitches. Think about making the same movement repeatedly rather than pulling every loop as tight as possible. A loop should move along the hook shaft without needing a strong tug.\n\nCheck whether the ball is catching on the table or whether your guiding hand is holding the strand too firmly. Free the yarn before changing your hook. If you keep pulling yarn from a tangled ball, the resistance may vary even when your hand movement stays the same.\n\nCompare the start and end of your swatch. Small variations are useful evidence of practice. For a later project with required dimensions, make and measure a gauge sample in its specified stitch pattern. This first rectangle has no target size, so focus on readable stitches and a steady count.",
        "image": {
          "src": "/images/guides/how-to-crochet-for-beginners/step-12.svg",
          "alt": "Build steadier tension without forcing the yarn: Let yarn feed freely; Relax your fingers; Pause when uncomfortable.",
          "caption": "Learning notes: Let yarn feed freely → Relax your fingers → Pause when uncomfortable. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Learn the next stitches one at a time",
        "text": "Once single crochet feels familiar, make a separate sample when learning another stitch. In US terminology, half double crochet and double crochet use different yarn-over and pull-through sequences from single crochet. Read or watch the complete movement before putting it into a project.\n\nA slip stitch is another useful technique, often used for joining or moving to a position as a pattern directs. Its role depends on the instructions; do not add it automatically at the end of a row in this exercise.\n\nWrite the terminology beside each sample. A stitch called double crochet in a UK tutorial is not the same movement as US double crochet. Keeping names and reference sources together prevents confusion when you move between creators.",
        "image": {
          "src": "/images/guides/how-to-crochet-for-beginners/step-13.svg",
          "alt": "Learn the next stitches one at a time: Practise sc first; Then explore hdc; Then explore dc.",
          "caption": "Learning notes: Practise sc first → Then explore hdc → Then explore dc. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "A practice routine for your next few sessions",
        "text": "In one session, practise making and counting a chain, then undo it and repeat. In another, work the first two rows and check the first and last stitches. In the next, complete the rectangle and practise securing the ends. These are suggested stages, not deadlines.\n\nBefore starting each session, recall the last action you completed. Read your note, identify the live loop, and count the most recent finished row. This short check prevents a break from becoming a source of uncertainty.\n\nWhen you finish, choose the movement that needs more practice. If the chain remains tight, repeat a chain exercise. If edges change shape, practise turning and locating edge stitches. Focused repetition gives you a clearer next step than restarting a whole lesson without knowing what you want to improve.",
        "image": {
          "src": "/images/guides/how-to-crochet-for-beginners/step-14.svg",
          "alt": "A practice routine for your next few sessions: Practise chains; Make short rows; Finish one small sample.",
          "caption": "Learning notes: Practise chains → Make short rows → Finish one small sample. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Your final checklist before trying a pattern",
        "text": "Before choosing a pattern, check whether you can find the first and last stitches, count ten stitches across your sample, and undo a short section when the count is wrong. If one of those steps still feels uncertain, practise that part of the rectangle again.\n\nRead the next pattern’s materials, terminology, construction, and finishing notes. Review its unfamiliar techniques before starting the main piece. If dimensions matter, make the gauge sample it asks for; this learning rectangle has no target size.\n\nKeep the first rectangle and label the hook and yarn. When you make another, compare the edges and stitch sizes. That gives you a useful record of what changed without needing the first attempt to look perfect.",
        "image": {
          "src": "/images/guides/how-to-crochet-for-beginners/step-15.svg",
          "alt": "Your final checklist before trying a pattern: Read terminology; Check supplies; Understand finishing.",
          "caption": "Learning notes: Read terminology → Check supplies → Understand finishing. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      }
    ],
    "faqs": [
      {
        "question": "Can I learn crochet with my left hand?",
        "answer": "Yes. Hold the hook in the hand that feels natural and use left-handed demonstrations when the direction is difficult to follow. The stitch count and US stitch names remain the same for this practice exercise."
      },
      {
        "question": "How long does it take to learn?",
        "answer": "There is no fixed schedule. Separate the movements into short sessions and judge progress by whether you can identify stitches and repeat the steps comfortably, rather than by a completion time."
      },
      {
        "question": "Why does my chain feel tighter than the rows?",
        "answer": "You may be tightening each new chain around the narrow part of the hook or gripping the yarn too firmly. Let the loop reach the shaft, loosen your grip, and practise a chain you can insert the hook into easily."
      },
      {
        "question": "Why does my rectangle get wider or narrower?",
        "answer": "Check whether you added stitches into the turning chain, worked twice into one stitch, skipped the first stitch, or missed the last stitch. This exercise should have ten single crochet stitches in every row."
      },
      {
        "question": "Do the slip knot and live loop count as stitches?",
        "answer": "They do not count as foundation chains in this tutorial. Count the completed V shapes in the chain, excluding the knot and the loop currently on the hook."
      },
      {
        "question": "Is the practice rectangle a coaster pattern?",
        "answer": "It is a learning swatch without a required size, gauge, or specified fibre. For a usable coaster, choose a pattern and materials suited to that purpose and follow its dimensions and care instructions."
      },
      {
        "question": "What should I learn after single crochet?",
        "answer": "Choose one new skill that supports the project you want to make, such as a different stitch or working in rounds. Make a small sample first and confirm whether the tutorial uses US or UK terms."
      }
    ],
    "references": [
      {
        "title": "Yarnspirations: basics of crochet for beginners",
        "url": "https://www.yarnspirations.com/pages/basics-of-crochet-for-beginners"
      },
      {
        "title": "Craft Yarn Council: crochet abbreviations",
        "url": "https://www.craftyarncouncil.com/standards/crochet-abbreviations"
      },
      {
        "title": "Postmodest — six photographs of tying a crochet slip knot (CC0)",
        "url": "https://commons.wikimedia.org/wiki/File:How_to_tie_a_crochet_slip_knot.jpg"
      }
    ]
  },
  {
    "slug": "essential-crochet-stitches",
    "title": "Essential Crochet Stitches: Chain, Single, Half Double and Double Crochet",
    "category": "Stitch techniques",
    "description": "Learn the core US crochet stitches, understand where to insert your hook, and compare the fabrics with small practice exercises.",
    "sections": [
      {
        "heading": "Learn the movements behind the stitch names",
        "text": "Chain, single crochet, half double crochet, and double crochet use a small set of repeated movements. What changes is when you yarn over and how many loops you pull through. Watching those loops is more helpful than rushing through a sequence from memory.\n\nThis guide uses US stitch names and includes separate ten-stitch practice foundations. Their turning chains do not count as stitches; that rule is stated again with the exercises. A different pattern may count them, so check its notes rather than carrying the practice rule into every project.",
        "image": {
          "src": "/images/guides/essential-crochet-stitches/step-01.svg",
          "alt": "Learn the movements behind the stitch names: Insertion point; Yarn over; Pull through loops.",
          "caption": "Learning notes: Insertion point → Yarn over → Pull through loops. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Prepare your yarn, hook and working position",
        "text": "Use a smooth yarn whose strands and loops are easy to see. Match the hook to the yarn label as a starting point. Keep a light grip on the handle and hold the work close enough to the hook that it does not stretch while you search for an insertion point.\n\nThe working yarn is the strand leading to the ball; the loose starting end is the tail. Make sure the ball can unwind freely. Before practising a new stitch, check that you can slide the live loop along the hook shaft without forcing it. If the yarn is catching or your hands are tired, reset your position before continuing.",
        "image": {
          "src": "/images/guides/essential-crochet-stitches/step-02.svg",
          "alt": "Prepare your yarn, hook and working position: Hook matches yarn; Yarn feeds freely; Stitches remain visible.",
          "caption": "Learning notes: Hook matches yarn → Yarn feeds freely → Stitches remain visible. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Chain stitch: build a readable foundation",
        "text": "Begin with a slip knot on the hook. Bring the working yarn over the hook from back to front, catch it in the groove, and draw it through the existing loop. One chain is complete and one live loop remains. Repeat to make a short chain, adjusting your guiding fingers as the chain grows.\n\nLook for the V shapes made by the completed chains. The slip knot and live loop are not part of that chain count. Keep the foundation loose enough to insert the hook again. For a first exercise, make 11 chains, count them, undo them, and repeat until you can identify each V. This is a movement exercise, not a sized pattern.",
        "image": {
          "src": "/images/guides/essential-crochet-stitches/step-03.svg",
          "alt": "Chain stitch: build a readable foundation: One live loop; Yarn over; Pull through: one loop.",
          "caption": "Learning notes: One live loop → Yarn over → Pull through: one loop. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Single crochet: practise a complete stitch",
        "text": "With one live loop on the hook, insert it into the location specified by your pattern. Yarn over and draw up a loop so that two loops are on the hook. Yarn over again and draw through both. You now have one completed US single crochet and one live loop.\n\nIf you are practising with the 11-chain foundation, insert into the second chain away from the hook and work one single crochet into each remaining chain. You will have ten stitches. For this exercise, use the top strand of each foundation chain consistently. On later rows, work under both top loops unless the instructions say otherwise. Count the completed top Vs, not the loop currently on the hook.",
        "image": {
          "src": "/images/guides/essential-crochet-stitches/step-04.svg",
          "alt": "Single crochet: two loops before finishing. Draw up a loop → yarn over through both",
          "caption": "Loop-count schematic. It shows a checkpoint on the hook, rather than the full sequence or a photograph of hand movements."
        }
      },
      {
        "heading": "Half double crochet: watch the three loops",
        "text": "US half double crochet begins with a yarn over before insertion. Yarn over, insert into the specified location, yarn over again, and draw up a loop. There are now three loops on the hook. Yarn over and draw through all three to finish the stitch.\n\nPractise the movement slowly on a separate prepared sample. Notice the initial yarn over: missing it changes the stitch sequence. If the hook catches halfway through the three-loop pull-through, loosen the loops and slightly rotate the hook rather than tugging harder.\n\nFor an original ten-stitch practice foundation, chain 12 and work half double crochet into the third chain from the hook and each chain after it. The two skipped chains provide height and do not count as a stitch in this exercise. Count ten completed stitches.",
        "image": {
          "src": "/images/guides/essential-crochet-stitches/step-05.svg",
          "alt": "Half double crochet: three loops before finishing. Yarn over, insert, draw up → pull through all three",
          "caption": "Loop-count schematic. It shows a checkpoint on the hook, rather than the full sequence or a photograph of hand movements."
        }
      },
      {
        "heading": "Double crochet: two pull-through stages",
        "text": "To make a US double crochet, yarn over and insert into the specified location. Yarn over and draw up a loop; three loops are on the hook. Yarn over and draw through two loops, leaving two. Yarn over once more and draw through the remaining two. The stitch is complete with one live loop left.\n\nThe pause between the two pull-throughs is useful when learning. If you draw through all three loops in one action, you have changed the sequence. Check the loops before the final yarn over instead of trying to infer the result only from the fabric.\n\nFor a ten-stitch practice foundation, chain 13, then double crochet into the fourth chain from the hook and each remaining chain. Here the three skipped chains do not count as a stitch. Other patterns often treat these chains differently, so carry this rule only into this exercise.",
        "image": {
          "src": "/images/guides/essential-crochet-stitches/step-06.svg",
          "alt": "Double crochet: three loops after drawing up. Draw up → pull through two → pull through two",
          "caption": "Loop-count schematic. It shows a checkpoint on the hook, rather than the full sequence or a photograph of hand movements."
        }
      },
      {
        "heading": "Slip stitch: join or move as instructed",
        "text": "For a slip stitch, insert into the stated location, yarn over, and draw the yarn through the work and the live loop already on the hook. This is a different movement from drawing up a loop and then completing a single crochet. Work it gently so the finished loop remains readable.\n\nPatterns may use slip stitches to join a round, move to a starting point, or form a surface detail. Its purpose depends on the instructions. Do not add one automatically at the end of a row. If a join is required, locate the exact stitch identified by the pattern and check whether the join belongs in the count. A marker can help you recognise that location before the round becomes crowded.",
        "image": {
          "src": "/images/guides/essential-crochet-stitches/step-07.svg",
          "alt": "Slip stitch: finish with one live loop. Draw through the stitch and live loop in one movement",
          "caption": "Loop-count schematic. It shows a checkpoint on the hook, rather than the full sequence or a photograph of hand movements."
        }
      },
      {
        "heading": "Turning chains and stitch placement",
        "text": "Changing stitch height changes how a new row needs to begin. The chain or other starting method gives the work enough height, while the pattern determines whether it counts as a stitch and where the first worked stitch goes. There is no one turning-chain rule you can safely apply to every pattern.\n\nFor the practice samples here, use ch 1 for single crochet, ch 2 for half double crochet, and ch 3 for double crochet before turning. These turning chains do not count as stitches in these exercises. Work into the first completed stitch and each stitch across, and do not add a stitch into the turning chain. Count ten stitches and mark the edges. Follow a different pattern’s own notes when you leave these samples.",
        "image": {
          "src": "/images/guides/essential-crochet-stitches/step-08.svg",
          "alt": "Three schematic rows of ten V-shaped stitch tops. First and last columns are marked.",
          "caption": "Schematic stitch tops, not a view of the full fabric. In this single crochet sample, mark the first and last stitches and keep ten stitches per row; the turning chain is excluded."
        }
      },
      {
        "heading": "Compare three small fabrics",
        "text": "Make separate ten-stitch samples in single crochet, half double crochet, and double crochet using the same yarn and hook. Work a few rows in each and label them with the stitch name and the turning-chain rule you used. No particular dimensions are required.\n\nLay them side by side without stretching. Notice the stitch height, the gaps, the flexibility, and how clearly you can see the top loops. A fabric’s behaviour also depends on your yarn and tension, so this comparison describes your samples rather than promising the same result with every material.\n\nKeep the samples as references. When you encounter a stitch name in a future pattern, the labelled fabric can remind you of its structure and the movement you practised.",
        "image": {
          "src": "/images/guides/essential-crochet-stitches/step-09.svg",
          "alt": "Compare three small fabrics: Same yarn; Separate stitch samples; Compare height and feel.",
          "caption": "Learning notes: Same yarn → Separate stitch samples → Compare height and feel. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Find errors before they become several rows",
        "text": "A changing stitch count often begins at an edge. Check whether you skipped the first stitch, missed the last, worked twice into one location, or added a stitch into a turning chain that does not count. Marking the first and last completed stitches makes these checks easier.\n\nIf a stitch looks different but the count is correct, replay its movements. Did you include the starting yarn over? Did you pull through the stated number of loops? Did you insert under both top loops where required? Undo a short section when needed, place the hook back into the remaining live loop, and repeat. Learning to identify a mistake is useful progress, even when the row needs to be remade.\n\nPause at the loop checkpoints.\n\nWhen a new stitch feels confusing, stop before each pull-through and count the loops on your hook. For US single crochet, drawing up a loop gives you two loops before the final yarn-over and pull-through. For US half double crochet, the initial yarn-over means there are three loops after drawing up a loop.\n\nFor US double crochet, finish in two stages: pull through two loops, then yarn over and pull through the remaining two. Practise each stitch separately so you can recognise its rhythm. The diagrams in this guide show those checkpoints; they do not replace the insertion and yarn-handling instructions.",
        "image": {
          "src": "/images/guides/essential-crochet-stitches/step-10.svg",
          "alt": "Three schematic rows of ten V-shaped stitch tops. First and last columns are marked.",
          "caption": "Schematic stitch tops, not a view of the full fabric. In this single crochet sample, mark the first and last stitches and keep ten stitches per row; the turning chain is excluded."
        }
      }
    ],
    "faqs": [
      {
        "question": "Are US and UK stitch names interchangeable?",
        "answer": "No. A US single crochet is a UK double crochet; a US half double crochet is a UK half treble; a US double crochet is a UK treble. Confirm the terminology before following the movements."
      },
      {
        "question": "Which stitch should I learn first?",
        "answer": "Practise the chain, then single crochet and turning on a small rectangle. Move to another stitch once you can identify the top loops and keep the count steady."
      },
      {
        "question": "Do I always insert under both loops?",
        "answer": "For many plain rows, yes, but the pattern may specify one loop, a chain space, or another location. Follow the stated placement."
      },
      {
        "question": "Why are my edges uneven?",
        "answer": "Check stitch counts and how the row starts and ends. Uneven tension can affect appearance too, but first rule out a missed or extra edge stitch."
      },
      {
        "question": "Do these samples need to match gauge?",
        "answer": "No. They are technique comparisons without a required size. A project with target dimensions needs its own gauge instructions."
      }
    ],
    "references": [
      {
        "title": "Craft Yarn Council: crochet abbreviations",
        "url": "https://www.craftyarncouncil.com/standards/crochet-abbreviations"
      },
      {
        "title": "Yarnspirations: crochet basics and demonstrations",
        "url": "https://www.yarnspirations.com/pages/basics-of-crochet-for-beginners"
      }
    ]
  },
  {
    "slug": "crochet-tension-and-gauge",
    "title": "Crochet Tension and Gauge: Make More Consistent Stitches",
    "category": "Technique & troubleshooting",
    "description": "Understand tension, measure a gauge swatch, adjust your hook thoughtfully, and diagnose tight stitches or changing project dimensions.",
    "sections": [
      {
        "heading": "Why the same pattern can produce a different size",
        "text": "You can use the yarn and hook named in a pattern and still make a piece that is too narrow or too wide. The missing check is gauge: how many stitches and rows your fabric contains over the pattern’s measuring span.\n\nTension is the way you guide the yarn and form loops. Gauge is the measurement of the resulting fabric. This guide separates the two, shows how to compare a sample with the pattern, and gives you a routine for adjusting one thing at a time. The stitch names are US.",
        "image": {
          "src": "/images/guides/crochet-tension-and-gauge/step-01.svg",
          "alt": "Why the same pattern can produce a different size: Same stitch count; Different gauge; Different finished width.",
          "caption": "Learning notes: Same stitch count → Different gauge → Different finished width. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Remove changing resistance from the yarn supply",
        "text": "Before changing your technique, watch how the yarn reaches your hand. A ball rolling against furniture, a strand trapped under the work, or a tangle can make the resistance vary from one stitch to the next. Free the strand and place the yarn where it unwinds comfortably.\n\nKeep enough space for the fabric to rest without dragging heavily from the hook. If you work in short sessions, begin each one by checking the ball and the live loop. A consistent setup makes it easier to notice a change in your hand movements because fewer other things are changing at the same time.",
        "image": {
          "src": "/images/guides/crochet-tension-and-gauge/step-02.svg",
          "alt": "Remove changing resistance from the yarn supply: Free yarn supply; No snagging; Steady feeding.",
          "caption": "Learning notes: Free yarn supply → No snagging → Steady feeding. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Find a grip you can repeat comfortably",
        "text": "Try guiding the yarn over your fingers with light resistance rather than wrapping it tightly simply to keep control. Hold the fabric close to the working stitch and move that hold as the row grows. The hook should rotate and slide without a hard squeeze.\n\nLet new loops reach the straight shaft of the hook before snugging them. Tightening around a narrower part can create a loop that is difficult to work into later. If a pull-through feels forced, pause and loosen your hold.\n\nTake breaks when your hands become tired. Trying to maintain a particular fabric by gripping harder throughout a long session can make the movements less repeatable. Comfort and clear checkpoints are more useful than forcing every stitch into the same appearance.",
        "image": {
          "src": "/images/guides/crochet-tension-and-gauge/step-03.svg",
          "alt": "Find a grip you can repeat comfortably: Relaxed grip; Repeatable movement; Comfortable shoulders.",
          "caption": "Learning notes: Relaxed grip → Repeatable movement → Comfortable shoulders. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Choose the right sample for the project",
        "text": "Read the pattern’s gauge statement before making the sample. Note the yarn, hook, stitch pattern, measurement, and whether the sample is worked in rows or rounds. If the project gives a particular swatch method, follow it rather than substituting a convenient stitch you already know.\n\nMake enough fabric to measure the required area away from distorted edges, as the instructions allow. A sample only as wide as the measuring span can make the edge stitches disproportionately important. Leave room around the central area you intend to count.\n\nKeep a note of the yarn and hook size in millimetres. If you compare several attempts, label them before you forget which hook made which fabric. Do not assume you will remember after washing or drying the samples.",
        "image": {
          "src": "/images/guides/crochet-tension-and-gauge/step-04.svg",
          "alt": "Choose the right sample for the project: Match stitch pattern; Match rows or rounds; Measure away from edges.",
          "caption": "Learning notes: Match stitch pattern → Match rows or rounds → Measure away from edges. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Prepare the swatch as the pattern directs",
        "text": "Measure the fabric in the condition specified by the pattern. If the directions call for washing or blocking before measurement, do that using the yarn’s care instructions and allow the sample to dry fully. Do not measure while pulling it into the desired width.\n\nLay it on a flat surface and let it rest in its natural shape. A curled edge or an uneven starting row can make measurement awkward; use the intended central area rather than stretching the entire sample.\n\nRecord how you treated the swatch. A future sample is only a useful comparison if it has been prepared consistently. When instructions do not explain the measurement condition, seek clarification, especially for a project where a small difference affects fit.",
        "image": {
          "src": "/images/guides/crochet-tension-and-gauge/step-05.svg",
          "alt": "Prepare the swatch as the pattern directs: Follow care label; Prepare as instructed; Measure when dry.",
          "caption": "Learning notes: Follow care label → Prepare as instructed → Measure when dry. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Measure stitch gauge and row gauge separately",
        "text": "Place a ruler or tape across the required span and count the stitches within it. Then measure in the other direction and count the rows. Keep the tool straight and read the measurement in the units stated by the pattern. Include partial stitches or rows where the edges of the measuring span cut through them.\n\nCheck in more than one central position if the sample is visibly uneven. If the results differ, you may need more practice or a larger sample before making a reliable decision. Averaging a strongly distorted area with a neat area can hide the problem rather than explain it.\n\nWrite down both counts. Matching the stitch gauge while ignoring the row gauge may produce a piece with the right width but an unexpected length.",
        "image": {
          "src": "/images/guides/crochet-tension-and-gauge/step-06.svg",
          "alt": "Schematic fabric with a horizontal ruler for stitches and vertical ruler for rows, both placed away from edges.",
          "caption": "Gauge schematic: count stitches across and rows vertically over recorded spans. The drawn grid is illustrative and does not specify a target gauge."
        }
      },
      {
        "heading": "Worked example: what a different count means",
        "text": "Imagine a pattern asking for 20 stitches across 10 cm, while your sample has 22 stitches across 10 cm. Your stitches are smaller across that distance. A section made from 40 stitches at your measured gauge would be about 18.2 cm wide rather than the intended 20 cm, assuming the fabric behaves consistently.\n\nIf instead you count 18 stitches across 10 cm, each stitch is wider. Forty stitches would span about 22.2 cm. These figures are arithmetic illustrations, not finished-item guarantees; shaping, preparation, and the stitch pattern also matter.\n\nUse the comparison to decide what to try next, then make and measure another sample. Do not rely on a calculation alone to skip the new swatch.",
        "image": {
          "src": "/images/guides/crochet-tension-and-gauge/step-07.svg",
          "alt": "Worked example: what a different count means: 16 sts / 10 cm; 40 stitches; About 25 cm width.",
          "caption": "Learning notes: 16 sts / 10 cm → 40 stitches → About 25 cm width. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Adjust one variable and recheck the fabric",
        "text": "When you have more stitches than required over the measuring span, trying a larger hook may help make larger stitches. When you have fewer, trying a smaller hook may help. This is a starting experiment, not a promise that one hook change will solve every dimension.\n\nKeep the yarn and stitch pattern the same for that comparison. Measure the new sample in the same condition and check both stitch and row counts. Also look at the fabric: is it still suitable for the intended item, or has it become too open or too stiff for that purpose?\n\nIf width matches but height does not, examine how you draw up loops and complete the stitch. Ask for pattern-specific guidance before changing row counts in a shaped or fitted project.",
        "image": {
          "src": "/images/guides/crochet-tension-and-gauge/step-08.svg",
          "alt": "Adjust one variable and recheck the fabric: Change one variable; Make another sample; Measure again.",
          "caption": "Learning notes: Change one variable → Make another sample → Measure again. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Diagnose a tight foundation or changing width",
        "text": "A foundation chain that is tighter than the rows can draw the bottom edge inward. Practise making chains that slide onto the hook shaft rather than pulling each one tight. Some patterns suggest a different hook for the foundation; use that approach only with an understanding of how it affects the sample.\n\nIf the piece gets narrower or wider as you add rows, first check the count. Lost or extra stitches can look like a tension problem. Count top Vs, inspect the edges, and confirm the turning-chain rule before adjusting your grip or hook.\n\nIf the count remains correct, compare the early and late rows. Notice whether fatigue, a restricted yarn ball, or a change in posture coincides with the difference. That observation gives you something specific to change.",
        "image": {
          "src": "/images/guides/crochet-tension-and-gauge/step-09.svg",
          "alt": "Diagnose a tight foundation or changing width: Check foundation; Count each row; Compare widths.",
          "caption": "Learning notes: Check foundation → Count each row → Compare widths. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Build a small record of successful combinations",
        "text": "Keep a sample label with yarn details, hook size, stitch pattern, measurements, and preparation notes. For a project, record any approved changes you made and the pattern version you used. This creates a useful reference when you return to similar materials.\n\nEven if a combination worked before, recheck it for a new pattern. Your movements can change with practice, and a different construction may produce a different result. A familiar hook size is a convenient starting point, not proof of the right gauge.\n\nFor everyday practice, focus on readable loops and a steady count. For items with required dimensions, use the pattern’s checkpoints early enough to correct the work without undoing a large finished piece.\n\nA measurement exercise you can repeat.\n\nPlace a ruler on a flat, rested sample without stretching the fabric. Choose a central span and count the stitch tops across it. Record a partial stitch if the measured edge falls inside one. Then turn the ruler and count rows over a vertical span.\n\nRepeat the measurements in another part of the sample. If the results differ noticeably, check whether the fabric is flat or your tension changed during practice. Avoid choosing the measurement that happens to match the pattern. A consistent sample tells you more than a convenient number.",
        "image": {
          "src": "/images/guides/crochet-tension-and-gauge/step-10.svg",
          "alt": "Build a small record of successful combinations: Yarn identity; Hook and gauge; Care and fabric notes.",
          "caption": "Learning notes: Yarn identity → Hook and gauge → Care and fabric notes. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      }
    ],
    "faqs": [
      {
        "question": "Do I need a swatch for every project?",
        "answer": "Follow the pattern’s requirements. Gauge matters most when dimensions or fit matter. A learning exercise with no target size can focus on technique instead."
      },
      {
        "question": "Should I pull tighter to match gauge?",
        "answer": "Avoid forcing an uncomfortable grip. Try a suitable hook adjustment and make another sample, while checking that the resulting fabric still suits the project."
      },
      {
        "question": "Why does my gauge change after washing?",
        "answer": "The yarn and fabric can behave differently after the prescribed care process. Measure the sample in the condition requested by the pattern and use the same process for comparisons."
      },
      {
        "question": "Can I change the stitch count instead of the hook?",
        "answer": "That may alter repeats, shaping, and assembly. Only make that change when you understand the construction or the designer gives instructions for it."
      },
      {
        "question": "What if stitch gauge matches but row gauge does not?",
        "answer": "Recheck your measurements and stitch movements. For a fitted or shaped piece, seek pattern-specific advice rather than assuming extra or fewer rows will be harmless."
      }
    ],
    "references": [
      {
        "title": "Craft Yarn Council: crochet gauge guidance",
        "url": "https://www.craftyarncouncil.com/files/DiscoverPDFs/020_CGauge3.pdf"
      },
      {
        "title": "Craft Yarn Council: reading instructions and basics",
        "url": "https://craftyarncouncil.com/read_instructions.html"
      }
    ]
  },
  {
    "slug": "how-to-finish-crochet-projects",
    "title": "How to Finish Crochet Projects: Ends, Edges, Seams and Care",
    "category": "Finishing techniques",
    "description": "Learn to fasten off, weave in ends, prepare seams, check borders, and plan care so your crochet project is ready to use.",
    "sections": [
      {
        "heading": "Finish the project, not just the last row",
        "text": "The last row is done, but there may still be tails to secure, pieces to join, and an edge to tidy. Read those finishing instructions before cutting the yarn: the pattern may ask you to keep a long tail for sewing or continue directly into a border.\n\nFor a plain swatch, finishing may be as simple as fastening off and weaving in two ends. A bag or garment takes more planning. This guide covers the checks that help you choose a suitable method, with US stitch terminology and reminders to follow the actual yarn care instructions.",
        "image": {
          "src": "/images/guides/how-to-finish-crochet-projects/step-01.svg",
          "alt": "Finish the project, not just the last row: Inspect fabric; Secure and assemble; Save care information.",
          "caption": "Learning notes: Inspect fabric → Secure and assemble → Save care information. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Check the work before securing the final loop",
        "text": "Count the last row or round and compare it with the expected total. Look at the shape, inspect the edges, and confirm that any separate pieces are the required size. Correcting a mistake is usually simpler before the work is assembled.\n\nLay the fabric flat and check it in good light. If an edge has changed width, inspect the row starts and ends rather than assuming finishing will hide it. If the pieces will be joined, compare the edges that need to meet.\n\nKeep the pattern available through the last step. Finishing directions may tell you to leave a long tail for sewing, continue directly into a border, or keep the live loop for the next stage. Do not cut first and read those notes afterward.",
        "image": {
          "src": "/images/guides/how-to-finish-crochet-projects/step-02.svg",
          "alt": "Check the work before securing the final loop: Count last row; Check errors; Then secure the loop.",
          "caption": "Learning notes: Count last row → Check errors → Then secure the loop. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Fasten off when the pattern calls for it",
        "text": "When you are ready to end a section, cut the working yarn and leave enough tail for the required finishing task. For a small practice swatch, around 15 cm (6 inches) is a useful starting length for weaving, while sewing a long seam may require a different amount.\n\nDraw the cut end completely through the live loop on the hook and gently snug it down. The aim is to secure the stitch without pulling the corner into a pucker. Keep the tail until it has been woven or used as directed.\n\nSome patterns use a different finishing join, particularly where a round needs a tidy visual ending. Follow that method if it is specified. A standard fasten-off is a useful skill, but it is not a reason to replace a designer’s explained join.",
        "image": {
          "src": "/images/guides/how-to-finish-crochet-projects/step-03.svg",
          "alt": "Fasten off when the pattern calls for it: Leave a useful tail; Cut working yarn; Draw tail through loop.",
          "caption": "Learning notes: Leave a useful tail → Cut working yarn → Draw tail through loop. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Choose where a yarn end can be hidden",
        "text": "Thread the tail into a yarn needle suited to the strand and fabric. Look for a path through the structure of neighbouring stitches where the strand can sit securely without showing on the front. Dense and open fabrics may need different paths.\n\nPass through several stitches, change direction, and continue through nearby fabric without dragging it out of shape. Avoid relying on one short straight pass as your only finishing action. Before trimming, let the piece relax and gently check whether the end remains secure.\n\nMatch the route to the colour area when possible. A dark tail worked through a light, open section may show even when it is technically secured. Test a discreet path on the sample if you are unsure.",
        "image": {
          "src": "/images/guides/how-to-finish-crochet-projects/step-04.svg",
          "alt": "Choose where a yarn end can be hidden: Follow fabric structure; Keep fabric relaxed; Hide without puckering.",
          "caption": "Learning notes: Follow fabric structure → Keep fabric relaxed → Hide without puckering. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Treat yarn joins and colour-change tails individually",
        "text": "Every place you started or changed yarn leaves a finishing decision. Locate those tails before you assemble the piece, because some become harder to reach after a seam or border is added. Keep them long enough to work with.\n\nDo not assume a tail is finished merely because it was crocheted over for a few stitches. Check whether the fibre, stitch structure, and intended use make that secure enough, and follow any additional weaving instructions.\n\nFor colour changes, keep the tail within an appropriate colour area where possible. Work slowly around open spaces so the end does not create an unintended line across the fabric. Count the ends you expected from the project stages, then inspect the work for any you missed.",
        "image": {
          "src": "/images/guides/how-to-finish-crochet-projects/step-05.svg",
          "alt": "Treat yarn joins and colour-change tails individually: Identify each tail; Secure individually; Inspect both sides.",
          "caption": "Learning notes: Identify each tail → Secure individually → Inspect both sides. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Prepare pieces before sewing a seam",
        "text": "Check orientation first: which side faces out, which edges meet, and whether there are marked attachment points. Lay the pieces together and use removable markers to hold the planned alignment. This lets you inspect the arrangement before sewing.\n\nIf the pattern requires pieces to be prepared or blocked before joining, do that first and let them dry. Do not try to force mismatched dimensions into alignment with tight sewing. Recheck the measurements and construction when the pieces do not fit together as expected.\n\nKeep a record of any labels you add. Two similar pieces can still have different top edges, shaping, or directions of work. A short note such as “left panel, top marked” can prevent assembly confusion after a break.",
        "image": {
          "src": "/images/guides/how-to-finish-crochet-projects/step-06.svg",
          "alt": "Prepare pieces before sewing a seam: Match piece sizes; Align reference points; Mark before joining.",
          "caption": "Learning notes: Match piece sizes → Align reference points → Mark before joining. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Sew the seam the pattern actually needs",
        "text": "A seam can be decorative, discreet, firm, or flexible depending on the project. Use the method and yarn recommended by the pattern. If no method is given, test an appropriate join on two small samples before applying it to the finished pieces.\n\nFor a simple practice whipstitch, bring the yarn needle through corresponding edge points on the two samples repeatedly, keeping spacing and tension consistent. This demonstrates an over-the-edge join; it is not a universal replacement for mattress stitch or other construction methods.\n\nCheck the seam in small sections. Open the samples and notice whether the fabric puckers, gaps, or loses flexibility. Adjust before continuing. At the end, secure the sewing tail just as thoughtfully as the original crochet tails.",
        "image": {
          "src": "/images/guides/how-to-finish-crochet-projects/step-07.svg",
          "alt": "Sew the seam the pattern actually needs: Read seam method; Join evenly; Inspect inside and outside.",
          "caption": "Learning notes: Read seam method → Join evenly → Inspect inside and outside. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Check a border as you work it",
        "text": "Borders often involve working along a mix of stitch tops, row ends, and corners. The pattern should explain where to place stitches and how to treat the corners. Work slowly through the first side and check whether the fabric lies as intended.\n\nToo many border stitches can make an edge ripple; too few can pull it inward. These are clues to investigate, not a complete diagnosis, because stitch choice and tension affect the edge too. Confirm the placements and counts before changing hook size or improvising extra stitches.\n\nUse markers at important points if they help. When a border repeats around several sides, check each side before the full round is complete. A small correction is easier to make than repairing an entire decorative edge.",
        "image": {
          "src": "/images/guides/how-to-finish-crochet-projects/step-08.svg",
          "alt": "Check a border as you work it: Check corner directions; Watch for ripples; Adjust as pattern directs.",
          "caption": "Learning notes: Check corner directions → Watch for ripples → Adjust as pattern directs. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Plan washing and blocking for the actual fibre",
        "text": "Read the yarn label and the pattern’s preparation instructions. Keep the fibre content and care limits in view before choosing a washing or blocking method. Treat mixed materials and attached parts with equal attention; they may not all tolerate the same process.\n\nIf wet preparation is appropriate, follow the instructions and support the fabric so its shape is not distorted while wet. Lay it out and shape it gently as directed, then let it dry fully before checking dimensions or storing it. Test unfamiliar preparation on a swatch first.\n\nDo not assume direct heat or steam is suitable for every yarn. A treatment can change the fabric in a way you cannot reverse. Blocking also cannot reliably repair a fundamentally wrong stitch count or construction.",
        "image": {
          "src": "/images/guides/how-to-finish-crochet-projects/step-09.svg",
          "alt": "Plan washing and blocking for the actual fibre: Read fibre label; Use compatible care; Shape without forcing.",
          "caption": "Learning notes: Read fibre label → Use compatible care → Shape without forcing. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Do a final inspection and save care notes",
        "text": "Check the piece from both sides. Inspect corners, seams, attachment points, and every yarn tail. Look for stitches pulled out of shape during finishing. Compare dimensions with the pattern where required, and confirm that the piece behaves as intended.\n\nFor a gift, include the yarn’s care instructions and any relevant notes about attached parts. For your own use, keep the label and a short record with the project. Do not rely on remembering the fibre or wash setting several months later.\n\nTake a photo and note what you would change next time: a longer sewing tail, earlier markers, or a different finishing sequence. These details turn a completed project into useful experience for the next one.\n\nPractise finishing on spare fabric.\n\nBefore finishing an important project, use a small spare sample made with the same yarn. Thread its tail through a yarn needle and practise hiding it within the fabric structure without pulling the sample into a fold. Compare the front and back after each pass.\n\nGently move the sample as it would move during use and look for the tail becoming visible. The suitable route depends on the stitch and yarn; do not rely on a fixed number of passes for every material. Keep enough tail to work comfortably, and trim only after checking the result.",
        "image": {
          "src": "/images/guides/how-to-finish-crochet-projects/step-10.svg",
          "alt": "Do a final inspection and save care notes: Inspect ends and seams; Check attachments; Keep yarn care label.",
          "caption": "Learning notes: Inspect ends and seams → Check attachments → Keep yarn care label. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      }
    ],
    "faqs": [
      {
        "question": "Should I tie a knot and cut the ends short?",
        "answer": "A knot alone is not a universal substitute for weaving. Follow the pattern’s method and leave enough tail to secure it in the fabric before trimming."
      },
      {
        "question": "Can I use the starting tail to sew pieces together?",
        "answer": "Yes, if the pattern allows it and the tail is long enough for the seam and final securing. Plan that length before you start."
      },
      {
        "question": "Do all projects need blocking?",
        "answer": "No. Follow the pattern and fibre requirements. Some items benefit from preparation and shaping; others need only secure ends and appropriate care."
      },
      {
        "question": "Why does my seam pucker?",
        "answer": "Check alignment, spacing, and sewing tension. A seam pulled too tight can distort matching pieces; mismatched dimensions require a construction check rather than tighter sewing."
      },
      {
        "question": "How do I know the ends are secure?",
        "answer": "Inspect the path, let the fabric relax, and gently check that the tail does not slip out. The right method depends on fibre, fabric structure, and use; test it on a sample when uncertain."
      }
    ],
    "references": [
      {
        "title": "Craft Yarn Council: yarn standards and guidelines",
        "url": "https://www.craftyarncouncil.com/standards/"
      },
      {
        "title": "Yarnspirations: beginner crochet techniques",
        "url": "https://www.yarnspirations.com/pages/basics-of-crochet-for-beginners"
      }
    ]
  },
  {
    "slug": "choosing-your-first-crochet-bag",
    "title": "Your First Crochet Bag: Yarn, Handles, Lining, and a Clear Plan",
    "category": "Bags & accessories",
    "description": "Plan your first crochet bag with practical guidance on yarn, construction, gauge, handles, lining, seams, and finishing before choosing a pattern.",
    "sections": [
      {
        "heading": "Start with what the bag needs to carry",
        "text": "A crochet bag is a good place to bring your skills together: an even fabric, tidy edges, strong joins, and a little planning. Before choosing a colour, think about what you want to put inside. A small pouch for a few essentials has different needs from a roomy tote.\n\nPlace those essentials together and measure the space they occupy. Remember that a bag needs an opening wide enough to reach inside, as well as room in its body. Decide whether you want short handles, a shoulder strap, or a removable strap. This guide helps you compare those choices; it is not a complete bag pattern. Use a pattern with confirmed stitch counts and construction instructions when you are ready to make the full project.",
        "image": {
          "src": "/images/guides/choosing-your-first-crochet-bag/step-01.svg",
          "alt": "Start with what the bag needs to carry: Choose contents; Measure needed space; Choose opening and handles.",
          "caption": "Learning notes: Choose contents → Measure needed space → Choose opening and handles. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Choose a construction you can understand",
        "text": "Look at the assembly instructions before committing to a design. Two flat panels joined along their sides and bottom can be easier to understand if you already work comfortably in rows. Check whether the design includes a separate base or simply joins two rectangles: those shapes hold contents differently.\n\nA bag worked in rounds may reduce some seams, but you will need to follow increases, recognise the beginning of a round, and keep the base flat. A granny-square bag adds another task: making motifs that match in size and joining them consistently. Neither technique is automatically better. Choose the design whose instructions you can explain back to yourself, including how its handles attach.",
        "image": {
          "src": "/images/guides/choosing-your-first-crochet-bag/step-02.svg",
          "alt": "Choose a construction you can understand: Flat panels; Worked in rounds; Joined granny squares.",
          "caption": "Learning notes: Flat panels → Worked in rounds → Joined granny squares. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Compare yarn by fabric, not colour alone",
        "text": "Smooth cotton yarn is a common starting point for crochet bags, but the fibre name alone does not determine the result. A loosely worked cotton fabric can still stretch or leave large openings. The yarn structure, stitch pattern, hook, and construction all matter. Cotton blends can also behave differently from one another.\n\nRead the pattern recommendations and the yarn label together. Compare fibre content, thickness, length per ball, and care instructions. A soft, draping yarn that works beautifully for a scarf may give a bag less structure than you expected. Avoid assuming that a heavier strand will solve every problem: thick yarn can make the empty bag heavy and its seams bulky.",
        "image": {
          "src": "/images/guides/choosing-your-first-crochet-bag/step-03.svg",
          "alt": "Compare yarn by fabric, not colour alone: Read fibre content; Compare yarn structure; Sample the chosen fabric.",
          "caption": "Learning notes: Read fibre content → Compare yarn structure → Sample the chosen fabric. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Make a sample before making the body",
        "text": "Work a sample using the stitch pattern and method specified in your chosen instructions. If the bag is worked in rounds, follow the pattern’s advice for checking gauge in rounds rather than assuming a flat sample will match. Make the sample large enough to measure away from its edges.\n\nCheck both the stitch gauge and the feel of the fabric. Can you see large gaps when you gently move it? Does it bend comfortably, or feel stiff and difficult to work? Wash and dry the sample according to the yarn’s care instructions if the finished bag will receive that treatment. Measure it again before deciding whether to change the hook. Record the yarn and hook you actually used.",
        "image": {
          "src": "/images/guides/choosing-your-first-crochet-bag/step-04.svg",
          "alt": "Make a sample before making the body: Match stitch pattern; Prepare the sample; Measure away from edges.",
          "caption": "Learning notes: Match stitch pattern → Prepare the sample → Measure away from edges. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Use gauge to understand finished size",
        "text": "Gauge connects stitch counts to dimensions. As a simple calculation, if a sample measures 16 stitches across 10 cm, a panel of 40 stitches would be approximately 25 cm wide before accounting for seams, borders, or shaping. That is an arithmetic example, not a tested bag specification.\n\nA difference that seems small in a sample can be noticeable across a whole panel. Measure early, before making a second matching piece. Do not change only the starting chain to resize a pattern unless you understand its stitch multiple, shaping, and assembly. A different width can also change the base, lining, and placement of handles.",
        "image": {
          "src": "/images/guides/choosing-your-first-crochet-bag/step-05.svg",
          "alt": "Use gauge to understand finished size: 16 sts / 10 cm; 40 stitches; Approx. 25 cm before seams.",
          "caption": "Learning notes: 16 sts / 10 cm → 40 stitches → Approx. 25 cm before seams. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Plan handles before finishing the top",
        "text": "Handles are part of the construction, not just decoration added at the end. Compare their width, length, attachment points, and how they sit against your hand or shoulder. A narrow strap can feel uncomfortable even when the bag itself looks good. A long crochet strap may lengthen during use.\n\nFollow the pattern’s reinforcement and joining method. Mark both attachment positions before sewing and check that they are symmetrical. If you are substituting purchased handles or adding a fabric backing, confirm that the attachment method suits the bag fabric. There is no universal safe carrying weight for a handmade crochet bag; do not treat a fibre recommendation as a load rating.",
        "image": {
          "src": "/images/guides/choosing-your-first-crochet-bag/step-06.svg",
          "alt": "Plan handles before finishing the top: Mark attachment points; Check comfortable width; Follow reinforcement method.",
          "caption": "Learning notes: Mark attachment points → Check comfortable width → Follow reinforcement method. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Decide whether a lining would help",
        "text": "A lining can keep small items from slipping through openings and cover the inside of seams. It can also provide a place for a pocket. It does not automatically make the handles or crochet joins stronger: those parts still need their own sound construction.\n\nMeasure the completed, shaped bag before cutting lining fabric. The lining should sit inside without pulling the crochet out of shape or gathering excessively at the opening. A flat bag and a bag with a separate base need different lining shapes. Follow a dedicated sewing tutorial for seam allowances, boxed corners where needed, and attachment. Alyssia Creates provides a separate illustrated lining tutorial linked in the references below.\n\nIf you are new to sewing, keep the first lining simple. Practise the seam and attachment stitch on spare fabric, and consider compatible washing instructions for the yarn and fabric.",
        "image": {
          "src": "/images/guides/choosing-your-first-crochet-bag/step-07.svg",
          "alt": "Decide whether a lining would help: Measure finished bag; Sew a compatible lining; Fit without distorting.",
          "caption": "Learning notes: Measure finished bag → Sew a compatible lining → Fit without distorting. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Keep panels and seams consistent",
        "text": "For a panel-based design, count rows as well as stitches. Two pieces may appear similar on a table but reveal different heights when you join them. Lay them together and compare their edges before assembling. Follow the pattern’s shaping or blocking instructions without forcing a mismatched piece into place.\n\nUse removable markers to align the corners and any important reference points. Join with the method specified in your pattern, keeping the seam even and checking both sides as you work. Pulling joining yarn too tightly can shorten an edge and pucker the bag. Leave appropriate ends for weaving in rather than cutting them close to the seam.",
        "image": {
          "src": "/images/guides/choosing-your-first-crochet-bag/step-08.svg",
          "alt": "Keep panels and seams consistent: Compare panels; Mark matching points; Join without puckering.",
          "caption": "Learning notes: Compare panels → Mark matching points → Join without puckering. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Finish and inspect before regular use",
        "text": "Complete the top edge, weave in ends securely, and check handle attachments from inside and outside. Look for a loose join, missed stitch, or an end that has worked free. Make sure an optional closure can open easily without dragging on nearby stitches.\n\nBegin by checking the bag with a few light items. Notice whether the opening distorts, the handles lengthen, or the seams pull apart. This practical check can reveal a problem, but it does not establish a certified carrying capacity. Recheck attachment points during use and repair wear before continuing to carry the bag. Keep the yarn label so you can follow its care instructions.",
        "image": {
          "src": "/images/guides/choosing-your-first-crochet-bag/step-09.svg",
          "alt": "Finish and inspect before regular use: Inspect handle joins; Try light contents; Recheck wear during use.",
          "caption": "Learning notes: Inspect handle joins → Try light contents → Recheck wear during use. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      },
      {
        "heading": "Write a short project plan",
        "text": "Before buying supplies, note the pattern name, terminology, recommended yarn, required length, hook, gauge, finished size, and any separate handle or lining supplies. Read through the assembly stage as well as the crochet instructions. If a required detail is missing, resolve it before purchasing yarn.\n\nOur Everyday Crochet Bag listing is a collection concept while its pattern is being developed. Its inspiration photo should not be used to infer stitch counts, dimensions, or yarn quantities. You can save the concept in the shop and use this guide to decide what matters in your own first bag: manageable construction, a fabric you like, comfortable handles, and finishing you can complete carefully.\n\nCompare a lining with the actual bag.\n\nOnce the crochet body is finished and prepared as directed, place the unstitched lining shape inside it before permanently attaching anything. Check that the base can sit at the bottom and the opening can align without pulling. A lining that is too small can change how the crochet body hangs.\n\nAccount for seam allowances separately from finished lining dimensions. Do not cut fabric using the size of a stock photograph or a generic bag description. If your bag has depth, use a lining method that accommodates the base. Keep pins away from your hands while checking the fit, and remove them as the seam is completed.",
        "image": {
          "src": "/images/guides/choosing-your-first-crochet-bag/step-10.svg",
          "alt": "Write a short project plan: Pattern and materials; Gauge and size; Assembly and care.",
          "caption": "Learning notes: Pattern and materials → Gauge and size → Assembly and care. This schematic summarises the instructions; it is not a photograph of the hand movements."
        }
      }
    ],
    "faqs": [
      {
        "question": "Is cotton yarn always best for a crochet bag?",
        "answer": "Cotton is a common option, but the pattern, yarn structure, stitch pattern, and fabric density matter too. Compare a sample and follow the pattern’s material recommendations."
      },
      {
        "question": "Does every crochet bag need a lining?",
        "answer": "No. A lining can be useful for keeping small items inside an open fabric or adding a pocket. Choose it according to the construction and intended use."
      },
      {
        "question": "How much yarn should I buy?",
        "answer": "Use the required metres or yards in a complete pattern, together with its gauge and yarn specifications. Bag size alone does not give a reliable quantity."
      },
      {
        "question": "Can I make a bag without sewing?",
        "answer": "Some designs use crochet joins and integrated handles. Read all assembly instructions first; a fabric lining usually introduces sewing even if the crochet body does not."
      },
      {
        "question": "Is the Everyday Crochet Bag PDF available?",
        "answer": "The bag is currently a collection concept. Its final measurements, instructions, and PDF are still in preparation."
      }
    ],
    "references": [
      {
        "title": "Alyssia Creates — How to Sew a Fabric Lining for a Crochet Bag",
        "url": "https://alyssiacreates.com/how-to-sew-a-fabric-lining-for-a-crochet-bag/"
      }
    ]
  }
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getPostBody(post: Post) {
  return [
    ...post.sections.map(section => `${section.heading}\n${section.text}`),
    ...post.faqs.map(item => `${item.question}\n${item.answer}`),
  ].join("\n\n");
}

export function getPostWordCount(post: Post) {
  return getPostBody(post).trim().split(/\s+/).length;
}

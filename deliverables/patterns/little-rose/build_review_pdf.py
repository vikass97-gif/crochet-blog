"""Rebuild with ReportLab. Technical draft; physical crochet testing is pending."""
from pathlib import Path
from math import sin, cos, pi
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor, white
from reportlab.lib.pagesizes import A4
from reportlab.platypus import Paragraph, Table, TableStyle
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from xml.sax.saxutils import escape

ROOT = Path(__file__).resolve().parent
OUT = ROOT.parents[2] / 'output/pdf/Little-Rose-Crochet-Pattern-v0.3-REVIEW.pdf'
W, H = A4
INK, MUTED, ACCENT, PAPER, LINE = [HexColor(x) for x in ['#292e26','#66695e','#a3432a','#faf8f2','#dddccf']]
BODY = ParagraphStyle('body', fontName='Helvetica', fontSize=10.5, leading=16, textColor=INK)
SMALL = ParagraphStyle('small', parent=BODY, fontSize=9, leading=13, textColor=MUTED)
BOLD = ParagraphStyle('bold', parent=BODY, fontName='Helvetica-Bold')
c = canvas.Canvas(str(OUT), pagesize=A4)
c.setTitle('Little Rose | Crochet Pattern | v0.3 Technical Draft')
c.setAuthor('Loop & Stitch')
c.setSubject('Untested rose and leaf crochet pattern; US terminology; testing worksheet')
y = H - 110
page = 0

def text(value, style=BODY, gap=12):
    global y
    p = Paragraph(value, style)
    _, height = p.wrap(W - 100, H)
    assert y - height >= 76, ('Page overflow', page, value[:80])
    p.drawOn(c, 50, y - height)
    y -= height + gap

def heading(value):
    global y
    y -= 6
    text(escape(value), ParagraphStyle('section', parent=BODY, fontName='Helvetica-Bold', fontSize=13, leading=18), 10)

def table(rows, widths):
    global y
    data = [[Paragraph(escape(str(cell)), SMALL) for cell in row] for row in rows]
    t = Table(data, colWidths=widths, hAlign='LEFT')
    t.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,0),HexColor('#e6e9dc')),('VALIGN',(0,0),(-1,-1),'TOP'),('BOTTOMPADDING',(0,0),(-1,-1),9),('TOPPADDING',(0,0),(-1,-1),9),('LINEBELOW',(0,0),(-1,-1),.5,LINE)]))
    _, h = t.wrap(W-100,H)
    assert y-h>=76, ('Table overflow',page)
    t.drawOn(c,50,y-h);y-=h+16

def newpage(title, kicker):
    global page,y
    if page: c.showPage()
    page += 1
    c.setFillColor(PAPER);c.rect(0,0,W,H,fill=1,stroke=0)
    c.setFillColor(ACCENT);c.setFont('Helvetica-Bold',9);c.drawString(50,H-40,'LOOP & STITCH  /  PATTERN STUDIO')
    c.setFillColor(MUTED);c.setFont('Helvetica',8);c.drawRightString(W-50,H-40,'LITTLE ROSE  /  v0.3')
    c.setStrokeColor(LINE);c.line(50,H-54,W-50,H-54)
    c.setFillColor(ACCENT);c.setFont('Helvetica',9);c.drawString(50,H-78,kicker.upper())
    c.setFillColor(INK);c.setFont('Times-Roman',28);c.drawString(50,H-110,title)
    c.setStrokeColor(LINE);c.line(50,58,W-50,58)
    c.setFillColor(MUTED);c.setFont('Helvetica',8);c.drawRightString(W-50,42,f'{page} / 8')
    y=H-140

newpage('Little Rose', 'A crochet flower & optional leaf')
text('A structured pattern-development edition for a rolled flower made from a six-petal strip. Includes an optional oval leaf, assembly guidance, and a testing worksheet.')
text('<b>English / US crochet terms</b><br/>Proposed level: confident beginner. Requires chain, single crochet, half double crochet, double crochet, slip stitch, and hand sewing.')
heading('Inside this edition')
table([['Page','What you will find'],['2','Materials, terminology and counting rules'],['3','Foundation chain and first row'],['4','Six petal repeats with stitch counts'],['5','Optional oval leaf'],['6','Rolling, sewing and assembly'],['7','Finishing and troubleshooting'],['8','Sample record and release checks']], [70,W-170])
text('<b>Edition status:</b> written instructions and arithmetic review only. No physical sample or verified finished measurements have been supplied. This edition omits estimated dimensions and yarn quantities. It is not a tested customer edition.')
text('No photograph is presented as the finished result of this pattern. A final illustrated edition requires photographs of a sample made from these instructions.', SMALL)

newpage('Before you begin', 'Materials & terminology')
text('Use the table below to prepare a development sample. A specific yarn, hook size, finished size and consumption have not been verified for this construction. Record your actual choices and results on page 8.')
table([['Gather','For this development sample'],['Yarn & hook','Smooth yarn in petal and leaf colours, with a compatible hook chosen from the yarn label. No tested yarn/hook pairing is specified.'],['Finished dimensions','Not yet measured. Record rose diameter and height, and leaf length and width after assembly.'],['Yarn quantity','Consumption has not been measured. Record yarn used separately for each colour, including sewing and weaving ends.'],['Finishing tools','Yarn needle, scissors, removable markers and measuring tape.'],['Not included','No wire, stem, glue, pin fitting or other accessory is specified in this draft.']], [125,W-225])
table([['Abbreviation','US meaning'],['ch / st / sts','Chain / stitch / stitches'],['sc / hdc / dc','Single crochet / half double crochet / double crochet'],['sl st / yo','Slip stitch / yarn over'],['[ ... ] x 6','Work the full bracketed sequence six times.']], [125,W-225])
text('US sc = UK dc; US hdc = UK half treble; US dc = UK treble. Chain and slip stitch keep the same stitch names. Do not mix the systems.', SMALL)
text('<b>Pattern rules:</b> the slip knot and live loop do not count. Turning ch 1 does not count. All rose stitches go under both top loops of the previous row. This draft contains no skipped base stitches in the petal row.')

newpage('Rose: the foundation', 'Part 1 / make one strip')
heading('1. Leave a starting tail')
text('Leave a tail that can be threaded into your yarn needle and woven securely into the finished base. Place a slip knot on the hook. Record the usable tail length during the sample test.')
heading('2. Foundation: ch 25')
text('Make 25 chains. Count completed V shapes only; exclude the slip knot and the live loop on the hook. Keep the chain loose enough to insert the hook again.')
heading('3. Row 1: 24 sc')
text('Sc in the second chain from the hook, then sc in each remaining chain. For this exercise, insert under the top strand of each chain consistently. You should have <b>24 sc</b>. Do not work into the slip knot.')
heading('4. Mark six groups')
text('Place markers after every four completed sc to identify six groups. The marked boundary belongs after stitch 4, 8, 12, 16, 20 and 24. You will work one petal repeat into each group of four base stitches.')
table([['Checkpoint','Expected count'],['Foundation','25 chains'],['Row 1','24 single crochet stitches'],['Grouping','6 groups x 4 base stitches = 24']], [170,W-270])
text('Stop here if the count differs. Find the missing or extra stitch before starting petals; do not compensate silently in Row 2.')

newpage('Rose: six petal repeats', 'Part 2 / one row of grouped stitches')
heading('5. Row 2: ch 1, turn')
text('The turning chain gives height and does not count. Work directly into the first sc of Row 1. Each bracket below consumes four separate base stitches.')
text('<b>[Sl st in next st; 5 dc in next st; 5 dc in next st; sl st in next st] x 6.</b>', BOLD)
text('Each 5-dc group goes into a single base stitch. Complete all five dc before moving to the next base stitch. Do not skip any of the four base stitches.')
table([['Base position','Work into that stitch','New stitches'],['1','1 sl st','1'],['2','5 dc in the same st','5'],['3','5 dc in the same st','5'],['4','1 sl st','1'],['One repeat','4 base stitches consumed','12'],['Six repeats','24 base stitches consumed','72 = 60 dc + 12 sl st']], [100,270,W-470])
text('We call each two-fan group one petal repeat for this draft. Its actual petal shape and fullness must be checked on the physical sample. Adjacent repeats have two neighbouring slip stitches at their boundary; that is intentional.')
heading('6. Fasten off for assembly')
text('After the final sl st, leave a long sewing tail, cut the yarn and draw the end fully through the live loop. Keep this tail for sewing the rolled base. A required length has not been established; record the length used and whether it is sufficient. The strip may curl; do not force it flat.')

newpage('Optional oval leaf', 'Part 3 / work around a chain')
text('Make one leaf first; add a second only after checking its scale against the rose. Use green yarn and the same starting hook choice. This is worked around both sides of a foundation chain, not back-and-forth rows.')
heading('1. Foundation: ch 7')
text('Starting in the second ch from the hook, work: <b>sc in next ch, hdc in next ch, dc in each of next 2 ch, hdc in next ch, 3 sc in last ch.</b> These actions use all six available chain positions.')
heading('2. Work along the underside')
text('Rotate the piece so you can work back along the unused strands on the opposite side of the foundation. Do not make a turning chain. Do not work into the slip knot.')
text('Starting in the chain position just before the 3-sc tip: <b>hdc in next ch, dc in each of next 2 ch, hdc in next ch, sc in next ch.</b> You have worked the remaining five positions back toward the starting end.')
heading('3. Join and finish')
text('Join with a sl st into the first sc. The joining sl st does not count. Fasten off with a sewing tail. Record the length used and whether it is sufficient for attachment.')
table([['Section','Count excluding final join'],['First side before tip','5 stitches: 1 sc, 1 hdc, 2 dc, 1 hdc'],['Far tip','3 sc in the last chain'],['Return side','5 stitches: 1 hdc, 2 dc, 1 hdc, 1 sc'],['Leaf total','13 stitches + 1 non-counting joining sl st']], [185,W-285])
text('Checkpoint: the chain positions on both sides must be paired without twisting the foundation. This leaf count is arithmetically checked; the outline is not yet physically verified.', SMALL)

newpage('Roll, arrange, then sew', 'Part 4 / assembly schematic')
heading('1. Find the two edges')
text('Identify the straight foundation edge at the bottom and the petal edge at the top. Keep the petal edge free while you roll the base. This sketch explains orientation only; it is not a scale drawing of the crochet fabric.')
y-=45
x0=60; baseline=y-58
c.setStrokeColor(ACCENT);c.setLineWidth(1.2)
for i in range(6):
 x=x0+i*74;c.arc(x,baseline-10,x+72,baseline+75,0,180)
c.setStrokeColor(INK);c.line(x0,baseline,x0+444,baseline)
c.setFillColor(MUTED);c.setFont('Helvetica',8);c.drawString(x0,baseline-18,'Foundation edge: sew here.');c.drawString(x0,baseline+85,'Petal edge: leave free.');y=baseline-44
heading('2. Form the centre')
text('Start at the end without the long sewing tail. Roll the first repeat into a loose centre, keeping the foundation edge aligned. Continue wrapping the remaining repeats around it. Do not pull the top edge tight; allow the petals to sit around the centre.')
heading('3. Secure the base')
text('Hold the roll in its chosen shape. Thread the long tail into the yarn needle. Sew through the foundation-edge layers from underneath, making several small passes in different directions so every layer is caught. Avoid sewing across the visible upper petals. Gently check whether the centre or outer layer can unwind.')
heading('4. Attach a leaf')
text('Use the leaf tail to sew its starting end to the underside of the rose. Check placement before tightening. Secure the tails in the lower stitches, then trim only once the attachments hold. If a tail is too short, use a separate length of matching yarn and record the change.')

newpage('Finishing & troubleshooting', 'Check the sample before calling it complete')
table([['What you notice','What to check'],['Wrong foundation count','Recount 25 chains excluding the live loop and knot. Row 1 must have 24 sc.'],['Uneven petal repeats','Each repeat consumes 4 base stitches. Both 5-dc groups stay in their own single base stitch.'],['Strip curls strongly','Curling may occur with the increases. Test loose rolling before changing the stitch count. Record whether assembly is practical.'],['Rose unwinds','Check whether sewing passes catch every foundation layer. Do not rely on one long pass.'],['Leaf twists','Check that the return side uses the unused strands of the same foundation chain, in reverse order.'],['Shape differs from expectation','Record yarn, hook, tension and assembly choices. No finished reference sample has yet been approved.']], [140,W-240])
heading('Care and intended use')
text('Follow the yarn label for cleaning and preparation. Do not assume that heat or steam is appropriate. This draft describes a decorative sample; it makes no durability or product-safety claim for a toy, pin, wearable attachment, or other end use.')
heading('Colour and size experiments')
text('After making the base version once, you may test another colour or yarn/hook pairing. Keep the same counts for that comparison. Measure and label every sample. A new yarn may change both the dimensions and the ability to roll or sew the flower.')
heading('Photos needed for the final edition')
text('Capture the finished rose from above and below, the unrolled six-repeat strip, a close-up of one repeat, the leaf before joining, and the base sewing steps. Photos must show a sample made from the final instructions, not a stock flower.')

newpage('Testing record & release checklist', 'Part 5 / complete before any sale')
text('Pattern development draft prepared with AI assistance. Stitch totals have been checked on paper; no person has yet confirmed the finished model. Use this sheet to record the first physical test and every correction.', SMALL)
table([['Record','Tester entry'],['Tester / date','___________________________________'],['Yarn brand, fibre & weight','___________________________________'],['Hook size / yarn used','___________________________________'],['Row 1 / petal row / leaf counts','___________________________________'],['Strip length / finished rose diameter','___________________________________'],['Leaf length / width','___________________________________'],['Time / sewing tail allowances','___________________________________'],['Problems & corrected wording','___________________________________']], [195,W-295])
text('<b>Release checks:</b> sample completed from the written draft; counts and assembly checked; yarn quantities and dimensions recorded; corrections retested; level assessed; finished-object and step photos added; final PDF proofread; customer usage license and seller information confirmed.', SMALL)
text('<b>Usage status:</b> internal working document, not a purchasable pattern. Final permissions for PDF sharing and selling finished objects have not been adopted. Contact: <link href="mailto:info@velioratv.com" color="#a3432a">info@velioratv.com</link>.', SMALL)
text('Terminology reference: <link href="https://www.craftyarncouncil.com/standards/crochet-abbreviations" color="#a3432a">Craft Yarn Council - crochet abbreviations</link>. This reference supports the stitch names, not an endorsement or test of this original draft.', SMALL)
c.save()
print(OUT)

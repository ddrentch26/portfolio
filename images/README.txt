Each project now has its own case-study page (project-1.html, project-2.html,
project-3.html), linked from the card on the homepage.

CARD THUMBNAILS (shown on the homepage grid):
project-1.jpg   (UOttawa Housing Portal Redesign)
project-2.jpg   (D&M Detailing Website); already added
project-3.jpg   (Investing Portfolio Comprehension App)
profile.jpg     (your photo, for the About section)

CASE STUDY GALLERY (shown on each project's own page, full width, no cropping):
project-1-2.jpg; extra screen for project-1.html

project-2.jpg; D&M Detailing homepage, TOP half (replace with a fresh,
                      higher-res crop of just the top of the page)
project-2-2.jpg; D&M Detailing homepage, BOTTOM half
project-2-3.jpg; D&M Detailing Our Work page, TOP half
project-2-4.jpg; D&M Detailing Our Work page, BOTTOM half
project-2-5.jpg; Square Appointments dashboard, showing the configured
                      services (backend evidence of the integration, since
                      the live booking is currently paused)
project-2-6.jpg; D&M Detailing Contact page

project-3-2.jpg; extra screen for project-3.html
project-3-3.jpg; Holdings page (donut chart breakdown), for project-3.html
                      (page ends with a "More to come..." note since this
                      project is ongoing)

Tip: splitting a tall page into two screenshots (top/bottom) instead of one
long full-page capture keeps each image closer to its native resolution, so
it looks sharp instead of stretched/soft. Same trick works for project-1 and
project-3 if those pages end up being tall too.

The gallery images are shown at their natural size (no forced cropping), so
full-page screenshots won't look stretched. The homepage card thumbnails ARE
cropped to a 4:3 box, but now anchor to the top of the image so they show the
header/hero of the page rather than an awkward slice.

Any image format works (.jpg, .png, .webp) as long as you also update the
matching <img src="..."> path in the relevant HTML file if you don't use .jpg.

Want to add a 4th project? Copy one <a class="card">...</a> block in
index.html plus its own project-4.html (duplicate an existing one as a
template), and update the project-footer-nav links across pages to include it.
With 4+ projects you may also want to remove the .grid-3 class in index.html
so the grid falls back to 2 columns.

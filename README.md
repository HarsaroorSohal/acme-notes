# Overview

Jolly Notes is a powerful note-taking application designed to help users organize their thoughts, ideas, and tasks effectively.

Deployment Link: https://acme-notes-azure.vercel.app/

# Technology Stack

- **React (Next)**: The Javascript framework used. It is developed using the "App Router" offered by NextJS to leverage several optimizations and caching that Next offers by default. We are also leveraging **Static Site Generation** offerered by NextJs which caches the output HTML of your page at build time and return the pre-build HTML when requested.

- **Tailwind CSS**: Styling of the components.

- **Aceternity UI / Framer Motion** Adding various browser animations such as the Typewriter Effect and Backgrounds.
- **HyperUI** Fetching pre-designed trusted UI components such as Footer and the Pricing Page to speed up implementation.

# Core Web Vitals

- All Web Vitals are rated good (Green)
- **LCP** - 1.115s
- **FID** - 4ms
- **CLS** - 0
- **INP** - 8ms (New Core Web Vital, replacing FID)

# Pingdom Website Test

- **Load Time**: 198ms
- **Performance Grade**: 87/100 (Needs better compression of components)
- **Page Size**: 445KB

# SEO and Speed Efforts

1. Ensuring usage of NextJS APIs and components that offer SEO friendly behaviour out of the box.
2. Adding "alt" tags for all images to improve accessiblity.
3. Embedding Structured Data (FAQ) to improve SEO and have a FAQ section displayed on search engines to drive organic growth.
4. Anaylizing the web bundle using NextBundleAnalyzer.
5. Getting almost a 100 score (99 In Performance) on Page Speed Insights for the Web app. [Link](https://pagespeed.web.dev/analysis/https-acme-notes-azure-vercel-app/wy03x5pytj?form_factor=desktop)
6. Using a SSR based component architechture where only the "leaf" components of the DOM tree are created under a client boundary.

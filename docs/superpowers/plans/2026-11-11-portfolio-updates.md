# Implementation Plan - Portfolio Updates (Resume, Certificates, My Works)

Update Jovian Chandra's portfolio website with an updated CV, four new Google Coursera AI certificates, and two new portfolio projects (OmniMedia and Enhance AI).

## Proposed Changes

### 1. Resume
- Replace `src/components/photos/CV.pdf` with `update-folder/CV.pdf`.
- Verify link reference in `src/components/Header.jsx`.

### 2. Certificates
- Copy 4 Coursera PDFs from `update-folder/` to `src/components/photos/cer/`:
  - `Coursera 6MF6NCD32B2H.pdf` -> `cer6.pdf`
  - `Coursera 72N63DIXCKPX.pdf` -> `cer7.pdf`
  - `Coursera OUPVPODAE1UH.pdf` -> `cer8.pdf`
  - `Coursera P9Z9AJGZ2U8V.pdf` -> `cer9.pdf`
- Render the first page of each PDF to a high-resolution PNG image: `cer6.png`, `cer7.png`, `cer8.png`, `cer9.png`.
- Update `src/components/MyCertificate.jsx` to import all 9 certificates and PDFs, appending them to the carousel and click-to-open handlers.

### 3. My Works Assets (OmniMedia & Enhance AI)
- Capture screenshots for:
  - **OmniMedia** (`https://omnimedia.vercel.app/`): Browser-based media conversion & compression engine.
    - Save views as `foto20.jpg`, `foto21.jpg`, `foto22.jpg` (1280x720).
  - **Enhance AI** (`https://enhance-ai-gamma.vercel.app/`): AI writing assistant with inline ghost-text autocomplete and tone tuner.
    - Save views as `foto23.jpg`, `foto24.jpg`, `foto25.jpg` (1280x720).
- Save images into `src/components/photos/`.

### 4. My Works List (`src/components/Lists.tsx`)
- Import `foto20` through `foto25`.
- Add section `.005 OmniMedia`:
  - Left-aligned carousel, right-aligned description.
  - Logos: React, Tailwind.
  - Link: `https://omnimedia.vercel.app/`.
  - Professional description highlighting client-side media conversion and compression.
- Add section `.006 Enhance AI`:
  - Alternating layout (Right-aligned carousel, left-aligned description on desktop).
  - Logos: React, Tailwind.
  - Link: `https://enhance-ai-gamma.vercel.app/`.
  - Professional description highlighting inline autocomplete, Gemini AI integration, and tone tuning.
- Add decorative dividers matching existing style.

### 5. Work Counter (`src/components/MyWorks.jsx`)
- Update the counter indicator from `4` to `6`.

### 6. Verification
- Run `npm run build` to confirm zero TypeScript or bundling errors.

## Verification Plan
- Build command: `npm run build`
- File presence checks for `cer6-9.pdf`, `cer6-9.png`, `foto20-25.jpg`, `CV.pdf`.


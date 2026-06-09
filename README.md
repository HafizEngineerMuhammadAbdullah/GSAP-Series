# PracticeGSAPLibrary

A hands-on collection of GSAP (GreenSock Animation Platform) practice projects covering everything from basic animations to advanced scroll-triggered and SVG animations.

📁 **Path:** `Desktop > Web Development and Designing > PracticeGSAPLibrary`

---

## 📁 Projects Overview

### 1. `GSAP_Basic`
> *Created: 19-May-26*

Introduction to GSAP — setting up the library and understanding core animation methods.

**Topics Covered:**
- Installing / linking GSAP via CDN
- `gsap.to()`, `gsap.from()`, `gsap.fromTo()`
- Animating properties: `x`, `y`, `opacity`, `scale`, `rotation`
- `duration`, `delay`, `ease` options
- `gsap.timeline()` basics

---

### 2. `GSAP_Cursor_Animation`
> *Created: 03-Jun-26*

Building a custom animated cursor using GSAP for smooth, interactive pointer effects.

**Topics Covered:**
- Tracking mouse position with `mousemove` event
- Animating a custom cursor element with `gsap.to()`
- Lag/follow effect using `duration` and `ease`
- Cursor scaling on hover interactions

---

### 3. `GSAP_Scroll_Trigger`
> *Created: 26-May-26*

Introduction to GSAP's ScrollTrigger plugin — animating elements as the user scrolls.

**Topics Covered:**
- Registering `ScrollTrigger` plugin
- `trigger`, `start`, `end` properties
- `scrub` for scroll-linked animations
- `markers` for debugging
- Pinning elements during scroll

---

### 4. `GSAP_Scroll_Trigger2`
> *Created: 26-May-26*

Advanced ScrollTrigger techniques and more complex scroll-based animation layouts.

**Topics Covered:**
- Multiple scroll triggers on one page
- Staggered scroll animations
- Horizontal scroll sections
- `toggleActions` for play/pause/reverse on scroll

---

### 5. `GSAP_Scrolling_Text_Animation`
> *Created: 07-Jun-26*

Creating cinematic scrolling text effects — text that animates in/out as the user scrolls.

**Topics Covered:**
- Splitting text into characters/words
- Animating each character with stagger
- Scroll-linked text reveal effects
- Combining ScrollTrigger with text animations

---

### 6. `GSAP_Stunning_Text_Animation`
> *Created: 06-Jun-26*

Eye-catching text animations for hero sections, headings, and landing pages.

**Topics Covered:**
- Text reveal with clip-path and opacity
- Letter-by-letter entrance animations
- `gsap.timeline()` for sequencing text effects
- Combining `from` and `to` for dramatic entrances

---

### 7. `GSAP_SVG_Animation`
> *Created: 26-May-26*

Animating SVG elements using GSAP for scalable, resolution-independent animations.

**Topics Covered:**
- Targeting SVG elements (`path`, `circle`, `rect`)
- `strokeDasharray` / `strokeDashoffset` for draw-on effects
- Morphing SVG paths
- Animating SVG transforms

---

### 8. `GSAP_TimeLine_Animation`
> *Created: 04-Jun-26*

Mastering GSAP Timelines to create complex, sequenced, and synchronized animations.

**Topics Covered:**
- Creating and controlling `gsap.timeline()`
- `position` parameter (`+=`, `-=`, labels)
- Nesting timelines
- `play()`, `pause()`, `reverse()`, `restart()` controls
- `repeat` and `yoyo` for looping animations

---

## 🗺️ Learning Path

```
GSAP_Basic
  → GSAP_TimeLine_Animation
    → GSAP_Cursor_Animation
      → GSAP_SVG_Animation
        → GSAP_Scroll_Trigger
          → GSAP_Scroll_Trigger2
            → GSAP_Stunning_Text_Animation
              → GSAP_Scrolling_Text_Animation
```

---

## 🚀 Getting Started

Each project folder is standalone. Open any project in VS Code and run it with **Live Server**.

```bash
# Open project in VS Code
code GSAP_Basic
```

Then right-click `index.html` → **Open with Live Server**

---

## 🔗 GSAP via CDN

Add this to your HTML `<head>` or before `</body>`:

```html
<!-- GSAP Core -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>

<!-- ScrollTrigger Plugin (for scroll projects) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
```

---

## 🛠️ Prerequisites

- Basic HTML, CSS & JavaScript knowledge
- [VS Code](https://code.visualstudio.com/) with **Live Server** extension
- A modern browser (Chrome recommended for devtools)

---

## 📖 Useful Resources

- [GSAP Official Docs](https://gsap.com/docs/v3/)
- [GSAP ScrollTrigger Docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
- [GSAP Ease Visualizer](https://gsap.com/docs/v3/Eases/)
- [GreenSock Forums](https://gsap.com/community/)

---

## 👤 Author

**Smit** — Web Development & Designing Practice  
Part of the `Web Development and Designing` learning series.

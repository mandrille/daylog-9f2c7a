# Day Log

A one-page meal and blood sugar log, built to be used on a phone.

Tap **I ate just now** and the time is stamped. When you test afterwards, type the
number in the box on that line; the reading is stamped with its own time and the
gap between the two is shown, along with a low / in range / high label.

## Targets

**Pregnancy targets** are on by default, and they depend on when the test was
taken — which is why the gap matters:

| When the reading was taken | Target |
| --- | --- |
| On its own, no meal attached (fasting) | below 5.3 mmol/L |
| Within 90 minutes of a meal | below 7.8 mmol/L |
| More than 90 minutes after a meal | below 6.4 mmol/L |
| Any time | not below 4.0 mmol/L |

These are the NICE NG3 targets for diabetes in pregnancy. A maternity team may
set different ones; theirs win, and the toggle in the footer switches back to the
general 3.9–10.0 mmol/L reference band. The chip on each reading names the target
it was judged against ("in range · 1 h", "high · fasting"), and both the chip and
the target appear in the CSV export.

## Privacy

Entries are kept in the browser's own `localStorage` on the device that typed
them. There is no account, no server and no network request carrying any data —
this repository holds only the page itself. That also means entries do not sync
between devices and are lost if browser data is cleared, so the footer has
**Back up (JSON)** and **Restore backup**, plus **Export CSV** for sharing with a
clinician.

The site is served with `noindex` and a `robots.txt` that disallows everything,
and is not linked from anywhere.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The whole app — markup, styles and logic |
| `sw.js` | Service worker: network first, cache fallback so it opens offline |
| `manifest.webmanifest` | Lets iOS and Android install it as a standalone app |
| `icon-180.png`, `icon-512.png` | Home Screen icons |
| `robots.txt` | Keeps crawlers out |

## Adding it to an iPhone Home Screen

Open the page in Safari, then Share → **Add to Home Screen**. Installed that way
it opens without browser chrome and iOS stops clearing its stored data after a
week of not being used.

Range labels use the usual general reference bands (3.9–10.0 mmol/L,
70–180 mg/dL). They are not medical advice or a personal target.

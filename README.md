# Study Hub Enhancements

Opdracht: layout-verbouwing studiehub (index.html)

Ik heb een persoonlijke studiehub (statische site, gehost op GitHub Pages: https://wiskunde-schrift.github.io/Overzicht/). Het bestand index.html is het hoofdmenu. Ik wil de layout aanpassen — nog niet de vakpagina's (wiskunde.html, biologie.html, scheikunde.html, natuurkunde.html, nederlands.html), alleen index.html.

Huidige situatie:
Donker thema, PIN-gate, daarna een dashboard met:
- Een grid met 5 vak-tegels in het midden (Wiskunde, Biologie, Scheikunde, Natuurkunde, Nederlands) die linken naar aparte HTML-pagina's
- Een zwevend rond 'bolletje' linksonder dat uitklapt tot een AI-chatvenster (Gemini via een Cloudflare Worker-proxy, geen API-key in de code)
- Een zwevend rond 'bolletje' rechtsonder dat uitklapt tot een Spotify mini-player (Web Playback SDK)
- Een tandwiel-icoon rechtsboven dat een instellingen-lade opent

Gewenste wijzigingen:
1. AI-assistent en Spotify-speler worden vaste zijbalken
- Linkerzijbalk (vast, altijd zichtbaar): de AI-chatinterface, verticaal over de volle hoogte van het scherm
- Rechterzijbalk (vast, altijd zichtbaar): de Spotify-interface, ook verticaal over de volle hoogte
- De hoofdinhoud (naam, vakken-grid) staat gecentreerd in de resterende ruimte in het midden, en wordt dus smaller
- Op mobiel (smal scherm) mogen deze zijbalken samenklappen tot iconen/tabs onderaan of via een hamburger-achtig mechanisme — laat de layout niet breken op een telefoonscherm
- Behoud alle bestaande functionaliteit 1-op-1: dezelfde Gemini-integratie, dezelfde Spotify-login/playback-logica, dezelfde CSS-variabelen/design-tokens die al in het bestand staan (--bg, --card, --accent, --radius, enz.)
2. Vak-tegel 'vergroot' bij klikken
- Als ik op een vak-tegel klik (bijv. 'Wiskunde'), wil ik dat die tegel visueel opzwelt/uitvergroot in plaats van dat de pagina abrupt ververst naar wiskunde.html.
- Gebruik de View Transitions API (document.startViewTransition()), met een matching view-transition-name op de tegel en hero van de doelpagina.
- Val netjes terug op normale navigatie in browsers die View Transitions niet ondersteunen.
- Animatie kort en soepel (400-500ms) met var(--ease).

In de bijlagen vind je het originele index.html bestand, de screenshot met de gewenste opzet, en files.zip met de vakpagina's.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/22fb206b-7279-4629-a32f-c70e5b950c5e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

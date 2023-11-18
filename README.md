# Technical Assessment Test - Pokedex Application

## Requirements Met
- Use the Pokemon API to make API requests for data https://pokeapi.co/docs/v2.
- Able to search for any Pokemon.
- Able to see a history of what has been searched and revisit at anytime.

## Bonus Features Met
1. Able to see details about abilities, moves, species, sprites and types upon searching. You can see all this on the Pokemon's details page.
2. Able to see other evolutions of Pokemon and be able to navigate to specific Pokemon in the evolution chain. You can see this too on the Pokemon's details page.
3. A sleek and intuitive layout that resembles a Pokedex. I think its intuitive. Sleek maybe :D
4. Automated tests that ensure the business logic implemented is correct. Unit tests are stubbed in with a simple truthy launch. I may not have time to write them all out.

## Super Secret Bonus Met
1. Added in i18n and hooked it in to prep it for translations. I did not get all static strings out in time though, and there were som large blocks that need more work to get variables to pass. But, you can see the translation in `i18n/en/common.json`.

## Tech used
- React (CRA)
- Redux
- Recoil (Store search query)
- Typescript
- Material UI
- React Testing Library

## Installation
1. Pull down this repo 
2. Run `pnpm i` or `npm i`

Alternatively, I have deployed the app through my Github pages. 
You can demo it here without installing locally:

https://jbmatheson.github.io/pokedex-react/

## Commands
1. Serve locally with `pnpm start` or `npm run start`
2. Lint with `pnpm lint` or `npm run lint`
3. Run Tests with `pnpm test` or `npm run test`

## Testing
1. Navigate to `localhost:3000` or visit https://jbmatheson.github.io/pokedex-react/ if you just want to see it running...
2. Have fun with the Pokedex.
3. Test it in mobile and desktop
4. Break lots of things! j/k :D

## Notes:
1. Since this is in Strict Mode and running React 18 you will notice that the initial fetch is called twice (this is a known development build issue in React 18 and Strict Mode). If you want to serve this to a static server you can run `pnpm build`. This will create a production build. The issue does not happen in production mode. For comparison, this is the production build on my Github page: https://jbmatheson.github.io/pokedex-react/ -- you'll notice it works correctly in a prod build.
2. I wanted to add a lot more styling fun (light/dark mode, Pokemon variant selector, sorting for the initial grid but time did not permit).
3. For brevity, I used lodash A LOT. This was just due to time and I can bang things out faster that way. I also didn't handle my interfaces as uniformly as I would have liked. I was adding/removing/updating them as I went and in some places I spread the props in the model. In others, I roll the them out in the signature. I also didn't name them as consistently as I would have liked.

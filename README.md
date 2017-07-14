# EncryUi

## Development

To start development server just run `yarn start`

To stop it user `Ctrl + C` and type `y`

To create production build from current sources run `yarn build`

## Structure

Global styles are in `/src/styles.sass`

Style variables are in `/src/vars.sass`

Angular components and modules are in `/src/app/`

  + Components placement: `/components/`
  + Elements (like components, but too small and frequently used unlike them) are in `/elements/` 
  + Modules placement: `/modules/`
  + Services placement: `/services/`
  + Variables (all of them by cats) placement: `/vars.ts`

#Rules and code-style

For each component you should create single folder with files `*/*.component.ts`, `*/template.html`, `*/styles.sass`, where * is component name


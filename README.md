# eslint-bug

`Error: Failed to load parser '@typescript-eslint/parser' declared in 'BaseConfig': Cannot find module '@typescript-eslint/parser'
`

1. `cd one`
2. `npm i`
3. `npm link`
4. `cd two`
5. `npm link eslint-one`
6. `npm run lint`
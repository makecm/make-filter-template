# Make Image Filter Template

With this template you can set 4 custom values: 

  #### color 
  #### filter  
  #### image  
  #### position 


## Development server

Install all necessary dependencies `yarn install`

Run `yarn start` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## Building for Make

Run `yarn build` to build the project with correct resource pathing for the sake of deploying to make.

The build artifacts will be stored in the `/build` directory.

## Importing into Make

When importing into Make be sure to import from the `/build` folder.

The following `data` inputs are available as well.

- `headline`: string
- `backgroundImage`: string (public URL)
- `showLogos`: boolean

## Support

Here are some helpful links to get you started
- [Docs](https://docs.make.cm): First point of call
- [Twitter](https://twitter.com/home): Drop us a message on twitter if you find a bug or have any feedback
- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)

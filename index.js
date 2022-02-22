const { createServer } = require("the-fake-backend");

const server = createServer({
  proxies: [
    {
      name: "production",
      host: "https://pokeapi.co/api/v2",
    },
  ],
});

server.routes([
  {
    path: "/evolution-trigger/:idOrName",
    methods: [
      {
        type: "get",
        data: {
          id: 1,
          name: "level-up",
          names: [
            {
              language: {
                name: "fr",
                url: "https://pokeapi.co/api/v2/language/5/",
              },
              name: "Montée de niveau",
            },
          ],
          pokemon_species: [
            {
              name: "ivysaur",
              url: "https://pokeapi.co/api/v2/pokemon-species/2/",
            },
          ],
        },
      },
    ],
  },
  {
    path: "/contest-type/:idOrName",
    methods: [
      {
        type: "get",
        data: {
          berry_flavor: {
            name: "spicy",
            url: "https://pokeapi.co/api/v2/berry-flavor/1/",
          },
          id: 1,
          name: "cool",
          names: [
            {
              color: "Rouge",
              language: {
                name: "fr",
                url: "https://pokeapi.co/api/v2/language/5/",
              },
              name: "Sang-froid",
            }
          ],
        },
      },
    ],
  },
]);

server.listen(8080);

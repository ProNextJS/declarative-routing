import {
  type PokemonTypeMinimalInfo,
  type MinimalPokemonInfo,
  pokemonTypeNameSchema,
  type PokemonTypeName,
  PokemonTypeNames,
} from "@/schemas/pokemon";

export const typeNameToPokemonMapping: Record<
  PokemonTypeMinimalInfo["name"],
  Omit<MinimalPokemonInfo, "id">[]
> = {
  normal: [
    {
      name: "pidgey",
      url: "https://pokeapi.co/api/v2/pokemon/16/",
    },
    {
      name: "pidgeotto",
      url: "https://pokeapi.co/api/v2/pokemon/17/",
    },
    {
      name: "pidgeot",
      url: "https://pokeapi.co/api/v2/pokemon/18/",
    },
    {
      name: "rattata",
      url: "https://pokeapi.co/api/v2/pokemon/19/",
    },
    {
      name: "raticate",
      url: "https://pokeapi.co/api/v2/pokemon/20/",
    },
    {
      name: "spearow",
      url: "https://pokeapi.co/api/v2/pokemon/21/",
    },
    {
      name: "fearow",
      url: "https://pokeapi.co/api/v2/pokemon/22/",
    },
    {
      name: "jigglypuff",
      url: "https://pokeapi.co/api/v2/pokemon/39/",
    },
    {
      name: "wigglytuff",
      url: "https://pokeapi.co/api/v2/pokemon/40/",
    },
    {
      name: "meowth",
      url: "https://pokeapi.co/api/v2/pokemon/52/",
    },
    {
      name: "persian",
      url: "https://pokeapi.co/api/v2/pokemon/53/",
    },
    {
      name: "farfetchd",
      url: "https://pokeapi.co/api/v2/pokemon/83/",
    },
    {
      name: "doduo",
      url: "https://pokeapi.co/api/v2/pokemon/84/",
    },
    {
      name: "dodrio",
      url: "https://pokeapi.co/api/v2/pokemon/85/",
    },
    {
      name: "lickitung",
      url: "https://pokeapi.co/api/v2/pokemon/108/",
    },
    {
      name: "chansey",
      url: "https://pokeapi.co/api/v2/pokemon/113/",
    },
    {
      name: "kangaskhan",
      url: "https://pokeapi.co/api/v2/pokemon/115/",
    },
    {
      name: "tauros",
      url: "https://pokeapi.co/api/v2/pokemon/128/",
    },
    {
      name: "ditto",
      url: "https://pokeapi.co/api/v2/pokemon/132/",
    },
    {
      name: "eevee",
      url: "https://pokeapi.co/api/v2/pokemon/133/",
    },
    {
      name: "porygon",
      url: "https://pokeapi.co/api/v2/pokemon/137/",
    },
    {
      name: "snorlax",
      url: "https://pokeapi.co/api/v2/pokemon/143/",
    },
    {
      name: "sentret",
      url: "https://pokeapi.co/api/v2/pokemon/161/",
    },
    {
      name: "furret",
      url: "https://pokeapi.co/api/v2/pokemon/162/",
    },
    {
      name: "hoothoot",
      url: "https://pokeapi.co/api/v2/pokemon/163/",
    },
    {
      name: "noctowl",
      url: "https://pokeapi.co/api/v2/pokemon/164/",
    },
    {
      name: "igglybuff",
      url: "https://pokeapi.co/api/v2/pokemon/174/",
    },
    {
      name: "aipom",
      url: "https://pokeapi.co/api/v2/pokemon/190/",
    },
    {
      name: "girafarig",
      url: "https://pokeapi.co/api/v2/pokemon/203/",
    },
    {
      name: "dunsparce",
      url: "https://pokeapi.co/api/v2/pokemon/206/",
    },
    {
      name: "teddiursa",
      url: "https://pokeapi.co/api/v2/pokemon/216/",
    },
    {
      name: "ursaring",
      url: "https://pokeapi.co/api/v2/pokemon/217/",
    },
    {
      name: "porygon2",
      url: "https://pokeapi.co/api/v2/pokemon/233/",
    },
    {
      name: "stantler",
      url: "https://pokeapi.co/api/v2/pokemon/234/",
    },
    {
      name: "smeargle",
      url: "https://pokeapi.co/api/v2/pokemon/235/",
    },
    {
      name: "miltank",
      url: "https://pokeapi.co/api/v2/pokemon/241/",
    },
    {
      name: "blissey",
      url: "https://pokeapi.co/api/v2/pokemon/242/",
    },
    {
      name: "zigzagoon",
      url: "https://pokeapi.co/api/v2/pokemon/263/",
    },
    {
      name: "linoone",
      url: "https://pokeapi.co/api/v2/pokemon/264/",
    },
    {
      name: "taillow",
      url: "https://pokeapi.co/api/v2/pokemon/276/",
    },
    {
      name: "swellow",
      url: "https://pokeapi.co/api/v2/pokemon/277/",
    },
    {
      name: "slakoth",
      url: "https://pokeapi.co/api/v2/pokemon/287/",
    },
    {
      name: "vigoroth",
      url: "https://pokeapi.co/api/v2/pokemon/288/",
    },
    {
      name: "slaking",
      url: "https://pokeapi.co/api/v2/pokemon/289/",
    },
    {
      name: "whismur",
      url: "https://pokeapi.co/api/v2/pokemon/293/",
    },
    {
      name: "loudred",
      url: "https://pokeapi.co/api/v2/pokemon/294/",
    },
    {
      name: "exploud",
      url: "https://pokeapi.co/api/v2/pokemon/295/",
    },
    {
      name: "azurill",
      url: "https://pokeapi.co/api/v2/pokemon/298/",
    },
    {
      name: "skitty",
      url: "https://pokeapi.co/api/v2/pokemon/300/",
    },
    {
      name: "delcatty",
      url: "https://pokeapi.co/api/v2/pokemon/301/",
    },
    {
      name: "spinda",
      url: "https://pokeapi.co/api/v2/pokemon/327/",
    },
    {
      name: "swablu",
      url: "https://pokeapi.co/api/v2/pokemon/333/",
    },
    {
      name: "zangoose",
      url: "https://pokeapi.co/api/v2/pokemon/335/",
    },
    {
      name: "castform",
      url: "https://pokeapi.co/api/v2/pokemon/351/",
    },
    {
      name: "kecleon",
      url: "https://pokeapi.co/api/v2/pokemon/352/",
    },
    {
      name: "starly",
      url: "https://pokeapi.co/api/v2/pokemon/396/",
    },
    {
      name: "staravia",
      url: "https://pokeapi.co/api/v2/pokemon/397/",
    },
    {
      name: "staraptor",
      url: "https://pokeapi.co/api/v2/pokemon/398/",
    },
    {
      name: "bidoof",
      url: "https://pokeapi.co/api/v2/pokemon/399/",
    },
    {
      name: "bibarel",
      url: "https://pokeapi.co/api/v2/pokemon/400/",
    },
    {
      name: "ambipom",
      url: "https://pokeapi.co/api/v2/pokemon/424/",
    },
    {
      name: "buneary",
      url: "https://pokeapi.co/api/v2/pokemon/427/",
    },
    {
      name: "lopunny",
      url: "https://pokeapi.co/api/v2/pokemon/428/",
    },
    {
      name: "glameow",
      url: "https://pokeapi.co/api/v2/pokemon/431/",
    },
    {
      name: "purugly",
      url: "https://pokeapi.co/api/v2/pokemon/432/",
    },
    {
      name: "happiny",
      url: "https://pokeapi.co/api/v2/pokemon/440/",
    },
    {
      name: "chatot",
      url: "https://pokeapi.co/api/v2/pokemon/441/",
    },
    {
      name: "munchlax",
      url: "https://pokeapi.co/api/v2/pokemon/446/",
    },
    {
      name: "lickilicky",
      url: "https://pokeapi.co/api/v2/pokemon/463/",
    },
    {
      name: "porygon-z",
      url: "https://pokeapi.co/api/v2/pokemon/474/",
    },
    {
      name: "regigigas",
      url: "https://pokeapi.co/api/v2/pokemon/486/",
    },
    {
      name: "arceus",
      url: "https://pokeapi.co/api/v2/pokemon/493/",
    },
    {
      name: "patrat",
      url: "https://pokeapi.co/api/v2/pokemon/504/",
    },
    {
      name: "watchog",
      url: "https://pokeapi.co/api/v2/pokemon/505/",
    },
    {
      name: "lillipup",
      url: "https://pokeapi.co/api/v2/pokemon/506/",
    },
    {
      name: "herdier",
      url: "https://pokeapi.co/api/v2/pokemon/507/",
    },
    {
      name: "stoutland",
      url: "https://pokeapi.co/api/v2/pokemon/508/",
    },
    {
      name: "pidove",
      url: "https://pokeapi.co/api/v2/pokemon/519/",
    },
    {
      name: "tranquill",
      url: "https://pokeapi.co/api/v2/pokemon/520/",
    },
    {
      name: "unfezant",
      url: "https://pokeapi.co/api/v2/pokemon/521/",
    },
    {
      name: "audino",
      url: "https://pokeapi.co/api/v2/pokemon/531/",
    },
    {
      name: "minccino",
      url: "https://pokeapi.co/api/v2/pokemon/572/",
    },
    {
      name: "cinccino",
      url: "https://pokeapi.co/api/v2/pokemon/573/",
    },
    {
      name: "deerling",
      url: "https://pokeapi.co/api/v2/pokemon/585/",
    },
    {
      name: "sawsbuck",
      url: "https://pokeapi.co/api/v2/pokemon/586/",
    },
    {
      name: "bouffalant",
      url: "https://pokeapi.co/api/v2/pokemon/626/",
    },
    {
      name: "rufflet",
      url: "https://pokeapi.co/api/v2/pokemon/627/",
    },
    {
      name: "braviary",
      url: "https://pokeapi.co/api/v2/pokemon/628/",
    },
    {
      name: "meloetta-aria",
      url: "https://pokeapi.co/api/v2/pokemon/648/",
    },
    {
      name: "bunnelby",
      url: "https://pokeapi.co/api/v2/pokemon/659/",
    },
    {
      name: "diggersby",
      url: "https://pokeapi.co/api/v2/pokemon/660/",
    },
    {
      name: "fletchling",
      url: "https://pokeapi.co/api/v2/pokemon/661/",
    },
    {
      name: "litleo",
      url: "https://pokeapi.co/api/v2/pokemon/667/",
    },
    {
      name: "pyroar",
      url: "https://pokeapi.co/api/v2/pokemon/668/",
    },
    {
      name: "furfrou",
      url: "https://pokeapi.co/api/v2/pokemon/676/",
    },
    {
      name: "helioptile",
      url: "https://pokeapi.co/api/v2/pokemon/694/",
    },
    {
      name: "heliolisk",
      url: "https://pokeapi.co/api/v2/pokemon/695/",
    },
    {
      name: "pikipek",
      url: "https://pokeapi.co/api/v2/pokemon/731/",
    },
    {
      name: "trumbeak",
      url: "https://pokeapi.co/api/v2/pokemon/732/",
    },
    {
      name: "toucannon",
      url: "https://pokeapi.co/api/v2/pokemon/733/",
    },
    {
      name: "yungoos",
      url: "https://pokeapi.co/api/v2/pokemon/734/",
    },
    {
      name: "gumshoos",
      url: "https://pokeapi.co/api/v2/pokemon/735/",
    },
    {
      name: "stufful",
      url: "https://pokeapi.co/api/v2/pokemon/759/",
    },
    {
      name: "bewear",
      url: "https://pokeapi.co/api/v2/pokemon/760/",
    },
    {
      name: "oranguru",
      url: "https://pokeapi.co/api/v2/pokemon/765/",
    },
    {
      name: "type-null",
      url: "https://pokeapi.co/api/v2/pokemon/772/",
    },
    {
      name: "silvally",
      url: "https://pokeapi.co/api/v2/pokemon/773/",
    },
    {
      name: "komala",
      url: "https://pokeapi.co/api/v2/pokemon/775/",
    },
    {
      name: "drampa",
      url: "https://pokeapi.co/api/v2/pokemon/780/",
    },
    {
      name: "skwovet",
      url: "https://pokeapi.co/api/v2/pokemon/819/",
    },
    {
      name: "greedent",
      url: "https://pokeapi.co/api/v2/pokemon/820/",
    },
    {
      name: "wooloo",
      url: "https://pokeapi.co/api/v2/pokemon/831/",
    },
    {
      name: "dubwool",
      url: "https://pokeapi.co/api/v2/pokemon/832/",
    },
    {
      name: "obstagoon",
      url: "https://pokeapi.co/api/v2/pokemon/862/",
    },
    {
      name: "indeedee-male",
      url: "https://pokeapi.co/api/v2/pokemon/876/",
    },
    {
      name: "wyrdeer",
      url: "https://pokeapi.co/api/v2/pokemon/899/",
    },
    {
      name: "ursaluna",
      url: "https://pokeapi.co/api/v2/pokemon/901/",
    },
    {
      name: "lechonk",
      url: "https://pokeapi.co/api/v2/pokemon/915/",
    },
    {
      name: "oinkologne-male",
      url: "https://pokeapi.co/api/v2/pokemon/916/",
    },
    {
      name: "tandemaus",
      url: "https://pokeapi.co/api/v2/pokemon/924/",
    },
    {
      name: "maushold-family-of-four",
      url: "https://pokeapi.co/api/v2/pokemon/925/",
    },
    {
      name: "smoliv",
      url: "https://pokeapi.co/api/v2/pokemon/928/",
    },
    {
      name: "dolliv",
      url: "https://pokeapi.co/api/v2/pokemon/929/",
    },
    {
      name: "arboliva",
      url: "https://pokeapi.co/api/v2/pokemon/930/",
    },
    {
      name: "squawkabilly-green-plumage",
      url: "https://pokeapi.co/api/v2/pokemon/931/",
    },
    {
      name: "shroodle",
      url: "https://pokeapi.co/api/v2/pokemon/944/",
    },
    {
      name: "grafaiai",
      url: "https://pokeapi.co/api/v2/pokemon/945/",
    },
    {
      name: "cyclizar",
      url: "https://pokeapi.co/api/v2/pokemon/967/",
    },
    {
      name: "farigiraf",
      url: "https://pokeapi.co/api/v2/pokemon/981/",
    },
    {
      name: "dudunsparce-two-segment",
      url: "https://pokeapi.co/api/v2/pokemon/982/",
    },
    {
      name: "terapagos",
      url: "https://pokeapi.co/api/v2/pokemon/1024/",
    },
    {
      name: "meloetta-pirouette",
      url: "https://pokeapi.co/api/v2/pokemon/10018/",
    },
    {
      name: "kangaskhan-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10039/",
    },
    {
      name: "audino-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10069/",
    },
    {
      name: "pidgeot-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10073/",
    },
    {
      name: "lopunny-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10088/",
    },
    {
      name: "rattata-alola",
      url: "https://pokeapi.co/api/v2/pokemon/10091/",
    },
    {
      name: "raticate-alola",
      url: "https://pokeapi.co/api/v2/pokemon/10092/",
    },
    {
      name: "raticate-totem-alola",
      url: "https://pokeapi.co/api/v2/pokemon/10093/",
    },
    {
      name: "gumshoos-totem",
      url: "https://pokeapi.co/api/v2/pokemon/10121/",
    },
    {
      name: "eevee-starter",
      url: "https://pokeapi.co/api/v2/pokemon/10159/",
    },
    {
      name: "zigzagoon-galar",
      url: "https://pokeapi.co/api/v2/pokemon/10174/",
    },
    {
      name: "linoone-galar",
      url: "https://pokeapi.co/api/v2/pokemon/10175/",
    },
    {
      name: "indeedee-female",
      url: "https://pokeapi.co/api/v2/pokemon/10186/",
    },
    {
      name: "meowth-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10200/",
    },
    {
      name: "eevee-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10205/",
    },
    {
      name: "snorlax-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10206/",
    },
    {
      name: "zorua-hisui",
      url: "https://pokeapi.co/api/v2/pokemon/10238/",
    },
    {
      name: "zoroark-hisui",
      url: "https://pokeapi.co/api/v2/pokemon/10239/",
    },
    {
      name: "oinkologne-female",
      url: "https://pokeapi.co/api/v2/pokemon/10254/",
    },
    {
      name: "dudunsparce-three-segment",
      url: "https://pokeapi.co/api/v2/pokemon/10255/",
    },
    {
      name: "maushold-family-of-three",
      url: "https://pokeapi.co/api/v2/pokemon/10257/",
    },
    {
      name: "squawkabilly-blue-plumage",
      url: "https://pokeapi.co/api/v2/pokemon/10260/",
    },
    {
      name: "squawkabilly-yellow-plumage",
      url: "https://pokeapi.co/api/v2/pokemon/10261/",
    },
    {
      name: "squawkabilly-white-plumage",
      url: "https://pokeapi.co/api/v2/pokemon/10262/",
    },
    {
      name: "ursaluna-bloodmoon",
      url: "https://pokeapi.co/api/v2/pokemon/10272/",
    },
    {
      name: "terapagos-terastal",
      url: "https://pokeapi.co/api/v2/pokemon/10276/",
    },
    {
      name: "terapagos-stellar",
      url: "https://pokeapi.co/api/v2/pokemon/10277/",
    },
  ],
  fighting: [
    {
      name: "mankey",
      url: "https://pokeapi.co/api/v2/pokemon/56/",
    },
    {
      name: "primeape",
      url: "https://pokeapi.co/api/v2/pokemon/57/",
    },
    {
      name: "poliwrath",
      url: "https://pokeapi.co/api/v2/pokemon/62/",
    },
    {
      name: "machop",
      url: "https://pokeapi.co/api/v2/pokemon/66/",
    },
    {
      name: "machoke",
      url: "https://pokeapi.co/api/v2/pokemon/67/",
    },
    {
      name: "machamp",
      url: "https://pokeapi.co/api/v2/pokemon/68/",
    },
    {
      name: "hitmonlee",
      url: "https://pokeapi.co/api/v2/pokemon/106/",
    },
    {
      name: "hitmonchan",
      url: "https://pokeapi.co/api/v2/pokemon/107/",
    },
    {
      name: "heracross",
      url: "https://pokeapi.co/api/v2/pokemon/214/",
    },
    {
      name: "tyrogue",
      url: "https://pokeapi.co/api/v2/pokemon/236/",
    },
    {
      name: "hitmontop",
      url: "https://pokeapi.co/api/v2/pokemon/237/",
    },
    {
      name: "combusken",
      url: "https://pokeapi.co/api/v2/pokemon/256/",
    },
    {
      name: "blaziken",
      url: "https://pokeapi.co/api/v2/pokemon/257/",
    },
    {
      name: "breloom",
      url: "https://pokeapi.co/api/v2/pokemon/286/",
    },
    {
      name: "makuhita",
      url: "https://pokeapi.co/api/v2/pokemon/296/",
    },
    {
      name: "hariyama",
      url: "https://pokeapi.co/api/v2/pokemon/297/",
    },
    {
      name: "meditite",
      url: "https://pokeapi.co/api/v2/pokemon/307/",
    },
    {
      name: "medicham",
      url: "https://pokeapi.co/api/v2/pokemon/308/",
    },
    {
      name: "monferno",
      url: "https://pokeapi.co/api/v2/pokemon/391/",
    },
    {
      name: "infernape",
      url: "https://pokeapi.co/api/v2/pokemon/392/",
    },
    {
      name: "riolu",
      url: "https://pokeapi.co/api/v2/pokemon/447/",
    },
    {
      name: "lucario",
      url: "https://pokeapi.co/api/v2/pokemon/448/",
    },
    {
      name: "croagunk",
      url: "https://pokeapi.co/api/v2/pokemon/453/",
    },
    {
      name: "toxicroak",
      url: "https://pokeapi.co/api/v2/pokemon/454/",
    },
    {
      name: "gallade",
      url: "https://pokeapi.co/api/v2/pokemon/475/",
    },
    {
      name: "pignite",
      url: "https://pokeapi.co/api/v2/pokemon/499/",
    },
    {
      name: "emboar",
      url: "https://pokeapi.co/api/v2/pokemon/500/",
    },
    {
      name: "timburr",
      url: "https://pokeapi.co/api/v2/pokemon/532/",
    },
    {
      name: "gurdurr",
      url: "https://pokeapi.co/api/v2/pokemon/533/",
    },
    {
      name: "conkeldurr",
      url: "https://pokeapi.co/api/v2/pokemon/534/",
    },
    {
      name: "throh",
      url: "https://pokeapi.co/api/v2/pokemon/538/",
    },
    {
      name: "sawk",
      url: "https://pokeapi.co/api/v2/pokemon/539/",
    },
    {
      name: "scraggy",
      url: "https://pokeapi.co/api/v2/pokemon/559/",
    },
    {
      name: "scrafty",
      url: "https://pokeapi.co/api/v2/pokemon/560/",
    },
    {
      name: "mienfoo",
      url: "https://pokeapi.co/api/v2/pokemon/619/",
    },
    {
      name: "mienshao",
      url: "https://pokeapi.co/api/v2/pokemon/620/",
    },
    {
      name: "cobalion",
      url: "https://pokeapi.co/api/v2/pokemon/638/",
    },
    {
      name: "terrakion",
      url: "https://pokeapi.co/api/v2/pokemon/639/",
    },
    {
      name: "virizion",
      url: "https://pokeapi.co/api/v2/pokemon/640/",
    },
    {
      name: "keldeo-ordinary",
      url: "https://pokeapi.co/api/v2/pokemon/647/",
    },
    {
      name: "chesnaught",
      url: "https://pokeapi.co/api/v2/pokemon/652/",
    },
    {
      name: "pancham",
      url: "https://pokeapi.co/api/v2/pokemon/674/",
    },
    {
      name: "pangoro",
      url: "https://pokeapi.co/api/v2/pokemon/675/",
    },
    {
      name: "hawlucha",
      url: "https://pokeapi.co/api/v2/pokemon/701/",
    },
    {
      name: "crabrawler",
      url: "https://pokeapi.co/api/v2/pokemon/739/",
    },
    {
      name: "crabominable",
      url: "https://pokeapi.co/api/v2/pokemon/740/",
    },
    {
      name: "stufful",
      url: "https://pokeapi.co/api/v2/pokemon/759/",
    },
    {
      name: "bewear",
      url: "https://pokeapi.co/api/v2/pokemon/760/",
    },
    {
      name: "passimian",
      url: "https://pokeapi.co/api/v2/pokemon/766/",
    },
    {
      name: "hakamo-o",
      url: "https://pokeapi.co/api/v2/pokemon/783/",
    },
    {
      name: "kommo-o",
      url: "https://pokeapi.co/api/v2/pokemon/784/",
    },
    {
      name: "buzzwole",
      url: "https://pokeapi.co/api/v2/pokemon/794/",
    },
    {
      name: "pheromosa",
      url: "https://pokeapi.co/api/v2/pokemon/795/",
    },
    {
      name: "marshadow",
      url: "https://pokeapi.co/api/v2/pokemon/802/",
    },
    {
      name: "clobbopus",
      url: "https://pokeapi.co/api/v2/pokemon/852/",
    },
    {
      name: "grapploct",
      url: "https://pokeapi.co/api/v2/pokemon/853/",
    },
    {
      name: "sirfetchd",
      url: "https://pokeapi.co/api/v2/pokemon/865/",
    },
    {
      name: "falinks",
      url: "https://pokeapi.co/api/v2/pokemon/870/",
    },
    {
      name: "zamazenta",
      url: "https://pokeapi.co/api/v2/pokemon/889/",
    },
    {
      name: "kubfu",
      url: "https://pokeapi.co/api/v2/pokemon/891/",
    },
    {
      name: "urshifu-single-strike",
      url: "https://pokeapi.co/api/v2/pokemon/892/",
    },
    {
      name: "sneasler",
      url: "https://pokeapi.co/api/v2/pokemon/903/",
    },
    {
      name: "quaquaval",
      url: "https://pokeapi.co/api/v2/pokemon/914/",
    },
    {
      name: "pawmo",
      url: "https://pokeapi.co/api/v2/pokemon/922/",
    },
    {
      name: "pawmot",
      url: "https://pokeapi.co/api/v2/pokemon/923/",
    },
    {
      name: "flamigo",
      url: "https://pokeapi.co/api/v2/pokemon/973/",
    },
    {
      name: "annihilape",
      url: "https://pokeapi.co/api/v2/pokemon/979/",
    },
    {
      name: "great-tusk",
      url: "https://pokeapi.co/api/v2/pokemon/984/",
    },
    {
      name: "slither-wing",
      url: "https://pokeapi.co/api/v2/pokemon/988/",
    },
    {
      name: "iron-hands",
      url: "https://pokeapi.co/api/v2/pokemon/992/",
    },
    {
      name: "iron-valiant",
      url: "https://pokeapi.co/api/v2/pokemon/1006/",
    },
    {
      name: "koraidon",
      url: "https://pokeapi.co/api/v2/pokemon/1007/",
    },
    {
      name: "okidogi",
      url: "https://pokeapi.co/api/v2/pokemon/1014/",
    },
    {
      name: "meloetta-pirouette",
      url: "https://pokeapi.co/api/v2/pokemon/10018/",
    },
    {
      name: "keldeo-resolute",
      url: "https://pokeapi.co/api/v2/pokemon/10024/",
    },
    {
      name: "mewtwo-mega-x",
      url: "https://pokeapi.co/api/v2/pokemon/10043/",
    },
    {
      name: "heracross-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10047/",
    },
    {
      name: "blaziken-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10050/",
    },
    {
      name: "medicham-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10054/",
    },
    {
      name: "lucario-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10059/",
    },
    {
      name: "gallade-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10068/",
    },
    {
      name: "lopunny-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10088/",
    },
    {
      name: "kommo-o-totem",
      url: "https://pokeapi.co/api/v2/pokemon/10146/",
    },
    {
      name: "farfetchd-galar",
      url: "https://pokeapi.co/api/v2/pokemon/10166/",
    },
    {
      name: "zapdos-galar",
      url: "https://pokeapi.co/api/v2/pokemon/10170/",
    },
    {
      name: "zamazenta-crowned",
      url: "https://pokeapi.co/api/v2/pokemon/10189/",
    },
    {
      name: "urshifu-rapid-strike",
      url: "https://pokeapi.co/api/v2/pokemon/10191/",
    },
    {
      name: "machamp-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10201/",
    },
    {
      name: "urshifu-single-strike-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10226/",
    },
    {
      name: "urshifu-rapid-strike-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10227/",
    },
    {
      name: "sneasel-hisui",
      url: "https://pokeapi.co/api/v2/pokemon/10235/",
    },
    {
      name: "lilligant-hisui",
      url: "https://pokeapi.co/api/v2/pokemon/10237/",
    },
    {
      name: "decidueye-hisui",
      url: "https://pokeapi.co/api/v2/pokemon/10244/",
    },
    {
      name: "tauros-paldea-combat-breed",
      url: "https://pokeapi.co/api/v2/pokemon/10250/",
    },
    {
      name: "tauros-paldea-blaze-breed",
      url: "https://pokeapi.co/api/v2/pokemon/10251/",
    },
    {
      name: "tauros-paldea-aqua-breed",
      url: "https://pokeapi.co/api/v2/pokemon/10252/",
    },
    {
      name: "koraidon-limited-build",
      url: "https://pokeapi.co/api/v2/pokemon/10264/",
    },
    {
      name: "koraidon-sprinting-build",
      url: "https://pokeapi.co/api/v2/pokemon/10265/",
    },
    {
      name: "koraidon-swimming-build",
      url: "https://pokeapi.co/api/v2/pokemon/10266/",
    },
    {
      name: "koraidon-gliding-build",
      url: "https://pokeapi.co/api/v2/pokemon/10267/",
    },
  ],
  flying: [
    {
      name: "charizard",
      url: "https://pokeapi.co/api/v2/pokemon/6/",
    },
    {
      name: "butterfree",
      url: "https://pokeapi.co/api/v2/pokemon/12/",
    },
    {
      name: "pidgey",
      url: "https://pokeapi.co/api/v2/pokemon/16/",
    },
    {
      name: "pidgeotto",
      url: "https://pokeapi.co/api/v2/pokemon/17/",
    },
    {
      name: "pidgeot",
      url: "https://pokeapi.co/api/v2/pokemon/18/",
    },
    {
      name: "spearow",
      url: "https://pokeapi.co/api/v2/pokemon/21/",
    },
    {
      name: "fearow",
      url: "https://pokeapi.co/api/v2/pokemon/22/",
    },
    {
      name: "zubat",
      url: "https://pokeapi.co/api/v2/pokemon/41/",
    },
    {
      name: "golbat",
      url: "https://pokeapi.co/api/v2/pokemon/42/",
    },
    {
      name: "farfetchd",
      url: "https://pokeapi.co/api/v2/pokemon/83/",
    },
    {
      name: "doduo",
      url: "https://pokeapi.co/api/v2/pokemon/84/",
    },
    {
      name: "dodrio",
      url: "https://pokeapi.co/api/v2/pokemon/85/",
    },
    {
      name: "scyther",
      url: "https://pokeapi.co/api/v2/pokemon/123/",
    },
    {
      name: "gyarados",
      url: "https://pokeapi.co/api/v2/pokemon/130/",
    },
    {
      name: "aerodactyl",
      url: "https://pokeapi.co/api/v2/pokemon/142/",
    },
    {
      name: "articuno",
      url: "https://pokeapi.co/api/v2/pokemon/144/",
    },
    {
      name: "zapdos",
      url: "https://pokeapi.co/api/v2/pokemon/145/",
    },
    {
      name: "moltres",
      url: "https://pokeapi.co/api/v2/pokemon/146/",
    },
    {
      name: "dragonite",
      url: "https://pokeapi.co/api/v2/pokemon/149/",
    },
    {
      name: "hoothoot",
      url: "https://pokeapi.co/api/v2/pokemon/163/",
    },
    {
      name: "noctowl",
      url: "https://pokeapi.co/api/v2/pokemon/164/",
    },
    {
      name: "ledyba",
      url: "https://pokeapi.co/api/v2/pokemon/165/",
    },
    {
      name: "ledian",
      url: "https://pokeapi.co/api/v2/pokemon/166/",
    },
    {
      name: "crobat",
      url: "https://pokeapi.co/api/v2/pokemon/169/",
    },
    {
      name: "togetic",
      url: "https://pokeapi.co/api/v2/pokemon/176/",
    },
    {
      name: "natu",
      url: "https://pokeapi.co/api/v2/pokemon/177/",
    },
    {
      name: "xatu",
      url: "https://pokeapi.co/api/v2/pokemon/178/",
    },
    {
      name: "hoppip",
      url: "https://pokeapi.co/api/v2/pokemon/187/",
    },
    {
      name: "skiploom",
      url: "https://pokeapi.co/api/v2/pokemon/188/",
    },
    {
      name: "jumpluff",
      url: "https://pokeapi.co/api/v2/pokemon/189/",
    },
    {
      name: "yanma",
      url: "https://pokeapi.co/api/v2/pokemon/193/",
    },
    {
      name: "murkrow",
      url: "https://pokeapi.co/api/v2/pokemon/198/",
    },
    {
      name: "gligar",
      url: "https://pokeapi.co/api/v2/pokemon/207/",
    },
    {
      name: "delibird",
      url: "https://pokeapi.co/api/v2/pokemon/225/",
    },
    {
      name: "mantine",
      url: "https://pokeapi.co/api/v2/pokemon/226/",
    },
    {
      name: "skarmory",
      url: "https://pokeapi.co/api/v2/pokemon/227/",
    },
    {
      name: "lugia",
      url: "https://pokeapi.co/api/v2/pokemon/249/",
    },
    {
      name: "ho-oh",
      url: "https://pokeapi.co/api/v2/pokemon/250/",
    },
    {
      name: "beautifly",
      url: "https://pokeapi.co/api/v2/pokemon/267/",
    },
    {
      name: "taillow",
      url: "https://pokeapi.co/api/v2/pokemon/276/",
    },
    {
      name: "swellow",
      url: "https://pokeapi.co/api/v2/pokemon/277/",
    },
    {
      name: "wingull",
      url: "https://pokeapi.co/api/v2/pokemon/278/",
    },
    {
      name: "pelipper",
      url: "https://pokeapi.co/api/v2/pokemon/279/",
    },
    {
      name: "masquerain",
      url: "https://pokeapi.co/api/v2/pokemon/284/",
    },
    {
      name: "ninjask",
      url: "https://pokeapi.co/api/v2/pokemon/291/",
    },
    {
      name: "swablu",
      url: "https://pokeapi.co/api/v2/pokemon/333/",
    },
    {
      name: "altaria",
      url: "https://pokeapi.co/api/v2/pokemon/334/",
    },
    {
      name: "tropius",
      url: "https://pokeapi.co/api/v2/pokemon/357/",
    },
    {
      name: "salamence",
      url: "https://pokeapi.co/api/v2/pokemon/373/",
    },
    {
      name: "rayquaza",
      url: "https://pokeapi.co/api/v2/pokemon/384/",
    },
    {
      name: "starly",
      url: "https://pokeapi.co/api/v2/pokemon/396/",
    },
    {
      name: "staravia",
      url: "https://pokeapi.co/api/v2/pokemon/397/",
    },
    {
      name: "staraptor",
      url: "https://pokeapi.co/api/v2/pokemon/398/",
    },
    {
      name: "mothim",
      url: "https://pokeapi.co/api/v2/pokemon/414/",
    },
    {
      name: "combee",
      url: "https://pokeapi.co/api/v2/pokemon/415/",
    },
    {
      name: "vespiquen",
      url: "https://pokeapi.co/api/v2/pokemon/416/",
    },
    {
      name: "drifloon",
      url: "https://pokeapi.co/api/v2/pokemon/425/",
    },
    {
      name: "drifblim",
      url: "https://pokeapi.co/api/v2/pokemon/426/",
    },
    {
      name: "honchkrow",
      url: "https://pokeapi.co/api/v2/pokemon/430/",
    },
    {
      name: "chatot",
      url: "https://pokeapi.co/api/v2/pokemon/441/",
    },
    {
      name: "mantyke",
      url: "https://pokeapi.co/api/v2/pokemon/458/",
    },
    {
      name: "togekiss",
      url: "https://pokeapi.co/api/v2/pokemon/468/",
    },
    {
      name: "yanmega",
      url: "https://pokeapi.co/api/v2/pokemon/469/",
    },
    {
      name: "gliscor",
      url: "https://pokeapi.co/api/v2/pokemon/472/",
    },
    {
      name: "pidove",
      url: "https://pokeapi.co/api/v2/pokemon/519/",
    },
    {
      name: "tranquill",
      url: "https://pokeapi.co/api/v2/pokemon/520/",
    },
    {
      name: "unfezant",
      url: "https://pokeapi.co/api/v2/pokemon/521/",
    },
    {
      name: "woobat",
      url: "https://pokeapi.co/api/v2/pokemon/527/",
    },
    {
      name: "swoobat",
      url: "https://pokeapi.co/api/v2/pokemon/528/",
    },
    {
      name: "sigilyph",
      url: "https://pokeapi.co/api/v2/pokemon/561/",
    },
    {
      name: "archen",
      url: "https://pokeapi.co/api/v2/pokemon/566/",
    },
    {
      name: "archeops",
      url: "https://pokeapi.co/api/v2/pokemon/567/",
    },
    {
      name: "ducklett",
      url: "https://pokeapi.co/api/v2/pokemon/580/",
    },
    {
      name: "swanna",
      url: "https://pokeapi.co/api/v2/pokemon/581/",
    },
    {
      name: "emolga",
      url: "https://pokeapi.co/api/v2/pokemon/587/",
    },
    {
      name: "rufflet",
      url: "https://pokeapi.co/api/v2/pokemon/627/",
    },
    {
      name: "braviary",
      url: "https://pokeapi.co/api/v2/pokemon/628/",
    },
    {
      name: "vullaby",
      url: "https://pokeapi.co/api/v2/pokemon/629/",
    },
    {
      name: "mandibuzz",
      url: "https://pokeapi.co/api/v2/pokemon/630/",
    },
    {
      name: "tornadus-incarnate",
      url: "https://pokeapi.co/api/v2/pokemon/641/",
    },
    {
      name: "thundurus-incarnate",
      url: "https://pokeapi.co/api/v2/pokemon/642/",
    },
    {
      name: "landorus-incarnate",
      url: "https://pokeapi.co/api/v2/pokemon/645/",
    },
    {
      name: "fletchling",
      url: "https://pokeapi.co/api/v2/pokemon/661/",
    },
    {
      name: "fletchinder",
      url: "https://pokeapi.co/api/v2/pokemon/662/",
    },
    {
      name: "talonflame",
      url: "https://pokeapi.co/api/v2/pokemon/663/",
    },
    {
      name: "vivillon",
      url: "https://pokeapi.co/api/v2/pokemon/666/",
    },
    {
      name: "hawlucha",
      url: "https://pokeapi.co/api/v2/pokemon/701/",
    },
    {
      name: "noibat",
      url: "https://pokeapi.co/api/v2/pokemon/714/",
    },
    {
      name: "noivern",
      url: "https://pokeapi.co/api/v2/pokemon/715/",
    },
    {
      name: "yveltal",
      url: "https://pokeapi.co/api/v2/pokemon/717/",
    },
    {
      name: "rowlet",
      url: "https://pokeapi.co/api/v2/pokemon/722/",
    },
    {
      name: "dartrix",
      url: "https://pokeapi.co/api/v2/pokemon/723/",
    },
    {
      name: "pikipek",
      url: "https://pokeapi.co/api/v2/pokemon/731/",
    },
    {
      name: "trumbeak",
      url: "https://pokeapi.co/api/v2/pokemon/732/",
    },
    {
      name: "toucannon",
      url: "https://pokeapi.co/api/v2/pokemon/733/",
    },
    {
      name: "oricorio-baile",
      url: "https://pokeapi.co/api/v2/pokemon/741/",
    },
    {
      name: "minior-red-meteor",
      url: "https://pokeapi.co/api/v2/pokemon/774/",
    },
    {
      name: "celesteela",
      url: "https://pokeapi.co/api/v2/pokemon/797/",
    },
    {
      name: "rookidee",
      url: "https://pokeapi.co/api/v2/pokemon/821/",
    },
    {
      name: "corvisquire",
      url: "https://pokeapi.co/api/v2/pokemon/822/",
    },
    {
      name: "corviknight",
      url: "https://pokeapi.co/api/v2/pokemon/823/",
    },
    {
      name: "cramorant",
      url: "https://pokeapi.co/api/v2/pokemon/845/",
    },
    {
      name: "enamorus-incarnate",
      url: "https://pokeapi.co/api/v2/pokemon/905/",
    },
    {
      name: "squawkabilly-green-plumage",
      url: "https://pokeapi.co/api/v2/pokemon/931/",
    },
    {
      name: "wattrel",
      url: "https://pokeapi.co/api/v2/pokemon/940/",
    },
    {
      name: "kilowattrel",
      url: "https://pokeapi.co/api/v2/pokemon/941/",
    },
    {
      name: "bombirdier",
      url: "https://pokeapi.co/api/v2/pokemon/962/",
    },
    {
      name: "flamigo",
      url: "https://pokeapi.co/api/v2/pokemon/973/",
    },
    {
      name: "iron-jugulis",
      url: "https://pokeapi.co/api/v2/pokemon/993/",
    },
    {
      name: "shaymin-sky",
      url: "https://pokeapi.co/api/v2/pokemon/10006/",
    },
    {
      name: "rotom-fan",
      url: "https://pokeapi.co/api/v2/pokemon/10011/",
    },
    {
      name: "tornadus-therian",
      url: "https://pokeapi.co/api/v2/pokemon/10019/",
    },
    {
      name: "thundurus-therian",
      url: "https://pokeapi.co/api/v2/pokemon/10020/",
    },
    {
      name: "landorus-therian",
      url: "https://pokeapi.co/api/v2/pokemon/10021/",
    },
    {
      name: "charizard-mega-y",
      url: "https://pokeapi.co/api/v2/pokemon/10035/",
    },
    {
      name: "pinsir-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10040/",
    },
    {
      name: "aerodactyl-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10042/",
    },
    {
      name: "pidgeot-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10073/",
    },
    {
      name: "rayquaza-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10079/",
    },
    {
      name: "salamence-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10089/",
    },
    {
      name: "oricorio-pom-pom",
      url: "https://pokeapi.co/api/v2/pokemon/10123/",
    },
    {
      name: "oricorio-pau",
      url: "https://pokeapi.co/api/v2/pokemon/10124/",
    },
    {
      name: "oricorio-sensu",
      url: "https://pokeapi.co/api/v2/pokemon/10125/",
    },
    {
      name: "minior-orange-meteor",
      url: "https://pokeapi.co/api/v2/pokemon/10130/",
    },
    {
      name: "minior-yellow-meteor",
      url: "https://pokeapi.co/api/v2/pokemon/10131/",
    },
    {
      name: "minior-green-meteor",
      url: "https://pokeapi.co/api/v2/pokemon/10132/",
    },
    {
      name: "minior-blue-meteor",
      url: "https://pokeapi.co/api/v2/pokemon/10133/",
    },
    {
      name: "minior-indigo-meteor",
      url: "https://pokeapi.co/api/v2/pokemon/10134/",
    },
    {
      name: "minior-violet-meteor",
      url: "https://pokeapi.co/api/v2/pokemon/10135/",
    },
    {
      name: "minior-red",
      url: "https://pokeapi.co/api/v2/pokemon/10136/",
    },
    {
      name: "minior-orange",
      url: "https://pokeapi.co/api/v2/pokemon/10137/",
    },
    {
      name: "minior-yellow",
      url: "https://pokeapi.co/api/v2/pokemon/10138/",
    },
    {
      name: "minior-green",
      url: "https://pokeapi.co/api/v2/pokemon/10139/",
    },
    {
      name: "minior-blue",
      url: "https://pokeapi.co/api/v2/pokemon/10140/",
    },
    {
      name: "minior-indigo",
      url: "https://pokeapi.co/api/v2/pokemon/10141/",
    },
    {
      name: "minior-violet",
      url: "https://pokeapi.co/api/v2/pokemon/10142/",
    },
    {
      name: "articuno-galar",
      url: "https://pokeapi.co/api/v2/pokemon/10169/",
    },
    {
      name: "zapdos-galar",
      url: "https://pokeapi.co/api/v2/pokemon/10170/",
    },
    {
      name: "moltres-galar",
      url: "https://pokeapi.co/api/v2/pokemon/10171/",
    },
    {
      name: "cramorant-gulping",
      url: "https://pokeapi.co/api/v2/pokemon/10182/",
    },
    {
      name: "cramorant-gorging",
      url: "https://pokeapi.co/api/v2/pokemon/10183/",
    },
    {
      name: "charizard-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10196/",
    },
    {
      name: "butterfree-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10198/",
    },
    {
      name: "corviknight-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10212/",
    },
    {
      name: "braviary-hisui",
      url: "https://pokeapi.co/api/v2/pokemon/10240/",
    },
    {
      name: "enamorus-therian",
      url: "https://pokeapi.co/api/v2/pokemon/10249/",
    },
    {
      name: "squawkabilly-blue-plumage",
      url: "https://pokeapi.co/api/v2/pokemon/10260/",
    },
    {
      name: "squawkabilly-yellow-plumage",
      url: "https://pokeapi.co/api/v2/pokemon/10261/",
    },
    {
      name: "squawkabilly-white-plumage",
      url: "https://pokeapi.co/api/v2/pokemon/10262/",
    },
  ],
  poison: [
    {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
    },
    {
      name: "ivysaur",
      url: "https://pokeapi.co/api/v2/pokemon/2/",
    },
    {
      name: "venusaur",
      url: "https://pokeapi.co/api/v2/pokemon/3/",
    },
    {
      name: "weedle",
      url: "https://pokeapi.co/api/v2/pokemon/13/",
    },
    {
      name: "kakuna",
      url: "https://pokeapi.co/api/v2/pokemon/14/",
    },
    {
      name: "beedrill",
      url: "https://pokeapi.co/api/v2/pokemon/15/",
    },
    {
      name: "ekans",
      url: "https://pokeapi.co/api/v2/pokemon/23/",
    },
    {
      name: "arbok",
      url: "https://pokeapi.co/api/v2/pokemon/24/",
    },
    {
      name: "nidoran-f",
      url: "https://pokeapi.co/api/v2/pokemon/29/",
    },
    {
      name: "nidorina",
      url: "https://pokeapi.co/api/v2/pokemon/30/",
    },
    {
      name: "nidoqueen",
      url: "https://pokeapi.co/api/v2/pokemon/31/",
    },
    {
      name: "nidoran-m",
      url: "https://pokeapi.co/api/v2/pokemon/32/",
    },
    {
      name: "nidorino",
      url: "https://pokeapi.co/api/v2/pokemon/33/",
    },
    {
      name: "nidoking",
      url: "https://pokeapi.co/api/v2/pokemon/34/",
    },
    {
      name: "zubat",
      url: "https://pokeapi.co/api/v2/pokemon/41/",
    },
    {
      name: "golbat",
      url: "https://pokeapi.co/api/v2/pokemon/42/",
    },
    {
      name: "oddish",
      url: "https://pokeapi.co/api/v2/pokemon/43/",
    },
    {
      name: "gloom",
      url: "https://pokeapi.co/api/v2/pokemon/44/",
    },
    {
      name: "vileplume",
      url: "https://pokeapi.co/api/v2/pokemon/45/",
    },
    {
      name: "venonat",
      url: "https://pokeapi.co/api/v2/pokemon/48/",
    },
    {
      name: "venomoth",
      url: "https://pokeapi.co/api/v2/pokemon/49/",
    },
    {
      name: "bellsprout",
      url: "https://pokeapi.co/api/v2/pokemon/69/",
    },
    {
      name: "weepinbell",
      url: "https://pokeapi.co/api/v2/pokemon/70/",
    },
    {
      name: "victreebel",
      url: "https://pokeapi.co/api/v2/pokemon/71/",
    },
    {
      name: "tentacool",
      url: "https://pokeapi.co/api/v2/pokemon/72/",
    },
    {
      name: "tentacruel",
      url: "https://pokeapi.co/api/v2/pokemon/73/",
    },
    {
      name: "grimer",
      url: "https://pokeapi.co/api/v2/pokemon/88/",
    },
    {
      name: "muk",
      url: "https://pokeapi.co/api/v2/pokemon/89/",
    },
    {
      name: "gastly",
      url: "https://pokeapi.co/api/v2/pokemon/92/",
    },
    {
      name: "haunter",
      url: "https://pokeapi.co/api/v2/pokemon/93/",
    },
    {
      name: "gengar",
      url: "https://pokeapi.co/api/v2/pokemon/94/",
    },
    {
      name: "koffing",
      url: "https://pokeapi.co/api/v2/pokemon/109/",
    },
    {
      name: "weezing",
      url: "https://pokeapi.co/api/v2/pokemon/110/",
    },
    {
      name: "spinarak",
      url: "https://pokeapi.co/api/v2/pokemon/167/",
    },
    {
      name: "ariados",
      url: "https://pokeapi.co/api/v2/pokemon/168/",
    },
    {
      name: "crobat",
      url: "https://pokeapi.co/api/v2/pokemon/169/",
    },
    {
      name: "qwilfish",
      url: "https://pokeapi.co/api/v2/pokemon/211/",
    },
    {
      name: "dustox",
      url: "https://pokeapi.co/api/v2/pokemon/269/",
    },
    {
      name: "roselia",
      url: "https://pokeapi.co/api/v2/pokemon/315/",
    },
    {
      name: "gulpin",
      url: "https://pokeapi.co/api/v2/pokemon/316/",
    },
    {
      name: "swalot",
      url: "https://pokeapi.co/api/v2/pokemon/317/",
    },
    {
      name: "seviper",
      url: "https://pokeapi.co/api/v2/pokemon/336/",
    },
    {
      name: "budew",
      url: "https://pokeapi.co/api/v2/pokemon/406/",
    },
    {
      name: "roserade",
      url: "https://pokeapi.co/api/v2/pokemon/407/",
    },
    {
      name: "stunky",
      url: "https://pokeapi.co/api/v2/pokemon/434/",
    },
    {
      name: "skuntank",
      url: "https://pokeapi.co/api/v2/pokemon/435/",
    },
    {
      name: "skorupi",
      url: "https://pokeapi.co/api/v2/pokemon/451/",
    },
    {
      name: "drapion",
      url: "https://pokeapi.co/api/v2/pokemon/452/",
    },
    {
      name: "croagunk",
      url: "https://pokeapi.co/api/v2/pokemon/453/",
    },
    {
      name: "toxicroak",
      url: "https://pokeapi.co/api/v2/pokemon/454/",
    },
    {
      name: "venipede",
      url: "https://pokeapi.co/api/v2/pokemon/543/",
    },
    {
      name: "whirlipede",
      url: "https://pokeapi.co/api/v2/pokemon/544/",
    },
    {
      name: "scolipede",
      url: "https://pokeapi.co/api/v2/pokemon/545/",
    },
    {
      name: "trubbish",
      url: "https://pokeapi.co/api/v2/pokemon/568/",
    },
    {
      name: "garbodor",
      url: "https://pokeapi.co/api/v2/pokemon/569/",
    },
    {
      name: "foongus",
      url: "https://pokeapi.co/api/v2/pokemon/590/",
    },
    {
      name: "amoonguss",
      url: "https://pokeapi.co/api/v2/pokemon/591/",
    },
    {
      name: "skrelp",
      url: "https://pokeapi.co/api/v2/pokemon/690/",
    },
    {
      name: "dragalge",
      url: "https://pokeapi.co/api/v2/pokemon/691/",
    },
    {
      name: "mareanie",
      url: "https://pokeapi.co/api/v2/pokemon/747/",
    },
    {
      name: "toxapex",
      url: "https://pokeapi.co/api/v2/pokemon/748/",
    },
    {
      name: "salandit",
      url: "https://pokeapi.co/api/v2/pokemon/757/",
    },
    {
      name: "salazzle",
      url: "https://pokeapi.co/api/v2/pokemon/758/",
    },
    {
      name: "nihilego",
      url: "https://pokeapi.co/api/v2/pokemon/793/",
    },
    {
      name: "poipole",
      url: "https://pokeapi.co/api/v2/pokemon/803/",
    },
    {
      name: "naganadel",
      url: "https://pokeapi.co/api/v2/pokemon/804/",
    },
    {
      name: "toxel",
      url: "https://pokeapi.co/api/v2/pokemon/848/",
    },
    {
      name: "toxtricity-amped",
      url: "https://pokeapi.co/api/v2/pokemon/849/",
    },
    {
      name: "eternatus",
      url: "https://pokeapi.co/api/v2/pokemon/890/",
    },
    {
      name: "sneasler",
      url: "https://pokeapi.co/api/v2/pokemon/903/",
    },
    {
      name: "overqwil",
      url: "https://pokeapi.co/api/v2/pokemon/904/",
    },
    {
      name: "shroodle",
      url: "https://pokeapi.co/api/v2/pokemon/944/",
    },
    {
      name: "grafaiai",
      url: "https://pokeapi.co/api/v2/pokemon/945/",
    },
    {
      name: "varoom",
      url: "https://pokeapi.co/api/v2/pokemon/965/",
    },
    {
      name: "revavroom",
      url: "https://pokeapi.co/api/v2/pokemon/966/",
    },
    {
      name: "glimmet",
      url: "https://pokeapi.co/api/v2/pokemon/969/",
    },
    {
      name: "glimmora",
      url: "https://pokeapi.co/api/v2/pokemon/970/",
    },
    {
      name: "clodsire",
      url: "https://pokeapi.co/api/v2/pokemon/980/",
    },
    {
      name: "iron-moth",
      url: "https://pokeapi.co/api/v2/pokemon/994/",
    },
    {
      name: "okidogi",
      url: "https://pokeapi.co/api/v2/pokemon/1014/",
    },
    {
      name: "munkidori",
      url: "https://pokeapi.co/api/v2/pokemon/1015/",
    },
    {
      name: "fezandipiti",
      url: "https://pokeapi.co/api/v2/pokemon/1016/",
    },
    {
      name: "pecharunt",
      url: "https://pokeapi.co/api/v2/pokemon/1025/",
    },
    {
      name: "venusaur-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10033/",
    },
    {
      name: "gengar-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10038/",
    },
    {
      name: "beedrill-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10090/",
    },
    {
      name: "grimer-alola",
      url: "https://pokeapi.co/api/v2/pokemon/10112/",
    },
    {
      name: "muk-alola",
      url: "https://pokeapi.co/api/v2/pokemon/10113/",
    },
    {
      name: "salazzle-totem",
      url: "https://pokeapi.co/api/v2/pokemon/10129/",
    },
    {
      name: "slowbro-galar",
      url: "https://pokeapi.co/api/v2/pokemon/10165/",
    },
    {
      name: "weezing-galar",
      url: "https://pokeapi.co/api/v2/pokemon/10167/",
    },
    {
      name: "slowking-galar",
      url: "https://pokeapi.co/api/v2/pokemon/10172/",
    },
    {
      name: "toxtricity-low-key",
      url: "https://pokeapi.co/api/v2/pokemon/10184/",
    },
    {
      name: "eternatus-eternamax",
      url: "https://pokeapi.co/api/v2/pokemon/10190/",
    },
    {
      name: "venusaur-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10195/",
    },
    {
      name: "gengar-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10202/",
    },
    {
      name: "garbodor-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10207/",
    },
    {
      name: "toxtricity-amped-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10219/",
    },
    {
      name: "toxtricity-low-key-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10228/",
    },
    {
      name: "qwilfish-hisui",
      url: "https://pokeapi.co/api/v2/pokemon/10234/",
    },
    {
      name: "sneasel-hisui",
      url: "https://pokeapi.co/api/v2/pokemon/10235/",
    },
    {
      name: "wooper-paldea",
      url: "https://pokeapi.co/api/v2/pokemon/10253/",
    },
  ],
  ground: [
    {
      name: "sandshrew",
      url: "https://pokeapi.co/api/v2/pokemon/27/",
    },
    {
      name: "sandslash",
      url: "https://pokeapi.co/api/v2/pokemon/28/",
    },
    {
      name: "nidoqueen",
      url: "https://pokeapi.co/api/v2/pokemon/31/",
    },
    {
      name: "nidoking",
      url: "https://pokeapi.co/api/v2/pokemon/34/",
    },
    {
      name: "diglett",
      url: "https://pokeapi.co/api/v2/pokemon/50/",
    },
    {
      name: "dugtrio",
      url: "https://pokeapi.co/api/v2/pokemon/51/",
    },
    {
      name: "geodude",
      url: "https://pokeapi.co/api/v2/pokemon/74/",
    },
    {
      name: "graveler",
      url: "https://pokeapi.co/api/v2/pokemon/75/",
    },
    {
      name: "golem",
      url: "https://pokeapi.co/api/v2/pokemon/76/",
    },
    {
      name: "onix",
      url: "https://pokeapi.co/api/v2/pokemon/95/",
    },
    {
      name: "cubone",
      url: "https://pokeapi.co/api/v2/pokemon/104/",
    },
    {
      name: "marowak",
      url: "https://pokeapi.co/api/v2/pokemon/105/",
    },
    {
      name: "rhyhorn",
      url: "https://pokeapi.co/api/v2/pokemon/111/",
    },
    {
      name: "rhydon",
      url: "https://pokeapi.co/api/v2/pokemon/112/",
    },
    {
      name: "wooper",
      url: "https://pokeapi.co/api/v2/pokemon/194/",
    },
    {
      name: "quagsire",
      url: "https://pokeapi.co/api/v2/pokemon/195/",
    },
    {
      name: "gligar",
      url: "https://pokeapi.co/api/v2/pokemon/207/",
    },
    {
      name: "steelix",
      url: "https://pokeapi.co/api/v2/pokemon/208/",
    },
    {
      name: "swinub",
      url: "https://pokeapi.co/api/v2/pokemon/220/",
    },
    {
      name: "piloswine",
      url: "https://pokeapi.co/api/v2/pokemon/221/",
    },
    {
      name: "phanpy",
      url: "https://pokeapi.co/api/v2/pokemon/231/",
    },
    {
      name: "donphan",
      url: "https://pokeapi.co/api/v2/pokemon/232/",
    },
    {
      name: "larvitar",
      url: "https://pokeapi.co/api/v2/pokemon/246/",
    },
    {
      name: "pupitar",
      url: "https://pokeapi.co/api/v2/pokemon/247/",
    },
    {
      name: "marshtomp",
      url: "https://pokeapi.co/api/v2/pokemon/259/",
    },
    {
      name: "swampert",
      url: "https://pokeapi.co/api/v2/pokemon/260/",
    },
    {
      name: "nincada",
      url: "https://pokeapi.co/api/v2/pokemon/290/",
    },
    {
      name: "numel",
      url: "https://pokeapi.co/api/v2/pokemon/322/",
    },
    {
      name: "camerupt",
      url: "https://pokeapi.co/api/v2/pokemon/323/",
    },
    {
      name: "trapinch",
      url: "https://pokeapi.co/api/v2/pokemon/328/",
    },
    {
      name: "vibrava",
      url: "https://pokeapi.co/api/v2/pokemon/329/",
    },
    {
      name: "flygon",
      url: "https://pokeapi.co/api/v2/pokemon/330/",
    },
    {
      name: "barboach",
      url: "https://pokeapi.co/api/v2/pokemon/339/",
    },
    {
      name: "whiscash",
      url: "https://pokeapi.co/api/v2/pokemon/340/",
    },
    {
      name: "baltoy",
      url: "https://pokeapi.co/api/v2/pokemon/343/",
    },
    {
      name: "claydol",
      url: "https://pokeapi.co/api/v2/pokemon/344/",
    },
    {
      name: "groudon",
      url: "https://pokeapi.co/api/v2/pokemon/383/",
    },
    {
      name: "torterra",
      url: "https://pokeapi.co/api/v2/pokemon/389/",
    },
    {
      name: "gastrodon",
      url: "https://pokeapi.co/api/v2/pokemon/423/",
    },
    {
      name: "gible",
      url: "https://pokeapi.co/api/v2/pokemon/443/",
    },
    {
      name: "gabite",
      url: "https://pokeapi.co/api/v2/pokemon/444/",
    },
    {
      name: "garchomp",
      url: "https://pokeapi.co/api/v2/pokemon/445/",
    },
    {
      name: "hippopotas",
      url: "https://pokeapi.co/api/v2/pokemon/449/",
    },
    {
      name: "hippowdon",
      url: "https://pokeapi.co/api/v2/pokemon/450/",
    },
    {
      name: "rhyperior",
      url: "https://pokeapi.co/api/v2/pokemon/464/",
    },
    {
      name: "gliscor",
      url: "https://pokeapi.co/api/v2/pokemon/472/",
    },
    {
      name: "mamoswine",
      url: "https://pokeapi.co/api/v2/pokemon/473/",
    },
    {
      name: "drilbur",
      url: "https://pokeapi.co/api/v2/pokemon/529/",
    },
    {
      name: "excadrill",
      url: "https://pokeapi.co/api/v2/pokemon/530/",
    },
    {
      name: "palpitoad",
      url: "https://pokeapi.co/api/v2/pokemon/536/",
    },
    {
      name: "seismitoad",
      url: "https://pokeapi.co/api/v2/pokemon/537/",
    },
    {
      name: "sandile",
      url: "https://pokeapi.co/api/v2/pokemon/551/",
    },
    {
      name: "krokorok",
      url: "https://pokeapi.co/api/v2/pokemon/552/",
    },
    {
      name: "krookodile",
      url: "https://pokeapi.co/api/v2/pokemon/553/",
    },
    {
      name: "stunfisk",
      url: "https://pokeapi.co/api/v2/pokemon/618/",
    },
    {
      name: "golett",
      url: "https://pokeapi.co/api/v2/pokemon/622/",
    },
    {
      name: "golurk",
      url: "https://pokeapi.co/api/v2/pokemon/623/",
    },
    {
      name: "landorus-incarnate",
      url: "https://pokeapi.co/api/v2/pokemon/645/",
    },
    {
      name: "diggersby",
      url: "https://pokeapi.co/api/v2/pokemon/660/",
    },
    {
      name: "zygarde-50",
      url: "https://pokeapi.co/api/v2/pokemon/718/",
    },
    {
      name: "mudbray",
      url: "https://pokeapi.co/api/v2/pokemon/749/",
    },
    {
      name: "mudsdale",
      url: "https://pokeapi.co/api/v2/pokemon/750/",
    },
    {
      name: "sandygast",
      url: "https://pokeapi.co/api/v2/pokemon/769/",
    },
    {
      name: "palossand",
      url: "https://pokeapi.co/api/v2/pokemon/770/",
    },
    {
      name: "silicobra",
      url: "https://pokeapi.co/api/v2/pokemon/843/",
    },
    {
      name: "sandaconda",
      url: "https://pokeapi.co/api/v2/pokemon/844/",
    },
    {
      name: "runerigus",
      url: "https://pokeapi.co/api/v2/pokemon/867/",
    },
    {
      name: "ursaluna",
      url: "https://pokeapi.co/api/v2/pokemon/901/",
    },
    {
      name: "toedscool",
      url: "https://pokeapi.co/api/v2/pokemon/948/",
    },
    {
      name: "toedscruel",
      url: "https://pokeapi.co/api/v2/pokemon/949/",
    },
    {
      name: "clodsire",
      url: "https://pokeapi.co/api/v2/pokemon/980/",
    },
    {
      name: "great-tusk",
      url: "https://pokeapi.co/api/v2/pokemon/984/",
    },
    {
      name: "sandy-shocks",
      url: "https://pokeapi.co/api/v2/pokemon/989/",
    },
    {
      name: "iron-treads",
      url: "https://pokeapi.co/api/v2/pokemon/990/",
    },
    {
      name: "ting-lu",
      url: "https://pokeapi.co/api/v2/pokemon/1003/",
    },
    {
      name: "wormadam-sandy",
      url: "https://pokeapi.co/api/v2/pokemon/10004/",
    },
    {
      name: "landorus-therian",
      url: "https://pokeapi.co/api/v2/pokemon/10021/",
    },
    {
      name: "garchomp-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10058/",
    },
    {
      name: "swampert-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10064/",
    },
    {
      name: "steelix-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10072/",
    },
    {
      name: "groudon-primal",
      url: "https://pokeapi.co/api/v2/pokemon/10078/",
    },
    {
      name: "camerupt-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10087/",
    },
    {
      name: "diglett-alola",
      url: "https://pokeapi.co/api/v2/pokemon/10105/",
    },
    {
      name: "dugtrio-alola",
      url: "https://pokeapi.co/api/v2/pokemon/10106/",
    },
    {
      name: "zygarde-10-power-construct",
      url: "https://pokeapi.co/api/v2/pokemon/10118/",
    },
    {
      name: "zygarde-50-power-construct",
      url: "https://pokeapi.co/api/v2/pokemon/10119/",
    },
    {
      name: "zygarde-complete",
      url: "https://pokeapi.co/api/v2/pokemon/10120/",
    },
    {
      name: "yamask-galar",
      url: "https://pokeapi.co/api/v2/pokemon/10179/",
    },
    {
      name: "stunfisk-galar",
      url: "https://pokeapi.co/api/v2/pokemon/10180/",
    },
    {
      name: "zygarde-10",
      url: "https://pokeapi.co/api/v2/pokemon/10181/",
    },
    {
      name: "sandaconda-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10218/",
    },
    {
      name: "wooper-paldea",
      url: "https://pokeapi.co/api/v2/pokemon/10253/",
    },
    {
      name: "ursaluna-bloodmoon",
      url: "https://pokeapi.co/api/v2/pokemon/10272/",
    },
  ],
  rock: [
    {
      name: "geodude",
      url: "https://pokeapi.co/api/v2/pokemon/74/",
    },
    {
      name: "graveler",
      url: "https://pokeapi.co/api/v2/pokemon/75/",
    },
    {
      name: "golem",
      url: "https://pokeapi.co/api/v2/pokemon/76/",
    },
    {
      name: "onix",
      url: "https://pokeapi.co/api/v2/pokemon/95/",
    },
    {
      name: "rhyhorn",
      url: "https://pokeapi.co/api/v2/pokemon/111/",
    },
    {
      name: "rhydon",
      url: "https://pokeapi.co/api/v2/pokemon/112/",
    },
    {
      name: "omanyte",
      url: "https://pokeapi.co/api/v2/pokemon/138/",
    },
    {
      name: "omastar",
      url: "https://pokeapi.co/api/v2/pokemon/139/",
    },
    {
      name: "kabuto",
      url: "https://pokeapi.co/api/v2/pokemon/140/",
    },
    {
      name: "kabutops",
      url: "https://pokeapi.co/api/v2/pokemon/141/",
    },
    {
      name: "aerodactyl",
      url: "https://pokeapi.co/api/v2/pokemon/142/",
    },
    {
      name: "sudowoodo",
      url: "https://pokeapi.co/api/v2/pokemon/185/",
    },
    {
      name: "shuckle",
      url: "https://pokeapi.co/api/v2/pokemon/213/",
    },
    {
      name: "magcargo",
      url: "https://pokeapi.co/api/v2/pokemon/219/",
    },
    {
      name: "corsola",
      url: "https://pokeapi.co/api/v2/pokemon/222/",
    },
    {
      name: "larvitar",
      url: "https://pokeapi.co/api/v2/pokemon/246/",
    },
    {
      name: "pupitar",
      url: "https://pokeapi.co/api/v2/pokemon/247/",
    },
    {
      name: "tyranitar",
      url: "https://pokeapi.co/api/v2/pokemon/248/",
    },
    {
      name: "nosepass",
      url: "https://pokeapi.co/api/v2/pokemon/299/",
    },
    {
      name: "aron",
      url: "https://pokeapi.co/api/v2/pokemon/304/",
    },
    {
      name: "lairon",
      url: "https://pokeapi.co/api/v2/pokemon/305/",
    },
    {
      name: "aggron",
      url: "https://pokeapi.co/api/v2/pokemon/306/",
    },
    {
      name: "lunatone",
      url: "https://pokeapi.co/api/v2/pokemon/337/",
    },
    {
      name: "solrock",
      url: "https://pokeapi.co/api/v2/pokemon/338/",
    },
    {
      name: "lileep",
      url: "https://pokeapi.co/api/v2/pokemon/345/",
    },
    {
      name: "cradily",
      url: "https://pokeapi.co/api/v2/pokemon/346/",
    },
    {
      name: "anorith",
      url: "https://pokeapi.co/api/v2/pokemon/347/",
    },
    {
      name: "armaldo",
      url: "https://pokeapi.co/api/v2/pokemon/348/",
    },
    {
      name: "relicanth",
      url: "https://pokeapi.co/api/v2/pokemon/369/",
    },
    {
      name: "regirock",
      url: "https://pokeapi.co/api/v2/pokemon/377/",
    },
    {
      name: "cranidos",
      url: "https://pokeapi.co/api/v2/pokemon/408/",
    },
    {
      name: "rampardos",
      url: "https://pokeapi.co/api/v2/pokemon/409/",
    },
    {
      name: "shieldon",
      url: "https://pokeapi.co/api/v2/pokemon/410/",
    },
    {
      name: "bastiodon",
      url: "https://pokeapi.co/api/v2/pokemon/411/",
    },
    {
      name: "bonsly",
      url: "https://pokeapi.co/api/v2/pokemon/438/",
    },
    {
      name: "rhyperior",
      url: "https://pokeapi.co/api/v2/pokemon/464/",
    },
    {
      name: "probopass",
      url: "https://pokeapi.co/api/v2/pokemon/476/",
    },
    {
      name: "roggenrola",
      url: "https://pokeapi.co/api/v2/pokemon/524/",
    },
    {
      name: "boldore",
      url: "https://pokeapi.co/api/v2/pokemon/525/",
    },
    {
      name: "gigalith",
      url: "https://pokeapi.co/api/v2/pokemon/526/",
    },
    {
      name: "dwebble",
      url: "https://pokeapi.co/api/v2/pokemon/557/",
    },
    {
      name: "crustle",
      url: "https://pokeapi.co/api/v2/pokemon/558/",
    },
    {
      name: "tirtouga",
      url: "https://pokeapi.co/api/v2/pokemon/564/",
    },
    {
      name: "carracosta",
      url: "https://pokeapi.co/api/v2/pokemon/565/",
    },
    {
      name: "archen",
      url: "https://pokeapi.co/api/v2/pokemon/566/",
    },
    {
      name: "archeops",
      url: "https://pokeapi.co/api/v2/pokemon/567/",
    },
    {
      name: "terrakion",
      url: "https://pokeapi.co/api/v2/pokemon/639/",
    },
    {
      name: "binacle",
      url: "https://pokeapi.co/api/v2/pokemon/688/",
    },
    {
      name: "barbaracle",
      url: "https://pokeapi.co/api/v2/pokemon/689/",
    },
    {
      name: "tyrunt",
      url: "https://pokeapi.co/api/v2/pokemon/696/",
    },
    {
      name: "tyrantrum",
      url: "https://pokeapi.co/api/v2/pokemon/697/",
    },
    {
      name: "amaura",
      url: "https://pokeapi.co/api/v2/pokemon/698/",
    },
    {
      name: "aurorus",
      url: "https://pokeapi.co/api/v2/pokemon/699/",
    },
    {
      name: "carbink",
      url: "https://pokeapi.co/api/v2/pokemon/703/",
    },
    {
      name: "diancie",
      url: "https://pokeapi.co/api/v2/pokemon/719/",
    },
    {
      name: "rockruff",
      url: "https://pokeapi.co/api/v2/pokemon/744/",
    },
    {
      name: "lycanroc-midday",
      url: "https://pokeapi.co/api/v2/pokemon/745/",
    },
    {
      name: "minior-red-meteor",
      url: "https://pokeapi.co/api/v2/pokemon/774/",
    },
    {
      name: "nihilego",
      url: "https://pokeapi.co/api/v2/pokemon/793/",
    },
    {
      name: "stakataka",
      url: "https://pokeapi.co/api/v2/pokemon/805/",
    },
    {
      name: "drednaw",
      url: "https://pokeapi.co/api/v2/pokemon/834/",
    },
    {
      name: "rolycoly",
      url: "https://pokeapi.co/api/v2/pokemon/837/",
    },
    {
      name: "carkol",
      url: "https://pokeapi.co/api/v2/pokemon/838/",
    },
    {
      name: "coalossal",
      url: "https://pokeapi.co/api/v2/pokemon/839/",
    },
    {
      name: "stonjourner",
      url: "https://pokeapi.co/api/v2/pokemon/874/",
    },
    {
      name: "kleavor",
      url: "https://pokeapi.co/api/v2/pokemon/900/",
    },
    {
      name: "nacli",
      url: "https://pokeapi.co/api/v2/pokemon/932/",
    },
    {
      name: "naclstack",
      url: "https://pokeapi.co/api/v2/pokemon/933/",
    },
    {
      name: "garganacl",
      url: "https://pokeapi.co/api/v2/pokemon/934/",
    },
    {
      name: "klawf",
      url: "https://pokeapi.co/api/v2/pokemon/950/",
    },
    {
      name: "glimmet",
      url: "https://pokeapi.co/api/v2/pokemon/969/",
    },
    {
      name: "glimmora",
      url: "https://pokeapi.co/api/v2/pokemon/970/",
    },
    {
      name: "iron-thorns",
      url: "https://pokeapi.co/api/v2/pokemon/995/",
    },
    {
      name: "iron-boulder",
      url: "https://pokeapi.co/api/v2/pokemon/1022/",
    },
    {
      name: "aerodactyl-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10042/",
    },
    {
      name: "tyranitar-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10049/",
    },
    {
      name: "diancie-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10075/",
    },
    {
      name: "geodude-alola",
      url: "https://pokeapi.co/api/v2/pokemon/10109/",
    },
    {
      name: "graveler-alola",
      url: "https://pokeapi.co/api/v2/pokemon/10110/",
    },
    {
      name: "golem-alola",
      url: "https://pokeapi.co/api/v2/pokemon/10111/",
    },
    {
      name: "lycanroc-midnight",
      url: "https://pokeapi.co/api/v2/pokemon/10126/",
    },
    {
      name: "minior-orange-meteor",
      url: "https://pokeapi.co/api/v2/pokemon/10130/",
    },
    {
      name: "minior-yellow-meteor",
      url: "https://pokeapi.co/api/v2/pokemon/10131/",
    },
    {
      name: "minior-green-meteor",
      url: "https://pokeapi.co/api/v2/pokemon/10132/",
    },
    {
      name: "minior-blue-meteor",
      url: "https://pokeapi.co/api/v2/pokemon/10133/",
    },
    {
      name: "minior-indigo-meteor",
      url: "https://pokeapi.co/api/v2/pokemon/10134/",
    },
    {
      name: "minior-violet-meteor",
      url: "https://pokeapi.co/api/v2/pokemon/10135/",
    },
    {
      name: "minior-red",
      url: "https://pokeapi.co/api/v2/pokemon/10136/",
    },
    {
      name: "minior-orange",
      url: "https://pokeapi.co/api/v2/pokemon/10137/",
    },
    {
      name: "minior-yellow",
      url: "https://pokeapi.co/api/v2/pokemon/10138/",
    },
    {
      name: "minior-green",
      url: "https://pokeapi.co/api/v2/pokemon/10139/",
    },
    {
      name: "minior-blue",
      url: "https://pokeapi.co/api/v2/pokemon/10140/",
    },
    {
      name: "minior-indigo",
      url: "https://pokeapi.co/api/v2/pokemon/10141/",
    },
    {
      name: "minior-violet",
      url: "https://pokeapi.co/api/v2/pokemon/10142/",
    },
    {
      name: "rockruff-own-tempo",
      url: "https://pokeapi.co/api/v2/pokemon/10151/",
    },
    {
      name: "lycanroc-dusk",
      url: "https://pokeapi.co/api/v2/pokemon/10152/",
    },
    {
      name: "drednaw-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10214/",
    },
    {
      name: "coalossal-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10215/",
    },
    {
      name: "growlithe-hisui",
      url: "https://pokeapi.co/api/v2/pokemon/10229/",
    },
    {
      name: "arcanine-hisui",
      url: "https://pokeapi.co/api/v2/pokemon/10230/",
    },
    {
      name: "avalugg-hisui",
      url: "https://pokeapi.co/api/v2/pokemon/10243/",
    },
    {
      name: "ogerpon-cornerstone-mask",
      url: "https://pokeapi.co/api/v2/pokemon/10275/",
    },
  ],
  bug: [
    {
      name: "caterpie",
      url: "https://pokeapi.co/api/v2/pokemon/10/",
    },
    {
      name: "metapod",
      url: "https://pokeapi.co/api/v2/pokemon/11/",
    },
    {
      name: "butterfree",
      url: "https://pokeapi.co/api/v2/pokemon/12/",
    },
    {
      name: "weedle",
      url: "https://pokeapi.co/api/v2/pokemon/13/",
    },
    {
      name: "kakuna",
      url: "https://pokeapi.co/api/v2/pokemon/14/",
    },
    {
      name: "beedrill",
      url: "https://pokeapi.co/api/v2/pokemon/15/",
    },
    {
      name: "paras",
      url: "https://pokeapi.co/api/v2/pokemon/46/",
    },
    {
      name: "parasect",
      url: "https://pokeapi.co/api/v2/pokemon/47/",
    },
    {
      name: "venonat",
      url: "https://pokeapi.co/api/v2/pokemon/48/",
    },
    {
      name: "venomoth",
      url: "https://pokeapi.co/api/v2/pokemon/49/",
    },
    {
      name: "scyther",
      url: "https://pokeapi.co/api/v2/pokemon/123/",
    },
    {
      name: "pinsir",
      url: "https://pokeapi.co/api/v2/pokemon/127/",
    },
    {
      name: "ledyba",
      url: "https://pokeapi.co/api/v2/pokemon/165/",
    },
    {
      name: "ledian",
      url: "https://pokeapi.co/api/v2/pokemon/166/",
    },
    {
      name: "spinarak",
      url: "https://pokeapi.co/api/v2/pokemon/167/",
    },
    {
      name: "ariados",
      url: "https://pokeapi.co/api/v2/pokemon/168/",
    },
    {
      name: "yanma",
      url: "https://pokeapi.co/api/v2/pokemon/193/",
    },
    {
      name: "pineco",
      url: "https://pokeapi.co/api/v2/pokemon/204/",
    },
    {
      name: "forretress",
      url: "https://pokeapi.co/api/v2/pokemon/205/",
    },
    {
      name: "scizor",
      url: "https://pokeapi.co/api/v2/pokemon/212/",
    },
    {
      name: "shuckle",
      url: "https://pokeapi.co/api/v2/pokemon/213/",
    },
    {
      name: "heracross",
      url: "https://pokeapi.co/api/v2/pokemon/214/",
    },
    {
      name: "wurmple",
      url: "https://pokeapi.co/api/v2/pokemon/265/",
    },
    {
      name: "silcoon",
      url: "https://pokeapi.co/api/v2/pokemon/266/",
    },
    {
      name: "beautifly",
      url: "https://pokeapi.co/api/v2/pokemon/267/",
    },
    {
      name: "cascoon",
      url: "https://pokeapi.co/api/v2/pokemon/268/",
    },
    {
      name: "dustox",
      url: "https://pokeapi.co/api/v2/pokemon/269/",
    },
    {
      name: "surskit",
      url: "https://pokeapi.co/api/v2/pokemon/283/",
    },
    {
      name: "masquerain",
      url: "https://pokeapi.co/api/v2/pokemon/284/",
    },
    {
      name: "nincada",
      url: "https://pokeapi.co/api/v2/pokemon/290/",
    },
    {
      name: "ninjask",
      url: "https://pokeapi.co/api/v2/pokemon/291/",
    },
    {
      name: "shedinja",
      url: "https://pokeapi.co/api/v2/pokemon/292/",
    },
    {
      name: "volbeat",
      url: "https://pokeapi.co/api/v2/pokemon/313/",
    },
    {
      name: "illumise",
      url: "https://pokeapi.co/api/v2/pokemon/314/",
    },
    {
      name: "anorith",
      url: "https://pokeapi.co/api/v2/pokemon/347/",
    },
    {
      name: "armaldo",
      url: "https://pokeapi.co/api/v2/pokemon/348/",
    },
    {
      name: "kricketot",
      url: "https://pokeapi.co/api/v2/pokemon/401/",
    },
    {
      name: "kricketune",
      url: "https://pokeapi.co/api/v2/pokemon/402/",
    },
    {
      name: "burmy",
      url: "https://pokeapi.co/api/v2/pokemon/412/",
    },
    {
      name: "wormadam-plant",
      url: "https://pokeapi.co/api/v2/pokemon/413/",
    },
    {
      name: "mothim",
      url: "https://pokeapi.co/api/v2/pokemon/414/",
    },
    {
      name: "combee",
      url: "https://pokeapi.co/api/v2/pokemon/415/",
    },
    {
      name: "vespiquen",
      url: "https://pokeapi.co/api/v2/pokemon/416/",
    },
    {
      name: "skorupi",
      url: "https://pokeapi.co/api/v2/pokemon/451/",
    },
    {
      name: "yanmega",
      url: "https://pokeapi.co/api/v2/pokemon/469/",
    },
    {
      name: "sewaddle",
      url: "https://pokeapi.co/api/v2/pokemon/540/",
    },
    {
      name: "swadloon",
      url: "https://pokeapi.co/api/v2/pokemon/541/",
    },
    {
      name: "leavanny",
      url: "https://pokeapi.co/api/v2/pokemon/542/",
    },
    {
      name: "venipede",
      url: "https://pokeapi.co/api/v2/pokemon/543/",
    },
    {
      name: "whirlipede",
      url: "https://pokeapi.co/api/v2/pokemon/544/",
    },
    {
      name: "scolipede",
      url: "https://pokeapi.co/api/v2/pokemon/545/",
    },
    {
      name: "dwebble",
      url: "https://pokeapi.co/api/v2/pokemon/557/",
    },
    {
      name: "crustle",
      url: "https://pokeapi.co/api/v2/pokemon/558/",
    },
    {
      name: "karrablast",
      url: "https://pokeapi.co/api/v2/pokemon/588/",
    },
    {
      name: "escavalier",
      url: "https://pokeapi.co/api/v2/pokemon/589/",
    },
    {
      name: "joltik",
      url: "https://pokeapi.co/api/v2/pokemon/595/",
    },
    {
      name: "galvantula",
      url: "https://pokeapi.co/api/v2/pokemon/596/",
    },
    {
      name: "shelmet",
      url: "https://pokeapi.co/api/v2/pokemon/616/",
    },
    {
      name: "accelgor",
      url: "https://pokeapi.co/api/v2/pokemon/617/",
    },
    {
      name: "durant",
      url: "https://pokeapi.co/api/v2/pokemon/632/",
    },
    {
      name: "larvesta",
      url: "https://pokeapi.co/api/v2/pokemon/636/",
    },
    {
      name: "volcarona",
      url: "https://pokeapi.co/api/v2/pokemon/637/",
    },
    {
      name: "genesect",
      url: "https://pokeapi.co/api/v2/pokemon/649/",
    },
    {
      name: "scatterbug",
      url: "https://pokeapi.co/api/v2/pokemon/664/",
    },
    {
      name: "spewpa",
      url: "https://pokeapi.co/api/v2/pokemon/665/",
    },
    {
      name: "vivillon",
      url: "https://pokeapi.co/api/v2/pokemon/666/",
    },
    {
      name: "grubbin",
      url: "https://pokeapi.co/api/v2/pokemon/736/",
    },
    {
      name: "charjabug",
      url: "https://pokeapi.co/api/v2/pokemon/737/",
    },
    {
      name: "vikavolt",
      url: "https://pokeapi.co/api/v2/pokemon/738/",
    },
    {
      name: "cutiefly",
      url: "https://pokeapi.co/api/v2/pokemon/742/",
    },
    {
      name: "ribombee",
      url: "https://pokeapi.co/api/v2/pokemon/743/",
    },
    {
      name: "dewpider",
      url: "https://pokeapi.co/api/v2/pokemon/751/",
    },
    {
      name: "araquanid",
      url: "https://pokeapi.co/api/v2/pokemon/752/",
    },
    {
      name: "wimpod",
      url: "https://pokeapi.co/api/v2/pokemon/767/",
    },
    {
      name: "golisopod",
      url: "https://pokeapi.co/api/v2/pokemon/768/",
    },
    {
      name: "buzzwole",
      url: "https://pokeapi.co/api/v2/pokemon/794/",
    },
    {
      name: "pheromosa",
      url: "https://pokeapi.co/api/v2/pokemon/795/",
    },
    {
      name: "blipbug",
      url: "https://pokeapi.co/api/v2/pokemon/824/",
    },
    {
      name: "dottler",
      url: "https://pokeapi.co/api/v2/pokemon/825/",
    },
    {
      name: "orbeetle",
      url: "https://pokeapi.co/api/v2/pokemon/826/",
    },
    {
      name: "sizzlipede",
      url: "https://pokeapi.co/api/v2/pokemon/850/",
    },
    {
      name: "centiskorch",
      url: "https://pokeapi.co/api/v2/pokemon/851/",
    },
    {
      name: "snom",
      url: "https://pokeapi.co/api/v2/pokemon/872/",
    },
    {
      name: "frosmoth",
      url: "https://pokeapi.co/api/v2/pokemon/873/",
    },
    {
      name: "kleavor",
      url: "https://pokeapi.co/api/v2/pokemon/900/",
    },
    {
      name: "tarountula",
      url: "https://pokeapi.co/api/v2/pokemon/917/",
    },
    {
      name: "spidops",
      url: "https://pokeapi.co/api/v2/pokemon/918/",
    },
    {
      name: "nymble",
      url: "https://pokeapi.co/api/v2/pokemon/919/",
    },
    {
      name: "lokix",
      url: "https://pokeapi.co/api/v2/pokemon/920/",
    },
    {
      name: "rellor",
      url: "https://pokeapi.co/api/v2/pokemon/953/",
    },
    {
      name: "rabsca",
      url: "https://pokeapi.co/api/v2/pokemon/954/",
    },
    {
      name: "slither-wing",
      url: "https://pokeapi.co/api/v2/pokemon/988/",
    },
    {
      name: "wormadam-sandy",
      url: "https://pokeapi.co/api/v2/pokemon/10004/",
    },
    {
      name: "wormadam-trash",
      url: "https://pokeapi.co/api/v2/pokemon/10005/",
    },
    {
      name: "pinsir-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10040/",
    },
    {
      name: "scizor-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10046/",
    },
    {
      name: "heracross-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10047/",
    },
    {
      name: "beedrill-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10090/",
    },
    {
      name: "vikavolt-totem",
      url: "https://pokeapi.co/api/v2/pokemon/10122/",
    },
    {
      name: "ribombee-totem",
      url: "https://pokeapi.co/api/v2/pokemon/10150/",
    },
    {
      name: "araquanid-totem",
      url: "https://pokeapi.co/api/v2/pokemon/10153/",
    },
    {
      name: "butterfree-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10198/",
    },
    {
      name: "orbeetle-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10213/",
    },
    {
      name: "centiskorch-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10220/",
    },
  ],
  ghost: [
    {
      name: "gastly",
      url: "https://pokeapi.co/api/v2/pokemon/92/",
    },
    {
      name: "haunter",
      url: "https://pokeapi.co/api/v2/pokemon/93/",
    },
    {
      name: "gengar",
      url: "https://pokeapi.co/api/v2/pokemon/94/",
    },
    {
      name: "misdreavus",
      url: "https://pokeapi.co/api/v2/pokemon/200/",
    },
    {
      name: "shedinja",
      url: "https://pokeapi.co/api/v2/pokemon/292/",
    },
    {
      name: "sableye",
      url: "https://pokeapi.co/api/v2/pokemon/302/",
    },
    {
      name: "shuppet",
      url: "https://pokeapi.co/api/v2/pokemon/353/",
    },
    {
      name: "banette",
      url: "https://pokeapi.co/api/v2/pokemon/354/",
    },
    {
      name: "duskull",
      url: "https://pokeapi.co/api/v2/pokemon/355/",
    },
    {
      name: "dusclops",
      url: "https://pokeapi.co/api/v2/pokemon/356/",
    },
    {
      name: "drifloon",
      url: "https://pokeapi.co/api/v2/pokemon/425/",
    },
    {
      name: "drifblim",
      url: "https://pokeapi.co/api/v2/pokemon/426/",
    },
    {
      name: "mismagius",
      url: "https://pokeapi.co/api/v2/pokemon/429/",
    },
    {
      name: "spiritomb",
      url: "https://pokeapi.co/api/v2/pokemon/442/",
    },
    {
      name: "dusknoir",
      url: "https://pokeapi.co/api/v2/pokemon/477/",
    },
    {
      name: "froslass",
      url: "https://pokeapi.co/api/v2/pokemon/478/",
    },
    {
      name: "rotom",
      url: "https://pokeapi.co/api/v2/pokemon/479/",
    },
    {
      name: "giratina-altered",
      url: "https://pokeapi.co/api/v2/pokemon/487/",
    },
    {
      name: "yamask",
      url: "https://pokeapi.co/api/v2/pokemon/562/",
    },
    {
      name: "cofagrigus",
      url: "https://pokeapi.co/api/v2/pokemon/563/",
    },
    {
      name: "frillish",
      url: "https://pokeapi.co/api/v2/pokemon/592/",
    },
    {
      name: "jellicent",
      url: "https://pokeapi.co/api/v2/pokemon/593/",
    },
    {
      name: "litwick",
      url: "https://pokeapi.co/api/v2/pokemon/607/",
    },
    {
      name: "lampent",
      url: "https://pokeapi.co/api/v2/pokemon/608/",
    },
    {
      name: "chandelure",
      url: "https://pokeapi.co/api/v2/pokemon/609/",
    },
    {
      name: "golett",
      url: "https://pokeapi.co/api/v2/pokemon/622/",
    },
    {
      name: "golurk",
      url: "https://pokeapi.co/api/v2/pokemon/623/",
    },
    {
      name: "honedge",
      url: "https://pokeapi.co/api/v2/pokemon/679/",
    },
    {
      name: "doublade",
      url: "https://pokeapi.co/api/v2/pokemon/680/",
    },
    {
      name: "aegislash-shield",
      url: "https://pokeapi.co/api/v2/pokemon/681/",
    },
    {
      name: "phantump",
      url: "https://pokeapi.co/api/v2/pokemon/708/",
    },
    {
      name: "trevenant",
      url: "https://pokeapi.co/api/v2/pokemon/709/",
    },
    {
      name: "pumpkaboo-average",
      url: "https://pokeapi.co/api/v2/pokemon/710/",
    },
    {
      name: "gourgeist-average",
      url: "https://pokeapi.co/api/v2/pokemon/711/",
    },
    {
      name: "hoopa",
      url: "https://pokeapi.co/api/v2/pokemon/720/",
    },
    {
      name: "decidueye",
      url: "https://pokeapi.co/api/v2/pokemon/724/",
    },
    {
      name: "sandygast",
      url: "https://pokeapi.co/api/v2/pokemon/769/",
    },
    {
      name: "palossand",
      url: "https://pokeapi.co/api/v2/pokemon/770/",
    },
    {
      name: "mimikyu-disguised",
      url: "https://pokeapi.co/api/v2/pokemon/778/",
    },
    {
      name: "dhelmise",
      url: "https://pokeapi.co/api/v2/pokemon/781/",
    },
    {
      name: "lunala",
      url: "https://pokeapi.co/api/v2/pokemon/792/",
    },
    {
      name: "marshadow",
      url: "https://pokeapi.co/api/v2/pokemon/802/",
    },
    {
      name: "blacephalon",
      url: "https://pokeapi.co/api/v2/pokemon/806/",
    },
    {
      name: "sinistea",
      url: "https://pokeapi.co/api/v2/pokemon/854/",
    },
    {
      name: "polteageist",
      url: "https://pokeapi.co/api/v2/pokemon/855/",
    },
    {
      name: "cursola",
      url: "https://pokeapi.co/api/v2/pokemon/864/",
    },
    {
      name: "runerigus",
      url: "https://pokeapi.co/api/v2/pokemon/867/",
    },
    {
      name: "dreepy",
      url: "https://pokeapi.co/api/v2/pokemon/885/",
    },
    {
      name: "drakloak",
      url: "https://pokeapi.co/api/v2/pokemon/886/",
    },
    {
      name: "dragapult",
      url: "https://pokeapi.co/api/v2/pokemon/887/",
    },
    {
      name: "spectrier",
      url: "https://pokeapi.co/api/v2/pokemon/897/",
    },
    {
      name: "basculegion-male",
      url: "https://pokeapi.co/api/v2/pokemon/902/",
    },
    {
      name: "skeledirge",
      url: "https://pokeapi.co/api/v2/pokemon/911/",
    },
    {
      name: "ceruledge",
      url: "https://pokeapi.co/api/v2/pokemon/937/",
    },
    {
      name: "bramblin",
      url: "https://pokeapi.co/api/v2/pokemon/946/",
    },
    {
      name: "brambleghast",
      url: "https://pokeapi.co/api/v2/pokemon/947/",
    },
    {
      name: "greavard",
      url: "https://pokeapi.co/api/v2/pokemon/971/",
    },
    {
      name: "houndstone",
      url: "https://pokeapi.co/api/v2/pokemon/972/",
    },
    {
      name: "annihilape",
      url: "https://pokeapi.co/api/v2/pokemon/979/",
    },
    {
      name: "flutter-mane",
      url: "https://pokeapi.co/api/v2/pokemon/987/",
    },
    {
      name: "gimmighoul",
      url: "https://pokeapi.co/api/v2/pokemon/999/",
    },
    {
      name: "gholdengo",
      url: "https://pokeapi.co/api/v2/pokemon/1000/",
    },
    {
      name: "poltchageist",
      url: "https://pokeapi.co/api/v2/pokemon/1012/",
    },
    {
      name: "sinistcha",
      url: "https://pokeapi.co/api/v2/pokemon/1013/",
    },
    {
      name: "pecharunt",
      url: "https://pokeapi.co/api/v2/pokemon/1025/",
    },
    {
      name: "giratina-origin",
      url: "https://pokeapi.co/api/v2/pokemon/10007/",
    },
    {
      name: "aegislash-blade",
      url: "https://pokeapi.co/api/v2/pokemon/10026/",
    },
    {
      name: "pumpkaboo-small",
      url: "https://pokeapi.co/api/v2/pokemon/10027/",
    },
    {
      name: "pumpkaboo-large",
      url: "https://pokeapi.co/api/v2/pokemon/10028/",
    },
    {
      name: "pumpkaboo-super",
      url: "https://pokeapi.co/api/v2/pokemon/10029/",
    },
    {
      name: "gourgeist-small",
      url: "https://pokeapi.co/api/v2/pokemon/10030/",
    },
    {
      name: "gourgeist-large",
      url: "https://pokeapi.co/api/v2/pokemon/10031/",
    },
    {
      name: "gourgeist-super",
      url: "https://pokeapi.co/api/v2/pokemon/10032/",
    },
    {
      name: "gengar-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10038/",
    },
    {
      name: "banette-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10056/",
    },
    {
      name: "sableye-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10066/",
    },
    {
      name: "marowak-alola",
      url: "https://pokeapi.co/api/v2/pokemon/10115/",
    },
    {
      name: "oricorio-sensu",
      url: "https://pokeapi.co/api/v2/pokemon/10125/",
    },
    {
      name: "mimikyu-busted",
      url: "https://pokeapi.co/api/v2/pokemon/10143/",
    },
    {
      name: "mimikyu-totem-disguised",
      url: "https://pokeapi.co/api/v2/pokemon/10144/",
    },
    {
      name: "mimikyu-totem-busted",
      url: "https://pokeapi.co/api/v2/pokemon/10145/",
    },
    {
      name: "marowak-totem",
      url: "https://pokeapi.co/api/v2/pokemon/10149/",
    },
    {
      name: "necrozma-dawn",
      url: "https://pokeapi.co/api/v2/pokemon/10156/",
    },
    {
      name: "corsola-galar",
      url: "https://pokeapi.co/api/v2/pokemon/10173/",
    },
    {
      name: "yamask-galar",
      url: "https://pokeapi.co/api/v2/pokemon/10179/",
    },
    {
      name: "calyrex-shadow",
      url: "https://pokeapi.co/api/v2/pokemon/10194/",
    },
    {
      name: "gengar-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10202/",
    },
    {
      name: "typhlosion-hisui",
      url: "https://pokeapi.co/api/v2/pokemon/10233/",
    },
    {
      name: "zorua-hisui",
      url: "https://pokeapi.co/api/v2/pokemon/10238/",
    },
    {
      name: "zoroark-hisui",
      url: "https://pokeapi.co/api/v2/pokemon/10239/",
    },
    {
      name: "basculegion-female",
      url: "https://pokeapi.co/api/v2/pokemon/10248/",
    },
    {
      name: "gimmighoul-roaming",
      url: "https://pokeapi.co/api/v2/pokemon/10263/",
    },
  ],
  steel: [
    {
      name: "magnemite",
      url: "https://pokeapi.co/api/v2/pokemon/81/",
    },
    {
      name: "magneton",
      url: "https://pokeapi.co/api/v2/pokemon/82/",
    },
    {
      name: "forretress",
      url: "https://pokeapi.co/api/v2/pokemon/205/",
    },
    {
      name: "steelix",
      url: "https://pokeapi.co/api/v2/pokemon/208/",
    },
    {
      name: "scizor",
      url: "https://pokeapi.co/api/v2/pokemon/212/",
    },
    {
      name: "skarmory",
      url: "https://pokeapi.co/api/v2/pokemon/227/",
    },
    {
      name: "mawile",
      url: "https://pokeapi.co/api/v2/pokemon/303/",
    },
    {
      name: "aron",
      url: "https://pokeapi.co/api/v2/pokemon/304/",
    },
    {
      name: "lairon",
      url: "https://pokeapi.co/api/v2/pokemon/305/",
    },
    {
      name: "aggron",
      url: "https://pokeapi.co/api/v2/pokemon/306/",
    },
    {
      name: "beldum",
      url: "https://pokeapi.co/api/v2/pokemon/374/",
    },
    {
      name: "metang",
      url: "https://pokeapi.co/api/v2/pokemon/375/",
    },
    {
      name: "metagross",
      url: "https://pokeapi.co/api/v2/pokemon/376/",
    },
    {
      name: "registeel",
      url: "https://pokeapi.co/api/v2/pokemon/379/",
    },
    {
      name: "jirachi",
      url: "https://pokeapi.co/api/v2/pokemon/385/",
    },
    {
      name: "empoleon",
      url: "https://pokeapi.co/api/v2/pokemon/395/",
    },
    {
      name: "shieldon",
      url: "https://pokeapi.co/api/v2/pokemon/410/",
    },
    {
      name: "bastiodon",
      url: "https://pokeapi.co/api/v2/pokemon/411/",
    },
    {
      name: "bronzor",
      url: "https://pokeapi.co/api/v2/pokemon/436/",
    },
    {
      name: "bronzong",
      url: "https://pokeapi.co/api/v2/pokemon/437/",
    },
    {
      name: "lucario",
      url: "https://pokeapi.co/api/v2/pokemon/448/",
    },
    {
      name: "magnezone",
      url: "https://pokeapi.co/api/v2/pokemon/462/",
    },
    {
      name: "probopass",
      url: "https://pokeapi.co/api/v2/pokemon/476/",
    },
    {
      name: "dialga",
      url: "https://pokeapi.co/api/v2/pokemon/483/",
    },
    {
      name: "heatran",
      url: "https://pokeapi.co/api/v2/pokemon/485/",
    },
    {
      name: "excadrill",
      url: "https://pokeapi.co/api/v2/pokemon/530/",
    },
    {
      name: "escavalier",
      url: "https://pokeapi.co/api/v2/pokemon/589/",
    },
    {
      name: "ferroseed",
      url: "https://pokeapi.co/api/v2/pokemon/597/",
    },
    {
      name: "ferrothorn",
      url: "https://pokeapi.co/api/v2/pokemon/598/",
    },
    {
      name: "klink",
      url: "https://pokeapi.co/api/v2/pokemon/599/",
    },
    {
      name: "klang",
      url: "https://pokeapi.co/api/v2/pokemon/600/",
    },
    {
      name: "klinklang",
      url: "https://pokeapi.co/api/v2/pokemon/601/",
    },
    {
      name: "pawniard",
      url: "https://pokeapi.co/api/v2/pokemon/624/",
    },
    {
      name: "bisharp",
      url: "https://pokeapi.co/api/v2/pokemon/625/",
    },
    {
      name: "durant",
      url: "https://pokeapi.co/api/v2/pokemon/632/",
    },
    {
      name: "cobalion",
      url: "https://pokeapi.co/api/v2/pokemon/638/",
    },
    {
      name: "genesect",
      url: "https://pokeapi.co/api/v2/pokemon/649/",
    },
    {
      name: "honedge",
      url: "https://pokeapi.co/api/v2/pokemon/679/",
    },
    {
      name: "doublade",
      url: "https://pokeapi.co/api/v2/pokemon/680/",
    },
    {
      name: "aegislash-shield",
      url: "https://pokeapi.co/api/v2/pokemon/681/",
    },
    {
      name: "klefki",
      url: "https://pokeapi.co/api/v2/pokemon/707/",
    },
    {
      name: "togedemaru",
      url: "https://pokeapi.co/api/v2/pokemon/777/",
    },
    {
      name: "solgaleo",
      url: "https://pokeapi.co/api/v2/pokemon/791/",
    },
    {
      name: "celesteela",
      url: "https://pokeapi.co/api/v2/pokemon/797/",
    },
    {
      name: "kartana",
      url: "https://pokeapi.co/api/v2/pokemon/798/",
    },
    {
      name: "magearna",
      url: "https://pokeapi.co/api/v2/pokemon/801/",
    },
    {
      name: "stakataka",
      url: "https://pokeapi.co/api/v2/pokemon/805/",
    },
    {
      name: "meltan",
      url: "https://pokeapi.co/api/v2/pokemon/808/",
    },
    {
      name: "melmetal",
      url: "https://pokeapi.co/api/v2/pokemon/809/",
    },
    {
      name: "corviknight",
      url: "https://pokeapi.co/api/v2/pokemon/823/",
    },
    {
      name: "perrserker",
      url: "https://pokeapi.co/api/v2/pokemon/863/",
    },
    {
      name: "cufant",
      url: "https://pokeapi.co/api/v2/pokemon/878/",
    },
    {
      name: "copperajah",
      url: "https://pokeapi.co/api/v2/pokemon/879/",
    },
    {
      name: "duraludon",
      url: "https://pokeapi.co/api/v2/pokemon/884/",
    },
    {
      name: "tinkatink",
      url: "https://pokeapi.co/api/v2/pokemon/957/",
    },
    {
      name: "tinkatuff",
      url: "https://pokeapi.co/api/v2/pokemon/958/",
    },
    {
      name: "tinkaton",
      url: "https://pokeapi.co/api/v2/pokemon/959/",
    },
    {
      name: "varoom",
      url: "https://pokeapi.co/api/v2/pokemon/965/",
    },
    {
      name: "revavroom",
      url: "https://pokeapi.co/api/v2/pokemon/966/",
    },
    {
      name: "orthworm",
      url: "https://pokeapi.co/api/v2/pokemon/968/",
    },
    {
      name: "kingambit",
      url: "https://pokeapi.co/api/v2/pokemon/983/",
    },
    {
      name: "iron-treads",
      url: "https://pokeapi.co/api/v2/pokemon/990/",
    },
    {
      name: "gholdengo",
      url: "https://pokeapi.co/api/v2/pokemon/1000/",
    },
    {
      name: "archaludon",
      url: "https://pokeapi.co/api/v2/pokemon/1018/",
    },
    {
      name: "iron-crown",
      url: "https://pokeapi.co/api/v2/pokemon/1023/",
    },
    {
      name: "wormadam-trash",
      url: "https://pokeapi.co/api/v2/pokemon/10005/",
    },
    {
      name: "aegislash-blade",
      url: "https://pokeapi.co/api/v2/pokemon/10026/",
    },
    {
      name: "scizor-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10046/",
    },
    {
      name: "mawile-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10052/",
    },
    {
      name: "aggron-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10053/",
    },
    {
      name: "lucario-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10059/",
    },
    {
      name: "steelix-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10072/",
    },
    {
      name: "metagross-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10076/",
    },
    {
      name: "sandshrew-alola",
      url: "https://pokeapi.co/api/v2/pokemon/10101/",
    },
    {
      name: "sandslash-alola",
      url: "https://pokeapi.co/api/v2/pokemon/10102/",
    },
    {
      name: "diglett-alola",
      url: "https://pokeapi.co/api/v2/pokemon/10105/",
    },
    {
      name: "dugtrio-alola",
      url: "https://pokeapi.co/api/v2/pokemon/10106/",
    },
    {
      name: "magearna-original",
      url: "https://pokeapi.co/api/v2/pokemon/10147/",
    },
    {
      name: "togedemaru-totem",
      url: "https://pokeapi.co/api/v2/pokemon/10154/",
    },
    {
      name: "necrozma-dusk",
      url: "https://pokeapi.co/api/v2/pokemon/10155/",
    },
    {
      name: "meowth-galar",
      url: "https://pokeapi.co/api/v2/pokemon/10161/",
    },
    {
      name: "stunfisk-galar",
      url: "https://pokeapi.co/api/v2/pokemon/10180/",
    },
    {
      name: "zacian-crowned",
      url: "https://pokeapi.co/api/v2/pokemon/10188/",
    },
    {
      name: "zamazenta-crowned",
      url: "https://pokeapi.co/api/v2/pokemon/10189/",
    },
    {
      name: "melmetal-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10208/",
    },
    {
      name: "corviknight-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10212/",
    },
    {
      name: "copperajah-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10224/",
    },
    {
      name: "duraludon-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10225/",
    },
    {
      name: "sliggoo-hisui",
      url: "https://pokeapi.co/api/v2/pokemon/10241/",
    },
    {
      name: "goodra-hisui",
      url: "https://pokeapi.co/api/v2/pokemon/10242/",
    },
    {
      name: "dialga-origin",
      url: "https://pokeapi.co/api/v2/pokemon/10245/",
    },
  ],
  fire: [
    {
      name: "charmander",
      url: "https://pokeapi.co/api/v2/pokemon/4/",
    },
    {
      name: "charmeleon",
      url: "https://pokeapi.co/api/v2/pokemon/5/",
    },
    {
      name: "charizard",
      url: "https://pokeapi.co/api/v2/pokemon/6/",
    },
    {
      name: "vulpix",
      url: "https://pokeapi.co/api/v2/pokemon/37/",
    },
    {
      name: "ninetales",
      url: "https://pokeapi.co/api/v2/pokemon/38/",
    },
    {
      name: "growlithe",
      url: "https://pokeapi.co/api/v2/pokemon/58/",
    },
    {
      name: "arcanine",
      url: "https://pokeapi.co/api/v2/pokemon/59/",
    },
    {
      name: "ponyta",
      url: "https://pokeapi.co/api/v2/pokemon/77/",
    },
    {
      name: "rapidash",
      url: "https://pokeapi.co/api/v2/pokemon/78/",
    },
    {
      name: "magmar",
      url: "https://pokeapi.co/api/v2/pokemon/126/",
    },
    {
      name: "flareon",
      url: "https://pokeapi.co/api/v2/pokemon/136/",
    },
    {
      name: "moltres",
      url: "https://pokeapi.co/api/v2/pokemon/146/",
    },
    {
      name: "cyndaquil",
      url: "https://pokeapi.co/api/v2/pokemon/155/",
    },
    {
      name: "quilava",
      url: "https://pokeapi.co/api/v2/pokemon/156/",
    },
    {
      name: "typhlosion",
      url: "https://pokeapi.co/api/v2/pokemon/157/",
    },
    {
      name: "slugma",
      url: "https://pokeapi.co/api/v2/pokemon/218/",
    },
    {
      name: "magcargo",
      url: "https://pokeapi.co/api/v2/pokemon/219/",
    },
    {
      name: "houndour",
      url: "https://pokeapi.co/api/v2/pokemon/228/",
    },
    {
      name: "houndoom",
      url: "https://pokeapi.co/api/v2/pokemon/229/",
    },
    {
      name: "magby",
      url: "https://pokeapi.co/api/v2/pokemon/240/",
    },
    {
      name: "entei",
      url: "https://pokeapi.co/api/v2/pokemon/244/",
    },
    {
      name: "ho-oh",
      url: "https://pokeapi.co/api/v2/pokemon/250/",
    },
    {
      name: "torchic",
      url: "https://pokeapi.co/api/v2/pokemon/255/",
    },
    {
      name: "combusken",
      url: "https://pokeapi.co/api/v2/pokemon/256/",
    },
    {
      name: "blaziken",
      url: "https://pokeapi.co/api/v2/pokemon/257/",
    },
    {
      name: "numel",
      url: "https://pokeapi.co/api/v2/pokemon/322/",
    },
    {
      name: "camerupt",
      url: "https://pokeapi.co/api/v2/pokemon/323/",
    },
    {
      name: "torkoal",
      url: "https://pokeapi.co/api/v2/pokemon/324/",
    },
    {
      name: "chimchar",
      url: "https://pokeapi.co/api/v2/pokemon/390/",
    },
    {
      name: "monferno",
      url: "https://pokeapi.co/api/v2/pokemon/391/",
    },
    {
      name: "infernape",
      url: "https://pokeapi.co/api/v2/pokemon/392/",
    },
    {
      name: "magmortar",
      url: "https://pokeapi.co/api/v2/pokemon/467/",
    },
    {
      name: "heatran",
      url: "https://pokeapi.co/api/v2/pokemon/485/",
    },
    {
      name: "victini",
      url: "https://pokeapi.co/api/v2/pokemon/494/",
    },
    {
      name: "tepig",
      url: "https://pokeapi.co/api/v2/pokemon/498/",
    },
    {
      name: "pignite",
      url: "https://pokeapi.co/api/v2/pokemon/499/",
    },
    {
      name: "emboar",
      url: "https://pokeapi.co/api/v2/pokemon/500/",
    },
    {
      name: "pansear",
      url: "https://pokeapi.co/api/v2/pokemon/513/",
    },
    {
      name: "simisear",
      url: "https://pokeapi.co/api/v2/pokemon/514/",
    },
    {
      name: "darumaka",
      url: "https://pokeapi.co/api/v2/pokemon/554/",
    },
    {
      name: "darmanitan-standard",
      url: "https://pokeapi.co/api/v2/pokemon/555/",
    },
    {
      name: "litwick",
      url: "https://pokeapi.co/api/v2/pokemon/607/",
    },
    {
      name: "lampent",
      url: "https://pokeapi.co/api/v2/pokemon/608/",
    },
    {
      name: "chandelure",
      url: "https://pokeapi.co/api/v2/pokemon/609/",
    },
    {
      name: "heatmor",
      url: "https://pokeapi.co/api/v2/pokemon/631/",
    },
    {
      name: "larvesta",
      url: "https://pokeapi.co/api/v2/pokemon/636/",
    },
    {
      name: "volcarona",
      url: "https://pokeapi.co/api/v2/pokemon/637/",
    },
    {
      name: "reshiram",
      url: "https://pokeapi.co/api/v2/pokemon/643/",
    },
    {
      name: "fennekin",
      url: "https://pokeapi.co/api/v2/pokemon/653/",
    },
    {
      name: "braixen",
      url: "https://pokeapi.co/api/v2/pokemon/654/",
    },
    {
      name: "delphox",
      url: "https://pokeapi.co/api/v2/pokemon/655/",
    },
    {
      name: "fletchinder",
      url: "https://pokeapi.co/api/v2/pokemon/662/",
    },
    {
      name: "talonflame",
      url: "https://pokeapi.co/api/v2/pokemon/663/",
    },
    {
      name: "litleo",
      url: "https://pokeapi.co/api/v2/pokemon/667/",
    },
    {
      name: "pyroar",
      url: "https://pokeapi.co/api/v2/pokemon/668/",
    },
    {
      name: "volcanion",
      url: "https://pokeapi.co/api/v2/pokemon/721/",
    },
    {
      name: "litten",
      url: "https://pokeapi.co/api/v2/pokemon/725/",
    },
    {
      name: "torracat",
      url: "https://pokeapi.co/api/v2/pokemon/726/",
    },
    {
      name: "incineroar",
      url: "https://pokeapi.co/api/v2/pokemon/727/",
    },
    {
      name: "oricorio-baile",
      url: "https://pokeapi.co/api/v2/pokemon/741/",
    },
    {
      name: "salandit",
      url: "https://pokeapi.co/api/v2/pokemon/757/",
    },
    {
      name: "salazzle",
      url: "https://pokeapi.co/api/v2/pokemon/758/",
    },
    {
      name: "turtonator",
      url: "https://pokeapi.co/api/v2/pokemon/776/",
    },
    {
      name: "blacephalon",
      url: "https://pokeapi.co/api/v2/pokemon/806/",
    },
    {
      name: "scorbunny",
      url: "https://pokeapi.co/api/v2/pokemon/813/",
    },
    {
      name: "raboot",
      url: "https://pokeapi.co/api/v2/pokemon/814/",
    },
    {
      name: "cinderace",
      url: "https://pokeapi.co/api/v2/pokemon/815/",
    },
    {
      name: "carkol",
      url: "https://pokeapi.co/api/v2/pokemon/838/",
    },
    {
      name: "coalossal",
      url: "https://pokeapi.co/api/v2/pokemon/839/",
    },
    {
      name: "sizzlipede",
      url: "https://pokeapi.co/api/v2/pokemon/850/",
    },
    {
      name: "centiskorch",
      url: "https://pokeapi.co/api/v2/pokemon/851/",
    },
    {
      name: "fuecoco",
      url: "https://pokeapi.co/api/v2/pokemon/909/",
    },
    {
      name: "crocalor",
      url: "https://pokeapi.co/api/v2/pokemon/910/",
    },
    {
      name: "skeledirge",
      url: "https://pokeapi.co/api/v2/pokemon/911/",
    },
    {
      name: "charcadet",
      url: "https://pokeapi.co/api/v2/pokemon/935/",
    },
    {
      name: "armarouge",
      url: "https://pokeapi.co/api/v2/pokemon/936/",
    },
    {
      name: "ceruledge",
      url: "https://pokeapi.co/api/v2/pokemon/937/",
    },
    {
      name: "scovillain",
      url: "https://pokeapi.co/api/v2/pokemon/952/",
    },
    {
      name: "iron-moth",
      url: "https://pokeapi.co/api/v2/pokemon/994/",
    },
    {
      name: "chi-yu",
      url: "https://pokeapi.co/api/v2/pokemon/1004/",
    },
    {
      name: "gouging-fire",
      url: "https://pokeapi.co/api/v2/pokemon/1020/",
    },
    {
      name: "rotom-heat",
      url: "https://pokeapi.co/api/v2/pokemon/10008/",
    },
    {
      name: "castform-sunny",
      url: "https://pokeapi.co/api/v2/pokemon/10013/",
    },
    {
      name: "darmanitan-zen",
      url: "https://pokeapi.co/api/v2/pokemon/10017/",
    },
    {
      name: "charizard-mega-x",
      url: "https://pokeapi.co/api/v2/pokemon/10034/",
    },
    {
      name: "charizard-mega-y",
      url: "https://pokeapi.co/api/v2/pokemon/10035/",
    },
    {
      name: "houndoom-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10048/",
    },
    {
      name: "blaziken-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10050/",
    },
    {
      name: "groudon-primal",
      url: "https://pokeapi.co/api/v2/pokemon/10078/",
    },
    {
      name: "camerupt-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10087/",
    },
    {
      name: "marowak-alola",
      url: "https://pokeapi.co/api/v2/pokemon/10115/",
    },
    {
      name: "salazzle-totem",
      url: "https://pokeapi.co/api/v2/pokemon/10129/",
    },
    {
      name: "marowak-totem",
      url: "https://pokeapi.co/api/v2/pokemon/10149/",
    },
    {
      name: "darmanitan-galar-zen",
      url: "https://pokeapi.co/api/v2/pokemon/10178/",
    },
    {
      name: "charizard-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10196/",
    },
    {
      name: "cinderace-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10210/",
    },
    {
      name: "coalossal-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10215/",
    },
    {
      name: "centiskorch-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10220/",
    },
    {
      name: "growlithe-hisui",
      url: "https://pokeapi.co/api/v2/pokemon/10229/",
    },
    {
      name: "arcanine-hisui",
      url: "https://pokeapi.co/api/v2/pokemon/10230/",
    },
    {
      name: "typhlosion-hisui",
      url: "https://pokeapi.co/api/v2/pokemon/10233/",
    },
    {
      name: "tauros-paldea-blaze-breed",
      url: "https://pokeapi.co/api/v2/pokemon/10251/",
    },
    {
      name: "ogerpon-hearthflame-mask",
      url: "https://pokeapi.co/api/v2/pokemon/10274/",
    },
  ],
  water: [
    {
      name: "squirtle",
      url: "https://pokeapi.co/api/v2/pokemon/7/",
    },
    {
      name: "wartortle",
      url: "https://pokeapi.co/api/v2/pokemon/8/",
    },
    {
      name: "blastoise",
      url: "https://pokeapi.co/api/v2/pokemon/9/",
    },
    {
      name: "psyduck",
      url: "https://pokeapi.co/api/v2/pokemon/54/",
    },
    {
      name: "golduck",
      url: "https://pokeapi.co/api/v2/pokemon/55/",
    },
    {
      name: "poliwag",
      url: "https://pokeapi.co/api/v2/pokemon/60/",
    },
    {
      name: "poliwhirl",
      url: "https://pokeapi.co/api/v2/pokemon/61/",
    },
    {
      name: "poliwrath",
      url: "https://pokeapi.co/api/v2/pokemon/62/",
    },
    {
      name: "tentacool",
      url: "https://pokeapi.co/api/v2/pokemon/72/",
    },
    {
      name: "tentacruel",
      url: "https://pokeapi.co/api/v2/pokemon/73/",
    },
    {
      name: "slowpoke",
      url: "https://pokeapi.co/api/v2/pokemon/79/",
    },
    {
      name: "slowbro",
      url: "https://pokeapi.co/api/v2/pokemon/80/",
    },
    {
      name: "seel",
      url: "https://pokeapi.co/api/v2/pokemon/86/",
    },
    {
      name: "dewgong",
      url: "https://pokeapi.co/api/v2/pokemon/87/",
    },
    {
      name: "shellder",
      url: "https://pokeapi.co/api/v2/pokemon/90/",
    },
    {
      name: "cloyster",
      url: "https://pokeapi.co/api/v2/pokemon/91/",
    },
    {
      name: "krabby",
      url: "https://pokeapi.co/api/v2/pokemon/98/",
    },
    {
      name: "kingler",
      url: "https://pokeapi.co/api/v2/pokemon/99/",
    },
    {
      name: "horsea",
      url: "https://pokeapi.co/api/v2/pokemon/116/",
    },
    {
      name: "seadra",
      url: "https://pokeapi.co/api/v2/pokemon/117/",
    },
    {
      name: "goldeen",
      url: "https://pokeapi.co/api/v2/pokemon/118/",
    },
    {
      name: "seaking",
      url: "https://pokeapi.co/api/v2/pokemon/119/",
    },
    {
      name: "staryu",
      url: "https://pokeapi.co/api/v2/pokemon/120/",
    },
    {
      name: "starmie",
      url: "https://pokeapi.co/api/v2/pokemon/121/",
    },
    {
      name: "magikarp",
      url: "https://pokeapi.co/api/v2/pokemon/129/",
    },
    {
      name: "gyarados",
      url: "https://pokeapi.co/api/v2/pokemon/130/",
    },
    {
      name: "lapras",
      url: "https://pokeapi.co/api/v2/pokemon/131/",
    },
    {
      name: "vaporeon",
      url: "https://pokeapi.co/api/v2/pokemon/134/",
    },
    {
      name: "omanyte",
      url: "https://pokeapi.co/api/v2/pokemon/138/",
    },
    {
      name: "omastar",
      url: "https://pokeapi.co/api/v2/pokemon/139/",
    },
    {
      name: "kabuto",
      url: "https://pokeapi.co/api/v2/pokemon/140/",
    },
    {
      name: "kabutops",
      url: "https://pokeapi.co/api/v2/pokemon/141/",
    },
    {
      name: "totodile",
      url: "https://pokeapi.co/api/v2/pokemon/158/",
    },
    {
      name: "croconaw",
      url: "https://pokeapi.co/api/v2/pokemon/159/",
    },
    {
      name: "feraligatr",
      url: "https://pokeapi.co/api/v2/pokemon/160/",
    },
    {
      name: "chinchou",
      url: "https://pokeapi.co/api/v2/pokemon/170/",
    },
    {
      name: "lanturn",
      url: "https://pokeapi.co/api/v2/pokemon/171/",
    },
    {
      name: "marill",
      url: "https://pokeapi.co/api/v2/pokemon/183/",
    },
    {
      name: "azumarill",
      url: "https://pokeapi.co/api/v2/pokemon/184/",
    },
    {
      name: "politoed",
      url: "https://pokeapi.co/api/v2/pokemon/186/",
    },
    {
      name: "wooper",
      url: "https://pokeapi.co/api/v2/pokemon/194/",
    },
    {
      name: "quagsire",
      url: "https://pokeapi.co/api/v2/pokemon/195/",
    },
    {
      name: "slowking",
      url: "https://pokeapi.co/api/v2/pokemon/199/",
    },
    {
      name: "qwilfish",
      url: "https://pokeapi.co/api/v2/pokemon/211/",
    },
    {
      name: "corsola",
      url: "https://pokeapi.co/api/v2/pokemon/222/",
    },
    {
      name: "remoraid",
      url: "https://pokeapi.co/api/v2/pokemon/223/",
    },
    {
      name: "octillery",
      url: "https://pokeapi.co/api/v2/pokemon/224/",
    },
    {
      name: "mantine",
      url: "https://pokeapi.co/api/v2/pokemon/226/",
    },
    {
      name: "kingdra",
      url: "https://pokeapi.co/api/v2/pokemon/230/",
    },
    {
      name: "suicune",
      url: "https://pokeapi.co/api/v2/pokemon/245/",
    },
    {
      name: "mudkip",
      url: "https://pokeapi.co/api/v2/pokemon/258/",
    },
    {
      name: "marshtomp",
      url: "https://pokeapi.co/api/v2/pokemon/259/",
    },
    {
      name: "swampert",
      url: "https://pokeapi.co/api/v2/pokemon/260/",
    },
    {
      name: "lotad",
      url: "https://pokeapi.co/api/v2/pokemon/270/",
    },
    {
      name: "lombre",
      url: "https://pokeapi.co/api/v2/pokemon/271/",
    },
    {
      name: "ludicolo",
      url: "https://pokeapi.co/api/v2/pokemon/272/",
    },
    {
      name: "wingull",
      url: "https://pokeapi.co/api/v2/pokemon/278/",
    },
    {
      name: "pelipper",
      url: "https://pokeapi.co/api/v2/pokemon/279/",
    },
    {
      name: "surskit",
      url: "https://pokeapi.co/api/v2/pokemon/283/",
    },
    {
      name: "carvanha",
      url: "https://pokeapi.co/api/v2/pokemon/318/",
    },
    {
      name: "sharpedo",
      url: "https://pokeapi.co/api/v2/pokemon/319/",
    },
    {
      name: "wailmer",
      url: "https://pokeapi.co/api/v2/pokemon/320/",
    },
    {
      name: "wailord",
      url: "https://pokeapi.co/api/v2/pokemon/321/",
    },
    {
      name: "barboach",
      url: "https://pokeapi.co/api/v2/pokemon/339/",
    },
    {
      name: "whiscash",
      url: "https://pokeapi.co/api/v2/pokemon/340/",
    },
    {
      name: "corphish",
      url: "https://pokeapi.co/api/v2/pokemon/341/",
    },
    {
      name: "crawdaunt",
      url: "https://pokeapi.co/api/v2/pokemon/342/",
    },
    {
      name: "feebas",
      url: "https://pokeapi.co/api/v2/pokemon/349/",
    },
    {
      name: "milotic",
      url: "https://pokeapi.co/api/v2/pokemon/350/",
    },
    {
      name: "spheal",
      url: "https://pokeapi.co/api/v2/pokemon/363/",
    },
    {
      name: "sealeo",
      url: "https://pokeapi.co/api/v2/pokemon/364/",
    },
    {
      name: "walrein",
      url: "https://pokeapi.co/api/v2/pokemon/365/",
    },
    {
      name: "clamperl",
      url: "https://pokeapi.co/api/v2/pokemon/366/",
    },
    {
      name: "huntail",
      url: "https://pokeapi.co/api/v2/pokemon/367/",
    },
    {
      name: "gorebyss",
      url: "https://pokeapi.co/api/v2/pokemon/368/",
    },
    {
      name: "relicanth",
      url: "https://pokeapi.co/api/v2/pokemon/369/",
    },
    {
      name: "luvdisc",
      url: "https://pokeapi.co/api/v2/pokemon/370/",
    },
    {
      name: "kyogre",
      url: "https://pokeapi.co/api/v2/pokemon/382/",
    },
    {
      name: "piplup",
      url: "https://pokeapi.co/api/v2/pokemon/393/",
    },
    {
      name: "prinplup",
      url: "https://pokeapi.co/api/v2/pokemon/394/",
    },
    {
      name: "empoleon",
      url: "https://pokeapi.co/api/v2/pokemon/395/",
    },
    {
      name: "bibarel",
      url: "https://pokeapi.co/api/v2/pokemon/400/",
    },
    {
      name: "buizel",
      url: "https://pokeapi.co/api/v2/pokemon/418/",
    },
    {
      name: "floatzel",
      url: "https://pokeapi.co/api/v2/pokemon/419/",
    },
    {
      name: "shellos",
      url: "https://pokeapi.co/api/v2/pokemon/422/",
    },
    {
      name: "gastrodon",
      url: "https://pokeapi.co/api/v2/pokemon/423/",
    },
    {
      name: "finneon",
      url: "https://pokeapi.co/api/v2/pokemon/456/",
    },
    {
      name: "lumineon",
      url: "https://pokeapi.co/api/v2/pokemon/457/",
    },
    {
      name: "mantyke",
      url: "https://pokeapi.co/api/v2/pokemon/458/",
    },
    {
      name: "palkia",
      url: "https://pokeapi.co/api/v2/pokemon/484/",
    },
    {
      name: "phione",
      url: "https://pokeapi.co/api/v2/pokemon/489/",
    },
    {
      name: "manaphy",
      url: "https://pokeapi.co/api/v2/pokemon/490/",
    },
    {
      name: "oshawott",
      url: "https://pokeapi.co/api/v2/pokemon/501/",
    },
    {
      name: "dewott",
      url: "https://pokeapi.co/api/v2/pokemon/502/",
    },
    {
      name: "samurott",
      url: "https://pokeapi.co/api/v2/pokemon/503/",
    },
    {
      name: "panpour",
      url: "https://pokeapi.co/api/v2/pokemon/515/",
    },
    {
      name: "simipour",
      url: "https://pokeapi.co/api/v2/pokemon/516/",
    },
    {
      name: "tympole",
      url: "https://pokeapi.co/api/v2/pokemon/535/",
    },
    {
      name: "palpitoad",
      url: "https://pokeapi.co/api/v2/pokemon/536/",
    },
    {
      name: "seismitoad",
      url: "https://pokeapi.co/api/v2/pokemon/537/",
    },
    {
      name: "basculin-red-striped",
      url: "https://pokeapi.co/api/v2/pokemon/550/",
    },
    {
      name: "tirtouga",
      url: "https://pokeapi.co/api/v2/pokemon/564/",
    },
    {
      name: "carracosta",
      url: "https://pokeapi.co/api/v2/pokemon/565/",
    },
    {
      name: "ducklett",
      url: "https://pokeapi.co/api/v2/pokemon/580/",
    },
    {
      name: "swanna",
      url: "https://pokeapi.co/api/v2/pokemon/581/",
    },
    {
      name: "frillish",
      url: "https://pokeapi.co/api/v2/pokemon/592/",
    },
    {
      name: "jellicent",
      url: "https://pokeapi.co/api/v2/pokemon/593/",
    },
    {
      name: "alomomola",
      url: "https://pokeapi.co/api/v2/pokemon/594/",
    },
    {
      name: "keldeo-ordinary",
      url: "https://pokeapi.co/api/v2/pokemon/647/",
    },
    {
      name: "froakie",
      url: "https://pokeapi.co/api/v2/pokemon/656/",
    },
    {
      name: "frogadier",
      url: "https://pokeapi.co/api/v2/pokemon/657/",
    },
    {
      name: "greninja",
      url: "https://pokeapi.co/api/v2/pokemon/658/",
    },
    {
      name: "binacle",
      url: "https://pokeapi.co/api/v2/pokemon/688/",
    },
    {
      name: "barbaracle",
      url: "https://pokeapi.co/api/v2/pokemon/689/",
    },
    {
      name: "skrelp",
      url: "https://pokeapi.co/api/v2/pokemon/690/",
    },
    {
      name: "clauncher",
      url: "https://pokeapi.co/api/v2/pokemon/692/",
    },
    {
      name: "clawitzer",
      url: "https://pokeapi.co/api/v2/pokemon/693/",
    },
    {
      name: "volcanion",
      url: "https://pokeapi.co/api/v2/pokemon/721/",
    },
    {
      name: "popplio",
      url: "https://pokeapi.co/api/v2/pokemon/728/",
    },
    {
      name: "brionne",
      url: "https://pokeapi.co/api/v2/pokemon/729/",
    },
    {
      name: "primarina",
      url: "https://pokeapi.co/api/v2/pokemon/730/",
    },
    {
      name: "wishiwashi-solo",
      url: "https://pokeapi.co/api/v2/pokemon/746/",
    },
    {
      name: "mareanie",
      url: "https://pokeapi.co/api/v2/pokemon/747/",
    },
    {
      name: "toxapex",
      url: "https://pokeapi.co/api/v2/pokemon/748/",
    },
    {
      name: "dewpider",
      url: "https://pokeapi.co/api/v2/pokemon/751/",
    },
    {
      name: "araquanid",
      url: "https://pokeapi.co/api/v2/pokemon/752/",
    },
    {
      name: "wimpod",
      url: "https://pokeapi.co/api/v2/pokemon/767/",
    },
    {
      name: "golisopod",
      url: "https://pokeapi.co/api/v2/pokemon/768/",
    },
    {
      name: "pyukumuku",
      url: "https://pokeapi.co/api/v2/pokemon/771/",
    },
    {
      name: "bruxish",
      url: "https://pokeapi.co/api/v2/pokemon/779/",
    },
    {
      name: "tapu-fini",
      url: "https://pokeapi.co/api/v2/pokemon/788/",
    },
    {
      name: "sobble",
      url: "https://pokeapi.co/api/v2/pokemon/816/",
    },
    {
      name: "drizzile",
      url: "https://pokeapi.co/api/v2/pokemon/817/",
    },
    {
      name: "inteleon",
      url: "https://pokeapi.co/api/v2/pokemon/818/",
    },
    {
      name: "chewtle",
      url: "https://pokeapi.co/api/v2/pokemon/833/",
    },
    {
      name: "drednaw",
      url: "https://pokeapi.co/api/v2/pokemon/834/",
    },
    {
      name: "cramorant",
      url: "https://pokeapi.co/api/v2/pokemon/845/",
    },
    {
      name: "arrokuda",
      url: "https://pokeapi.co/api/v2/pokemon/846/",
    },
    {
      name: "barraskewda",
      url: "https://pokeapi.co/api/v2/pokemon/847/",
    },
    {
      name: "dracovish",
      url: "https://pokeapi.co/api/v2/pokemon/882/",
    },
    {
      name: "arctovish",
      url: "https://pokeapi.co/api/v2/pokemon/883/",
    },
    {
      name: "basculegion-male",
      url: "https://pokeapi.co/api/v2/pokemon/902/",
    },
    {
      name: "quaxly",
      url: "https://pokeapi.co/api/v2/pokemon/912/",
    },
    {
      name: "quaxwell",
      url: "https://pokeapi.co/api/v2/pokemon/913/",
    },
    {
      name: "quaquaval",
      url: "https://pokeapi.co/api/v2/pokemon/914/",
    },
    {
      name: "wiglett",
      url: "https://pokeapi.co/api/v2/pokemon/960/",
    },
    {
      name: "wugtrio",
      url: "https://pokeapi.co/api/v2/pokemon/961/",
    },
    {
      name: "finizen",
      url: "https://pokeapi.co/api/v2/pokemon/963/",
    },
    {
      name: "palafin-zero",
      url: "https://pokeapi.co/api/v2/pokemon/964/",
    },
    {
      name: "veluza",
      url: "https://pokeapi.co/api/v2/pokemon/976/",
    },
    {
      name: "dondozo",
      url: "https://pokeapi.co/api/v2/pokemon/977/",
    },
    {
      name: "tatsugiri-curly",
      url: "https://pokeapi.co/api/v2/pokemon/978/",
    },
    {
      name: "iron-bundle",
      url: "https://pokeapi.co/api/v2/pokemon/991/",
    },
    {
      name: "walking-wake",
      url: "https://pokeapi.co/api/v2/pokemon/1009/",
    },
    {
      name: "rotom-wash",
      url: "https://pokeapi.co/api/v2/pokemon/10009/",
    },
    {
      name: "castform-rainy",
      url: "https://pokeapi.co/api/v2/pokemon/10014/",
    },
    {
      name: "basculin-blue-striped",
      url: "https://pokeapi.co/api/v2/pokemon/10016/",
    },
    {
      name: "keldeo-resolute",
      url: "https://pokeapi.co/api/v2/pokemon/10024/",
    },
    {
      name: "blastoise-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10036/",
    },
    {
      name: "gyarados-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10041/",
    },
    {
      name: "swampert-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10064/",
    },
    {
      name: "sharpedo-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10070/",
    },
    {
      name: "slowbro-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10071/",
    },
    {
      name: "kyogre-primal",
      url: "https://pokeapi.co/api/v2/pokemon/10077/",
    },
    {
      name: "greninja-battle-bond",
      url: "https://pokeapi.co/api/v2/pokemon/10116/",
    },
    {
      name: "greninja-ash",
      url: "https://pokeapi.co/api/v2/pokemon/10117/",
    },
    {
      name: "wishiwashi-school",
      url: "https://pokeapi.co/api/v2/pokemon/10127/",
    },
    {
      name: "araquanid-totem",
      url: "https://pokeapi.co/api/v2/pokemon/10153/",
    },
    {
      name: "cramorant-gulping",
      url: "https://pokeapi.co/api/v2/pokemon/10182/",
    },
    {
      name: "cramorant-gorging",
      url: "https://pokeapi.co/api/v2/pokemon/10183/",
    },
    {
      name: "urshifu-rapid-strike",
      url: "https://pokeapi.co/api/v2/pokemon/10191/",
    },
    {
      name: "blastoise-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10197/",
    },
    {
      name: "kingler-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10203/",
    },
    {
      name: "lapras-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10204/",
    },
    {
      name: "inteleon-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10211/",
    },
    {
      name: "drednaw-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10214/",
    },
    {
      name: "urshifu-rapid-strike-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10227/",
    },
    {
      name: "samurott-hisui",
      url: "https://pokeapi.co/api/v2/pokemon/10236/",
    },
    {
      name: "palkia-origin",
      url: "https://pokeapi.co/api/v2/pokemon/10246/",
    },
    {
      name: "basculin-white-striped",
      url: "https://pokeapi.co/api/v2/pokemon/10247/",
    },
    {
      name: "basculegion-female",
      url: "https://pokeapi.co/api/v2/pokemon/10248/",
    },
    {
      name: "tauros-paldea-aqua-breed",
      url: "https://pokeapi.co/api/v2/pokemon/10252/",
    },
    {
      name: "palafin-hero",
      url: "https://pokeapi.co/api/v2/pokemon/10256/",
    },
    {
      name: "tatsugiri-droopy",
      url: "https://pokeapi.co/api/v2/pokemon/10258/",
    },
    {
      name: "tatsugiri-stretchy",
      url: "https://pokeapi.co/api/v2/pokemon/10259/",
    },
    {
      name: "ogerpon-wellspring-mask",
      url: "https://pokeapi.co/api/v2/pokemon/10273/",
    },
  ],
  grass: [
    {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
    },
    {
      name: "ivysaur",
      url: "https://pokeapi.co/api/v2/pokemon/2/",
    },
    {
      name: "venusaur",
      url: "https://pokeapi.co/api/v2/pokemon/3/",
    },
    {
      name: "oddish",
      url: "https://pokeapi.co/api/v2/pokemon/43/",
    },
    {
      name: "gloom",
      url: "https://pokeapi.co/api/v2/pokemon/44/",
    },
    {
      name: "vileplume",
      url: "https://pokeapi.co/api/v2/pokemon/45/",
    },
    {
      name: "paras",
      url: "https://pokeapi.co/api/v2/pokemon/46/",
    },
    {
      name: "parasect",
      url: "https://pokeapi.co/api/v2/pokemon/47/",
    },
    {
      name: "bellsprout",
      url: "https://pokeapi.co/api/v2/pokemon/69/",
    },
    {
      name: "weepinbell",
      url: "https://pokeapi.co/api/v2/pokemon/70/",
    },
    {
      name: "victreebel",
      url: "https://pokeapi.co/api/v2/pokemon/71/",
    },
    {
      name: "exeggcute",
      url: "https://pokeapi.co/api/v2/pokemon/102/",
    },
    {
      name: "exeggutor",
      url: "https://pokeapi.co/api/v2/pokemon/103/",
    },
    {
      name: "tangela",
      url: "https://pokeapi.co/api/v2/pokemon/114/",
    },
    {
      name: "chikorita",
      url: "https://pokeapi.co/api/v2/pokemon/152/",
    },
    {
      name: "bayleef",
      url: "https://pokeapi.co/api/v2/pokemon/153/",
    },
    {
      name: "meganium",
      url: "https://pokeapi.co/api/v2/pokemon/154/",
    },
    {
      name: "bellossom",
      url: "https://pokeapi.co/api/v2/pokemon/182/",
    },
    {
      name: "hoppip",
      url: "https://pokeapi.co/api/v2/pokemon/187/",
    },
    {
      name: "skiploom",
      url: "https://pokeapi.co/api/v2/pokemon/188/",
    },
    {
      name: "jumpluff",
      url: "https://pokeapi.co/api/v2/pokemon/189/",
    },
    {
      name: "sunkern",
      url: "https://pokeapi.co/api/v2/pokemon/191/",
    },
    {
      name: "sunflora",
      url: "https://pokeapi.co/api/v2/pokemon/192/",
    },
    {
      name: "celebi",
      url: "https://pokeapi.co/api/v2/pokemon/251/",
    },
    {
      name: "treecko",
      url: "https://pokeapi.co/api/v2/pokemon/252/",
    },
    {
      name: "grovyle",
      url: "https://pokeapi.co/api/v2/pokemon/253/",
    },
    {
      name: "sceptile",
      url: "https://pokeapi.co/api/v2/pokemon/254/",
    },
    {
      name: "lotad",
      url: "https://pokeapi.co/api/v2/pokemon/270/",
    },
    {
      name: "lombre",
      url: "https://pokeapi.co/api/v2/pokemon/271/",
    },
    {
      name: "ludicolo",
      url: "https://pokeapi.co/api/v2/pokemon/272/",
    },
    {
      name: "seedot",
      url: "https://pokeapi.co/api/v2/pokemon/273/",
    },
    {
      name: "nuzleaf",
      url: "https://pokeapi.co/api/v2/pokemon/274/",
    },
    {
      name: "shiftry",
      url: "https://pokeapi.co/api/v2/pokemon/275/",
    },
    {
      name: "shroomish",
      url: "https://pokeapi.co/api/v2/pokemon/285/",
    },
    {
      name: "breloom",
      url: "https://pokeapi.co/api/v2/pokemon/286/",
    },
    {
      name: "roselia",
      url: "https://pokeapi.co/api/v2/pokemon/315/",
    },
    {
      name: "cacnea",
      url: "https://pokeapi.co/api/v2/pokemon/331/",
    },
    {
      name: "cacturne",
      url: "https://pokeapi.co/api/v2/pokemon/332/",
    },
    {
      name: "lileep",
      url: "https://pokeapi.co/api/v2/pokemon/345/",
    },
    {
      name: "cradily",
      url: "https://pokeapi.co/api/v2/pokemon/346/",
    },
    {
      name: "tropius",
      url: "https://pokeapi.co/api/v2/pokemon/357/",
    },
    {
      name: "turtwig",
      url: "https://pokeapi.co/api/v2/pokemon/387/",
    },
    {
      name: "grotle",
      url: "https://pokeapi.co/api/v2/pokemon/388/",
    },
    {
      name: "torterra",
      url: "https://pokeapi.co/api/v2/pokemon/389/",
    },
    {
      name: "budew",
      url: "https://pokeapi.co/api/v2/pokemon/406/",
    },
    {
      name: "roserade",
      url: "https://pokeapi.co/api/v2/pokemon/407/",
    },
    {
      name: "wormadam-plant",
      url: "https://pokeapi.co/api/v2/pokemon/413/",
    },
    {
      name: "cherubi",
      url: "https://pokeapi.co/api/v2/pokemon/420/",
    },
    {
      name: "cherrim",
      url: "https://pokeapi.co/api/v2/pokemon/421/",
    },
    {
      name: "carnivine",
      url: "https://pokeapi.co/api/v2/pokemon/455/",
    },
    {
      name: "snover",
      url: "https://pokeapi.co/api/v2/pokemon/459/",
    },
    {
      name: "abomasnow",
      url: "https://pokeapi.co/api/v2/pokemon/460/",
    },
    {
      name: "tangrowth",
      url: "https://pokeapi.co/api/v2/pokemon/465/",
    },
    {
      name: "leafeon",
      url: "https://pokeapi.co/api/v2/pokemon/470/",
    },
    {
      name: "shaymin-land",
      url: "https://pokeapi.co/api/v2/pokemon/492/",
    },
    {
      name: "snivy",
      url: "https://pokeapi.co/api/v2/pokemon/495/",
    },
    {
      name: "servine",
      url: "https://pokeapi.co/api/v2/pokemon/496/",
    },
    {
      name: "serperior",
      url: "https://pokeapi.co/api/v2/pokemon/497/",
    },
    {
      name: "pansage",
      url: "https://pokeapi.co/api/v2/pokemon/511/",
    },
    {
      name: "simisage",
      url: "https://pokeapi.co/api/v2/pokemon/512/",
    },
    {
      name: "sewaddle",
      url: "https://pokeapi.co/api/v2/pokemon/540/",
    },
    {
      name: "swadloon",
      url: "https://pokeapi.co/api/v2/pokemon/541/",
    },
    {
      name: "leavanny",
      url: "https://pokeapi.co/api/v2/pokemon/542/",
    },
    {
      name: "cottonee",
      url: "https://pokeapi.co/api/v2/pokemon/546/",
    },
    {
      name: "whimsicott",
      url: "https://pokeapi.co/api/v2/pokemon/547/",
    },
    {
      name: "petilil",
      url: "https://pokeapi.co/api/v2/pokemon/548/",
    },
    {
      name: "lilligant",
      url: "https://pokeapi.co/api/v2/pokemon/549/",
    },
    {
      name: "maractus",
      url: "https://pokeapi.co/api/v2/pokemon/556/",
    },
    {
      name: "deerling",
      url: "https://pokeapi.co/api/v2/pokemon/585/",
    },
    {
      name: "sawsbuck",
      url: "https://pokeapi.co/api/v2/pokemon/586/",
    },
    {
      name: "foongus",
      url: "https://pokeapi.co/api/v2/pokemon/590/",
    },
    {
      name: "amoonguss",
      url: "https://pokeapi.co/api/v2/pokemon/591/",
    },
    {
      name: "ferroseed",
      url: "https://pokeapi.co/api/v2/pokemon/597/",
    },
    {
      name: "ferrothorn",
      url: "https://pokeapi.co/api/v2/pokemon/598/",
    },
    {
      name: "virizion",
      url: "https://pokeapi.co/api/v2/pokemon/640/",
    },
    {
      name: "chespin",
      url: "https://pokeapi.co/api/v2/pokemon/650/",
    },
    {
      name: "quilladin",
      url: "https://pokeapi.co/api/v2/pokemon/651/",
    },
    {
      name: "chesnaught",
      url: "https://pokeapi.co/api/v2/pokemon/652/",
    },
    {
      name: "skiddo",
      url: "https://pokeapi.co/api/v2/pokemon/672/",
    },
    {
      name: "gogoat",
      url: "https://pokeapi.co/api/v2/pokemon/673/",
    },
    {
      name: "phantump",
      url: "https://pokeapi.co/api/v2/pokemon/708/",
    },
    {
      name: "trevenant",
      url: "https://pokeapi.co/api/v2/pokemon/709/",
    },
    {
      name: "pumpkaboo-average",
      url: "https://pokeapi.co/api/v2/pokemon/710/",
    },
    {
      name: "gourgeist-average",
      url: "https://pokeapi.co/api/v2/pokemon/711/",
    },
    {
      name: "rowlet",
      url: "https://pokeapi.co/api/v2/pokemon/722/",
    },
    {
      name: "dartrix",
      url: "https://pokeapi.co/api/v2/pokemon/723/",
    },
    {
      name: "decidueye",
      url: "https://pokeapi.co/api/v2/pokemon/724/",
    },
    {
      name: "fomantis",
      url: "https://pokeapi.co/api/v2/pokemon/753/",
    },
    {
      name: "lurantis",
      url: "https://pokeapi.co/api/v2/pokemon/754/",
    },
    {
      name: "morelull",
      url: "https://pokeapi.co/api/v2/pokemon/755/",
    },
    {
      name: "shiinotic",
      url: "https://pokeapi.co/api/v2/pokemon/756/",
    },
    {
      name: "bounsweet",
      url: "https://pokeapi.co/api/v2/pokemon/761/",
    },
    {
      name: "steenee",
      url: "https://pokeapi.co/api/v2/pokemon/762/",
    },
    {
      name: "tsareena",
      url: "https://pokeapi.co/api/v2/pokemon/763/",
    },
    {
      name: "dhelmise",
      url: "https://pokeapi.co/api/v2/pokemon/781/",
    },
    {
      name: "tapu-bulu",
      url: "https://pokeapi.co/api/v2/pokemon/787/",
    },
    {
      name: "kartana",
      url: "https://pokeapi.co/api/v2/pokemon/798/",
    },
    {
      name: "grookey",
      url: "https://pokeapi.co/api/v2/pokemon/810/",
    },
    {
      name: "thwackey",
      url: "https://pokeapi.co/api/v2/pokemon/811/",
    },
    {
      name: "rillaboom",
      url: "https://pokeapi.co/api/v2/pokemon/812/",
    },
    {
      name: "gossifleur",
      url: "https://pokeapi.co/api/v2/pokemon/829/",
    },
    {
      name: "eldegoss",
      url: "https://pokeapi.co/api/v2/pokemon/830/",
    },
    {
      name: "applin",
      url: "https://pokeapi.co/api/v2/pokemon/840/",
    },
    {
      name: "flapple",
      url: "https://pokeapi.co/api/v2/pokemon/841/",
    },
    {
      name: "appletun",
      url: "https://pokeapi.co/api/v2/pokemon/842/",
    },
    {
      name: "zarude",
      url: "https://pokeapi.co/api/v2/pokemon/893/",
    },
    {
      name: "calyrex",
      url: "https://pokeapi.co/api/v2/pokemon/898/",
    },
    {
      name: "sprigatito",
      url: "https://pokeapi.co/api/v2/pokemon/906/",
    },
    {
      name: "floragato",
      url: "https://pokeapi.co/api/v2/pokemon/907/",
    },
    {
      name: "meowscarada",
      url: "https://pokeapi.co/api/v2/pokemon/908/",
    },
    {
      name: "smoliv",
      url: "https://pokeapi.co/api/v2/pokemon/928/",
    },
    {
      name: "dolliv",
      url: "https://pokeapi.co/api/v2/pokemon/929/",
    },
    {
      name: "arboliva",
      url: "https://pokeapi.co/api/v2/pokemon/930/",
    },
    {
      name: "bramblin",
      url: "https://pokeapi.co/api/v2/pokemon/946/",
    },
    {
      name: "brambleghast",
      url: "https://pokeapi.co/api/v2/pokemon/947/",
    },
    {
      name: "toedscool",
      url: "https://pokeapi.co/api/v2/pokemon/948/",
    },
    {
      name: "toedscruel",
      url: "https://pokeapi.co/api/v2/pokemon/949/",
    },
    {
      name: "capsakid",
      url: "https://pokeapi.co/api/v2/pokemon/951/",
    },
    {
      name: "scovillain",
      url: "https://pokeapi.co/api/v2/pokemon/952/",
    },
    {
      name: "brute-bonnet",
      url: "https://pokeapi.co/api/v2/pokemon/986/",
    },
    {
      name: "wo-chien",
      url: "https://pokeapi.co/api/v2/pokemon/1001/",
    },
    {
      name: "iron-leaves",
      url: "https://pokeapi.co/api/v2/pokemon/1010/",
    },
    {
      name: "dipplin",
      url: "https://pokeapi.co/api/v2/pokemon/1011/",
    },
    {
      name: "poltchageist",
      url: "https://pokeapi.co/api/v2/pokemon/1012/",
    },
    {
      name: "sinistcha",
      url: "https://pokeapi.co/api/v2/pokemon/1013/",
    },
    {
      name: "ogerpon",
      url: "https://pokeapi.co/api/v2/pokemon/1017/",
    },
    {
      name: "hydrapple",
      url: "https://pokeapi.co/api/v2/pokemon/1019/",
    },
    {
      name: "shaymin-sky",
      url: "https://pokeapi.co/api/v2/pokemon/10006/",
    },
    {
      name: "rotom-mow",
      url: "https://pokeapi.co/api/v2/pokemon/10012/",
    },
    {
      name: "pumpkaboo-small",
      url: "https://pokeapi.co/api/v2/pokemon/10027/",
    },
    {
      name: "pumpkaboo-large",
      url: "https://pokeapi.co/api/v2/pokemon/10028/",
    },
    {
      name: "pumpkaboo-super",
      url: "https://pokeapi.co/api/v2/pokemon/10029/",
    },
    {
      name: "gourgeist-small",
      url: "https://pokeapi.co/api/v2/pokemon/10030/",
    },
    {
      name: "gourgeist-large",
      url: "https://pokeapi.co/api/v2/pokemon/10031/",
    },
    {
      name: "gourgeist-super",
      url: "https://pokeapi.co/api/v2/pokemon/10032/",
    },
    {
      name: "venusaur-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10033/",
    },
    {
      name: "abomasnow-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10060/",
    },
    {
      name: "sceptile-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10065/",
    },
    {
      name: "exeggutor-alola",
      url: "https://pokeapi.co/api/v2/pokemon/10114/",
    },
    {
      name: "lurantis-totem",
      url: "https://pokeapi.co/api/v2/pokemon/10128/",
    },
    {
      name: "zarude-dada",
      url: "https://pokeapi.co/api/v2/pokemon/10192/",
    },
    {
      name: "venusaur-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10195/",
    },
    {
      name: "rillaboom-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10209/",
    },
    {
      name: "flapple-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10216/",
    },
    {
      name: "appletun-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10217/",
    },
    {
      name: "voltorb-hisui",
      url: "https://pokeapi.co/api/v2/pokemon/10231/",
    },
    {
      name: "electrode-hisui",
      url: "https://pokeapi.co/api/v2/pokemon/10232/",
    },
    {
      name: "lilligant-hisui",
      url: "https://pokeapi.co/api/v2/pokemon/10237/",
    },
    {
      name: "decidueye-hisui",
      url: "https://pokeapi.co/api/v2/pokemon/10244/",
    },
    {
      name: "ogerpon-wellspring-mask",
      url: "https://pokeapi.co/api/v2/pokemon/10273/",
    },
    {
      name: "ogerpon-hearthflame-mask",
      url: "https://pokeapi.co/api/v2/pokemon/10274/",
    },
    {
      name: "ogerpon-cornerstone-mask",
      url: "https://pokeapi.co/api/v2/pokemon/10275/",
    },
  ],
  electric: [
    {
      name: "pikachu",
      url: "https://pokeapi.co/api/v2/pokemon/25/",
    },
    {
      name: "raichu",
      url: "https://pokeapi.co/api/v2/pokemon/26/",
    },
    {
      name: "magnemite",
      url: "https://pokeapi.co/api/v2/pokemon/81/",
    },
    {
      name: "magneton",
      url: "https://pokeapi.co/api/v2/pokemon/82/",
    },
    {
      name: "voltorb",
      url: "https://pokeapi.co/api/v2/pokemon/100/",
    },
    {
      name: "electrode",
      url: "https://pokeapi.co/api/v2/pokemon/101/",
    },
    {
      name: "electabuzz",
      url: "https://pokeapi.co/api/v2/pokemon/125/",
    },
    {
      name: "jolteon",
      url: "https://pokeapi.co/api/v2/pokemon/135/",
    },
    {
      name: "zapdos",
      url: "https://pokeapi.co/api/v2/pokemon/145/",
    },
    {
      name: "chinchou",
      url: "https://pokeapi.co/api/v2/pokemon/170/",
    },
    {
      name: "lanturn",
      url: "https://pokeapi.co/api/v2/pokemon/171/",
    },
    {
      name: "pichu",
      url: "https://pokeapi.co/api/v2/pokemon/172/",
    },
    {
      name: "mareep",
      url: "https://pokeapi.co/api/v2/pokemon/179/",
    },
    {
      name: "flaaffy",
      url: "https://pokeapi.co/api/v2/pokemon/180/",
    },
    {
      name: "ampharos",
      url: "https://pokeapi.co/api/v2/pokemon/181/",
    },
    {
      name: "elekid",
      url: "https://pokeapi.co/api/v2/pokemon/239/",
    },
    {
      name: "raikou",
      url: "https://pokeapi.co/api/v2/pokemon/243/",
    },
    {
      name: "electrike",
      url: "https://pokeapi.co/api/v2/pokemon/309/",
    },
    {
      name: "manectric",
      url: "https://pokeapi.co/api/v2/pokemon/310/",
    },
    {
      name: "plusle",
      url: "https://pokeapi.co/api/v2/pokemon/311/",
    },
    {
      name: "minun",
      url: "https://pokeapi.co/api/v2/pokemon/312/",
    },
    {
      name: "shinx",
      url: "https://pokeapi.co/api/v2/pokemon/403/",
    },
    {
      name: "luxio",
      url: "https://pokeapi.co/api/v2/pokemon/404/",
    },
    {
      name: "luxray",
      url: "https://pokeapi.co/api/v2/pokemon/405/",
    },
    {
      name: "pachirisu",
      url: "https://pokeapi.co/api/v2/pokemon/417/",
    },
    {
      name: "magnezone",
      url: "https://pokeapi.co/api/v2/pokemon/462/",
    },
    {
      name: "electivire",
      url: "https://pokeapi.co/api/v2/pokemon/466/",
    },
    {
      name: "rotom",
      url: "https://pokeapi.co/api/v2/pokemon/479/",
    },
    {
      name: "blitzle",
      url: "https://pokeapi.co/api/v2/pokemon/522/",
    },
    {
      name: "zebstrika",
      url: "https://pokeapi.co/api/v2/pokemon/523/",
    },
    {
      name: "emolga",
      url: "https://pokeapi.co/api/v2/pokemon/587/",
    },
    {
      name: "joltik",
      url: "https://pokeapi.co/api/v2/pokemon/595/",
    },
    {
      name: "galvantula",
      url: "https://pokeapi.co/api/v2/pokemon/596/",
    },
    {
      name: "tynamo",
      url: "https://pokeapi.co/api/v2/pokemon/602/",
    },
    {
      name: "eelektrik",
      url: "https://pokeapi.co/api/v2/pokemon/603/",
    },
    {
      name: "eelektross",
      url: "https://pokeapi.co/api/v2/pokemon/604/",
    },
    {
      name: "stunfisk",
      url: "https://pokeapi.co/api/v2/pokemon/618/",
    },
    {
      name: "thundurus-incarnate",
      url: "https://pokeapi.co/api/v2/pokemon/642/",
    },
    {
      name: "zekrom",
      url: "https://pokeapi.co/api/v2/pokemon/644/",
    },
    {
      name: "helioptile",
      url: "https://pokeapi.co/api/v2/pokemon/694/",
    },
    {
      name: "heliolisk",
      url: "https://pokeapi.co/api/v2/pokemon/695/",
    },
    {
      name: "dedenne",
      url: "https://pokeapi.co/api/v2/pokemon/702/",
    },
    {
      name: "charjabug",
      url: "https://pokeapi.co/api/v2/pokemon/737/",
    },
    {
      name: "vikavolt",
      url: "https://pokeapi.co/api/v2/pokemon/738/",
    },
    {
      name: "togedemaru",
      url: "https://pokeapi.co/api/v2/pokemon/777/",
    },
    {
      name: "tapu-koko",
      url: "https://pokeapi.co/api/v2/pokemon/785/",
    },
    {
      name: "xurkitree",
      url: "https://pokeapi.co/api/v2/pokemon/796/",
    },
    {
      name: "zeraora",
      url: "https://pokeapi.co/api/v2/pokemon/807/",
    },
    {
      name: "yamper",
      url: "https://pokeapi.co/api/v2/pokemon/835/",
    },
    {
      name: "boltund",
      url: "https://pokeapi.co/api/v2/pokemon/836/",
    },
    {
      name: "toxel",
      url: "https://pokeapi.co/api/v2/pokemon/848/",
    },
    {
      name: "toxtricity-amped",
      url: "https://pokeapi.co/api/v2/pokemon/849/",
    },
    {
      name: "pincurchin",
      url: "https://pokeapi.co/api/v2/pokemon/871/",
    },
    {
      name: "morpeko-full-belly",
      url: "https://pokeapi.co/api/v2/pokemon/877/",
    },
    {
      name: "dracozolt",
      url: "https://pokeapi.co/api/v2/pokemon/880/",
    },
    {
      name: "arctozolt",
      url: "https://pokeapi.co/api/v2/pokemon/881/",
    },
    {
      name: "regieleki",
      url: "https://pokeapi.co/api/v2/pokemon/894/",
    },
    {
      name: "pawmi",
      url: "https://pokeapi.co/api/v2/pokemon/921/",
    },
    {
      name: "pawmo",
      url: "https://pokeapi.co/api/v2/pokemon/922/",
    },
    {
      name: "pawmot",
      url: "https://pokeapi.co/api/v2/pokemon/923/",
    },
    {
      name: "tadbulb",
      url: "https://pokeapi.co/api/v2/pokemon/938/",
    },
    {
      name: "bellibolt",
      url: "https://pokeapi.co/api/v2/pokemon/939/",
    },
    {
      name: "wattrel",
      url: "https://pokeapi.co/api/v2/pokemon/940/",
    },
    {
      name: "kilowattrel",
      url: "https://pokeapi.co/api/v2/pokemon/941/",
    },
    {
      name: "sandy-shocks",
      url: "https://pokeapi.co/api/v2/pokemon/989/",
    },
    {
      name: "iron-hands",
      url: "https://pokeapi.co/api/v2/pokemon/992/",
    },
    {
      name: "iron-thorns",
      url: "https://pokeapi.co/api/v2/pokemon/995/",
    },
    {
      name: "miraidon",
      url: "https://pokeapi.co/api/v2/pokemon/1008/",
    },
    {
      name: "raging-bolt",
      url: "https://pokeapi.co/api/v2/pokemon/1021/",
    },
    {
      name: "rotom-heat",
      url: "https://pokeapi.co/api/v2/pokemon/10008/",
    },
    {
      name: "rotom-wash",
      url: "https://pokeapi.co/api/v2/pokemon/10009/",
    },
    {
      name: "rotom-frost",
      url: "https://pokeapi.co/api/v2/pokemon/10010/",
    },
    {
      name: "rotom-fan",
      url: "https://pokeapi.co/api/v2/pokemon/10011/",
    },
    {
      name: "rotom-mow",
      url: "https://pokeapi.co/api/v2/pokemon/10012/",
    },
    {
      name: "thundurus-therian",
      url: "https://pokeapi.co/api/v2/pokemon/10020/",
    },
    {
      name: "ampharos-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10045/",
    },
    {
      name: "manectric-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10055/",
    },
    {
      name: "pikachu-rock-star",
      url: "https://pokeapi.co/api/v2/pokemon/10080/",
    },
    {
      name: "pikachu-belle",
      url: "https://pokeapi.co/api/v2/pokemon/10081/",
    },
    {
      name: "pikachu-pop-star",
      url: "https://pokeapi.co/api/v2/pokemon/10082/",
    },
    {
      name: "pikachu-phd",
      url: "https://pokeapi.co/api/v2/pokemon/10083/",
    },
    {
      name: "pikachu-libre",
      url: "https://pokeapi.co/api/v2/pokemon/10084/",
    },
    {
      name: "pikachu-cosplay",
      url: "https://pokeapi.co/api/v2/pokemon/10085/",
    },
    {
      name: "pikachu-original-cap",
      url: "https://pokeapi.co/api/v2/pokemon/10094/",
    },
    {
      name: "pikachu-hoenn-cap",
      url: "https://pokeapi.co/api/v2/pokemon/10095/",
    },
    {
      name: "pikachu-sinnoh-cap",
      url: "https://pokeapi.co/api/v2/pokemon/10096/",
    },
    {
      name: "pikachu-unova-cap",
      url: "https://pokeapi.co/api/v2/pokemon/10097/",
    },
    {
      name: "pikachu-kalos-cap",
      url: "https://pokeapi.co/api/v2/pokemon/10098/",
    },
    {
      name: "pikachu-alola-cap",
      url: "https://pokeapi.co/api/v2/pokemon/10099/",
    },
    {
      name: "raichu-alola",
      url: "https://pokeapi.co/api/v2/pokemon/10100/",
    },
    {
      name: "geodude-alola",
      url: "https://pokeapi.co/api/v2/pokemon/10109/",
    },
    {
      name: "graveler-alola",
      url: "https://pokeapi.co/api/v2/pokemon/10110/",
    },
    {
      name: "golem-alola",
      url: "https://pokeapi.co/api/v2/pokemon/10111/",
    },
    {
      name: "vikavolt-totem",
      url: "https://pokeapi.co/api/v2/pokemon/10122/",
    },
    {
      name: "oricorio-pom-pom",
      url: "https://pokeapi.co/api/v2/pokemon/10123/",
    },
    {
      name: "pikachu-partner-cap",
      url: "https://pokeapi.co/api/v2/pokemon/10148/",
    },
    {
      name: "togedemaru-totem",
      url: "https://pokeapi.co/api/v2/pokemon/10154/",
    },
    {
      name: "pikachu-starter",
      url: "https://pokeapi.co/api/v2/pokemon/10158/",
    },
    {
      name: "pikachu-world-cap",
      url: "https://pokeapi.co/api/v2/pokemon/10160/",
    },
    {
      name: "toxtricity-low-key",
      url: "https://pokeapi.co/api/v2/pokemon/10184/",
    },
    {
      name: "morpeko-hangry",
      url: "https://pokeapi.co/api/v2/pokemon/10187/",
    },
    {
      name: "pikachu-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10199/",
    },
    {
      name: "toxtricity-amped-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10219/",
    },
    {
      name: "toxtricity-low-key-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10228/",
    },
    {
      name: "voltorb-hisui",
      url: "https://pokeapi.co/api/v2/pokemon/10231/",
    },
    {
      name: "electrode-hisui",
      url: "https://pokeapi.co/api/v2/pokemon/10232/",
    },
    {
      name: "miraidon-low-power-mode",
      url: "https://pokeapi.co/api/v2/pokemon/10268/",
    },
    {
      name: "miraidon-drive-mode",
      url: "https://pokeapi.co/api/v2/pokemon/10269/",
    },
    {
      name: "miraidon-aquatic-mode",
      url: "https://pokeapi.co/api/v2/pokemon/10270/",
    },
    {
      name: "miraidon-glide-mode",
      url: "https://pokeapi.co/api/v2/pokemon/10271/",
    },
  ],
  psychic: [
    {
      name: "abra",
      url: "https://pokeapi.co/api/v2/pokemon/63/",
    },
    {
      name: "kadabra",
      url: "https://pokeapi.co/api/v2/pokemon/64/",
    },
    {
      name: "alakazam",
      url: "https://pokeapi.co/api/v2/pokemon/65/",
    },
    {
      name: "slowpoke",
      url: "https://pokeapi.co/api/v2/pokemon/79/",
    },
    {
      name: "slowbro",
      url: "https://pokeapi.co/api/v2/pokemon/80/",
    },
    {
      name: "drowzee",
      url: "https://pokeapi.co/api/v2/pokemon/96/",
    },
    {
      name: "hypno",
      url: "https://pokeapi.co/api/v2/pokemon/97/",
    },
    {
      name: "exeggcute",
      url: "https://pokeapi.co/api/v2/pokemon/102/",
    },
    {
      name: "exeggutor",
      url: "https://pokeapi.co/api/v2/pokemon/103/",
    },
    {
      name: "starmie",
      url: "https://pokeapi.co/api/v2/pokemon/121/",
    },
    {
      name: "mr-mime",
      url: "https://pokeapi.co/api/v2/pokemon/122/",
    },
    {
      name: "jynx",
      url: "https://pokeapi.co/api/v2/pokemon/124/",
    },
    {
      name: "mewtwo",
      url: "https://pokeapi.co/api/v2/pokemon/150/",
    },
    {
      name: "mew",
      url: "https://pokeapi.co/api/v2/pokemon/151/",
    },
    {
      name: "natu",
      url: "https://pokeapi.co/api/v2/pokemon/177/",
    },
    {
      name: "xatu",
      url: "https://pokeapi.co/api/v2/pokemon/178/",
    },
    {
      name: "espeon",
      url: "https://pokeapi.co/api/v2/pokemon/196/",
    },
    {
      name: "slowking",
      url: "https://pokeapi.co/api/v2/pokemon/199/",
    },
    {
      name: "unown",
      url: "https://pokeapi.co/api/v2/pokemon/201/",
    },
    {
      name: "wobbuffet",
      url: "https://pokeapi.co/api/v2/pokemon/202/",
    },
    {
      name: "girafarig",
      url: "https://pokeapi.co/api/v2/pokemon/203/",
    },
    {
      name: "smoochum",
      url: "https://pokeapi.co/api/v2/pokemon/238/",
    },
    {
      name: "lugia",
      url: "https://pokeapi.co/api/v2/pokemon/249/",
    },
    {
      name: "celebi",
      url: "https://pokeapi.co/api/v2/pokemon/251/",
    },
    {
      name: "ralts",
      url: "https://pokeapi.co/api/v2/pokemon/280/",
    },
    {
      name: "kirlia",
      url: "https://pokeapi.co/api/v2/pokemon/281/",
    },
    {
      name: "gardevoir",
      url: "https://pokeapi.co/api/v2/pokemon/282/",
    },
    {
      name: "meditite",
      url: "https://pokeapi.co/api/v2/pokemon/307/",
    },
    {
      name: "medicham",
      url: "https://pokeapi.co/api/v2/pokemon/308/",
    },
    {
      name: "spoink",
      url: "https://pokeapi.co/api/v2/pokemon/325/",
    },
    {
      name: "grumpig",
      url: "https://pokeapi.co/api/v2/pokemon/326/",
    },
    {
      name: "lunatone",
      url: "https://pokeapi.co/api/v2/pokemon/337/",
    },
    {
      name: "solrock",
      url: "https://pokeapi.co/api/v2/pokemon/338/",
    },
    {
      name: "baltoy",
      url: "https://pokeapi.co/api/v2/pokemon/343/",
    },
    {
      name: "claydol",
      url: "https://pokeapi.co/api/v2/pokemon/344/",
    },
    {
      name: "chimecho",
      url: "https://pokeapi.co/api/v2/pokemon/358/",
    },
    {
      name: "wynaut",
      url: "https://pokeapi.co/api/v2/pokemon/360/",
    },
    {
      name: "beldum",
      url: "https://pokeapi.co/api/v2/pokemon/374/",
    },
    {
      name: "metang",
      url: "https://pokeapi.co/api/v2/pokemon/375/",
    },
    {
      name: "metagross",
      url: "https://pokeapi.co/api/v2/pokemon/376/",
    },
    {
      name: "latias",
      url: "https://pokeapi.co/api/v2/pokemon/380/",
    },
    {
      name: "latios",
      url: "https://pokeapi.co/api/v2/pokemon/381/",
    },
    {
      name: "jirachi",
      url: "https://pokeapi.co/api/v2/pokemon/385/",
    },
    {
      name: "deoxys-normal",
      url: "https://pokeapi.co/api/v2/pokemon/386/",
    },
    {
      name: "chingling",
      url: "https://pokeapi.co/api/v2/pokemon/433/",
    },
    {
      name: "bronzor",
      url: "https://pokeapi.co/api/v2/pokemon/436/",
    },
    {
      name: "bronzong",
      url: "https://pokeapi.co/api/v2/pokemon/437/",
    },
    {
      name: "mime-jr",
      url: "https://pokeapi.co/api/v2/pokemon/439/",
    },
    {
      name: "gallade",
      url: "https://pokeapi.co/api/v2/pokemon/475/",
    },
    {
      name: "uxie",
      url: "https://pokeapi.co/api/v2/pokemon/480/",
    },
    {
      name: "mesprit",
      url: "https://pokeapi.co/api/v2/pokemon/481/",
    },
    {
      name: "azelf",
      url: "https://pokeapi.co/api/v2/pokemon/482/",
    },
    {
      name: "cresselia",
      url: "https://pokeapi.co/api/v2/pokemon/488/",
    },
    {
      name: "victini",
      url: "https://pokeapi.co/api/v2/pokemon/494/",
    },
    {
      name: "munna",
      url: "https://pokeapi.co/api/v2/pokemon/517/",
    },
    {
      name: "musharna",
      url: "https://pokeapi.co/api/v2/pokemon/518/",
    },
    {
      name: "woobat",
      url: "https://pokeapi.co/api/v2/pokemon/527/",
    },
    {
      name: "swoobat",
      url: "https://pokeapi.co/api/v2/pokemon/528/",
    },
    {
      name: "sigilyph",
      url: "https://pokeapi.co/api/v2/pokemon/561/",
    },
    {
      name: "gothita",
      url: "https://pokeapi.co/api/v2/pokemon/574/",
    },
    {
      name: "gothorita",
      url: "https://pokeapi.co/api/v2/pokemon/575/",
    },
    {
      name: "gothitelle",
      url: "https://pokeapi.co/api/v2/pokemon/576/",
    },
    {
      name: "solosis",
      url: "https://pokeapi.co/api/v2/pokemon/577/",
    },
    {
      name: "duosion",
      url: "https://pokeapi.co/api/v2/pokemon/578/",
    },
    {
      name: "reuniclus",
      url: "https://pokeapi.co/api/v2/pokemon/579/",
    },
    {
      name: "elgyem",
      url: "https://pokeapi.co/api/v2/pokemon/605/",
    },
    {
      name: "beheeyem",
      url: "https://pokeapi.co/api/v2/pokemon/606/",
    },
    {
      name: "meloetta-aria",
      url: "https://pokeapi.co/api/v2/pokemon/648/",
    },
    {
      name: "delphox",
      url: "https://pokeapi.co/api/v2/pokemon/655/",
    },
    {
      name: "espurr",
      url: "https://pokeapi.co/api/v2/pokemon/677/",
    },
    {
      name: "meowstic-male",
      url: "https://pokeapi.co/api/v2/pokemon/678/",
    },
    {
      name: "inkay",
      url: "https://pokeapi.co/api/v2/pokemon/686/",
    },
    {
      name: "malamar",
      url: "https://pokeapi.co/api/v2/pokemon/687/",
    },
    {
      name: "hoopa",
      url: "https://pokeapi.co/api/v2/pokemon/720/",
    },
    {
      name: "oranguru",
      url: "https://pokeapi.co/api/v2/pokemon/765/",
    },
    {
      name: "bruxish",
      url: "https://pokeapi.co/api/v2/pokemon/779/",
    },
    {
      name: "tapu-lele",
      url: "https://pokeapi.co/api/v2/pokemon/786/",
    },
    {
      name: "cosmog",
      url: "https://pokeapi.co/api/v2/pokemon/789/",
    },
    {
      name: "cosmoem",
      url: "https://pokeapi.co/api/v2/pokemon/790/",
    },
    {
      name: "solgaleo",
      url: "https://pokeapi.co/api/v2/pokemon/791/",
    },
    {
      name: "lunala",
      url: "https://pokeapi.co/api/v2/pokemon/792/",
    },
    {
      name: "necrozma",
      url: "https://pokeapi.co/api/v2/pokemon/800/",
    },
    {
      name: "dottler",
      url: "https://pokeapi.co/api/v2/pokemon/825/",
    },
    {
      name: "orbeetle",
      url: "https://pokeapi.co/api/v2/pokemon/826/",
    },
    {
      name: "hatenna",
      url: "https://pokeapi.co/api/v2/pokemon/856/",
    },
    {
      name: "hattrem",
      url: "https://pokeapi.co/api/v2/pokemon/857/",
    },
    {
      name: "hatterene",
      url: "https://pokeapi.co/api/v2/pokemon/858/",
    },
    {
      name: "mr-rime",
      url: "https://pokeapi.co/api/v2/pokemon/866/",
    },
    {
      name: "indeedee-male",
      url: "https://pokeapi.co/api/v2/pokemon/876/",
    },
    {
      name: "calyrex",
      url: "https://pokeapi.co/api/v2/pokemon/898/",
    },
    {
      name: "wyrdeer",
      url: "https://pokeapi.co/api/v2/pokemon/899/",
    },
    {
      name: "armarouge",
      url: "https://pokeapi.co/api/v2/pokemon/936/",
    },
    {
      name: "rabsca",
      url: "https://pokeapi.co/api/v2/pokemon/954/",
    },
    {
      name: "flittle",
      url: "https://pokeapi.co/api/v2/pokemon/955/",
    },
    {
      name: "espathra",
      url: "https://pokeapi.co/api/v2/pokemon/956/",
    },
    {
      name: "veluza",
      url: "https://pokeapi.co/api/v2/pokemon/976/",
    },
    {
      name: "farigiraf",
      url: "https://pokeapi.co/api/v2/pokemon/981/",
    },
    {
      name: "scream-tail",
      url: "https://pokeapi.co/api/v2/pokemon/985/",
    },
    {
      name: "iron-leaves",
      url: "https://pokeapi.co/api/v2/pokemon/1010/",
    },
    {
      name: "munkidori",
      url: "https://pokeapi.co/api/v2/pokemon/1015/",
    },
    {
      name: "iron-boulder",
      url: "https://pokeapi.co/api/v2/pokemon/1022/",
    },
    {
      name: "iron-crown",
      url: "https://pokeapi.co/api/v2/pokemon/1023/",
    },
    {
      name: "deoxys-attack",
      url: "https://pokeapi.co/api/v2/pokemon/10001/",
    },
    {
      name: "deoxys-defense",
      url: "https://pokeapi.co/api/v2/pokemon/10002/",
    },
    {
      name: "deoxys-speed",
      url: "https://pokeapi.co/api/v2/pokemon/10003/",
    },
    {
      name: "darmanitan-zen",
      url: "https://pokeapi.co/api/v2/pokemon/10017/",
    },
    {
      name: "meowstic-female",
      url: "https://pokeapi.co/api/v2/pokemon/10025/",
    },
    {
      name: "alakazam-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10037/",
    },
    {
      name: "mewtwo-mega-x",
      url: "https://pokeapi.co/api/v2/pokemon/10043/",
    },
    {
      name: "mewtwo-mega-y",
      url: "https://pokeapi.co/api/v2/pokemon/10044/",
    },
    {
      name: "gardevoir-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10051/",
    },
    {
      name: "medicham-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10054/",
    },
    {
      name: "latias-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10062/",
    },
    {
      name: "latios-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10063/",
    },
    {
      name: "gallade-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10068/",
    },
    {
      name: "slowbro-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10071/",
    },
    {
      name: "metagross-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10076/",
    },
    {
      name: "hoopa-unbound",
      url: "https://pokeapi.co/api/v2/pokemon/10086/",
    },
    {
      name: "raichu-alola",
      url: "https://pokeapi.co/api/v2/pokemon/10100/",
    },
    {
      name: "oricorio-pau",
      url: "https://pokeapi.co/api/v2/pokemon/10124/",
    },
    {
      name: "necrozma-dusk",
      url: "https://pokeapi.co/api/v2/pokemon/10155/",
    },
    {
      name: "necrozma-dawn",
      url: "https://pokeapi.co/api/v2/pokemon/10156/",
    },
    {
      name: "necrozma-ultra",
      url: "https://pokeapi.co/api/v2/pokemon/10157/",
    },
    {
      name: "ponyta-galar",
      url: "https://pokeapi.co/api/v2/pokemon/10162/",
    },
    {
      name: "rapidash-galar",
      url: "https://pokeapi.co/api/v2/pokemon/10163/",
    },
    {
      name: "slowpoke-galar",
      url: "https://pokeapi.co/api/v2/pokemon/10164/",
    },
    {
      name: "slowbro-galar",
      url: "https://pokeapi.co/api/v2/pokemon/10165/",
    },
    {
      name: "mr-mime-galar",
      url: "https://pokeapi.co/api/v2/pokemon/10168/",
    },
    {
      name: "articuno-galar",
      url: "https://pokeapi.co/api/v2/pokemon/10169/",
    },
    {
      name: "slowking-galar",
      url: "https://pokeapi.co/api/v2/pokemon/10172/",
    },
    {
      name: "indeedee-female",
      url: "https://pokeapi.co/api/v2/pokemon/10186/",
    },
    {
      name: "calyrex-ice",
      url: "https://pokeapi.co/api/v2/pokemon/10193/",
    },
    {
      name: "calyrex-shadow",
      url: "https://pokeapi.co/api/v2/pokemon/10194/",
    },
    {
      name: "orbeetle-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10213/",
    },
    {
      name: "hatterene-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10221/",
    },
    {
      name: "braviary-hisui",
      url: "https://pokeapi.co/api/v2/pokemon/10240/",
    },
  ],
  ice: [
    {
      name: "dewgong",
      url: "https://pokeapi.co/api/v2/pokemon/87/",
    },
    {
      name: "cloyster",
      url: "https://pokeapi.co/api/v2/pokemon/91/",
    },
    {
      name: "jynx",
      url: "https://pokeapi.co/api/v2/pokemon/124/",
    },
    {
      name: "lapras",
      url: "https://pokeapi.co/api/v2/pokemon/131/",
    },
    {
      name: "articuno",
      url: "https://pokeapi.co/api/v2/pokemon/144/",
    },
    {
      name: "sneasel",
      url: "https://pokeapi.co/api/v2/pokemon/215/",
    },
    {
      name: "swinub",
      url: "https://pokeapi.co/api/v2/pokemon/220/",
    },
    {
      name: "piloswine",
      url: "https://pokeapi.co/api/v2/pokemon/221/",
    },
    {
      name: "delibird",
      url: "https://pokeapi.co/api/v2/pokemon/225/",
    },
    {
      name: "smoochum",
      url: "https://pokeapi.co/api/v2/pokemon/238/",
    },
    {
      name: "snorunt",
      url: "https://pokeapi.co/api/v2/pokemon/361/",
    },
    {
      name: "glalie",
      url: "https://pokeapi.co/api/v2/pokemon/362/",
    },
    {
      name: "spheal",
      url: "https://pokeapi.co/api/v2/pokemon/363/",
    },
    {
      name: "sealeo",
      url: "https://pokeapi.co/api/v2/pokemon/364/",
    },
    {
      name: "walrein",
      url: "https://pokeapi.co/api/v2/pokemon/365/",
    },
    {
      name: "regice",
      url: "https://pokeapi.co/api/v2/pokemon/378/",
    },
    {
      name: "snover",
      url: "https://pokeapi.co/api/v2/pokemon/459/",
    },
    {
      name: "abomasnow",
      url: "https://pokeapi.co/api/v2/pokemon/460/",
    },
    {
      name: "weavile",
      url: "https://pokeapi.co/api/v2/pokemon/461/",
    },
    {
      name: "glaceon",
      url: "https://pokeapi.co/api/v2/pokemon/471/",
    },
    {
      name: "mamoswine",
      url: "https://pokeapi.co/api/v2/pokemon/473/",
    },
    {
      name: "froslass",
      url: "https://pokeapi.co/api/v2/pokemon/478/",
    },
    {
      name: "vanillite",
      url: "https://pokeapi.co/api/v2/pokemon/582/",
    },
    {
      name: "vanillish",
      url: "https://pokeapi.co/api/v2/pokemon/583/",
    },
    {
      name: "vanilluxe",
      url: "https://pokeapi.co/api/v2/pokemon/584/",
    },
    {
      name: "cubchoo",
      url: "https://pokeapi.co/api/v2/pokemon/613/",
    },
    {
      name: "beartic",
      url: "https://pokeapi.co/api/v2/pokemon/614/",
    },
    {
      name: "cryogonal",
      url: "https://pokeapi.co/api/v2/pokemon/615/",
    },
    {
      name: "kyurem",
      url: "https://pokeapi.co/api/v2/pokemon/646/",
    },
    {
      name: "amaura",
      url: "https://pokeapi.co/api/v2/pokemon/698/",
    },
    {
      name: "aurorus",
      url: "https://pokeapi.co/api/v2/pokemon/699/",
    },
    {
      name: "bergmite",
      url: "https://pokeapi.co/api/v2/pokemon/712/",
    },
    {
      name: "avalugg",
      url: "https://pokeapi.co/api/v2/pokemon/713/",
    },
    {
      name: "crabominable",
      url: "https://pokeapi.co/api/v2/pokemon/740/",
    },
    {
      name: "mr-rime",
      url: "https://pokeapi.co/api/v2/pokemon/866/",
    },
    {
      name: "snom",
      url: "https://pokeapi.co/api/v2/pokemon/872/",
    },
    {
      name: "frosmoth",
      url: "https://pokeapi.co/api/v2/pokemon/873/",
    },
    {
      name: "eiscue-ice",
      url: "https://pokeapi.co/api/v2/pokemon/875/",
    },
    {
      name: "arctozolt",
      url: "https://pokeapi.co/api/v2/pokemon/881/",
    },
    {
      name: "arctovish",
      url: "https://pokeapi.co/api/v2/pokemon/883/",
    },
    {
      name: "glastrier",
      url: "https://pokeapi.co/api/v2/pokemon/896/",
    },
    {
      name: "cetoddle",
      url: "https://pokeapi.co/api/v2/pokemon/974/",
    },
    {
      name: "cetitan",
      url: "https://pokeapi.co/api/v2/pokemon/975/",
    },
    {
      name: "iron-bundle",
      url: "https://pokeapi.co/api/v2/pokemon/991/",
    },
    {
      name: "frigibax",
      url: "https://pokeapi.co/api/v2/pokemon/996/",
    },
    {
      name: "arctibax",
      url: "https://pokeapi.co/api/v2/pokemon/997/",
    },
    {
      name: "baxcalibur",
      url: "https://pokeapi.co/api/v2/pokemon/998/",
    },
    {
      name: "chien-pao",
      url: "https://pokeapi.co/api/v2/pokemon/1002/",
    },
    {
      name: "rotom-frost",
      url: "https://pokeapi.co/api/v2/pokemon/10010/",
    },
    {
      name: "castform-snowy",
      url: "https://pokeapi.co/api/v2/pokemon/10015/",
    },
    {
      name: "kyurem-black",
      url: "https://pokeapi.co/api/v2/pokemon/10022/",
    },
    {
      name: "kyurem-white",
      url: "https://pokeapi.co/api/v2/pokemon/10023/",
    },
    {
      name: "abomasnow-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10060/",
    },
    {
      name: "glalie-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10074/",
    },
    {
      name: "sandshrew-alola",
      url: "https://pokeapi.co/api/v2/pokemon/10101/",
    },
    {
      name: "sandslash-alola",
      url: "https://pokeapi.co/api/v2/pokemon/10102/",
    },
    {
      name: "vulpix-alola",
      url: "https://pokeapi.co/api/v2/pokemon/10103/",
    },
    {
      name: "ninetales-alola",
      url: "https://pokeapi.co/api/v2/pokemon/10104/",
    },
    {
      name: "mr-mime-galar",
      url: "https://pokeapi.co/api/v2/pokemon/10168/",
    },
    {
      name: "darumaka-galar",
      url: "https://pokeapi.co/api/v2/pokemon/10176/",
    },
    {
      name: "darmanitan-galar-standard",
      url: "https://pokeapi.co/api/v2/pokemon/10177/",
    },
    {
      name: "darmanitan-galar-zen",
      url: "https://pokeapi.co/api/v2/pokemon/10178/",
    },
    {
      name: "eiscue-noice",
      url: "https://pokeapi.co/api/v2/pokemon/10185/",
    },
    {
      name: "calyrex-ice",
      url: "https://pokeapi.co/api/v2/pokemon/10193/",
    },
    {
      name: "lapras-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10204/",
    },
    {
      name: "avalugg-hisui",
      url: "https://pokeapi.co/api/v2/pokemon/10243/",
    },
  ],
  dragon: [
    {
      name: "dratini",
      url: "https://pokeapi.co/api/v2/pokemon/147/",
    },
    {
      name: "dragonair",
      url: "https://pokeapi.co/api/v2/pokemon/148/",
    },
    {
      name: "dragonite",
      url: "https://pokeapi.co/api/v2/pokemon/149/",
    },
    {
      name: "kingdra",
      url: "https://pokeapi.co/api/v2/pokemon/230/",
    },
    {
      name: "vibrava",
      url: "https://pokeapi.co/api/v2/pokemon/329/",
    },
    {
      name: "flygon",
      url: "https://pokeapi.co/api/v2/pokemon/330/",
    },
    {
      name: "altaria",
      url: "https://pokeapi.co/api/v2/pokemon/334/",
    },
    {
      name: "bagon",
      url: "https://pokeapi.co/api/v2/pokemon/371/",
    },
    {
      name: "shelgon",
      url: "https://pokeapi.co/api/v2/pokemon/372/",
    },
    {
      name: "salamence",
      url: "https://pokeapi.co/api/v2/pokemon/373/",
    },
    {
      name: "latias",
      url: "https://pokeapi.co/api/v2/pokemon/380/",
    },
    {
      name: "latios",
      url: "https://pokeapi.co/api/v2/pokemon/381/",
    },
    {
      name: "rayquaza",
      url: "https://pokeapi.co/api/v2/pokemon/384/",
    },
    {
      name: "gible",
      url: "https://pokeapi.co/api/v2/pokemon/443/",
    },
    {
      name: "gabite",
      url: "https://pokeapi.co/api/v2/pokemon/444/",
    },
    {
      name: "garchomp",
      url: "https://pokeapi.co/api/v2/pokemon/445/",
    },
    {
      name: "dialga",
      url: "https://pokeapi.co/api/v2/pokemon/483/",
    },
    {
      name: "palkia",
      url: "https://pokeapi.co/api/v2/pokemon/484/",
    },
    {
      name: "giratina-altered",
      url: "https://pokeapi.co/api/v2/pokemon/487/",
    },
    {
      name: "axew",
      url: "https://pokeapi.co/api/v2/pokemon/610/",
    },
    {
      name: "fraxure",
      url: "https://pokeapi.co/api/v2/pokemon/611/",
    },
    {
      name: "haxorus",
      url: "https://pokeapi.co/api/v2/pokemon/612/",
    },
    {
      name: "druddigon",
      url: "https://pokeapi.co/api/v2/pokemon/621/",
    },
    {
      name: "deino",
      url: "https://pokeapi.co/api/v2/pokemon/633/",
    },
    {
      name: "zweilous",
      url: "https://pokeapi.co/api/v2/pokemon/634/",
    },
    {
      name: "hydreigon",
      url: "https://pokeapi.co/api/v2/pokemon/635/",
    },
    {
      name: "reshiram",
      url: "https://pokeapi.co/api/v2/pokemon/643/",
    },
    {
      name: "zekrom",
      url: "https://pokeapi.co/api/v2/pokemon/644/",
    },
    {
      name: "kyurem",
      url: "https://pokeapi.co/api/v2/pokemon/646/",
    },
    {
      name: "dragalge",
      url: "https://pokeapi.co/api/v2/pokemon/691/",
    },
    {
      name: "tyrunt",
      url: "https://pokeapi.co/api/v2/pokemon/696/",
    },
    {
      name: "tyrantrum",
      url: "https://pokeapi.co/api/v2/pokemon/697/",
    },
    {
      name: "goomy",
      url: "https://pokeapi.co/api/v2/pokemon/704/",
    },
    {
      name: "sliggoo",
      url: "https://pokeapi.co/api/v2/pokemon/705/",
    },
    {
      name: "goodra",
      url: "https://pokeapi.co/api/v2/pokemon/706/",
    },
    {
      name: "noibat",
      url: "https://pokeapi.co/api/v2/pokemon/714/",
    },
    {
      name: "noivern",
      url: "https://pokeapi.co/api/v2/pokemon/715/",
    },
    {
      name: "zygarde-50",
      url: "https://pokeapi.co/api/v2/pokemon/718/",
    },
    {
      name: "turtonator",
      url: "https://pokeapi.co/api/v2/pokemon/776/",
    },
    {
      name: "drampa",
      url: "https://pokeapi.co/api/v2/pokemon/780/",
    },
    {
      name: "jangmo-o",
      url: "https://pokeapi.co/api/v2/pokemon/782/",
    },
    {
      name: "hakamo-o",
      url: "https://pokeapi.co/api/v2/pokemon/783/",
    },
    {
      name: "kommo-o",
      url: "https://pokeapi.co/api/v2/pokemon/784/",
    },
    {
      name: "guzzlord",
      url: "https://pokeapi.co/api/v2/pokemon/799/",
    },
    {
      name: "naganadel",
      url: "https://pokeapi.co/api/v2/pokemon/804/",
    },
    {
      name: "applin",
      url: "https://pokeapi.co/api/v2/pokemon/840/",
    },
    {
      name: "flapple",
      url: "https://pokeapi.co/api/v2/pokemon/841/",
    },
    {
      name: "appletun",
      url: "https://pokeapi.co/api/v2/pokemon/842/",
    },
    {
      name: "dracozolt",
      url: "https://pokeapi.co/api/v2/pokemon/880/",
    },
    {
      name: "dracovish",
      url: "https://pokeapi.co/api/v2/pokemon/882/",
    },
    {
      name: "duraludon",
      url: "https://pokeapi.co/api/v2/pokemon/884/",
    },
    {
      name: "dreepy",
      url: "https://pokeapi.co/api/v2/pokemon/885/",
    },
    {
      name: "drakloak",
      url: "https://pokeapi.co/api/v2/pokemon/886/",
    },
    {
      name: "dragapult",
      url: "https://pokeapi.co/api/v2/pokemon/887/",
    },
    {
      name: "eternatus",
      url: "https://pokeapi.co/api/v2/pokemon/890/",
    },
    {
      name: "regidrago",
      url: "https://pokeapi.co/api/v2/pokemon/895/",
    },
    {
      name: "cyclizar",
      url: "https://pokeapi.co/api/v2/pokemon/967/",
    },
    {
      name: "tatsugiri-curly",
      url: "https://pokeapi.co/api/v2/pokemon/978/",
    },
    {
      name: "frigibax",
      url: "https://pokeapi.co/api/v2/pokemon/996/",
    },
    {
      name: "arctibax",
      url: "https://pokeapi.co/api/v2/pokemon/997/",
    },
    {
      name: "baxcalibur",
      url: "https://pokeapi.co/api/v2/pokemon/998/",
    },
    {
      name: "roaring-moon",
      url: "https://pokeapi.co/api/v2/pokemon/1005/",
    },
    {
      name: "koraidon",
      url: "https://pokeapi.co/api/v2/pokemon/1007/",
    },
    {
      name: "miraidon",
      url: "https://pokeapi.co/api/v2/pokemon/1008/",
    },
    {
      name: "walking-wake",
      url: "https://pokeapi.co/api/v2/pokemon/1009/",
    },
    {
      name: "dipplin",
      url: "https://pokeapi.co/api/v2/pokemon/1011/",
    },
    {
      name: "archaludon",
      url: "https://pokeapi.co/api/v2/pokemon/1018/",
    },
    {
      name: "hydrapple",
      url: "https://pokeapi.co/api/v2/pokemon/1019/",
    },
    {
      name: "gouging-fire",
      url: "https://pokeapi.co/api/v2/pokemon/1020/",
    },
    {
      name: "raging-bolt",
      url: "https://pokeapi.co/api/v2/pokemon/1021/",
    },
    {
      name: "giratina-origin",
      url: "https://pokeapi.co/api/v2/pokemon/10007/",
    },
    {
      name: "kyurem-black",
      url: "https://pokeapi.co/api/v2/pokemon/10022/",
    },
    {
      name: "kyurem-white",
      url: "https://pokeapi.co/api/v2/pokemon/10023/",
    },
    {
      name: "charizard-mega-x",
      url: "https://pokeapi.co/api/v2/pokemon/10034/",
    },
    {
      name: "ampharos-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10045/",
    },
    {
      name: "garchomp-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10058/",
    },
    {
      name: "latias-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10062/",
    },
    {
      name: "latios-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10063/",
    },
    {
      name: "sceptile-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10065/",
    },
    {
      name: "altaria-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10067/",
    },
    {
      name: "rayquaza-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10079/",
    },
    {
      name: "salamence-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10089/",
    },
    {
      name: "exeggutor-alola",
      url: "https://pokeapi.co/api/v2/pokemon/10114/",
    },
    {
      name: "zygarde-10-power-construct",
      url: "https://pokeapi.co/api/v2/pokemon/10118/",
    },
    {
      name: "zygarde-50-power-construct",
      url: "https://pokeapi.co/api/v2/pokemon/10119/",
    },
    {
      name: "zygarde-complete",
      url: "https://pokeapi.co/api/v2/pokemon/10120/",
    },
    {
      name: "kommo-o-totem",
      url: "https://pokeapi.co/api/v2/pokemon/10146/",
    },
    {
      name: "necrozma-ultra",
      url: "https://pokeapi.co/api/v2/pokemon/10157/",
    },
    {
      name: "zygarde-10",
      url: "https://pokeapi.co/api/v2/pokemon/10181/",
    },
    {
      name: "eternatus-eternamax",
      url: "https://pokeapi.co/api/v2/pokemon/10190/",
    },
    {
      name: "flapple-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10216/",
    },
    {
      name: "appletun-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10217/",
    },
    {
      name: "duraludon-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10225/",
    },
    {
      name: "sliggoo-hisui",
      url: "https://pokeapi.co/api/v2/pokemon/10241/",
    },
    {
      name: "goodra-hisui",
      url: "https://pokeapi.co/api/v2/pokemon/10242/",
    },
    {
      name: "dialga-origin",
      url: "https://pokeapi.co/api/v2/pokemon/10245/",
    },
    {
      name: "palkia-origin",
      url: "https://pokeapi.co/api/v2/pokemon/10246/",
    },
    {
      name: "tatsugiri-droopy",
      url: "https://pokeapi.co/api/v2/pokemon/10258/",
    },
    {
      name: "tatsugiri-stretchy",
      url: "https://pokeapi.co/api/v2/pokemon/10259/",
    },
    {
      name: "koraidon-limited-build",
      url: "https://pokeapi.co/api/v2/pokemon/10264/",
    },
    {
      name: "koraidon-sprinting-build",
      url: "https://pokeapi.co/api/v2/pokemon/10265/",
    },
    {
      name: "koraidon-swimming-build",
      url: "https://pokeapi.co/api/v2/pokemon/10266/",
    },
    {
      name: "koraidon-gliding-build",
      url: "https://pokeapi.co/api/v2/pokemon/10267/",
    },
    {
      name: "miraidon-low-power-mode",
      url: "https://pokeapi.co/api/v2/pokemon/10268/",
    },
    {
      name: "miraidon-drive-mode",
      url: "https://pokeapi.co/api/v2/pokemon/10269/",
    },
    {
      name: "miraidon-aquatic-mode",
      url: "https://pokeapi.co/api/v2/pokemon/10270/",
    },
    {
      name: "miraidon-glide-mode",
      url: "https://pokeapi.co/api/v2/pokemon/10271/",
    },
  ],
  dark: [
    {
      name: "umbreon",
      url: "https://pokeapi.co/api/v2/pokemon/197/",
    },
    {
      name: "murkrow",
      url: "https://pokeapi.co/api/v2/pokemon/198/",
    },
    {
      name: "sneasel",
      url: "https://pokeapi.co/api/v2/pokemon/215/",
    },
    {
      name: "houndour",
      url: "https://pokeapi.co/api/v2/pokemon/228/",
    },
    {
      name: "houndoom",
      url: "https://pokeapi.co/api/v2/pokemon/229/",
    },
    {
      name: "tyranitar",
      url: "https://pokeapi.co/api/v2/pokemon/248/",
    },
    {
      name: "poochyena",
      url: "https://pokeapi.co/api/v2/pokemon/261/",
    },
    {
      name: "mightyena",
      url: "https://pokeapi.co/api/v2/pokemon/262/",
    },
    {
      name: "nuzleaf",
      url: "https://pokeapi.co/api/v2/pokemon/274/",
    },
    {
      name: "shiftry",
      url: "https://pokeapi.co/api/v2/pokemon/275/",
    },
    {
      name: "sableye",
      url: "https://pokeapi.co/api/v2/pokemon/302/",
    },
    {
      name: "carvanha",
      url: "https://pokeapi.co/api/v2/pokemon/318/",
    },
    {
      name: "sharpedo",
      url: "https://pokeapi.co/api/v2/pokemon/319/",
    },
    {
      name: "cacturne",
      url: "https://pokeapi.co/api/v2/pokemon/332/",
    },
    {
      name: "crawdaunt",
      url: "https://pokeapi.co/api/v2/pokemon/342/",
    },
    {
      name: "absol",
      url: "https://pokeapi.co/api/v2/pokemon/359/",
    },
    {
      name: "honchkrow",
      url: "https://pokeapi.co/api/v2/pokemon/430/",
    },
    {
      name: "stunky",
      url: "https://pokeapi.co/api/v2/pokemon/434/",
    },
    {
      name: "skuntank",
      url: "https://pokeapi.co/api/v2/pokemon/435/",
    },
    {
      name: "spiritomb",
      url: "https://pokeapi.co/api/v2/pokemon/442/",
    },
    {
      name: "drapion",
      url: "https://pokeapi.co/api/v2/pokemon/452/",
    },
    {
      name: "weavile",
      url: "https://pokeapi.co/api/v2/pokemon/461/",
    },
    {
      name: "darkrai",
      url: "https://pokeapi.co/api/v2/pokemon/491/",
    },
    {
      name: "purrloin",
      url: "https://pokeapi.co/api/v2/pokemon/509/",
    },
    {
      name: "liepard",
      url: "https://pokeapi.co/api/v2/pokemon/510/",
    },
    {
      name: "sandile",
      url: "https://pokeapi.co/api/v2/pokemon/551/",
    },
    {
      name: "krokorok",
      url: "https://pokeapi.co/api/v2/pokemon/552/",
    },
    {
      name: "krookodile",
      url: "https://pokeapi.co/api/v2/pokemon/553/",
    },
    {
      name: "scraggy",
      url: "https://pokeapi.co/api/v2/pokemon/559/",
    },
    {
      name: "scrafty",
      url: "https://pokeapi.co/api/v2/pokemon/560/",
    },
    {
      name: "zorua",
      url: "https://pokeapi.co/api/v2/pokemon/570/",
    },
    {
      name: "zoroark",
      url: "https://pokeapi.co/api/v2/pokemon/571/",
    },
    {
      name: "pawniard",
      url: "https://pokeapi.co/api/v2/pokemon/624/",
    },
    {
      name: "bisharp",
      url: "https://pokeapi.co/api/v2/pokemon/625/",
    },
    {
      name: "vullaby",
      url: "https://pokeapi.co/api/v2/pokemon/629/",
    },
    {
      name: "mandibuzz",
      url: "https://pokeapi.co/api/v2/pokemon/630/",
    },
    {
      name: "deino",
      url: "https://pokeapi.co/api/v2/pokemon/633/",
    },
    {
      name: "zweilous",
      url: "https://pokeapi.co/api/v2/pokemon/634/",
    },
    {
      name: "hydreigon",
      url: "https://pokeapi.co/api/v2/pokemon/635/",
    },
    {
      name: "greninja",
      url: "https://pokeapi.co/api/v2/pokemon/658/",
    },
    {
      name: "pangoro",
      url: "https://pokeapi.co/api/v2/pokemon/675/",
    },
    {
      name: "inkay",
      url: "https://pokeapi.co/api/v2/pokemon/686/",
    },
    {
      name: "malamar",
      url: "https://pokeapi.co/api/v2/pokemon/687/",
    },
    {
      name: "yveltal",
      url: "https://pokeapi.co/api/v2/pokemon/717/",
    },
    {
      name: "incineroar",
      url: "https://pokeapi.co/api/v2/pokemon/727/",
    },
    {
      name: "guzzlord",
      url: "https://pokeapi.co/api/v2/pokemon/799/",
    },
    {
      name: "nickit",
      url: "https://pokeapi.co/api/v2/pokemon/827/",
    },
    {
      name: "thievul",
      url: "https://pokeapi.co/api/v2/pokemon/828/",
    },
    {
      name: "impidimp",
      url: "https://pokeapi.co/api/v2/pokemon/859/",
    },
    {
      name: "morgrem",
      url: "https://pokeapi.co/api/v2/pokemon/860/",
    },
    {
      name: "grimmsnarl",
      url: "https://pokeapi.co/api/v2/pokemon/861/",
    },
    {
      name: "obstagoon",
      url: "https://pokeapi.co/api/v2/pokemon/862/",
    },
    {
      name: "morpeko-full-belly",
      url: "https://pokeapi.co/api/v2/pokemon/877/",
    },
    {
      name: "urshifu-single-strike",
      url: "https://pokeapi.co/api/v2/pokemon/892/",
    },
    {
      name: "zarude",
      url: "https://pokeapi.co/api/v2/pokemon/893/",
    },
    {
      name: "overqwil",
      url: "https://pokeapi.co/api/v2/pokemon/904/",
    },
    {
      name: "meowscarada",
      url: "https://pokeapi.co/api/v2/pokemon/908/",
    },
    {
      name: "lokix",
      url: "https://pokeapi.co/api/v2/pokemon/920/",
    },
    {
      name: "maschiff",
      url: "https://pokeapi.co/api/v2/pokemon/942/",
    },
    {
      name: "mabosstiff",
      url: "https://pokeapi.co/api/v2/pokemon/943/",
    },
    {
      name: "bombirdier",
      url: "https://pokeapi.co/api/v2/pokemon/962/",
    },
    {
      name: "kingambit",
      url: "https://pokeapi.co/api/v2/pokemon/983/",
    },
    {
      name: "brute-bonnet",
      url: "https://pokeapi.co/api/v2/pokemon/986/",
    },
    {
      name: "iron-jugulis",
      url: "https://pokeapi.co/api/v2/pokemon/993/",
    },
    {
      name: "wo-chien",
      url: "https://pokeapi.co/api/v2/pokemon/1001/",
    },
    {
      name: "chien-pao",
      url: "https://pokeapi.co/api/v2/pokemon/1002/",
    },
    {
      name: "ting-lu",
      url: "https://pokeapi.co/api/v2/pokemon/1003/",
    },
    {
      name: "chi-yu",
      url: "https://pokeapi.co/api/v2/pokemon/1004/",
    },
    {
      name: "roaring-moon",
      url: "https://pokeapi.co/api/v2/pokemon/1005/",
    },
    {
      name: "gyarados-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10041/",
    },
    {
      name: "houndoom-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10048/",
    },
    {
      name: "tyranitar-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10049/",
    },
    {
      name: "absol-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10057/",
    },
    {
      name: "sableye-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10066/",
    },
    {
      name: "sharpedo-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10070/",
    },
    {
      name: "hoopa-unbound",
      url: "https://pokeapi.co/api/v2/pokemon/10086/",
    },
    {
      name: "rattata-alola",
      url: "https://pokeapi.co/api/v2/pokemon/10091/",
    },
    {
      name: "raticate-alola",
      url: "https://pokeapi.co/api/v2/pokemon/10092/",
    },
    {
      name: "raticate-totem-alola",
      url: "https://pokeapi.co/api/v2/pokemon/10093/",
    },
    {
      name: "meowth-alola",
      url: "https://pokeapi.co/api/v2/pokemon/10107/",
    },
    {
      name: "persian-alola",
      url: "https://pokeapi.co/api/v2/pokemon/10108/",
    },
    {
      name: "grimer-alola",
      url: "https://pokeapi.co/api/v2/pokemon/10112/",
    },
    {
      name: "muk-alola",
      url: "https://pokeapi.co/api/v2/pokemon/10113/",
    },
    {
      name: "greninja-battle-bond",
      url: "https://pokeapi.co/api/v2/pokemon/10116/",
    },
    {
      name: "greninja-ash",
      url: "https://pokeapi.co/api/v2/pokemon/10117/",
    },
    {
      name: "moltres-galar",
      url: "https://pokeapi.co/api/v2/pokemon/10171/",
    },
    {
      name: "zigzagoon-galar",
      url: "https://pokeapi.co/api/v2/pokemon/10174/",
    },
    {
      name: "linoone-galar",
      url: "https://pokeapi.co/api/v2/pokemon/10175/",
    },
    {
      name: "morpeko-hangry",
      url: "https://pokeapi.co/api/v2/pokemon/10187/",
    },
    {
      name: "zarude-dada",
      url: "https://pokeapi.co/api/v2/pokemon/10192/",
    },
    {
      name: "grimmsnarl-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10222/",
    },
    {
      name: "urshifu-single-strike-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10226/",
    },
    {
      name: "qwilfish-hisui",
      url: "https://pokeapi.co/api/v2/pokemon/10234/",
    },
    {
      name: "samurott-hisui",
      url: "https://pokeapi.co/api/v2/pokemon/10236/",
    },
  ],
  fairy: [
    {
      name: "clefairy",
      url: "https://pokeapi.co/api/v2/pokemon/35/",
    },
    {
      name: "clefable",
      url: "https://pokeapi.co/api/v2/pokemon/36/",
    },
    {
      name: "jigglypuff",
      url: "https://pokeapi.co/api/v2/pokemon/39/",
    },
    {
      name: "wigglytuff",
      url: "https://pokeapi.co/api/v2/pokemon/40/",
    },
    {
      name: "mr-mime",
      url: "https://pokeapi.co/api/v2/pokemon/122/",
    },
    {
      name: "cleffa",
      url: "https://pokeapi.co/api/v2/pokemon/173/",
    },
    {
      name: "igglybuff",
      url: "https://pokeapi.co/api/v2/pokemon/174/",
    },
    {
      name: "togepi",
      url: "https://pokeapi.co/api/v2/pokemon/175/",
    },
    {
      name: "togetic",
      url: "https://pokeapi.co/api/v2/pokemon/176/",
    },
    {
      name: "marill",
      url: "https://pokeapi.co/api/v2/pokemon/183/",
    },
    {
      name: "azumarill",
      url: "https://pokeapi.co/api/v2/pokemon/184/",
    },
    {
      name: "snubbull",
      url: "https://pokeapi.co/api/v2/pokemon/209/",
    },
    {
      name: "granbull",
      url: "https://pokeapi.co/api/v2/pokemon/210/",
    },
    {
      name: "ralts",
      url: "https://pokeapi.co/api/v2/pokemon/280/",
    },
    {
      name: "kirlia",
      url: "https://pokeapi.co/api/v2/pokemon/281/",
    },
    {
      name: "gardevoir",
      url: "https://pokeapi.co/api/v2/pokemon/282/",
    },
    {
      name: "azurill",
      url: "https://pokeapi.co/api/v2/pokemon/298/",
    },
    {
      name: "mawile",
      url: "https://pokeapi.co/api/v2/pokemon/303/",
    },
    {
      name: "mime-jr",
      url: "https://pokeapi.co/api/v2/pokemon/439/",
    },
    {
      name: "togekiss",
      url: "https://pokeapi.co/api/v2/pokemon/468/",
    },
    {
      name: "cottonee",
      url: "https://pokeapi.co/api/v2/pokemon/546/",
    },
    {
      name: "whimsicott",
      url: "https://pokeapi.co/api/v2/pokemon/547/",
    },
    {
      name: "flabebe",
      url: "https://pokeapi.co/api/v2/pokemon/669/",
    },
    {
      name: "floette",
      url: "https://pokeapi.co/api/v2/pokemon/670/",
    },
    {
      name: "florges",
      url: "https://pokeapi.co/api/v2/pokemon/671/",
    },
    {
      name: "spritzee",
      url: "https://pokeapi.co/api/v2/pokemon/682/",
    },
    {
      name: "aromatisse",
      url: "https://pokeapi.co/api/v2/pokemon/683/",
    },
    {
      name: "swirlix",
      url: "https://pokeapi.co/api/v2/pokemon/684/",
    },
    {
      name: "slurpuff",
      url: "https://pokeapi.co/api/v2/pokemon/685/",
    },
    {
      name: "sylveon",
      url: "https://pokeapi.co/api/v2/pokemon/700/",
    },
    {
      name: "dedenne",
      url: "https://pokeapi.co/api/v2/pokemon/702/",
    },
    {
      name: "carbink",
      url: "https://pokeapi.co/api/v2/pokemon/703/",
    },
    {
      name: "klefki",
      url: "https://pokeapi.co/api/v2/pokemon/707/",
    },
    {
      name: "xerneas",
      url: "https://pokeapi.co/api/v2/pokemon/716/",
    },
    {
      name: "diancie",
      url: "https://pokeapi.co/api/v2/pokemon/719/",
    },
    {
      name: "primarina",
      url: "https://pokeapi.co/api/v2/pokemon/730/",
    },
    {
      name: "cutiefly",
      url: "https://pokeapi.co/api/v2/pokemon/742/",
    },
    {
      name: "ribombee",
      url: "https://pokeapi.co/api/v2/pokemon/743/",
    },
    {
      name: "morelull",
      url: "https://pokeapi.co/api/v2/pokemon/755/",
    },
    {
      name: "shiinotic",
      url: "https://pokeapi.co/api/v2/pokemon/756/",
    },
    {
      name: "comfey",
      url: "https://pokeapi.co/api/v2/pokemon/764/",
    },
    {
      name: "mimikyu-disguised",
      url: "https://pokeapi.co/api/v2/pokemon/778/",
    },
    {
      name: "tapu-koko",
      url: "https://pokeapi.co/api/v2/pokemon/785/",
    },
    {
      name: "tapu-lele",
      url: "https://pokeapi.co/api/v2/pokemon/786/",
    },
    {
      name: "tapu-bulu",
      url: "https://pokeapi.co/api/v2/pokemon/787/",
    },
    {
      name: "tapu-fini",
      url: "https://pokeapi.co/api/v2/pokemon/788/",
    },
    {
      name: "magearna",
      url: "https://pokeapi.co/api/v2/pokemon/801/",
    },
    {
      name: "hatterene",
      url: "https://pokeapi.co/api/v2/pokemon/858/",
    },
    {
      name: "impidimp",
      url: "https://pokeapi.co/api/v2/pokemon/859/",
    },
    {
      name: "morgrem",
      url: "https://pokeapi.co/api/v2/pokemon/860/",
    },
    {
      name: "grimmsnarl",
      url: "https://pokeapi.co/api/v2/pokemon/861/",
    },
    {
      name: "milcery",
      url: "https://pokeapi.co/api/v2/pokemon/868/",
    },
    {
      name: "alcremie",
      url: "https://pokeapi.co/api/v2/pokemon/869/",
    },
    {
      name: "zacian",
      url: "https://pokeapi.co/api/v2/pokemon/888/",
    },
    {
      name: "enamorus-incarnate",
      url: "https://pokeapi.co/api/v2/pokemon/905/",
    },
    {
      name: "fidough",
      url: "https://pokeapi.co/api/v2/pokemon/926/",
    },
    {
      name: "dachsbun",
      url: "https://pokeapi.co/api/v2/pokemon/927/",
    },
    {
      name: "tinkatink",
      url: "https://pokeapi.co/api/v2/pokemon/957/",
    },
    {
      name: "tinkatuff",
      url: "https://pokeapi.co/api/v2/pokemon/958/",
    },
    {
      name: "tinkaton",
      url: "https://pokeapi.co/api/v2/pokemon/959/",
    },
    {
      name: "scream-tail",
      url: "https://pokeapi.co/api/v2/pokemon/985/",
    },
    {
      name: "flutter-mane",
      url: "https://pokeapi.co/api/v2/pokemon/987/",
    },
    {
      name: "iron-valiant",
      url: "https://pokeapi.co/api/v2/pokemon/1006/",
    },
    {
      name: "fezandipiti",
      url: "https://pokeapi.co/api/v2/pokemon/1016/",
    },
    {
      name: "gardevoir-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10051/",
    },
    {
      name: "mawile-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10052/",
    },
    {
      name: "floette-eternal",
      url: "https://pokeapi.co/api/v2/pokemon/10061/",
    },
    {
      name: "altaria-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10067/",
    },
    {
      name: "audino-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10069/",
    },
    {
      name: "diancie-mega",
      url: "https://pokeapi.co/api/v2/pokemon/10075/",
    },
    {
      name: "ninetales-alola",
      url: "https://pokeapi.co/api/v2/pokemon/10104/",
    },
    {
      name: "mimikyu-busted",
      url: "https://pokeapi.co/api/v2/pokemon/10143/",
    },
    {
      name: "mimikyu-totem-disguised",
      url: "https://pokeapi.co/api/v2/pokemon/10144/",
    },
    {
      name: "mimikyu-totem-busted",
      url: "https://pokeapi.co/api/v2/pokemon/10145/",
    },
    {
      name: "magearna-original",
      url: "https://pokeapi.co/api/v2/pokemon/10147/",
    },
    {
      name: "ribombee-totem",
      url: "https://pokeapi.co/api/v2/pokemon/10150/",
    },
    {
      name: "rapidash-galar",
      url: "https://pokeapi.co/api/v2/pokemon/10163/",
    },
    {
      name: "weezing-galar",
      url: "https://pokeapi.co/api/v2/pokemon/10167/",
    },
    {
      name: "zacian-crowned",
      url: "https://pokeapi.co/api/v2/pokemon/10188/",
    },
    {
      name: "hatterene-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10221/",
    },
    {
      name: "grimmsnarl-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10222/",
    },
    {
      name: "alcremie-gmax",
      url: "https://pokeapi.co/api/v2/pokemon/10223/",
    },
    {
      name: "enamorus-therian",
      url: "https://pokeapi.co/api/v2/pokemon/10249/",
    },
  ],
  stellar: [],
  unknown: [],
  shadow: [],
};

export const getPokemonTypesByName = (name: string) => {
  const mappingAsArr = Object.entries(typeNameToPokemonMapping);
  const _foundTypeName = mappingAsArr
    .filter(([_typeName, pokemonList]) =>
      pokemonList.some((p) => p.name === name),
    )
    .map(([typeName]) => typeName);

  return pokemonTypeNameSchema
    .array()
    .catch([PokemonTypeNames.unknown])
    .parse(_foundTypeName);
};

export const isPokemonOfAnyOfGivenTypes = ({
  pokemonName,
  pokemonTypes,
}: {
  pokemonName: string;
  pokemonTypes: PokemonTypeName[];
}) => {
  const allTypesOfGivenPokemon = getPokemonTypesByName(pokemonName);
  return pokemonTypes.some((type) => allTypesOfGivenPokemon.includes(type));
};

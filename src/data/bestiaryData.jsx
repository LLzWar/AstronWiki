import { 
  Sword, Shield, Crown, Skull, Flame, Droplet, Wind, Crosshair, Target, Activity, Sparkles, BookOpen, Zap
} from 'lucide-react';

export const BESTIARY_DATA = [
  // ==============================
  // L'ENDER'S CATACLYSM
  // ==============================
  {
    id: 'ignis',
    name: 'Ignis (O Arauto do Fogo)',
    mod: 'cataclysm',
    modName: "L'Ender's Cataclysm",
    icon: Sword,
    image: '/assets/bosses/ignis.png',
    lore: 'Localizado nas fornalhas gigantes (Burning Arena) no fundo do Nether.',
    stats: { hp: '450 HP', type: 'Chefe / Fogo Primordial' },
    mechanics: 'Ele absorve ataques de fogo e retalha com plasma. Cuidado com o ataque em que ele gira puxando você para o ar, se você não tiver mobilidade (elytra/jetpack), o dano de queda será fatal. O servidor impõe um "Damage Cap" de 20.0, o que significa que ele não pode tomar mais de 20 de dano por hit, inutilizando armas de hit-kill (One-Shot).',
    itemsNeeded: [{ id: 'eye_of_flame', name: 'Eye of Flame' }],
    drops: [
      { name: 'Ignitium Ingots (3x)', rarity: 'guaranteed', desc: 'Essenciais para forjar sua armadura inquebrável.' },
      { name: 'Music Disc', rarity: 'common' },
      { name: 'The Incinerator', rarity: 'legendary', desc: 'Espada gigante que solta erupções vulcânicas no chão.' },
      { name: 'Bulwark of the Flame', rarity: 'legendary', desc: 'Escudo que reflete ataques em chamas.' }
    ]
  },
  {
    id: 'netherite_monstrosity',
    name: 'Netherite Monstrosity',
    mod: 'cataclysm',
    modName: "L'Ender's Cataclysm",
    icon: Shield,
    image: '/assets/bosses/Netherite_Monstrosity.webp',
    lore: 'O Golem guardião da Soul Blacksmith (Masmorra de Netherite no Nether).',
    stats: { hp: '500 HP', type: 'Chefe / Dano Físico e Terremotos' },
    mechanics: 'Dano puramente físico. Ele soca o chão (Earthquake) causando repulsão imensa em área. A tática é nunca lutar perto da beirada dos poços de lava do seu santuário.',
    itemsNeeded: [{ id: 'eye_of_monstrous', name: 'Eye of Monstrous' }],
    drops: [
      { name: 'Netherite Ingots', rarity: 'guaranteed' },
      { name: 'Soul Sand', rarity: 'common' },
      { name: 'Monstrous Horn', rarity: 'legendary', desc: 'Usado na Infernal Forge para selar o Ignitium.' },
      { name: 'Infernal Forge', rarity: 'rare', desc: 'A fornalha que permite a criação do equipamento final do Cataclysm.' }
    ]
  },
  {
    id: 'harbinger',
    name: 'The Harbinger',
    mod: 'cataclysm',
    modName: "L'Ender's Cataclysm",
    icon: Skull,
    image: '/assets/bosses/Harbinger.webp',
    lore: 'Uma máquina da morte forjada com Nether Star e Wither, localizada na Ruined Citadel (The End).',
    stats: { hp: '390 HP', type: 'Chefe / Raio Laser e Mísseis' },
    mechanics: 'Extremamente ágil e destrutivo. Ele voa soltando Lasers Focados que derretem escudos. Ele invoca mísseis Wither teleguiados. Defesas mágicas refletoras ou esquiva perfeita são fundamentais.',
    itemsNeeded: [{ id: 'eye_of_mech', name: 'Eye of Mech' }],
    drops: [
      { name: 'Witherite Ingots', rarity: 'guaranteed' },
      { name: 'Nether Star', rarity: 'guaranteed' },
      { name: 'Wither Assault Shoulder Weapon', rarity: 'legendary', desc: 'Lança-mísseis teleguiado acoplável no jogador.' },
      { name: 'The Meat Shredder', rarity: 'legendary', desc: 'Massa contundente de devastação de armaduras.' }
    ]
  },
  {
    id: 'leviathan',
    name: 'The Leviathan',
    mod: 'cataclysm',
    modName: "L'Ender's Cataclysm",
    icon: Crown,
    image: '/assets/bosses/leviathan.png',
    lore: 'A besta abissal da Sunken City, submersa no oceano mais profundo do Overworld.',
    stats: { hp: '400 HP', type: 'Chefe Submarino / Energia Abissal' },
    mechanics: 'O combate é 100% debaixo d\'água. Ele invoca armadilhas de vácuo abissais, feixes de luz letal e mordidas colossais. Sem equipamentos Depth Strider, Water Breathing ou Magia Aquática do Iron`s Spells, você irá morrer asfixiado.',
    itemsNeeded: [{ id: 'eye_of_abyss', name: 'Eye of Abyss' }],
    drops: [
      { name: 'Abyssal Egg', rarity: 'guaranteed', desc: 'Serve para incubar uma besta de estimação (mini-leviathan).' },
      { name: 'Tidal Claws', rarity: 'legendary', desc: 'Garras capazes de rasgar alvos e puxá-los com correntes aquáticas.' },
      { name: 'The Leviathan\'s Tooth', rarity: 'legendary', desc: 'Arma cortante com dano abissal massivo.' }
    ]
  },
  {
    id: 'ancient_remnant',
    name: 'Ancient Remnant',
    mod: 'cataclysm',
    modName: "L'Ender's Cataclysm",
    icon: Shield,
    image: '/assets/bosses/ancient_remnant.png',
    lore: 'A fera ancestral adormecida nas profundezas das Cursed Pyramids (Deserto).',
    stats: { hp: '400 HP', type: 'Chefe Terrestre / Escudo Sísmico' },
    mechanics: 'Monstro colossal e extremamente resistente a flechas/projéteis. Seus ataques geram terremotos isolados e invocam tempestades de areia no local para te cegar. Foque em dano Melee Pesado.',
    itemsNeeded: [{ id: 'eye_of_desert', name: 'Eye of Desert' }],
    drops: [
      { name: 'Desert Core', rarity: 'guaranteed' },
      { name: 'Ancient Metal', rarity: 'common' },
      { name: 'Remnant Skull', rarity: 'legendary', desc: 'Usado para adornos de magia defensiva.' },
      { name: 'Sandstorm in a Bottle', rarity: 'rare', desc: 'Permite invocar tempestades de areia no inimigo.' }
    ]
  },
  {
    id: 'ender_golem',
    name: 'Ender Golem',
    mod: 'cataclysm',
    modName: "L'Ender's Cataclysm",
    icon: Skull,
    image: '/assets/bosses/ender_golem.png',
    lore: 'Guardião de elite que protege o exterior e as salas interiores da Ruined Citadel no The End.',
    stats: { hp: '150 HP', type: 'Mini-Chefe / Físico' },
    mechanics: 'Possui uma agressividade insana. Ocasionalmente ele invoca um escudo de energia inquebrável. Pare de atacá-lo com força bruta quando ele estiver brilhando, espere o escudo baixar e contra-ataque.',
    itemsNeeded: [{ id: 'eye_of_void', name: 'Eye of Void' }],
    drops: [
      { name: 'Void Core', rarity: 'guaranteed' },
      { name: 'Ender Golem Horn', rarity: 'rare', desc: 'Pedaço de armadura do golem.' }
    ]
  },
  {
    id: 'ender_guardian',
    name: 'Ender Guardian',
    mod: 'cataclysm',
    modName: "L'Ender's Cataclysm",
    icon: Skull,
    image: '/assets/bosses/ender_guardian.png',
    lore: 'A inteligência corrompida no topo da Ruined Citadel, flutuando em levitação.',
    stats: { hp: '200 HP', type: 'Mini-Chefe / Dano de Vácuo (Void)' },
    mechanics: 'Ataques em área que lançam Void Runes (Runas Negras) na arena. Se tocá-las, você sofre dano de vácuo, ignorando boa parte das armaduras normais.',
    itemsNeeded: [{ id: 'eye_of_void', name: 'Eye of Void' }],
    drops: [
      { name: 'Void Core', rarity: 'guaranteed' },
      { name: 'Gauntlet of Guard', rarity: 'legendary', desc: 'Manopla que permite bloquear e refletir projéteis e invocar escudos de vazio.' }
    ]
  },
  {
    id: 'mignis',
    name: 'Mignis',
    mod: 'cataclysm',
    modName: "L'Ender's Cataclysm",
    icon: Flame,
    image: null,
    lore: 'Pequenas feras de fogo formadas das cinzas de Ignis, protegem as forjas infernais no Nether.',
    stats: { hp: '40 HP', type: 'Fogo / Exploração' },
    mechanics: 'Voam rapidamente e atacam com rajadas de fogo. Imunes a lava e fogo.',
    drops: [
      { name: 'Magma Cream', rarity: 'common' },
      { name: 'Blaze Powder', rarity: 'common' }
    ]
  },
  {
    id: 'coralssus',
    name: 'Coralssus',
    mod: 'cataclysm',
    modName: "L'Ender's Cataclysm",
    icon: Shield,
    image: null,
    lore: 'Golens abissais de coral que vagam pelas profundezas e ruínas de Sunken City.',
    stats: { hp: '120 HP', type: 'Guardião Aquático' },
    mechanics: 'Lentos mas letais. Eles dão golpes sísmicos na água e causam repulsão extrema.',
    drops: [
      { name: 'Coral', rarity: 'common' },
      { name: 'Abyssal Chitin', rarity: 'rare' }
    ]
  },
  {
    id: 'wadjet',
    name: 'Wadjet',
    mod: 'cataclysm',
    modName: "L'Ender's Cataclysm",
    icon: Skull,
    image: null,
    lore: 'Serpentes mumificadas que emboscam viajantes nas ruínas de Cursed Pyramids.',
    stats: { hp: '60 HP', type: 'Veneno / Subterrâneo' },
    mechanics: 'Rastejam rapidamente e envenenam o jogador. Seu veneno é difícil de curar.',
    drops: [
      { name: 'Desert Core Fragment', rarity: 'common' },
      { name: 'Wadjet Scale', rarity: 'rare' }
    ]
  },
  {
    id: 'deepling',
    name: 'Deepling',
    mod: 'cataclysm',
    modName: "L'Ender's Cataclysm",
    icon: Droplet,
    image: null,
    lore: 'Seres abissais comuns que habitam Sunken City. Trabalhadores das profundezas.',
    stats: { hp: '30 HP', type: 'Aquático / Comum' },
    mechanics: 'Atacam em grupo usando tridentes desgastados.',
    drops: [
      { name: 'Raw Fish', rarity: 'common' },
      { name: 'Trident (Danificado)', rarity: 'rare' }
    ]
  },
  {
    id: 'deepling_brute',
    name: 'Deepling Brute',
    mod: 'cataclysm',
    modName: "L'Ender's Cataclysm",
    icon: Sword,
    image: null,
    lore: 'A elite guerreira dos Deeplings, protegem a cidade submersa.',
    stats: { hp: '80 HP', type: 'Aquático / Melee' },
    mechanics: 'Lutam com armas pesadas e dão investidas rápidas na água.',
    drops: [
      { name: 'Abyssal Chitin', rarity: 'common' }
    ]
  },
  {
    id: 'deepling_priest',
    name: 'Deepling Priest',
    mod: 'cataclysm',
    modName: "L'Ender's Cataclysm",
    icon: Sparkles,
    image: null,
    lore: 'Xamãs que conjuram magia das profundezas.',
    stats: { hp: '50 HP', type: 'Aquático / Mágico' },
    mechanics: 'Atiram feixes mágicos de água que ignoram algumas armaduras e curam os brutos.',
    drops: [
      { name: 'Amethyst Shard', rarity: 'common' },
      { name: 'Abyssal Pearl', rarity: 'rare' }
    ]
  },
  {
    id: 'deepling_angler',
    name: 'Deepling Angler',
    mod: 'cataclysm',
    modName: "L'Ender's Cataclysm",
    icon: Crosshair,
    image: null,
    lore: 'Predadores que se camuflam no escuro do abismo usando suas iscas luminosas.',
    stats: { hp: '40 HP', type: 'Aquático / Emboscada' },
    mechanics: 'Te puxam para o escuro com uma fisgada letal. A isca cega temporariamente.',
    drops: [
      { name: 'Glowstone Dust', rarity: 'common' },
      { name: 'Angler Tooth', rarity: 'rare' }
    ]
  },
  {
    id: 'lionfish',
    name: 'Lionfish',
    mod: 'cataclysm',
    modName: "L'Ender's Cataclysm",
    icon: Droplet,
    image: null,
    lore: 'Peixes venenosos enormes das profundezas.',
    stats: { hp: '20 HP', type: 'Aquático / Veneno' },
    mechanics: 'Injetam veneno paralisante se você encostar neles.',
    drops: [
      { name: 'Lionfish Spike', rarity: 'common' }
    ]
  },
  {
    id: 'amethyst_crab',
    name: 'Amethyst Crab',
    mod: 'cataclysm',
    modName: "L'Ender's Cataclysm",
    icon: Shield,
    image: null,
    lore: 'Caranguejos colossais com cascos de ametista pura.',
    stats: { hp: '50 HP', type: 'Aquático / Defensivo' },
    mechanics: 'Eles bloqueiam grande parte do dano frontal e batem forte com a garra direita.',
    drops: [
      { name: 'Amethyst Shard', rarity: 'common' },
      { name: 'Crab Meat', rarity: 'common' }
    ]
  },
  {
    id: 'kobolediador',
    name: 'Kobolediador',
    mod: 'cataclysm',
    modName: "L'Ender's Cataclysm",
    icon: Sword,
    image: null,
    lore: 'Guerreiros rústicos das planícies.',
    stats: { hp: '45 HP', type: 'Terrestre / Melee' },
    mechanics: 'Atacam em bandos furiosos. Quando a vida baixa, eles correm mais rápido.',
    drops: [
      { name: 'Iron Ingot', rarity: 'common' },
      { name: 'Kobold Leather', rarity: 'rare' }
    ]
  },
  {
    id: 'ignis_revenant',
    name: 'Ignis Revenant',
    mod: 'cataclysm',
    modName: "L'Ender's Cataclysm",
    icon: Flame,
    image: null,
    lore: 'Espectros carbonizados que assombram a Burning Arena.',
    stats: { hp: '70 HP', type: 'Fogo / Morto-Vivo' },
    mechanics: 'Eles revigoram Ignis e disparam projéteis de fogo que incendeiam o terreno.',
    drops: [
      { name: 'Coal', rarity: 'common' },
      { name: 'Blaze Rod', rarity: 'rare' }
    ]
  },

  // ==============================
  // ICE AND FIRE: DRAGONS
  // ==============================
  {
    id: 'fire_dragon',
    name: 'Fire Dragon',
    mod: 'ice_and_fire',
    modName: 'Ice and Fire: Dragons',
    icon: Flame,
    image: null,
    lore: 'A encarnação do fogo vivo. Habitam ninhos na superfície e cavernas de dragão subterrâneas.',
    stats: { hp: '200 - 1000 HP (Estágio 1 a 5)', type: 'Dragão / Fogo' },
    mechanics: 'Seu bafo queima florestas inteiras instantaneamente. Eles voam e mergulham. Para matar um estágio 4/5 com armadura básica, você precisa cavar trincheiras e atirar com bestas gigantes (Dragonbone Bow). Magia de Gelo é o seu ponto fraco.',
    drops: [
      { name: 'Dragon Scales (Fire)', rarity: 'guaranteed', desc: 'Forja a Fire Dragon Armor (Garante imunidade ao fogo).' },
      { name: 'Dragon Bones', rarity: 'guaranteed', desc: 'Material base para as armas brutais de osso de dragão.' },
      { name: 'Fire Dragon Heart', rarity: 'rare' },
      { name: 'Fire Dragon Egg', rarity: 'legendary', desc: 'Se dropado por um dragão feminino estágio 4+, jogue na fogueira para chocá-lo.' }
    ]
  },
  {
    id: 'ice_dragon',
    name: 'Ice Dragon',
    mod: 'ice_and_fire',
    modName: 'Ice and Fire: Dragons',
    icon: Wind,
    image: null,
    lore: 'O mestre do inverno eterno. Dormem sob montanhas de gelo.',
    stats: { hp: '200 - 1000 HP (Estágio 1 a 5)', type: 'Dragão / Gelo' },
    mechanics: 'Diferente do fogo que dá dano contínuo, o bafo do Dragão de Gelo te congela instantaneamente (Slowness extrema e Mining Fatigue). Você se torna um alvo imóvel. Use Magia de Fogo e evite lutar no lago congelado.',
    drops: [
      { name: 'Dragon Scales (Ice)', rarity: 'guaranteed', desc: 'Forja a Ice Dragon Armor.' },
      { name: 'Dragon Bones', rarity: 'guaranteed' },
      { name: 'Ice Dragon Heart', rarity: 'rare' },
      { name: 'Ice Dragon Egg', rarity: 'legendary', desc: 'Jogue numa poça de água congelante para chocá-lo.' }
    ]
  },
  {
    id: 'lightning_dragon',
    name: 'Lightning Dragon',
    mod: 'ice_and_fire',
    modName: 'Ice and Fire: Dragons',
    icon: Zap,
    image: null,
    lore: 'O avatar da tempestade. Costumam ser encontrados em biomas de selva e savana (Tiers 1 a 3 na superfície).',
    stats: { hp: '200 - 1000 HP (Estágio 1 a 5)', type: 'Dragão / Eletricidade' },
    mechanics: 'O dragão mais letal para ataques a distância. Seu raio corta o ar instantaneamente (hitscan), impossível de desviar no tempo de reação se não houver cobertura. Ele lança você para trás. Lute abrigado.',
    drops: [
      { name: 'Dragon Scales (Lightning)', rarity: 'guaranteed', desc: 'Forja a Lightning Dragon Armor.' },
      { name: 'Dragon Bones', rarity: 'guaranteed' },
      { name: 'Lightning Dragon Heart', rarity: 'rare' },
      { name: 'Lightning Dragon Egg', rarity: 'legendary', desc: 'Deixe exposto na chuva durante uma tempestade de raios.' }
    ]
  },
  {
    id: 'sea_serpent',
    name: 'Sea Serpent',
    mod: 'ice_and_fire',
    modName: 'Ice and Fire: Dragons',
    icon: Droplet,
    image: null,
    lore: 'Besta colossal que ronda os oceanos profundos destruindo barcos com facilidade.',
    stats: { hp: '150 - 400 HP (Tamanho variável)', type: 'Monstro Marinho' },
    mechanics: 'Eles saltam fora da água para morder você no barco. Se os atrair para a areia (terra seca), eles se debatem e tomam dano aos poucos, tornando-se alvos estáticos e fáceis.',
    drops: [
      { name: 'Sea Serpent Scales', rarity: 'guaranteed', desc: 'Forja a Tide Guardian Armor, excelente para exploração aquática com Water Breathing nativo.' },
      { name: 'Sea Serpent Fang', rarity: 'rare' }
    ]
  },
  {
    id: 'gorgon',
    name: 'Gorgon',
    mod: 'ice_and_fire',
    modName: 'Ice and Fire: Dragons',
    icon: Crosshair,
    image: null,
    lore: 'Habita os templos gregos subterrâneos isolados.',
    stats: { hp: '100 HP', type: 'Mitológico / Morte Instantânea' },
    mechanics: 'SE VOCÊ OLHAR DIRETAMENTE PARA ELA, VOCÊ MORRE (Vira estátua de pedra instantaneamente, ignorando Draconic Armor e Totems of Undying). Dica: Lute de olhos vendados (Blindfold) usando o minimapa, ou ataque pelas costas.',
    drops: [
      { name: 'Gorgon Head', rarity: 'legendary', desc: 'Uma das armas mais letais do jogo. Transforma quase qualquer mob em estátua com um único uso.' }
    ]
  },
  {
    id: 'cyclops',
    name: 'Cyclops',
    mod: 'ice_and_fire',
    modName: 'Ice and Fire: Dragons',
    icon: Target,
    image: null,
    lore: 'Gigante estúpido habitando cavernas em praias costeiras com rebanhos.',
    stats: { hp: '150 HP', type: 'Mitológico / Instakill' },
    mechanics: 'Ele vai te pegar com as mãos, te levantar no ar, e te morder, causando morte instantânea em armaduras iniciais. Atire flechas DIRETO NO OLHO para cegá-lo e fazê-lo soltá-lo.',
    drops: [
      { name: 'Cyclops Eye', rarity: 'rare' },
      { name: 'Leather', rarity: 'common' }
    ]
  },
  {
    id: 'hydra',
    name: 'Hydra',
    mod: 'ice_and_fire',
    modName: 'Ice and Fire: Dragons',
    icon: Skull,
    image: null,
    lore: 'Serpente multicéfala que se esconde em pântanos venenosos.',
    stats: { hp: '250 HP', type: 'Chefe / Regeneração' },
    mechanics: 'Se você cortar uma cabeça sem usar fogo, duas nascerão no lugar. Ela regenera vida absurdamente rápido. A única fraqueza é dano contínuo de Fogo para cauterizar os pescoços decepados.',
    drops: [
      { name: 'Hydra Fang', rarity: 'rare' },
      { name: 'Hydra Heart', rarity: 'legendary', desc: 'Concede regeneração passiva permanente ao segurar.' }
    ]
  },
  {
    id: 'siren',
    name: 'Siren',
    mod: 'ice_and_fire',
    modName: 'Ice and Fire: Dragons',
    icon: Droplet,
    image: null,
    lore: 'Ninfas amaldiçoadas em ilhas rochosas no oceano.',
    stats: { hp: '50 HP', type: 'Aquático / Hipnose' },
    mechanics: 'Seu canto hipnotiza os jogadores, forçando-os a andar em direção à morte, a menos que usem tampões de ouvido (Earplugs).',
    drops: [
      { name: 'Siren Tear', rarity: 'rare' },
      { name: 'Siren Flute', rarity: 'legendary' }
    ]
  },
  {
    id: 'death_worm',
    name: 'Death Worm',
    mod: 'ice_and_fire',
    modName: 'Ice and Fire: Dragons',
    icon: Shield,
    image: null,
    lore: 'Vermes gigantes que viajam pelo subsolo de desertos.',
    stats: { hp: '40 - 150 HP', type: 'Terrestre / Emboscada' },
    mechanics: 'Eles saltam da areia engolindo tudo. Podem ser domados se filhotes.',
    drops: [
      { name: 'Death Worm Chitin', rarity: 'common' },
      { name: 'Death Worm Egg', rarity: 'rare' }
    ]
  },
  {
    id: 'cockatrice',
    name: 'Cockatrice',
    mod: 'ice_and_fire',
    modName: 'Ice and Fire: Dragons',
    icon: Target,
    image: null,
    lore: 'Aves monstruosas de savanas com um olhar fulminante.',
    stats: { hp: '40 HP', type: 'Mitológico / Wither' },
    mechanics: 'Encarar um Cockatrice aplica Wither (decomposição). Lute de olhos vendados ou com abóboras.',
    drops: [
      { name: 'Wither Bone', rarity: 'common' },
      { name: 'Rotten Egg', rarity: 'rare' }
    ]
  },
  {
    id: 'stymphalian_bird',
    name: 'Stymphalian Bird',
    mod: 'ice_and_fire',
    modName: 'Ice and Fire: Dragons',
    icon: Wind,
    image: null,
    lore: 'Aves de bronze letais que mergulham dos céus do pântano.',
    stats: { hp: '24 HP', type: 'Voador / Projéteis' },
    mechanics: 'Lançam penas metálicas extremamente afiadas. Em bando, dilaceram jogadores desavisados.',
    drops: [
      { name: 'Bronze Ingot', rarity: 'common' },
      { name: 'Stymphalian Bird Feather', rarity: 'common' }
    ]
  },
  {
    id: 'troll',
    name: 'Troll',
    mod: 'ice_and_fire',
    modName: 'Ice and Fire: Dragons',
    icon: Shield,
    image: null,
    lore: 'Gigantes estúpidos e brutais de florestas, montanhas e picos de gelo.',
    stats: { hp: '50 HP', type: 'Mitológico / Fotofobia' },
    mechanics: 'Extremamente fortes em combate corpo-a-corpo, mas viram estátuas de pedra se expostos à luz do Sol.',
    drops: [
      { name: 'Troll Leather', rarity: 'common' },
      { name: 'Troll Tusk', rarity: 'rare' },
      { name: 'Troll Weapon', rarity: 'legendary' }
    ]
  },
  {
    id: 'myrmex',
    name: 'Myrmex',
    mod: 'ice_and_fire',
    modName: 'Ice and Fire: Dragons',
    icon: Sword,
    image: null,
    lore: 'Formigas gigantescas em sociedades de colmeia em selvas e desertos.',
    stats: { hp: '20 - 120 HP', type: 'Inseto / Colmeia' },
    mechanics: 'Elas atacam em enxame. Invadir a colônia garante morte certa se você não for respeitado. Podem ser aliadas se você negociar resina.',
    drops: [
      { name: 'Myrmex Chitin', rarity: 'common' },
      { name: 'Myrmex Stinger', rarity: 'rare' }
    ]
  },
  {
    id: 'amphithere',
    name: 'Amphithere',
    mod: 'ice_and_fire',
    modName: 'Ice and Fire: Dragons',
    icon: Wind,
    image: null,
    lore: 'Serpentes aladas cobertas de penas, majestosas e perigosas das selvas.',
    stats: { hp: '50 HP', type: 'Voador / Montaria' },
    mechanics: 'Dão rasantes mordendo. Se você for rápido, pode montar nelas no ar e tentar domá-las quebrando sua resistência.',
    drops: [
      { name: 'Amphithere Feather', rarity: 'common' }
    ]
  },
  {
    id: 'hippogryph',
    name: 'Hippogryph',
    mod: 'ice_and_fire',
    modName: 'Ice and Fire: Dragons',
    icon: Wind,
    image: null,
    lore: 'Criaturas híbridas (águia e cavalo) encontradas em montanhas.',
    stats: { hp: '40 HP', type: 'Voador / Neutro' },
    mechanics: 'São predadores rápidos, mas podem ser domados se você oferecer patas de coelho suficientes.',
    drops: [
      { name: 'Hippogryph Talon', rarity: 'rare' }
    ]
  },
  {
    id: 'pixie',
    name: 'Pixie',
    mod: 'ice_and_fire',
    modName: 'Ice and Fire: Dragons',
    icon: Sparkles,
    image: null,
    lore: 'Pequenas fadas de florestas mágicas. Cuidado com seus itens.',
    stats: { hp: '10 HP', type: 'Fada / Ladrão' },
    mechanics: 'Vão se aproximar amigavelmente e então roubar itens aleatórios do seu inventário e fugir voando.',
    drops: [
      { name: 'Pixie Dust', rarity: 'rare' }
    ]
  },
  {
    id: 'ghost',
    name: 'Ghost',
    mod: 'ice_and_fire',
    modName: 'Ice and Fire: Dragons',
    icon: Skull,
    image: null,
    lore: 'Almas penadas de aldeões e guerreiros caídos na escuridão.',
    stats: { hp: '30 HP', type: 'Morto-Vivo / Espectral' },
    mechanics: 'Ficam invisíveis e flutuam pelas paredes. Extremamente chatos em masmorras assombradas.',
    drops: [
      { name: 'Ectoplasm', rarity: 'common' }
    ]
  },

  // ==============================
  // MOWZIE'S MOBS
  // ==============================
  {
    id: 'ferrous_wroughtnaut',
    name: 'Ferrous Wroughtnaut',
    mod: 'mowzies',
    modName: "Mowzie's Mobs",
    icon: Shield,
    image: '/assets/bosses/wroughtnaut.png',
    lore: 'O cavaleiro de aço inquebrável trancado em masmorras Wrought Chamber no subsolo.',
    stats: { hp: '40 HP', type: 'Mini-Chefe / Invulnerabilidade' },
    mechanics: 'Ele é totalmente imune a danos de frente e costas. Provoque-o para atacar. Quando ele bater o machado no chão e ficar preso, ataque o núcleo vulnerável nas costas dele.',
    drops: [
      { name: 'Axe of a Thousand Metals', rarity: 'legendary', desc: 'Varre os inimigos em 360 graus (Right Click).' },
      { name: 'Wrought Helm', rarity: 'legendary', desc: 'Armadura pesada inquebrável.' }
    ]
  },
  {
    id: 'frostmaw',
    name: 'Frostmaw',
    mod: 'mowzies',
    modName: "Mowzie's Mobs",
    icon: Wind,
    image: '/assets/bosses/frostmaw.png',
    lore: 'Um monstro gigante adormecido com um cristal nos picos nevados.',
    stats: { hp: '250 HP', type: 'Mini-Chefe / Gelo' },
    mechanics: 'Seu Bafo Congelante (Ice Breath) te paralisa em um bloco de gelo. Roube o cristal usando Invisibility para evitar a briga se não estiver preparado.',
    drops: [
      { name: 'Ice Crystal', rarity: 'legendary', desc: 'Lança nevascas de congelamento contínuo nos alvos.' }
    ]
  },
  {
    id: 'barako',
    name: 'Barako, the Sun Chief',
    mod: 'mowzies',
    modName: "Mowzie's Mobs",
    icon: Crown,
    image: null,
    lore: 'O deus regente do sol em vilas Barakoa (Savanas).',
    stats: { hp: '140 HP', type: 'Chefe / Energia Solar' },
    mechanics: 'Flutua lançando Solar Flares destrutivos enquanto minions curadores o sustentam. Mate os aldeões de cura primeiro e desvie dos feixes movendo-se lateralmente.',
    drops: [
      { name: 'Sun\'s Blessing', rarity: 'legendary', desc: 'Máscara final que atira Solar Flares a distância.' }
    ]
  },


  {
    id: 'naga',
    name: 'Naga',
    mod: 'mowzies',
    modName: "Mowzie's Mobs",
    icon: Droplet,
    image: null,
    lore: 'Serpentes voadoras que habitam litorais e penhascos.',
    stats: { hp: '30 HP', type: 'Voador / Veneno' },
    mechanics: 'Elas cospem ácido corrosivo e são imunes a projéteis quando estão voando rápido. Espere elas mergulharem para dar um golpe corpo a corpo.',
    drops: [
      { name: 'Naga Fang', rarity: 'common' }
    ]
  },
  {
    id: 'foliaath',
    name: 'Foliaath',
    mod: 'mowzies',
    modName: "Mowzie's Mobs",
    icon: Flame,
    image: null,
    lore: 'Plantas monstruosas camufladas nas selvas densas.',
    stats: { hp: '10 HP', type: 'Planta / Emboscada' },
    mechanics: 'Elas não tomam dano a menos que abram a boca para te atacar. Fique fora do alcance da mordida.',
    drops: [
      { name: 'Foliaath Seed', rarity: 'rare', desc: 'Plante para criar um bebê Foliaath.' }
    ]
  },
  {
    id: 'grottol',
    name: 'Grottol',
    mod: 'mowzies',
    modName: "Mowzie's Mobs",
    icon: Sparkles,
    image: null,
    lore: 'Cristais vivos que correm por cavernas.',
    stats: { hp: '20 HP', type: 'Minério / Fuga' },
    mechanics: 'Correm muito rápido de jogadores. Só tomam dano de Picaretas, espadas são inúteis contra sua carapaça.',
    drops: [
      { name: 'Diamond', rarity: 'guaranteed' }
    ]
  },

  // ==============================
  // APOTHEOSIS & OUTROS
  // ==============================
  {
    id: 'apotheosis_boss',
    name: 'Apotheotic Bosses (Míticos/Épicos)',
    mod: 'apotheosis',
    modName: 'Apotheosis Ecosystem',
    icon: Sparkles,
    image: null,
    lore: 'Versões super-carregadas de mobs baunilha com nomes brilhantes.',
    stats: { hp: '150 - 800+ HP', type: 'Mítico / Affixes' },
    mechanics: 'Modificadores "Affixes": Refletem dano (Thorns), teletransportam, curam ou invocam trovões. Não spamme ataques se ele tiver "Thorns". Use arco ou dano explosivo e fuja rápido.',
    drops: [
      { name: 'Affixed Gear', rarity: 'guaranteed', desc: 'Equipamentos (Armaduras/Armas) com status absurdos.' },
      { name: 'Gem Dust', rarity: 'common' },
      { name: 'Tome of Scrapping', rarity: 'rare' }
    ]
  },
  {
    id: 'dead_king',
    name: 'The Dead King',
    mod: 'irons',
    modName: "Iron's Spells and Spellbooks",
    icon: BookOpen,
    image: null,
    lore: 'O Lorde Liche cadavérico guardião do altar final nas Catacumbas.',
    stats: { hp: '250 HP', type: 'Mago Imortal / Wither e Blood Magic' },
    mechanics: 'Invoca Blood Needles e Wither. Quando morre a primeira vez, ressuscita numa fase espectral enfurecida. Counterspells (Silence) e magias sagradas são essenciais.',
    drops: [
      { name: 'Blood Staff / Arcanomancer Robes', rarity: 'legendary', desc: 'Melhores multiplicadores mágicos do mid-game.' },
      { name: 'Spellbooks Lendários', rarity: 'common' }
    ]
  },
  {
    id: 'archevoker',
    name: 'Archevoker',
    mod: 'irons',
    modName: "Iron's Spells and Spellbooks",
    icon: BookOpen,
    image: null,
    lore: 'Feiticeiro de elite que lança magias avançadas de evocação.',
    stats: { hp: '60 HP', type: 'Mago / Evocação' },
    mechanics: 'Cria escudos arcanos, clona a si mesmo e lança presas mortais no chão.',
    drops: [
      { name: 'Evocation Spell Book', rarity: 'rare' },
      { name: 'Arcane Essence', rarity: 'common' }
    ]
  },
  {
    id: 'cryomancer',
    name: 'Cryomancer',
    mod: 'irons',
    modName: "Iron's Spells and Spellbooks",
    icon: Wind,
    image: null,
    lore: 'Habitam torres geladas em picos nevados.',
    stats: { hp: '40 HP', type: 'Mago / Gelo' },
    mechanics: 'Lançam Cone of Cold e Ice Blocks, paralisando alvos rapidamente.',
    drops: [
      { name: 'Ice Spell Book', rarity: 'rare' },
      { name: 'Frozen Bone', rarity: 'common' }
    ]
  },
  {
    id: 'pyromancer',
    name: 'Pyromancer',
    mod: 'irons',
    modName: "Iron's Spells and Spellbooks",
    icon: Flame,
    image: null,
    lore: 'Fanáticos do fogo encontrados em torres e vulcões.',
    stats: { hp: '40 HP', type: 'Mago / Fogo' },
    mechanics: 'Bombardeiam com Fireballs e Wall of Fire. Extrema área de dano.',
    drops: [
      { name: 'Fire Spell Book', rarity: 'rare' },
      { name: 'Blaze Powder', rarity: 'common' }
    ]
  },
  {
    id: 'necromancer',
    name: 'Necromancer',
    mod: 'irons',
    modName: "Iron's Spells and Spellbooks",
    icon: Skull,
    image: null,
    lore: 'Magos obscuros escondidos em cemitérios.',
    stats: { hp: '40 HP', type: 'Mago / Sangue e Morte' },
    mechanics: 'Invocam hordas de mortos-vivos (Raise Dead) e roubam vida (Blood Slash).',
    drops: [
      { name: 'Blood Spell Book', rarity: 'rare' },
      { name: 'Blood Vial', rarity: 'common' }
    ]
  },
  {
    id: 'priest',
    name: 'Priest',
    mod: 'irons',
    modName: "Iron's Spells and Spellbooks",
    icon: Sparkles,
    image: null,
    lore: 'Clérigos que curam os feridos em vilas e monastérios.',
    stats: { hp: '30 HP', type: 'Mago / Sagrado' },
    mechanics: 'Curam aldeões e a si mesmos. Pacíficos, mas se você atacá-los, usarão Wisp e Smite contra você.',
    drops: [
      { name: 'Holy Spell Book', rarity: 'rare' }
    ]
  }
];

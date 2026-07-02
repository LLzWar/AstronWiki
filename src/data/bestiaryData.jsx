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
    mechanics: 'Ele absorve ataques de fogo e retalha com plasma. Cuidado com o ataque em que ele gira puxando você para o ar, se você não tiver mobilidade (elytra/jetpack), o dano de queda será fatal.',
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
    id: 'foliaath',
    name: 'Foliaath',
    mod: 'mowzies',
    modName: "Mowzie's Mobs",
    icon: Activity,
    image: null,
    lore: 'Planta carnívora gigante em selvas e pântanos.',
    stats: { hp: '10 HP', type: 'Monstro Comum / Melee Rápido' },
    mechanics: 'Aparecem como samambaias até você pisar perto. Ataque absurdamente veloz. Não morrem para flechas. Use fogo ou machados de perto.',
    drops: [
      { name: 'Foliaath Seed', rarity: 'common', desc: 'Plante e alimente com carne crua para virar sentinela defensiva.' }
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

  // ==============================
  // MOBS COMUNS / VANILLA & OUTROS
  // ==============================
  {
    id: 'enderman',
    name: 'Enderman',
    mod: 'common',
    modName: 'Minecraft Vanilla / Gerais',
    icon: Target,
    image: null,
    lore: 'Criaturas altas das dimensões sombrias.',
    stats: { hp: '40 HP', type: 'Comum / Teleporte' },
    mechanics: 'Toma dano para água. Foge de projéteis teletransportando-se.',
    drops: [
      { name: 'Ender Pearl', rarity: 'common', desc: 'Item fundamental para craftar o Eye of Void e itens de tecnologia.' }
    ]
  },
  {
    id: 'blaze',
    name: 'Blaze',
    mod: 'common',
    modName: 'Minecraft Vanilla / Gerais',
    icon: Flame,
    image: null,
    lore: 'Sentinelas de fogo das fortalezas do Nether.',
    stats: { hp: '20 HP', type: 'Comum / Fogo Voador' },
    mechanics: 'Atiram sequências de 3 bolas de fogo. Fracos contra dano mágico de Gelo.',
    drops: [
      { name: 'Blaze Rod', rarity: 'common', desc: 'Necessário para poções e craftings de pó.' }
    ]
  },
  {
    id: 'wither_skeleton',
    name: 'Wither Skeleton',
    mod: 'common',
    modName: 'Minecraft Vanilla / Gerais',
    icon: Skull,
    image: null,
    lore: 'Esqueletos carbonizados e letais do Nether.',
    stats: { hp: '20 HP', type: 'Comum / Wither Melee' },
    mechanics: 'O toque causa Wither II, que escurece a barra de vida e causa dano contínuo.',
    drops: [
      { name: 'Wither Skeleton Skull', rarity: 'rare', desc: 'Usado para invocar o Wither Vanilla.' },
      { name: 'Coal', rarity: 'common' },
      { name: 'Bone', rarity: 'common' }
    ]
  },
  {
    id: 'creeper',
    name: 'Creeper',
    mod: 'common',
    modName: 'Minecraft Vanilla / Gerais',
    icon: Activity,
    image: null,
    lore: 'Ameaça furtiva silenciosa.',
    stats: { hp: '20 HP', type: 'Comum / Explosão' },
    mechanics: 'Se aproxima sem fazer som. Pode ser forçado a explodir com Flint and Steel.',
    drops: [
      { name: 'Gunpowder', rarity: 'common', desc: 'Usado em TNT e para munição de alguns mods de arma.' }
    ]
  }
];

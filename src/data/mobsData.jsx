import { Skull, Target, Flame, Ghost, Activity, Eye, ShieldAlert, Sparkles, Feather, Droplet, Bug, Fish, Pickaxe, Zap, Sword, Crosshair, Hexagon, Sprout } from 'lucide-react';

export const MOBS_DATA = [
  // ==============================
  // MINECRAFT VANILLA / GERAIS
  // ==============================
  {
    id: 'zombie',
    name: 'Zombie',
    mod: 'common',
    modName: 'Minecraft Vanilla',
    icon: Skull,
    lore: 'O clássico morto-vivo andante. Queima à luz do sol.',
    stats: { hp: '20 HP', type: 'Comum / Físico' },
    mechanics: 'Lento, ataca corpo a corpo e pode chamar reforços ao ser atingido.',
    drops: [
      { name: 'Rotten Flesh', rarity: 'common' },
      { name: 'Iron Ingot', rarity: 'rare' },
      { name: 'Carrot', rarity: 'rare' },
      { name: 'Potato', rarity: 'rare' }
    ]
  },
  {
    id: 'skeleton',
    name: 'Skeleton',
    mod: 'common',
    modName: 'Minecraft Vanilla',
    icon: Target,
    lore: 'Arqueiros de ossos implacáveis. Queimam à luz do sol.',
    stats: { hp: '20 HP', type: 'Comum / Longo Alcance' },
    mechanics: 'Atiram flechas de média distância. Afastam-se se você se aproximar muito.',
    drops: [
      { name: 'Bone', rarity: 'common' },
      { name: 'Arrow', rarity: 'common' },
      { name: 'Bow', rarity: 'rare' }
    ]
  },
  {
    id: 'spider',
    name: 'Spider',
    mod: 'common',
    modName: 'Minecraft Vanilla',
    icon: Bug,
    lore: 'Aracnídeos ágeis que escalam paredes. Neutros de dia.',
    stats: { hp: '16 HP', type: 'Comum / Ágil' },
    mechanics: 'Saltam longas distâncias para atacar e podem escalar superfícies verticais.',
    drops: [
      { name: 'String', rarity: 'common' },
      { name: 'Spider Eye', rarity: 'rare' }
    ]
  },
  {
    id: 'creeper',
    name: 'Creeper',
    mod: 'common',
    modName: 'Minecraft Vanilla',
    icon: Activity,
    lore: 'Ameaça furtiva silenciosa. Nasce na escuridão.',
    stats: { hp: '20 HP', type: 'Comum / Explosão' },
    mechanics: 'Se aproxima sem fazer som. Pode ser forçado a explodir com Flint and Steel. Foge de gatos.',
    drops: [
      { name: 'Gunpowder', rarity: 'common', desc: 'Usado em TNT e para munição de alguns mods de arma.' },
      { name: 'Music Disc', rarity: 'rare', desc: 'Se morto por um esqueleto.' }
    ]
  },
  {
    id: 'enderman',
    name: 'Enderman',
    mod: 'common',
    modName: 'Minecraft Vanilla',
    icon: Eye,
    lore: 'Criaturas altas das dimensões sombrias do The End.',
    stats: { hp: '40 HP', type: 'Comum / Teleporte' },
    mechanics: 'Toma dano para água. Foge de projéteis teletransportando-se. Olhar nos olhos provocará fúria letal.',
    drops: [
      { name: 'Ender Pearl', rarity: 'common', desc: 'Item fundamental para craftar o Eye of Void e itens de tecnologia.' }
    ]
  },
  {
    id: 'witch',
    name: 'Witch',
    mod: 'common',
    modName: 'Minecraft Vanilla',
    icon: Sparkles,
    lore: 'Lançadores de feitiços caóticos em pântanos.',
    stats: { hp: '26 HP', type: 'Comum / Magia' },
    mechanics: 'Atira poções de veneno, lentidão e fraqueza. Cura-se rapidamente com poções de vida.',
    drops: [
      { name: 'Glass Bottle', rarity: 'common' },
      { name: 'Glowstone Dust', rarity: 'common' },
      { name: 'Redstone', rarity: 'common' },
      { name: 'Spider Eye', rarity: 'common' }
    ]
  },
  {
    id: 'slime',
    name: 'Slime',
    mod: 'common',
    modName: 'Minecraft Vanilla',
    icon: Hexagon,
    lore: 'Massas gelatinosas que saltam em cavernas profundas ou pântanos.',
    stats: { hp: '1 a 16 HP', type: 'Comum / Divisão' },
    mechanics: 'Ao morrer, se divide em versões menores de si mesmo até não sobrar nada.',
    drops: [
      { name: 'Slimeball', rarity: 'common' }
    ]
  },
  {
    id: 'phantom',
    name: 'Phantom',
    mod: 'common',
    modName: 'Minecraft Vanilla',
    icon: Ghost,
    lore: 'Terror noturno que caça jogadores insones.',
    stats: { hp: '20 HP', type: 'Comum / Voador' },
    mechanics: 'Surgem à noite se você não dormir por 3 dias seguidos no jogo. Dão rasantes para atacar.',
    drops: [
      { name: 'Phantom Membrane', rarity: 'common', desc: 'Usada para reparar Elytra e fazer poções Slow Falling.' }
    ]
  },
  {
    id: 'blaze',
    name: 'Blaze',
    mod: 'common',
    modName: 'Minecraft Vanilla',
    icon: Flame,
    lore: 'Sentinelas de fogo das fortalezas do Nether.',
    stats: { hp: '20 HP', type: 'Comum / Fogo Voador' },
    mechanics: 'Atiram sequências de 3 bolas de fogo. Fracos contra dano mágico de Gelo. Podem voar alto se não houver teto.',
    drops: [
      { name: 'Blaze Rod', rarity: 'common', desc: 'Necessário para poções e craftings de pó de fogo.' }
    ]
  },
  {
    id: 'wither_skeleton',
    name: 'Wither Skeleton',
    mod: 'common',
    modName: 'Minecraft Vanilla',
    icon: Skull,
    lore: 'Esqueletos carbonizados e letais das Fortalezas do Nether.',
    stats: { hp: '20 HP', type: 'Comum / Wither Melee' },
    mechanics: 'O toque causa Wither II, que escurece a barra de vida e causa dano contínuo intenso em armaduras iniciais.',
    drops: [
      { name: 'Wither Skeleton Skull', rarity: 'rare', desc: 'Usado para invocar o Wither Vanilla e armaduras profanas.' },
      { name: 'Coal', rarity: 'common' },
      { name: 'Bone', rarity: 'common' },
      { name: 'Stone Sword', rarity: 'common' }
    ]
  },
  {
    id: 'ghast',
    name: 'Ghast',
    mod: 'common',
    modName: 'Minecraft Vanilla',
    icon: Ghost,
    lore: 'Mortalhas melancólicas flutuantes do Nether.',
    stats: { hp: '10 HP', type: 'Comum / Artilharia Aérea' },
    mechanics: 'Atira bolas de fogo explosivas que destroem o terreno (exceto pedregulhos e nether bricks). Você pode rebater as bolas com um tapa.',
    drops: [
      { name: 'Ghast Tear', rarity: 'rare', desc: 'Regeneração e cristais.' },
      { name: 'Gunpowder', rarity: 'common' }
    ]
  },
  {
    id: 'piglin_brute',
    name: 'Piglin Brute',
    mod: 'common',
    modName: 'Minecraft Vanilla',
    icon: Sword,
    lore: 'Guardião enfurecido dos Bastions Remnants.',
    stats: { hp: '50 HP', type: 'Comum / Machado Pesado' },
    mechanics: 'Não se distraem com Ouro. Atacam imediatamente com dano altíssimo e não recuam.',
    drops: [
      { name: 'Golden Axe', rarity: 'rare' }
    ]
  },
  {
    id: 'warden',
    name: 'Warden',
    mod: 'common',
    modName: 'Minecraft Vanilla',
    icon: Activity,
    lore: 'A calamidade cega das Cidades Ancestrais.',
    stats: { hp: '500 HP', type: 'Monstro Elite / Instakill' },
    mechanics: 'Guiado exclusivamente por som e cheiro. Seu raio sônico atravessa blocos e armaduras comuns. Extremamente veloz no escuro. Evite combate sem equipamentos do late-game.',
    drops: [
      { name: 'Sculk Catalyst', rarity: 'common' }
    ]
  },
  
  // ==============================
  // CATACLYSM MOBS
  // ==============================
  {
    id: 'ignited_revenant',
    name: 'Ignited Revenant',
    mod: 'cataclysm',
    modName: "L'Ender's Cataclysm",
    icon: ShieldAlert,
    lore: 'Guerreiros esqueletos de elite servindo o Ignis.',
    stats: { hp: '80 HP', type: 'Elite / Defesa' },
    mechanics: 'Levantam escudos inquebráveis e desferem esmagamentos em área que repelem o jogador. Quebre a guarda com armas perfurantes (Axe) ou magia.',
    drops: [
      { name: 'Ashes', rarity: 'common' },
      { name: 'Wither Bone', rarity: 'rare' }
    ]
  },
  {
    id: 'kobogo',
    name: 'Kobogo',
    mod: 'cataclysm',
    modName: "L'Ender's Cataclysm",
    icon: Crosshair,
    lore: 'Répteis da Sunken City, adaptados às profundezas.',
    stats: { hp: '30 HP', type: 'Comum / Anfíbio' },
    mechanics: 'Movem-se rapidamente em bandos debaixo d\'água, atirando feixes mágicos de luz d\'água e curando os aliados.',
    drops: [
      { name: 'Coral Chunk', rarity: 'common' },
      { name: 'Amethyst Shard', rarity: 'common' }
    ]
  },
  {
    id: 'amethyst_crab',
    name: 'Amethyst Crab',
    mod: 'cataclysm',
    modName: "L'Ender's Cataclysm",
    icon: Bug,
    lore: 'Caranguejos blindados adornados com geodos.',
    stats: { hp: '40 HP', type: 'Comum / Carapaça Densa' },
    mechanics: 'Sua carapaça reflete projéteis. Necessita dano contundente ou picaretas para dar dano bônus.',
    drops: [
      { name: 'Amethyst Shard', rarity: 'common' },
      { name: 'Crab Meat', rarity: 'common' }
    ]
  },
  {
    id: 'wadjet',
    name: 'Wadjet',
    mod: 'cataclysm',
    modName: "L'Ender's Cataclysm",
    icon: Activity,
    lore: 'Serpentes enfaixadas nativas das Pirâmides Amaldiçoadas.',
    stats: { hp: '40 HP', type: 'Comum / Veneno Secante' },
    mechanics: 'Cuspidoras de veneno do deserto que aplica "Wither" e Lentidão. Habitam salas com areia movediça.',
    drops: [
      { name: 'Poison Sac', rarity: 'common' },
      { name: 'Bandage', rarity: 'common' }
    ]
  },

  // ==============================
  // ICE AND FIRE MOBS
  // ==============================
  {
    id: 'cockatrice',
    name: 'Cockatrice',
    mod: 'ice_and_fire',
    modName: 'Ice and Fire: Dragons',
    icon: Eye,
    lore: 'Pássaros escamosos malignos de savanas.',
    stats: { hp: '40 HP', type: 'Agro-Defensivo / Encarar Letal' },
    mechanics: 'Se você olhar nos olhos delas por muito tempo, receberá efeito de Murchar (Wither) contínuo e letal. Lute cegamente ou não a encare diretamente.',
    drops: [
      { name: 'Witherbone', rarity: 'common' },
      { name: 'Cockatrice Eye', rarity: 'rare' }
    ]
  },
  {
    id: 'stymphalian_bird',
    name: 'Stymphalian Bird',
    mod: 'ice_and_fire',
    modName: 'Ice and Fire: Dragons',
    icon: Feather,
    lore: 'Aves de bronze vorazes dos biomas áridos.',
    stats: { hp: '24 HP', type: 'Voador / Chuva de Lâminas' },
    mechanics: 'Mergulham no céu disparando penas afiadas como facas contra jogadores. Use escudo ou abrigo. Elas voam muito alto.',
    drops: [
      { name: 'Stymphalian Bird Feather', rarity: 'rare', desc: 'Material para forjar espadas e flechas de bronze voadoras.' },
      { name: 'Copper Ingot', rarity: 'common' }
    ]
  },
  {
    id: 'pixie',
    name: 'Pixie',
    mod: 'ice_and_fire',
    modName: 'Ice and Fire: Dragons',
    icon: Sparkles,
    lore: 'Fadinhas mágicas das florestas escuras (Roofed Forest).',
    stats: { hp: '10 HP', type: 'Passivo / Ladrão' },
    mechanics: 'Roubam itens do seu inventário de forma invisível. Mate-as ou dê um bolo (Cake) para fazer amizade. Ao roubar, voam de volta para sua vila (Pixie Village).',
    drops: [
      { name: 'Pixie Dust', rarity: 'rare', desc: 'Poeira encantada voadora.' },
      { name: 'Item Roubado', rarity: 'guaranteed' }
    ]
  },
  {
    id: 'troll',
    name: 'Troll (Floresta/Gelo/Montanha)',
    mod: 'ice_and_fire',
    modName: 'Ice and Fire: Dragons',
    icon: Pickaxe,
    lore: 'Gigantes brutais equipados com porretes de pedra ou árvores inteiras.',
    stats: { hp: '50 HP', type: 'Pesado / Regeneração Rápida' },
    mechanics: 'Regeneram vida massivamente rápido. Devem ser atacados com Fogo para cancelar a regeneração. Podem jogar pedras que te derrubam longe.',
    drops: [
      { name: 'Troll Leather', rarity: 'rare', desc: 'Base para armaduras térmicas e furtivas pesadas.' },
      { name: 'Troll Tusks', rarity: 'common' },
      { name: 'Troll Weapon', rarity: 'legendary' }
    ]
  },
  {
    id: 'siren',
    name: 'Siren',
    mod: 'ice_and_fire',
    modName: 'Ice and Fire: Dragons',
    icon: Droplet,
    lore: 'Monstros marinhos traiçoeiros que fingem ser ninfas da água.',
    stats: { hp: '50 HP', type: 'Aquático / Encantamento' },
    mechanics: 'Cantam em ilhas de pedra. A canção arrasta o seu personagem passivamente contra a vontade até as presas dela. Use Earplugs para ficar imune e poder combatê-la.',
    drops: [
      { name: 'Siren Tear', rarity: 'rare', desc: 'Material base para tiaras mágicas aquáticas.' },
      { name: 'Siren Flute', rarity: 'legendary' }
    ]
  },
  {
    id: 'deathworm',
    name: 'Deathworm',
    mod: 'ice_and_fire',
    modName: 'Ice and Fire: Dragons',
    icon: Bug,
    lore: 'Vermes gigantescos que nadam sob a areia do deserto.',
    stats: { hp: '10 - 50 HP (Tamanho Variável)', type: 'Subterrâneo / Bote' },
    mechanics: 'Nadam por dentro de blocos de areia sendo impossíveis de atacar. Saltam da areia dando botes mortais e voltam a submergir. Ovos de Deathworm podem criar pets domáveis para cavalgar na areia.',
    drops: [
      { name: 'Deathworm Chitin', rarity: 'common', desc: 'Gera as Deathworm Armors (amarelas, vermelhas e brancas).' },
      { name: 'Deathworm Egg', rarity: 'rare' }
    ]
  },
  {
    id: 'myrmex',
    name: 'Myrmex (Soldado/Sentinela)',
    mod: 'ice_and_fire',
    modName: 'Ice and Fire: Dragons',
    icon: Bug,
    lore: 'Formigas monstruosas hiper-evoluídas. Enxames no deserto e selva.',
    stats: { hp: '20 - 60 HP', type: 'Colmeia / Enxame' },
    mechanics: 'Constroem ninhos subterrâneos imensos feitos de resina (Resin). Tocar em uma agressiva fará dezenas saírem das tocas para matar você. Feromônios delas deixam você imune a elas.',
    drops: [
      { name: 'Myrmex Chitin', rarity: 'common' },
      { name: 'Myrmex Resin', rarity: 'common' },
      { name: 'Myrmex Stinger', rarity: 'rare' }
    ]
  },
  {
    id: 'hippocampus',
    name: 'Hippocampus',
    mod: 'ice_and_fire',
    modName: 'Ice and Fire: Dragons',
    icon: Fish,
    lore: 'Corcéis dos mares, misturam cavalo com peixe.',
    stats: { hp: '40 HP', type: 'Passivo / Montaria Aquática' },
    mechanics: 'Podem ser domados com Kelp/Esponjas. São a montaria mais rápida dos oceanos, permitindo navegação marítima e mergulho seguro nas estruturas subaquáticas.',
    drops: [
      { name: 'Hippocampus Fin', rarity: 'common' }
    ]
  },

  // ==============================
  // MOWZIE'S MOBS
  // ==============================
  {
    id: 'foliaath',
    name: 'Foliaath',
    mod: 'mowzies',
    modName: "Mowzie's Mobs",
    icon: Sprout,
    lore: 'Planta carnívora gigante escondida em selvas e pântanos.',
    stats: { hp: '10 HP', type: 'Comum / Melee Extremamente Rápido' },
    mechanics: 'Camufla-se como uma simples samambaia até você pisar perto. Quando ataca, vira um moinho de dentes imune a projéteis e repelente de espadas. Use fogo, flint and steel ou machados com knockback longo.',
    drops: [
      { name: 'Foliaath Seed', rarity: 'common', desc: 'Plante e alimente com Baby Zombie/Carne crua para criar sua própria sentinela defensiva (ela atacará mobs).' }
    ]
  },
  {
    id: 'barakoana',
    name: 'Barakoana',
    mod: 'mowzies',
    modName: "Mowzie's Mobs",
    icon: Target,
    lore: 'Guerreiros da tribo solar das savanas.',
    stats: { hp: '20 HP', type: 'Comum / Tribo' },
    mechanics: 'Caminham em tropas. Bloqueiam golpes e atiram dardos venenosos envenenando a distância. O líder da tropa aumenta a moral.',
    drops: [
      { name: 'Barakoa Mask', rarity: 'rare', desc: 'Mascara de adorno e magia.' },
      { name: 'Blowdart', rarity: 'common' }
    ]
  },
  {
    id: 'grottol',
    name: 'Grottol',
    mod: 'mowzies',
    modName: "Mowzie's Mobs",
    icon: Pickaxe,
    lore: 'Caranguejos de minério raros das profundezas (Nível do Diamante).',
    stats: { hp: '20 HP', type: 'Passivo / Furtivo' },
    mechanics: 'Extremamente rápidos e blindados contra espadas e magia. Para dar dano, use APENAS Picaretas de Ferro para cima. Se você bater com espada, o dano é zero e ele foge ou se enterra.',
    drops: [
      { name: 'Diamond', rarity: 'guaranteed', desc: 'Pinhata de diamantes.' }
    ]
  },
  {
    id: 'lantern',
    name: 'Lantern',
    mod: 'mowzies',
    modName: "Mowzie's Mobs",
    icon: Flame,
    lore: 'Espíritos voadores que flutuam nas Dark Forests.',
    stats: { hp: '4 HP', type: 'Passivo / Voador' },
    mechanics: 'Brilham na escuridão noturna. Se tocados ou mortos, estouram liberando luz. Inofensivos, embelezam a floresta.',
    drops: [
      { name: 'Luminous Jelly', rarity: 'common', desc: 'Ao ser consumida, dá ao jogador a capacidade de enxergar perfeitamente no escuro total (Night Vision) por tempo limitado.' }
    ]
  },
  {
    id: 'naga',
    name: 'Naga',
    mod: 'mowzies',
    modName: "Mowzie's Mobs",
    icon: Zap,
    lore: 'Dragões serpentes dos ares, espreitando biomas costeiros.',
    stats: { hp: '30 HP', type: 'Voador / Veneno Ácido' },
    mechanics: 'Voam fora do alcance de espadas e dão rasantes mortais cuspindo ácido envenenado de área. Se você atirar nela *quando ela for cuspir*, derrubará ela no chão, permitindo hit-kill.',
    drops: [
      { name: 'Naga Fang', rarity: 'rare', desc: 'Cria uma adaga que envenena inimigos e permite deslizes aéreos rápidos (Dash).' }
    ]
  },

  // ==============================
  // APOTHEOSIS E OUTROS
  // ==============================
  {
    id: 'apotheosis_elite',
    name: 'Apotheotic Elites',
    mod: 'apotheosis',
    modName: 'Apotheosis Ecosystem',
    icon: Sparkles,
    lore: 'Versões super-carregadas de mobs Vanilla, emitindo partículas vibrantes coloridas (Azul, Roxo, Laranja) e com nomes únicos.',
    stats: { hp: '40 - 200 HP', type: 'Elite / Afixos Mágicos' },
    mechanics: 'Possuem Afixos (Affixes). Eles podem: Refletir 100% do dano físico de volta para você (Thorns), teletransportar para suas costas, regenerar HP de fogo ou soltar raios onde você pisa. Sempre olhe o nome deles colorido. Enfrente-os de longe e com respeito.',
    drops: [
      { name: 'Equipamentos (Affixed Gear)', rarity: 'guaranteed', desc: 'Armaduras épicas ou míticas já aprimoradas com atributos e slots.' },
      { name: 'Gem Dust', rarity: 'common' },
      { name: 'Gemas Embutíveis (Gems)', rarity: 'rare' }
    ]
  }
];

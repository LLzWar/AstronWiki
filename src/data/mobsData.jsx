import { Skull, Target, Flame, Ghost, Activity, Eye, ShieldAlert, Sparkles, Feather, Droplet } from 'lucide-react';

export const MOBS_DATA = [
  // ==============================
  // MINECRAFT VANILLA / GERAIS
  // ==============================
  {
    id: 'enderman',
    name: 'Enderman',
    mod: 'common',
    modName: 'Minecraft Vanilla',
    icon: Target,
    image: null,
    lore: 'Criaturas altas das dimensões sombrias.',
    stats: { hp: '40 HP', type: 'Comum / Teleporte' },
    mechanics: 'Toma dano para água. Foge de projéteis teletransportando-se. Olhar nos olhos provocará fúria.',
    drops: [
      { name: 'Ender Pearl', rarity: 'common', desc: 'Item fundamental para craftar o Eye of Void e itens de tecnologia.' }
    ]
  },
  {
    id: 'blaze',
    name: 'Blaze',
    mod: 'common',
    modName: 'Minecraft Vanilla',
    icon: Flame,
    image: null,
    lore: 'Sentinelas de fogo das fortalezas do Nether.',
    stats: { hp: '20 HP', type: 'Comum / Fogo Voador' },
    mechanics: 'Atiram sequências de 3 bolas de fogo. Fracos contra dano mágico de Gelo. Podem voar alto se não houver teto.',
    drops: [
      { name: 'Blaze Rod', rarity: 'common', desc: 'Necessário para poções e craftings de pó.' }
    ]
  },
  {
    id: 'wither_skeleton',
    name: 'Wither Skeleton',
    mod: 'common',
    modName: 'Minecraft Vanilla',
    icon: Skull,
    image: null,
    lore: 'Esqueletos carbonizados e letais do Nether.',
    stats: { hp: '20 HP', type: 'Comum / Wither Melee' },
    mechanics: 'O toque causa Wither II, que escurece a barra de vida e causa dano contínuo intenso em armaduras iniciais.',
    drops: [
      { name: 'Wither Skeleton Skull', rarity: 'rare', desc: 'Usado para invocar o Wither Vanilla e armaduras profanas.' },
      { name: 'Coal', rarity: 'common' },
      { name: 'Bone', rarity: 'common' }
    ]
  },
  {
    id: 'creeper',
    name: 'Creeper',
    mod: 'common',
    modName: 'Minecraft Vanilla',
    icon: Activity,
    image: null,
    lore: 'Ameaça furtiva silenciosa.',
    stats: { hp: '20 HP', type: 'Comum / Explosão' },
    mechanics: 'Se aproxima sem fazer som. Pode ser forçado a explodir com Flint and Steel. Fuja antes de detonar.',
    drops: [
      { name: 'Gunpowder', rarity: 'common', desc: 'Usado em TNT e para munição de alguns mods de arma.' }
    ]
  },
  
  // ==============================
  // CATACLYSM MOBS
  // ==============================
  {
    id: 'ignited_revenant',
    name: 'Ignited Revenant',
    mod: 'cataclysm',
    modName: 'L_Ender\'s Cataclysm',
    icon: ShieldAlert,
    image: null,
    lore: 'Guerreiros esqueletos de elite servindo o Ignis.',
    stats: { hp: '80 HP', type: 'Monstro de Elite / Fogo' },
    mechanics: 'Usam escudos de obsidiana e machados mortais. Possuem um ataque em área de esmagamento (Smash).',
    drops: [
      { name: 'Ashes', rarity: 'common' },
      { name: 'Wither Bone', rarity: 'rare' }
    ]
  },
  {
    id: 'kobogo',
    name: 'Kobogo',
    mod: 'cataclysm',
    modName: 'L_Ender\'s Cataclysm',
    icon: Activity,
    image: null,
    lore: 'Pequenos répteis nativos do bioma Sunken City.',
    stats: { hp: '30 HP', type: 'Monstro Comum / Anfíbio' },
    mechanics: 'Atacam em grupo atirando projéteis mágicos da água.',
    drops: [
      { name: 'Coral Chunk', rarity: 'common' }
    ]
  },

  // ==============================
  // ICE AND FIRE MOBS
  // ==============================
  {
    id: 'troll',
    name: 'Troll (Floresta/Gelo/Montanha)',
    mod: 'ice_and_fire',
    modName: 'Ice and Fire: Dragons',
    icon: Skull,
    image: null,
    lore: 'Gigantes brutais equipados com porretes de pedra ou árvores inteiras.',
    stats: { hp: '50 HP', type: 'Monstro Pesado / Regeneração' },
    mechanics: 'Regeneram vida muito rápido. Devem ser atacados com Fogo para cancelar a regeneração. Podem jogar pedras.',
    drops: [
      { name: 'Troll Leather', rarity: 'rare', desc: 'Base para armaduras térmicas e furtivas.' },
      { name: 'Troll Tusks', rarity: 'common' }
    ]
  },
  {
    id: 'siren',
    name: 'Siren',
    mod: 'ice_and_fire',
    modName: 'Ice and Fire: Dragons',
    icon: Droplet,
    image: null,
    lore: 'Monstros marinhos traiçoeiros que fingem ser ninfas da água.',
    stats: { hp: '50 HP', type: 'Monstro Aquático / Encantamento' },
    mechanics: 'Cantam para hipnotizar o jogador, forçando-o a andar para a água até morrer afogado ou devorado. Tape os ouvidos com Earplugs.',
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
    icon: Activity,
    image: null,
    lore: 'Vermes gigantescos que nadam sob a areia do deserto.',
    stats: { hp: '10 - 50 HP (Depende do Tamanho)', type: 'Monstro Subterrâneo' },
    mechanics: 'Pulam da areia dando botes mortais. Quando estão debaixo da terra não podem ser atacados.',
    drops: [
      { name: 'Deathworm Chitin', rarity: 'common', desc: 'Gera as Deathworm Armors.' },
      { name: 'Deathworm Egg', rarity: 'rare' }
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
    icon: Activity,
    image: null,
    lore: 'Planta carnívora gigante escondida em selvas e pântanos.',
    stats: { hp: '10 HP', type: 'Monstro Comum / Melee Rápido' },
    mechanics: 'Aparecem como samambaias até você pisar perto. Ataque absurdamente veloz em área. Não morrem para flechas. Use fogo ou machados.',
    drops: [
      { name: 'Foliaath Seed', rarity: 'common', desc: 'Plante e alimente com carne crua para virar sua sentinela defensiva.' }
    ]
  },

  // ==============================
  // APOTHEOSIS
  // ==============================
  {
    id: 'apotheosis_elite',
    name: 'Apotheotic Mobs (Míticos/Épicos/Raros)',
    mod: 'apotheosis',
    modName: 'Apotheosis Ecosystem',
    icon: Sparkles,
    image: null,
    lore: 'Versões super-carregadas de mobs baunilha emitindo partículas mágicas e nomes coloridos.',
    stats: { hp: '40 - 200 HP', type: 'Elite / Affixes' },
    mechanics: 'Possuem modificadores (Affixes): Refletem dano (Thorns), teletransportam, curam-se ou invocam trovões. Examine o nome colorido deles. Se tiver Thorns, use dano mágico ou arcos.',
    drops: [
      { name: 'Affixed Gear', rarity: 'guaranteed', desc: 'Equipamentos com status absurdos (Vida Máxima, Dano Base).' },
      { name: 'Gem Dust', rarity: 'common' },
      { name: 'Tome of Scrapping', rarity: 'rare' }
    ]
  }
];

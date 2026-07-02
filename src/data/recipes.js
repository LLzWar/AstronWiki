export const itemImages = {};

export const recipes = {
  // ========================
  // BACKPACKS & UTILITIES
  // ========================
  'magnet_upgrade': {
    title: 'Magnet Upgrade',
    description: 'Puxa itens no chão ao seu redor para dentro da mochila.',
    mod: 'Sophisticated Backpacks',
    grid: [['Ferro', 'Ender Pearl', 'Ferro'], ['Ouro', 'Upgrade Base', 'Ouro'], ['Redstone', 'Ferro', 'Redstone']]
  },
  'stack_upgrade': {
    title: 'Stack Upgrade (Tier 1)',
    description: 'Multiplica a quantidade máxima de itens que cabem no mesmo slot da mochila.',
    mod: 'Sophisticated Backpacks',
    grid: [['Madeira', 'Madeira', 'Madeira'], ['Ferro', 'Upgrade Base', 'Ferro'], ['Madeira', 'Madeira', 'Madeira']]
  },
  'backpack_iron': {
    title: 'Iron Backpack',
    description: 'Mochila com mais slots de inventário e 2 slots de upgrade.',
    mod: 'Sophisticated Backpacks',
    grid: [['Ferro', 'Ferro', 'Ferro'], ['Ferro', 'Mochila de Couro', 'Ferro'], ['Ferro', 'Ferro', 'Ferro']]
  },
  'backpack_gold': {
    title: 'Gold Backpack',
    description: 'Mochila com mais slots de inventário e 3 slots de upgrade.',
    mod: 'Sophisticated Backpacks',
    grid: [['Ouro', 'Ouro', 'Ouro'], ['Ouro', 'Iron Backpack', 'Ouro'], ['Ouro', 'Ouro', 'Ouro']]
  },
  'backpack_diamond': {
    title: 'Diamond Backpack',
    description: 'Mochila enorme com 5 slots de upgrade.',
    mod: 'Sophisticated Backpacks',
    grid: [['Diamante', 'Diamante', 'Diamante'], ['Diamante', 'Gold Backpack', 'Diamante'], ['Diamante', 'Diamante', 'Diamante']]
  },

  // ========================
  // MAGIC & APOTHEOSIS
  // ========================
  'iron_spell_book': {
    title: 'Iron Spell Book',
    description: 'Seu primeiro grimório mágico para conjurar feitiços básicos.',
    mod: 'Iron\'s Spells',
    grid: [['Papel', 'Papel', 'Papel'], ['Ferro', 'Papel', 'Ferro'], ['Papel', 'Papel', 'Papel']]
  },
  'inscription_table': {
    title: 'Inscription Table',
    description: 'Mesa usada para gravar Scrolls dentro do seu Spell Book.',
    mod: 'Iron\'s Spells',
    grid: [['Livro', 'Pena', 'Tinta'], ['Madeira', 'Madeira', 'Madeira'], ['Madeira', 'Madeira', 'Madeira']]
  },
  'library_of_alexandria': {
    title: 'Library of Alexandria',
    description: 'Armazena e permite extrair encantamentos de níveis máximos.',
    mod: 'Apotheosis',
    grid: [['Infused Hell', 'Sea Lantern', 'Infused Hell'], ['Tome of Scrapping', 'Ench. Library', 'Tome of Scrapping'], ['Infused Hell', 'Sea Lantern', 'Infused Hell']]
  },
  'reforging_table': {
    title: 'Reforging Table',
    description: 'Re-rola os atributos mágicos dos seus equipamentos Apoteóticos.',
    mod: 'Apotheosis',
    grid: [['Netherite Ingot', 'Gem Dust', 'Netherite Ingot'], ['Epic Material', 'Enchanting Table', 'Epic Material'], ['Obsidian', 'Obsidian', 'Obsidian']]
  },
  'salvaging_table': {
    title: 'Salvaging Table',
    description: 'Destrói equipamentos com Afixos para gerar materiais mágicos de raridade baseada no item.',
    mod: 'Apotheosis',
    grid: [['Copper Ingot', 'Copper Ingot', 'Copper Ingot'], ['Ferro', 'Gem Dust', 'Ferro'], ['Ferro', '', 'Ferro']]
  },

  // ========================
  // ENERGY & POWAH
  // ========================
  'thermo_generator': {
    title: 'Thermo Generator',
    description: 'Gera energia constante utilizando água e um bloco quente embaixo.',
    mod: 'Powah',
    grid: [['Dielectric', 'Dielectric', 'Dielectric'], ['Basic Cap', 'Thermoelectric', 'Basic Cap'], ['Ferro', 'Ferro', 'Ferro']]
  },
  'solar_panel_basic': {
    title: 'Solar Panel (Basic)',
    description: 'Geração passiva de energia usando a luz do sol.',
    mod: 'Powah',
    grid: [['Vidro', 'Vidro', 'Vidro'], ['Photoelectric Pane', 'Photoelectric Pane', 'Photoelectric Pane'], ['Dielectric', 'Basic Cap', 'Dielectric']]
  },
  'energizing_orb': {
    title: 'Energizing Orb',
    description: 'Núcleo central para injetar energia (FE) e criar itens divinos.',
    mod: 'Powah',
    grid: [['Vidro', 'Vidro', 'Vidro'], ['Vidro', 'Dielectric', 'Vidro'], ['Dielectric', 'Dielectric', 'Dielectric']]
  },
  'energizing_rod': {
    title: 'Energizing Rod',
    description: 'Transfere energia dos cabos para a Energizing Orb.',
    mod: 'Powah',
    grid: [['', 'Basic Cap', ''], ['Dielectric', 'Dielectric', 'Dielectric'], ['', 'Basic Cap', '']]
  },
  'nitro_crystal': {
    title: 'Nitro Crystal',
    description: 'Cristal supremo do Powah. Feito no Energizing Orb injetando 20 Milhões de FE.',
    mod: 'Powah',
    grid: [['', '', ''], ['', 'Energizing Orb', ''], ['Redstone Block', 'Nether Star', 'Blazing Crystal']]
  },

  // ========================
  // DRACONIC & LATE GAME
  // ========================
  'wyvern_core': {
    title: 'Wyvern Core',
    description: 'Núcleo dracônico avançado. Requer Injetores de Fusão.',
    mod: 'Draconic Evolution',
    grid: [['Draconium', 'Nether Star', 'Draconium'], ['Draconium', 'Diamante', 'Draconium'], ['Draconium', 'Nether Star', 'Draconium']]
  },
  'draconic_armor': {
    title: 'Draconic Armor',
    description: 'A armadura absoluta. Intercepta 100% de dano usando energia.',
    mod: 'Draconic Evolution',
    grid: [['', 'Awakened', ''], ['Core', 'Wyvern Armor', 'Core'], ['', 'Awakened', '']]
  },
  'morgan': {
    title: 'Morgan',
    description: 'Espada com dano infinito escalável. Feita jogando a Caliburn no Blood Circle.',
    mod: 'Mahou Tsukai',
    grid: [['', 'Caliburn', ''], ['Aldeão', 'Blood Circle', 'Aldeão'], ['', '', '']]
  },

  // ========================
  // APPLIED ENERGISTICS 2
  // ========================
  'energy_acceptor': {
    title: 'Energy Acceptor',
    description: 'Converte a energia (FE/RF) de outros mods para a rede AE2.',
    mod: 'Applied Energistics 2',
    grid: [['Ferro', 'Vidro', 'Ferro'], ['Vidro', 'Fluix Crystal', 'Vidro'], ['Ferro', 'Vidro', 'Ferro']]
  },
  'me_controller': {
    title: 'ME Controller',
    description: 'Cérebro da sua rede AE2. Fornece 32 Canais (Channels) por face.',
    mod: 'Applied Energistics 2',
    grid: [['Sky Stone', 'Sky Stone', 'Sky Stone'], ['Sky Stone', 'Eng. Processor', 'Sky Stone'], ['Sky Stone', 'Sky Stone', 'Sky Stone']]
  },
  'me_drive': {
    title: 'ME Drive',
    description: 'Guarda até 10 discos de armazenamento (Storage Cells).',
    mod: 'Applied Energistics 2',
    grid: [['Ferro', 'Eng. Processor', 'Ferro'], ['Cable', 'Cofre', 'Cable'], ['Ferro', 'Eng. Processor', 'Ferro']]
  },
  'crafting_terminal': {
    title: 'Crafting Terminal',
    description: 'Terminal que permite acessar a rede inteira e possui uma mesa de trabalho 3x3 embutida.',
    mod: 'Applied Energistics 2',
    grid: [['', '', ''], ['Terminal', 'Crafting Table', ''], ['', 'Calc. Processor', '']]
  },
  'pattern_provider': {
    title: 'ME Pattern Provider',
    description: 'Empurra itens para dentro de máquinas para criar Autocrafting.',
    mod: 'Applied Energistics 2',
    grid: [['Ferro', 'Blank Pattern', 'Ferro'], ['Cable', 'Logic Processor', 'Cable'], ['Ferro', 'Ferro', 'Ferro']]
  },
  'molecular_assembler': {
    title: 'Molecular Assembler',
    description: 'Realiza autocraftings normais (3x3) se tiver um Pattern Provider colado nela.',
    mod: 'Applied Energistics 2',
    grid: [['Ferro', 'Vidro', 'Ferro'], ['Annihilation Core', 'Crafting Table', 'Formation Core'], ['Ferro', 'Vidro', 'Ferro']]
  },
  'p2p_tunnel': {
    title: 'ME P2P Tunnel',
    description: 'Conecte túneis para passar até 1024 canais através de um único cabo denso.',
    mod: 'Applied Energistics 2',
    grid: [['', 'Ferro', ''], ['Ferro', 'Eng. Processor', 'Ferro'], ['Fluix Crystal', 'Fluix Crystal', 'Fluix Crystal']]
  },

  // ========================
  // CREATE
  // ========================
  'mechanical_mixer': {
    title: 'Mechanical Mixer',
    description: 'Mistura ingredientes numa Basin para fazer Latão e poções em massa.',
    mod: 'Create',
    grid: [['', 'Andesite Alloy', ''], ['Cogwheel', 'Cogwheel', ''], ['', 'Whisk', '']]
  },
  'mechanical_press': {
    title: 'Mechanical Press',
    description: 'Esmaga ingots e os transforma em placas de metal.',
    mod: 'Create',
    grid: [['', 'Andesite Alloy', ''], ['Cogwheel', 'Casing', ''], ['', 'Ferro', '']]
  },
  'crushing_wheel': {
    title: 'Crushing Wheel',
    description: 'Destrói minérios, dobrando a rentabilidade.',
    mod: 'Create',
    grid: [['Andesite', 'Andesite', 'Andesite'], ['Andesite', 'Brass Casing', 'Andesite'], ['Andesite', 'Andesite', 'Andesite']]
  },
  'deployer': {
    title: 'Deployer',
    description: 'Mão mecânica que clica com blocos, itens ou ataca mobs.',
    mod: 'Create',
    grid: [['Electron Tube', '', ''], ['Andesite Casing', '', ''], ['Brass Hand', '', '']]
  },
  'chain_signal': {
    title: 'Train Chain Signal',
    description: 'Sinal para cruzamentos de trem. Impede que o trem feche um cruzamento.',
    mod: 'Create',
    grid: [['', 'Brass Tube', ''], ['Placa de Latão', 'Placa de Latão', 'Placa de Latão'], ['', 'Electron Tube', '']]
  },

  // ========================
  // L'ENDER'S CATACLYSM EYES
  // ========================
  'eye_of_flame': {
    title: 'Eye of Flame',
    description: 'Olho usado para localizar a estrutura Burning Arena no Nether (Ignis).',
    mod: 'L\'Ender\'s Cataclysm',
    grid: [['Netherite Scrap', 'Blaze Powder', 'Netherite Scrap'], ['Soul Sand', 'Eye of Ender', 'Soul Sand'], ['Netherite Scrap', 'Blaze Powder', 'Netherite Scrap']]
  },
  'eye_of_monstrous': {
    title: 'Eye of Monstrous',
    description: 'Olho usado para localizar a estrutura Soul Blacksmith no Nether.',
    mod: 'L\'Ender\'s Cataclysm',
    grid: [['Wither Skeleton Skull', 'Nether Brick', 'Wither Skeleton Skull'], ['Magma Cream', 'Eye of Ender', 'Magma Cream'], ['Wither Skeleton Skull', 'Nether Brick', 'Wither Skeleton Skull']]
  },
  'eye_of_mech': {
    title: 'Eye of Mech',
    description: 'Olho usado para localizar a Ancient Factory no Overworld (Harbinger).',
    mod: 'L\'Ender\'s Cataclysm',
    grid: [['Redstone', 'Copper Ingot', 'Redstone'], ['Iron Ingot', 'Eye of Ender', 'Iron Ingot'], ['Redstone', 'Copper Ingot', 'Redstone']]
  },
  'eye_of_void': {
    title: 'Eye of Void',
    description: 'Olho usado para localizar a Ruined Citadel na dimensão The End.',
    mod: 'L\'Ender\'s Cataclysm',
    grid: [['Chorus Fruit', 'Purpur Block', 'Chorus Fruit'], ['Obsidian', 'Eye of Ender', 'Obsidian'], ['Chorus Fruit', 'Purpur Block', 'Chorus Fruit']]
  },
  'eye_of_abyss': {
    title: 'Eye of Abyss',
    description: 'Olho usado para localizar a Sunken City no fundo dos oceanos.',
    mod: 'L\'Ender\'s Cataclysm',
    grid: [['Prismarine Shard', 'Nautilus Shell', 'Prismarine Shard'], ['Heart of the Sea', 'Eye of Ender', 'Heart of the Sea'], ['Prismarine Shard', 'Nautilus Shell', 'Prismarine Shard']]
  },
  'eye_of_desert': {
    title: 'Eye of Desert',
    description: 'Olho usado para localizar a Cursed Pyramid nos desertos.',
    mod: 'L\'Ender\'s Cataclysm',
    grid: [['Sandstone', 'Emerald', 'Sandstone'], ['Gold Ingot', 'Eye of Ender', 'Gold Ingot'], ['Sandstone', 'Emerald', 'Sandstone']]
  },

  // ========================
  // ICE AND FIRE
  // ========================
  'dragon_forge_fire': {
    title: 'Fire Dragon Forge',
    description: 'A forja suprema que funciona apenas com a baforada de um Dragão de Fogo ancorado. Usada para fundir o aço dracônico.',
    mod: 'Ice and Fire: Dragons',
    grid: [['Fire Dragon Blood', 'Dragon Bone', 'Fire Dragon Blood'], ['Fire Dragon Scales', 'Block of Iron', 'Fire Dragon Scales'], ['Fire Dragon Blood', 'Dragon Bone', 'Fire Dragon Blood']]
  },
  'dragonbone_sword': {
    title: 'Dragonbone Sword',
    description: 'Espada bruta feita inteiramente de ossos de dragão. Dano base absurdo.',
    mod: 'Ice and Fire: Dragons',
    grid: [['', 'Dragon Bone', ''], ['', 'Dragon Bone', ''], ['', 'Witherbone', '']]
  },
  'earplugs': {
    title: 'Earplugs',
    description: 'Impedem que a canção mística das Sirens te controle.',
    mod: 'Ice and Fire: Dragons',
    grid: [['', '', ''], ['Wood Planks', '', 'Wood Planks'], ['', '', '']]
  },

  // ========================
  // MODERN INDUSTRIALIZATION
  // ========================
  'bronze_furnace': {
    title: 'Bronze Furnace',
    description: 'A base da revolução industrial a vapor. Queima carvão ou madeira.',
    mod: 'Modern Industrialization',
    grid: [['Bronze Plate', 'Bronze Plate', 'Bronze Plate'], ['Bronze Plate', 'Furnace', 'Bronze Plate'], ['Bronze Plate', 'Bronze Plate', 'Bronze Plate']]
  },
  'steel_compressor': {
    title: 'Steel Compressor',
    description: 'Esmaga metais sob pressão para formar placas avançadas de aço.',
    mod: 'Modern Industrialization',
    grid: [['Steel Plate', 'Piston', 'Steel Plate'], ['Steel Plate', 'Machine Casing', 'Steel Plate'], ['Steel Plate', 'Steel Plate', 'Steel Plate']]
  },
  'assembler': {
    title: 'Assembling Machine',
    description: 'Automatiza o crafting de peças industriais usando correias e engrenagens.',
    mod: 'Modern Industrialization',
    grid: [['Steel Plate', 'Robot Arm', 'Steel Plate'], ['Conveyor', 'Machine Casing', 'Conveyor'], ['Steel Plate', 'Circuit', 'Steel Plate']]
  },

  // ========================
  // SILENT GEAR
  // ========================
  'starlight_charger': {
    title: 'Starlight Charger',
    description: 'Mesa exposta ao céu noturno para infundir Crimson Steel e Azure Electrum.',
    mod: 'Silent Gear',
    grid: [['Starlight Dust', 'Starlight Dust', 'Starlight Dust'], ['Silver Ingot', 'Block of Lapis', 'Silver Ingot'], ['Ferro', 'Ferro', 'Ferro']]
  },
  'material_grader': {
    title: 'Material Grader',
    description: 'Avalia materiais brutos com pó de glowstone para conceder Status MAX (+40% atributos).',
    mod: 'Silent Gear',
    grid: [['Ferro', 'Glowstone Dust', 'Ferro'], ['Papel', 'Madeira', 'Papel'], ['Madeira', 'Madeira', 'Madeira']]
  },
  'blueprint_paper': {
    title: 'Blueprint Paper',
    description: 'Usado para desenhar os moldes (Pickaxe, Sword, Armor) do Silent Gear.',
    mod: 'Silent Gear',
    grid: [['', '', ''], ['Lapis Lazuli', 'Papel', ''], ['', '', '']]
  }
};

export const itemImages = {
  'Ferro': '/assets/iron_ingot.png',
  'Redstone': '/assets/redstone.png',
  'Madeira': '/assets/wood.png',
  'Diamante': '/assets/diamond.png',
  'Livro': '/assets/book.png',
  'Pena': '/assets/feather.png',
  'Tinta': '/assets/ink.png',
  'Mochila': '/assets/backpack.png',
  'Magnet Upgrade': '/assets/magnet_upgrade.png',
  'Iron Spell Book': '/assets/iron_spell_book.png',
  'Inscription Table': '/assets/inscription_table.png',
  'Wyvern Core': '/assets/wyvern_core.png',
  'Draconic Armor': '/assets/draconic_armor.png',
  'Thermo Generator': '/assets/thermo_generator.png',
  'Blood Circle': '/assets/blood_circle.png',
  'Ouro': '/assets/gold_ingot.png',
  'Ender Pearl': '/assets/ender_pearl.png',
  'Upgrade Base': '/assets/upgrade_base.png',
  'Papel': '/assets/paper.png',
  'Vidro': '/assets/glass.png',
  'Aldeão': '/assets/emerald.png', 
  'Nether Star': '/assets/nether_star.png',
  'Dielectric': '/assets/dielectric_paste.png',
  'Basic Cap': '/assets/capacitor_basic.png',
  'Thermoelectric': '/assets/thermoelectric_plate.png',
  'Energizing Orb': '/assets/energizing_orb.png',
  'Draconium': '/assets/draconium_ingot.png',
  'Awakened': '/assets/draconium_ingot.png', 
  'Core': '/assets/wyvern_core.png', 
  'Wyvern Armor': '/assets/wyvern_chestpiece.png',
  'Caliburn': '/assets/caliburn.png',
  'Fluix Crystal': '/assets/fluix_crystal.png',
  'Eng. Processor': '/assets/engineering_processor.png',
  'Logic Processor': '/assets/logic_processor.png',
  'Cable': '/assets/fluix_crystal.png', 
  'Dense Cable': '/assets/fluix_crystal.png', 
  'Cofre': '/assets/wood.png', 
  'Andesite Alloy': '/assets/andesite_alloy.png',
  'Cogwheel': '/assets/cogwheel.png',
  'Whisk': '/assets/whisk.png',
  'Brass Tube': '/assets/electron_tube.png', 
  'Placa de Latão': '/assets/brass_sheet.png',
  'Electron Tube': '/assets/electron_tube.png',
  'Infused Hell': '/assets/wood.png', 
  'Sea Lantern': '/assets/sea_lantern.png',
  'Tome of Scrapping': '/assets/book.png', 
  'Ench. Library': '/assets/book.png', 
  'Starlight Dust': '/assets/glowstone_dust.png', 
  'Silver Ingot': '/assets/iron_ingot.png', 
  'Block of Lapis': '/assets/lapis_block.png',
  'Glowstone Dust': '/assets/glowstone_dust.png',
};


export const recipes = {
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
  'thermo_generator': {
    title: 'Thermo Generator',
    description: 'Gera energia constante utilizando água e um bloco quente embaixo.',
    mod: 'Powah',
    grid: [['Dielectric', 'Dielectric', 'Dielectric'], ['Basic Cap', 'Thermoelectric', 'Basic Cap'], ['Ferro', 'Ferro', 'Ferro']]
  },
  'nitro_crystal': {
    title: 'Nitro Crystal',
    description: 'Cristal supremo do Powah. Feito no Energizing Orb injetando 20 Milhões de FE.',
    mod: 'Powah',
    grid: [['', '', ''], ['', 'Energizing Orb', ''], ['Redstone', 'Nether Star', 'Redstone (Drop/Injetar)']]
  },
  'wyvern_core': {
    title: 'Wyvern Core',
    description: 'Núcleo dracônico avançado. Requer Injetores de Fusão (Fusion Crafting).',
    mod: 'Draconic Evolution',
    grid: [['Draconium', 'Nether Star', 'Draconium'], ['Draconium', 'Diamante', 'Draconium'], ['Draconium', 'Nether Star', 'Draconium']]
  },
  'draconic_armor': {
    title: 'Draconic Armor',
    description: 'A armadura absoluta. Intercepta 100% de dano usando energia. Feita nos Fusion Injectors.',
    mod: 'Draconic Evolution',
    grid: [['', 'Awakened', ''], ['Core', 'Wyvern Armor', 'Core'], ['', 'Awakened', '']]
  },
  'morgan': {
    title: 'Morgan (Corrupted Sword)',
    description: 'Espada com dano infinito escalável. Feita jogando a Caliburn no Blood Circle e sacrificando aldeões.',
    mod: 'Mahou Tsukai',
    grid: [['', 'Caliburn', ''], ['Aldeão', 'Blood Circle', 'Aldeão'], ['', '', '']]
  },
  'energy_acceptor': {
    title: 'Energy Acceptor',
    description: 'Converte a energia (FE/RF) de outros mods para a rede AE2.',
    mod: 'Applied Energistics 2',
    grid: [['Ferro', 'Vidro', 'Ferro'], ['Vidro', 'Fluix Crystal', 'Vidro'], ['Ferro', 'Vidro', 'Ferro']]
  },
  'me_drive': {
    title: 'ME Drive',
    description: 'Guarda até 10 discos de armazenamento do AE2.',
    mod: 'Applied Energistics 2',
    grid: [['Ferro', 'Eng. Processor', 'Ferro'], ['Cable', 'Cofre', 'Cable'], ['Ferro', 'Eng. Processor', 'Ferro']]
  },
  'p2p_tunnel': {
    title: 'ME P2P Tunnel',
    description: 'Conecte túneis para passar até 1024 canais através de um único cabo denso.',
    mod: 'Applied Energistics 2',
    grid: [['', 'Ferro', ''], ['Ferro', 'Eng. Processor', 'Ferro'], ['Fluix Crystal', 'Fluix Crystal', 'Fluix Crystal']]
  },
  'quantum_ring': {
    title: 'ME Quantum Ring',
    description: 'São necessários 8 destes em volta de uma Link Chamber para formar a ponte quântica interdimensional.',
    mod: 'Applied Energistics 2',
    grid: [['Ferro', 'Logic Processor', 'Ferro'], ['Logic Processor', 'Dense Cable', 'Logic Processor'], ['Ferro', 'Logic Processor', 'Ferro']]
  },
  'mechanical_mixer': {
    title: 'Mechanical Mixer',
    description: 'Usado acima de uma Basin (Bacia) aquecida para fazer ligas de Latão (Brass).',
    mod: 'Create',
    grid: [['', 'Andesite Alloy', ''], ['Cogwheel', 'Cogwheel', ''], ['', 'Whisk', '']]
  },
  'chain_signal': {
    title: 'Train Chain Signal',
    description: 'Sinal para cruzamentos de trem. Impede que o trem feche um cruzamento se a saída estiver bloqueada.',
    mod: 'Create',
    grid: [['', 'Brass Tube', ''], ['Placa de Latão', 'Placa de Latão', 'Placa de Latão'], ['', 'Electron Tube', '']]
  },
  'library_of_alexandria': {
    title: 'Library of Alexandria',
    description: 'A evolução da biblioteca padrão. Armazena e permite extrair encantamentos de níveis máximos combinados.',
    mod: 'Apotheosis',
    grid: [['Infused Hell', 'Sea Lantern', 'Infused Hell'], ['Tome of Scrapping', 'Ench. Library', 'Tome of Scrapping'], ['Infused Hell', 'Sea Lantern', 'Infused Hell']]
  },
  'starlight_charger': {
    title: 'Starlight Charger',
    description: 'Mesa exposta ao céu noturno para infundir Crimson Steel e Azure Electrum.',
    mod: 'Silent Gear',
    grid: [['Starlight Dust', 'Starlight Dust', 'Starlight Dust'], ['Silver Ingot', 'Block of Lapis', 'Silver Ingot'], ['Ferro', 'Ferro', 'Ferro']]
  },
  'material_grader': {
    title: 'Material Grader',
    description: 'Avalia materiais brutos com pó de glowstone para conceder Status "MAX" (+40% atributos).',
    mod: 'Silent Gear',
    grid: [['Ferro', 'Glowstone Dust', 'Ferro'], ['Papel', 'Madeira', 'Papel'], ['Madeira', 'Madeira', 'Madeira']]
  }
};

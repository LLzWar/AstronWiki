import { 
  Backpack, Sparkles, Factory, Crown, Shield, Zap, Skull, Gem, 
  BookOpen, Map, Hammer, Flame, Droplet, Box, Star, Database, Settings, Crosshair, Tent, Sword, Activity, Cpu, Wind, Moon, Sun, Anchor, Target, Battery, Compass, Layers, Zap as ZapIcon, Key
} from 'lucide-react';

export const WARLORD_DATA = {
  early: {
    id: 'early',
    title: "Fase 1: Sobrevivência & Sangue",
    subtitle: "O Início da Carnificina",
    desc: "A fraqueza não é tolerada. Estabeleça sua base, garanta suprimentos e comece a escalar o seu poder agressivamente.",
    gradient: "linear-gradient(135deg, rgba(35, 134, 54, 0.15) 0%, rgba(30, 30, 30, 0.6) 100%)",
    accent: "#2ea043",
    icon: Backpack,
    subphases: [
      {
        id: "early_dayone",
        title: "A Sobrevivência",
        quests: [
          {
            id: "e_dayone_1",
            icon: Target,
            title: "Reconhecimento do Terreno",
            desc: "Evite planícies abertas. Monstros com atributos Apothic irão destruí-lo no primeiro dia.",
            tasks: [
              "Localize uma vila ou escave um abrigo fortificado na rocha antes do anoitecer.",
              "Estabeleça um perímetro iluminado. Tochas são essenciais, use carvão ou forje Charcoal.",
              "Construa uma cama. O respawn point é sua única garantia contra a perda total."
            ]
          },
          {
            id: "e_dayone_2",
            icon: Droplet,
            title: "Sustento Tático (Spice of Life)",
            desc: "Comer bife assado para sempre é um erro fatal. Diversidade alimentar aumenta sua Vida Máxima permanentemente.",
            tasks: [
              "Crie uma Cooking Pot do Farmer's Delight e posicione sobre uma fogueira ou fogão.",
              "Cultive tomates, repolhos e cebolas. Abandone o cultivo massivo apenas de trigo.",
              "Prepare ensopados complexos para ganhar os primeiros corações extras do Spice of Life."
            ]
          },
          {
            id: "e_dayone_3",
            icon: Tent,
            title: "A Base de Operações",
            desc: "Sua base precisará de espaço para expansão industrial e mágica simultânea.",
            tasks: [
              "Nivele uma área de pelo menos 3 chunks (48x48 blocos).",
              "Separe uma ala com teto alto para futuras máquinas do Create (min 7 blocos de altura).",
              "Estabeleça uma zona segura subterrânea para rituais mágicos instáveis."
            ]
          },
          {
            id: "e_dayone_4",
            icon: Map,
            title: "Waystones & Mobilidade",
            desc: "Andar a pé é para camponeses. O Warlord usa as linhas leys do mundo.",
            tasks: [
              "Encontre e ative sua primeira Waystone em uma vila.",
              "Acumule XP para forjar uma Warp Scroll para emergências.",
              "Traga uma Waystone com Silk Touch ou crie uma para sua base principal."
            ]
          }
        ]
      },
      {
        id: "early_tools",
        title: "Forjaria Inicial",
        quests: [
          {
            id: "e_tools_1",
            icon: Hammer,
            title: "A Morte das Ferramentas Vanilla",
            desc: "No Astron City, usar uma picareta de diamante vanilla é desperdício de recursos.",
            tasks: [
              "Crie Blueprints (Moldes) de Picareta e Espada usando papel e gravetos.",
              "Forje as ferramentas no Silent Gear usando Ferro e Madeira de alta qualidade.",
              "Crie Repair Kits e ande sempre com pelo menos dois no inventário."
            ]
          },
          {
            id: "e_tools_2",
            icon: Flame,
            title: "O Aço Carmesim (Crimson Iron)",
            desc: "A transição vital do Ferro para o tier avançado exige incursões perigosas.",
            tasks: [
              "Encontre veios de Crimson Iron no Nether.",
              "Utilize uma forja do Silent Gear para combinar Crimson Iron com materiais aglutinantes.",
              "Forje a Crimson Sword, sua primeira arma com capacidade passiva de alto dano."
            ]
          },
          {
            id: "e_tools_3",
            icon: Pickaxe,
            title: "Upgrades Táticos",
            desc: "Ferramentas do Silent Gear evoluem com base no material de Coating.",
            tasks: [
              "Aplique um Diamond Tip Upgrade na sua picareta para ganhar tier de mineração sem usar diamantes no núcleo.",
              "Use Lápis Lazuli nas partes de binding para aumentar a sorte e durabilidade passiva.",
              "Aplique Redstone para velocidade explosiva de mineração."
            ]
          },
          {
            id: "e_tools_4",
            icon: Shield,
            title: "Armadura de Combate Leve",
            desc: "Armaduras vanilla de ferro não te salvarão de aranhas envenenadas apothic.",
            tasks: [
              "Forje um set de armadura inicial pelo Silent Gear (Ex: Armadura de Lã/Ferro mista).",
              "Integre painéis de reforço no peitoral para aumentar o valor de Armor Toughness.",
              "Use poções de resistência encontradas no loot até dominar magias de cura."
            ]
          }
        ]
      },
      {
        id: "early_inventory",
        title: "Gestão do Caos",
        quests: [
          {
            id: "e_inv_1",
            icon: Backpack,
            title: "Sophisticated Backpacks",
            desc: "O volume de loot de masmorras destruirá sua expedição em 5 minutos sem uma mochila.",
            tasks: [
              "Faça a Mochila de Couro Básica.",
              "Realize o upgrade imediato para a Mochila de Ferro para dobrar as linhas do inventário.",
              "Crie um atalho de teclado para abrir a mochila sem colocá-la no chão."
            ]
          },
          {
            id: "e_inv_2",
            icon: ZapIcon,
            title: "Automação de Pilhagem",
            desc: "Pare de clicar nos itens no chão. O Warlord automatiza sua própria coleta.",
            tasks: [
              { text: "Crie e instale um Magnet Upgrade na mochila.", recipe: "magnet_upgrade" },
              "Configure o filtro do Magnet Upgrade para IGNORAR pedras e terras se for minerar focado.",
              "Instale um Pickup Upgrade para jogar o loot filtrado direto para a mochila."
            ]
          },
          {
            id: "e_inv_3",
            icon: Layers,
            title: "Compressão de Carga",
            desc: "Minérios brutos e blocos de construção gastam slots preciosos.",
            tasks: [
              "Crie e instale um Stack Upgrade de Tier 1 para permitir packs de 256 itens.",
              "Instale um Compacting Upgrade para comprimir redstone, lápis e carvão em blocos automaticamente.",
              "Evolua sua mochila para Ouro assim que as primeiras jazidas de ouro forem purificadas."
            ]
          },
          {
            id: "e_inv_4",
            icon: Box,
            title: "Armazenamento Físico",
            desc: "Baús de madeira são patéticos para a fase de crescimento.",
            tasks: [
              "Adote Storage Drawers ou baús expandidos (Iron Chests) para itens massivos.",
              "Crie um Drawer Controller centralizado na sua parede de minérios.",
              "Faça Upgrades de Void para os Drawers de Cobblestone e Terra para evitar o colapso do sistema."
            ]
          }
        ]
      },
      {
        id: "early_magic_prep",
        title: "O Despertar Oculto",
        quests: [
          {
            id: "e_mag_1",
            icon: BookOpen,
            title: "Pesquisa Arcana",
            desc: "A magia não exige fábricas, apenas conhecimento e sacrifício.",
            tasks: [
              "Construa a Inscription Table do Iron's Spells.",
              "Colete Ink (Tinta) de lulas e Papel em quantidade massiva.",
              "Construa o seu primeiro Grimório de Madeira (Evoker/Apprentice Spellbook)."
            ]
          },
          {
            id: "e_mag_2",
            icon: Sparkles,
            title: "Feitiços de Utilidade",
            desc: "Seu Mana é um recurso renovável. A vida, não.",
            tasks: [
              "Traduza e transcreva um pergaminho de Cura (Heal) de nível Básico.",
              "Equipe o feitiço e cure-se entre combates sem gastar comida (Saturação).",
              "Procure feitiços de mobilidade (ex: Blink ou Levitation) em baús de dungeons."
            ]
          },
          {
            id: "e_mag_3",
            icon: Gem,
            title: "Sangue e Gelo",
            desc: "O combate mágico early game pode salvar sua espada de quebrar.",
            tasks: [
              "Transcreva feitiços como Blood Needles para dano focado.",
              "Encontre pergaminhos de Frost Step para congelar inimigos em volta de você em emergências.",
              "Mantenha um set de roupões de mago na mochila para escalar mana regen durante boss fights."
            ]
          },
          {
            id: "e_mag_4",
            icon: Skull,
            title: "Masmorras Superficiais",
            desc: "As masmorras modded na superfície contêm o loot arcano necessário para evoluir.",
            tasks: [
              "Invada torres de feiticeiros illagers para roubar estantes de livros arcanos.",
              "Guarde todos os pergaminhos repetidos. Eles serão derretidos para Ink raro mais tarde.",
              "Capture os cristais de mana encontrados no subterrâneo das vilas mágicas."
            ]
          }
        ]
      },
      {
        id: "early_tech_prep",
        title: "Fundações Mecânicas",
        quests: [
          {
            id: "e_tec_1",
            icon: Settings,
            title: "Cobre e Zinco",
            desc: "A era de ferro e madeira está terminando. A indústria bate à porta.",
            tasks: [
              "Mapeie uma ravina ou cave no Y=40 para minerar extensos veios de Cobre e Zinco.",
              "Guarde o Zinco (Zinc) meticulosamente, ele será o gargalo da Era do Create.",
              "Faça blocos de cobre para as futuras caldeiras de fluido."
            ]
          },
          {
            id: "e_tec_2",
            icon: Hammer,
            title: "Andesite Alloy",
            desc: "A liga metálica primordial da revolução industrial.",
            tasks: [
              "Crie uma farm básica de Cobblestone ou minere Andesito em massa.",
              "Misture Andesito com Pepitas de Ferro (ou Zinco) para criar Andesite Alloys.",
              "Faça os primeiros Shafts (Eixos) e Cogwheels (Engrenagens)."
            ]
          },
          {
            id: "e_tec_3",
            icon: Factory,
            title: "Planejamento Espacial",
            desc: "O Create exige engenharia tridimensional e muito espaço.",
            tasks: [
              "Construa as paredes da sua fábrica, deixando espaço no chão para Water Wheels.",
              "Planeje a passagem de eixos pelo teto para levar energia mecânica a múltiplas máquinas.",
              "Colete muita madeira (Stripped Logs) para as Casings das máquinas iniciais."
            ]
          },
          {
            id: "e_tec_4",
            icon: Wind,
            title: "Vento vs Água",
            desc: "Definindo sua primeira matriz energética.",
            tasks: [
              "Decida entre moinhos de vento (Windmills) ou Rodas d'água (Water Wheels).",
              "As Rodas d'água são mais confiáveis no early game. Faça pelo menos 3 em série.",
              "Certifique-se de que a água flui corretamente pelas pás (para o sentido de maior velocidade e capacidade rotacional)."
            ]
          }
        ]
      }
    ]
  },
  tech: {
    id: 'tech',
    title: "Fase 2: Despertar de Poder",
    subtitle: "A Sinergia Entre Engrenagem e Magia",
    desc: "A brutalidade mecânica do Create e o misticismo do Apotheosis se encontram. Transforme sua base em uma usina hiper-eficiente.",
    gradient: "linear-gradient(135deg, rgba(230, 119, 0, 0.15) 0%, rgba(138, 43, 226, 0.1) 50%, rgba(30, 30, 30, 0.6) 100%)",
    accent: "#e67700",
    icon: Battery,
    subphases: [
      {
        id: "tech_create",
        title: "A Engrenagem Perfeita",
        quests: [
          {
            id: "t_create_1",
            icon: Settings,
            title: "A Prensa e a Moagem",
            desc: "Sua prioridade máxima: nunca mais queimar minério bruto diretamente na fornalha.",
            tasks: [
              "Construa uma Mechanical Press. Automatize a produção de placas de ferro e cobre.",
              "Instale um conjunto de Crushing Wheels girando em sentidos opostos.",
              "Jogue seus minérios brutos nelas para triplicar a produção de pó/pepitas."
            ]
          },
          {
            id: "t_create_2",
            icon: Flame,
            title: "O Domínio do Latão (Brass)",
            desc: "O Latão (Brass) destrava os componentes inteligentes e robóticos do Create.",
            tasks: [
              "Capture um Blaze no Nether usando uma gaiola (Blaze Burner).",
              "Construa um Mechanical Mixer e um Basin sobre o Blaze Burner.",
              "Alimente o Blaze Burner com carvão, gire o Mixer e misture Cobre com Zinco para criar Brass."
            ]
          },
          {
            id: "t_create_3",
            icon: Box,
            title: "Lógica de Funis de Latão",
            desc: "Brass Funnels permitem filtrar com exatidão matemática o que entra e sai.",
            tasks: [
              "Fabrique Brass Funnels e instale-os nas saídas das suas máquinas.",
              "Configure filtros para permitir a saída apenas de itens processados, bloqueando os brutos na máquina.",
              "Ajuste a quantidade exata (Ex: puxar de 64 em 64 itens) para maximizar o throughput da esteira."
            ]
          },
          {
            id: "t_create_4",
            icon: Target,
            title: "Lavagem Magnética (Washing)",
            desc: "O pó resultante do esmagamento ainda guarda minerais ocultos.",
            tasks: [
              "Configure Encased Fans soprando através da água sobre uma esteira (Mechanical Belt).",
              "Faça os pós moídos de minério de Ferro passarem pela água para obter pepitas de Redstone bônus.",
              "Acelere as esteiras subindo os RPMs usando Gearboxes e Large Cogwheels para evitar engarrafamentos."
            ]
          }
        ]
      },
      {
        id: "tech_magic_apoth",
        title: "Magia Obscura (Apotheosis)",
        quests: [
          {
            id: "tm_apoth_1",
            icon: Star,
            title: "A Mesa Enfraquecida",
            desc: "A Enchanting Table vanilla com 15 estantes é inútil. Evolua o altar.",
            tasks: [
              "Crie a Hellshelf (Estante do Inferno) usando Nether Bricks, Blaze Rods e Livros.",
              "Coloque as Hellshelves ao redor da mesa de encantamentos para aumentar o atributo Eterna (limite de nível).",
              "Monitore o Quanta (instabilidade). Muito alto fará os encantos falharem perigosamente."
            ]
          },
          {
            id: "tm_apoth_2",
            icon: Gem,
            title: "Apothic Bosses & Gems",
            desc: "Os monstros reluzentes pelo mundo dropam muito mais que equipamentos quebrados.",
            tasks: [
              "Cace chefes Apothic gerados pelo mapa que possuem raios celestiais marcando sua posição.",
              "Colete as Apothic Gems (Gemas raras) e faça o Reforjamento na mesa de Gems.",
              "Engaste Gemas Focadas em Armor Toughness na sua armadura e Dano por Fogo na espada."
            ]
          },
          {
            id: "tm_apoth_3",
            icon: Sword,
            title: "A Espada do Sangue",
            desc: "Com o Eterna elevado a 30+, busque encantos focados em sobrevivência brutal.",
            tasks: [
              "Use Tomes Específicos para extrair encantos de Lifesteal (Roubo de Vida) ou Scavenger.",
              "Foque em Sharpness VII e Lifesteal III na sua melhor arma do Silent Gear.",
              "Lembre-se: com muito roubo de vida, você pode ignorar a fome enquanto lutar ativamente."
            ]
          },
          {
            id: "tm_apoth_4",
            icon: BookOpen,
            title: "Library of Alexandria",
            desc: "Seus baús estão lotados de livros mágicos confusos.",
            tasks: [
              { text: "Crie a Library of Alexandria (Apotheosis).", recipe: "library_of_alexandria" },
              "Insira centenas de livros mágicos dentro dela.",
              "A biblioteca extrairá os pontos de encantamento, permitindo que você 'compre' encantos específicos no nível máximo sob demanda."
            ]
          }
        ]
      },
      {
        id: "tech_power",
        title: "A Fagulha Elétrica (Powah)",
        quests: [
          {
            id: "t_powah_1",
            icon: Zap,
            title: "Thermo Generators",
            desc: "Mude da Força Cinética (RPM) para a Força Elétrica (FE/RF) de forma passiva e limpa.",
            tasks: [
              "Construa a base do Powah com Dielectric Paste massiva (misture Argila e Carvão).",
              "Produza Thermo Generators tier Starter ou Basic.",
              "Coloque um bloco de Lava ou Blazing Crystal Block embaixo do gerador e injete água pelas laterais com tubos."
            ]
          },
          {
            id: "t_powah_2",
            icon: Battery,
            title: "Energizando Crystals",
            desc: "Para chegar nos tiers Hardened, Blazing e Niotic, você precisa do Energizing Orb.",
            tasks: [
              "Construa o Energizing Orb cercado por Energizing Rods.",
              "Ligue os Rods à sua rede elétrica do Thermo Generator.",
              "Coloque ferro e ouro no Orb e observe o laser derretê-los em Energized Steel."
            ]
          },
          {
            id: "t_powah_3",
            icon: Cpu,
            title: "O Tier Niotic",
            desc: "Diamantes são necessários para suportar os lasers mais quentes do Powah.",
            tasks: [
              "Insira Diamantes no Energizing Orb para criar Niotic Crystals.",
              "Faça upgrade nos seus Thermo Generators e Energy Cables para o tier Niotic.",
              "A produção de energia passará de reles 50 FE/t para formidáveis 800+ FE/t por máquina."
            ]
          },
          {
            id: "t_powah_4",
            icon: Anchor,
            title: "Carregamento Wireless",
            desc: "O Warlord nunca fica sem bateria nas suas ferramentas enquanto estiver no servidor.",
            tasks: [
              "Crie o Player Transmitter do Powah e vincule-o ao seu Binding Card.",
              "Conecte o Transmitter a uma matriz de bateria massiva (Energy Cell Niotic ou superior).",
              "Sua jetpack, espadas e varinhas elétricas carregarão sozinhas em tempo real pelo mundo inteiro."
            ]
          }
        ]
      },
      {
        id: "tech_magic_irons",
        title: "Arcanismo Ofensivo",
        quests: [
          {
            id: "tm_irons_1",
            icon: Skull,
            title: "Spellbooks de Tier Alto",
            desc: "A magia inicial curava. Agora, ela deve aniquilar.",
            tasks: [
              "Colete Cinder Essences no Nether matando piromantes e Wither Skeletons.",
              "Forje o Pyromancer Spellbook ou o Necromancer Tome para acessar slots de magias Épicas.",
              "Busque Cooldown Reduction nas suas roupas mágicas, essencial para DPS contínuo."
            ]
          },
          {
            id: "tm_irons_2",
            icon: Flame,
            title: "Magia de Fogo Maximizada",
            desc: "O fogo escala muito bem contra exércitos illagers e bosses terrestres.",
            tasks: [
              "Transcreva o feitiço Fireball (Nível Máximo possível) e Flaming Strike.",
              "Faça armaduras focadas em Fire Power (Poder de Fogo).",
              "Use os feitiços em cadeia: Crie uma poça de fogo e detone-a com Impactos de longe."
            ]
          },
          {
            id: "tm_irons_3",
            icon: Crosshair,
            title: "Magias Cósmicas e Vazias",
            desc: "Para preparar sua invasão ao The End, canalize energias que ignoram blindagem.",
            tasks: [
              "Obtenha pergaminhos e tintas do Void e Echo.",
              "Ecipe o feitiço Black Hole para sugar múltiplos monstros para um centro de esmagamento.",
              "Empregue Starfall (Chuva Estelar) contra hordas em masmorras do Cataclysm."
            ]
          },
          {
            id: "tm_irons_4",
            icon: Shield,
            title: "Defesa Ativa Arcana",
            desc: "Você não precisa de uma couraça de diamante pesada se o inimigo não puder tocá-lo.",
            tasks: [
              "Adote o feitiço de Abyssal Shroud ou Frost Shield.",
              "Mantenha sempre ativa a aura mágica antes de invadir as Mega-Dungeons.",
              "Use magias de counter-spell para desarmar Evokers modificados e Lichs instantaneamente."
            ]
          }
        ]
      },
      {
        id: "tech_industry_mi",
        title: "Modern Industrialization",
        quests: [
          {
            id: "t_mi_1",
            icon: Factory,
            title: "O Fim da Caldeira Manual",
            desc: "O Modern Industrialization forçará você a compreender gestão de vapor e exaustão.",
            tasks: [
              "Faça seus primeiros Fornos de Tijolo (Bronze Boiler).",
              "Conecte tubulações de água fluida para manter a caldeira fria enquanto injeta carvão.",
              "Conecte os Steam Pipes (Tubos de Vapor) nas Maceradoras e Fornalhas industriais."
            ]
          },
          {
            id: "t_mi_2",
            icon: Cpu,
            title: "Ligas de Aço (Steel Era)",
            desc: "A transição do Bronze para o Aço é dolorosa mas recompensa com multiplicadores absurdos.",
            tasks: [
              "Crie fornos de coque (Coke Ovens) para transformar Carvão em Coke e Creosote Oil.",
              "Insira Coke no Alloy Smelter Industrial para misturar com Ferro quente, forjando Steel.",
              "Use o Aço massivamente para evoluir todos os cascos das máquinas (Steel Machine Casing)."
            ]
          },
          {
            id: "t_mi_3",
            icon: Settings,
            title: "Automatização de Montagem",
            desc: "Craftar placas e circuitos na mão com martelo deve acabar aqui.",
            tasks: [
              "Instale os Assemblers (Montadores Automáticos).",
              "Envie fios de cobre, placas redstone e pinos diretamente pelos tubos logísticos até os Assemblers.",
              "Produza Circuitos Eletrônicos em massa para abrir a porta para o AE2 digital."
            ]
          },
          {
            id: "t_mi_4",
            icon: Box,
            title: "Overclocking Elétrico",
            desc: "O vapor tem limites. A energia Diesel e Elétrica é o futuro industrial.",
            tasks: [
              "Abandone o Vapor (Steam) e conecte suas máquinas a LV (Low Voltage) e MV (Medium Voltage).",
              "Insira Overclocker Upgrades em suas Maceradoras para processar 16 itens por segundo.",
              "Lide com os sistemas de refrigeração e poluição gerados pelas refinarias."
            ]
          }
        ]
      }
    ]
  },
  magic: {
    id: 'magic',
    title: "Fase 3: A Singularidade",
    subtitle: "Consciência Digital e Arcanismo",
    desc: "Suas máquinas físicas já não importam tanto. O universo será domado através da digitalização da matéria (AE2) e manipulações arcanas perfeitas.",
    gradient: "linear-gradient(135deg, rgba(138, 43, 226, 0.15) 0%, rgba(0, 191, 255, 0.1) 50%, rgba(30, 30, 30, 0.6) 100%)",
    accent: "#8a2be2",
    icon: Database,
    subphases: [
      {
        id: "magic_ae2_base",
        title: "Matrix Digital (AE2)",
        quests: [
          {
            id: "m_ae_1",
            icon: Gem,
            title: "O Padrão Fluix",
            desc: "Inicie a manipulação quântica através dos meteoritos arruinados pelo mundo.",
            tasks: [
              "Use um compasso de meteorito para encontrar Inscriber Presses enterradas em obsidian.",
              "Cultive cristais de Certus Quartz e transforme-os em Fluix Crystals numa poça d'água.",
              "Configure Inscribers automatizados com cabos ou funis de Create para fazer placas (Processors) sem clique manual."
            ]
          },
          {
            id: "m_ae_2",
            icon: Database,
            title: "A Rede Primária",
            desc: "O Controlador do AE2 é o cérebro da sua base. Sem ele, a rede morre em 8 canais.",
            tasks: [
              "Fabrique o ME Controller, alimentado diretamente pelos seus reatores Niotic do Powah.",
              "Use Smart Cables para rastrear exatamente quantos canais de dados (Channels) cada linha consome.",
              "Instale as ME Drives e fabrique discos (Storage Cells) de 64k ou superiores."
            ]
          },
          {
            id: "m_ae_3",
            icon: Cpu,
            title: "O Crafting Terminal",
            desc: "A extinção final do Baú de Diamante.",
            tasks: [
              "Destrua TODOS os seus baús, Drawers desnecessários e mochilas fixas.",
              "Conecte Import Buses a todos os baús antigos para sugar o loot inteiro para a rede AE2.",
              "Construa o ME Crafting Terminal. Agora todo o inventário da base está centralizado num monitor de busca avançada."
            ]
          },
          {
            id: "m_ae_4",
            icon: Layers,
            title: "Subredes de Fluido e Energia",
            desc: "Misturar o fluxo de dados com líquidos causa colapsos de rede para o novato.",
            tasks: [
              "Crie uma Subrede Isolada usando Quartz Fiber conectando os cabos de energia (mas não dados).",
              "Utilize Fluid Storage Disks no sistema e Fluid Import Buses para armazenar lava, água e vapor digitalmente.",
              "Puxe os fluidos direto no Terminal sempre que for craftar."
            ]
          }
        ]
      },
      {
        id: "magic_ae2_p2p",
        title: "Redes Quânticas e P2P",
        quests: [
          {
            id: "m_p2p_1",
            icon: Target,
            title: "A Engenharia P2P",
            desc: "Passar cabos gigantescos pela base é horrendo e ineficiente. O Warlord usa portais quânticos de dados.",
            tasks: [
              { text: "Forje ME P2P Tunnels.", recipe: "p2p_tunnel" },
              "Coloque um P2P Tunnel colado no coração do ME Controller (Extraindo 32 canais de uma vez).",
              "Ligue um Memory Card para copiar a frequência (Shift+Click)."
            ]
          },
          {
            id: "m_p2p_2",
            icon: Compass,
            title: "O Salto Dimensional",
            desc: "O túnel P2P quebra o espaço físico dos cabos.",
            tasks: [
              "Leve apenas 1 cabo barato (fluix cable) por quilômetros de distância.",
              "No destino, coloque outro P2P Tunnel e aplique a frequência da central.",
              "Parabéns, este pequeno nó agora atua como se fosse o cabo Dense central, distribuindo 32 canais no outro lado da base."
            ]
          },
          {
            id: "m_p2p_3",
            icon: Box,
            title: "P2P para Tudo",
            desc: "AE2 não transporta apenas dados. Ele teletransporta qualquer coisa.",
            tasks: [
              "Crie Redstone P2P Tunnels, Energy P2P e Fluid P2P.",
              "Use os túneis para enviar Força Elétrica em quantidades milionárias usando o ME Cable.",
              "Integre as fornalhas industriais conectando a saída direta do P2P ao sistema."
            ]
          },
          {
            id: "m_p2p_4",
            icon: Key,
            title: "Acesso Remoto Mundial",
            desc: "Chegar na dungeon sem as flechas certas e voltar pra casa? Nunca mais.",
            tasks: [
              "Construa a Singularity Chamber, crie a Matter Condenser e gere Singularidades Quanticas.",
              "Jogue a Singularidade e Pó de Ender na explosão para obter pares conectados.",
              "Construa o ME Wireless Transmitter e carregue um Wireless Crafting Terminal. Acesse sua base infinita de qualquer dimensão."
            ]
          }
        ]
      },
      {
        id: "magic_apoth_max",
        title: "Perfeição Apótica",
        quests: [
          {
            id: "m_ap_1",
            icon: BookOpen,
            title: "Eterna 100",
            desc: "É hora de empurrar o encantamento além do limite humano.",
            tasks: [
              "Descarte as Hellshelves antigas e forje as infusões supremas como Endshelves, Draconic Shelves ou similares de alto escalão.",
              "Alinhe os totens mágicos e as prateleiras de forma que a Eterna chegue a níveis astronômicos (50 a 100+).",
              "Reduza o Quanta para valores exatos negativos usando Candelabros Mágicos para ter 100% de estabilidade e zero maldições."
            ]
          },
          {
            id: "m_ap_2",
            icon: Shield,
            title: "Infusão Mítica",
            desc: "Os equipamentos God-Tier requerem material celestial para serem reforjados.",
            tasks: [
              "Encontre e quebre equipamentos de raridade 'Mythic' para obter Mythic Material.",
              "Use o Reforging Table avançado para aplicar bônus permanentes (Aumento de % HP, Crítico Massivo, Imunidade ao Fogo).",
              "Não se contente até ter +40% de vida bônus só de atributos da armadura."
            ]
          },
          {
            id: "m_ap_3",
            icon: Flame,
            title: "Encantamentos Proibidos",
            desc: "Busque os feitiços que destroem a mecânica Vanilla.",
            tasks: [
              "Coloque Capturing na espada. Você terá chance de dropar um Spawn Egg real ao matar qualquer monstro (Geração de Spawners).",
              "Utilize Scavenger elevado para dobrar ou triplicar cabeças de wither, ender pearls e loot divino de bosses.",
              "Instale Life-Mending em conjunto com Mending normal. A arma usará sua vida ou XP, o que estiver disponível, sendo virtualmente inquebrável."
            ]
          },
          {
            id: "m_ap_4",
            icon: Sword,
            title: "Spawners Customizados",
            desc: "Destrua as fazendas convencionais. O Warlord hackeia spawners.",
            tasks: [
              "Obtenha um Spawner com o encantamento Silk Touch refinado.",
              "Altere as estatísticas do Spawner com Apotheosis: Adicione Sugar (Acelerar), Clocks (Reduzir Tempo), Ghast Tears (Aumentar Limite de Entidades).",
              "Adicione um Dragon Egg ou Nether Star ao Spawner para fazê-lo ignorar completamente as restrições de luz corporal e distância do jogador."
            ]
          }
        ]
      },
      {
        id: "magic_dimensions_mid",
        title: "Cruzadas Interdimensionais",
        quests: [
          {
            id: "m_dim_1",
            icon: Target,
            title: "O Nether Modificado",
            desc: "O Nether das profundezas é letal, cheio de bosses secundários e estruturas de chamas letais.",
            tasks: [
              "Prepare potes de Fire Resistance e use Gemas de Imunidade a Fogo.",
              "Invada castelos piglins fortificados em busca de ouro antigo e diagramas escondidos.",
              "Assassine o Netherite Monstrosity na Forja das Almas (Se o mod estiver presente) ou o Ignis Guardião inferior."
            ]
          },
          {
            id: "m_dim_2",
            icon: Compass,
            title: "The End: O Início do Fim",
            desc: "Sua primeira viagem ao Vazio servirá de preparação para os Deuses.",
            tasks: [
              "Mate o Ender Dragon vanilla. Ele é irrelevante frente ao que está por vir, considere-o um mini-boss.",
              "Cruze os portões das ilhas externas e comece a mineração massiva de Draconium subterrâneo.",
              "Evite encontros prolongados com Void Creepers e criaturas da obsidiana enquanto constrói portais seguros."
            ]
          },
          {
            id: "m_dim_3",
            icon: Map,
            title: "Dimensões Secundárias",
            desc: "Extraia poder cósmico de mods extras (como Twilight Forest, Blue Skies, etc).",
            tasks: [
              "Atravesse portais rúnicos para dimensões de gelo ou natureza mágica.",
              "Derrote os bosses em suas ordens estritas para quebrar os escudos de invulnerabilidade.",
              "Obtenha artefatos de controle temporal e varinhas de invocação únicas."
            ]
          },
          {
            id: "m_dim_4",
            icon: Crown,
            title: "Cidadelas de Ender",
            desc: "As estruturas massivas flutuantes nas ilhas do fim guardam os itens Catastróficos.",
            tasks: [
              "Saqueie as cidades do fim até obter múltiplas Elytras para sacríficos rituais (fusion crafting futuros).",
              "Roube armaduras de Shulker reforçadas e Shulker Shells infinitas.",
              "Capture Spawners de Enderman para criar a maior fonte de XP da base."
            ]
          }
        ]
      },
      {
        id: "magic_autocrafting",
        title: "A Onipotência do Crafting",
        quests: [
          {
            id: "m_auto_1",
            icon: Cpu,
            title: "Molecular Assemblers",
            desc: "O ápice do AE2. O sistema craftará qualquer coisa que você mandar enquanto você dorme.",
            tasks: [
              "Crie os Co-Processors e as Unidades de Armazenamento de Crafting (64k Crafting Storage).",
              "Posicione as Crafting Units numa torre super massiva ligada ao ME Controller.",
              "Use Interfaces ligadas a Molecular Assemblers preenchidos de Acceleration Cards para craftar itens mundanos instantaneamente."
            ]
          },
          {
            id: "m_auto_2",
            icon: Settings,
            title: "Padrões (Patterns) Complexos",
            desc: "Ensine o computador a fabricar reatores inteiros com um botão.",
            tasks: [
              "Use o Pattern Encoding Terminal para desenhar a receita de painéis solares, placas de circuito e até reatores do Powah.",
              "Insira os Blank Patterns na máquina e valide. Comande 1000 painéis e veja o sistema calcular os milhares de minérios requeridos.",
              "Abasteça o sistema e deixe o cálculo acontecer silenciosamente."
            ]
          },
          {
            id: "m_auto_3",
            icon: Factory,
            title: "Autocrafting de Fluido e Máquinas",
            desc: "O AE2 também controla o Create e o Modern Industrialization sozinhos.",
            tasks: [
              "Coloque um ME Interface no topo de uma bacia do Create (Basin com Mixer).",
              "Coloque um Processing Pattern: 'Ferro + Madeira -> Andesite Alloy'.",
              "Ao pedir Andesite, o AE2 jogará os itens no cinto, o Mixer processará e um Funil cuspirá de volta ao ME Interface para registrar a conclusão."
            ]
          },
          {
            id: "m_auto_4",
            icon: Zap,
            title: "Fábrica Invisível",
            desc: "Centralize tudo.",
            tasks: [
              "Mova as barulhentas fábricas de esteiras e lava para subníveis do mundo onde elas não baixem seu FPS.",
              "Ligue tudo usando uma fibra óptica de AE2 protegida e um P2P Tunnel de fluid/itens.",
              "No seu salão nobre de Warlord, apenas um monitor e terminal existirão. O resto estará oculto."
            ]
          }
        ]
      }
    ]
  },
  late: {
    id: 'late',
    title: "Fase 4: Imortalidade",
    subtitle: "A Ascensão aos Deuses",
    desc: "A tecnologia, a magia e os números normais já não têm sentido. Rompa a realidade com fusões de energia na casa dos bilhões e elimine as divindades do mundo.",
    gradient: "linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(220, 20, 60, 0.1) 50%, rgba(30, 30, 30, 0.6) 100%)",
    accent: "#d4af37",
    icon: Crown,
    subphases: [
      {
        id: "late_draconic_base",
        title: "O Dragão Adormecido",
        quests: [
          {
            id: "l_drac_1",
            icon: Shield,
            title: "Draconic Core e Fusão Básica",
            desc: "Para adentrar a imortalidade do Draconic Evolution, a forja básica não servirá.",
            tasks: [
              "Crie uma farm absoluta de estrelas do Wither, pois elas se tornarão ingredientes rotineiros.",
              "Construa a estrutura de Fusion Crafting com o Fusion Core e Basic Injectors ao redor.",
              "Alimente TODOS os injetores com a rede P2P de energia FE do Powah! Niotic/Spirited."
            ]
          },
          {
            id: "l_drac_2",
            icon: Battery,
            title: "Wyvern Tier",
            desc: "O tier intermediário Dracônico, projetado para absorção extrema.",
            tasks: [
              "Desperte o Draconium usando estrelas e diamantes na Fusão.",
              "Forje a armadura Wyvern e as ferramentas base (Espada/Picareta Wyvern).",
              "A armadura agora consome FE (Forge Energy) para negar danos diretos até o escudo quebrar."
            ]
          },
          {
            id: "l_drac_3",
            icon: Zap,
            title: "O Energy Core de Nível 3",
            desc: "Milhões de FE não são nada para a manutenção Dracônica.",
            tasks: [
              "Construa o Draconic Energy Core multi-bloco gigantesco.",
              "Acople pylons de vidro estabilizado. Mantenha-o num local visível e glorioso, como um sol artificial.",
              "Utilize reatores massivos ou milhares de painéis solares supremos para injetar bilhões de RF na esfera sem pausa."
            ]
          },
          {
            id: "l_drac_4",
            icon: Target,
            title: "O Awakened Draconium",
            desc: "O ritual que ressuscita o coração do Dragão e quebra o equilíbrio do jogo.",
            tasks: [
              "Construa o Altar de Ressurreição do Dragão e mate-o várias vezes com a Wyvern Sword para obter corações dragônicos em massa.",
              "Evolua os Injectors para Wyvern Tier e coloque Draconium, Dragon Hearts e Nether Stars na fusão.",
              "Veja o relâmpago divino aniquilar a arena e produzir os Awakened Draconium Ingots."
            ]
          }
        ]
      },
      {
        id: "late_draconic_armor",
        title: "Armaduras Imortais",
        quests: [
          {
            id: "l_armor_1",
            icon: Crown,
            title: "A Draconic Armor",
            desc: "Você não sofrerá mais dano de fontes normais, mágicas ou de fogo, contanto que tenha eletricidade.",
            tasks: [
              "Atualize os Injectors para Awakened Tier. Uma explosão falha aqui dizimará sua base. Tenha cuidado.",
              "Forje o Peitoral, Calças, Capacete e Botas da armadura Draconic.",
              "Voe em modo criativo impulsionado pelas botas permanentemente, superando a Elytra obsoleta."
            ]
          },
          {
            id: "l_armor_2",
            icon: Cpu,
            title: "Módulos de Upgrade (Draconic)",
            desc: "A armadura base é apenas a casca. Os módulos de escudo definem a imortalidade.",
            tasks: [
              "Forje Shield Capacity Modules e Shield Recovery Modules no nível máximo Dracônico.",
              "Abra o painel de armadura (tecla de atalho dedicada) e insira os módulos.",
              "Veja o seu escudo extra atingir a casa dos milhares de hitpoints, regenerando-se instantaneamente fora de combate."
            ]
          },
          {
            id: "l_armor_3",
            icon: Sword,
            title: "Staff of Power",
            desc: "Uma arma que destrói mundos inteiros e minera veios infinitos em segundos.",
            tasks: [
              "Use os núcleos mais raros (Chaotic/Awakened) para forjar o Cajado do Poder (Staff of Power).",
              "Acesse as configurações do Cajado (Shift+C/Right Click) e mude a área de quebra para absurdas 9x9 ou 11x11.",
              "Vaporize um pedaço do The End num único clique com dano destrutivo equivalente a uma bomba nuclear direcionada."
            ]
          },
          {
            id: "l_armor_4",
            icon: Anchor,
            title: "A Bateria Definitiva",
            desc: "O Capacitor Dracônico Wireless avançado deve estar vinculado ao seu corpo para recarregar o escudo infinitamente sob o fogo de chefes supremos."
          }
        ]
      },
      {
        id: "late_cataclysm_bosses",
        title: "Fúria Divina (Cataclysm)",
        quests: [
          {
            id: "l_cat_1",
            icon: Flame,
            title: "A Caçada a Ignis",
            desc: "A mais ardente e letal masmorra. O vulcão devora mortais.",
            tasks: [
              "Encontre a Burning Arena no Nether.",
              { text: "Equipe sua armadura Dracônica, mas prepare-se. Ignis aplica debuffs que atravessam defesas mal otimizadas. Leve Nitro Crystals do Powah para resistir ao calor extremo.", recipe: "nitro_crystal" },
              "Esquive das erupções do chão (Sua movimentação dracônica anula 90% disso). Execute Ignis e tome sua arma: *The Incinerator*."
            ]
          },
          {
            id: "l_cat_2",
            icon: Shield,
            title: "Netherite Monstrosity",
            desc: "Brutalidade pura em aço incandescente.",
            tasks: [
              "Localize a Soul Blacksmith, forja corrompida do Nether.",
              "Sobreviva aos golpes físicos massivos que causam knockback capaz de lançá-lo a lagos de lava.",
              "Esmague a Monstrosity e obtenha o *Infernal Forge*, o martelo de abalos sísmicos."
            ]
          },
          {
            id: "l_cat_3",
            icon: Skull,
            title: "Ender Golem e O Vazio",
            desc: "O Fim esconde segredos esquecidos e golens de tecnologia ancestral alienígena.",
            tasks: [
              "Invada a Ruined Citadel nas extremidades do End.",
              "Enfrente o Ender Golem. Evite seus projéteis teleguiados de caos e buracos negros orbitais.",
              { text: "Corte o núcleo exposto. Com os fragmentos, forje o mítico Void Core e as luvas de supressão cósmica.", recipe: "void_core" }
            ]
          },
          {
            id: "l_cat_4",
            icon: Crosshair,
            title: "The Harbinger (A Ameaça Final)",
            desc: "A maior construção do Cataclysm, armada com canhões aéreos anti-matéria.",
            tasks: [
              "Enfrente a entidade nos resquícios do Ancient Factory.",
              "Voe acrobaticamente para escapar das varreduras de Laser Obliteration que causam dano percentual bruto.",
              "Destrua o núcleo do Wither mecânico e reine absoluto sobre os mundos inferior, médio e estelar."
            ]
          }
        ]
      },
      {
        id: "late_god_crafting",
        title: "A Singularidade do Warlord",
        quests: [
          {
            id: "l_god_1",
            icon: Cpu,
            title: "Auto-Crafting de Estrelas",
            desc: "A produção manual cessa aqui. A base produz milagres.",
            tasks: [
              "Integre uma Wither Farm automática blindada com Tinted Glass (Wither-Proof) à sua rede AE2.",
              "Sincronize a morte constante do Wither com o sistema de autocrafting de Chaos Shards e Awakened Cores.",
              "Crie uma reserva de milhares de estrelas no ME Drive sem levantar um dedo."
            ]
          },
          {
            id: "l_god_2",
            icon: Database,
            title: "Armazenamento Quântico Extremo",
            desc: "Substitua a tecnologia barata.",
            tasks: [
              "Transforme todos os seus ME Storage Cells de 64k em células brutais de 256k, 1M ou maiores do Addon do AE2.",
              "Configure células químicas e fluidas para gerenciar centenas de milhares de baldes de antimatéria e refrigerantes de reatores nucleares avançados."
            ]
          },
          {
            id: "l_god_3",
            icon: Settings,
            title: "Cadeias Produtivas Finais",
            desc: "Interligue os Mods de forma que um loop auto-sustentável não dependa de NENHUM minério minerado do chão.",
            tasks: [
              "Use LaserIO, Botania (Orchids) ou Create (Cobblegen massiva) para gerar toda pedra e minério do zero de forma esmagadora.",
              "Canalize para o Modern Industrialization, crie o Platina e Titanium infinitos.",
              "Use os metais infinitos para bancar a energia infinita da esfera Dracônica."
            ]
          },
          {
            id: "l_god_4",
            icon: Crown,
            title: "O Panteão de Troféus",
            desc: "O ápice da Wiki.",
            tasks: [
              "Faça uma sala de blocos Dracônicos com vitrines contendo: The Incinerator, Void Core, Wyvern Armor aposentada, Cabeça do Ender Dragon e o Wither Boss.",
              "Sente em seu trono no meio da base, visualize os milhões de RF girando no Draconic Core acima da sua cabeça.",
              "Vocé é o Warlord. Não resta mais nada que o Astron City possa lançar que não vire poeira perante o seu império automatizado."
            ]
          }
        ]
      }
    ]
  }
};

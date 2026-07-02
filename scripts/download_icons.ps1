$baseUrlBlock = 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.4/assets/minecraft/textures/block/'
$baseUrlItem = 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.4/assets/minecraft/textures/item/'
$dest = 'public/assets/'

$blocks = @('obsidian', 'purpur_block', 'sandstone', 'soul_sand', 'nether_bricks')
$items = @('chorus_fruit', 'prismarine_shard', 'nautilus_shell', 'heart_of_the_sea', 'copper_ingot', 'netherite_scrap', 'blaze_powder', 'magma_cream', 'iron_ingot')

foreach ($b in $blocks) {
    Invoke-WebRequest -Uri "$baseUrlBlock$b.png" -OutFile "$dest$b.png" -ErrorAction SilentlyContinue
}
foreach ($i in $items) {
    Invoke-WebRequest -Uri "$baseUrlItem$i.png" -OutFile "$dest$i.png" -ErrorAction SilentlyContinue
}

Invoke-WebRequest -Uri "${baseUrlItem}coal.png" -OutFile "${dest}wither_skeleton_skull.png" -ErrorAction SilentlyContinue

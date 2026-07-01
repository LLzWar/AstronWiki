Add-Type -AssemblyName System.IO.Compression.FileSystem

$dest = "C:\Users\LuisL\.gemini\antigravity\scratch\astron-wiki\public\assets"
$modsDir = "C:\Users\LuisL\AppData\Roaming\PrismLauncher\instances\ASTRON CITY PRISM\minecraft\mods"
$vanillaJar = "C:\Users\LuisL\AppData\Roaming\PrismLauncher\libraries\com\mojang\minecraft\1.21.1\minecraft-1.21.1-client.jar"

$targets = @(
    # Vanilla
    @{ Out = "ender_pearl.png"; Match = "item/ender_pearl.png" },
    @{ Out = "gold_ingot.png"; Match = "item/gold_ingot.png" },
    @{ Out = "paper.png"; Match = "item/paper.png" },
    @{ Out = "glass.png"; Match = "block/glass.png" },
    @{ Out = "emerald.png"; Match = "item/emerald.png" },
    @{ Out = "nether_star.png"; Match = "item/nether_star.png" },
    @{ Out = "chest.png"; Match = "block/chest.png" },
    @{ Out = "sea_lantern.png"; Match = "block/sea_lantern.png" },
    @{ Out = "lapis_block.png"; Match = "block/lapis_block.png" },
    @{ Out = "glowstone_dust.png"; Match = "item/glowstone_dust.png" },
    
    # Modded - Backpacks
    @{ Out = "upgrade_base.png"; Match = "item/upgrade_base.png" },
    @{ Out = "stack_upgrade_tier_1.png"; Match = "item/stack_upgrade_tier_1.png" },
    
    # Modded - Powah
    @{ Out = "dielectric_paste.png"; Match = "item/dielectric_paste.png" },
    @{ Out = "capacitor_basic.png"; Match = "item/capacitor_basic.png" },
    @{ Out = "thermoelectric_plate.png"; Match = "item/thermoelectric_plate.png" },
    @{ Out = "energizing_orb.png"; Match = "block/energizing_orb.png" },
    
    # Modded - Draconic Evolution
    @{ Out = "draconium_ingot.png"; Match = "item/components/draconium_ingot.png" },
    @{ Out = "draconium_awakened.png"; Match = "item/components/draconium_awakened.png" },
    @{ Out = "draconic_core.png"; Match = "item/components/draconic_core.png" },
    @{ Out = "wyvern_chestpiece.png"; Match = "item/tools/wyvern_chestpiece.png" },
    
    # Modded - Mahou Tsukai
    @{ Out = "caliburn.png"; Match = "item/caliburn.png" },
    
    # Modded - AE2
    @{ Out = "fluix_crystal.png"; Match = "item/fluix_crystal.png" },
    @{ Out = "engineering_processor.png"; Match = "item/engineering_processor.png" },
    @{ Out = "logic_processor.png"; Match = "item/logic_processor.png" },
    @{ Out = "fluix_glass_cable.png"; Match = "item/fluix_glass_cable.png" },
    @{ Out = "fluix_covered_dense_cable.png"; Match = "item/fluix_covered_dense_cable.png" },
    
    # Modded - Create
    @{ Out = "andesite_alloy.png"; Match = "item/andesite_alloy.png" },
    @{ Out = "cogwheel.png"; Match = "block/cogwheel.png" },
    @{ Out = "whisk.png"; Match = "item/whisk.png" },
    @{ Out = "brass_tube.png"; Match = "item/brass_tube.png" }, # create usually has item/electron_tube.png, brass_tube might be fluid_pipe
    @{ Out = "brass_sheet.png"; Match = "item/brass_sheet.png" },
    @{ Out = "electron_tube.png"; Match = "item/electron_tube.png" },
    
    # Modded - Apotheosis
    @{ Out = "infused_hellshelf.png"; Match = "block/infused_hellshelf.png" },
    @{ Out = "tome_of_scrapping.png"; Match = "item/tome_of_scrapping.png" },
    @{ Out = "ender_library.png"; Match = "block/ender_library.png" },
    
    # Modded - Silent Gear
    @{ Out = "starlight_dust.png"; Match = "item/starlight_dust.png" },
    @{ Out = "silver_ingot.png"; Match = "item/silver_ingot.png" }
)

$jarsToSearch = @($vanillaJar) + (Get-ChildItem -Path $modsDir -Filter "*.jar" | Select-Object -ExpandProperty FullName)

foreach ($target in $targets) {
    if (Test-Path "$dest\$($target.Out)") {
        continue # Já existe
    }
    
    Write-Host "Procurando $($target.Match)..."
    $found = $false
    foreach ($jar in $jarsToSearch) {
        try {
            $zip = [System.IO.Compression.ZipFile]::OpenRead($jar)
            foreach ($entry in $zip.Entries) {
                if ($entry.FullName.EndsWith($target.Match)) {
                    [System.IO.Compression.ZipFileExtensions]::ExtractToFile($entry, "$dest\$($target.Out)", $true)
                    Write-Host "  -> Extraído de $(Split-Path $jar -Leaf)"
                    $found = $true
                    break
                }
            }
        } catch {} finally { if ($zip) { $zip.Dispose() } }
        
        if ($found) { break }
    }
}

Write-Host "Fim da extração!"

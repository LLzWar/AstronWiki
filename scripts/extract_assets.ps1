Add-Type -AssemblyName System.IO.Compression.FileSystem
$dest = "C:\Users\LuisL\.gemini\antigravity\scratch\astron-wiki\public\assets"
$modsDir = "C:\Users\LuisL\AppData\Roaming\PrismLauncher\instances\ASTRON CITY PRISM\minecraft\mods"
$vanillaJar = "C:\Users\LuisL\AppData\Roaming\PrismLauncher\libraries\com\mojang\minecraft\1.21.1\minecraft-1.21.1-client.jar"

function Extract-Texture ($jarPath, $texturePath, $outName) {
    if (-not (Test-Path $jarPath)) { return }
    try {
        $zip = [System.IO.Compression.ZipFile]::OpenRead($jarPath)
        $entry = $zip.GetEntry($texturePath)
        if ($entry) {
            [System.IO.Compression.ZipFileExtensions]::ExtractToFile($entry, "$dest\$outName", $true)
            Write-Host "Extracted $outName"
        }
    } catch {
        # ignore
    } finally {
        if ($zip) { $zip.Dispose() }
    }
}

function Extract-Regex ($jarPath, $regex, $outName) {
    if (-not (Test-Path $jarPath)) { return }
    try {
        $zip = [System.IO.Compression.ZipFile]::OpenRead($jarPath)
        foreach ($entry in $zip.Entries) {
            if ($entry.FullName -match $regex) {
                [System.IO.Compression.ZipFileExtensions]::ExtractToFile($entry, "$dest\$outName", $true)
                Write-Host "Extracted $outName from $($entry.FullName)"
                break
            }
        }
    } catch {} finally { if ($zip) { $zip.Dispose() } }
}

$sbJar = "$modsDir\sophisticatedbackpacks-1.21.1-3.25.64.1933.jar"
$ironJar = "$modsDir\irons_spellbooks-1.21.1-3.16.1.jar"
$draconicJar = "$modsDir\Draconic-Evolution-1.21.1-3.1.4.632.jar"
$powahJar = "$modsDir\Powah-6.2.10.jar"
$mahouJar = "$modsDir\mahoutsukai-1.21.1-v1.36.27.jar"

# Vanilla
Extract-Regex $vanillaJar "assets/minecraft/textures/block/oak_planks.png" "wood.png"
Extract-Regex $vanillaJar "assets/minecraft/textures/item/diamond.png" "diamond.png"
Extract-Regex $vanillaJar "assets/minecraft/textures/item/book.png" "book.png"
Extract-Regex $vanillaJar "assets/minecraft/textures/item/feather.png" "feather.png"
Extract-Regex $vanillaJar "assets/minecraft/textures/item/ink_sac.png" "ink.png"
Extract-Regex $vanillaJar "assets/minecraft/textures/item/iron_ingot.png" "iron_ingot.png"
Extract-Regex $vanillaJar "assets/minecraft/textures/item/redstone.png" "redstone.png"

# Modded
Extract-Regex $sbJar "assets/sophisticatedbackpacks/textures/item/magnet_upgrade.png" "magnet_upgrade.png"
Extract-Regex $sbJar "assets/sophisticatedbackpacks/textures/entity/backpack.png" "backpack.png"
Extract-Regex $ironJar "assets/irons_spellbooks/textures/item/spell_book_models/iron_spell_book.png" "iron_spell_book.png"
Extract-Regex $ironJar "assets/irons_spellbooks/textures/block/inscription_table.png" "inscription_table.png"
Extract-Regex $powahJar "assets/powah/textures/block/thermo_generator.png" "thermo_generator.png"
Extract-Regex $draconicJar "assets/draconicevolution/textures/item/components/wyvern_core.png" "wyvern_core.png"
Extract-Regex $draconicJar "assets/draconicevolution/textures/item/tools/draconic_chestpiece.png" "draconic_armor.png"
Extract-Regex $mahouJar "assets/mahoutsukai/textures/block/blood-circle.png" "blood_circle.png"

Write-Host "Extraction Complete"

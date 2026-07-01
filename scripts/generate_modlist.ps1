$modsDir = "C:\Users\LuisL\AppData\Roaming\PrismLauncher\instances\ASTRON CITY PRISM\minecraft\mods"
$outFile = "C:\Users\LuisL\.gemini\antigravity\scratch\astron-wiki\src\data\modsList.js"

$jars = Get-ChildItem -Path $modsDir -Filter "*.jar"
$modNames = @()

foreach ($jar in $jars) {
    # Extract the name without version numbers if possible, or just use the filename
    $name = $jar.Name
    # Simple regex to remove common version patterns like -1.21.1, -1.0.0, etc.
    $cleanName = $name -replace '-?\d+\.\d+.*\.jar$', ''
    $cleanName = $cleanName -replace '\.jar$', ''
    # Capitalize the first letter and replace hyphens/underscores with spaces
    $cleanName = $cleanName -replace '[-_]', ' '
    
    $modNames += "`"$cleanName`""
}

$modNames = $modNames | Sort-Object -Unique

$jsContent = "export const modsList = [ `n    " + ($modNames -join ",`n    ") + "`n];`n"

Set-Content -Path $outFile -Value $jsContent -Encoding UTF8
Write-Host "modsList.js generated successfully."

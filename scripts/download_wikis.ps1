$urls = @{
    'ignis' = 'https://static.wikia.nocookie.net/lenders-cataclysm/images/b/b3/Ignis.png'
    'ender_golem' = 'https://static.wikia.nocookie.net/lenders-cataclysm/images/e/ec/Ender_Golem.png'
    'netherite_monstrosity' = 'https://static.wikia.nocookie.net/lenders-cataclysm/images/2/23/Netherite_Monstrosity.png'
    'frostmaw' = 'https://static.wikia.nocookie.net/mowziesmobs/images/2/24/Frostmaw.png'
    'wroughtnaut' = 'https://static.wikia.nocookie.net/mowziesmobs/images/6/6d/Ferrous_Wroughtnaut.png'
}
foreach ($k in $urls.Keys) {
    try {
        Invoke-WebRequest -Uri $urls[$k] -OutFile "public/assets/bosses/$k.png"
        Write-Host "Baixado $k"
    } catch {
        Write-Host "Falhou $k"
    }
}

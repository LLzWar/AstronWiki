$bosses = @{
    'ignis' = 'L Ender Cataclysm Ignis boss'
    'ender_golem' = 'L Ender Cataclysm Ender Golem'
    'netherite_monstrosity' = 'L Ender Cataclysm Netherite Monstrosity'
    'frostmaw' = 'Mowzies Mobs Frostmaw'
    'wroughtnaut' = 'Mowzies Mobs Ferrous Wroughtnaut'
}

New-Item -ItemType Directory -Force -Path "public/assets/bosses" | Out-Null

foreach ($key in $bosses.Keys) {
    $query = $bosses[$key]
    Write-Host "Buscando $key..."
    $url = "https://html.duckduckgo.com/html/?q=" + [uri]::EscapeDataString($query + " image")
    try {
        $req = Invoke-WebRequest -Uri $url -UseBasicParsing -Headers @{'User-Agent'='Mozilla/5.0'}
        $match = [regex]::Match($req.Content, 'src="//external-content\.duckduckgo\.com/iu/\?u=(.*?)"')
        if ($match.Success) {
            $imgUrl = [uri]::UnescapeDataString($match.Groups[1].Value)
            Invoke-WebRequest -Uri $imgUrl -OutFile "public/assets/bosses/$key.jpg"
            Write-Host " -> Baixado $key.jpg"
        } else {
            Write-Host " -> Falhou (sem img)"
        }
    } catch {
        Write-Host " -> Falhou HTTP"
    }
}
Write-Host "Finalizado."

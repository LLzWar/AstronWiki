$dir = ".agents"
if (-not (Test-Path -Path $dir)) {
    New-Item -ItemType Directory -Force -Path $dir
}
$content = @"

## Check Guides Command
Whenever the user says 'Checar pasta /guides', you MUST immediately use the list_dir tool on 'C:\Users\LuisL\Downloads\guides'. Compare the files there with the ones already implemented in the Wiki (usually copied to 'public/docs/'). If there are new '.md' files, copy them to 'public/docs/', add a route in 'App.jsx' using 'MarkdownViewer', and add a button in 'Sidebar.jsx' under the 'Manuais Oficiais' section so they become readable in the app.
"@

Add-Content -Path ".agents\AGENTS.md" -Value $content -Encoding UTF8

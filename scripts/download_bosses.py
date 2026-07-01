import urllib.request
import urllib.parse
import os

bosses = {
    'ignis': 'L Ender Cataclysm Ignis boss minecraft',
    'ender_golem': 'L Ender Cataclysm Ender Golem minecraft',
    'netherite_monstrosity': 'L Ender Cataclysm Netherite Monstrosity',
    'frostmaw': 'Mowzies Mobs Frostmaw',
    'wroughtnaut': 'Mowzies Mobs Ferrous Wroughtnaut'
}

os.makedirs('public/assets/bosses', exist_ok=True)

for name, query in bosses.items():
    print(f'Searching for {name}...')
    url = 'https://html.duckduckgo.com/html/?q=' + urllib.parse.quote(query + ' image')
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        if 'src="//external-content.duckduckgo.com/iu/?u=' in html:
            img_url = html.split('src="//external-content.duckduckgo.com/iu/?u=')[1].split('"')[0]
            img_url = urllib.parse.unquote(img_url)
            print(f'Found URL for {name}: {img_url}')
            urllib.request.urlretrieve(img_url, f'public/assets/bosses/{name}.jpg')
            print(f'Downloaded {name}.jpg')
        else:
            print(f'No image found for {name}')
    except Exception as e:
        print(f'Failed {name}: {e}')

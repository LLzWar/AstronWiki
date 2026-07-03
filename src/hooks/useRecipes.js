import { useState, useEffect } from 'react';

let globalCache = null;
let fetchPromise = null;

const startPreload = () => {
  if (fetchPromise) return fetchPromise;

    fetchPromise = Promise.all([
      fetch('/data/allRecipes.json').then(res => res.json()),
      fetch('/data/idMap.json').then(res => res.json()),
      fetch('/data/translatedMap.json').then(res => res.json()).catch(() => ({}))
    ]).then(([recipesData, mapData, translatedMap]) => {
      const revMap = {};
      Object.entries(mapData).forEach(([k, v]) => {
        revMap[v] = k;
      });
      // Merge translated manual entries
      Object.entries(translatedMap).forEach(([internal, ptSlug]) => {
        revMap[ptSlug] = internal;
      });


    const byResult = {};
    const byUsage = {};

    // Build indexes for O(1) lookup
    recipesData.forEach(r => {
      // Result index
      if (r.result) {
        if (!byResult[r.result]) byResult[r.result] = [];
        byResult[r.result].push(r);
      }

      // Usage index
      const addUsage = (itemId) => {
        if (!itemId) return;
        if (!byUsage[itemId]) byUsage[itemId] = new Set();
        byUsage[itemId].add(r);
      };

      if (r.ingredients) {
        r.ingredients.forEach(ing => {
          if (Array.isArray(ing)) ing.forEach(i => addUsage(i.item || i.tag));
          else addUsage(ing?.item || ing?.tag);
        });
      }
      if (r.key) {
        Object.values(r.key).forEach(ing => {
          if (Array.isArray(ing)) ing.forEach(i => addUsage(i.item || i.tag));
          else addUsage(ing?.item || ing?.tag);
        });
      }
      if (r.ingredient) {
        if (Array.isArray(r.ingredient)) r.ingredient.forEach(i => addUsage(i.item || i.tag));
        else addUsage(r.ingredient?.item || r.ingredient?.tag);
      }
    });

    // Convert Sets back to Arrays for easier mapping in React
    Object.keys(byUsage).forEach(k => {
      byUsage[k] = Array.from(byUsage[k]);
    });

    globalCache = {
      recipes: recipesData,
      idMap: mapData,
      reverseMap: revMap,
      recipesByResult: byResult,
      recipesByUsage: byUsage,
      loading: false
    };
    
    return globalCache;
  }).catch(err => {
    console.error("Failed to load recipes data", err);
    return null;
  });

  return fetchPromise;
};

// Eager Preloading: Inicia o download em segundo plano assim que a página carrega, 
// sem esperar o usuário clicar em um item!
if (typeof window !== 'undefined') {
  setTimeout(startPreload, 1000); // 1s delay para não competir com imagens e scripts iniciais
}

export function useRecipes() {
  const [data, setData] = useState(
    globalCache || { 
      recipes: [], 
      idMap: {}, 
      reverseMap: {}, 
      recipesByResult: {}, 
      recipesByUsage: {}, 
      loading: true 
    }
  );

  useEffect(() => {
    if (globalCache) {
      setData(globalCache);
    } else {
      startPreload().then((cache) => {
        if (cache) setData(cache);
      });
    }
  }, []);

  return data;
}

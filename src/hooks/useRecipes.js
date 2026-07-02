import { useState, useEffect } from 'react';

let globalCache = null;
let fetchPromise = null;

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
    if (globalCache) return;

    if (!fetchPromise) {
      fetchPromise = Promise.all([
        fetch('/data/allRecipes.json').then(res => res.json()),
        fetch('/data/idMap.json').then(res => res.json())
      ]).then(([recipesData, mapData]) => {
        
        const revMap = {};
        Object.entries(mapData).forEach(([k, v]) => {
          revMap[v] = k;
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
            // Prevent duplicate recipe entries for the same usage ingredient
            if (!byUsage[itemId]) byUsage[itemId] = new Set();
            byUsage[itemId].add(r);
          };

          if (r.ingredients) {
            r.ingredients.forEach(ing => {
              if (Array.isArray(ing)) ing.forEach(i => addUsage(i.item));
              else addUsage(ing?.item);
            });
          }
          if (r.key) {
            Object.values(r.key).forEach(ing => {
              if (Array.isArray(ing)) ing.forEach(i => addUsage(i.item));
              else addUsage(ing?.item);
            });
          }
          if (r.ingredient) {
            if (Array.isArray(r.ingredient)) r.ingredient.forEach(i => addUsage(i.item));
            else addUsage(r.ingredient?.item);
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
        
        setData(globalCache);
      }).catch(err => {
        console.error("Failed to load recipes data", err);
      });
    } else {
      // If a fetch is already in progress by another component, wait for it
      fetchPromise.then(() => setData(globalCache));
    }
  }, []);

  return data;
}

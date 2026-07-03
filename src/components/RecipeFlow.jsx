import React, { useMemo, useState } from 'react';
import { ReactFlow, Controls, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { itemImages } from '../data/recipes';

const FlowImage = ({ item, defaultSrc }) => {
  const fileName = item.replace(/\(.*?\)/g, '').trim().replace(/['\s-]+/g, '_').toLowerCase();
  const imgSrc = defaultSrc || `/assets/items/${fileName}.png`;

  return (
    <img 
      src={imgSrc} 
      alt={item} 
      style={{ width: 24, height: 24, marginBottom: '5px', objectFit: 'contain', imageRendering: 'pixelated' }} 
      onError={(e) => {
        if (!e.target.dataset.fallbackTried) {
           e.target.dataset.fallbackTried = "true";
           e.target.src = `https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.4/assets/minecraft/textures/item/${fileName}.png`;
        } else if (e.target.dataset.fallbackTried === "true") {
           e.target.dataset.fallbackTried = "block";
           e.target.src = `https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.4/assets/minecraft/textures/block/${fileName}.png`;
        } else {
           e.target.style.display = 'none';
        }
      }} 
    />
  );
};

export default function RecipeFlow({ recipe, recipeId }) {
  const { nodes, edges } = useMemo(() => {
    const nds = [];
    const eds = [];
    
    // Target Node (Result)
    nds.push({
      id: 'result',
      position: { x: 200, y: 300 },
      data: { 
        label: (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>
            <FlowImage item={recipe.title} defaultSrc={itemImages[recipeId]} />
            <b style={{color: 'black'}}>{recipe.title}</b>
          </div>
        )
      },
      style: { background: '#fff', border: '2px solid var(--accent-primary)', borderRadius: '8px' }
    });

    const uniqueInputs = new Set();
    
    // Extract unique inputs from grid
    recipe.grid.forEach(row => {
      row.forEach(item => {
        if (item) uniqueInputs.add(item);
      });
    });

    const inputsArray = Array.from(uniqueInputs);
    const spacing = 150;
    const startX = 200 - ((inputsArray.length - 1) * spacing) / 2;

    inputsArray.forEach((ing, idx) => {
      const nodeId = `ing-${idx}`;
      nds.push({
        id: nodeId,
        position: { x: startX + (idx * spacing), y: 50 },
        data: {
          label: (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '5px' }}>
              <FlowImage item={ing} defaultSrc={itemImages[ing]} />
              <span style={{ fontSize: '10px', color: 'black' }}>{ing}</span>
            </div>
          )
        },
        style: { background: '#f5f5f5', border: '1px solid #ccc', borderRadius: '4px' }
      });

      eds.push({
        id: `e-${nodeId}-result`,
        source: nodeId,
        target: 'result',
        animated: true,
        style: { stroke: 'var(--accent-blue)', strokeWidth: 2 }
      });
    });

    return { nodes: nds, edges: eds };
  }, [recipe, recipeId]);

  return (
    <div style={{ width: '100%', height: '400px', background: 'white', borderRadius: '8px', overflow: 'hidden', marginTop: '1rem' }}>
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <Background variant="dots" gap={12} size={1} />
        <Controls />
      </ReactFlow>
    </div>
  );
}

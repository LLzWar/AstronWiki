import React, { useMemo } from 'react';
import { ReactFlow, Controls, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { itemImages } from '../data/recipes';

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
            {itemImages[recipeId] && <img src={itemImages[recipeId]} alt={recipe.title} style={{ width: 32, height: 32, marginBottom: '5px' }} />}
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
              {itemImages[ing] && <img src={itemImages[ing]} alt={ing} style={{ width: 24, height: 24, marginBottom: '5px' }} />}
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

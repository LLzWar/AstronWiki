import React from 'react';

export default function WikiCard({ title, mod, icon: Icon, children }) {
  return (
    <div className="wiki-card">
      <div className="card-header">
        {Icon && <Icon size={24} color="var(--accent-blue)" />}
        <h3 className="card-title">{title}</h3>
      </div>
      <div className="card-mod">{mod}</div>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

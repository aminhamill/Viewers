// InputSelect.tsx
import React from 'react';

const InputSelect = ({
                       id,
                       label,
                       value,
                       onChange,
                       options,
                       isSortable,
                       sortDirection,
                       onLabelClick,
                     }) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        onClick={onLabelClick}
        className={`font-semibold cursor-pointer ${isSortable ? 'underline' : ''}`}
      >
        {label}
        {sortDirection && sortDirection !== 'none' && (
          <span className="ml-1 text-sm text-gray-400">
            {sortDirection === 'ascending' ? '▲' : '▼'}
          </span>
        )}
      </label>
      <select
        id={id}
        value={value}
        onChange={e => onChange(e.target.value)}
        className="border p-2 rounded bg-white text-black"
      >
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputSelect;

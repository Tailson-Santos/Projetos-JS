export function Input({ id, value, onChange }) {
    return (
      <input
        id={id}
        value={value}
        onChange={onChange}
        className="bg-amber-50 p-1 rounded"
      />
    );
  } 
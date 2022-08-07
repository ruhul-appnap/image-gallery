import React from "react";

function AppInput({ type = "text", placeholder, value, onChange }) {
  return (
    <div>
      <input
        className="w-full p-2 mb-2 border-blue-200 text-lg rounded border"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default AppInput;

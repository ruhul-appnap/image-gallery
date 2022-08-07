import React from "react";

function AppButton({ title, onClick }) {
  return (
    <button
      className="text-white rounded-lg bg-slate-800 px-5 py-3"
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default AppButton;

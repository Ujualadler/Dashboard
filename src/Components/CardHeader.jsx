import React from "react";

function CardHeader({ title, icon, action }) {
  return (
    <>
      <div className="flex justify-between p-5 h-16">
        <h5 className="text-sm font-semibold">{title}</h5>
        <div className="flex gap-1">
          {icon && icon}
          {action && action}
        </div>
      </div>
      <hr />
    </>
  );
}

export default CardHeader;

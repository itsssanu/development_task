import React, { useState } from "react";

export const Accordion = ({
  children,
  type = "single",
  defaultOpen = [],
  className = "",
}) => {
  const initial =
    defaultOpen == null
      ? []
      : Array.isArray(defaultOpen)
      ? defaultOpen
      : [defaultOpen];

  const [openItems, setOpenItems] = useState(initial);

  const toggleItem = (value) => {
    if (type === "single") {
      setOpenItems(openItems.includes(value) ? [] : [value]);
    } else {
      setOpenItems(
        openItems.includes(value)
          ? openItems.filter((i) => i !== value)
          : [...openItems, value]
      );
    }
  };

  return (
    <div className={className}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { openItems, toggleItem })
      )}
    </div>
  );
};

export const AccordionItem = ({
  children,
  value,
  openItems = [],
  toggleItem,
  className = "",
}) => {
  const isOpen = openItems.includes(value);

  return (
    <div className={className}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { isOpen, value, toggleItem })
      )}
    </div>
  );
};

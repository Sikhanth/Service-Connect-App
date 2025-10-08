import React, { useState } from "react";
import {
  FaThLarge,
  FaBookmark,
  FaRedoAlt,
  FaRegWindowMaximize,
  FaPlus,
  FaQuestionCircle,
} from "react-icons/fa";

/*
  Quick tunables:
  - ICON_SIZE: px size of the icons
  - TOOLBAR_HEIGHT_CLASS: tailwind height class for the capsule (h-6, h-8, etc.)
  - TOOLBAR_WIDTH_CLASSES: tailwind width classes to control how stretched it is
*/
const ICON_SIZE = 10; // px — reduce to make icons smaller (e.g., 8 or 6)
const TOOLBAR_HEIGHT_CLASS = "h-8"; // thin toolbar; change to h-6 for even thinner
const TOOLBAR_WIDTH_CLASSES = "w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] max-w-[1100px]";

const ICONS = [
  { id: 1, Icon: FaThLarge, label: "Dashboard" },
  { id: 2, Icon: FaBookmark, label: "Bookmarks" },
  { id: 3, Icon: FaRedoAlt, label: "Reload" },
  { id: 4, Icon: FaRegWindowMaximize, label: "Layout" },
  { id: 5, Icon: FaPlus, label: "Add" },
  { id: 6, Icon: FaQuestionCircle, label: "Help" },
];

export default function ToolBar() {
  const [active, setActive] = useState(null);

  return (
    <div
      className={`
        fixed bottom-6 left-1/2 -translate-x-1/2
        bg-[#736A68] rounded-full shadow-lg
        flex items-center justify-around
        px-2 z-50 ${TOOLBAR_WIDTH_CLASSES} ${TOOLBAR_HEIGHT_CLASS}
      `}
      aria-hidden={false}
    >
      {ICONS.map(({ id, Icon, label }) => (
        <button
          key={id}
          onClick={() => setActive(id)}
          title={label}
          aria-label={label}
          className="flex items-center justify-center px-1 h-full focus:outline-none"
        >
          <Icon
            size={ICON_SIZE}
            color={active === id ? "#FFD54A" : "#F6F6F5"}
            style={{ display: "block", transform: "translateY(-1px)" }}
          />
        </button>
      ))}
    </div>
  );
}

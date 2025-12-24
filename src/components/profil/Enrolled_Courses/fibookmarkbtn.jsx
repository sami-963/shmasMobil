import { useState } from "react";
import { FiBookmark } from "react-icons/fi";

function BookmarkBtn({ fixedColor }) {
  const [saved, setSaved] = useState(false);

  // إذا أعطينا fixedColor → نستخدمه، وإلا اللون يعتمد على saved
  const color = fixedColor || (saved ? "#facc15" : "#555");

  // الدالة عند الضغط، تتفعل فقط لو ما فيه fixedColor
  const handleClick = () => {
    if (!fixedColor) {
      setSaved(!saved);
    }
  };

  return (
    <div
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <FiBookmark size={24} color={color} />
    </div>
  );
}

export default BookmarkBtn;

import { useEffect, useState } from "react";
import { Text } from "@/styles/Text";

export function TypeWriter(props: { hideCursor: any; text: string; delay: any; }) {
  const [text, setText] = useState("")
  const [showCursor, setShowCursor] = useState(false);

  const writeOnScreen = (text: string, i = 0) => {
    if (i < text.length) {
      setShowCursor(true)

      setText(text.slice(0, i + 1));
      setTimeout(() => writeOnScreen(text, i + 1), 100)

    } else if (i >= text.length && props?.hideCursor) {
      setShowCursor(false)
    }
  };

  useEffect(() => {
    setTimeout(() => writeOnScreen(props.text), props?.delay ?? 250);
  }, [])

  return (
    <Text color="grey4">
      {text}
      {showCursor && (
        <span className="animate-animar-cursor text-xl md:text-2xl ml-1 font-medium">
          |
        </span>
      )}
    </Text>
  )
}
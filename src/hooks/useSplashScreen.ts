import { useState } from "react";

export const useSplashScreen = () => {
  const [showContent, setShowContent] = useState(false);

  const handleSplashComplete = () => {
    setShowContent(true);
  };

  return {
    showContent,
    handleSplashComplete,
  };
};

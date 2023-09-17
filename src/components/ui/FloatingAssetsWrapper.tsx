import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define keyframe animation for floating
const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
`;

// Create a styled component for the wrapper
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

// Create a styled component for the floating assets
const FloatingAsset = styled.img`
  position: absolute;
  animation: ${floatAnimation} 5s ease-in-out alternate infinite;
  transition: transform 0.3s ease-in-out; /* Add a smooth transition effect */
`;

const FloatingAssetsWrapper: React.FC = () => {
  // Define the list of asset paths
  const assetPaths = [
    '/cloud.png',
    '/bom.png',
    '/dim.png',
    '/23.png',
    // Add more asset paths here
  ];

  // Generate 10 random positions avoiding the center rectangle
  const floatingAssets = Array.from({ length: 10 }, (_, index) => {
    const left = `${Math.random() * 50 + 10}%`; // Random left position (10% to 90%)
    const top = `${Math.random() * 60 + 10}%`; // Random top position (10% to 70%)
    const assetPath = assetPaths[index % assetPaths.length]; // Reuse assets in a loop
    return (
      <FloatingAsset
        key={index}
        src={assetPath}
        alt={`Asset ${index + 1}`}
        style={{ left, top }}
        height="350px"
        width="320px"
      />
    );
  });

  return <Wrapper>{floatingAssets}</Wrapper>;
};

export default FloatingAssetsWrapper;

// src/utils/deviceDetection.js

export const getDeviceInfo = () => {
  const ua = navigator.userAgent;
  const isAndroid = /Android/i.test(ua);
  const isIOS = /iPhone|iPad|iPod/i.test(ua);
  const isMobile = isAndroid || isIOS;
  
  // Get hardware capabilities
  const cores = navigator.hardwareConcurrency || 2;
  const memory = navigator.deviceMemory || 2;
  
  // Detect GPU info (if available)
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  let gpuInfo = 'unknown';
  
  if (gl) {
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    if (debugInfo) {
      gpuInfo = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
    }
  }
  
  return {
    isAndroid,
    isIOS,
    isMobile,
    cores,
    memory,
    gpuInfo,
    isLowEnd: isMobile && (memory <= 4 || cores <= 4),
    isVeryLowEnd: isMobile && (memory <= 2 || cores <= 2)
  };
};

export const getOptimalSettings = () => {
  const device = getDeviceInfo();
  
  if (device.isVeryLowEnd) {
    return {
      shadowsEnabled: false,
      antialiasing: false,
      dpr: 1,
      particleCount: 1000,
      autoRotate: false,
      powerPreference: 'low-power',
      render3D: false // Use fallback images
    };
  }
  
  if (device.isLowEnd) {
    return {
      shadowsEnabled: false,
      antialiasing: false,
      dpr: 1.5,
      particleCount: 2000,
      autoRotate: true,
      powerPreference: 'low-power',
      render3D: true
    };
  }
  
  if (device.isMobile) {
    return {
      shadowsEnabled: false,
      antialiasing: true,
      dpr: 2,
      particleCount: 3000,
      autoRotate: true,
      powerPreference: 'default',
      render3D: true
    };
  }
  
  // Desktop settings
  return {
    shadowsEnabled: true,
    antialiasing: true,
    dpr: 2,
    particleCount: 5000,
    autoRotate: true,
    powerPreference: 'high-performance',
    render3D: true
  };
};

// Preload check for WebGL support
export const checkWebGLSupport = () => {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return !!gl;
  } catch (e) {
    return false;
  }
};
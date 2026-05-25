import {
  FiArchive,
  FiCamera,
  FiCloudRain,
  FiCpu,
  FiLayers,
  FiMessageCircle,
  FiSliders,
  FiTrendingUp,
  FiActivity,
  FiRadio,
  FiCrosshair,
  FiWifi,
  FiAlertTriangle,
  FiTarget
} from 'react-icons/fi'

export const projects = [
  {
    id: 'wardrobeIQ',
    number: '01',
    title: 'WARDROBE IQ',
    subtitle: 'AI-Powered Fashion Intelligence',
    description: 'Wardrobe IQ reframes the closet as a private archive: garments become data-rich objects, outfits become intelligent compositions, and weather, intent, fabric, and taste converge into a calm luxury styling system.',
    theme: {
      primaryGlow: '#d7b46a',
      glowOpacity: 0.04,
      bgGlow: 'rgba(215,180,106,0.08)',
      accentText: 'text-[#d7b46a]',
      accentBg: 'bg-[#d7b46a]',
      accentBorder: 'border-[#d7b46a]',
      bgDark: 'bg-[#05060b]',
      ambientStyle: 'wardrobe-stage-ambient', // custom css classes if needed
    },
    missionContext: null,
    features: [
      { key: 'scan', icon: FiCamera, title: 'AI Clothing Recognition', text: 'Computer vision classifies garments, fabric cues, color families, and confidence in one editorial pass.' },
      { key: 'outfit', icon: FiSliders, title: 'Outfit Intelligence', text: 'Scoring logic blends occasion, season, palette harmony, and wardrobe usage to recommend complete looks.' },
      { key: 'weather', icon: FiCloudRain, title: 'Weather-Aware Styling', text: 'The interface and outfit guidance shift with rain, evening, morning, and night atmosphere signals.' },
      { key: 'ui', icon: FiLayers, title: 'Atmospheric UI Engine', text: 'A refined black-and-gold visual system adapts without distracting from the garment archive.' },
      { key: 'assistant', icon: FiMessageCircle, title: 'AI Stylist Assistant', text: 'Conversational prompts translate wardrobe context into taste-aware styling direction.' },
      { key: 'analytics', icon: FiTrendingUp, title: 'Smart Wardrobe Analytics', text: 'Rotation, seasonal balance, saved outfits, and underused pieces surface as quiet intelligence.' },
    ],
    techStack: {
      frontend: ['React Native', 'Expo', 'React.js'],
      backend: ['Node.js', 'PyTorch', 'MongoDB Atlas', 'MobileNB Atlas'],
      ai: ['Render', 'Railway', 'Cloudinary']
    },
    architecture: [
      { label: 'React Native\nApp', id: '1' },
      { label: 'Express\nBackend', id: '2' },
      { label: 'Cloudinary\nUpload', id: '3' },
      { label: 'FastAPI\nAI Service', id: '4' },
      { label: 'ML\nInference', id: '5' },
      { label: 'Prediction\nEngine', id: '6' },
      { label: 'Outfit\nIntelligence', id: '7' }
    ],
    innovations: [
      'Luxury archive interface tuned for fashion metadata.',
      'Mocked AI scan loop that communicates confidence without real inference.',
      'Weather and atmosphere states that subtly reshape the product mood.',
      'Complete-the-look logic framed as editorial recommendation intelligence.'
    ],
    componentPath: 'wardrobe/WardrobePhoneApp'
  },
  {
    id: 'rfRadar',
    number: '02',
    title: 'RF RADAR',
    subtitle: 'Through-Wall Presence Detection System',
    description: 'A radar-based living person detection system developed for emergency response teams. It utilizes RF signal intelligence and real-time telemetry analysis to identify victims trapped beneath collapsed structures.',
    theme: {
      primaryGlow: '#00ffcc',
      glowOpacity: 0.05,
      bgGlow: 'rgba(0,255,204,0.06)',
      accentText: 'text-[#00ffcc]',
      accentBg: 'bg-[#00ffcc]',
      accentBorder: 'border-[#00ffcc]',
      bgDark: 'bg-[#020b14]',
      ambientStyle: 'radar-stage-ambient',
    },
    missionContext: {
      event: 'Smart India Hackathon 2025 & Hacknovate 7.0',
      organization: 'Ministry of Home Affairs (MHA) & NDRF',
      statement: 'Development of a radar-based living person detection system for use under rubble during disaster rescue operations.'
    },
    features: [
      { key: 'telemetry', icon: FiActivity, title: 'Live Waveform Analytics', text: 'Realtime telemetry graphs, waveform analysis, and signal monitoring powered by continuous websocket streaming.' },
      { key: 'presence', icon: FiCrosshair, title: 'Presence Detection Engine', text: 'Z-score anomaly detection system specifically calibrated for identifying human movement and respiratory patterns.' },
      { key: 'rescue', icon: FiAlertTriangle, title: 'Disaster Rescue Intelligence', text: 'Tactical field-deployment interface designed for identifying victims beneath collapsed structures.' },
      { key: 'hardware', icon: FiCpu, title: 'ESP32 + nRF24 Architecture', text: 'Embedded wireless hardware system utilizing nRF24L01+ modules for resilient realtime communication.' },
      { key: 'signal', icon: FiWifi, title: 'Real-Time Signal Tracking', text: 'Live websocket processing capable of handling high-frequency RF signal streams with millisecond latency.' },
      { key: 'mission', icon: FiTarget, title: 'Tactical Monitoring UI', text: 'Mission-control inspired interface offering immediate visual threat/presence intelligence for rapid deployment.' },
    ],
    techStack: {
      frontend: ['React Native', 'Expo', 'WebSocket API'],
      backend: ['Node.js', 'Express', 'Socket.io', 'Python (Data Analysis)'],
      hardware: ['ESP32', 'nRF24L01+', 'C++ (Arduino)']
    },
    architecture: [
      { label: 'nRF24L01+\nRadar', id: '1' },
      { label: 'ESP32\nReceiver', id: '2' },
      { label: 'WebSocket\nStream', id: '3' },
      { label: 'Signal\nProcessing', id: '4' },
      { label: 'Z-Score\nEngine', id: '5' },
      { label: 'Telemetry\nDashboard', id: '6' },
      { label: 'Presence\nAlert', id: '7' }
    ],
    innovations: [
      'Custom Z-score anomaly detection running in real-time over WebSocket streams.',
      'Responsive SVG-based waveform visualizer optimized for high-frequency updates.',
      'Tactical dark-mode UI with dynamically scaling color thresholds for rapid threat assessment.',
      'Fully decoupled embedded hardware system capable of running independently in disaster zones.'
    ],
    componentPath: 'radar/RadarPhoneApp'
  }
]

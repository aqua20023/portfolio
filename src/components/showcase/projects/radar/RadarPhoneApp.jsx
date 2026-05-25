import React, { useState, useEffect } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import {
  FiActivity,
  FiSettings,
  FiWifi,
  FiBarChart2,
  FiCheckCircle
} from 'react-icons/fi'

const RadarStatus = () => (
  <div className='relative z-20 flex items-center justify-between px-5 pt-4 text-[10px] font-semibold text-white/[0.85]'>
    <span className="tracking-widest">12:43</span>
    <div className='absolute left-1/2 top-[15px] h-4 w-4 -translate-x-1/2 rounded-full border border-[#00ffcc]/30 bg-[#070707] shadow-[inset_0_0_8px_rgba(0,255,204,0.12)]'>
      <span className='absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ffcc] animate-pulse' />
    </div>
    <div className='flex items-center gap-1 text-[#00ffcc]'>
      <FiWifi className="text-xs" />
    </div>
  </div>
)

const RadarHeader = ({ label }) => (
  <div className='relative z-10 flex items-center justify-between px-5 pb-3 pt-5 border-b border-[#00ffcc]/10 bg-[#020b14]/80 backdrop-blur'>
    <span className='whitespace-nowrap text-[16px] font-bold tracking-[0.3em] text-white uppercase'>{label}</span>
    <div className='flex items-center gap-2 px-2 py-1 rounded-full border border-[#ff3366]/30 bg-[#ff3366]/10'>
      <span className='w-1.5 h-1.5 rounded-full bg-[#ff3366]' />
      <span className='text-[8px] font-bold tracking-widest text-[#ff3366]'>OFFLINE</span>
    </div>
  </div>
)

const RadarNav = ({ active, setActive }) => {
  const items = [
    { id: 'dash', label: 'DASH', icon: FiActivity },
    { id: 'data', label: 'DATA', icon: FiBarChart2 },
    { id: 'config', label: 'CONFIG', icon: FiSettings },
    { id: 'link', label: 'LINK', icon: FiWifi },
  ]

  return (
    <div className='absolute inset-x-0 bottom-0 z-20 border-t border-[#00ffcc]/10 bg-[#020b14]/90 px-4 pb-4 pt-3 backdrop-blur-md'>
      <div className='flex items-center justify-between'>
        {items.map((item) => {
          const Icon = item.icon
          const isActive = active === item.id

          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`flex flex-1 flex-col items-center gap-1.5 text-[8px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 relative ${
                isActive ? 'text-[#00ffcc]' : 'text-white/[0.3]'
              }`}
            >
              <Icon className='text-[16px]' />
              <span>{item.label}</span>
              {isActive && (
                <span className="absolute -top-3 w-1 h-1 rounded-full bg-[#ff9900]" />
              )}
            </button>
          )
        })}
      </div>
      <span className='mx-auto mt-3 block h-[3px] w-24 rounded-full bg-white/[0.2]' />
    </div>
  )
}

const RadarDashboard = () => (
  <div className='h-full overflow-y-auto pb-24 scrollbar-hide'>
    <RadarHeader label="DASHBOARD" />
    <div className='px-4 pt-4 space-y-4'>
      
      {/* Presence Probability */}
      <div className='rounded-xl border border-[#00ffcc]/10 bg-[#031525]/50 p-5 flex flex-col items-center'>
        <p className='text-[9px] font-bold tracking-[0.25em] text-[#00ffcc] mb-6'>PRESENCE PROBABILITY</p>
        <div className='relative w-32 h-32 flex items-center justify-center'>
          <svg className='absolute inset-0 w-full h-full' viewBox="0 0 100 100">
            <path d="M 20 80 A 45 45 0 1 1 80 80" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" strokeLinecap="round" />
            <path d="M 20 80 A 45 45 0 0 1 25 70" fill="none" stroke="#00ffcc" strokeWidth="8" strokeLinecap="round" className="opacity-50" />
          </svg>
          <div className='text-center'>
            <span className='text-4xl font-bold text-[#00ffcc] tracking-tighter'>0</span>
            <span className='text-lg font-bold text-[#00ffcc]/50'>%</span>
            <p className='text-[7px] font-bold tracking-[0.3em] text-white/40 mt-1'>PRESENCE</p>
          </div>
        </div>
        <div className='mt-6 w-full flex flex-col items-center gap-3'>
          <div className='flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#020b14] border border-white/5 w-4/5'>
            <FiWifi className='text-white/30 text-xs' />
            <span className='text-[9px] font-bold tracking-widest text-white/30'>DISCONNECTED</span>
          </div>
          <div className='flex gap-4 text-[8px] text-white/50'>
            <span className='flex items-center gap-1'><span className='w-1.5 h-1.5 rounded-full bg-[#ff9900]'/> Possible >1.5σ</span>
            <span className='flex items-center gap-1'><span className='w-1.5 h-1.5 rounded-full bg-[#ff3366]'/> Detect >2.5σ</span>
          </div>
        </div>
      </div>

      {/* Signal Metrics */}
      <div>
        <p className='text-[9px] font-bold tracking-[0.25em] text-[#00ffcc] mb-3 ml-1'>SIGNAL METRICS</p>
        <div className='grid grid-cols-2 gap-2'>
          <div className='rounded-lg border border-[#00ffcc]/10 bg-[#031525]/50 p-4 text-center'>
            <p className='text-xl font-bold text-[#00ffcc]'>0%</p>
            <p className='text-[7px] font-bold tracking-[0.2em] text-white/40 mt-1'>SIGNAL RATE</p>
          </div>
          <div className='rounded-lg border border-[#00ffcc]/10 bg-[#031525]/50 p-4 text-center'>
            <p className='text-xl font-bold text-white'>+0.00σ</p>
            <p className='text-[7px] font-bold tracking-[0.2em] text-white/40 mt-1'>Z-SCORE</p>
          </div>
          <div className='rounded-lg border border-[#00ffcc]/10 bg-[#031525]/50 p-4 text-center'>
            <p className='text-lg font-bold text-white'>+0%</p>
            <p className='text-[7px] font-bold tracking-[0.2em] text-white/40 mt-1'>DEVIATION</p>
          </div>
          <div className='rounded-lg border border-[#00ffcc]/10 bg-[#031525]/50 p-4 text-center'>
            <p className='text-lg font-bold text-white/50'>0%</p>
            <p className='text-[7px] font-bold tracking-[0.2em] text-white/40 mt-1'>BASELINE</p>
          </div>
        </div>
      </div>

      {/* Live Waveform */}
      <div className='rounded-xl border border-[#00ffcc]/10 bg-[#031525]/50 p-4 relative overflow-hidden'>
        <div className='flex justify-between items-end mb-4'>
          <p className='text-[9px] font-bold tracking-[0.25em] text-[#00ffcc]'>LIVE Z-SCORE WAVEFORM</p>
          <p className='text-[8px] text-white/30'>~12s window</p>
        </div>
        <div className='h-24 w-full border-b border-[#00ffcc]/20 relative'>
          <div className='absolute top-1/2 w-full border-t border-dashed border-[#00ffcc]/10' />
          <Motion.div 
            className='absolute inset-0 bg-gradient-to-r from-transparent via-[#00ffcc]/5 to-transparent'
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          {/* Mock flatline */}
          <svg className='w-full h-full' preserveAspectRatio="none">
            <polyline points="0,90 300,90" fill="none" stroke="#00ffcc" strokeWidth="1" strokeOpacity="0.5" />
          </svg>
        </div>
        <p className='text-[7px] text-white/40 mt-2 text-center'>Connect to an ESP32 receiver to begin monitoring.</p>
      </div>

    </div>
  </div>
)

const RadarAnalytics = () => (
  <div className='h-full overflow-y-auto pb-24 scrollbar-hide'>
    <RadarHeader label="ANALYTICS" />
    <div className='px-4 pt-4 space-y-4'>
      <p className='text-[9px] text-white/40 ml-1'>0 data points collected</p>
      
      <div>
        <p className='text-[9px] font-bold tracking-[0.25em] text-[#00ffcc] mb-3 ml-1'>SESSION SUMMARY</p>
        <div className='grid grid-cols-4 gap-2'>
          <div className='rounded-lg border border-white/5 bg-[#031525]/50 p-3 text-center'>
            <p className='text-sm font-bold text-[#ff3366]'>0</p>
            <p className='text-[6px] font-bold tracking-widest text-white/40 mt-1 break-words'>DETECTIONS</p>
          </div>
          <div className='rounded-lg border border-white/5 bg-[#031525]/50 p-3 text-center'>
            <p className='text-sm font-bold text-[#ff9900]'>0</p>
            <p className='text-[6px] font-bold tracking-widest text-white/40 mt-1 break-words'>POSSIBLES</p>
          </div>
          <div className='rounded-lg border border-white/5 bg-[#031525]/50 p-3 text-center'>
            <p className='text-sm font-bold text-white'>0.0%</p>
            <p className='text-[6px] font-bold tracking-widest text-white/40 mt-1 break-words'>DET. RATE</p>
          </div>
          <div className='rounded-lg border border-white/5 bg-[#031525]/50 p-3 text-center'>
            <p className='text-sm font-bold text-[#00ffcc]'>+0.00</p>
            <p className='text-[6px] font-bold tracking-widest text-white/40 mt-1 break-words'>PEAK Z</p>
          </div>
        </div>
      </div>

      <div className='rounded-xl border border-white/5 bg-[#031525]/50 p-4 h-40 flex items-center justify-center'>
        <p className='text-[10px] text-white/30'>Collecting data...</p>
      </div>

      <div className='rounded-xl border border-white/5 bg-[#031525]/50 p-4'>
        <p className='text-[9px] font-bold tracking-[0.25em] text-[#00ffcc] mb-2'>EVENT LOG</p>
        <p className='text-[8px] text-white/30 mb-6'>Status changes (latest first)</p>
        <div className='text-center pb-4'>
          <p className='text-[9px] text-white/30'>No events recorded yet</p>
        </div>
      </div>
    </div>
  </div>
)

const RadarConfig = () => (
  <div className='h-full overflow-y-auto pb-24 scrollbar-hide'>
    <RadarHeader label="SETTINGS" />
    <div className='px-4 pt-4 space-y-4'>
      
      <div className='rounded-lg border border-[#ff9900]/30 bg-[#ff9900]/10 p-3'>
        <p className='text-[10px] text-[#ff9900] leading-relaxed font-medium'>
          ⚠️ Settings changes will apply once connected. Go to the Connection page to connect.
        </p>
      </div>

      <div className='rounded-xl border border-white/5 bg-[#031525]/50 p-4'>
        <p className='text-[9px] font-bold tracking-[0.25em] text-[#00ffcc] mb-2'>DETECTION THRESHOLDS</p>
        <p className='text-[8px] text-white/40 leading-relaxed mb-4'>
          Z-score measures how many standard deviations the current signal deviates from the baseline. Lower threshold = more sensitive but more false positives.
        </p>
        
        <div className='flex gap-1 mb-2'>
          {[-2, -1, 0, 1, 2, 3, 4, 5].map(val => (
            <div key={val} className={`flex-1 h-8 rounded-sm ${val === 0 ? 'bg-[#00ffcc]' : val > 0 && val < 3 ? 'bg-[#ff9900]' : val >= 3 ? 'bg-[#ff3366]' : 'bg-white/5'}`} />
          ))}
        </div>
        
        <div className='mt-6 space-y-4'>
          <div>
            <p className='text-[9px] text-white/60 mb-2'>Detect Threshold — currently 2.5σ</p>
            <div className='flex items-center gap-3'>
              <button className='w-6 h-6 rounded bg-white/5 text-white/50'>-</button>
              <div className='flex-1 h-1 bg-white/5 rounded-full relative'>
                <div className='absolute left-0 h-full w-1/2 bg-[#00ffcc] rounded-full' />
              </div>
              <button className='w-6 h-6 rounded bg-white/5 text-white/50'>+</button>
            </div>
          </div>
          <div>
            <p className='text-[9px] text-white/60 mb-2'>Possible Threshold — currently 1.5σ</p>
            <div className='flex items-center gap-3'>
              <button className='w-6 h-6 rounded bg-white/5 text-white/50'>-</button>
              <div className='flex-1 h-1 bg-white/5 rounded-full relative'>
                <div className='absolute left-0 h-full w-1/3 bg-[#00ffcc] rounded-full' />
              </div>
              <button className='w-6 h-6 rounded bg-white/5 text-white/50'>+</button>
            </div>
          </div>
        </div>

        <p className='text-[8px] font-bold tracking-[0.2em] text-white/30 mt-6 mb-2'>QUICK PRESETS</p>
        <div className='grid grid-cols-3 gap-2'>
          <button className='py-2 rounded border border-white/5 bg-white/[0.02] text-center'>
            <p className='text-[9px] font-semibold text-white/70'>Max Sensitive</p>
          </button>
          <button className='py-2 rounded border border-[#00ffcc]/40 bg-[#00ffcc]/10 text-center'>
            <p className='text-[9px] font-semibold text-[#00ffcc]'>Balanced</p>
          </button>
          <button className='py-2 rounded border border-white/5 bg-white/[0.02] text-center'>
            <p className='text-[9px] font-semibold text-white/70'>Low False+</p>
          </button>
        </div>
      </div>

    </div>
  </div>
)

const RadarConnection = () => (
  <div className='h-full overflow-y-auto pb-24 scrollbar-hide'>
    <RadarHeader label="CONNECTION" />
    <div className='px-4 pt-4 space-y-4'>
      
      <div className='rounded-xl border border-white/5 bg-[#031525]/50 p-6 text-center'>
        <div className='w-4 h-4 rounded-full bg-white/10 mx-auto mb-3' />
        <p className='text-sm font-bold tracking-[0.3em] text-white/50'>DISCONNECTED</p>
      </div>

      <div className='rounded-xl border border-[#00ffcc]/10 bg-[#031525]/50 p-4'>
        <p className='text-[9px] font-bold tracking-[0.25em] text-[#00ffcc] mb-2'>ESP32 RECEIVER</p>
        <p className='text-[8px] text-white/40 mb-4'>Enter the IP address shown in Serial Monitor after flashing.</p>
        
        <p className='text-[8px] text-white/30 mb-1'>WebSocket Address</p>
        <div className='flex items-center rounded-lg border border-white/10 bg-[#020b14] p-3 text-sm font-mono text-white'>
          <span className='text-white/30 mr-2'>ws://</span>
          192.168.1.100
          <span className='text-white/30 ml-auto'>:81</span>
        </div>

        <button className='w-full mt-5 py-3 rounded-lg bg-[#00ffcc] text-[#020b14] font-bold tracking-widest text-[10px] flex justify-center items-center gap-2'>
          <FiWifi /> CONNECT
        </button>
      </div>

      <div className='rounded-xl border border-white/5 bg-[#031525]/50 p-4'>
        <p className='text-[9px] font-bold tracking-[0.25em] text-[#00ffcc] mb-2'>HARDWARE CHECKLIST</p>
        <div className='space-y-3 mt-4'>
          {[
            'ESP32 flashed with receiver sketch',
            'WiFi credentials updated',
            'ESP8266 transmitter running',
            'nRF24L01+ modules on same channel',
            'Phone on same WiFi network'
          ].map((text, i) => (
            <div key={i} className='flex items-center gap-3'>
              <FiCheckCircle className='text-[#00ffcc] text-xs shrink-0' />
              <span className='text-[9px] text-white/50'>{text}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
)

const RadarPhoneApp = () => {
  const [activeTab, setActiveTab] = useState('dash')

  const renderContent = () => {
    switch (activeTab) {
      case 'dash': return <RadarDashboard />
      case 'data': return <RadarAnalytics />
      case 'config': return <RadarConfig />
      case 'link': return <RadarConnection />
      default: return <RadarDashboard />
    }
  }

  return (
    <div className='wardrobe-device-float mx-auto relative'>
      {/* 
        We reuse wardrobe-phone-shell but the inner container uses radar styles.
        We can just wrap it internally.
      */}
      <div className='wardrobe-phone-shell'>
        <span className='wardrobe-side-button wardrobe-side-button-left' />
        <span className='wardrobe-side-button wardrobe-side-button-right' />
        <div className='wardrobe-phone-frame'>
          <div className='wardrobe-phone-screen !bg-[#020b14]'>
            <span className='wardrobe-screen-reflection' />
            <RadarStatus />
            <AnimatePresence mode='wait'>
              <Motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className='absolute inset-0 pt-9'
              >
                {renderContent()}
              </Motion.div>
            </AnimatePresence>
            <RadarNav active={activeTab} setActive={setActiveTab} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RadarPhoneApp

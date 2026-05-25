import React, { useState, useEffect, useMemo } from 'react'
import { motion as Motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import {
  FiArchive,
  FiCamera,
  FiLayers,
  FiMessageCircle,
  FiSearch,
  FiShoppingBag,
  FiSliders,
  FiHome,
  FiWatch
} from 'react-icons/fi'

const screens = [
  { key: 'home', label: 'Home Dashboard', mood: 'morning', nav: 'Home' },
  { key: 'scan', label: 'AI Clothing Scan', mood: 'rain', nav: 'Scan' },
  { key: 'analysis', label: 'Analysis Result', mood: 'evening', nav: 'Scan' },
  { key: 'outfit', label: 'Outfit Recommendation', mood: 'morning', nav: 'Looks' },
  { key: 'complete', label: 'Complete the Look', mood: 'evening', nav: 'Looks' },
  { key: 'weather', label: 'Weather-Adaptive Home', mood: 'night', nav: 'Home' },
  { key: 'assistant', label: 'AI Stylist Assistant', mood: 'rain', nav: 'Stylist' },
]

const palette = ['#c9a55d', '#806348', '#f0ece1', '#191a14']

const screenVariants = {
  enter: { opacity: 0, y: 24, scale: 0.985, filter: 'blur(8px)' },
  center: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -18,
    scale: 1.012,
    filter: 'blur(8px)',
    transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
  },
}

const ProgressRail = ({ activeIndex }) => (
  <div className='mt-5 flex gap-2'>
    {screens.map((screen, index) => (
      <span
        key={screen.key}
        className={`h-[3px] flex-1 rounded-full transition-colors duration-500 ${
          index === activeIndex ? 'bg-[#d7b46a]' : 'bg-white/[0.15]'
        }`}
      />
    ))}
  </div>
)

const GarmentArtwork = ({ compact = false }) => (
  <div className={`wardrobe-garment ${compact ? 'wardrobe-garment-compact' : ''}`}>
    <div className='wardrobe-garment-collar' />
    <div className='wardrobe-garment-body' />
    <div className='wardrobe-garment-left' />
    <div className='wardrobe-garment-right' />
    <div className='wardrobe-garment-placket' />
    <div className='wardrobe-garment-pocket wardrobe-garment-pocket-left' />
    <div className='wardrobe-garment-pocket wardrobe-garment-pocket-right' />
  </div>
)

const PhoneStatus = () => (
  <div className='relative z-20 flex items-center justify-between px-5 pt-4 text-[10px] font-semibold text-white/[0.85]'>
    <span>6:18</span>
    <div className='absolute left-1/2 top-[15px] h-4 w-4 -translate-x-1/2 rounded-full border border-white/10 bg-[#070707] shadow-[inset_0_0_8px_rgba(255,255,255,0.12)]'>
      <span className='absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#151827]' />
    </div>
    <div className='flex items-center gap-1'>
      <span className='h-2 w-3 rounded-[2px] bg-white/[0.85]' />
      <span className='h-2 w-2 rotate-45 border-l border-t border-white/[0.85]' />
      <span className='h-3 w-[6px] rounded-[1px] border border-white/[0.85]' />
    </div>
  </div>
)

const AppHeader = ({ label = 'WARDROBE IQ' }) => (
  <div className='relative z-10 flex items-center justify-between border-b border-white/[0.08] px-5 pb-3 pt-5'>
    <span className='text-white/[0.55]'>
      <FiSliders />
    </span>
    <span className='whitespace-nowrap font-serif text-[18px] font-bold tracking-[0.16em] text-white'>{label}</span>
    <span className='text-white/[0.55]'>
      <FiSearch />
    </span>
  </div>
)

const PhoneNav = ({ active }) => {
  const items = [
    { label: 'Home', icon: FiHome },
    { label: 'Archive', icon: FiArchive },
    { label: 'Scan', icon: FiCamera },
    { label: 'Looks', icon: FiLayers },
    { label: 'Stylist', icon: FiMessageCircle },
  ]

  return (
    <div className='absolute inset-x-0 bottom-0 z-20 border-t border-white/10 bg-black/[0.88] px-4 pb-4 pt-3 backdrop-blur-md'>
      <div className='flex items-center justify-between'>
        {items.map((item) => {
          const Icon = item.icon
          const isActive = active === item.label

          return (
            <div
              key={item.label}
              className={`flex min-w-[36px] flex-col items-center gap-1 text-[8px] font-bold uppercase tracking-[0.1em] transition-colors duration-300 ${
                isActive ? 'text-[#d9b764]' : 'text-white/[0.42]'
              }`}
            >
              <Icon className='text-[18px]' />
              <span>{item.label}</span>
            </div>
          )
        })}
      </div>
      <span className='mx-auto mt-3 block h-[3px] w-24 rounded-full bg-white/[0.85]' />
    </div>
  )
}

const MetricCard = ({ icon, value, label, note }) => (
  <div className='rounded-lg border border-white/10 bg-[#191a14]/[0.92] p-3'>
    {React.createElement(icon, { className: 'mb-3 text-[18px] text-[#d9b764]' })}
    <p className='text-2xl font-semibold text-white'>{value}</p>
    <p className='mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/[0.55]'>{label}</p>
    <p className='mt-2 text-[10px] text-white/[0.35]'>{note}</p>
  </div>
)

const HomeDashboard = () => (
  <div>
    <AppHeader />
    <div className='px-5 pb-24 pt-6'>
      <p className='flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#d9b764]'>
        <span className='wardrobe-weather-dot' />
        Retrieving weather
      </p>
      <h3 className='mt-4 font-serif text-[34px] leading-tight text-white'>Style Insight</h3>
      <p className='mt-3 text-[13px] leading-6 text-white/[0.72]'>
        Aqua, embrace layered textures today. A tailored outer shell over fine-gauge knitwear reads
        intelligent, warm, and rain-ready.
      </p>

      <div className='mt-6 grid grid-cols-3 gap-3'>
        <MetricCard icon={FiShoppingBag} value='11' label='Items' note='Catalogued' />
        <MetricCard icon={FiLayers} value='1' label='Outfits' note='Composed' />
        <MetricCard icon={FiArchive} value='1' label='Saved' note='Pinned' />
      </div>

      <div className='wardrobe-preview-detail mt-7'>
        <div className='mb-3 flex items-center justify-between'>
          <h4 className='font-serif text-2xl text-white'>Curatorial Health</h4>
          <span className='text-[10px] font-bold uppercase tracking-[0.2em] text-white/[0.62]'>View metrics</span>
        </div>
        <div className='rounded-lg border border-white/10 bg-[#191a14] p-4'>
          <div className='flex items-center gap-4'>
            <div className='grid h-20 w-20 place-items-center rounded-full border-2 border-[#d9b764] text-xl font-semibold text-white'>
              55%
            </div>
            <div className='flex-1 space-y-3'>
              {[
                ['Active Rotation', '55%'],
                ['Archive / Seasonal', '45%'],
              ].map(([label, value]) => (
                <div key={label}>
                  <div className='mb-1 flex justify-between text-[11px] text-white/70'>
                    <span>{label}</span>
                    <span className='text-[#d9b764]'>{value}</span>
                  </div>
                  <span className='block h-[5px] overflow-hidden rounded-full bg-white/10'>
                    <Motion.span
                      className='block h-full rounded-full bg-[#d9b764]'
                      initial={{ width: 0 }}
                      animate={{ width: value }}
                      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='wardrobe-preview-detail mt-7 rounded-lg border border-white/10 bg-black/30 p-3'>
        <p className='mb-3 font-serif text-xl text-white'>The Edit</p>
        <div className='relative h-40 overflow-hidden rounded-md bg-[#efefea]'>
          <GarmentArtwork compact />
          <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4'>
            <span className='text-[10px] font-bold uppercase tracking-[0.22em] text-[#d9b764]'>Signature</span>
            <h5 className='font-serif text-3xl text-white'>Jacket</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const ScanScreen = () => (
  <div className='px-5 pb-24 pt-12'>
    <p className='text-[10px] font-bold uppercase tracking-[0.24em] text-[#d9b764]'>Vision intake</p>
    <h3 className='mt-2 font-serif text-[35px] leading-tight text-white'>AI Scan</h3>
    <p className='mt-3 text-[13px] leading-6 text-white/70'>
      Upload a garment. The simulated Cloudinary and AI prediction pipeline resolves the source of
      truth.
    </p>

    <div className='wardrobe-scan-stage mt-7'>
      <GarmentArtwork />
      <div className='wardrobe-scan-corners' />
      <Motion.div
        className='wardrobe-scan-line'
        initial={{ y: '-15%' }}
        animate={{ y: ['-15%', '115%', '-15%'] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
      />
      <Motion.div
        className='absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d9b764]/[0.55] bg-black/[0.58] px-4 py-2 text-center backdrop-blur'
        initial={{ opacity: 0, scale: 0.86 }}
        animate={{ opacity: [0, 1, 1, 0.9], scale: [0.86, 1, 1, 1.02] }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className='text-[9px] font-bold uppercase tracking-[0.2em] text-[#d9b764]'>98% AI</p>
        <p className='text-[11px] text-white/[0.78]'>Confidence</p>
      </Motion.div>
    </div>

    <Motion.div
      className='mt-5 rounded-lg border border-white/10 bg-[#191a14] p-4'
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.65 }}
    >
      <p className='text-[10px] font-bold uppercase tracking-[0.23em] text-[#d9b764]'>Detected garment</p>
      <h4 className='mt-2 font-serif text-2xl text-white'>Camel Trench Coat</h4>
      <div className='mt-4 grid grid-cols-2 gap-2'>
        {['Outerwear', 'Cotton Gabardine', 'Autumn Essential', 'Warm Neutral'].map((item, index) => (
          <Motion.span
            key={item}
            className='rounded-md border border-white/10 bg-black/[0.28] px-3 py-2 text-[10px] text-white/[0.68]'
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.12, duration: 0.45 }}
          >
            {item}
          </Motion.span>
        ))}
      </div>
      <div className='mt-4 flex items-center gap-2'>
        {palette.map((color) => (
          <span
            key={color}
            className='h-6 flex-1 rounded-full border border-white/[0.12]'
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </Motion.div>
  </div>
)

const AnalysisResult = () => (
  <div>
    <AppHeader />
    <div className='px-5 pb-24 pt-6'>
      <div className='rounded-lg border border-[#d9b764]/25 bg-[#191a14] p-4'>
        <p className='text-[10px] font-bold uppercase tracking-[0.24em] text-[#d9b764]'>Analysis result</p>
        <h3 className='mt-3 font-serif text-[32px] leading-tight text-white'>Camel Trench Coat</h3>
        <div className='mt-5 grid grid-cols-[96px_1fr] gap-4'>
          <div className='relative grid h-24 w-24 place-items-center rounded-full border border-[#d9b764]/[0.35] bg-black/[0.28]'>
            <Motion.span
              className='absolute inset-2 rounded-full border-2 border-[#d9b764]'
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            />
            <span className='text-2xl font-semibold text-white'>98%</span>
          </div>
          <div className='space-y-2'>
            {[
              ['Category', 'Outerwear'],
              ['Fabric read', 'Cotton Gabardine'],
              ['Seasonality', 'Autumn Essential'],
            ].map(([label, value]) => (
              <div key={label} className='rounded-md border border-white/10 bg-black/[0.24] px-3 py-2'>
                <p className='text-[9px] uppercase tracking-[0.18em] text-white/[0.35]'>{label}</p>
                <p className='mt-1 text-[12px] text-white/[0.78]'>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='mt-5 rounded-lg border border-white/10 bg-black/[0.28] p-4'>
        <p className='text-[10px] font-bold uppercase tracking-[0.24em] text-white/[0.45]'>Prediction engine</p>
        <div className='mt-4 space-y-3'>
          {['Image normalization', 'MobileNetV2 feature signal', 'Palette extraction', 'Metadata enrichment'].map((item, index) => (
            <div key={item} className='flex items-center gap-3'>
              <span className='grid h-7 w-7 place-items-center rounded-full border border-[#d9b764]/[0.35] text-[10px] text-[#d9b764]'>
                {index + 1}
              </span>
              <span className='text-[12px] text-white/[0.68]'>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-5 overflow-hidden rounded-lg border border-white/10 bg-[#efefea]'>
        <div className='relative h-44'>
          <GarmentArtwork compact />
        </div>
        <div className='bg-[#191a14] p-4'>
          <span className='text-[10px] font-bold uppercase tracking-[0.22em] text-[#d9b764]'>Luxury metadata</span>
          <p className='mt-2 text-[12px] leading-5 text-white/[0.68]'>
            High confidence outerwear with subdued taupe warmth, best paired with cream layers and
            polished steel accessories.
          </p>
        </div>
      </div>
    </div>
  </div>
)

const OutfitRecommendation = () => (
  <div>
    <AppHeader />
    <div className='px-5 pb-24 pt-6'>
      <div className='flex items-end justify-between gap-4'>
        <div>
          <p className='text-[10px] font-bold uppercase tracking-[0.24em] text-[#d9b764]'>Sunny / formal</p>
          <h3 className='mt-2 font-serif text-[32px] leading-tight text-white'>Monday office</h3>
        </div>
        <div className='rounded-md border border-[#d9b764]/[0.35] px-3 py-2 text-sm font-semibold text-[#d9b764]'>
          94%
        </div>
      </div>

      <div className='mt-6 grid grid-cols-3 gap-2'>
        {['Shirt', 'Trench', 'Loafers'].map((item, index) => (
          <Motion.div
            key={item}
            className='h-28 overflow-hidden rounded-md border border-white/10 bg-[#efefea]'
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.13, duration: 0.55 }}
          >
            <div className={`h-full ${index === 0 ? 'wardrobe-shirt' : index === 1 ? 'wardrobe-mini-coat' : 'wardrobe-loafer'}`} />
          </Motion.div>
        ))}
      </div>

      <div className='mt-5 rounded-lg border border-white/10 bg-[#191a14] p-4'>
        <p className='text-[10px] font-bold uppercase tracking-[0.24em] text-white/[0.45]'>Stylist note</p>
        <p className='mt-3 text-[13px] leading-6 text-white/[0.72]'>
          The trench provides structure while the pale base layer keeps the silhouette clean. Rain
          calls for matte leather and a slightly higher collar.
        </p>
      </div>

      <div className='mt-5 grid grid-cols-2 gap-3'>
        {[
          ['Compatibility', '94%', 'Palette and occasion align.'],
          ['Weather fit', 'Rain-ready', 'Layered but lightweight.'],
          ['Rotation lift', '+22%', 'Uses an under-worn piece.'],
          ['Formality', 'Polished', 'Office-safe, not stiff.'],
        ].map(([label, value, note]) => (
          <div key={label} className='rounded-lg border border-white/10 bg-black/[0.28] p-3'>
            <p className='text-[9px] uppercase tracking-[0.18em] text-white/[0.35]'>{label}</p>
            <p className='mt-2 text-[15px] font-semibold text-white'>{value}</p>
            <p className='mt-1 text-[10px] text-white/[0.42]'>{note}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const CompleteLook = () => (
  <div className='px-5 pb-24 pt-12'>
    <p className='text-[10px] font-bold uppercase tracking-[0.24em] text-[#d9b764]'>Luxury AI</p>
    <h3 className='mt-3 font-serif text-[36px] leading-[1.05] text-white'>Complete the look with intelligent restraint.</h3>
    <p className='mt-4 text-[13px] leading-6 text-white/[0.68]'>
      The recommendation engine finds the missing accessory, layer, or shoe that elevates the
      silhouette while preserving your style.
    </p>

    <div className='mt-7 space-y-3'>
      {[
        { icon: FiWatch, title: 'Silver chronograph', note: 'Improves visual balance by 18%.' },
        { icon: FiShoppingBag, title: 'Black leather boots', note: 'Anchors the trench with rain-aware polish.' },
        { icon: FiLayers, title: 'Cream knit layer', note: 'Softens the palette without flattening contrast.' },
        { icon: FiArchive, title: 'Charcoal scarf', note: 'Adds vertical rhythm and autumn depth.' },
      ].map((item, index) => {
        const Icon = item.icon

        return (
          <Motion.div
            key={item.title}
            className='flex items-center gap-3 rounded-lg border border-white/10 bg-[#191a14] p-3'
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.12 * index, duration: 0.55 }}
          >
            <span className='grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#d9b764]/[0.35] bg-black/[0.28] text-[#d9b764]'>
              <Icon />
            </span>
            <div>
              <p className='text-[13px] font-semibold text-white'>{item.title}</p>
              <p className='mt-1 text-[11px] leading-5 text-white/[0.54]'>{item.note}</p>
            </div>
          </Motion.div>
        )
      })}
    </div>

    <div className='mt-6 rounded-lg border border-[#d9b764]/25 bg-[#d9b764]/10 p-4'>
      <p className='text-[10px] font-bold uppercase tracking-[0.22em] text-[#d9b764]'>Outcome</p>
      <p className='mt-2 text-[13px] leading-6 text-white/[0.72]'>
        Adds polish, preserves proportion, and keeps the wardrobe recommendation editorial rather
        than transactional.
      </p>
    </div>
  </div>
)

const WeatherHome = () => (
  <div>
    <AppHeader />
    <div className='px-5 pb-24 pt-6'>
      <p className='text-[10px] font-bold uppercase tracking-[0.24em] text-[#d9b764]'>Atmosphere system</p>
      <h3 className='mt-3 font-serif text-[34px] leading-tight text-white'>Weather-aware home</h3>
      <p className='mt-3 text-[13px] leading-6 text-white/[0.68]'>
        Wardrobe IQ subtly reshapes light, contrast, and styling guidance as the day changes.
      </p>

      <div className='mt-7 grid grid-cols-2 gap-3'>
        {[
          ['Morning', 'Cool diffusion', 'bg-[#d8e4e7]'],
          ['Evening', 'Amber warmth', 'bg-[#c9a55d]'],
          ['Rain', 'Silver reflections', 'bg-[#9ca9af]'],
          ['Night', 'Cinematic blacks', 'bg-[#0b0c10]'],
        ].map(([label, note, color], index) => (
          <Motion.div
            key={label}
            className='rounded-lg border border-white/10 bg-[#191a14] p-4'
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <span className={`mb-6 block h-12 rounded-md ${color}`} />
            <p className='text-[13px] font-semibold text-white'>{label}</p>
            <p className='mt-1 text-[10px] text-white/[0.46]'>{note}</p>
          </Motion.div>
        ))}
      </div>

      <div className='mt-6 rounded-lg border border-white/10 bg-black/30 p-4'>
        <p className='text-[10px] font-bold uppercase tracking-[0.24em] text-white/[0.42]'>Today</p>
        <p className='mt-3 font-serif text-2xl leading-tight text-white'>Rain calls for layered texture and reflective metal.</p>
      </div>
    </div>
  </div>
)

const StylistAssistant = () => (
  <div>
    <AppHeader />
    <div className='px-5 pb-24 pt-6'>
      <p className='text-[10px] font-bold uppercase tracking-[0.24em] text-[#d9b764]'>AI stylist assistant</p>
      <h3 className='mt-3 font-serif text-[34px] leading-tight text-white'>Ask with context.</h3>

      <div className='mt-7 space-y-4'>
        {[
          ['user', 'Build a rain-ready office look around my camel trench.'],
          ['ai', 'Start with the trench, cream knitwear, black boots, and a silver watch. The metal detail improves visual balance by 18%.'],
          ['user', 'Make it more evening-ready.'],
          ['ai', 'Add a charcoal scarf and dark denim. Keep the accessory count low so the coat remains the anchor piece.'],
        ].map(([role, text], index) => (
          <Motion.div
            key={`${role}-${text}`}
            className={`max-w-[86%] rounded-lg border p-3 text-[12px] leading-5 ${
              role === 'user'
                ? 'ml-auto border-[#d9b764]/25 bg-[#d9b764]/12 text-white'
                : 'border-white/10 bg-[#191a14] text-white/[0.72]'
            }`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.22, duration: 0.45 }}
          >
            {text}
          </Motion.div>
        ))}
      </div>

      <div className='mt-7 rounded-full border border-white/10 bg-black/[0.35] px-4 py-3 text-[12px] text-white/[0.42]'>
        Find a smarter finish for this look...
      </div>
    </div>
  </div>
)

const ScreenContent = ({ screen }) => {
  const components = {
    home: <HomeDashboard />,
    scan: <ScanScreen />,
    analysis: <AnalysisResult />,
    outfit: <OutfitRecommendation />,
    complete: <CompleteLook />,
    weather: <WeatherHome />,
    assistant: <StylistAssistant />,
  }

  return components[screen.key]
}

const WardrobePhoneApp = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [userInteracted, setUserInteracted] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const cycleDelay = useMemo(() => (shouldReduceMotion ? 12000 : 8500), [shouldReduceMotion])

  useEffect(() => {
    if (userInteracted) return

    const cycle = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % screens.length)
    }, cycleDelay)

    return () => window.clearInterval(cycle)
  }, [cycleDelay, userInteracted])

  const handleSetActiveIndex = (index) => {
    setActiveIndex(index)
    setUserInteracted(true)
  }

  const screen = screens[activeIndex]

  return (
    <Motion.div
      className='wardrobe-device-float mx-auto'
      animate={shouldReduceMotion ? undefined : { y: [0, -10, 0], rotateX: [0, 1.2, 0] }}
      transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className='wardrobe-phone-shell'>
        <span className='wardrobe-side-button wardrobe-side-button-left' />
        <span className='wardrobe-side-button wardrobe-side-button-right' />
        <div className='wardrobe-phone-frame'>
          <div className={`wardrobe-phone-screen wardrobe-atmosphere-${screen.mood}`}>
            <span className='wardrobe-screen-reflection' />
            <PhoneStatus />
            <AnimatePresence mode='wait'>
              <Motion.div
                key={screen.key}
                variants={screenVariants}
                initial='enter'
                animate='center'
                exit='exit'
                className='absolute inset-0 overflow-hidden pt-9'
              >
                <ScreenContent screen={screen} />
              </Motion.div>
            </AnimatePresence>
            <PhoneNav active={screen.nav} />
          </div>
        </div>
      </div>

      <div className='mt-4 px-4'>
        <div className='flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.2em] text-white/[0.45]'>
          <span>{screen.label}</span>
          <span>{String(activeIndex + 1).padStart(2, '0')} / 07</span>
        </div>
        <ProgressRail activeIndex={activeIndex} />
        <div className='mt-3 flex flex-wrap justify-center gap-1.5'>
          {screens.map((item, index) => (
            <button
              key={item.key}
              type='button'
              aria-label={`Show ${item.label}`}
              onClick={() => handleSetActiveIndex(index)}
              className={`h-1.5 w-1.5 rounded-full border transition-all duration-300 ${
                index === activeIndex
                  ? 'w-6 border-[#d7b46a] bg-[#d7b46a]'
                  : 'border-white/20 bg-white/10 hover:border-white/[0.45]'
              }`}
            />
          ))}
        </div>
      </div>
    </Motion.div>
  )
}

export default WardrobePhoneApp

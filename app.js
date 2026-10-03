/**
 * Navithya Lanka - Home Services Portal (GetItDone.lk style)
 * Fully interactive application with Firebase Firestore Sync & LocalStorage persistence
 */

// ==========================================
// 1. SERVICES DATA (21 SRI LANKAN TRADES)
// ==========================================
const SERVICES_DATA = [
  { id: 'ac-technician', name: 'AC Technician', nameSi: 'AC කාර්මික', icon: 'wind', bg: 'bg-sky-100', text: 'text-sky-600' },
  { id: 'aluminium', name: 'Aluminium Fabrication', nameSi: 'ඇලුමිනියම් වැඩ', icon: 'wrench', bg: 'bg-sky-50', text: 'text-sky-600' },
  { id: 'carpentry', name: 'Carpenter', nameSi: 'වඩු කාර්මික', icon: 'hammer', bg: 'bg-orange-100', text: 'text-orange-600' },
  { id: 'cctv', name: 'CCTV Technician', nameSi: 'CCTV කාර්මික', icon: 'camera', bg: 'bg-purple-100', text: 'text-purple-600' },
  { id: 'cleaning', name: 'Cleaner', nameSi: 'පිරිසිදු කරන්නන්', icon: 'sparkles', bg: 'bg-teal-100', text: 'text-teal-600' },
  { id: 'electrician', name: 'Electrician', nameSi: 'විදුලි කාර්මික', icon: 'zap', bg: 'bg-amber-100', text: 'text-amber-600' },
  { id: 'equipment-repair', name: 'Equipment Repair', nameSi: 'උපකරණ අලුත්වැඩියාව', icon: 'laptop', bg: 'bg-purple-100', text: 'text-purple-600' },
  { id: 'gardener', name: 'Gardener', nameSi: 'වතු නඩත්තු', icon: 'leaf', bg: 'bg-green-100', text: 'text-green-600' },
  { id: 'glass-fabricator', name: 'Glass Fabricator', nameSi: 'වීදුරු වැඩ', icon: 'layers', bg: 'bg-cyan-100', text: 'text-cyan-600' },
  { id: 'handyman', name: 'Handyman', nameSi: 'හැන්ඩිමෑන්', icon: 'wrench', bg: 'bg-emerald-100', text: 'text-emerald-600' },
  { id: 'lathe-machining', name: 'Lathe Machining', nameSi: 'ලියවන පට්ටල්', icon: 'cog', bg: 'bg-slate-100', text: 'text-slate-700' },
  { id: 'masonry', name: 'Mason', nameSi: 'මේසන් බාස්', icon: 'hammer', bg: 'bg-orange-50', text: 'text-orange-700' },
  { id: 'motor-mechanic', name: 'Motor Mechanic', nameSi: 'මෝටර් කාර්මික', icon: 'car', bg: 'bg-indigo-100', text: 'text-indigo-600' },
  { id: 'painting', name: 'Painter', nameSi: 'පේන්ටර්', icon: 'paintbrush', bg: 'bg-rose-100', text: 'text-rose-600' },
  { id: 'pest-control', name: 'Pest Control', nameSi: 'කෘමි හානි පාලනය', icon: 'bug', bg: 'bg-emerald-100', text: 'text-emerald-700' },
  { id: 'plumber', name: 'Plumber', nameSi: 'නල කාර්මික', icon: 'droplets', bg: 'bg-blue-100', text: 'text-blue-600' },
  { id: 'roofing', name: 'Roofing Specialist', nameSi: 'වහල සෙවිලි', icon: 'hammer', bg: 'bg-red-50', text: 'text-red-600' },
  { id: 'solar', name: 'Solar Installer', nameSi: 'සූර්ය බල පද්ධති', icon: 'zap', bg: 'bg-yellow-50', text: 'text-yellow-600' },
  { id: 'tiles', name: 'Tiles Specialist', nameSi: 'ටයිල් වැඩ', icon: 'sparkles', bg: 'bg-indigo-50', text: 'text-indigo-600' },
  { id: 'waste-septic', name: 'Waste & Septic', nameSi: 'අපද්‍රව්‍ය ඉවත් කිරීම', icon: 'truck', bg: 'bg-teal-100', text: 'text-teal-700' },
  { id: 'welding', name: 'Welder', nameSi: 'වෙල්ඩින් වැඩ', icon: 'wrench', bg: 'bg-neutral-100', text: 'text-neutral-600' }
];

const POPULAR_REQUESTS = [
  { service: 'Electrician', problem: 'Power Failure', problemSi: 'විදුලිය විසන්ධි වීම', icon: 'zap', bg: 'bg-amber-100', text: 'text-amber-600' },
  { service: 'Plumber', problem: 'Water Leak', problemSi: 'ජලය කාන්දු වීම', icon: 'droplets', bg: 'bg-blue-100', text: 'text-blue-600' },
  { service: 'AC Technician', problem: 'AC Not Cooling', problemSi: 'AC සිසිල් නොවීම', icon: 'wind', bg: 'bg-sky-100', text: 'text-sky-600' },
  { service: 'Pest Control', problem: 'Pest Control', problemSi: 'වේයන් හා කෘමි පාලනය', icon: 'bug', bg: 'bg-emerald-100', text: 'text-emerald-700' },
  { service: 'CCTV Technician', problem: 'CCTV Setup', problemSi: 'CCTV සවිකිරීම', icon: 'camera', bg: 'bg-purple-100', text: 'text-purple-600' },
  { service: 'Handyman', problem: 'Door Lock Repair', problemSi: 'දොර අගුල් අලුත්වැඩියාව', icon: 'wrench', bg: 'bg-emerald-100', text: 'text-emerald-600' },
  { service: 'Electrician', problem: 'Fan Repair', problemSi: 'විදුලි පංකා අලුත්වැඩියාව', icon: 'star', bg: 'bg-indigo-100', text: 'text-indigo-600' }
];

// ==========================================
// 2. BILINGUAL TRANSLATIONS (EN / SI)
// ==========================================
let currentLang = 'en';

const TRANSLATIONS = {
  en: {
    topBanner: "Sri Lanka's #1 Platform for Verified Skilled Tradesmen & Technicians | Hotline: +94 77 123 4567",
    navHome: "Home",
    navServices: "Services",
    navCustomer: "Customer Portal",
    navWorker: "Worker Portal",
    navAdmin: "Admin",
    btnRequestWorker: "Request Worker",
    heroBadge: "NIC-Verified Professionals Only",
    heroTitle: "Trusted Home Service Workers in Sri Lanka",
    heroDesc: "Electricians, plumbers, AC techs and more — matched via WhatsApp in minutes.",
    heroCta: "Request a Worker",
    heroWhatsapp: "WhatsApp Us Directly",
    trustFree: "Free to submit",
    trustMatch: "Match in ~30 min",
    trustNoApp: "No app needed",
    servicesTitle: "What do you need help with?",
    servicesSubtitle: "Tap a service to get started with an identity-verified worker",
    popularTitle: "Popular Requests",
    popularSubtitle: "Tap your problem to get help instantly",
    howItWorksTitle: "How It Works",
    step1Title: "Choose a Service",
    step1Desc: "Tap the trade or repair issue you need fixed in your home or office.",
    step2Title: "Submit Your Details",
    step2Desc: "Provide your Sri Lanka district/city and WhatsApp contact number.",
    step3Title: "Get Matched via WhatsApp",
    step3Desc: "We match you with a verified worker profile with badge, rating & direct contact in ~30 min.",
    safetyTitle: "100% Sri Lanka NIC Verified",
    safetyDesc: "We manually review the National Identity Card (NIC), police background record, and trade skills of every technician before recommending them to your family.",
    btnBecomeWorker: "Become a Worker",
    custPortalTitle: "My Service Bookings & Tracking",
    custPortalDesc: "Track status, contact assigned worker, or place a new request.",
    workerRegTitle: "Join as a Verified Service Provider",
    workerRegDesc: "Get daily job requests in your district. Free registration & direct customer WhatsApp matching.",
    modalBookTitle: "Request a Verified Worker",
    modalBookDesc: "Tell us what you need. We will match an NIC-verified professional to your WhatsApp."
  },
  si: {
    topBanner: "ශ්‍රී ලංකාවේ තහවුරු කළ කාර්මික ශිල්පීන් සපයන අංක 1 වේදිකාව | ක්ෂණික ඇමතුම්: +94 77 123 4567",
    navHome: "මුල් පිටුව",
    navServices: "සේවාවන්",
    navCustomer: "පාරිභෝගික අංශය",
    navWorker: "සේවක අංශය",
    navAdmin: "පරිපාලක",
    btnRequestWorker: "සේවකයෙකු ඉල්ලුම් කරන්න",
    heroBadge: "ජාතික හැඳුනුම්පත තහවුරු කළ වෘත්තිකයින් පමණි",
    heroTitle: "ශ්‍රී ලංකාවේ විශ්වාසවන්ත ගෘහ සේවා වෘත්තිකයින්",
    heroDesc: "විදුලි, ජලනල, AC ඇතුළු සියලු සේවාවන් මිනිත්තු කිහිපයකින් WhatsApp හරහා ඔබට සම්බන්ධ කරදෙමු.",
    heroCta: "සේවකයෙකු ඉල්ලුම් කරන්න",
    heroWhatsapp: "WhatsApp මගින් සම්බන්ධ වන්න",
    trustFree: "නොමිලේ ඉල්ලුම් කරන්න",
    trustMatch: "මිනිත්තු 30 කින් සම්බන්ධ වීම",
    trustNoApp: "ඇප් එකක් අවශ්‍ය නැත",
    servicesTitle: "ඔබට අවශ්‍ය සේවාව කුමක්ද?",
    servicesSubtitle: "හැඳුනුම්පත තහවුරු කළ විශ්වාසවන්ත ශිල්පියෙකු ලබා ගැනීමට සේවාව තෝරන්න",
    popularTitle: "නිතර ඉල්ලුම් කරන සේවාවන්",
    popularSubtitle: "ඔබගේ ගැටලුව ක්ලික් කර වහාම උපකාර ලබා ගන්න",
    howItWorksTitle: "සේවාව ක්‍රියාත්මක වන ආකාරය",
    step1Title: "සේවාව තෝරන්න",
    step1Desc: "ඔබට අවශ්‍ය කාර්මික හෝ අලුත්වැඩියා සේවාව පහසුවෙන් තෝරන්න.",
    step2Title: "තොරතුරු ලබා දෙන්න",
    step2Desc: "ඔබගේ දිස්ත්‍රික්කය සහ WhatsApp දුරකථන අංකය ලබා දෙන්න.",
    step3Title: "WhatsApp හරහා වෘත්තිකයෙකු ලබා ගන්න",
    step3Desc: "මිනිත්තු 30ක් ඇතුළත තහවුරු කළ කාර්මික ශිල්පියාගේ විස්තර ඔබගේ WhatsApp වෙත එවනු ලැබේ.",
    safetyTitle: "100% ජාතික හැඳුනුම්පත් පරීක්ෂාව",
    safetyDesc: "ඔබගේ ආරක්ෂාව වෙනුවෙන් සෑම ශිල්පියෙකුගේම ජාතික හැඳුනුම්පත (NIC) සහ කුසලතා සම්පූර්ණයෙන් පරීක්ෂා කරනු ලැබේ.",
    btnBecomeWorker: "සේවකයෙකු ලෙස ලියාපදිංචි වන්න",
    custPortalTitle: "මගේ සේවා ඉල්ලීම් සහ ප්‍රගතිය",
    custPortalDesc: "ඉල්ලීම් තත්ත්වය නිරීක්ෂණය කරන්න, ශිල්පියා අමතන්න හෝ අලුත් ඉල්ලීමක් කරන්න.",
    workerRegTitle: "තහවුරු කළ සේවා සපයන්නෙකු වන්න",
    workerRegDesc: "ඔබගේ දිස්ත්‍රික්කයෙන් දිනපතා වැඩ ලබා ගන්න. සම්පූර්ණයෙන්ම නොමිලේ ලියාපදිංචි වන්න.",
    modalBookTitle: "සේවකයෙකු ඉල්ලුම් කරන්න",
    modalBookDesc: "ඔබට අවශ්‍ය සේවාව සඳහන් කරන්න. තහවුරු කළ ශිල්පියෙකු ඔබගේ WhatsApp වෙත යොමු කරනු ලැබේ."
  }
};

// ==========================================
// 3. INITIAL SEED DATA (LOCAL STORAGE + FIREBASE)
// ==========================================
const DEFAULT_WORKERS = [
  {
    id: 'w-1',
    name: 'Sunil Perera',
    category: 'Electrician',
    nic: '198212345678',
    phone: '0771234567',
    district: 'Colombo',
    experience: '10',
    rate: 'Rs. 3,500 / day',
    verified: true,
    available: true,
    rating: 4.9,
    jobsCompleted: 42,
    bio: 'Licensed electrician with 10+ years experience in domestic and commercial wiring, tripping diagnostics, and solar inverter setup.'
  },
  {
    id: 'w-2',
    name: 'Nimal Bandara',
    category: 'Plumber',
    nic: '198945678123',
    phone: '0719876543',
    district: 'Gampaha',
    experience: '8',
    rate: 'Rs. 3,000 / day',
    verified: true,
    available: true,
    rating: 4.8,
    jobsCompleted: 35,
    bio: 'Expert in high pressure pipe leakages, water pumps, overhead tanks, and bathroom fittings.'
  },
  {
    id: 'w-3',
    name: 'Chaminda Silva',
    category: 'AC Technician',
    nic: '199123456789',
    phone: '0765554321',
    district: 'Colombo',
    experience: '6',
    rate: 'Rs. 4,500 / service',
    verified: true,
    available: true,
    rating: 4.9,
    jobsCompleted: 58,
    bio: 'Certified Inverter AC specialist. Gas charging, coil cleaning, and motherboard repairs.'
  },
  {
    id: 'w-4',
    name: 'Samantha Kumara',
    category: 'Carpenter',
    nic: '198578912345',
    phone: '0751122334',
    district: 'Kalutara',
    experience: '12',
    rate: 'Rs. 3,500 / day',
    verified: true,
    available: true,
    rating: 4.7,
    jobsCompleted: 29,
    bio: 'Roof timber work, pantry cupboards, doors, windows, and custom wooden furniture repairs.'
  },
  {
    id: 'w-5',
    name: 'Ruwan Jayasuriya',
    category: 'Motor Mechanic',
    nic: '199345671234',
    phone: '0789988776',
    district: 'Colombo',
    experience: '5',
    rate: 'Rs. 2,500 / job',
    verified: false, // Under verification
    available: true,
    rating: 4.5,
    jobsCompleted: 12,
    bio: 'Mobile breakdown mechanic for Japanese, Indian cars, and scooters. On-site jumpstart and brake service.'
  }
];

const DEFAULT_REQUESTS = [
  {
    id: 'REQ-101',
    category: 'Electrician',
    title: 'Main breaker tripping constantly',
    desc: 'Whenever the AC or refrigerator turns on, the main trip switch goes down.',
    district: 'Colombo',
    city: 'Nugegoda',
    customerName: 'Kasun Fernando',
    customerPhone: '0774433221',
    urgent: true,
    status: 'Matched',
    assignedWorkerId: 'w-1',
    assignedWorkerName: 'Sunil Perera',
    date: '2026-09-29 14:15'
  },
  {
    id: 'REQ-102',
    category: 'Plumber',
    title: 'Water pump leaking at joint',
    desc: 'Severe leak from the delivery pipe joint going to overhead tank.',
    district: 'Gampaha',
    city: 'Kelaniya',
    customerName: 'Dilani Perera',
    customerPhone: '0712233445',
    urgent: false,
    status: 'Pending',
    assignedWorkerId: null,
    assignedWorkerName: null,
    date: '2026-09-29 15:10'
  },
  {
    id: 'REQ-103',
    category: 'AC Technician',
    title: 'Master bedroom AC not cooling',
    desc: 'Blower is running but blowing normal room temperature air. Needs gas check.',
    district: 'Colombo',
    city: 'Rajagiriya',
    customerName: 'Anura De Silva',
    customerPhone: '0779988112',
    urgent: false,
    status: 'In Progress',
    assignedWorkerId: 'w-3',
    assignedWorkerName: 'Chaminda Silva',
    date: '2026-09-29 11:30'
  }
];

// In-Memory state loaded from LocalStorage
let workers = JSON.parse(localStorage.getItem('navithya_workers')) || DEFAULT_WORKERS;
let requests = JSON.parse(localStorage.getItem('navithya_requests')) || DEFAULT_REQUESTS;
let loggedInWorker = null;
let currentAssignRequestId = null;

function saveState() {
  localStorage.setItem('navithya_workers', JSON.stringify(workers));
  localStorage.setItem('navithya_requests', JSON.stringify(requests));
}
saveState();

// ==========================================
// 4. FIREBASE FIRESTORE SYNC LAYER
// ==========================================
async function syncToFirebase(collectionName, data) {
  try {
    if (window.navithyaFirebaseDB) {
      await window.navithyaFirebaseDB.collection(collectionName).add({
        ...data,
        syncedAt: new Date().toISOString()
      });
      console.log(`Synced record to Firebase collection [${collectionName}]`);
    } else if (window.fAddDoc && window.fCollection && window.fdb) {
      await window.fAddDoc(window.fCollection(window.fdb, collectionName), {
        ...data,
        syncedAt: new Date().toISOString()
      });
      console.log(`Synced record to Firebase Firestore collection [${collectionName}]`);
    }
  } catch (err) {
    console.warn(`Firestore sync note (${collectionName}): using local persistence fallback:`, err.message);
  }
}

// ==========================================
// 5. INITIALIZATION & VIEW MANAGEMENT
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  renderPopularRequests();
  populateCategoryDropdowns();
  renderCustomerBookings();
  lucide.createIcons();

  // Check URL hash for direct links (e.g. #customer, #worker, #admin)
  const hash = window.location.hash.replace('#', '');
  if (hash === 'admin') {
    openAdminModal();
  } else if (['customer', 'worker', 'services'].includes(hash)) {
    switchView(hash);
  } else {
    switchView('home');
  }
});

function switchView(viewName) {
  document.querySelectorAll('.portal-view').forEach(el => el.classList.add('hidden'));

  const viewMap = {
    home: 'viewHome',
    services: 'viewHome', // scrolls to services
    customer: 'viewCustomer',
    worker: 'viewWorker',
    admin: 'viewAdmin'
  };

  const targetId = viewMap[viewName] || 'viewHome';
  const targetEl = document.getElementById(targetId);
  if (targetEl) {
    targetEl.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (viewName === 'services') {
    setTimeout(() => {
      document.getElementById('servicesSection')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }

  if (viewName === 'customer') {
    renderCustomerBookings();
  }
  if (viewName === 'worker') {
    switchWorkerSubTab('register');
  }
  if (viewName === 'admin') {
    renderAdminDashboard();
  }

  lucide.createIcons();
}

function toggleMobileMenu() {
  const m = document.getElementById('mobileMenu');
  m.classList.toggle('hidden');
}

// Language Switcher
function setLanguage(lang) {
  currentLang = lang;
  const enBtn = document.getElementById('langEnBtn');
  const siBtn = document.getElementById('langSiBtn');

  if (lang === 'si') {
    siBtn.className = "px-2 py-0.5 rounded-full bg-white text-blue-700 shadow-sm font-extrabold transition-all";
    enBtn.className = "px-2 py-0.5 rounded-full text-gray-500 font-semibold hover:text-blue-600 transition-all";
  } else {
    enBtn.className = "px-2 py-0.5 rounded-full bg-white text-blue-700 shadow-sm font-extrabold transition-all";
    siBtn.className = "px-2 py-0.5 rounded-full text-gray-500 font-semibold hover:text-blue-600 transition-all";
  }

  // Update text translations
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      el.textContent = TRANSLATIONS[lang][key];
    }
  });

  renderServices();
  renderPopularRequests();
  lucide.createIcons();
}

// ==========================================
// 6. RENDER HOMEPAGE ELEMENTS
// ==========================================
function renderServices() {
  const grid = document.getElementById('servicesGrid');
  if (!grid) return;

  grid.innerHTML = SERVICES_DATA.map(s => {
    const displayName = currentLang === 'si' ? s.nameSi : s.name;
    return `
      <div onclick="openBookingWithService('${s.name}')" 
           class="group flex flex-col items-center justify-center gap-3 p-5 rounded-2xl border border-gray-100 bg-white hover:border-blue-300 hover:bg-blue-50/40 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md">
        <div class="w-14 h-14 rounded-2xl ${s.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
          <i data-lucide="${s.icon}" class="w-7 h-7 ${s.text}"></i>
        </div>
        <span class="text-sm sm:text-base font-bold text-gray-800 text-center leading-tight group-hover:text-blue-700 transition-colors">
          ${displayName}
        </span>
      </div>
    `;
  }).join('');
}

function renderPopularRequests() {
  const grid = document.getElementById('popularGrid');
  if (!grid) return;

  grid.innerHTML = POPULAR_REQUESTS.map(p => {
    const displayProblem = currentLang === 'si' ? p.problemSi : p.problem;
    return `
      <div onclick="openBookingWithProblem('${p.service}', '${p.problem}')" 
           class="group flex items-center gap-3.5 p-4 rounded-2xl border border-gray-100 bg-white hover:border-blue-300 hover:bg-blue-50/30 transition-all duration-200 cursor-pointer shadow-sm hover:shadow">
        <div class="w-12 h-12 rounded-xl ${p.bg} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
          <i data-lucide="${p.icon}" class="w-6 h-6 ${p.text}"></i>
        </div>
        <div class="flex flex-col">
          <span class="text-xs font-bold text-blue-600 uppercase tracking-wider">${p.service}</span>
          <span class="text-sm sm:text-base font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
            ${displayProblem}
          </span>
        </div>
      </div>
    `;
  }).join('');
}

function populateCategoryDropdowns() {
  const selects = ['bCategory', 'wCategory', 'adminNewWorkerCategory', 'adminWorkerCategoryFilter'];
  selects.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;

    if (id === 'adminWorkerCategoryFilter') {
      el.innerHTML = '<option value="ALL">All Trades</option>' + SERVICES_DATA.map(s => `<option value="${s.name}">${s.name}</option>`).join('');
    } else {
      el.innerHTML = SERVICES_DATA.map(s => `<option value="${s.name}">${s.name} (${s.nameSi})</option>`).join('');
    }
  });
}

// ==========================================
// 7. BOOKING MODAL & SUBMISSION
// ==========================================
function openBookingModal() {
  document.getElementById('bookingModal').classList.remove('hidden');
  lucide.createIcons();
}

function closeBookingModal() {
  document.getElementById('bookingModal').classList.add('hidden');
}

function openBookingWithService(serviceName) {
  openBookingModal();
  const select = document.getElementById('bCategory');
  if (select) select.value = serviceName;
}

function openBookingWithProblem(serviceName, problemName) {
  openBookingModal();
  const catSelect = document.getElementById('bCategory');
  const titleInput = document.getElementById('bTitle');
  if (catSelect) catSelect.value = serviceName;
  if (titleInput) titleInput.value = problemName;
}

function quickSelectService(serviceName) {
  openBookingWithService(serviceName);
}

async function handleBookingSubmit(e) {
  e.preventDefault();

  const category = document.getElementById('bCategory').value;
  const title = document.getElementById('bTitle').value;
  const district = document.getElementById('bDistrict').value;
  const city = document.getElementById('bCity').value;
  const customerName = document.getElementById('bCustomerName').value;
  const customerPhone = document.getElementById('bCustomerPhone').value;
  const desc = document.getElementById('bDesc').value;
  const urgent = document.getElementById('bUrgent').checked;

  const newId = 'REQ-' + (100 + requests.length + 1);
  const now = new Date();
  const dateStr = now.toISOString().replace('T', ' ').slice(0, 16);

  const newRequest = {
    id: newId,
    category,
    title,
    desc,
    district,
    city,
    customerName,
    customerPhone,
    urgent,
    status: 'Pending',
    assignedWorkerId: null,
    assignedWorkerName: null,
    date: dateStr
  };

  requests.unshift(newRequest);
  saveState();
  await syncToFirebase('requests', newRequest);

  closeBookingModal();
  document.getElementById('bookingForm').reset();

  showToast('Booking Submitted!', `Your Request ID is ${newId}. We are matching a verified ${category} to your WhatsApp.`);

  // Auto-switch to customer portal to view the booking
  const phoneFilter = document.getElementById('customerPhoneFilter');
  if (phoneFilter) phoneFilter.value = customerPhone;
  switchView('customer');
}

// ==========================================
// 8. CUSTOMER PORTAL & TRACKING
// ==========================================
function renderCustomerBookings() {
  const container = document.getElementById('customerBookingsList');
  if (!container) return;

  const phoneFilter = document.getElementById('customerPhoneFilter')?.value.trim();
  let filtered = requests;

  if (phoneFilter) {
    filtered = requests.filter(r => r.customerPhone.includes(phoneFilter));
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="text-center py-12 bg-gray-50 rounded-2xl border border-gray-100">
        <i data-lucide="inbox" class="w-10 h-10 text-gray-300 mx-auto mb-3"></i>
        <p class="text-sm font-bold text-gray-600">No bookings found</p>
        <p class="text-xs text-gray-400 mt-1">Submit a new request or check your phone number</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  container.innerHTML = filtered.map(r => {
    let statusBadge = '';
    if (r.status === 'Pending') {
      statusBadge = '<span class="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span> Matching Worker (~30m)</span>';
    } else if (r.status === 'Matched') {
      statusBadge = '<span class="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 flex items-center gap-1"><i data-lucide="check" class="w-3.5 h-3.5"></i> Worker Matched</span>';
    } else if (r.status === 'In Progress') {
      statusBadge = '<span class="px-2.5 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-800 flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-purple-500"></span> In Progress</span>';
    } else if (r.status === 'Completed') {
      statusBadge = '<span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 flex items-center gap-1"><i data-lucide="check-check" class="w-3.5 h-3.5"></i> Completed</span>';
    }

    const assignedWorker = workers.find(w => w.id === r.assignedWorkerId);

    return `
      <div class="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-3 mb-3">
          <div class="flex items-center gap-2">
            <span class="text-xs font-mono font-bold text-gray-500">${r.id}</span>
            <span class="text-gray-300">•</span>
            <span class="text-xs font-bold text-blue-600">${r.category}</span>
            ${r.urgent ? '<span class="text-[10px] font-black uppercase px-2 py-0.5 bg-red-100 text-red-700 rounded-md">Urgent</span>' : ''}
          </div>
          <div>${statusBadge}</div>
        </div>

        <h4 class="text-base font-bold text-gray-900 mb-1">${r.title}</h4>
        <p class="text-xs text-gray-500 mb-3">${r.desc || 'No additional notes'}</p>
        
        <div class="text-xs text-gray-600 flex flex-wrap gap-4 mb-4">
          <span class="flex items-center gap-1"><i data-lucide="map-pin" class="w-3.5 h-3.5 text-gray-400"></i> ${r.city}, ${r.district}</span>
          <span class="flex items-center gap-1"><i data-lucide="calendar" class="w-3.5 h-3.5 text-gray-400"></i> ${r.date}</span>
        </div>

        ${assignedWorker ? `
          <div class="bg-emerald-50/70 border border-emerald-200 rounded-xl p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-emerald-200 text-emerald-800 flex items-center justify-center font-bold text-sm">
                ${assignedWorker.name.charAt(0)}
              </div>
              <div>
                <div class="flex items-center gap-1.5">
                  <span class="text-sm font-bold text-gray-900">${assignedWorker.name}</span>
                  <span class="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                    <i data-lucide="shield-check" class="w-3 h-3 text-emerald-600"></i> NIC Verified
                  </span>
                </div>
                <div class="text-xs text-gray-600">Tel: ${assignedWorker.phone} | Exp: ${assignedWorker.experience} yrs</div>
              </div>
            </div>

            <div class="flex items-center gap-2">
              <a href="https://wa.me/94${assignedWorker.phone.replace(/^0/, '')}?text=Hello%20${encodeURIComponent(assignedWorker.name)},%20I%20am%20${encodeURIComponent(r.customerName)}%20from%20Navithya%20regarding%20booking%20${r.id}" target="_blank" 
                 class="py-1.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm">
                <i data-lucide="message-circle" class="w-3.5 h-3.5"></i> Chat on WhatsApp
              </a>
              <a href="tel:${assignedWorker.phone}" class="py-1.5 px-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-xs font-bold flex items-center gap-1">
                <i data-lucide="phone" class="w-3.5 h-3.5"></i> Call
              </a>
            </div>
          </div>
        ` : `
          <div class="bg-gray-50 border border-dashed border-gray-200 rounded-xl p-3 text-center text-xs text-gray-500">
            ⏳ We are currently screening and assigning an available verified ${r.category} in ${r.district}. You will receive a WhatsApp message shortly.
          </div>
        `}
      </div>
    `;
  }).join('');

  lucide.createIcons();
}

// ==========================================
// 9. WORKER PORTAL (REGISTER & DASHBOARD)
// ==========================================
function switchWorkerSubTab(tab) {
  const regTab = document.getElementById('workerTabRegister');
  const dashTab = document.getElementById('workerTabDashboard');
  const regPane = document.getElementById('workerRegisterPane');
  const dashPane = document.getElementById('workerDashboardPane');

  if (tab === 'register') {
    regTab.className = "py-2 px-6 rounded-xl text-sm font-bold bg-white text-blue-700 shadow-sm transition-all";
    dashTab.className = "py-2 px-6 rounded-xl text-sm font-bold text-gray-600 hover:text-gray-900 transition-all";
    regPane.classList.remove('hidden');
    dashPane.classList.add('hidden');
  } else {
    dashTab.className = "py-2 px-6 rounded-xl text-sm font-bold bg-white text-blue-700 shadow-sm transition-all";
    regTab.className = "py-2 px-6 rounded-xl text-sm font-bold text-gray-600 hover:text-gray-900 transition-all";
    dashPane.classList.remove('hidden');
    regPane.classList.add('hidden');
  }
  lucide.createIcons();
}

async function handleWorkerRegister(e) {
  e.preventDefault();

  const name = document.getElementById('wName').value;
  const nic = document.getElementById('wNic').value;
  const phone = document.getElementById('wPhone').value;
  const category = document.getElementById('wCategory').value;
  const district = document.getElementById('wDistrict').value;
  const experience = document.getElementById('wExperience').value || '1';
  const rate = document.getElementById('wRate').value || 'Negotiable';
  const bio = document.getElementById('wBio').value;

  const newWorker = {
    id: 'w-' + (workers.length + 1),
    name,
    nic,
    phone,
    category,
    district,
    experience,
    rate,
    bio,
    verified: false, // Must be verified by admin
    available: true,
    rating: 5.0,
    jobsCompleted: 0
  };

  workers.unshift(newWorker);
  saveState();
  await syncToFirebase('workers', newWorker);

  document.getElementById('workerRegistrationForm').reset();
  showToast('Registration Submitted!', 'Your profile is submitted. The admin team will verify your NIC to activate your verified badge.');

  // Auto login worker to show dashboard
  loggedInWorker = newWorker;
  switchWorkerSubTab('dashboard');
  renderWorkerDashboard();
}

function handleWorkerLogin() {
  const idInput = document.getElementById('workerLoginIdentifier')?.value.trim();
  if (!idInput) {
    alert('Please enter your phone number or NIC');
    return;
  }

  const worker = workers.find(w => w.phone.includes(idInput) || w.nic.toLowerCase() === idInput.toLowerCase());
  if (worker) {
    loggedInWorker = worker;
    renderWorkerDashboard();
  } else {
    alert('Worker not found with that Phone/NIC. Please register first or check details.');
  }
}

function renderWorkerDashboard() {
  const profileArea = document.getElementById('workerProfileStatusArea');
  const jobsArea = document.getElementById('workerJobsArea');
  if (!loggedInWorker) return;

  profileArea.innerHTML = `
    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-5 mb-6">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div class="flex items-center gap-2">
            <h3 class="text-xl font-black text-gray-900">${loggedInWorker.name}</h3>
            ${loggedInWorker.verified 
              ? '<span class="badge-verified px-2.5 py-0.5 rounded-full text-xs font-bold flex items-center gap-1"><i data-lucide="shield-check" class="w-3.5 h-3.5"></i> NIC Verified</span>'
              : '<span class="badge-pending px-2.5 py-0.5 rounded-full text-xs font-bold flex items-center gap-1"><i data-lucide="clock" class="w-3.5 h-3.5"></i> Pending Admin NIC Verification</span>'
            }
          </div>
          <div class="text-xs text-gray-600 mt-1 flex flex-wrap gap-3">
            <span>Trade: <strong>${loggedInWorker.category}</strong></span>
            <span>District: <strong>${loggedInWorker.district}</strong></span>
            <span>NIC: <strong>${loggedInWorker.nic}</strong></span>
            <span>Rate: <strong>${loggedInWorker.rate}</strong></span>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <button onclick="toggleWorkerAvailability()" class="py-2 px-4 rounded-xl text-xs font-bold ${loggedInWorker.available ? 'bg-emerald-600 text-white' : 'bg-gray-300 text-gray-700'}">
            ${loggedInWorker.available ? '🟢 Available for Jobs' : '🔴 Currently Busy'}
          </button>
        </div>
      </div>
    </div>
  `;

  // Find jobs assigned to this worker
  const myJobs = requests.filter(r => r.assignedWorkerId === loggedInWorker.id);

  if (myJobs.length === 0) {
    jobsArea.innerHTML = `
      <div class="text-center py-10 bg-gray-50 rounded-2xl border border-gray-200">
        <i data-lucide="briefcase" class="w-10 h-10 text-gray-400 mx-auto mb-2"></i>
        <h4 class="text-sm font-bold text-gray-700">No Assigned Jobs Right Now</h4>
        <p class="text-xs text-gray-500 mt-1">When an admin matches a customer in ${loggedInWorker.district} for ${loggedInWorker.category}, it will appear here.</p>
      </div>
    `;
  } else {
    jobsArea.innerHTML = `
      <h4 class="text-sm font-black text-gray-900 uppercase tracking-wider mb-3">Jobs Assigned to You (${myJobs.length})</h4>
      <div class="space-y-3">
        ${myJobs.map(j => `
          <div class="p-4 rounded-2xl border border-gray-200 bg-white shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="text-xs font-bold text-blue-600">${j.id}</span>
                <span class="text-xs font-bold text-gray-800">${j.title}</span>
                <span class="text-[10px] font-bold px-2 py-0.5 bg-blue-100 text-blue-700 rounded">${j.status}</span>
              </div>
              <div class="text-xs text-gray-600">Customer: <strong>${j.customerName}</strong> (${j.customerPhone})</div>
              <div class="text-xs text-gray-500">Location: ${j.city}, ${j.district} | ${j.desc}</div>
            </div>

            <div class="flex items-center gap-2">
              <a href="https://wa.me/94${j.customerPhone.replace(/^0/, '')}?text=Hello%20${encodeURIComponent(j.customerName)},%20I%20am%20${encodeURIComponent(loggedInWorker.name)}%20from%20Navithya%20regarding%20job%20${j.id}" target="_blank" 
                 class="py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-1 shadow-sm">
                <i data-lucide="message-circle" class="w-3.5 h-3.5"></i> WhatsApp Customer
              </a>

              ${j.status !== 'Completed' ? `
                <button onclick="updateJobStatus('${j.id}', 'In Progress')" class="py-2 px-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold">
                  Start Job
                </button>
                <button onclick="updateJobStatus('${j.id}', 'Completed')" class="py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold">
                  Mark Complete
                </button>
              ` : `
                <span class="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
                  ✓ Job Done
                </span>
              `}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  lucide.createIcons();
}

function toggleWorkerAvailability() {
  if (!loggedInWorker) return;
  loggedInWorker.available = !loggedInWorker.available;
  const idx = workers.findIndex(w => w.id === loggedInWorker.id);
  if (idx !== -1) workers[idx].available = loggedInWorker.available;
  saveState();
  renderWorkerDashboard();
}

function updateJobStatus(jobId, newStatus) {
  const req = requests.find(r => r.id === jobId);
  if (req) {
    req.status = newStatus;
    saveState();
    renderWorkerDashboard();
    showToast('Status Updated', `Job ${jobId} is now marked as ${newStatus}`);
  }
}

// ==========================================
// 10. ADMINISTRATOR PANEL (admin / admin)
// ==========================================
function openAdminModal() {
  // If already logged in, switch directly to admin view
  if (sessionStorage.getItem('navithya_admin_logged') === 'true') {
    switchView('admin');
  } else {
    document.getElementById('adminLoginModal').classList.remove('hidden');
    lucide.createIcons();
  }
}

function closeAdminModal() {
  document.getElementById('adminLoginModal').classList.add('hidden');
}

function autofillAdmin() {
  document.getElementById('adminUser').value = 'admin';
  document.getElementById('adminPass').value = 'admin';
}

function handleAdminLogin(e) {
  e.preventDefault();
  const u = document.getElementById('adminUser').value.trim();
  const p = document.getElementById('adminPass').value.trim();

  // Explicitly requested credentials: user: admin / pass: admin
  if (u === 'admin' && p === 'admin') {
    sessionStorage.setItem('navithya_admin_logged', 'true');
    closeAdminModal();
    switchView('admin');
    showToast('Admin Logged In', 'Welcome back, Administrator!');
  } else {
    document.getElementById('adminLoginError').classList.remove('hidden');
  }
}

function logoutAdmin() {
  sessionStorage.removeItem('navithya_admin_logged');
  switchView('home');
  showToast('Logged Out', 'You have been logged out of the admin panel.');
}

function switchAdminSubTab(tab) {
  const btnReq = document.getElementById('adminTabBtnRequests');
  const btnWrk = document.getElementById('adminTabBtnWorkers');
  const paneReq = document.getElementById('adminPaneRequests');
  const paneWrk = document.getElementById('adminPaneWorkers');

  if (tab === 'requests') {
    btnReq.className = "py-2.5 px-5 rounded-xl text-sm font-bold bg-blue-600 text-white shadow-sm flex items-center gap-2";
    btnWrk.className = "py-2.5 px-5 rounded-xl text-sm font-bold text-gray-600 hover:text-gray-900 hover:bg-gray-100 flex items-center gap-2";
    paneReq.classList.remove('hidden');
    paneWrk.classList.add('hidden');
    renderAdminRequests();
  } else {
    btnWrk.className = "py-2.5 px-5 rounded-xl text-sm font-bold bg-blue-600 text-white shadow-sm flex items-center gap-2";
    btnReq.className = "py-2.5 px-5 rounded-xl text-sm font-bold text-gray-600 hover:text-gray-900 hover:bg-gray-100 flex items-center gap-2";
    paneWrk.classList.remove('hidden');
    paneReq.classList.add('hidden');
    renderAdminWorkers();
  }
  lucide.createIcons();
}

function renderAdminDashboard() {
  // Update KPI counters
  document.getElementById('statTotalRequests').textContent = requests.length;
  document.getElementById('statPendingRequests').textContent = requests.filter(r => r.status === 'Pending').length;
  document.getElementById('statVerifiedWorkers').textContent = workers.filter(w => w.verified).length;
  document.getElementById('statCompletedJobs').textContent = requests.filter(r => r.status === 'Completed').length;

  renderAdminRequests();
  renderAdminWorkers();
}

function renderAdminRequests() {
  const tbody = document.getElementById('adminRequestsTableBody');
  if (!tbody) return;

  const statusFilter = document.getElementById('adminRequestStatusFilter')?.value || 'ALL';
  const search = document.getElementById('adminRequestSearch')?.value.toLowerCase() || '';

  let filtered = requests;
  if (statusFilter !== 'ALL') {
    filtered = filtered.filter(r => r.status === statusFilter);
  }
  if (search) {
    filtered = filtered.filter(r => 
      r.id.toLowerCase().includes(search) ||
      r.customerName.toLowerCase().includes(search) ||
      r.customerPhone.includes(search) ||
      r.district.toLowerCase().includes(search) ||
      r.category.toLowerCase().includes(search)
    );
  }

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="py-8 text-center text-xs text-gray-400">No requests found matching criteria.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(r => {
    let badgeClass = 'bg-gray-100 text-gray-800';
    if (r.status === 'Pending') badgeClass = 'bg-amber-100 text-amber-800';
    if (r.status === 'Matched') badgeClass = 'bg-blue-100 text-blue-800';
    if (r.status === 'In Progress') badgeClass = 'bg-purple-100 text-purple-800';
    if (r.status === 'Completed') badgeClass = 'bg-emerald-100 text-emerald-800';

    const assignedWorker = workers.find(w => w.id === r.assignedWorkerId);

    // WhatsApp match message for customer
    const whatsappMsgCustomer = `Hello ${r.customerName}, your Navithya service request (${r.id}) for ${r.category} has been matched! Your verified technician is ${assignedWorker ? assignedWorker.name : ''} (Tel: ${assignedWorker ? assignedWorker.phone : ''}, NIC Verified). He will contact you shortly.`;

    return `
      <tr class="hover:bg-gray-50/80 transition-colors">
        <td class="py-3.5 px-4 font-mono text-xs">
          <div class="font-bold text-gray-900">${r.id}</div>
          <div class="text-[10px] text-gray-400">${r.date}</div>
        </td>
        <td class="py-3.5 px-4">
          <div class="font-bold text-gray-900 text-xs">${r.customerName}</div>
          <div class="text-xs text-blue-600 font-medium">${r.customerPhone}</div>
        </td>
        <td class="py-3.5 px-4">
          <div class="font-bold text-xs text-gray-900">${r.category}</div>
          <div class="text-[11px] text-gray-500 truncate max-w-xs">${r.title}</div>
        </td>
        <td class="py-3.5 px-4 text-xs">
          <div class="font-bold text-gray-800">${r.district}</div>
          <div class="text-gray-400 text-[11px]">${r.city}</div>
        </td>
        <td class="py-3.5 px-4">
          <select onchange="adminUpdateStatus('${r.id}', this.value)" class="text-[11px] font-bold px-2 py-1 rounded-lg border ${badgeClass}">
            <option value="Pending" ${r.status === 'Pending' ? 'selected' : ''}>Pending</option>
            <option value="Matched" ${r.status === 'Matched' ? 'selected' : ''}>Matched</option>
            <option value="In Progress" ${r.status === 'In Progress' ? 'selected' : ''}>In Progress</option>
            <option value="Completed" ${r.status === 'Completed' ? 'selected' : ''}>Completed</option>
          </select>
        </td>
        <td class="py-3.5 px-4 text-xs">
          ${assignedWorker ? `
            <div class="font-bold text-emerald-700 flex items-center gap-1">
              <i data-lucide="check" class="w-3.5 h-3.5"></i> ${assignedWorker.name}
            </div>
            <div class="text-[10px] text-gray-500">${assignedWorker.phone}</div>
          ` : `
            <span class="text-amber-600 text-[11px] font-semibold italic">Unassigned</span>
          `}
        </td>
        <td class="py-3.5 px-4 text-right space-x-1">
          <button onclick="openAssignModal('${r.id}')" class="py-1 px-2.5 rounded-lg text-xs font-bold bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors">
            ${assignedWorker ? 'Reassign' : 'Assign'}
          </button>
          ${assignedWorker ? `
            <a href="https://wa.me/94${r.customerPhone.replace(/^0/, '')}?text=${encodeURIComponent(whatsappMsgCustomer)}" target="_blank" 
               title="Dispatch WhatsApp Notification"
               class="inline-block py-1 px-2 rounded-lg text-xs font-bold bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
              <i data-lucide="send" class="w-3 h-3 inline"></i> WhatsApp
            </a>
          ` : ''}
        </td>
      </tr>
    `;
  }).join('');

  lucide.createIcons();
}

function adminUpdateStatus(reqId, newStatus) {
  const req = requests.find(r => r.id === reqId);
  if (req) {
    req.status = newStatus;
    saveState();
    renderAdminDashboard();
    showToast('Updated', `Request ${reqId} set to ${newStatus}`);
  }
}

// Assign Worker Flow
function openAssignModal(reqId) {
  currentAssignRequestId = reqId;
  const req = requests.find(r => r.id === reqId);
  if (!req) return;

  document.getElementById('assignModalTitle').textContent = `Assign Worker to ${req.id} (${req.category})`;
  document.getElementById('assignModalSub').textContent = `Customer: ${req.customerName} in ${req.city}, ${req.district}`;

  const container = document.getElementById('assignWorkerList');

  // Filter verified workers first, matching category
  const matchingWorkers = workers.filter(w => w.category === req.category);
  const otherWorkers = workers.filter(w => w.category !== req.category);
  const displayList = [...matchingWorkers, ...otherWorkers];

  container.innerHTML = displayList.map(w => {
    const isExactTrade = w.category === req.category;
    const isExactDistrict = w.district.toLowerCase() === req.district.toLowerCase();

    return `
      <div class="p-3.5 rounded-2xl border ${isExactTrade ? 'border-blue-200 bg-blue-50/30' : 'border-gray-200 bg-white'} flex items-center justify-between gap-3">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full ${w.verified ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-700'} flex items-center justify-center font-bold text-sm">
            ${w.name.charAt(0)}
          </div>
          <div>
            <div class="flex items-center gap-1.5">
              <span class="text-sm font-bold text-gray-900">${w.name}</span>
              ${w.verified ? '<span class="badge-verified px-1.5 py-0.2 rounded text-[10px] font-bold">NIC Verified</span>' : '<span class="text-[10px] text-amber-600 bg-amber-50 px-1 rounded">Unverified</span>'}
            </div>
            <div class="text-xs text-gray-600">${w.category} • ${w.district} • Rate: ${w.rate}</div>
            <div class="text-[10px] text-gray-400">NIC: ${w.nic} | Tel: ${w.phone}</div>
          </div>
        </div>

        <button onclick="confirmWorkerAssignment('${w.id}', '${w.name}')" class="py-1.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm">
          Select & Match
        </button>
      </div>
    `;
  }).join('');

  document.getElementById('assignWorkerModal').classList.remove('hidden');
  lucide.createIcons();
}

function closeAssignWorkerModal() {
  document.getElementById('assignWorkerModal').classList.add('hidden');
  currentAssignRequestId = null;
}

function confirmWorkerAssignment(workerId, workerName) {
  if (!currentAssignRequestId) return;
  const req = requests.find(r => r.id === currentAssignRequestId);
  if (req) {
    req.assignedWorkerId = workerId;
    req.assignedWorkerName = workerName;
    req.status = 'Matched';
    saveState();
    closeAssignWorkerModal();
    renderAdminDashboard();
    showToast('Worker Assigned', `${workerName} has been assigned to ${req.id}`);
  }
}

// Worker Management in Admin
function renderAdminWorkers() {
  const tbody = document.getElementById('adminWorkersTableBody');
  if (!tbody) return;

  const catFilter = document.getElementById('adminWorkerCategoryFilter')?.value || 'ALL';
  let filtered = workers;
  if (catFilter !== 'ALL') {
    filtered = filtered.filter(w => w.category === catFilter);
  }

  tbody.innerHTML = filtered.map(w => {
    return `
      <tr class="hover:bg-gray-50/80 transition-colors">
        <td class="py-3 px-4">
          <div class="font-bold text-gray-900 text-xs">${w.name}</div>
          <div class="text-[11px] text-blue-600">${w.phone}</div>
        </td>
        <td class="py-3 px-4 text-xs font-bold text-gray-800">${w.category}</td>
        <td class="py-3 px-4 text-xs font-mono text-gray-600">${w.nic}</td>
        <td class="py-3 px-4 text-xs text-gray-700">${w.district}</td>
        <td class="py-3 px-4 text-xs text-gray-600">${w.rate} (${w.experience} yrs)</td>
        <td class="py-3 px-4">
          ${w.verified 
            ? '<span class="badge-verified px-2.5 py-0.5 rounded-full text-xs font-bold inline-flex items-center gap-1"><i data-lucide="shield-check" class="w-3.5 h-3.5"></i> Verified</span>'
            : '<span class="badge-pending px-2.5 py-0.5 rounded-full text-xs font-bold inline-flex items-center gap-1"><i data-lucide="clock" class="w-3.5 h-3.5"></i> Pending</span>'
          }
        </td>
        <td class="py-3 px-4 text-right">
          <button onclick="toggleWorkerVerification('${w.id}')" class="py-1 px-3 rounded-lg text-xs font-bold ${w.verified ? 'bg-red-50 text-red-700 hover:bg-red-100' : 'bg-emerald-600 text-white hover:bg-emerald-700'} transition-all shadow-sm">
            ${w.verified ? 'Revoke Badge' : '✓ Verify NIC'}
          </button>
        </td>
      </tr>
    `;
  }).join('');

  lucide.createIcons();
}

function toggleWorkerVerification(workerId) {
  const w = workers.find(item => item.id === workerId);
  if (w) {
    w.verified = !w.verified;
    saveState();
    renderAdminWorkers();
    renderAdminDashboard();
    showToast('Worker Status Updated', `${w.name} is now ${w.verified ? 'NIC Verified' : 'Unverified'}`);
  }
}

// Add Worker Manually via Admin Modal
function openAddWorkerModal() {
  document.getElementById('addWorkerModal').classList.remove('hidden');
}
function closeAddWorkerModal() {
  document.getElementById('addWorkerModal').classList.add('hidden');
}

function handleAdminAddWorker(e) {
  e.preventDefault();
  const name = document.getElementById('adminNewWorkerName').value;
  const nic = document.getElementById('adminNewWorkerNic').value;
  const phone = document.getElementById('adminNewWorkerPhone').value;
  const category = document.getElementById('adminNewWorkerCategory').value;
  const district = document.getElementById('adminNewWorkerDistrict').value;
  const rate = document.getElementById('adminNewWorkerRate').value || 'Negotiable';
  const verified = document.getElementById('adminNewWorkerVerified').checked;

  const newW = {
    id: 'w-' + (workers.length + 1),
    name,
    nic,
    phone,
    category,
    district,
    rate,
    experience: '3',
    verified,
    available: true,
    rating: 5.0,
    jobsCompleted: 0
  };

  workers.unshift(newW);
  saveState();
  closeAddWorkerModal();
  renderAdminWorkers();
  renderAdminDashboard();
  showToast('Worker Added', `${name} added to worker directory.`);
}

// ==========================================
// 11. TOAST NOTIFICATION UTILITY
// ==========================================
function showToast(title, msg) {
  const toast = document.getElementById('toastNotification');
  if (!toast) return;

  document.getElementById('toastTitle').textContent = title;
  document.getElementById('toastMessage').textContent = msg;

  toast.classList.remove('translate-y-24', 'opacity-0');
  setTimeout(() => {
    toast.classList.add('translate-y-24', 'opacity-0');
  }, 4000);
}

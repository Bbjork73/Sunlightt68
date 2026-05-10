const STORAGE_KEY = "sunlight-t68-admin-v1";
const SUPABASE_URL = "https://dijwdhqvbguscwwzqgqw.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpandkaHF2Ymd1c2N3d3pxZ3F3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg0Mjc5OTUsImV4cCI6MjA5NDAwMzk5NX0.KHI7b_jCbE7BiQwc4xuOUzBnhEcBA71JVt0LkpPD0WU";
const ONLINE_DATA_ID = "sunlight-t68-main";

const statusOptions = ["Må sjekkes", "Mottatt", "Ikke mottatt", "Planlagt", "Refundert", "Kansellert"];
const bookingStatusOptions = ["Bekreftet", "Planlagt", "Fullført", "Kansellert"];
const typicalEconomyParams = {
  loanBalance: 500000,
  interestRate: 7.5,
  annualPrincipal: 60000,
  insurance: 15000,
  roadTax: 3500,
  service: 12000,
  maintenance: 18000,
  tiresEquipment: 6000,
  storage: 12000,
  cleaningSupplies: 4000,
  marketing: 3000,
  otherFixed: 5000,
  variablePerRentalDay: 150,
  annualDepreciation: 25000,
  targetProfit: 0,
};

const defaultState = {
  settings: {
    asOfDate: "2026-05-10",
    accountOpeningBalance: 16000,
    liquidityYear: 2026,
    appliedUpdates: ["2026-05-10-terje-rent-paid-account-16000", "2026-05-10-single-account", "2026-05-10-typical-2015-costs-500k-loan"],
  },
  bookings: [
    {
      id: "WgSSkRRJfoiD7XH6e",
      customer: "Terje Opsahl Sørli",
      start: "2026-05-08",
      startTime: "12:00",
      end: "2026-05-16",
      endTime: "12:00",
      price: 16000,
      deposit: 10000,
      depositStatus: "Mottatt",
      rentStatus: "Mottatt",
      depositRefundStatus: "Planlagt",
      bookingStatus: "Bekreftet",
      pickup: "Eikenga 33, 0579 Oslo",
      returnPlace: "Eikenga 33, 0579 Oslo",
      email: "terje_opsahl@hotmail.com",
      phone: "+4792825234",
      address: "Bæregvegen 114, 1923 Sørum",
      depositDueDate: "2026-03-25",
      rentDueDate: "2026-05-05",
      depositRefundDate: "2026-05-18",
      includedKmDay: "",
      source: "FINNS digitale leiekontrakt for bobil-WgSSkRRJfoiD7XH6e.pdf",
      notes: "Leietaker oppgir førerkortklasser BE, CE og DE siden 1994.",
    },
    {
      id: "ewgHNaTK8K33nJjhp",
      customer: "Bente Ryen",
      start: "2026-05-18",
      startTime: "08:00",
      end: "2026-06-01",
      endTime: "12:00",
      price: 30000,
      deposit: 10000,
      depositStatus: "Mottatt",
      rentStatus: "Må sjekkes",
      depositRefundStatus: "Planlagt",
      bookingStatus: "Bekreftet",
      pickup: "Fjellhamar",
      returnPlace: "Oslo",
      email: "ryenbente@gmail.com",
      phone: "+4799596033",
      address: "Haneborgveien 97b, 1453 Fjellhamar",
      depositDueDate: "2026-03-17",
      rentDueDate: "2026-05-15",
      depositRefundDate: "2026-06-01",
      includedKmDay: 300,
      source: "FINNS digitale leiekontrakt for bobil-ewgHNaTK8K33nJjhp.pdf",
      notes: "Avtalen inkluderer 300 km per dag.",
    },
    {
      id: "fqWtnQgQXw6nughcX",
      customer: "Halfdan Sigve Hervig",
      start: "2026-06-10",
      startTime: "16:00",
      end: "2026-06-25",
      endTime: "12:00",
      price: 32000,
      deposit: 10000,
      depositStatus: "Mottatt",
      rentStatus: "Må sjekkes",
      depositRefundStatus: "Planlagt",
      bookingStatus: "Bekreftet",
      pickup: "Oslo",
      returnPlace: "Oslo",
      email: "sigve.hervig@gmail.com",
      phone: "+4792099386",
      address: "Bølersvingen 6, 0690 Oslo",
      depositDueDate: "2026-02-28",
      rentDueDate: "2026-06-09",
      depositRefundDate: "2026-07-02",
      includedKmDay: "",
      source: "FINNS digitale leiekontrakt for bobil-fqWtnQgQXw6nughcX.pdf",
      notes: "",
    },
    {
      id: "YYw7czbLbwPodT8j4",
      customer: "Sebastiano Mussi",
      start: "2026-06-28",
      startTime: "16:00",
      end: "2026-07-05",
      endTime: "12:00",
      price: 15000,
      deposit: 10000,
      depositStatus: "Mottatt",
      rentStatus: "Må sjekkes",
      depositRefundStatus: "Planlagt",
      bookingStatus: "Bekreftet",
      pickup: "Oslo",
      returnPlace: "Oslo",
      email: "sebastiano.mussi@gmail.com",
      phone: "+4741216327",
      address: "Fougstads gate 35, 0173 Oslo",
      depositDueDate: "2025-01-06",
      rentDueDate: "2025-05-25",
      depositRefundDate: "2026-07-05",
      includedKmDay: "",
      source: "FINNS digitale leiekontrakt for bobil-YYw7czbLbwPodT8j4.pdf",
      notes: "Betalingsdatoer står som 2025 i PDF, men leieperioden er 2026.",
    },
    {
      id: "09222115557577674252",
      customer: "Håvard Kristiansen",
      start: "2026-07-05",
      startTime: "16:00",
      end: "2026-07-19",
      endTime: "12:00",
      price: 36000,
      deposit: 10000,
      depositStatus: "Ikke mottatt",
      rentStatus: "Må sjekkes",
      depositRefundStatus: "Planlagt",
      bookingStatus: "Bekreftet",
      pickup: "Oslo",
      returnPlace: "Oslo",
      email: "haavardkris@gmail.com",
      phone: "",
      address: "Isveien 61, 1390 Vollen",
      depositDueDate: "",
      rentDueDate: "2026-06-28",
      depositRefundDate: "",
      includedKmDay: 200,
      source: "Leieavtale Sunlight T-68 Mal.pdf",
      notes: "Signert avtale i malformat. Telefon ikke oppgitt. Depositum mangler.",
    },
    {
      id: "GaPQde5YXhJ6AzRxw",
      customer: "Gudmundur Viktorsson",
      start: "2026-07-19",
      startTime: "16:00",
      end: "2026-07-26",
      endTime: "12:00",
      price: 18000,
      deposit: 10000,
      depositStatus: "Mottatt",
      rentStatus: "Må sjekkes",
      depositRefundStatus: "Planlagt",
      bookingStatus: "Bekreftet",
      pickup: "Bjørndalsveien 13C, 1395 Hvalstad",
      returnPlace: "Bjørndalsveien 13C, 1395 Hvalstad",
      email: "gudmundur@delventum.is",
      phone: "+4792351036",
      address: "Bjørndalsveien 13C, 1395 Hvalstad",
      depositDueDate: "2026-01-19",
      rentDueDate: "2026-07-15",
      depositRefundDate: "2026-07-30",
      includedKmDay: "",
      source: "FINNS digitale leiekontrakt for bobil-GaPQde5YXhJ6AzRxw.pdf",
      notes: "",
    },
    {
      id: "b4a94sx3qTSQLS73u",
      customer: "Bård Jarle Frydenlund",
      start: "2026-08-02",
      startTime: "16:00",
      end: "2026-08-09",
      endTime: "12:00",
      price: 15000,
      deposit: 10000,
      depositStatus: "Mottatt",
      rentStatus: "Må sjekkes",
      depositRefundStatus: "Planlagt",
      bookingStatus: "Bekreftet",
      pickup: "Oslo",
      returnPlace: "Oslo",
      email: "bard.frydenlund@gmail.com",
      phone: "+4792408489",
      address: "Sigurd Hoels vei 114, 0655 Oslo",
      depositDueDate: "2026-02-09",
      rentDueDate: "2026-07-28",
      depositRefundDate: "2026-08-15",
      includedKmDay: "",
      source: "FINNS digitale leiekontrakt for bobil-b4a94sx3qTSQLS73u.pdf",
      notes: "",
    },
  ],
  transactions: [],
  economyParams: { ...typicalEconomyParams },
};

let state = loadState();
let activeView = "dashboard";
let selectedBookingId = state.bookings[0]?.id || "";
let calendarDate = new Date(2026, 4, 1);
let supabaseClient = null;
let onlineUser = null;
let onlineSaveTimer = null;
let tableSort = {
  bookings: { key: "start", direction: "asc" },
  upcoming: { key: "start", direction: "asc" },
  payments: { key: "date", direction: "asc" },
  customers: { key: "customer", direction: "asc" },
  liquidity: { key: "monthSort", direction: "asc" },
  economy: { key: "amount", direction: "desc" },
  transactions: { key: "date", direction: "asc" },
};

const els = {
  viewTitle: document.querySelector("#viewTitle"),
  searchInput: document.querySelector("#searchInput"),
  kpiGrid: document.querySelector("#kpiGrid"),
  upcomingTable: document.querySelector("#upcomingTable"),
  depositSummary: document.querySelector("#depositSummary"),
  bookingTable: document.querySelector("#bookingTable"),
  bookingForm: document.querySelector("#bookingForm"),
  editorTitle: document.querySelector("#editorTitle"),
  paymentTable: document.querySelector("#paymentTable"),
  customerTable: document.querySelector("#customerTable"),
  calendarGrid: document.querySelector("#calendarGrid"),
  calendarTitle: document.querySelector("#calendarTitle"),
  liquidityTable: document.querySelector("#liquidityTable"),
  undatedCash: document.querySelector("#undatedCash"),
  economyKpis: document.querySelector("#economyKpis"),
  economyForm: document.querySelector("#economyForm"),
  annualCostTable: document.querySelector("#annualCostTable"),
  breakEvenSummary: document.querySelector("#breakEvenSummary"),
  transactionForm: document.querySelector("#transactionForm"),
  transactionTable: document.querySelector("#transactionTable"),
  settingsForm: document.querySelector("#settingsForm"),
  onlineEmail: document.querySelector("#onlineEmail"),
  onlinePassword: document.querySelector("#onlinePassword"),
  loginOnline: document.querySelector("#loginOnline"),
  signupOnline: document.querySelector("#signupOnline"),
  loadOnline: document.querySelector("#loadOnline"),
  saveOnline: document.querySelector("#saveOnline"),
  logoutOnline: document.querySelector("#logoutOnline"),
  onlineStatus: document.querySelector("#onlineStatus"),
  toast: document.querySelector("#toast"),
};

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return structuredClone(defaultState);
  try {
    const parsed = JSON.parse(raw);
    const parsedUpdates = Array.isArray(parsed.settings?.appliedUpdates) ? parsed.settings.appliedUpdates : [];
    const accountOpeningBalance =
      parsed.settings?.accountOpeningBalance ??
      parsed.settings?.operatingOpeningBalance ??
      defaultState.settings.accountOpeningBalance;
    return applyMigrations({
      settings: { ...defaultState.settings, ...parsed.settings, accountOpeningBalance, appliedUpdates: parsedUpdates },
      bookings: Array.isArray(parsed.bookings) ? parsed.bookings : structuredClone(defaultState.bookings),
      transactions: Array.isArray(parsed.transactions) ? parsed.transactions : [],
      economyParams: { ...defaultState.economyParams, ...parsed.economyParams },
    });
  } catch {
    return structuredClone(defaultState);
  }
}

function applyMigrations(nextState) {
  const updateId = "2026-05-10-terje-rent-paid-account-16000";
  const singleAccountUpdateId = "2026-05-10-single-account";
  const typicalCostsUpdateId = "2026-05-10-typical-2015-costs-500k-loan";
  const appliedUpdates = Array.isArray(nextState.settings.appliedUpdates) ? nextState.settings.appliedUpdates : [];

  if (!appliedUpdates.includes(updateId)) {
    nextState.settings.asOfDate = "2026-05-10";
    nextState.settings.accountOpeningBalance = 16000;
    const terje = nextState.bookings.find((booking) => booking.id === "WgSSkRRJfoiD7XH6e" || /terje\s+opsahl/i.test(booking.customer || ""));
    if (terje) terje.rentStatus = "Mottatt";
    appliedUpdates.push(updateId);
  }

  if (!appliedUpdates.includes(singleAccountUpdateId)) {
    nextState.settings.accountOpeningBalance =
      nextState.settings.accountOpeningBalance ?? nextState.settings.operatingOpeningBalance ?? 16000;
    delete nextState.settings.operatingOpeningBalance;
    delete nextState.settings.depositOpeningBalance;
    nextState.transactions = nextState.transactions.map((tx) => {
      const { account, ...rest } = tx;
      return rest;
    });
    appliedUpdates.push(singleAccountUpdateId);
  }

  if (!appliedUpdates.includes(typicalCostsUpdateId)) {
    nextState.economyParams = { ...typicalEconomyParams };
    appliedUpdates.push(typicalCostsUpdateId);
  } else {
    nextState.economyParams = { ...defaultState.economyParams, ...nextState.economyParams };
  }

  nextState.settings.appliedUpdates = appliedUpdates;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState, null, 2));
  return nextState;
}

function persist(message = "Lagret") {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state, null, 2));
  queueOnlineSave();
  showToast(message);
  render();
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => els.toast.classList.remove("show"), 1800);
}

function appSnapshot() {
  return {
    settings: state.settings,
    bookings: state.bookings,
    transactions: state.transactions,
    economyParams: state.economyParams,
  };
}

function updateOnlineStatus(message) {
  if (!els.onlineStatus) return;
  els.onlineStatus.textContent = message || (onlineUser ? `Logget inn: ${onlineUser.email}` : "Ikke logget inn");
}

async function initSupabase() {
  if (!window.supabase?.createClient) {
    updateOnlineStatus("Supabase kunne ikke lastes");
    return;
  }
  supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  const { data } = await supabaseClient.auth.getSession();
  onlineUser = data.session?.user || null;
  updateOnlineStatus();
  supabaseClient.auth.onAuthStateChange((_event, session) => {
    onlineUser = session?.user || null;
    updateOnlineStatus();
  });
}

function requireOnlineLogin() {
  if (!supabaseClient) {
    showToast("Supabase er ikke klar ennå");
    return false;
  }
  if (!onlineUser) {
    showToast("Logg inn for online lagring");
    return false;
  }
  return true;
}

async function signInOnline() {
  if (!supabaseClient) return showToast("Supabase er ikke klar ennå");
  const email = els.onlineEmail.value.trim();
  const password = els.onlinePassword.value;
  const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
  if (error) return showToast(error.message);
  onlineUser = data.user;
  updateOnlineStatus();
  showToast("Logget inn");
}

async function signUpOnline() {
  if (!supabaseClient) return showToast("Supabase er ikke klar ennå");
  const email = els.onlineEmail.value.trim();
  const password = els.onlinePassword.value;
  const { data, error } = await supabaseClient.auth.signUp({ email, password });
  if (error) return showToast(error.message);
  onlineUser = data.user || onlineUser;
  updateOnlineStatus(data.user ? "Bruker opprettet" : "Sjekk e-post for bekreftelse");
  showToast("Bruker opprettet");
}

async function logoutOnline() {
  if (!supabaseClient) return;
  await supabaseClient.auth.signOut();
  onlineUser = null;
  updateOnlineStatus();
  showToast("Logget ut");
}

async function saveOnline({ quiet = false } = {}) {
  if (!requireOnlineLogin()) return;
  const payload = {
    id: ONLINE_DATA_ID,
    user_id: onlineUser.id,
    data: appSnapshot(),
    updated_at: new Date().toISOString(),
  };
  const { error } = await supabaseClient.from("app_data").upsert(payload, { onConflict: "id" });
  if (error) {
    updateOnlineStatus("Online lagring feilet");
    if (!quiet) showToast(error.message);
    return;
  }
  updateOnlineStatus(`Online lagret ${new Date().toLocaleTimeString("nb-NO", { hour: "2-digit", minute: "2-digit" })}`);
  if (!quiet) showToast("Lagret online");
}

function queueOnlineSave() {
  if (!onlineUser) return;
  window.clearTimeout(onlineSaveTimer);
  onlineSaveTimer = window.setTimeout(() => saveOnline({ quiet: true }), 900);
}

async function loadOnline() {
  if (!requireOnlineLogin()) return;
  const { data, error } = await supabaseClient.from("app_data").select("data, updated_at").eq("id", ONLINE_DATA_ID).maybeSingle();
  if (error) return showToast(error.message);
  if (!data?.data) {
    await saveOnline({ quiet: true });
    showToast("Ingen online data funnet, lagret lokal versjon online");
    return;
  }
  state = applyMigrations({
    settings: { ...defaultState.settings, ...data.data.settings },
    bookings: Array.isArray(data.data.bookings) ? data.data.bookings : structuredClone(defaultState.bookings),
    transactions: Array.isArray(data.data.transactions) ? data.data.transactions : [],
    economyParams: { ...defaultState.economyParams, ...data.data.economyParams },
  });
  selectedBookingId = state.bookings[0]?.id || "";
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state, null, 2));
  render();
  updateOnlineStatus(`Lastet online ${new Date(data.updated_at).toLocaleString("nb-NO")}`);
  showToast("Lastet inn online");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function parseDate(value) {
  if (!value) return null;
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function toIso(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDate(value) {
  const date = parseDate(value);
  if (!date) return "";
  return new Intl.DateTimeFormat("nb-NO", { day: "2-digit", month: "2-digit", year: "numeric" }).format(date);
}

function formatMonth(date) {
  return new Intl.DateTimeFormat("nb-NO", { month: "long", year: "numeric" }).format(date);
}

function formatCurrency(value) {
  return new Intl.NumberFormat("nb-NO", {
    style: "currency",
    currency: "NOK",
    maximumFractionDigits: 0,
  }).format(Number(value || 0));
}

function daysBetween(start, end) {
  const a = parseDate(start);
  const b = parseDate(end);
  if (!a || !b) return 0;
  return Math.max(0, Math.round((b - a) / 86400000));
}

function sortedBookings() {
  return [...state.bookings].sort((a, b) => String(a.start).localeCompare(String(b.start)));
}

function filteredBookings() {
  const query = els.searchInput.value.trim().toLowerCase();
  if (!query) return sortedBookings();
  return sortedBookings().filter((booking) =>
    [booking.customer, booking.email, booking.phone, booking.depositStatus, booking.rentStatus, booking.bookingStatus]
      .join(" ")
      .toLowerCase()
      .includes(query),
  );
}

function statusClass(status) {
  const normalized = String(status || "").toLowerCase();
  if (["mottatt", "bekreftet", "fullført", "refundert", "betalt"].includes(normalized)) return "status-paid";
  if (["ikke mottatt", "kansellert"].includes(normalized)) return "status-missing";
  return "status-open";
}

function statusPill(status) {
  return `<span class="status-pill ${statusClass(status)}">${escapeHtml(status || "Må sjekkes")}</span>`;
}

function sortValue(item, key) {
  const value = item?.[key];
  if (value === null || value === undefined || value === "") return "";
  if (typeof value === "number") return value;
  if (/^\d{4}-\d{2}-\d{2}$/.test(String(value))) return parseDate(value)?.getTime() || 0;
  return String(value).toLocaleLowerCase("nb-NO");
}

function sortItems(items, tableKey) {
  const config = tableSort[tableKey];
  if (!config?.key) return [...items];
  const direction = config.direction === "desc" ? -1 : 1;
  return [...items].sort((a, b) => {
    const left = sortValue(a, config.key);
    const right = sortValue(b, config.key);
    if (left < right) return -1 * direction;
    if (left > right) return 1 * direction;
    return 0;
  });
}

function buildTable(headers, rows, tableKey) {
  const sort = tableSort[tableKey] || {};
  const head = `<thead><tr>${headers
    .map((h) => {
      const classes = [h.numeric ? "numeric" : "", h.key ? "sortable" : ""].filter(Boolean).join(" ");
      const indicator = sort.key === h.key ? (sort.direction === "asc" ? " ↑" : " ↓") : "";
      const content = h.key
        ? `<button class="sort-button" data-sort-table="${escapeHtml(tableKey)}" data-sort-key="${escapeHtml(h.key)}">${escapeHtml(h.label)}${indicator}</button>`
        : escapeHtml(h.label);
      return `<th class="${classes}">${content}</th>`;
    })
    .join("")}</tr></thead>`;
  const body = `<tbody>${rows.join("") || `<tr><td colspan="${headers.length}">Ingen linjer</td></tr>`}</tbody>`;
  return `${head}${body}`;
}

function render() {
  renderDashboard();
  renderBookingTable();
  renderBookingForm();
  renderCalendar();
  renderPayments();
  renderCustomers();
  renderLiquidity();
  renderEconomy();
  renderSettings();
}

function renderDashboard() {
  const bookings = sortedBookings();
  const totalRevenue = bookings.reduce((sum, b) => sum + Number(b.price || 0), 0);
  const totalDays = bookings.reduce((sum, b) => sum + daysBetween(b.start, b.end), 0);
  const depositReceived = bookings
    .filter((b) => b.depositStatus === "Mottatt")
    .reduce((sum, b) => sum + Number(b.deposit || 0), 0);
  const missingDeposits = bookings
    .filter((b) => b.depositStatus !== "Mottatt")
    .reduce((sum, b) => sum + Number(b.deposit || 0), 0);
  const occupancy = Math.round((totalDays / 365) * 100);
  const accountBalance = projectedAccountBalance();

  const kpis = [
    ["Bookinger", bookings.length, ""],
    ["Omsetning", formatCurrency(totalRevenue), "positive"],
    ["Utleiedøgn", totalDays, ""],
    ["Belegg 2026", `${occupancy}%`, ""],
    ["Projisert kontosaldo", formatCurrency(accountBalance), accountBalance < 0 ? "warning" : "positive"],
  ];

  els.kpiGrid.innerHTML = kpis
    .map(([label, value, tone]) => `<div class="kpi-card ${tone}"><span>${label}</span><strong>${value}</strong></div>`)
    .join("");

  const upcoming = sortItems(
    bookings.filter((b) => parseDate(b.end) >= parseDate(state.settings.asOfDate)),
    "upcoming",
  ).slice(0, 6);
  els.upcomingTable.innerHTML = buildTable(
    [
      { label: "Kunde", key: "customer" },
      { label: "Periode", key: "start" },
      { label: "Leie", key: "price", numeric: true },
      { label: "Depositum", key: "depositStatus" },
      { label: "Status", key: "bookingStatus" },
    ],
    upcoming.map(
      (b) => `<tr class="selectable" data-booking-id="${escapeHtml(b.id)}">
        <td>${escapeHtml(b.customer)}</td>
        <td>${formatDate(b.start)} - ${formatDate(b.end)}</td>
        <td class="numeric">${formatCurrency(b.price)}</td>
        <td>${statusPill(b.depositStatus)}</td>
        <td>${statusPill(b.bookingStatus)}</td>
      </tr>`,
    ),
    "upcoming",
  );

  els.depositSummary.innerHTML = [
    ["Mottatt depositum", formatCurrency(depositReceived)],
    ["Ikke mottatt depositum", formatCurrency(missingDeposits)],
    ["Kontosaldo i dag", formatCurrency(state.settings.accountOpeningBalance)],
    ["Projisert kontosaldo etter planlagte inn/ut", formatCurrency(accountBalance)],
  ]
    .map(([label, value]) => `<div class="summary-line"><span>${label}</span><strong>${value}</strong></div>`)
    .join("");
}

function renderBookingTable() {
  const bookings = sortItems(
    filteredBookings().map((booking) => ({ ...booking, days: daysBetween(booking.start, booking.end) })),
    "bookings",
  );
  els.bookingTable.innerHTML = buildTable(
    [
      { label: "Kunde", key: "customer" },
      { label: "Start", key: "start" },
      { label: "Slutt", key: "end" },
      { label: "Dager", key: "days", numeric: true },
      { label: "Leie", key: "price", numeric: true },
      { label: "Depositum", key: "depositStatus" },
      { label: "Leiestatus", key: "rentStatus" },
    ],
    bookings.map(
      (b) => `<tr class="selectable" data-booking-id="${escapeHtml(b.id)}">
        <td>${escapeHtml(b.customer)}</td>
        <td>${formatDate(b.start)}</td>
        <td>${formatDate(b.end)}</td>
        <td class="numeric">${daysBetween(b.start, b.end)}</td>
        <td class="numeric">${formatCurrency(b.price)}</td>
        <td>${statusPill(b.depositStatus)}</td>
        <td>${statusPill(b.rentStatus)}</td>
      </tr>`,
    ),
    "bookings",
  );
}

function fillSelect(select, options, value) {
  select.innerHTML = options.map((option) => `<option value="${escapeHtml(option)}">${escapeHtml(option)}</option>`).join("");
  select.value = value || options[0];
}

function renderBookingForm() {
  const form = els.bookingForm;
  const booking = state.bookings.find((item) => item.id === selectedBookingId) || state.bookings[0];
  if (!booking) return;
  selectedBookingId = booking.id;
  els.editorTitle.textContent = booking.customer || "Booking";
  for (const [key, value] of Object.entries(booking)) {
    if (form.elements[key] && form.elements[key].tagName !== "SELECT") {
      form.elements[key].value = value ?? "";
    }
  }
  fillSelect(form.elements.depositStatus, statusOptions, booking.depositStatus);
  fillSelect(form.elements.rentStatus, statusOptions, booking.rentStatus);
}

function bookingFromForm() {
  const data = new FormData(els.bookingForm);
  const id = data.get("id") || `manual-${Date.now()}`;
  const existing = state.bookings.find((b) => b.id === id) || {};
  return {
    ...existing,
    id,
    customer: String(data.get("customer") || "").trim(),
    email: String(data.get("email") || "").trim(),
    phone: String(data.get("phone") || "").trim(),
    address: String(data.get("address") || "").trim(),
    start: data.get("start"),
    end: data.get("end"),
    startTime: data.get("startTime"),
    endTime: data.get("endTime"),
    price: Number(data.get("price") || 0),
    deposit: Number(data.get("deposit") || 0),
    depositStatus: data.get("depositStatus"),
    rentStatus: data.get("rentStatus"),
    pickup: String(data.get("pickup") || "").trim(),
    returnPlace: String(data.get("returnPlace") || "").trim(),
    depositDueDate: data.get("depositDueDate"),
    rentDueDate: data.get("rentDueDate"),
    depositRefundDate: data.get("depositRefundDate"),
    includedKmDay: data.get("includedKmDay"),
    bookingStatus: existing.bookingStatus || "Bekreftet",
    depositRefundStatus: existing.depositRefundStatus || "Planlagt",
    source: existing.source || "Manuell",
    notes: String(data.get("notes") || "").trim(),
  };
}

function renderCalendar() {
  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();
  const first = new Date(year, month, 1);
  const startOffset = (first.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  els.calendarTitle.textContent = formatMonth(first);

  const dayNames = ["Man", "Tir", "Ons", "Tor", "Fre", "Lør", "Søn"];
  const cells = dayNames.map((day) => `<div class="calendar-head">${day}</div>`);
  for (let i = 0; i < startOffset; i += 1) cells.push('<div class="calendar-day empty"></div>');
  for (let day = 1; day <= daysInMonth; day += 1) {
    const current = new Date(year, month, day);
    const iso = toIso(current);
    const starting = sortedBookings().filter((b) => b.start === iso);
    const ending = sortedBookings().filter((b) => b.end === iso);
    const active = sortedBookings().filter((b) => b.start < iso && b.end > iso);
    const isTurn = starting.length > 0 || ending.length > 0;
    const isBusy = isTurn || active.length > 0;
    const entries = [
      ...ending.map((b) => `Inn ${b.endTime || ""} ${b.customer}`),
      ...starting.map((b) => `Ut ${b.startTime || ""} ${b.customer}`),
      ...active.map((b) => b.customer),
    ];
    cells.push(`<div class="calendar-day ${isTurn ? "turn" : isBusy ? "busy" : ""}">
      <div class="day-number">${day}</div>
      <div class="day-content">${entries.map(escapeHtml).join("<br>")}</div>
    </div>`);
  }
  els.calendarGrid.innerHTML = cells.join("");
}

function paymentLines() {
  return sortedBookings()
    .flatMap((b) => [
      {
        id: b.id,
        kind: "deposit",
        customer: b.customer,
        type: "Depositum inn",
        date: b.depositDueDate,
        amount: Number(b.deposit || 0),
        status: b.depositStatus,
      },
      {
        id: b.id,
        kind: "rent",
        customer: b.customer,
        type: "Leie inn",
        date: b.rentDueDate,
        amount: Number(b.price || 0),
        status: b.rentStatus,
      },
      {
        id: b.id,
        kind: "refund",
        customer: b.customer,
        type: "Depositum tilbake",
        date: b.depositRefundDate,
        amount: -Number(b.deposit || 0),
        status: b.depositRefundStatus || "Planlagt",
      },
    ])
    .sort((a, b) => String(a.date || "9999-12-31").localeCompare(String(b.date || "9999-12-31")));
}

function renderPayments() {
  const lines = sortItems(paymentLines(), "payments");
  els.paymentTable.innerHTML = buildTable(
    [
      { label: "Dato", key: "date" },
      { label: "Kunde", key: "customer" },
      { label: "Type", key: "type" },
      { label: "Beløp", key: "amount", numeric: true },
      { label: "Status", key: "status" },
    ],
    lines.map(
      (line) => `<tr>
        <td>${formatDate(line.date) || "Udatert"}</td>
        <td>${escapeHtml(line.customer)}</td>
        <td>${escapeHtml(line.type)}</td>
        <td class="numeric">${formatCurrency(line.amount)}</td>
        <td>
          <select class="payment-status" data-id="${escapeHtml(line.id)}" data-kind="${line.kind}">
            ${statusOptions.map((option) => `<option value="${escapeHtml(option)}" ${option === line.status ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}
          </select>
        </td>
      </tr>`,
    ),
    "payments",
  );
}

function renderCustomers() {
  const customers = sortItems(
    filteredBookings().map((booking) => ({
      ...booking,
      period: booking.start,
      revenue: Number(booking.price || 0),
    })),
    "customers",
  );
  els.customerTable.innerHTML = buildTable(
    [
      { label: "Kunde", key: "customer" },
      { label: "E-post", key: "email" },
      { label: "Mobil", key: "phone" },
      { label: "Adresse", key: "address" },
      { label: "Periode", key: "period" },
      { label: "Omsetning", key: "revenue", numeric: true },
    ],
    customers.map(
      (b) => `<tr class="selectable" data-booking-id="${escapeHtml(b.id)}">
        <td>${escapeHtml(b.customer)}</td>
        <td>${escapeHtml(b.email)}</td>
        <td>${escapeHtml(b.phone)}</td>
        <td>${escapeHtml(b.address)}</td>
        <td>${formatDate(b.start)} - ${formatDate(b.end)}</td>
        <td class="numeric">${formatCurrency(b.price)}</td>
      </tr>`,
    ),
    "customers",
  );
}

function cashMovements() {
  const asOf = parseDate(state.settings.asOfDate);
  const movements = [];
  const undated = [];

  for (const booking of sortedBookings()) {
    if (booking.rentDueDate) {
      movements.push({
        date: booking.rentDueDate,
        type: "Leie inn",
        text: booking.customer,
        amount: Number(booking.price || 0),
        status: booking.rentStatus,
      });
    } else {
      undated.push(["Leie inn", booking.customer, Number(booking.price || 0)]);
    }

    if (booking.depositStatus !== "Mottatt") {
      if (booking.depositDueDate) {
        movements.push({
          date: booking.depositDueDate,
          type: "Depositum inn",
          text: booking.customer,
          amount: Number(booking.deposit || 0),
          status: booking.depositStatus,
        });
      } else {
        undated.push(["Depositum inn", booking.customer, Number(booking.deposit || 0)]);
      }
    }

    if (booking.depositStatus === "Mottatt") {
      if (booking.depositRefundDate) {
        movements.push({
          date: booking.depositRefundDate,
          type: "Depositum tilbake",
          text: booking.customer,
          amount: -Number(booking.deposit || 0),
          status: booking.depositRefundStatus || "Planlagt",
        });
      } else {
        undated.push(["Depositum tilbake", booking.customer, -Number(booking.deposit || 0)]);
      }
    }
  }

  for (const tx of state.transactions) {
    if (tx.date) {
      movements.push({
        date: tx.date,
        type: "Ekstra",
        text: tx.text,
        amount: Number(tx.amount || 0),
        status: "Planlagt",
        manualId: tx.id,
      });
    } else {
      undated.push(["Ekstra", tx.text, Number(tx.amount || 0)]);
    }
  }

  return {
    movements: movements.filter((movement) => !asOf || parseDate(movement.date) >= asOf),
    undated,
  };
}

function projectedAccountBalance() {
  const { movements } = cashMovements();
  return movements.reduce((sum, movement) => sum + Number(movement.amount || 0), Number(state.settings.accountOpeningBalance || 0));
}

function renderLiquidity() {
  const year = Number(state.settings.liquidityYear || 2026);
  const asOf = parseDate(state.settings.asOfDate) || new Date(year, 0, 1);
  const { movements, undated } = cashMovements();
  let balance = Number(state.settings.accountOpeningBalance || 0);
  const liquidityRows = [];

  for (let month = asOf.getFullYear() === year ? asOf.getMonth() : 0; month < 12; month += 1) {
    const monthStart = new Date(year, month, 1);
    const monthEnd = new Date(year, month + 1, 0);
    const inMonth = movements.filter((movement) => {
      const date = parseDate(movement.date);
      return date && date >= monthStart && date <= monthEnd;
    });
    const income = inMonth.filter((movement) => movement.amount > 0).reduce((sum, movement) => sum + movement.amount, 0);
    const outgoing = inMonth.filter((movement) => movement.amount < 0).reduce((sum, movement) => sum + movement.amount, 0);
    const openingBalance = balance;
    const net = income + outgoing;
    balance += net;

    liquidityRows.push({
      monthLabel: formatMonth(monthStart),
      monthSort: monthStart.getTime(),
      openingBalance,
      income,
      outgoing,
      net,
      balance,
    });
  }

  const rows = sortItems(liquidityRows, "liquidity").map(
    (row) => `<tr>
      <td>${row.monthLabel}</td>
      <td class="numeric">${formatCurrency(row.openingBalance)}</td>
      <td class="numeric">${formatCurrency(row.income)}</td>
      <td class="numeric">${formatCurrency(row.outgoing)}</td>
      <td class="numeric">${formatCurrency(row.net)}</td>
      <td class="numeric">${formatCurrency(row.balance)}</td>
    </tr>`,
  );

  els.liquidityTable.innerHTML = buildTable(
    [
      { label: "Måned", key: "monthSort" },
      { label: "IB konto", key: "openingBalance", numeric: true },
      { label: "Innbetalinger", key: "income", numeric: true },
      { label: "Utbetalinger", key: "outgoing", numeric: true },
      { label: "Netto", key: "net", numeric: true },
      { label: "UB konto", key: "balance", numeric: true },
    ],
    rows,
    "liquidity",
  );

  els.undatedCash.innerHTML = undated.length
    ? undated
        .map(([type, text, amount]) => `<div class="summary-line"><span>${escapeHtml(type)}: ${escapeHtml(text)}</span><strong>${formatCurrency(amount)}</strong></div>`)
        .join("")
    : '<div class="summary-line"><span>Ingen udatert oppfølging</span><strong>OK</strong></div>';

  renderTransactions();
}

function renderTransactions() {
  const transactions = sortItems(state.transactions, "transactions");
  els.transactionTable.innerHTML = buildTable(
    [
      { label: "Dato", key: "date" },
      { label: "Tekst", key: "text" },
      { label: "Beløp", key: "amount", numeric: true },
      { label: "" },
    ],
    transactions.map(
      (tx) => `<tr>
          <td>${formatDate(tx.date)}</td>
          <td>${escapeHtml(tx.text)}</td>
          <td class="numeric">${formatCurrency(tx.amount)}</td>
          <td><button class="delete-transaction danger" data-id="${escapeHtml(tx.id)}">Slett</button></td>
        </tr>`,
    ),
    "transactions",
  );
}

function revenueTotal() {
  return state.bookings.reduce((sum, booking) => sum + Number(booking.price || 0), 0);
}

function rentalDaysTotal() {
  return state.bookings.reduce((sum, booking) => sum + daysBetween(booking.start, booking.end), 0);
}

function economyRows() {
  const params = state.economyParams;
  const rentalDays = rentalDaysTotal();
  const interest = Number(params.loanBalance || 0) * (Number(params.interestRate || 0) / 100);
  return [
    { category: "Lån", item: "Avdrag per år", amount: Number(params.annualPrincipal || 0), type: "Finansiering" },
    { category: "Lån", item: "Renter per år", amount: interest, type: "Finansiering" },
    { category: "Faste kostnader", item: "Forsikring", amount: Number(params.insurance || 0), type: "Drift" },
    { category: "Faste kostnader", item: "Årsavgifter", amount: Number(params.roadTax || 0), type: "Drift" },
    { category: "Faste kostnader", item: "Service", amount: Number(params.service || 0), type: "Drift" },
    { category: "Faste kostnader", item: "Vedlikehold", amount: Number(params.maintenance || 0), type: "Drift" },
    { category: "Faste kostnader", item: "Dekk/utstyr", amount: Number(params.tiresEquipment || 0), type: "Drift" },
    { category: "Faste kostnader", item: "Lagring/parkering", amount: Number(params.storage || 0), type: "Drift" },
    { category: "Faste kostnader", item: "Renhold/forbruk", amount: Number(params.cleaningSupplies || 0), type: "Drift" },
    { category: "Faste kostnader", item: "Markedsføring", amount: Number(params.marketing || 0), type: "Drift" },
    { category: "Faste kostnader", item: "Andre faste", amount: Number(params.otherFixed || 0), type: "Drift" },
    {
      category: "Variable kostnader",
      item: `${rentalDays} utleiedøgn x ${formatCurrency(params.variablePerRentalDay || 0)}`,
      amount: rentalDays * Number(params.variablePerRentalDay || 0),
      type: "Drift",
    },
    { category: "Kalkulator", item: "Avskrivning per år", amount: Number(params.annualDepreciation || 0), type: "Ikke-kontant" },
  ];
}

function annualCostTotal() {
  return economyRows().reduce((sum, row) => sum + Number(row.amount || 0), 0);
}

function renderEconomy() {
  const params = state.economyParams;
  for (const [key, value] of Object.entries(params)) {
    if (els.economyForm.elements[key]) els.economyForm.elements[key].value = value;
  }

  const rows = sortItems(economyRows(), "economy");
  const totalRevenue = revenueTotal();
  const totalCosts = annualCostTotal();
  const rentalDays = rentalDaysTotal();
  const avgRevenuePerDay = rentalDays > 0 ? totalRevenue / rentalDays : 0;
  const variablePerDay = Number(params.variablePerRentalDay || 0);
  const contributionPerDay = Math.max(0, avgRevenuePerDay - variablePerDay);
  const fixedForBreakEven = totalCosts - rentalDays * variablePerDay + Number(params.targetProfit || 0);
  const breakEvenDays = contributionPerDay > 0 ? Math.ceil(fixedForBreakEven / contributionPerDay) : 0;
  const breakEvenLabel = contributionPerDay > 0 ? breakEvenDays : "Mangler pris";
  const result = totalRevenue - totalCosts;

  const kpis = [
    ["Omsetning", formatCurrency(totalRevenue), "positive"],
    ["Årlig kostnad", formatCurrency(totalCosts), totalCosts > 0 ? "warning" : ""],
    ["Utleiedøgn", rentalDays, ""],
    ["Break-even døgn", breakEvenLabel, ""],
    ["Resultat før skatt", formatCurrency(result), result < 0 ? "warning" : "positive"],
  ];
  els.economyKpis.innerHTML = kpis
    .map(([label, value, tone]) => `<div class="kpi-card ${tone}"><span>${label}</span><strong>${value}</strong></div>`)
    .join("");

  els.annualCostTable.innerHTML = buildTable(
    [
      { label: "Kategori", key: "category" },
      { label: "Post", key: "item" },
      { label: "Type", key: "type" },
      { label: "Årskostnad", key: "amount", numeric: true },
    ],
    rows.map(
      (row) => `<tr>
        <td>${escapeHtml(row.category)}</td>
        <td>${escapeHtml(row.item)}</td>
        <td>${escapeHtml(row.type)}</td>
        <td class="numeric">${formatCurrency(row.amount)}</td>
      </tr>`,
    ),
    "economy",
  );

  const breakEvenRevenue = breakEvenDays * avgRevenuePerDay;
  els.breakEvenSummary.innerHTML = [
    ["Snittinntekt per døgn", formatCurrency(avgRevenuePerDay)],
    ["Variabel kostnad per døgn", formatCurrency(variablePerDay)],
    ["Dekningsbidrag per døgn", formatCurrency(contributionPerDay)],
    ["Ønsket overskudd", formatCurrency(params.targetProfit || 0)],
    ["Omsetning ved break-even", contributionPerDay > 0 ? formatCurrency(breakEvenRevenue) : "Mangler pris"],
  ]
    .map(([label, value]) => `<div class="summary-line"><span>${label}</span><strong>${value}</strong></div>`)
    .join("");
}

function renderSettings() {
  const form = els.settingsForm;
  for (const [key, value] of Object.entries(state.settings)) {
    if (form.elements[key]) form.elements[key].value = value;
  }
}

function setActiveView(view) {
  activeView = view;
  document.querySelectorAll(".view").forEach((section) => section.classList.toggle("active", section.id === view));
  document.querySelectorAll(".nav-tabs button").forEach((button) => button.classList.toggle("active", button.dataset.view === view));
  const activeButton = document.querySelector(`.nav-tabs button[data-view="${view}"]`);
  els.viewTitle.textContent = activeButton?.textContent || "Oversikt";
}

function downloadJson() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `sunlight-t68-data-${state.settings.asOfDate}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function bindEvents() {
  document.querySelector(".nav-tabs").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-view]");
    if (!button) return;
    setActiveView(button.dataset.view);
  });

  document.body.addEventListener("click", (event) => {
    const sortButton = event.target.closest(".sort-button");
    if (sortButton) {
      const table = sortButton.dataset.sortTable;
      const key = sortButton.dataset.sortKey;
      const current = tableSort[table] || {};
      tableSort[table] = {
        key,
        direction: current.key === key && current.direction === "asc" ? "desc" : "asc",
      };
      render();
      return;
    }

    const row = event.target.closest("[data-booking-id]");
    if (row) {
      selectedBookingId = row.dataset.bookingId;
      setActiveView("bookings");
      renderBookingForm();
    }
    const txDelete = event.target.closest(".delete-transaction");
    if (txDelete) {
      state.transactions = state.transactions.filter((tx) => tx.id !== txDelete.dataset.id);
      persist("Transaksjon slettet");
    }

  });

  els.searchInput.addEventListener("input", render);

  document.querySelector("#newBooking").addEventListener("click", () => {
    const next = {
      id: `manual-${Date.now()}`,
      customer: "",
      start: "2026-08-10",
      startTime: "16:00",
      end: "2026-08-17",
      endTime: "12:00",
      price: 0,
      deposit: 10000,
      depositStatus: "Ikke mottatt",
      rentStatus: "Må sjekkes",
      depositRefundStatus: "Planlagt",
      bookingStatus: "Planlagt",
      pickup: "Oslo",
      returnPlace: "Oslo",
      email: "",
      phone: "",
      address: "",
      depositDueDate: "",
      rentDueDate: "",
      depositRefundDate: "",
      includedKmDay: "",
      source: "Manuell",
      notes: "",
    };
    state.bookings.push(next);
    selectedBookingId = next.id;
    persist("Ny booking opprettet");
    setActiveView("bookings");
  });

  els.bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const booking = bookingFromForm();
    const index = state.bookings.findIndex((item) => item.id === booking.id);
    if (index >= 0) state.bookings[index] = booking;
    else state.bookings.push(booking);
    selectedBookingId = booking.id;
    persist("Booking lagret");
  });

  document.querySelector("#duplicateBooking").addEventListener("click", () => {
    const booking = state.bookings.find((item) => item.id === selectedBookingId);
    if (!booking) return;
    const copy = { ...booking, id: `manual-${Date.now()}`, customer: `${booking.customer} kopi`, source: "Manuell kopi" };
    state.bookings.push(copy);
    selectedBookingId = copy.id;
    persist("Booking duplisert");
  });

  document.querySelector("#deleteBooking").addEventListener("click", () => {
    if (state.bookings.length <= 1) return showToast("Minst én booking må ligge igjen");
    state.bookings = state.bookings.filter((item) => item.id !== selectedBookingId);
    selectedBookingId = state.bookings[0].id;
    persist("Booking slettet");
  });

  document.querySelector("#prevMonth").addEventListener("click", () => {
    calendarDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth() - 1, 1);
    renderCalendar();
  });

  document.querySelector("#nextMonth").addEventListener("click", () => {
    calendarDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1, 1);
    renderCalendar();
  });

  els.paymentTable.addEventListener("change", (event) => {
    const select = event.target.closest(".payment-status");
    if (!select) return;
    const booking = state.bookings.find((item) => item.id === select.dataset.id);
    if (!booking) return;
    if (select.dataset.kind === "deposit") booking.depositStatus = select.value;
    if (select.dataset.kind === "rent") booking.rentStatus = select.value;
    if (select.dataset.kind === "refund") booking.depositRefundStatus = select.value;
    persist("Betalingsstatus oppdatert");
  });

  els.transactionForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(els.transactionForm);
    state.transactions.push({
      id: `tx-${Date.now()}`,
      date: data.get("date"),
      text: String(data.get("text") || "").trim(),
      amount: Number(data.get("amount") || 0),
    });
    els.transactionForm.reset();
    persist("Transaksjon lagt til");
  });

  els.economyForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(els.economyForm);
    state.economyParams = Object.fromEntries(
      Object.keys(defaultState.economyParams).map((key) => [key, Number(data.get(key) || 0)]),
    );
    persist("Økonomiparametre lagret");
  });

  els.settingsForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(els.settingsForm);
    state.settings = {
      asOfDate: data.get("asOfDate"),
      accountOpeningBalance: Number(data.get("accountOpeningBalance") || 0),
      liquidityYear: Number(data.get("liquidityYear") || 2026),
      appliedUpdates: state.settings.appliedUpdates || [],
    };
    persist("Innstillinger lagret");
  });

  els.loginOnline.addEventListener("click", signInOnline);
  els.signupOnline.addEventListener("click", signUpOnline);
  els.logoutOnline.addEventListener("click", logoutOnline);
  els.saveOnline.addEventListener("click", () => saveOnline());
  els.loadOnline.addEventListener("click", loadOnline);

  document.querySelector("#exportJson").addEventListener("click", downloadJson);

  document.querySelector("#importJson").addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const text = await file.text();
    const imported = JSON.parse(text);
    state = {
      settings: { ...defaultState.settings, ...imported.settings },
      bookings: imported.bookings || [],
      transactions: imported.transactions || [],
      economyParams: { ...defaultState.economyParams, ...imported.economyParams },
    };
    selectedBookingId = state.bookings[0]?.id || "";
    persist("Data importert");
    event.target.value = "";
  });

  document.querySelector("#resetData").addEventListener("click", () => {
    state = structuredClone(defaultState);
    selectedBookingId = state.bookings[0].id;
    persist("Data tilbakestilt");
  });
}

bindEvents();
setActiveView(activeView);
render();
initSupabase();

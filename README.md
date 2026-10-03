# Navithya Lanka - Verified Home Services Web Portal 🛠️
> Inspired by  | Sri Lanka's Verified Skilled Tradesmen & Contractor Platform

A complete, self-contained **Single HTML File (`index.html`)** web portal with **Customer Booking & Tracking**, **Ratings & Customer Reviews**, **Sri Lanka & World News Feed**, **Complaints & Dispute Resolution Desk**, **Provider Registration with 2-Month Free Trial & Custom Company Branding**, **Payment Gateway Integration (Weekly / Monthly / Yearly)**, and an **Administrator Panel** with **Firebase (Project: `navithya-ca0e7`)**.

---

## 📞 Official Contacts & WhatsApp
- **Primary WhatsApp**: `0719929453` ([WhatsApp Link](https://wa.me/94719929453))
- **Hotlines**: `0719929453` or `0729929453`
- **Official Email**: `snavithya@gmail.com`

---

## 🌟 New Features & Enhancements

### 1. 🧼 Clean Main Public Navigation Bar
- The main public navigation bar is clean and professional without advertising Admin/Worker buttons in plain sight.
- Navigation items:
  - 🏠 **Home**
  - 🛠️ **Services** (21 categories)
  - ⭐ **Ratings & Reviews**
  - 📰 **SL & World News**
  - 📢 **Complaints & Help**
  - Discrete **Account / Portals** dropdown menu for Customer Tracking, Provider Portal, and Admin Sign In.

### 2. ⭐ Ratings & Customer Reviews Portal
- Verified customer ratings and feedback cards across Sri Lankan districts.
- **"Rate a Technician / Write a Review"** interactive modal to submit 1 to 5 star ratings with feedback.

### 3. 📰 Sri Lanka & World News Feed
- Live updates on:
  - CEB and rooftop solar net-metering expansion.
  - Pre-monsoon plumbing, roofing, and safety guidelines.
  - Global energy-efficient Inverter AC and smart home technologies.
  - Sri Lankan NVQ apprentice and technician certification standards.
- Tag filters: *All News*, *🇱🇰 Sri Lanka & Island*, *💡 Home Tips*, *🌍 World Tech*.
- Interactive reader modal for complete article viewing.

### 4. 📢 Complaints & Dispute Resolution Desk
- Formal complaint lodging form with automatic **Ticket ID** (e.g. `CMP-201`).
- Complaint categories: *Technician Conduct, Poor Workmanship, Billing Dispute, Delay/No-Show, Other*.
- Customers can track complaint resolution status with their phone number.
- Admin can review complaints, update status (*Under Review / Investigating / Resolved*), and reply directly to the customer via WhatsApp.

### 5. 🎁 2 Months Free Trial & Subscription Plans
- Every newly registered technician, contractor, or service company gets **60 Days (2 Months) 100% Free Trial** automatically.
- **Subscription Plans**:
  - **Weekly Flex**: `Rs. 490 / week`
  - **Monthly Pro**: `Rs. 1,490 / month`
  - **Yearly Ultimate**: `Rs. 12,900 / year`
- **Payment Gateway Modal**: Card (Visa/Master), Bank Transfer (Slip Ref), and Mobile Wallets (eZ Cash / Genie) with instant simulation.

### 6. 🏢 Custom Company Name Branding (Whitelabeling)
- When a worker or provider registers with their **Company / Business Name** (e.g. *"Apex Electrical Solutions"* or *"Silva Tech"*), upon login, the entire portal header and dashboard switches from default Navithya to **their Company Name** and verified status.

### 7. 🗑️ Clear System & Record Deletion
- Customers can cancel/delete their booking requests.
- Administrators can delete requests and remove provider accounts anytime.

---

## 🔑 Administrator Panel Access
- Accessible securely via the Account Menu or [`index.html#admin`](file:///J:/navithya/index.html#admin).
- **Username**: `admin`
- **Password**: `admin`
- Manage bookings, assign providers, verify NIC badges, manage subscriptions, investigate complaints, and dispatch WhatsApp notifications.

---

## 🔥 Firebase Configuration

Connected with your Firebase project:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyDMVxd4yyprLIUlszbAnPN7L02KE5Sfb0s",
  authDomain: "navithya-ca0e7.firebaseapp.com",
  projectId: "navithya-ca0e7",
  storageBucket: "navithya-ca0e7.firebasestorage.app",
  messagingSenderId: "44611390829",
  appId: "1:44611390829:web:3497a4732c6614e9101e64",
  measurementId: "G-63GNZXPXBF"
};
```

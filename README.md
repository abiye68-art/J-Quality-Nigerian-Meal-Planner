# J Quality Nigerian Meal Planner

**J Quality Nigerian Meal Planner** is a premium, web-based application designed to generate diverse and authentic Nigerian meal plans. It includes a robust monetization system, a rich database of over 70 recipes, and a user-friendly interface.

## 🌟 Key Features

### 1. 🥘 Intelligent Meal Generation
- **Randomized Selections:** Automatically generates unique combinations for **Breakfast**, **Lunch**, **Dinner**, and **Cocktails**.
- **Smart Date Tracking:** Displays the current date and day of the week.
- **Shopping List:** Automatically generates a shopping list based on the ingredients of the selected meals.
- **Copy to Clipboard:** One-click button to copy the entire plan and shopping list to share via WhatsApp or Notes.

### 2. 📚 Extensive Recipe Database (70+ Items)
- **Classic Staples:** Jollof Rice, Pounded Yam, Egusi, Eba, Fried Rice, etc.
- **Regional Specialties:**
  - **Rivers State:** Native Soup, Onunu & Fresh Fish Stew.
  - **Calabar/Akwa Ibom:** Edikang Ikong, Afang Soup, Ekpang Nkukwo.
  - **Imo State:** Ofe Owerri, Ofe Akwu.
  - **Ogun State:** Ikokore, Ofada Rice.
  - **Northern:** Tuwo Shinkafa, Miyan Kuka.
- **Cocktails:** Lagos Island Iced Tea, Chapman, Zobo, Palm Wine, etc.

### 3. 📖 Interactive Recipe View
- **Step-by-Step Guides:** Users can click "View Recipe" on any card to see detailed cooking instructions.
- **Ingredient Lists:** Shows all necessary ingredients for each dish.

### 4. 💰 Monetization & Subscription System
This app is built to be a profitable product with a built-in trial and subscription model.

#### Phase 1: Free Trial (Acquisition)
- **14-Day Free Access:** New users get 14 days of free access immediately.
- **Email Capture:** Users must enter their email to start the trial.
- **Lead Storage:** Emails are sent to your **Formspree** account (`mdalabrg`) for marketing.

#### Phase 2: Expiration (Conversion)
- **Automatic Lockout:** After 14 days, the app automatically locks.
- **Paywall:** A "Trial Expired" screen appears, blocking access to the planner.
- **Payment Link:** Prompts user to subscribe for **£5/month** via PayPal (`PayPal.Me/jqualitymeal/5GBP`).

#### Phase 3: Activation (Retention)
- **Manual Passcode System:** Since the app runs offline, it uses a secure passcode system.
- **Workflow:**
  1. User pays £5.
  2. You email them a code (e.g., `MEAL30`).
  3. They enter the code in the app.
  4. App unlocks for **30 days**.
- **Admin Codes:** Valid codes currently hardcoded: `MEAL30`, `JQUALITY2024`, `SUB-JUNE`.

## 🛠️ Technical Details
- **Stack:** HTML5, CSS3 (Modern Variables & Flexbox), Vanilla JavaScript.
- **Storage:** Uses browser `localStorage` to track trial dates and subscription status (No database required).
- **Deployment:** Zero-setup. Runs directly from `index.html` or the ZIP file.

## 🚀 How to Use
1. Unzip the folder.
2. Double-click `index.html`.
3. Enter email to start trial.
4. Click "Generate Menu" to plan your day!

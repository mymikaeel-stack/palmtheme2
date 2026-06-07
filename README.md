# 🌴 Palm — Website

Palm Club Collection · UAE / KSA · SS26

---

## Project Structure

```
palm-website/
├── index.html        ← Coming Soon / Home page
├── about.html        ← Brand story page
├── contact.html      ← Contact page
├── css/
│   └── style.css     ← All styles
├── js/
│   └── main.js       ← All interactions
└── images/           ← Drop your product photos here
```

---

## How to Get This Live (Step by Step)

### Step 1 — Create a GitHub Account
Go to [github.com](https://github.com) and sign up for free.

### Step 2 — Create a New Repository
1. Click the **+** button (top right) → **New repository**
2. Name it `palm-website`
3. Set it to **Public**
4. Click **Create repository**

### Step 3 — Upload Your Files
1. On your new repo page, click **uploading an existing file**
2. Drag and drop ALL the files and folders:
   - `index.html`
   - `about.html`
   - `contact.html`
   - The entire `css/` folder
   - The entire `js/` folder
   - The entire `images/` folder
3. Click **Commit changes**

### Step 4 — Enable GitHub Pages (Free Hosting)
1. Go to your repo → **Settings** tab
2. Scroll to **Pages** in the left sidebar
3. Under **Source**, select **Deploy from a branch**
4. Set branch to `main`, folder to `/ (root)`
5. Click **Save**

### Step 5 — Your Site is Live 🎉
Within 1–2 minutes your site will be live at:
```
https://YOUR-USERNAME.github.io/palm-website/
```

---

## How to Edit Your Website

### Change text / content
Open any `.html` file in a text editor (Notepad, VS Code, etc.), edit the text, save, and re-upload to GitHub.

### Change colors
Open `css/style.css` and edit the variables at the top:
```css
:root {
  --black: #0a0a0a;
  --cream: #f5f0e8;
  --accent: #c9b99a;   ← this is the gold color
}
```

### Add your real product image
Replace the embedded image by:
1. Put your photo in the `images/` folder (e.g. `images/collection.jpg`)
2. In `index.html`, find the `<img src="data:image/jpeg;base64,...">` tag
3. Replace it with: `<img src="images/collection.jpg" alt="Palm Club Collection">`

### Add your real Instagram/TikTok links
Search for `href="#"` in the HTML files and replace with your actual profile URLs.

### Update contact details
In `contact.html`, find:
- `hello@palmclub.ae` → replace with your email
- `+971 XX XXX XXXX` → replace with your WhatsApp number

---

## Connecting a Custom Domain (e.g. palmclub.ae)

1. Buy your domain at [GoDaddy](https://godaddy.com) or [Namecheap](https://namecheap.com)
   - Note: `.ae` domains require a UAE trade license. Use `.com` if you don't have one yet.
2. In GitHub Pages settings, enter your domain under **Custom domain**
3. At your domain registrar, add these DNS records:
   ```
   Type: A     Name: @    Value: 185.199.108.153
   Type: A     Name: @    Value: 185.199.109.153
   Type: A     Name: @    Value: 185.199.110.153
   Type: A     Name: @    Value: 185.199.111.153
   Type: CNAME Name: www  Value: YOUR-USERNAME.github.io
   ```
4. Wait 24 hours for DNS to propagate

---

## Collecting Waitlist Emails (Real Submissions)

The forms currently show a success message but don't store emails. To actually collect them:

**Free option — Formspree:**
1. Go to [formspree.io](https://formspree.io) and sign up free
2. Create a new form, copy your form endpoint (looks like `https://formspree.io/f/xxxxxxxx`)
3. In `index.html`, find the notify form and add: `action="YOUR_FORMSPREE_URL" method="POST"`
4. Every submission goes straight to your email inbox

---

## When You're Ready to Sell

Move to **Shopify** for payments. Your GitHub site can link directly to your Shopify store, or you can migrate the whole design there. Ask for help when you're ready.

---

🌴 Palm Club — UAE / KSA

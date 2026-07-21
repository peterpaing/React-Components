# React Component Library

A reusable React component library built with modern React practices. This project demonstrates the creation of customizable UI components such as Badges, Banners, Cards, and Testimonials.

## 📸 Components

### 🏷️ Badges

A small status or label component with multiple color variants and styles.

#### Features

- Multiple color themes
  - Gray (default)
  - Red
  - Yellow
  - Green
  - Blue
  - Indigo
  - Purple
  - Pink
- Two styles
  - Square (default)
  - Pill

#### Usage

```jsx
<Badges>Default</Badges>

<Badges color="green">
    Success
</Badges>

<Badges style="pill" color="blue">
    New
</Badges>
```

---

### 📢 Banner

Displays informational, success, warning, or error messages.

#### Features

- Four banner statuses
  - Success
  - Warning
  - Error
  - Neutral (default)
- Supports optional description text

#### Usage

Without description:

```jsx
<Banner
    text="Congratulations!"
    status="success"
/>
```

With description:

```jsx
<Banner
    text="Update available"
>
    A new software update is available. Please restart the application.
</Banner>
```

---

### 🃏 Cards

A reusable feature card component.

#### Features

- Heading
- Description using children

#### Usage

```jsx
<Cards heading="Easy Deployment">
    Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
</Cards>
```

---

### 💬 Testimonials

Displays customer testimonials with optional user image.

#### Features

- User name
- Job title
- Optional avatar image
- Testimonial content

#### Usage

With image:

```jsx
import userImage from "./assets/UserImg.png";

<Testimonials
    name="May Anderson"
    job="Workcation, CTO"
    image={userImage}
>
    Lorem ipsum dolor sit amet...
</Testimonials>
```

Without image:

```jsx
<Testimonials
    name="May Anderson"
    job="Workcation, CTO"
>
    Lorem ipsum dolor sit amet...
</Testimonials>
```

---

## 📁 Project Structure

```
src/
│
├── components/
│   ├── Badges.jsx
│   ├── Banner.jsx
│   ├── Cards.jsx
│   ├── Testimonials.jsx
│   └── Main.jsx
│
├── assets/
│   └── UserImg.png
│
├── App.jsx
└── main.jsx
```

---

## 🚀 Getting Started

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

---

## 🛠️ Technologies Used

- React
- JavaScript (ES6+)
- CSS
- Vite

---

## 🎨 Component Preview

The `Main.jsx` file demonstrates all available component variants:

- Badge colors
- Badge pill style
- Banner variants
- Banner with and without descriptions
- Feature card
- Testimonial with image
- Testimonial without image

---

## 📌 Props

### Badges

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | — | Badge content |
| color | string | `"gray"` | Badge color theme |
| style | string | `"square"` | `"square"` or `"pill"` |

---

### Banner

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| text | string | — | Banner title |
| status | string | `"neutral"` | success, warning, error, or neutral |
| children | ReactNode | — | Optional description |

---

### Cards

| Prop | Type | Description |
|------|------|-------------|
| heading | string | Card title |
| children | ReactNode | Card description |

---

### Testimonials

| Prop | Type | Description |
|------|------|-------------|
| name | string | Customer name |
| job | string | Customer position |
| image | string | Optional avatar |
| children | ReactNode | Testimonial text |

---

## ✨ Future Improvements

- TypeScript support
- Storybook integration
- Unit testing with Jest and React Testing Library
- Dark mode
- More component variants
- Accessibility improvements

---

## 📄 License

This project is open source and available under the MIT License.
## Next.js LMS Platform (SKILLORA)

A modern Learning Management System (LMS) built with Next.js 13, TypeScript, Tailwind CSS, Prisma, and Clerk authentication.

### Features

- User authentication (Clerk)
- Course creation, browsing, and purchase
- Chapter management with video support (Mux)
- User progress tracking
- Analytics dashboard for teachers
- File uploads (UploadThing)
- Stripe payments integration
- Responsive UI with dashboard and landing pages
- Category-based course search
- Modern UI components (Radix, custom)

### Tech Stack

- Next.js 13 (App Router)
- TypeScript
- Tailwind CSS
- Prisma ORM & PostgreSQL
- Clerk (Auth)
- Stripe (Payments)
- Mux (Video)
- UploadThing (File uploads)

### Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Configure environment variables:**
   - Create a `.env` file with required keys (see Clerk, Stripe, Mux, UploadThing docs).
3. **Set up database:**
   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```
4. **Run the development server:**
   ```bash
   npm run dev
   ```

### Folder Structure

- `app/` - Main application (pages, layouts, API routes)
- `components/` - Reusable UI and logic components
- `lib/` - Utility functions and database setup
- `prisma/` - Database schema and migrations
- `public/` - Static assets (images, etc.)

### License

This project is for learning and demo purposes.

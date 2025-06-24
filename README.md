# Bookshelf

A modern, full-stack bookshelf application built with Next.js, Drizzle ORM, NextAuth.js, and Tailwind CSS. Bookshelf allows users to browse, search, and manage a collection of books, with dedicated admin features for managing inventory and book details.

## Features

- 📚 **Book Catalog**: Browse, search, and view detailed information about books.
- 🔐 **Authentication**: Secure sign-in and sign-up with NextAuth.js.
- 🛠️ **Admin Dashboard**: Add, edit, and manage books and inventory (admin-only).
- 🖼️ **Image Uploads**: Upload and manage book covers with ImageKit integration.
- 📝 **Book Summaries**: Each book includes a description, author, genre, rating, and summary.
- 🎨 **Customizable UI**: Built with Tailwind CSS and custom fonts for a modern look.
- ⚡ **API Routes**: RESTful endpoints for authentication, image handling, and workflows.
- 🗄️ **Database**: Managed with Drizzle ORM and migrations for schema consistency.
- 🚦 **Rate Limiting**: Protects API endpoints from abuse.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Database ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/)
- **Image Management**: [ImageKit](https://imagekit.io/)
- **State & Utilities**: React Context, custom hooks, and utility libraries

## Directory Structure

```
app/
  (auth)/         # Authentication pages (sign-in, sign-up)
  (root)/         # Main app pages (profile, home)
  admin/          # Admin dashboard and book management
  api/            # API routes (auth, imagekit, workflows)
components/
  admin/          # Admin-specific UI components
  ui/             # Reusable UI components (button, input, toast, etc.)
constants/        # Static data and configuration
database/         # Drizzle ORM setup and schema
lib/              # Business logic, actions, and utilities
public/           # Static assets (images, icons, books.json)
styles/           # Custom CSS
```

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

2. **Set up environment variables:**

   - Copy `.env.example` to `.env.local` and fill in the required values (database URL, NextAuth secrets, ImageKit keys, etc.).

3. **Run database migrations:**

   ```bash
   npm run db:migrate
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

5. **Open the app:**
   - Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build for production
- `npm run start` — Start the production server
- `npm run lint` — Run ESLint
- `npm run db:migrate` — Run database migrations
- `npm run db:studio` — Open Drizzle Studio for DB management

## Deployment

Deploy easily on [Vercel](https://vercel.com/) or your preferred platform. See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contributing

Contributions are welcome! Please open issues or pull requests for improvements, bug fixes, or new features.

## License

[MIT](LICENSE) (or specify your license here)

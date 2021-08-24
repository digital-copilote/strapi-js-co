module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env(
          "DATABASE_HOST",
          "strapi-db-do-user-9478401-0.b.db.ondigitalocean.com"
        ),
        port: env.int("DATABASE_PORT", 25060),
        database: env("DATABASE_NAME", "defaultdb"),
        username: env("DATABASE_USERNAME", "doadmin"),
        password: env("DATABASE_PASSWORD", "esnf5ok9ttkzonyn"),
        schema: env("DATABASE_SCHEMA", "public"), // Not Required
        ssl: {
          rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
        },
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});

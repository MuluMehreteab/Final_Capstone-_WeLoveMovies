const path = require("path");

require("dotenv").config();

const {
  DATABASE_URL = "postgres://dev_bj4i_user:jecuANIFXFDoNeW7lINdkkgvo2rrVFq5@dpg-cqjvksggph6c739fcc3g-a.ohio-postgres.render.com/dev_bj4i?ssl=true",
} = process.env;

const knex = require("knex")(config);

module.exports = {
  development: {
    client: "postgresql",
    connection: DATABASE_URL,
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    ssl: {
      rejectUnauthorized: false // This will allow connections without requiring SSL certificates to be valid.
    }
  },

  production: {
    client: "postgresql",
    connection: DATABASE_URL,
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    ssl: {
      rejectUnauthorized: false // This will allow connections without requiring SSL certificates to be valid.
    }
  },

  test: {
    client: "sqlite3",
    connection: {
      filename: ":memory:",
    },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    useNullAsDefault: true,
  },
};

module.exports={
      client: "postgresql",
      //  connection: {
      //     host: 'db.lyltdrbhkshmrtpygmvd.supabase.co',
      //     user: 'postgres',
      //     password: '3yi4T87RL0gkqd1n',
      //     database: 'postgres',
      //   },
        connection:'postgresql://postgres:3yi4T87RL0gkqd1n@db.lyltdrbhkshmrtpygmvd.supabase.co:5432/postgres?pgbouncer=true&connection_limit=1',
        migrations: {
          directory: './migrations',
        },
        pool: {
          min: 0,
          max: 20,
          propagateCreateError: false
        },
      }
  
/**@type {import("drizzle-kit").Config} */
export default {
    schema:"./utils/schema.tsx",
    dialect:'postgresql',
    dbCredentials:{
        url: 'postgresql://Scriptify_owner:npg_yJwm45sEuWUl@ep-sparkling-sea-a83n3ygy-pooler.eastus2.azure.neon.tech/Scriptify?sslmode=require'
    }
}
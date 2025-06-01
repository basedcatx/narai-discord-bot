import { jsonb, pgTable, text } from 'drizzle-orm/pg-core';

const GuildSettingsSchema = pgTable('guild_settings', {
  id: text('id').notNull().primaryKey(),
  config: jsonb('config').$type<GuildConfig>().default({}),
});

export default GuildSettingsSchema;

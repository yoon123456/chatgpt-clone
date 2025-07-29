import { relations } from "drizzle-orm";
import { uuid, text, timestamp, pgTable } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
	id: uuid("id").defaultRandom().notNull().primaryKey(),
	name: text("name").notNull(),
	email: text("email").notNull().unique(),
	password: text("password").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const userRelations = relations(user, ({ many }) => ({
	conversations: many(conversation),
}));

export const conversation = pgTable("conversation", {
	id: uuid("id").defaultRandom().notNull().primaryKey(),
	name: text("name"),
	userId: uuid("user_id")
		.references(() => user.id, { onDelete: "cascade" })
		.notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const converstionRelations = relations(
	conversation,
	({ one, many }) => ({
		user: one(user, {
			fields: [conversation.userId],
			references: [user.id],
		}),
		messages: many(message),
	})
);

export const message = pgTable("message", {
	id: uuid("id").defaultRandom().notNull().primaryKey(),
	content: text("content"),
	role: text("role").$type<"user" | "assistance">(),
	conversationId: uuid("conversation_id")
		.references(() => conversation.id, { onDelete: "cascade" })
		.notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const messageRelations = relations(message, ({ one }) => ({
	conversatio: one(message, {
		fields: [message.conversationId],
		references: [message.id],
	}),
}));

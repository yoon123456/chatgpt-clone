ALTER TABLE "message" RENAME COLUMN "conversationId" TO "conversation_id";--> statement-breakpoint
ALTER TABLE "message" DROP CONSTRAINT "message_conversationId_user_id_fk";
--> statement-breakpoint
ALTER TABLE "message" ADD CONSTRAINT "message_conversation_id_user_id_fk" FOREIGN KEY ("conversation_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
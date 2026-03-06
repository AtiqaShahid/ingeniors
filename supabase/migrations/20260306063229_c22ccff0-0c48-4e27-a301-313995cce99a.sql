CREATE TABLE public.chat_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_message text NOT NULL,
  ai_response text NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.chat_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert chat logs" ON public.chat_logs FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can read chat logs" ON public.chat_logs FOR SELECT USING (true);
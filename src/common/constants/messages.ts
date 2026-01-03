export const MESSAGES = {
  user_not_found: 'User not found',
  invalid_token: 'Invalid authentication token',
  welcome: 'Welcome, {name}!',
  internal_error: 'An internal error occurred',
} as const;

export type MessageKey = keyof typeof MESSAGES;

export function resolveMessage(
  key: MessageKey,
  params?: Record<string, string>,
) {
  let msg = MESSAGES[key];
  if (!params) return msg;
  Object.entries(params).forEach(([k, v]) => {
    msg = msg.replace(new RegExp(`\\{${k}\\}`, 'g'), v) as typeof msg;
  });
  return msg;
}

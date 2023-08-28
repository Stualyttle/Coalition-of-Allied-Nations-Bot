import { actionPrefix } from './index';
import { GuildChannel } from 'discord.js';

// This file's prefix
const prefix: string = actionPrefix + 'onClientReady.';

// The execute function
export async function onChannelCreate(channel: GuildChannel): Promise<void> {
  // All actions that should be executed
  const actions: Promise<() => void>[] = [];

  // If no actions, return
  if (actions.length < 1) return;

  // Execute all actions
  await Promise.all(actions);
}

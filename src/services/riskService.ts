/**
 * Risk Service
 * Handles all risk-related API calls
 */

import { apiClient } from '@/lib/api/client';
import type { RiskStatus } from '@/lib/api/types';

/**
 * Fetches current risk status
 */
export async function fetchRiskStatus(): Promise<RiskStatus> {
  return await apiClient.get<RiskStatus>('/api/risk');
}

/**
 * Mutes the buzzer
 * CORRECCIÓN: Usamos el endpoint de /api/risk/mute que devuelve RiskStatus actualizado
 */
export async function muteBuzzer(): Promise<RiskStatus> {
  return await apiClient.post<RiskStatus>('/api/risk/mute', { muted: true });
}

/**
 * Stops the buzzer and resets system to normal
 * CORRECCIÓN: Usamos el endpoint de /api/risk/mute que devuelve RiskStatus actualizado
 */
export async function stopBuzzer(): Promise<RiskStatus> {
  return await apiClient.post<RiskStatus>('/api/risk/mute', { muted: false });
}


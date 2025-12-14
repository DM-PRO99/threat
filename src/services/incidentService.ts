/**
 * Incident Service
 * Handles all incident-related API calls
 */

import { apiClient } from '@/lib/api/client';
import type {
  IncidentSummary,
  IncidentDetail,
  IncidentInsight,
} from '@/lib/api/types';

/**
 * Fetches list of incident summaries
 * NOTE: Backend doesn't have /api/incidents endpoint yet
 * This function should be removed when backend implements the endpoint
 */
export async function fetchIncidents(): Promise<IncidentSummary[]> {
  // Backend doesn't have this endpoint - remove when available
  throw new Error('Backend endpoint /api/incidents not implemented yet');
}

/**
 * Fetches detailed information for a specific incident
 * NOTE: Backend doesn't have /api/incidents/{id} endpoint yet
 */
export async function fetchIncidentDetail(id: number): Promise<IncidentDetail> {
  // Backend doesn't have this endpoint - remove when available
  throw new Error('Backend endpoint /api/incidents/{id} not implemented yet');
}

/**
 * Fetches AI insight for a specific incident
 * This endpoint IS implemented in the backend
 */
export async function fetchIncidentInsight(
  id: number
): Promise<IncidentInsight> {
  return await apiClient.get<IncidentInsight>(`/api/incidents/${id}/insights`);
}


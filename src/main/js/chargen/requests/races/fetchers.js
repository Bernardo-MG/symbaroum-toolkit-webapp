import { Fetcher } from 'api/fetch';

const RACES_REST_ENDPOINT = '/rest/chargen/races';

export const racesFetcher = new Fetcher(RACES_REST_ENDPOINT);

import { Fetcher } from 'api/fetch';

const ABILITIES_REST_ENDPOINT = '/rest/chargen/abilities';

export const abilitiesFetcher = new Fetcher(ABILITIES_REST_ENDPOINT);

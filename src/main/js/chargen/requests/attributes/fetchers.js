import { Fetcher } from 'api/fetch';

const DERIVED_ATTRIBUTES_REST_ENDPOINT = '/rest/chargen/attributes/derived';

export const derivedAttributesFetcher = new Fetcher(DERIVED_ATTRIBUTES_REST_ENDPOINT);

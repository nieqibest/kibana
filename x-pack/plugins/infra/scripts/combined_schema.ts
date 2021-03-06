/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { buildSchemaFromTypeDefinitions } from 'graphql-tools';

import { schemas as serverSchemas } from '../server/graphql';

export const schemas = [...serverSchemas];

// this default export is used to feed the combined types to the gql-gen tool
// which generates the corresponding typescript types
// tslint:disable-next-line:no-default-export
export default buildSchemaFromTypeDefinitions(schemas);

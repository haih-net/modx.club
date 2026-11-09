import { logStatistics } from '../statistics'
import ScopeAuthPlugin from '@pothos/plugin-scope-auth'
import SimpleObjectsPlugin from '@pothos/plugin-simple-objects'
import type { Request } from 'express'
import SchemaBuilder from '@pothos/core'
import { DateTimeResolver, JSONResolver } from 'graphql-scalars'

export interface Context {
  req: Request
}

const builder = new SchemaBuilder<{
  Context: Context
  Scalars: {
    DateTime: {
      Input: Date
      Output: Date
    }
    Json: {
      Input: unknown
      Output: unknown
    }
  }
}>({
  plugins: [ScopeAuthPlugin, SimpleObjectsPlugin],
  scopeAuth: { authScopes: () => ({}) },
})

builder.addScalarType('DateTime', DateTimeResolver)
builder.addScalarType('Json', JSONResolver)

builder.queryType({
  fields: (t) => ({
    health: t.string({
      resolve: () => 'ok',
    }),
  }),
})

const SiteStatistic = builder
  .objectRef<{ id: string }>('SiteStatistic')
  .implement({
    fields: (t) => ({ id: t.exposeString('id') }),
  })

builder.mutationType({
  fields: (t) => ({
    logStats: t.field({
      type: [SiteStatistic],
      nullable: true,
      args: { data: t.arg({ type: 'Json', required: true }) },
      resolve: (_root, { data }, ctx) => logStatistics(data, ctx.req, null),
    }),
  }),
})

export const staticSchema = builder.toSchema()

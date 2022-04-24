import { DefaultNamingStrategy } from 'typeorm';

export default class NamingStrategy extends DefaultNamingStrategy {
  eagerJoinRelationAlias(alias: string, propertyPath: string): string {
    const out = `${alias}_${propertyPath.replace('.', '_')}`;
    const match = out.match(/_/g) || [];
    return out + match.length;
  }
}
